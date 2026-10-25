import { getVercelOidcToken } from "@vercel/oidc";

const SITE_ID =
  "oneillmechanical.sharepoint.com,3852449a-e99d-4f8d-8ae6-8e741967f754,b92ed00c-31b7-4d35-8041-1e0d38e79230";

const LIST_ID =
  "619d8a38-b576-43d5-9f9c-095ede1b56d4";

const VALID_SERVICES = [
  "Plumbing",
  "Re-Pipes",
  "Hot Water Tanks",
  "Boilers",
  "Drainage",
  "Backflows",
  "Inspections",
];

const VALID_URGENCY = ["Normal", "Urgent"];

const VALID_CONTACT_METHODS = ["Phone", "Email"];

type ServiceRequestBody = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  serviceAddress?: unknown;
  service?: unknown;
  urgency?: unknown;
  preferredContact?: unknown;
  message?: unknown;
  turnstileToken?: unknown;
};

type TurnstileVerificationResponse = {
  success: boolean;
  hostname?: string;
  "error-codes"?: string[];
};

type EntraTokenResponse = {
  access_token?: string;
  error?: string;
  error_description?: string;
};

type GraphResponse = {
  id?: string;
  error?: unknown;
};

function cleanText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  if (phone.includes("@")) {
    return false;
  }

  if (!/^[0-9+\-().\s]+$/.test(phone)) {
    return false;
  }

  const digitsOnly = phone.replace(/\D/g, "");

  return digitsOnly.length >= 10 && digitsOnly.length <= 15;
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";

    if (!contentType.includes("application/json")) {
      return Response.json(
        {
          success: false,
          error: "The request must contain JSON data.",
        },
        { status: 415 }
      );
    }

    const body = (await request.json()) as ServiceRequestBody;

    const name = cleanText(body.name);
    const phone = cleanText(body.phone);
    const email = cleanText(body.email).toLowerCase();
    const serviceAddress = cleanText(body.serviceAddress);
    const service = cleanText(body.service);
    const urgency = cleanText(body.urgency);
    const preferredContact = cleanText(body.preferredContact);
    const message = cleanText(body.message);
    const turnstileToken = cleanText(body.turnstileToken);

    if (!name) {
      return Response.json(
        {
          success: false,
          field: "name",
          error: "Please enter your name.",
        },
        { status: 400 }
      );
    }

    if (name.length < 2 || name.length > 100) {
      return Response.json(
        {
          success: false,
          field: "name",
          error: "Please enter a valid name.",
        },
        { status: 400 }
      );
    }

    if (!phone) {
      return Response.json(
        {
          success: false,
          field: "phone",
          error: "Please enter your phone number.",
        },
        { status: 400 }
      );
    }

    if (!isValidPhone(phone)) {
      return Response.json(
        {
          success: false,
          field: "phone",
          error:
            "Please enter a valid phone number containing 10 to 15 digits.",
        },
        { status: 400 }
      );
    }

    if (!email) {
      return Response.json(
        {
          success: false,
          field: "email",
          error: "Please enter your email address.",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email) || email.length > 255) {
      return Response.json(
        {
          success: false,
          field: "email",
          error: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    if (!serviceAddress) {
      return Response.json(
        {
          success: false,
          field: "serviceAddress",
          error: "Please enter the service address.",
        },
        { status: 400 }
      );
    }

    if (serviceAddress.length < 5 || serviceAddress.length > 255) {
      return Response.json(
        {
          success: false,
          field: "serviceAddress",
          error: "Please enter a valid service address.",
        },
        { status: 400 }
      );
    }

    if (!VALID_SERVICES.includes(service)) {
      return Response.json(
        {
          success: false,
          field: "service",
          error: "Please select a valid service.",
        },
        { status: 400 }
      );
    }

    if (!VALID_URGENCY.includes(urgency)) {
      return Response.json(
        {
          success: false,
          field: "urgency",
          error: "Please select a valid urgency.",
        },
        { status: 400 }
      );
    }

    if (!VALID_CONTACT_METHODS.includes(preferredContact)) {
      return Response.json(
        {
          success: false,
          field: "preferredContact",
          error: "Please select a valid preferred contact method.",
        },
        { status: 400 }
      );
    }

    if (!message) {
      return Response.json(
        {
          success: false,
          field: "message",
          error: "Please describe how ONeill Mechanical can help.",
        },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 5000) {
      return Response.json(
        {
          success: false,
          field: "message",
          error:
            "Your description must contain between 10 and 5,000 characters.",
        },
        { status: 400 }
      );
    }

    if (!turnstileToken) {
      return Response.json(
        {
          success: false,
          field: "turnstile",
          error: "Please complete the security verification.",
        },
        { status: 400 }
      );
    }

    const turnstileSecretKey =
      process.env.TURNSTILE_SECRET_KEY;

    if (!turnstileSecretKey) {
      console.error(
        "TURNSTILE_SECRET_KEY environment variable is missing."
      );

      return Response.json(
        {
          success: false,
          error: "The security verification system is not configured.",
        },
        { status: 500 }
      );
    }

    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: turnstileSecretKey,
          response: turnstileToken,
        }),
      }
    );

    const turnstileResult =
      (await turnstileResponse.json()) as TurnstileVerificationResponse;

    if (!turnstileResponse.ok || !turnstileResult.success) {
      console.error(
        "Turnstile verification failed:",
        turnstileResult["error-codes"] ?? []
      );

      return Response.json(
        {
          success: false,
          field: "turnstile",
          error:
            "Security verification failed. Please complete the verification again.",
        },
        { status: 400 }
      );
    }

    const allowedHostnames = [
      "oneillmechanical.ca",
      "oneillmechanical-website.vercel.app",
    ];

    if (
      !turnstileResult.hostname ||
      !allowedHostnames.includes(turnstileResult.hostname)
    ) {
      console.error(
        "Unexpected Turnstile hostname:",
        turnstileResult.hostname
      );

      return Response.json(
        {
          success: false,
          field: "turnstile",
          error: "Security verification failed.",
        },
        { status: 400 }
      );
    }

    const tenantId = process.env.AZURE_TENANT_ID;
    const clientId = process.env.AZURE_CLIENT_ID;

    if (!tenantId || !clientId) {
      console.error("Azure environment variables are missing.");

      return Response.json(
        {
          success: false,
          error: "The service request system is not configured.",
        },
        { status: 500 }
      );
    }

    const vercelAssertion = await getVercelOidcToken({
      audience: "api://AzureADTokenExchange",
    });

    const tokenResponse = await fetch(
      `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          client_id: clientId,
          scope: "https://graph.microsoft.com/.default",
          grant_type: "client_credentials",
          client_assertion_type:
            "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
          client_assertion: vercelAssertion,
        }),
      }
    );

    const tokenResult =
      (await tokenResponse.json()) as EntraTokenResponse;

    if (!tokenResponse.ok || !tokenResult.access_token) {
      console.error(
        "Microsoft Entra token exchange failed:",
        tokenResult.error,
        tokenResult.error_description
      );

      return Response.json(
        {
          success: false,
          error: "The service request could not be submitted.",
        },
        { status: 500 }
      );
    }

    const accessToken = tokenResult.access_token;

    const requestReference = `WEB-${Date.now()}`;
    const title = `${requestReference} - ${name}`;

    const graphResponse = await fetch(
      `https://graph.microsoft.com/v1.0/sites/${SITE_ID}/lists/${LIST_ID}/items`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            Title: title,
            CustomerName: name,
            PhoneNumber: phone,
            EmailAddress: email,
            ServiceAddress: serviceAddress,
            ServiceType: service,
            RequestDescription: message,
            RequestStatus: "New",
            RequestUrgency: urgency,
            ContactPreference: preferredContact,
            NextAction:
              "Review new website service request",
            InternalNotes:
              "Submitted through oneillmechanical.ca.",
          },
        }),
      }
    );

    const result =
      (await graphResponse.json()) as GraphResponse;

    if (!graphResponse.ok) {
      console.error(
        "SharePoint service request creation failed:",
        result.error
      );

      return Response.json(
        {
          success: false,
          error: "The service request could not be saved.",
        },
        { status: 502 }
      );
    }

    return Response.json(
      {
        success: true,
        message:
          "Your service request has been submitted successfully.",
        requestReference,
        itemId: result.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "Service request submission failed:",
      error
    );

    return Response.json(
      {
        success: false,
        error:
          "Something went wrong while submitting the service request.",
      },
      { status: 500 }
    );
  }
}
import { ClientAssertionCredential } from "@azure/identity";
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

type ServiceRequestBody = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  serviceAddress?: unknown;
  service?: unknown;
  message?: unknown;
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
    const message = cleanText(body.message);

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

    const credential = new ClientAssertionCredential(
      tenantId,
      clientId,
      () =>
        getVercelOidcToken({
          audience: "api://AzureADTokenExchange",
        })
    );

    const accessToken = await credential.getToken(
      "https://graph.microsoft.com/.default"
    );

    if (!accessToken) {
      console.error("Microsoft Graph access token was not returned.");

      return Response.json(
        {
          success: false,
          error: "The service request could not be submitted.",
        },
        { status: 500 }
      );
    }

    const requestReference = `WEB-${Date.now()}`;
    const title = `${requestReference} - ${name}`;

    const graphResponse = await fetch(
      `https://graph.microsoft.com/v1.0/sites/${SITE_ID}/lists/${LIST_ID}/items`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken.token}`,
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
            RequestUrgency: "Normal",
            NextAction: "Review new website service request",
            InternalNotes: "Submitted through oneillmechanical.ca.",
          },
        }),
      }
    );

    const result = await graphResponse.json();

    if (!graphResponse.ok) {
      console.error(
        "SharePoint service request creation failed:",
        result
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
        message: "Your service request has been submitted successfully.",
        requestReference,
        itemId: result.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Service request submission failed:", error);

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
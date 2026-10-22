import { ClientAssertionCredential } from "@azure/identity";
import { getVercelOidcToken } from "@vercel/oidc";

const SITE_ID =
  "oneillmechanical.sharepoint.com,3852449a-e99d-4f8d-8ae6-8e741967f754,b92ed00c-31b7-4d35-8041-1e0d38e79230";

const LIST_ID =
  "619d8a38-b576-43d5-9f9c-095ede1b56d4";

export async function GET() {
  try {
    const tenantId = process.env.AZURE_TENANT_ID;
    const clientId = process.env.AZURE_CLIENT_ID;

    if (!tenantId || !clientId) {
      return Response.json(
        {
          success: false,
          error: "Azure environment variables are missing.",
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
      return Response.json(
        {
          success: false,
          error: "Microsoft Graph access token was not returned.",
        },
        { status: 500 }
      );
    }

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
            Title: "API-TEST",
            CustomerName: "Website API Test",
            PhoneNumber: "2505550100",
            EmailAddress: "test@example.com",
            ServiceAddress: "123 API Test Street",
            ServiceType: "Plumbing",
            RequestDescription:
              "Test request created by the ONeill Mechanical Next.js API.",
            RequestStatus: "New",
            RequestUrgency: "Normal",
            ContactPreference: "Email",
            NextAction: "Verify API test record",
            InternalNotes:
              "Controlled integration test. Not a real customer request.",
          },
        }),
      }
    );

    const result = await graphResponse.json();

    if (!graphResponse.ok) {
      console.error("SharePoint write failed:", result);

      return Response.json(
        {
          success: false,
          error: "SharePoint test record could not be created.",
        },
        { status: graphResponse.status }
      );
    }

    return Response.json({
      success: true,
      message: "Test Service Request created successfully.",
      itemId: result.id,
    });
  } catch (error) {
    console.error("Service Request API test failed:", error);

    return Response.json(
      {
        success: false,
        error: "Service Request API test failed.",
      },
      { status: 500 }
    );
  }
}
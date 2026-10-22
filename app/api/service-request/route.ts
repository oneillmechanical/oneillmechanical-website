import { ClientAssertionCredential } from "@azure/identity";
import { getVercelOidcToken } from "@vercel/oidc";

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

    return Response.json({
      success: true,
      message: "Vercel OIDC authentication with Microsoft Entra succeeded.",
    });
  } catch (error) {
    console.error("OIDC authentication test failed:", error);

    return Response.json(
      {
        success: false,
        error: "OIDC authentication failed.",
      },
      { status: 500 }
    );
  }
}
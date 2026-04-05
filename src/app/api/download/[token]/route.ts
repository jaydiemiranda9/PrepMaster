import { NextResponse } from "next/server";
import { getDownloadUrl } from "@vercel/blob";
import { getDownloadToken } from "@/lib/redis";

interface RouteParams {
  params: Promise<{ token: string }>;
}

const EXPIRED_HTML = (message: string, detail: string) =>
  `<html><body style="font-family:sans-serif;text-align:center;padding:60px;max-width:500px;margin:auto">
    <h2 style="color:#1A2B4A">${message}</h2>
    <p style="color:#64748b">${detail}</p>
    <a href="/contact" style="color:#F97316">Contact Support</a>
  </body></html>`;

export async function GET(_req: Request, { params }: RouteParams) {
  const { token } = await params;

  if (!token) {
    return NextResponse.json({ error: "Missing token" }, { status: 400 });
  }

  const tokenData = await getDownloadToken(token);

  if (!tokenData) {
    return new Response(
      EXPIRED_HTML(
        "Download link expired or invalid",
        "Download links are valid for 72 hours. Check your order email or contact us."
      ),
      { status: 410, headers: { "Content-Type": "text/html" } }
    );
  }

  if (Date.now() > tokenData.expiresAt) {
    return new Response(
      EXPIRED_HTML(
        "Download link has expired",
        "This link was valid for 72 hours. Contact us to request a new link."
      ),
      { status: 410, headers: { "Content-Type": "text/html" } }
    );
  }

  try {
    const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
    if (!blobToken) {
      throw new Error("Blob storage not configured");
    }

    // Redirect to the blob with forced download header
    const downloadUrl = getDownloadUrl(tokenData.productBlobKey);

    return NextResponse.redirect(downloadUrl, { status: 302 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Download failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

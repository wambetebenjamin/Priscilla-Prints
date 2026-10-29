const testSecret = "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";

export async function verifyRecaptcha(token: string, remoteIp?: string | null) {
  if (!token) return false;

  const body = new URLSearchParams({
    secret: process.env.RECAPTCHA_SECRET_KEY || testSecret,
    response: token
  });
  if (remoteIp) body.set("remoteip", remoteIp);

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      body,
      cache: "no-store"
    });
    if (!response.ok) return false;
    const result = await response.json() as { success?: boolean };
    return result.success === true;
  } catch {
    return false;
  }
}

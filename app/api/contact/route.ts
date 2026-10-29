import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { verifyRecaptcha } from "@/lib/recaptcha";

export const runtime = "nodejs";
const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().max(200),
  subject: z.string().trim().min(3).max(150),
  message: z.string().trim().min(10).max(3000),
  website: z.string().max(0),
  recaptchaToken: z.string().min(1)
});

export async function POST(request: NextRequest) {
  const parsed = contactSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Invalid form" }, { status: 400 });
  const human = await verifyRecaptcha(parsed.data.recaptchaToken, request.headers.get("x-forwarded-for"));
  if (!human) return NextResponse.json({ ok: false, error: "Spam check failed" }, { status: 400 });
  return NextResponse.json({ ok: true });
}

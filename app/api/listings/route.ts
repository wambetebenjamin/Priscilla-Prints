import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { verifyRecaptcha } from "@/lib/recaptcha";

export const runtime = "nodejs";
const listingSchema = z.object({
  shopName: z.string().trim().min(2).max(120),
  ownerName: z.string().trim().min(2).max(100),
  email: z.email().max(200),
  phone: z.string().trim().min(7).max(40),
  city: z.string().trim().min(2).max(80),
  area: z.string().trim().min(2).max(100),
  services: z.array(z.string()).min(1).max(6),
  description: z.string().trim().min(30).max(1500),
  rightsConfirmed: z.literal(true),
  website: z.string().max(0),
  recaptchaToken: z.string().min(1)
});

export async function POST(request: NextRequest) {
  const parsed = listingSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Invalid listing" }, { status: 400 });
  const human = await verifyRecaptcha(parsed.data.recaptchaToken, request.headers.get("x-forwarded-for"));
  if (!human) return NextResponse.json({ ok: false, error: "Spam check failed" }, { status: 400 });
  return NextResponse.json({ ok: true, status: "received" }, { status: 201 });
}

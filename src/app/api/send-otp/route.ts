import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/nodemailer";
import { otpStore } from "@/lib/otpStore";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        // Generate 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const expires = Date.now() + 5 * 60 * 1000; // 5 minutes expiry

        // Store OTP
        otpStore.set(email, { otp, expires });

        // Send Email
        await sendEmail(
            email,
            "Your Verification Code - Divya Saxena Portfolio",
            `
      <div style="font-family: sans-serif; padding: 20px; color: #333;">
        <h2>Verification Code</h2>
        <p>Hi,</p>
        <p>Thank you for reaching out. Use the following OTP to verify your email address. This code is valid for 5 minutes.</p>
        <div style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #6366f1; padding: 20px 0;">
          ${otp}
        </div>
        <p>If you didn't request this, please ignore this email.</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: #999;">Divya Saxena | AI-Focused Full Stack Developer</p>
      </div>
      `
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error sending OTP:", error);
        return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 });
    }
}

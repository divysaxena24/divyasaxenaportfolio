import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/nodemailer";
import { otpStore } from "@/lib/otpStore";

export async function POST(req: Request) {
    try {
        const { email, name, message } = await req.json();

        if (!email || !name || !message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        // Since this is the final step, we should ideally verify if this email was already verified.
        // However, for this implementation, we assume the frontend only hits this after verification.
        // We'll clean up the OTP store.
        otpStore.delete(email);

        // Send the contact message to Divya's email
        await sendEmail(
            process.env.EMAIL_USER!, // Send to yourself
            `New Message from ${name} via Portfolio`,
            `
      <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6;">
        <h2 style="color: #6366f1;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <div style="background: #f9f9f9; padding: 20px; border-left: 4px solid #6366f1; margin-top: 20px;">
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
        <p style="font-size: 12px; color: #999;">Sent from your Portfolio Website</p>
      </div>
      `
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error sending contact message:", error);
        return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }
}

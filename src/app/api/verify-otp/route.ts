import { NextResponse } from "next/server";
import { otpStore } from "@/lib/otpStore";

export async function POST(req: Request) {
    try {
        const { email, otp } = await req.json();

        if (!email || !otp) {
            return NextResponse.json({ error: "Email and OTP are required" }, { status: 400 });
        }

        const storedData = otpStore.get(email);

        if (!storedData) {
            return NextResponse.json({ error: "No OTP found for this email" }, { status: 400 });
        }

        if (Date.now() > storedData.expires) {
            otpStore.delete(email);
            return NextResponse.json({ error: "OTP expired" }, { status: 400 });
        }

        if (storedData.otp !== otp) {
            return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
        }

        // Success - keep the verified status in store or just allow next step
        // For simplicity, we'll mark it as verified by keeping it in store with a flag
        // or just let the client move to next step.
        // In a real app, you'd probably return a temporary session token.

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error verifying OTP:", error);
        return NextResponse.json({ error: "Failed to verify OTP" }, { status: 500 });
    }
}

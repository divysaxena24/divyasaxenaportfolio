// In-memory store for OTPs
// In a production serverless environment, use Redis or a Database
export const otpStore = new Map<string, { otp: string; expires: number }>();

import { NextResponse } from "next/server";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/db";
import User from "@/models/User";

export async function POST(req: Request) {
    try {
        await dbConnect();
        const { token, password } = await req.json();

        if (!token || !password) {
            return NextResponse.json(
                { message: "Please provide token and new password" },
                { status: 400 }
            );
        }

        // Get hashed token
        const resetPasswordToken = crypto
            .createHash("sha256")
            .update(token)
            .digest("hex");

        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire: { $gt: Date.now() },
        });

        if (!user) {
            return NextResponse.json(
                { message: "Invalid token" },
                { status: 400 }
            );
        }

        // Set new password
        // We need to hash it.
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Clear reset token fields
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        return NextResponse.json({
            success: true,
            data: "Password updated success",
        });
    } catch (err: any) {
        console.error(err);
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}

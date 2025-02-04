import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        qrCodeUrl: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
    },
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

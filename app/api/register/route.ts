import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/lib/models/user.model';
import { sendVerificationEmail } from '@/lib/email';
import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid'
import QRCode from 'qrcode'


export async function POST(req: Request) {
    try {
        await connectDB();

        const { name, email, city, phone } = await req.json();

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json(
                { error: 'User already exists' },
                { status: 400 }
            );
        }

        // Create verification token
        const verificationToken = crypto.randomBytes(32).toString('hex');
        const qrData = `${name}-${uuidv4()}`;
        const qrCodeDataUrl = await QRCode.toDataURL(qrData);

        // Create new user
        const user = await User.create({
            name,
            email,
            phone,
            city,
            qrCodeUrl: qrCodeDataUrl,
        });

        // Send verification email
        await sendVerificationEmail(user);

        return NextResponse.json(
            {
                id: user._id,
                message: 'Registration successful. Please check your email to verify your account.'
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json(
            { error: 'Registration failed' },
            { status: 500 }
        );
    }
}

export async function GET(req: Request, { params }: any) {
    try {
        await connectDB();

        const { id } = params;

        console.log(id);


        const user = await User.findOne({ _id: id });

        return NextResponse.json(
            {
                data: user,
                message: 'Registration successful. Please check your email to verify your account.'
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json(
            { error: 'Registration failed' },
            { status: 500 }
        );
    }
}
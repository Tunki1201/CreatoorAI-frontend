import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { name, email, password, confirmPassword } = await req.json();

        // Basic validation for input fields
        if (!name || !email || !password || !confirmPassword) {
            return NextResponse.json(
                { message: 'All fields are required' },
                { status: 400 }
            );
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return NextResponse.json(
                { message: 'Passwords do not match' },
                { status: 400 }
            );
        }

        const body = JSON.stringify({ name, email, password });

        // Send request to backend to create a new user
        const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_URL}/auth/register/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: body,
        });

        const data = await res.json();

        if (res.status === 201) {
            // Success: User created
            return NextResponse.json(
                { message: 'User created successfully', user: data },
                { status: 201 }
            );
        } else if (res.status === 400) {
            // Handle "Email already registered" or other 400-level errors
            return NextResponse.json(
                { message: data.detail || 'Invalid request' },
                { status: 400 }
            );
        }

        // Handle other unexpected response statuses
        return NextResponse.json(
            { message: 'Something went wrong' },
            { status: res.status }
        );
    } catch (error) {
        console.error('Signup error:', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

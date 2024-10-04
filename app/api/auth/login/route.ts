import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        // Validate input
        if (!email || !password) {
            return NextResponse.json(
                { message: 'Email and password are required' },
                { status: 400 }
            );
        }

        const body = JSON.stringify({ email, password });

        // Send the request to the backend API
        const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_URL}/auth/signin/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: body,
        });

        const data = await res.json();

        if (res.status === 200) {
            // Assuming the backend returns a token and user object
            const { token, user } = data;

            // Store the token locally (e.g., in localStorage)
            window.localStorage.setItem('token', token);

            // Return success message and user data
            return NextResponse.json(
                { message: 'Login successful', user, token },
                { status: 200 }
            );
        } else {
            // Handle non-200 responses from the backend
            return NextResponse.json(
                { message: data.detail || 'Login failed' },
                { status: res.status }
            );
        }
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

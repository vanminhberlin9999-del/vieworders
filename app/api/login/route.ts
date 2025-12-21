import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { username, password } = await request.json();

    // demo user
    if (username === 'admin' && password === '123456') {
        return NextResponse.json({
            token: 'fake-jwt-token',
            user: { username: 'admin', role: 'DA_ADMIN' }
        });
    }

    return NextResponse.json(
        { message: 'false username or password' },
        { status: 401 }
    );
}

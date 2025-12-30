import { NextResponse } from 'next/server';
import isAuthentication from "@/app/api/jwt/isAuthentication";
import createToken from "@/app/api/jwt/token";
import { cookies } from 'next/headers'

export async function POST(request: Request) {
    try {
        const { username, password } = await request.json();
        // demo user
        if ( isAuthentication(username, password)){
            const token = await createToken(username);
            const res = NextResponse.json({success: true});
            const cookieStore = await cookies()

            cookieStore.set({
                name: 'auth',
                value: token,
                httpOnly: true,
                path: '/',
                sameSite: "lax",
                maxAge: 60 * 60 * 24,
            })

            return res;
        }else {
            return NextResponse.json(
                {message: 'false username or password'},
                {status: 401}
            );
        }
    }catch (error) {
        return NextResponse.json(
            {message: error},
            {status: 500}
        )
    }
}
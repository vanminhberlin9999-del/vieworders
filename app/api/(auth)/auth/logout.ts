import {NextResponse} from "next/server";
import { cookies } from 'next/headers'
export async function POST() {
    const cookieStore = await cookies()

    cookieStore.set({
        name: 'auth',
        value: '',
        httpOnly: true,
        path: '/',
        sameSite: "lax",
        maxAge: 0,
    })
    return NextResponse.json({success: true});
}
import {SignJWT} from "jose";
import process from "node:process";
import {NextResponse} from "next/server";
import * as http from "node:http";

async function createToken(username: string) {
    const header = {alg: "HS256"}

    const token = await new SignJWT({username})
        .setProtectedHeader(header)
        .setExpirationTime('1h')
        .sign(new TextEncoder().encode(process.env.JWT_SECRET))
    return token;
}

export default createToken
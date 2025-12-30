import {jwtVerify} from "jose";
import process from "node:process";
import {NextRequest} from "next/server";

async function verifyToken(req: NextRequest) {
    const token = req.cookies.get("auth")?.value;
    if (!token) return {valid: false, reason: 'no cookie'};

    try{
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            console.error("JWT_SECRET is not defined");
            return null;
        }
        const textEncoder = new TextEncoder().encode(secret);
        const payload = await jwtVerify(token, textEncoder);
        return {valid: true, payload};
    }catch (e){
        return {valid: false, reason: 'invalid'};
    }
}

export default verifyToken;
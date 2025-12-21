import {NextRequest, NextResponse} from "next/server";

export function middleware(req: NextRequest){
    const auth = req.cookies.get("auth")?.value;
    const pathname = req.nextUrl.pathname;

    if(!auth && pathname !== "/login"){
        return NextResponse.redirect(new URL("login", req.url));
    }

    if (auth && pathname === "/login") {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next|login).*)"],
};
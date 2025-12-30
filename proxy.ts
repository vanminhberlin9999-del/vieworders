import {NextRequest, NextResponse} from "next/server";
import verifyToken from "@/app/api/jwt/verifyToken";

export async function proxy(req: NextRequest){
    const auth = req.cookies.get("auth")?.value;
    const pathname = req.nextUrl.pathname;

    // if no cookie token exists
    if(!auth && pathname !== "/login"){
        return NextResponse.redirect(new URL("login", req.url));
    }

    // check cookie token is valid
    if(auth){
        try {
            const checkToken = await verifyToken(req);
            console.log(checkToken);
            if (checkToken?.valid === false){
                if(pathname !== "/login"){ // not in the login page-> redirect to the login page
                    return NextResponse.redirect(new URL("login", req.url));
                }else{
                    return NextResponse.next();
                }
            }
            if(checkToken?.valid === true && pathname === "/login"){
                return NextResponse.redirect(new URL("/", req.url));
            }
        }catch (e) {
            console.log(e);
        }
    }
}

export const config = {
    matcher: ["/((?!_next|login|api|_next/image|favicon.ico|static).*)"],
};
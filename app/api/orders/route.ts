import {NextRequest, NextResponse} from "next/server";
import verifyToken from "@/app/api/jwt/verifyToken";

export async function GET(request: NextRequest) {
    const payload = await verifyToken(request);

    if (!payload) {
        return NextResponse.json(
            { message: 'Nicht autorisiert' },
            { status: 401 }
        );
    }

    const dummyOrders = [
        { id: 1, product: "Laptop", price: 1000, customer: "Linda" },
        { id: 2, product: "Maus", price: 200, customer: "Robert" },
    ];

    return NextResponse.json({ orders: dummyOrders });
}

export async function POST(request: NextRequest) {
    const payload = await verifyToken(request);

    if (!payload || payload.valid === false) {
        return NextResponse.json(
            { message: "Nicht autorisiert" },
            { status: 401 }
        );
    }

    const body = await request.json();
    const newOrder = { id: 3, product: "Bag", price: 100, customer: "Tinh" }

    return NextResponse.json({order: newOrder}, {status: 201});
}
import { NextResponse } from "next/server";
import { getOrder } from "@/lib/redis";

interface RouteParams {
  params: Promise<{ sessionId: string }>;
}

export async function GET(_req: Request, { params }: RouteParams) {
  const { sessionId } = await params;
  try {
    const order = await getOrder(sessionId);
    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }
    return NextResponse.json(order);
  } catch (error: unknown) {
    console.error("[order] GET error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

import { NextResponse } from "next/server"

export async function GET() {
  const data = { message: "It's me, Mario" }
  return NextResponse.json(data, { status: 200 })
}

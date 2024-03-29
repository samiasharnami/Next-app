import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
    // fetch users data
    return NextResponse.json([
        {id: 1, name: "samia"},
        {id: 2, name: "shorna"},
    ])
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    // Validate the data
    // If invalid, return 400
    // Else, return store data

    const validation = schema.safeParse(body);

    if (!validation.success) 
        return NextResponse.json(validation.error.errors, { status: 400 } )
    
    return NextResponse.json({id: 1, name: body.name}, { status: 201 });
}
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

                                                  // [       Props       ]
export function GET(request: NextRequest, {params}: {params: {id: number}}) {
    // Fetch users data
    // If not found, return 404 error
    // Else return data

    if (params.id > 2) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    return NextResponse.json([
        {id: 1, name: "Eggs", price: 6},
    ])
}

export async function PUT(request: NextRequest, { params }: { params: { id: number }}) {
    // Validate the request body
    // If invalid, return 400
    // Fetch the user with the given id
    // If doesn't exist, return 404
    // Update user
    // Return updated user
    const body = await request.json()

    const validation = schema.safeParse(body);

    if (!validation.success) 
        return NextResponse.json(validation.error.errors, { status: 400 } )
    if (params.id > 10)
        return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    
    return NextResponse.json({ id: 1, name: body.name, price: body.price})
}

export function DELETE(request: NextRequest, { params }: { params: { id: number }}) {
    // Fetch user data
    // If not found, return 404
    // Delete the user
    // Return 200

    if (params.id > 10)
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })

    return NextResponse.json({ response: 'Product deleted successfully'}, { status: 200 });
}
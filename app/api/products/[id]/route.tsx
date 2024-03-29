import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

                                                  // [       Props       ]
export async function GET(request: NextRequest, {params}: {params: {id: string}}) {
    // Fetch users data
    // If not found, return 404 error
    // Else return data

    const product = await prisma.product.findUnique({
        where: {id: parseInt(params.id)}
    })

    if (!product) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    return NextResponse.json(product, { status: 200 })
}

export async function PUT(request: NextRequest, { params }: { params: { id: string }}) {
    // Validate the request body
    // If invalid, return 400
    // Fetch the user with the given id
    // If doesn't exist, return 404
    // Update user
    // Return updated user
    const body = await request.json()

    const validation = schema.safeParse(body);

    if (!validation.success) 
        return NextResponse.json(validation.error.errors, { status: 400 } );

    const product = await prisma.product.findUnique({
        where: {id: parseInt(params.id)}
    });

    if (!product) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    const updateProduct = await prisma.product.update({
        where: { id: product.id },
        data: {
            name: body.name,
            price: body.price
        }
    });
    
    return NextResponse.json(updateProduct, { status: 200 });
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string }}) {
    // Fetch user data
    // If not found, return 404
    // Delete the user
    // Return 200

    const product = await prisma.product.findUnique({
        where: {id: parseInt(params.id)}
    });

    if (!product) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    const deleteProduct = await prisma.product.delete({
        where: {id: parseInt(params.id)}
    })

    return NextResponse.json({ response: 'Product deleted successfully'}, { status: 200 });
}
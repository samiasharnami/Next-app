import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

                                                  // [       Props       ]
export async function GET(request: NextRequest, {params}: {params: {id: string}}) {
    // Fetch users data
    // If not found, return 404 error
    // Else return data

    const user = await prisma.user.findUnique({
        where: {id: parseInt(params.id)}
    })

    if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json(user);
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
        return NextResponse.json(validation.error.errors, { status: 400 } )
    
    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id) }
    })
    
    if (!user)
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
    
    const existingUser = await prisma.user.findUnique({
        where: { email: body.email }
    });

    if (existingUser)
        return NextResponse.json({ error: 'Email already exists' }, { status: 400 });


    const updateUser = await prisma.user.update({
        where: { id: user.id },
        data: {
            name: body.name,
            email: body.email
        }
    });

    return NextResponse.json(updateUser, { status: 204 })
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string }}) {
    // Fetch user data
    // If not found, return 404
    // Delete the user
    // Return 200

    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id)}
    })

    if (!user)
        return NextResponse.json({ error: 'User not found' }, { status: 404 })

    const deleteUser = await prisma.user.delete({
        where: { id: parseInt(params.id)}
    })

    return NextResponse.json({ response: 'User deleted successfully'}, { status: 200 });
}
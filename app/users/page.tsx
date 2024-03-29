'use client'
import React from 'react'
import UserTable from './usersTable';
import Link from 'next/link'

interface Props {
  searchParams: { sortOrder: string}
}

const UsersPage = ({searchParams : {sortOrder} }: Props) => { 
  //1st a props theke searchParams destructure korse, 
  //tarpor searchParams theke sortOrder destructure korse
    
  return (
    <main>
        <div className='mb-5'>
          <h1>Users</h1>
          <Link href='/users/new' className='btn mt-3'>New User</Link>
        </div>
        <UserTable sortOrder={sortOrder}/>
    </main>
    
  )
}

export default UsersPage
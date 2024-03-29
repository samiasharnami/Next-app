import Link from 'next/link';
import React from 'react'
import { sort } from 'fast-sort';

interface User {
    id: number;
    name: string;
    email: string;
    // Add other properties here according to your needs
}

interface Props {
    sortOrder: string;
}

const usersTable = async ({ sortOrder }: Props) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=10');
    const users: User[] = await res.json();

    const sortedUsers = sort(users).asc(sortOrder === 'email' ? user => user.email : user => user.name)

  return (
    <div>
        <table className='table table-zebra'>
          <thead>
            <tr>
              <th>
                <Link href='/users?sortOrder=name'>Name</Link>
              </th>
              <th>
                <Link href='/users?sortOrder=email'>Email</Link>
              </th>
            </tr>
          </thead>
          <tbody>
          {sortedUsers.map((user) => 
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              </tr>
            )}
          </tbody>
            
        </table>
    </div>
  )
}

export default usersTable
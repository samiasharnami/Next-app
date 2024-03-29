'use client'
import Link from 'next/link'
import React from 'react'

const NavMenu = () => {
  return (
    <div className="navbar bg-slate-200 rounded mb-5">
        <div className="navbar-start">
            <Link href='/' className='btn btn-ghost text-xl font-bold'>NextAPP</Link>
        </div>
        <div className='navbar-center'>
            <ul className='flex'>
                <li className='mr-3 font-semibold'><Link href='/users'>Users</Link></li>
                <li className='mr-3 font-semibold'><Link href='/'>About Us</Link></li>
            </ul>
        </div>
        <div className="navbar-end gap-2">
            <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
            <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img alt="user avatar" src="avatar.png" />
                </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                <a className="justify-between">
                    Profile
                </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default NavMenu
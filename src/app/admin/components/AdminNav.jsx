import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../../public/Logo_no shadow.png'

function AdminNav() {
  return (
    <nav>
      <div className='shadow-xl'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center p-4'>
                <div>
                    <Link href="/">
                        <Image src={Logo} width={50} height={100} alt="my logo"></Image>
                    </Link>
                </div>
                <ul className='flex'>
                    <li className='mx-3'><Link href="/login">Login</Link></li>
                    <li className='mx-3'><Link href="/register">Register</Link></li>
                </ul>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default AdminNav

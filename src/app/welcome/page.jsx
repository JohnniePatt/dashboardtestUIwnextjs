import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import Container from '../components/Container'

function WelcomePage() {
  return (
    <Container>
      <Navbar />
      <div className='flex-grow'>
        <div className='container mx-auto shadow-xl my-10 p-10 rounded-xl'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-2xl'>Profile</h3>
                    <p>Welcome John doe</p>
                </div>
                <div>
                    <Link href="/create" className='bg-green-500 text-white border py-2 px-3 rounded-md text-lg my-2'>Create post</Link>
                </div>
            </div>
            {/* User post data */}
            <div>
                <div className='shadow-xl my-10 p-10 rounded-xl'>
                    <h4 className='text-2xl'>Post title</h4>
                    <Image
                        className='my-3 rounded-md'
                        src="https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width={300}  
                        height={0}
                        alt='post image'
                        />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere cumque assumenda velit. Iure, fugit quasi reiciendis rerum alias quos voluptate atque consequuntur assumenda beatae eos fuga eius porro veniam!</p>
                    <div className='mt-5'>
                        <Link className='bg-gray-500 text-white border py-2 px-3 rounded-md text-lg my-2' href="/edit">Edit</Link>
                        <Link className='bg-red-500 text-white border py-2 px-3 rounded-md text-lg my-2' href="/delete">Delete</Link>
                    </div>
                </div>
            </div>
        </div>

      </div>
      <Footer />
    </Container>
  )
}

export default WelcomePage

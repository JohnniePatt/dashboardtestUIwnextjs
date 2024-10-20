import React from 'react'
import AdminNav from '../components/AdminNav'
import Footer from '../components/Footer'
import SideNav from '../components/SideNav'
import Container from '../components/Container'
import Link from 'next/link'
import Image from 'next/image'

function AdminUserManagePage() {
  return (
    <Container>
      <AdminNav/>
      <div className='flex-grow'>
        <div className='container mx-auto'>
            <div className='flex mt-10'>
                <SideNav/>
                <div className='p-10'>
                    <h3 className='text-3xl mb-3'>Manage Posts</h3>
                    <p>A list of posts retrieved from a MongoDB database</p>
                    <div className='shadow-lg overflow-x-auto'></div>
                    <table className='text-left rounded-md mt-3 table-fixed w-full'>
                        <thead>
                            <tr className='bg-gray-200'>
                                <th className='p-5'>Post ID</th>
                                <th className='p-5'>Post Ttitle</th>
                                <th className='p-5'>Post Image</th>
                                <th className='p-5'>Post Content</th>
                                <th className='p-5'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='p-5'>@!##$$%%</td>
                                <td className='p-5'>This is post title</td>
                                <td className='p-5'>
                                    <Image className='my-3 rounded-md'
                                            src="https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            width={80}  
                                            height={80}
                                            alt='post image'
                                    ></Image>
                                </td>
                                <td className='p-5'>12312312121</td>
                                <td className='p-5'>
                                    <Link className='bg-gray-500 text-white border py-2 px-3 rounded text-xl my-2' href="/admin/posts/edit">Edit</Link>
                                    <Link className='bg-red-500 text-white border py-2 px-3 rounded text-xl my-2' href="/admin/posts/delete">Delete</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </Container>
  )
}

export default AdminUserManagePage

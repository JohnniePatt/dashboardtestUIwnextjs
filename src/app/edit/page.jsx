import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import Container from '../components/Container'


function EditPage() {
  return (
    <Container>
        <Navbar/>
        <div className='flex-grow'>
            <div className='container mx-auto shadow-xl my-10 p-10 rounded-xl'>
                <Link href="/welcome" className='bg-gray-500 inline-block text-white border py-2 px-3 rounded my-2'>
                Go back</Link>
                <hr className='my-3'/>
                <h3 className='text-xl'>Edit post</h3>
                <form action="">
                    <input type="text" className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Post title' value="Title befor update"/>
                    <input type="text" className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Post image URL' value="https://imgurl.com/img"/>
                    <textarea className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' name="" id="" cols="30" rows="10" placeholder='Enter your post content' >
                        Content before update
                    </textarea>
                    <button type='submit' name='edit' className='bg-green-500 text-white border py-2 px-3 rounded text-lg my-2'>Update post</button>
                </form>
            </div>
        </div>
        <Footer/>
    </Container>
  )
}

export default EditPage

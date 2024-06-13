'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import { FaXTwitter } from 'react-icons/fa6';
import { HiDotsHorizontal, HiHome } from 'react-icons/hi';

const Sidebar = () => {
  const {data: session} = useSession();
  console.log(session);

  return (
    <div className='flex flex-col justify-between h-screen p-3'>
      <div className='flex flex-col gap-4'>
    <Link href='/'>
      <FaXTwitter className='w-16 h-16 cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200 ' />
    </Link>
    <Link
      href='/'
      className='flex items-center p-3 hover:bg-gray-100 rounded-full transition-all duration-200 gap-2 w-fit'
    >
      <HiHome className='w-7 h-7' />
      <span className='font-bold hidden lg:inline'>Home</span>
    </Link>
    {
      !session ? (
        <button className='bg-blue-400 text-white rounded-full  hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md hidden lg:inline' onClick={() => signIn()}>
        Sign In
      </button>
      ) : (
        <button className='bg-blue-400 text-white rounded-full  hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md hidden lg:inline' onClick={() => signOut()}>
        Sign Out
      </button>
      )
    }
    </div>
    {
      session && (
        <div className='text-gray-700 shadow-xl rounded-xl bg-gray-200 text-sm flex items-center cursor-pointer p-3 hover:bg-gray-100 hover:rounded-full transition-all duration-200'>
        <img
          src={session.user.image}
          alt='user-img'
          className='h-10 w-10 rounded-full lg:mr-2'
        />
        <div className='hidden lg:inline'>
          <h4 className='font-bold'>{session.user.name}</h4>
          <p className='text-gray-500'>@{session.user.username}</p>
        </div>
        <HiDotsHorizontal className='h-5 xl:ml-8 hidden xl:inline' />
      </div>
      )
    }
  </div>
  )
}

export default Sidebar

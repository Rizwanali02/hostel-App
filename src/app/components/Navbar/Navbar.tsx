"use client"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import React from 'react'

const Navbar = () => {
  const router = useRouter(); 

  const handleLoginClick = () => {
    router.push('/login'); 
  };
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-green-300 to-white">
      <span className="text-lg font-bold" onClick={()=>router.push('/')}>LOGO</span>
      <Button onClick={handleLoginClick} className="bg-green-700 text-white hover:bg-green-600" >Log In</Button>
    </div>
  )
}

export default Navbar

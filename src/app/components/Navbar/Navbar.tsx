import { Button } from '@/components/ui/button'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-green-300 to-white">
      <span className="text-lg font-bold">LOGO</span>
      <Button className="bg-green-700 text-white hover:bg-green-600">Log In</Button>
    </div>
  )
}

export default Navbar

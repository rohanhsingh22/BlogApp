import React, { useState } from 'react'
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar className='border-b-2'>
        <Link to='/' className='self-center whitespace-nowraptext-sm sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to bg-pink-500 rounded-lg text-white'>Five's</span>
            Blog
        </Link>
        <form>
         <TextInput type='text' placeholder='Search' rightIcon={AiOutlineSearch} className='hidden lg:inline'/>
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
            <AiOutlineSearch />
        </Button>
        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
                <FaMoon />
            </Button>
            <Link to='/sign-in'>
                <Button className="bg-gradient-to-r from-purple-500 to-blue-500 " outline>
                    Sign In
                </Button>
            </Link>
        </div>
        <div className={`lg:flex gap-2 lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
            <Link to='/' className="text-gray-700 hover:text-blue-600 dark:text-white">Home</Link>
            <Link to='/about' className="text-gray-700 hover:text-blue-600 dark:text-white">About</Link>
            <Link to='/projects' className="text-gray-700 hover:text-blue-600 dark:text-white">Projects</Link>
        </div>
    </Navbar>
  )
}
export default Header
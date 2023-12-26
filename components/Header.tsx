'use client'

import React from 'react'
import { Space_Mono } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import MoonIcon from '@/public/assets/icon-moon.svg'
import { useTheme } from 'next-themes'
import SunIcon from '@/public/assets/icon-sun.svg'

type Props = {}

export default function Header({}: Props) {

  const {theme, setTheme} = useTheme()

  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }


  return (
    <header className='pb-9 min-w-full'>
      <div className='flex justify-between items-center gap-2'>
        <Link href='/' className='text-2xl font-bold text-blackBlue dark:text-plainWhite'>
            devfinder
        </Link>
        {
        theme === 'light' ?
        <button 
        className='flex items-center group'
        onClick={toggleTheme}
        >
          
            <span className='text-sm text-grayBlue tracking-[2.5px] mt-1 font-bold pr-4 inline-block group-hover:text-blackBlue'>DARK</span>
            <MoonIcon  className="h-[20px] w-[20px] mt-1 inline-block fill-current group-hover:text-blackBlue text-grayBlue" />
        </button>
        :
        <button 
        className='flex items-center group'
        onClick={toggleTheme}
        >
          
            <span className='text-sm text-plainWhite tracking-[2.5px] mt-1 font-bold pr-4 inline-block group-hover:text-[#90A4D4]'>LIGHT</span>
            <SunIcon  className="h-[20px] w-[20px] mt-1 inline-block fill-current group-hover:text-[#90A4D4] text-plainWhite" />
        </button>
      }
      </div>
    </header>
  )
}
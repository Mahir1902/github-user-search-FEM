import React from 'react'
import { Space_Mono } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import MoonIcon from '@/public/assets/icon-moon.svg'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='pb-9 min-w-full'>
      <div className='flex justify-between items-center gap-2'>
        <Link href='/' className='text-2xl font-bold text-blackBlue'>
            devfinder
        </Link>
        <button className='flex items-center group'>
            <span className='text-sm text-grayBlue tracking-[2.5px] mt-1 font-bold pr-4 inline-block group-hover:text-blackBlue'>DARK</span>
            <MoonIcon  className="h-[20px] w-[20px] mt-1 inline-block fill-current group-hover:text-blackBlue text-grayBlue" />
            
        </button>
      </div>
    </header>
  )
}
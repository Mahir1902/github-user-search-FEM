import React from 'react'
import { Space_Mono } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import MoonIcon from '@/public/assets/icon-moon.svg'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='flex justify-between border-red-500 border '>
        <Link href='/'>
            <p className='text-2xl font-bold'>devfinder</p>
        </Link>
        <div className='flex justify-between gap-3'>
            <p className='text-sm text-[#697C9A] tracking-[2.5px] mt-1 font-bold'>DARK</p>
            <MoonIcon className="text-2xl mt-1"/>
        </div>
    </header>
  )
}
import React from 'react'
import SearchIcon from '@/public/assets/icon-search.svg'
import { Button } from './ui/button'
import Image from 'next/image'

type Props = {}

export default function SearchBar({}: Props) {
  return (
    <form className='flex mt-9 border rounded-xl h-[3.75rem] items-center py-2 px-2 bg-white '>
        <SearchIcon className='text-2xl ml-4'/>
        <input type="text"  className='flex flex-grow ml-5 outline-none text-base placeholder:' placeholder='Search Github username...'/>
        <Button className='bg-[#0079FF] text-white rounded-xl ml-5 font-bold px-4 text-[14px] h-12 w-[6rem] text-base tracking-wide'> Search</Button>
    </form>
  )
}
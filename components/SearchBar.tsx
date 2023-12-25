"use client"


import SearchIcon from '@/public/assets/icon-search.svg'

import { useUserStore } from '@/store/userStore'
import axios from 'axios'
import {  FormEvent, useState } from 'react'


type Props = {}

export default function SearchBar({}: Props) {

  const [username, setUsername ] = useState('')

  const {fetchUser} = useUserStore()


  const handleSubmit = async (e : FormEvent<HTMLFormElement>)  => {
    e.preventDefault()
    await fetchUser(username)
    console.log(useUserStore.getState())
  }

  return (
    <form className='flex mt-9 rounded-xl h-[3.75rem] items-center bg-white shadow-md md:h-[4.5rem] min-w-full'
    method='post'
    onSubmit={handleSubmit}
    >
        <SearchIcon className='ml-5 text-2xl'/>
        <input type="text"  className='flex flex-grow ml-4 md:ml-5 outline-none border-none text-[13px]/[25px] md:text-[18px]/[25px] placeholder:text-base md:placeholder:text-lg' placeholder='Search Github username...'
            value={username}
        onChange={e => setUsername(e.target.value)}
        
        />
        <button type='submit' className='bg-lightBlue text-white rounded-xl mr-2 font-bold px-4 text-[14px]/[25px] h-12 py-[0.8rem] hover:bg-[#60ABFF] mf:mr-2.5 md:px-6 md:font-bold '>Search</button>
    </form>
  )
}
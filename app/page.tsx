import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import { Space_Mono } from 'next/font/google'

const space_mono = Space_Mono({
  weight:['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display:'swap',
})


export default function Home() {
  return (
    <div className={`h-[100vh] w-[100vw] flex flex-col justify-center items-center ${space_mono.className} bg-[#F6F8FF]`}>
      <div className='w-full max-w-[327px] md:max-w-[573px] lg:max-w-[730px]'>

      <Header/> 
      <SearchBar/>  
      </div>
    </div>
  )
}

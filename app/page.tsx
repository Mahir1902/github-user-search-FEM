import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import UserSummary from '@/components/UserSummary'
import { Space_Mono } from 'next/font/google'

const space_mono = Space_Mono({
  weight:['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display:'swap',
})


export default function Home() {
  return (
    <div className='h-[100vh] w-[100vw] bg-[#F6F8FF] dark:bg-almostBlack'>
      <div className={`min-h-screen w-full max-w-[730px] px-6  flex flex-col md:pt-[10rem] overflow-x-hidden ${space_mono.className} mx-auto`}>
      
      <Header/> 
      <SearchBar/> 
      <UserSummary/>     
    </div>
    </div>
    
  )
}

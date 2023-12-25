"use client";

import { getUser } from "@/lib/getUser";
import { useUserStore } from "@/store/userStore";
import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect } from "react";
import Twitter from '@/public/assets/icon-twitter.svg'
import Location from '@/public/assets/icon-location.svg'
import Wbsite from '@/public/assets/icon-website.svg'
import CopanyIcon from '@/public/assets/icon-company.svg'

type Props = {};

export default function UserSummary({}: Props) {
  const { user } = useUserStore();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    return `Joined ${date.toLocaleDateString("en-Gb", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })}`;
  };

  const joinedDate = formatDate(user?.created_at!);

  return (
    // <div className="w-full h-[25rem] mt-6 flex bg-[#FEFEFE] rounded-xl shadow-md">
    //   <div className="flex flex-col items-center pt-10 w-[12rem]">
    //     <Image
    //       src={user?.avatar_url!}
    //       width={117}
    //       height={117}
    //       className="border rounded-full"
    //       alt="user avatar"
    //     />
    //   </div>
    //   <div className="flex-grow flex flex-col">
    //     <div className="border-blue-500 border w-full h-[9rem]">
    //       <div className="flex justify-between mt-10">
    //         <h1 className="text-2xl font-bold ">{user?.name}</h1>
    //         <p className="text-sm text-[#697C9A] pt-1 pr-4">{joinedDate}</p>
    //       </div>
    //       <p className="text-sm mt-2 text-[#0079FF]">@{user?.login}</p>
    //       <p className="pt-5 text-sm text-[#697C9A] font-[400]">{user?.bio}</p>
    //     </div>
    //     <div className=" h-[5rem] mt-9 bg-[#F6F8FF] rounded-2xl mr-6 flex justify-around items-center">
    //       <div>
    //         <p className="text-xs text-[#697C9A] font-[400]">Repos</p>
    //         <p className="font-bold">{user?.public_repos}</p>
    //       </div>
    //       <div>
    //         <p className="text-xs text-[#697C9A] font-[400]">Followers</p>
    //         <p className="font-bold">{user?.followers}</p>
    //       </div>
    //       <div>
    //         <p className="text-xs text-[#697C9A] font-[400]">Following</p>
    //         <p className="font-bold">{user?.following}</p>
    //       </div>
    //     </div>

    //   </div>
    // </div>


    // <div className="mt-4 rounded-2xl bg-[#FEFEFE] px-6 pb-12 md:pb-10 pt-8 shadow-md dark:shadow-none md:mt-6 md:pt-10 lg:pt-12 min-w-full">
    //   <img src={user?.avatar_url!} alt="avatar" className="rounded-full h-[70px] md:h-[117px] inline-block w-auto" />
    //   <div className="border border-yellow-500 ml-5 inline-block align-middle md:ml-10 lg:ml-9 lg:mt-0 lg:inline-grid lg:w-[30rem] lg:grid-cols-2 lg:align-top">
    //     <h1 className="text-2xl font-bold">{user?.name}</h1>
    //     <Link href={`https://github.com/${user?.login}`} className="inline-block order-1 text-sm md:mt-1 md:text-base text-[#0079FF]">@{user?.login}</Link>
    //     <p className="text-sm lg:text-right text-[#697C9A] block md:mt-1">
    //       {joinedDate}
    //     </p>
    //     <p className="mt-8  text-sm md:text-base md:h-[3rem] lg:order-1 border-red-500 border lg:block lg:col-span-2 text-[#697C9A]
    //     ">
    //       {user?.bio!}
    //     </p>
    //   </div>
    // </div>

    <div className="min-w-full bg-[#FEFEFE] rounded-2xl mt-5 px-7 py-8 shadow-md flex flex-col">
      <div className="flex gap-4 md:gap-5 ">

      <img src={user?.avatar_url!} alt="avatar" className="rounded-full h-[70px] md:h-[117px] inline-block w-auto" />
      <div className="lg:w-[30rem] flex  flex-col lg:flex-row justify-between">
        <div className="flex flex-col">

          <h1 className="text-[1rem] md:text-[1.625rem] font-bold tracking-tight text-blackBlue">{user?.name!}</h1>
          <Link href={`https://github/${user?.login}`} className="text-[13px] md:text-[1rem] text-lightBlue tracking-tight">
            @{user?.login}
          </Link>
        </div>
          <p className="text-[13px] text-grayBlue md:text-[15px] lg:text-right lg:pt-2">{joinedDate}</p>
      </div>
      </div>
      
      <p className="text-[13px] md:text-[15px] mt-8 leading-loose tracking-normal lg:ml-[135px] text-grayBlue">
        {user?.bio}
      </p>

      <div className="flex justify-center lg:ml-[135px] mt-6 py-4 rounded-xl bg-whiteGray">
        <ul className=" flex justify-around gap-6 w-full text-center">
          <li className="flex flex-col">
            <p className="text-[11px] md:text-[13px] text-grayBlue">Repos</p>
            <p className="text-[16px] md:text-[22px] font-bold text-blackBlue">{user?.public_repos}</p>
          </li>
          <li>
            <p className="text-[11px] md:text-[13px] text-grayBlue">Followers</p>
            <p className="text-[16px] md:text-[22px] font-bold text-blackBlue">{user?.followers}</p>
          </li>
          <li>
            <p className="text-[11px] md:text-[13px] text-grayBlue">Following</p>
            <p className="text-[16px] md:text-[22px] font-bold text-blackBlue">{user?.following}</p>
          </li>
        </ul>
      </div>

      <footer className="flex flex-col gap-4">
        <div className="flex gap-4 item-center w-full">
          <Location className="h-[20px] w-[20px]"/>
        
          {user?.location ? <p>{user.location}</p> : <p>Not vailable</p>}
        </div>
        <div className="flex gap-4 item-center w-full">
          <Wbsite className="h-[20px] w-[20px]"/>
          {user?.blog ? <p>{user.blog}</p> : <p>Not vailable</p>}
        </div>
        <div className={`flex gap-4 item-center w-full fill-current ${user?.twitter_username? 'text-red' : 'text-blackBlue'}`}>
          <Twitter className="h-[20px] w-[20px]"/>
          {user?.twitter_username ? <p>{user.twitter_username}</p> : <p>Not vailable</p>}
        </div>
          <div className="flex gap-4 item-center w-full">
            <CopanyIcon className="w-[20px] h-[20px] fill-current"/>
            {user?.company ? <p>{user.company}</p> : <p>Not vailable</p>}
          </div>
      </footer>

    </div>
  );
}

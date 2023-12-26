"use client";

import { getUser } from "@/lib/getUser";
import { useUserStore } from "@/store/userStore";
import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect } from "react";
import Twitter from '@/public/assets/icon-twitter.svg'
import Location from '@/public/assets/icon-location.svg'
import Website from '@/public/assets/icon-website.svg'
import CompanyIcon from '@/public/assets/icon-company.svg'
import { Url } from "next/dist/shared/lib/router/router";

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


  
  const UserInfoField = ({value, IconComponent, defaultText= 'Not available'}: {value: String,  IconComponent: any, defaultText?: string  }) => {
    // Adjusting the condition to check for any falsy value (null, undefined, empty string)
    const isAvailable = Boolean(value);
  
    return (
      <div className={`flex gap-4 item-center w-full ${!isAvailable ? 'text-grayBlue dark:text-plainWhite opacity-60' : 'text-darkBlue dark:text-plainWhite'}`}>
        <IconComponent className="h-[20px] w-[20px]"/>
  
        {IconComponent === Website && isAvailable 
          ? <Link href={value as Url} className="hover:underline">{value}</Link> 
          : <p>{isAvailable ? value : defaultText}</p>}
      </div>
    );
  }

  return (
  
    <div className="min-w-full bg-[#FEFEFE] dark:bg-ashBlue rounded-2xl mt-5 px-7 py-8 shadow-md flex flex-col">
      <div className="flex gap-4 md:gap-5 ">

      <img src={user?.avatar_url!} alt="avatar" className="rounded-full h-[70px] md:h-[117px] inline-block w-auto" />
      <div className="lg:w-[30rem] flex  flex-col lg:flex-row justify-between">
        <div className="flex flex-col">

          <h1 className="text-[1rem] md:text-[1.625rem] font-bold tracking-tight text-blackBlue dark:text-plainWhite">{user?.name!}</h1>
          <Link href={`https://github/${user?.login}`} className="text-[13px] md:text-[1rem] text-lightBlue tracking-tight">
            @{user?.login}
          </Link>
        </div>
          <p className="text-[13px] text-grayBlue md:text-[15px] lg:text-right lg:pt-2 dark:text-plainWhite">{joinedDate}</p>
      </div>
      </div>
      
      <p className="text-[13px] md:text-[15px] mt-8 leading-loose tracking-normal lg:ml-[135px] text-grayBlue dark:text-plainWhite">
        {user?.bio ? user.bio : 'This profile has no bio'}
      </p>

      <div className="flex justify-center lg:ml-[135px] mt-6 py-4 rounded-xl bg-whiteGray dark:bg-almostBlack">
        <ul className=" flex justify-around gap-6 w-full">
          <li className="flex flex-col">
            <p className="text-[11px] md:text-[13px] text-grayBlue dark:text-plainWhite">Repos</p>
            <p className="text-[16px] md:text-[22px] font-bold text-blackBlue dark:text-plainWhite">{user?.public_repos}</p>
          </li>
          <li>
            <p className="text-[11px] md:text-[13px] text-grayBlue dark:text-plainWhite">Followers</p>
            <p className="text-[16px] md:text-[22px] font-bold text-blackBlue dark:text-plainWhite">{user?.followers}</p>
          </li>
          <li>
            <p className="text-[11px] md:text-[13px] text-grayBlue dark:text-plainWhite">Following</p>
            <p className="text-[16px] md:text-[22px] font-bold text-blackBlue dark:text-plainWhite">{user?.following}</p>
          </li>
        </ul>
      </div>

      <footer className="flex flex-col gap-4 mt-6 text-[13px] md:text-[15px] md:grid md:grid-cols-2 lg:ml-[135px]">
        {/* <div className="flex gap-4 item-center w-full">
          <Location className="h-[20px] w-[20px]"/>
        
          {user?.location ? <p>{user.location}</p> : <p>Not vailable</p>}
        </div> */}
        <UserInfoField value={user?.location!} IconComponent={Location}/>

        {/* <div className="flex gap-4 item-center w-full">
          <Website className="h-[20px] w-[20px] text-darkBlue"/>
          {user?.blog ? <p className="text-darkBlue">{user.blog}</p> : <p className="">Not vailable</p>}
        </div> */}
        <div className="md:order-1">

        <UserInfoField value={user?.blog!} IconComponent={Website}/>
        </div>

        {/* <div className={`flex gap-4 item-center w-full fill-current ${user?.twitter_username? 'text-red' : 'text-blackBlue'}`}>
          <Twitter className="h-[20px] w-[20px]"/>
          {user?.twitter_username ? <p>{user.twitter_username}</p> : <p>Not vailable</p>}
        </div> */}
        

        <UserInfoField value={user?.twitter_username!} IconComponent={Twitter}/>

          {/* <div className="flex gap-4 item-center w-full">
            <CopanyIcon className="w-[20px] h-[20px] fill-current"/>
            {user?.company ? <p>{user.company}</p> : <p>Not vailable</p>}
          </div> */}
          <div className="md:order-4">
          <UserInfoField value={user?.company!} IconComponent={CompanyIcon}/>
          </div>
      </footer>

    </div>
  );
}

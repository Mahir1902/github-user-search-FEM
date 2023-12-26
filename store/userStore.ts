import { Usertype } from '@/types/UserType'
import axios from 'axios'
import {create} from 'zustand'


type userStore = {
    user: Usertype | null
    fetchUser: (username:string) => Promise<void>
}


export const useUserStore = create<userStore>((set) => ({
    user: {
        location: "San Francisco",
        company: '@github',
        public_repos: 8,
        avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
        bio: "This profile has no bio",
        blog: "https://github.blog",
        created_at: "2011-01-25T18:44:36Z",
        followers: 3938,
        login: "octocat",
        name: "The Octocat",
        twitter_username: null,
        following: 9
    },
    fetchUser: async (username) => {


        try {
            
            const {data} = await axios.get(`https://api.github.com/users/${username}`)

    
            if(!data) {
                throw new Error('User not found')
            }
    
            const {location, company, public_repos, avatar_url, bio, blog, created_at, followers, login, name, twitter_username, following} = data

            set({user: {location, company, public_repos, avatar_url, bio, blog, created_at, followers, login, name, twitter_username, following}})
        } catch (error) {
            console.error('Error searching user', error)
        }

        
        
    }
}))
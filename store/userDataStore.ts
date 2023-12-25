import { create } from "zustand";

type userDataStore = {
  userData: {
      avatar_url: string | null;
      name: string | null;
    login: string | null;
    twitter_username: string | null;
    public_repos: number | null;
    followers: number | null;
    blog: string | null;
    location: string | null;
    created_at: Date | null;
    company: string | null;
    bio: string | null;
  };
};

export const useUserDataStore = create<userDataStore>((set) => ({
    userData: {
        avatar_url: '',
        name: '',
        login: '',
        blog: '',
        company: '',
        created_at: new Date(),
        public_repos: null,
        bio: '',
        followers: null,
        location: '',
        twitter_username: ''
    }
}));

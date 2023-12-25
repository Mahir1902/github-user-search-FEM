import axios from "axios"



export const getUser =async (username:string) => {
    const res = await axios.get(`https://api.github.com/users/${username}`)

    if(!res.data) {
        console.log('Could not find user')
    }
    console.log(res.data)

    return res.data

}

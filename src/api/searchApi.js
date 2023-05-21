import axios from "axios";

export async function searchUser(param){
    const {data} = await axios.post('/api/search/user',param)
    return data
}
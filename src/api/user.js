import axios from "axios";

export async function getUserInfo(){
    const {data} = await axios.get('api/getUserInfo')
    return data
}
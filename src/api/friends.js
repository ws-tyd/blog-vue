import axios from "axios";

export async function addFriends(param){
    const {data} = await axios.post('api/friends/add',param)
    return data
}

export async function cancelFriends(param){
    const {data} = await axios.post('api/friends/cancelFriends',param)
    return data
}
export async function isConcernMe(param){
    const {data} = await axios.post('api/friends/isMyFlow',param)
    return data
}
export async function queryFriendInIds(ids){
    const {data} = await axios.get('api/friends/queryFriendInIds/'+ids)
    return data
}
export async function getMessageSessionID(userId){
    console.log(userId)
    const {data} = await axios.get('api/friends/getMessageSessionID/'+userId)
    return data
}
import axios from "../utils/request/index";

export async function queryAllImage(){
    const {data} = await axios.post("api/image/queryAll")
    return data
}

export async function queryAllImagePage(pageVo){
    const {data} = await axios.post("api/image/queryAll",pageVo)
    return data
}

export async function queryAllSlideVerifyArray(){
    const {data} = await  axios.get('/api/image/querySliderVerifyPic/'+'sliderverifypic')
    return data
}
export async function queryAvatarById(id){
    const {data} = await  axios.get('/api/image/query/'+id)
    return data
}

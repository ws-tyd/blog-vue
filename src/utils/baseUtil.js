//0-len 生成整数
const getIntRandom = (len) =>{
   return  Math.floor(Math.random()*len)
}
//加载动画开关
class loadTemplate{
    static close(el){
        document.getElementById(el).style.display = 'none'
    }
    static open(el){
        document.getElementById(el).style.display = 'flex'
    }

    static loading(el, time) {
       let load =  document.getElementById(el)
        load.style.display = 'flex'
        setTimeout(()=>{
            load.style.display = 'none'
        },time)

    }
}


export  {
    getIntRandom,
    loadTemplate
}



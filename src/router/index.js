import {createWebHashHistory , createRouter} from 'vue-router'
import {loadTemplate} from "../utils/baseUtil";
const router =[
    {path:'/',name:'首页',component:()=>import('../view/index.vue')},
    {path:'/pages',name:'上传页面',component:()=>import('../view/pages/backPage.vue'),children:[
            {path:'upload',name:"上传文件",component:()=>import("../components/upload/upload.vue")},
            {path:'login',name:"登录",component:()=>import("../view/pages/login/login.vue")},
            {path:'register',name:"注册",component:()=>import("../view/pages/register/register.vue")},
            {path:'task',name:"聊天",component:()=>import("../view/pages/task/task.vue")},
            {path:'search',name:"搜索",component:()=>import("../view/pages/search/search.vue")},
        ]},
    {path:'/head',name:'头部导航栏',component:()=>import('../components/nav/nav-head.vue')},
    {path:'/404',name:'404',component:()=>import('../components/exception/404.vue')},
    {path:'/:pathMatch(.*)',redirect: '/404'},
]

const route = createRouter({
    history:createWebHashHistory(),
    routes:router,
    base:'/dist',
    mode:'history'
})
route.beforeEach((to,from,next)=>{
    // let time =0;
    // if (to.fullPath.includes('login')){
    //     loadTemplate.open('load')
    //     time = 1000;
    // }
    // setTimeout(()=>{
    //     loadTemplate.close('load')
    //     next()
    // },time)

    next();
})


export default route

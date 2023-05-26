import {createWebHashHistory , createRouter} from 'vue-router'
import {getSession} from "../utils/sessionUtil";
import store from "../store/index.js";
import {isBlank} from "../utils/verification";
import axios from "axios";
import {getUserInfo} from "../api/user";
const router =[
    {path:'/',name:'首页',component:()=>import('../view/index.vue')},
    {path:'/pages',name:'上传页面',component:()=>import('../view/pages/backPage.vue'),children:[
            {path:'upload',name:"上传文件页面",component:()=>import("../components/upload/upload.vue")},
            {path:'login',name:"登录页面",component:()=>import("../view/pages/login/login.vue")},
            {path:'register',name:"注册页面",component:()=>import("../view/pages/register/register.vue")},
            {path:'task',name:"聊天页面",component:()=>import("../view/pages/task/task.vue")},
            {path:'search',name:"搜索页面",component:()=>import("../view/pages/search/search.vue")},
        ]},
    {path:'/head',name:'头部导航栏',component:()=>import('../components/nav/nav-head.vue')},
    {path:'/manage',name:'后台页面',component:()=>import('../view/manageView/manageHome.vue')},
    {path:'/404',name:'404页面',component:()=>import('../components/exception/404.vue')},
    {path:'/:pathMatch(.*)',redirect: '/404'},
]

const route = createRouter({
    history:createWebHashHistory(),
    routes:router,
    base:'/dist',
    mode:'history'
})
route.beforeEach((to,from,next)=>{
    let token = getSession('Authorization')
    if (!isBlank(token)&&!store.state.isLogin) {
        getUserInfo().then(user=>{
            store.commit('login',{user:user,token:token})
        })
    }
    // axios.post('api/log',{
    //     pageName: to.name,
    // })
    next();
})


export default route

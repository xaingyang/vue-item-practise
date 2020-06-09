import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'


export default[
    {
        path:'/',
        component:Home,
        
    },
    {
        path:'/login',
        component:Login,
        meta:{
            isHideFooter:true
        }
    },
    {
        path:'/register',
        component:Register,
        meta:{
            isHideFooter:true
        }
    },
    {   
        name:'search',
        path:'/search/:keyword?',
        component:Search,
        props:route=>({
            kw3:route.params.keyword
        })
    },
]
import MainRoot from './Pages/Client/MainRoot'
import Home from "./Pages/Client/Home"
import WishList from "./Pages/Client/WishList"
import Contact from './Pages/Client/Contact'
import Product from './Pages/Client/Product'
import Detail from './Pages/Client/Detail'
import AdminRoots from './Pages/Admin/AdminRoots'
import AdminHome from './Pages/Admin/Home'
import DashBoard from './Pages/Admin/DashBoard'
const ROUTES=[
    {
       path:"/",
       element:<MainRoot/>,
       children:[
        {
            path:"",
            element:<Home/>
        },
        {
            path:"WishList",
            element:<WishList/>
        },
        {
            path:"Product",
            element:<Product/>
        }
        , {
            path:"Contact",
            element:<Contact/>
        }
        , {
            path:"/:id",
            element:<Detail/>
        }
       ] 
    },
    {
        path:"/admin",
        element:<AdminRoots/>,
        children:[
            {
                path:"",
                element:<AdminHome/>
            },
            {
                path:"DashBoard",
                element:<DashBoard/>
            }
        ]
    }
   
]

export default ROUTES
import { Navigate, createBrowserRouter } from "react-router-dom";
import  Main   from  '../layout/Main' 
import Home from '../pages/Home/Home/Home'
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";
import Login from "../layout/Login/Login";
import SignIn from "../pages/Logins/SignIn/SignIn";
import Register from "../pages/Logins/Register/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element:<Login></Login>,
        children:[
            {
                path:'/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path:'/login',
                element:<SignIn></SignIn>
            },
            {
                path:'/register',
                element: <Register></Register>
            }
        ]
       
    },
    {
        path: 'category',
        element: <Main></Main>,
        children:[
            {
                path: ':id',
                element:<Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/catagoris/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element:<News></News>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }

]);

export default router;
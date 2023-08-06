import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayount from "./Layount/MainLayount";
import CarsPages from "./Pages/CarsPages/CarsPages";
import PostsPages from "./Pages/PostsPages/PostsPages";
import CommentsPages from "./Pages/CommentsPages/CommentsPages";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayount/>,
        children: [
            {
                index: true,
                element: <Navigate to={'cars'}/>
            },
            {
                path:'cars',
                element:<CarsPages/>
            },
            {
                path:'posts',
                element:<PostsPages/>
            },
            {
                path:'comments',
                element:<CommentsPages/>
            }


        ]
    }
])
export {router}
import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayount from "./layount/MainLayount/MainLayount";
import PagePosts from "./Pages/PagePosts";

const router = createBrowserRouter([
    {
        path:'',
        element:<MainLayount/>,
        children:[
            {
                index:true,
                element:<Navigate to={'posts'}/>
            },
            {
                path:'posts',
                element:<PagePosts/>
            }
        ]
    }
])
export {
    router
}
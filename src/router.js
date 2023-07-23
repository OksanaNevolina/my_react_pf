import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayount from "./layouts/MainLayount";
import TodosPage from "./pages/TodosPage/TodosPage";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import CommentPage from "./pages/CommentPage/CommentPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import NotFountPage from "./pages/NotFountPage/NotFountPage";

const router =  createBrowserRouter([
    {
        path: '',
        element: <MainLayount/>,
        children: [
            {
              index:true,
                element:<Navigate to={'todos'}/>

            },
            {
                path:'todos',
                element:<TodosPage/>
            },
            {
                path:'albums',
                element:<AlbumsPage/>
            },
            {
                path:'comments',
                element:<CommentPage/>,
                children:[
                    {
                        path:'posts/:postId',
                        element:<PostsPage/>
                    }
                ]
            },
        ]

    },
    {
        path:'*',
        element:<NotFountPage/>
    }

])
export default router
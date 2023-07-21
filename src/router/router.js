import {createBrowserRouter, Outlet} from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Todos from "../components/todos/Todos";


const AppLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
};
export const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        errorElement: <h1>OOOPSSSSS </h1>,
        children: [
            {
                path: "/",
                element: <p>kjksjdksj</p>
            },
            {
                path: "/todos",
                element: <Todos/>
            }

        ]
    },
]);
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/category/CategoryNews";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                index: true,
                Component: Home
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: ()=>fetch('/news.json')
            }
        ],
    },
    {
        path: '/auth',
        element:<h1>Authentication page</h1>
    },
    {
        path: '/news',
        element: <h1>News Layout</h1>
    },
    {
        path: '/*',
        element:<h1>404</h1>
    }
]);
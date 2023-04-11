import {createBrowserRouter} from "react-router-dom";
import Home from "../Screens";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/home",
        element: <Home/>,
    },
]);

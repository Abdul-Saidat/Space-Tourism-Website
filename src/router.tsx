import { createHashRouter } from "react-router-dom";
import { Layout } from "./layouts/layout";
import { Home } from "./pages/Home";
import { Crew } from "./pages/Crew";
import { Destination } from "./pages/Destination";
import { Technology } from "./pages/Technology"


export const router = createHashRouter([
     {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/Home",
                element: <Home/>
            },
             {
                path: "/Crew",
                element: <Crew/>
            },
             {
                path: "/Destination",
                element: <Destination/>
            },
             {
                path: "/Technology",
                element: <Technology/>
            }
        ]
    },

    // {
    //     path: "",
    //     element: <Layout/>
    // }
])
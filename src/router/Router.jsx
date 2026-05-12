import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/homepage/Home";
import FriendDetails from "../pages/appDetails/FriendDetails";
import Timeline from "../pages/timeline/Timeline";
import Stats from "../pages/dashboard/Stats";
import NotFound from "../pages/NotFoundPage/NotFound"; 

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        
        errorElement: <NotFound />, 
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/friend/:id",
                element: <FriendDetails />,
            },
            {
                path: "/timeline",
                element: <Timeline />,
            },
            {
                path: "/stats",
                element: <Stats />,
            },
        ],
    },
]);

export default router;
import {Outlet , createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout"
import Home from "../pages/Home"
import Donationpage from "../pages/Donationpage"
import Statistics from "../pages/Statistics"
import Donationdetail from "../pages/Donationdetail"
import ErrorPage from "../pages/Donationdetail"


const mycreatedRoute = createBrowserRouter([
    {
        path :"/",
        element :<Mainlayout></Mainlayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children :[
            {
                path :"/",
                element : <Home></Home>,
                loader : ()=> fetch('/donation.json'),
              
            },
            {
                path :"/Donationpage",
                element : <Donationpage></Donationpage>,
            },
            {
                path :"/Statistics",
                element : <Statistics></Statistics>,
            },
            {
                path :"/Donations/:id",
                element : <Donationdetail></Donationdetail>,
                loader : ()=> fetch('/donation.json'),
            },

        ]

    }
])

export default mycreatedRoute;
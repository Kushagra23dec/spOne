import React from "react";
import ReactDOM from "react-dom/client.js";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Cards from "./components/Cards";
import Body from "./components/Body";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About.js";
import CardDetails from "./components/CardDetails";
import Error from "./components/Error";
const AppLayout = ()=>{
    return(
        <>
        <Nav />
        <Outlet/>
        <Footer /> 
        </>
    );
}

const appRouter = createBrowserRouter(
    [
        {
            path:"/",
            element:<AppLayout/>,
            errorElement: <Error />,
            children:[
                {
                    path:"/",
                    element:<Body/>
                },{
                path:"/about",
                element:<About />
                },
                {
                path:"/contact",
                element:<Contact/>
                },
                {
                    path:"/cardDetails/:id",
                    element:<CardDetails />
                }
        ]
        } 
        
    ]
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
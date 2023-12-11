import React from "react";

import ReactDOM  from "react-dom/client";

import onlineStatus from "./useOnlineStatus";
import Body from "./Body";
import About from "./About";
import Header from "./header";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
//import Error from "./Error";
  const AppLayout = () => {
    return (
        <div>

            <Header />

            {/*outlet is replaced by corresponding childern*/}
            <Outlet/>
        </div>
    )
}
  const router1= createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
     // loader: rootLoader,
      children: [
        {
          path: "/body",
          element: <Body />,
          //loader: teamLoader,
        },


        {
            path:"/about",
            element:<About/>
        }
      ],
      //errorElement:<Error />,
    },
  ]);


// const App=()=>{

//     const online=onlineStatus();
//     return (
//        <div> 
//         <Body/>
//         <div>
//           {
//         online?("online"):("offline")}
            
//         </div>
//         </div>
//     )
// }

// const root=document.getElementById("root");
// const rooot=ReactDOM.createRoot(root)
// rooot.render(<App/>)


const rooot = ReactDOM.createRoot(document.getElementById("root"));
rooot.render(<RouterProvider router={router1}/>)
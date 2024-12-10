import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Homepage from "../Home/Homepage";

let router=createBrowserRouter([
    {
        path:'/Ass2',
        element: <App/> ,
        children:[
            {
                path:'/Ass2',
                element:<Homepage/>
            }
        ]
    }
])

export default router
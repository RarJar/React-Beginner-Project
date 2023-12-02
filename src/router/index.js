import {
  createBrowserRouter,
} from "react-router-dom";
import App from '../App';
import Home from '../pages/Home';
import Post from '../pages/Post';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
       {    
        path: "",
        element: <Home />, 
       },
       {    
        path: "posts",
        element: <Post/>, 
       }
    ]
  },
]);

export default router;
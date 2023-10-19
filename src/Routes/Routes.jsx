import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home";
import About from "../Components/About";
import Career from "../Components/Career";
import Login from "../Components/Login";
import Register from "../Components/Register";
import NewsDetails from "../Components/NewsDetails";
import PrivateRoute from "../Components/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:() => fetch('/news.json')
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/career',
          element:<Career></Career>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/news/:id',
          element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;
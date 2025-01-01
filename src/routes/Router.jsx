import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/errorPage/ErrorPage";

const Router = createBrowserRouter ([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <h1>Hello Home</h1>
        },
      ]
    },
  ]);

export default Router;
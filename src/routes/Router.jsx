import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import Assignments from "../pages/assignments/Assignments";
import PendingAssignments from "../pages/pendingAssignments/PendingAssignments";

const Router = createBrowserRouter ([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element:<Home></Home>,
        },
        {
            path: 'assignments',
            element: <Assignments></Assignments>,
        },
        {
            path: 'pendingAssignments',
            element: <PendingAssignments></PendingAssignments>,
        },
      ]
    },
  ]);

export default Router;
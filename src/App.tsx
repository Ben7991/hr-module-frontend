import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/auth/Login";
import AuthLayout from "./components/layouts/AuthLayout";

export default function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/", 
      element: <AuthLayout />,
      children:[
        {index:true, element: <Login /> }
      ]
    }
  ]);

  return <RouterProvider router={appRouter}/>
}

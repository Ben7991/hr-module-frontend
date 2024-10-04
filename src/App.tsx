import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import TwoFA from "./pages/auth/TwoFA";
import PasswordReset from "./pages/auth/PasswordReset";

export default function App() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login/> },
    { path: "forgot-password", element: <ForgotPassword/> },
    { path: "2fa", element: <TwoFA/> },
    { path: "password-reset", element: <PasswordReset /> }
  ]);

  return <RouterProvider router={appRouter}/>
}

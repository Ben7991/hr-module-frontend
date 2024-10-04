import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import TwoFA from "./pages/auth/TwoFA";
import PasswordReset from "./pages/auth/PasswordReset";
import EmailVerification from "./pages/auth/EmailVerification";

export default function App() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login/> },
    { path: "forgot-password", element: <ForgotPassword/> },
    { path: "2fa", element: <TwoFA/> },
    { path: "password-reset", element: <PasswordReset/> },
    { path: "email-verification", element: <EmailVerification/> },
  ]);

  return <RouterProvider router={appRouter}/>
}

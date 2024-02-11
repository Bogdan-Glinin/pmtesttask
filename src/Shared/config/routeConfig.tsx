import { createBrowserRouter } from "react-router-dom";
import { ProfilePage } from "../../Pages/ProfilePage";
import { LibraryPage } from "../../Pages/LibraryPage";
import { Login } from "../../Pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LibraryPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  { path: "/login",
    element: <Login /> 
  },
]);

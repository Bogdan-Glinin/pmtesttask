import { RouterProvider } from "react-router-dom";
import { router } from "../Shared/config/routeConfig";
import { SnackbarProvider } from "notistack";

const App = () => {
  return(
    <>
    <SnackbarProvider />
    <RouterProvider router={router} /></>
  )
}

export default App;
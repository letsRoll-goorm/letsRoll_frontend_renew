import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Main from "./pages/main/Main";
import NotFound from './pages/error/notFound/NotFound'
import Login from "./pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Main /> },
      { path: 'login', element: <Login/>}
    ],
    errorElement: <NotFound />
  }
]);

export default router;
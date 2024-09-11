import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useRecoilState } from "recoil";
import { IsLoginState } from "./recoil/login";
import "react-toastify/dist/ReactToastify.css";
import { StyledToastContainer } from "./StyledComponents";

import NotFoundPage from "./pages/NotFoundPage";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Meetings from "./pages/Meetings";
import Login from "./pages/Login";

function App() {
  const [isLogin, setIsLogin] = useRecoilState(IsLoginState);

  useEffect(() => {
    setIsLogin(JSON.parse(localStorage.getItem("isLogin")));
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root isLogin={isLogin} />,
      errorElement: <NotFoundPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/meetings",
          element: <Meetings />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login isLogin={isLogin} setIsLogin={setIsLogin} />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <StyledToastContainer />
    </>
  );
}

export default App;

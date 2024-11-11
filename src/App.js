import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useRecoilState } from "recoil";
import { AccessTokenState } from "./recoil/login";

import "react-toastify/dist/ReactToastify.css";
import { StyledToastContainer } from "./StyledComponents";

import NotFoundPage from "./pages/NotFoundPage";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admins from "./pages/admin/Admins";
import SignUpAndResignAdmins from "./pages/admin/SignUpAndResignAdmins";
import Users from "./pages/user/Users";
import SignUpAndResignUsers from "./pages/user/SignUpAndResignUsers";
import ForceResignUsers from "./pages/user/ForceResignUsers";
import Meetings from "./pages/meetings/Meetings";
import CreateRegMeetings from "./pages/meetings/CreateRegMeetings";
import DeleteMeetings from "./pages/meetings/DeleteMeetings";
import Comments from "./pages/comment/Comments";
import DeleteComments from "./pages/comment/DeleteComments";
import HashTags from "./pages/HashTags";

function App() {
  const [accessToken, setAccessToken] = useRecoilState(AccessTokenState);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setAccessToken(accessToken);
  }, [setAccessToken]);

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        accessToken === null || accessToken === "invalid password" ? (
          <Login accessToken={accessToken} setAccessToken={setAccessToken} />
        ) : (
          <Root setAccessToken={setAccessToken} />
        ),
      errorElement: <NotFoundPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/admins",
          element: <Admins />,
        },
        {
          path: "/signUpAndResignAdmins",
          element: <SignUpAndResignAdmins />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/signUpAndResignUsers",
          element: <SignUpAndResignUsers />,
        },
        {
          path: "/forceResignUsers",
          element: <ForceResignUsers />,
        },
        {
          path: "/meetings",
          element: <Meetings accessToken={accessToken} />,
        },
        {
          path: "/createRegMeetings",
          element: <CreateRegMeetings />,
        },
        {
          path: "/deleteMeetings",
          element: <DeleteMeetings accessToken={accessToken} />,
        },
        {
          path: "/comments",
          element: <Comments />,
        },
        {
          path: "/deleteComments",
          element: <DeleteComments />,
        },
        {
          path: "/hashTags",
          element: <HashTags />,
        },
      ],
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

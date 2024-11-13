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
import Users from "./pages/users/Users";
import SignUpAndResignUsers from "./pages/users/SignUpAndResignUsers";
import ForceResignUsers from "./pages/users/ForceResignUsers";
import Meetings from "./pages/meetings/Meetings";
import CreateRegMeetings from "./pages/meetings/CreateRegMeetings";
import DeleteMeetings from "./pages/meetings/DeletedMeetings";
import ForceDeletedMeetings from "./pages/meetings/ForceDeletedMeetings";
import MeetingReviews from "./pages/meetingReviews/MeetingReviews";
import DeletedMeetingReviews from "./pages/meetingReviews/DeletedMeetingReviews";
import ForceDeletedMeetingReviews from "./pages/meetingReviews/ForceDeletedMeetingReviews";
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
          element: <Users accessToken={accessToken} />,
        },
        {
          path: "/signUpAndResignUsers",
          element: <SignUpAndResignUsers />,
        },
        {
          path: "/forceResignUsers",
          element: <ForceResignUsers accessToken={accessToken} />,
        },
        {
          path: "/meetings",
          element: <Meetings accessToken={accessToken} />,
        },
        {
          path: "/createAndEditRegMeetings",
          element: <CreateRegMeetings accessToken={accessToken} />,
        },
        {
          path: "/deletedMeetings",
          element: <DeleteMeetings accessToken={accessToken} />,
        },
        {
          path: "/forceDeletedMeetings",
          element: <ForceDeletedMeetings accessToken={accessToken} />,
        },
        {
          path: "/meetingReviews",
          element: <MeetingReviews accessToken={accessToken} />,
        },
        {
          path: "/deletedMeetingReviews",
          element: <DeletedMeetingReviews accessToken={accessToken} />,
        },
        {
          path: "/forceDeletedMeetingReviews",
          element: <ForceDeletedMeetingReviews accessToken={accessToken} />,
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

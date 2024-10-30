import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
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
          element: <Meetings />,
        },
        {
          path: "/createRegMeetings",
          element: <CreateRegMeetings />,
        },
        {
          path: "/deleteMeetings",
          element: <DeleteMeetings />,
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
        {
          path: "/login",
          element: <Login />,
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

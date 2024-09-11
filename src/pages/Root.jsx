import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

export default function Root() {
  return (
    <div className="w-full">
      <SideBar />
      <Outlet />
    </div>
  );
}

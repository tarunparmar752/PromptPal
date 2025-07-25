import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

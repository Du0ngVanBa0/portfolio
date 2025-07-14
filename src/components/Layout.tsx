import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
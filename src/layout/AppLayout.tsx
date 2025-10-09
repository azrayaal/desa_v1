import { SidebarProvider } from "../context/SidebarContext";
import { Outlet } from "react-router";
import AppHeader from "./AppHeader";

const LayoutContent: React.FC = () => {
  return (
    <div className="min-h-screen xl:flex">
      <div className={`flex-1`}>
        <AppHeader />
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const AppLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default AppLayout;

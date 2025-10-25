import { SidebarProvider } from "../context/SidebarContext";
import { Outlet } from "react-router";
import AppHeader2 from "./AppHeader2";

const LayoutContent: React.FC = () => {
  return (
    <div className="min-h-screen xl:flex">
      <div className={`flex-1`}>
        <AppHeader2 />
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const AppLayout2: React.FC = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default AppLayout2;

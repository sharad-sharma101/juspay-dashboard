import { Outlet } from "react-router-dom";
// import LeftSidebar from "./LeftSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { LeftSidebar } from "@/components/ui/left-sidebar"
import { RightSidebar } from "../ui/right-sidebar";
import Topbar from "../ui/Topbar";
// import { useState } from "react";

export const MainLayout = () => {
  return (
    <div className="w-screen h-screen flex">
      <SidebarProvider id="left-sidebar" className="max-w-[3rem]">
        <LeftSidebar />
      </SidebarProvider>

      <SidebarProvider id="right-sidebar">
        <main className="w-full ml-[14rem]" >
          <Topbar />
          <Outlet />
          <SidebarTrigger />
        </main>
        <RightSidebar />
      </SidebarProvider>
    </div>
  );
};
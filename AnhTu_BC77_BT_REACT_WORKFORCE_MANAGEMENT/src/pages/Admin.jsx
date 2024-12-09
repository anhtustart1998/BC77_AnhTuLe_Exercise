import React from "react";
import { AdminSideBar } from "../components/AdminSidebar/AdminSidebar";
import { Outlet } from "react-router";

export const Admin = () => {
  return (
    <div>
      <div className="grid grid-cols-5 gap-3 mx-auto max-w-[90rem] mt-5 mb-10">
        <div className="col-span-1">
          <AdminSideBar />
        </div>
        <div className="col-span-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

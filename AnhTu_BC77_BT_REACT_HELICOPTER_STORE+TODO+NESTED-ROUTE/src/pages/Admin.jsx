import React, { useEffect, useState } from "react";
import { AdminSideBar } from "../components/Sidebar/Sidebar";
import { AdminTable } from "../components/Table/AdminTable";
import axios from "axios";
import { Outlet } from "react-router-dom";

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

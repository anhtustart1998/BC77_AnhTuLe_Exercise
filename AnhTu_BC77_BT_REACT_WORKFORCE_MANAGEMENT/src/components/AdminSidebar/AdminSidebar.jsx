import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";

export function AdminSideBar() {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item icon={HiChartPie}>
            <NavLink
              className={(props) =>
                props.isActive
                  ? "text-red-500 font-semibold border border-white dark:border-gray-800 shadow-xl hover:text-blue-500 transition-colors"
                  : " hover:text-blue-500 transition-colors"
              }
              to={"/employee-list"}
            >
              Employee Dashboard
            </NavLink>
          </Sidebar.Item>
          <Sidebar.Item icon={HiViewBoards}>
            <NavLink
              className={(props) =>
                props.isActive
                  ? "text-red-500 font-semibold border border-white dark:border-gray-800 shadow-xl hover:text-blue-500 transition-colors"
                  : " hover:text-blue-500 transition-colors"
              }
              to={"/employee-form"}
            >
              Employee Form
            </NavLink>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

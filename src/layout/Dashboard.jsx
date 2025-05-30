import { NavLink, Outlet } from "react-router-dom";
import { IoIosCart, IoMdHome } from "react-icons/io";
import { MdOutlineReviews } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { GiWallet } from "react-icons/gi";
import { BsCalendar2DateFill } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";

const Dashboard = () => {
  return (
    <div className="flex max-w-screen-xl mx-auto min-h-screen">
      {/* Sidebar */}
      <div className="w-64  bg-yellow-600 ">
        <ul className="menu menu-vertical w-full p-4 gap-4 text-xl font-semibold">
          <li className=" ">
            <NavLink
              to="/dashboard/userHome"
              className={({ isActive }) => (isActive ? "text-white" : "")}
            >
              <IoMdHome /> User Home
            </NavLink>
          </li>
          <li className=" ">
            <NavLink
              to="/dashboard/reservation"
              className={({ isActive }) => (isActive ? "text-white" : "")}
            >
              <SlCalender /> Reservation
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/dashboard/paymentHistory"
              className={({ isActive }) => (isActive ? "text-white" : "")}
            >
              <GiWallet /> Payment History
            </NavLink>
          </li>
          <li className=" ">
            <NavLink
              to="/dashboard/cart"
              className={({ isActive }) => (isActive ? "text-white" : "")}
            >
              <IoIosCart /> My Cart
            </NavLink>
          </li>

          <li className="">
            <NavLink
              to="/dashboard/review"
              className={({ isActive }) => (isActive ? "text-white" : "")}
            >
              <MdOutlineReviews /> Add Review
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/dashboard/bookings"
              className={({ isActive }) => (isActive ? "text-white" : "")}
            >
              <BsCalendar2DateFill /> My Booking
            </NavLink>
          </li>
          <div className="divider"></div>
          <li className="">
            <NavLink to="/">
              <IoMdHome /> Home
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/order/salad">
              <BiMenu /> Menu
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard Content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

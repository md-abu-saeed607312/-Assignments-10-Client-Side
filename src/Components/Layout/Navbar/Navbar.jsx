import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { TheContext } from "../../../Auth Provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, singOurUser } = useContext(TheContext);
  const [showDropdown, setShowDropdown] = useState(false); // State for mobile toggle
  const notify = () => toast.success("Signed Out Successfully!");

  const signOutHandel = () => {
    singOurUser()
      .then(() => {
        notify();
        setShowDropdown(false); // Close menu on logout
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLink = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-blue-500 text-white px-3 py-1 rounded" : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-blue-500 text-white px-3 py-1 rounded" : ""
          }
          to="/allsports"
        >
          All Sports Equipment
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-blue-500 text-white px-3 py-1 rounded" : ""
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white px-3 py-1 rounded" : ""
              }
              to="/myequipment"
            >
              My Equipment List
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white px-3 py-1 rounded" : ""
              }
              to="/addequipment"
            >
              Add Equipment
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="w-full backdrop-blur-md bg-white/30 fixed z-50">
      <div className="navbar bg-base-100 shadow-sm md:px-12">
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          {/* Logo */}
          <Link to="/" className="btn btn-ghost text-xl">
            SportsZone
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="focus:outline-none"
              >
                <img
                  src={user?.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer"
                />
              </button>

              {/* Profile Dropdown */}
              <div
                className={`absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md py-2 z-50 transition-all ${
                  showDropdown ? "block" : "hidden"
                } md:showDropdown ? "block" : "hidden"`}
              >
                <p className="text-sm font-semibold px-4">
                  {user?.displayName || "User"}
                </p>
                <p className="text-xs text-gray-600 px-4">{user?.email}</p>
                <button
                  onClick={signOutHandel}
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
                >
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-blue-600 px-3 py-1.5 rounded-lg text-white mr-2"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-green-600 px-3 py-1.5 rounded-lg text-white"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;


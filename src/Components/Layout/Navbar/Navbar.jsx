import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { TheContext } from "../../../Auth Provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, singOurUser } = useContext(TheContext);
  const notify = () => toast.success("Signed Out Successfully!");

  const signOutHandel = () => {
    singOurUser()
      .then(() => {
        notify();
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
      <div className="navbar bg-base-100 shadow-sm px-12">
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
          {/* LOgo  */}
          <Link to="/" className="btn btn-ghost text-xl">
            SportsZone
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-4">
              {/* User Profile */}
              <div className="relative group">
                <img
                  src={user?.photoURL|| "https://via.placeholder.com/40"}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer"
                />
                <div className="absolute md:-left-1/5 transform -translate-x-1/2 mt-2 md:hidden group-hover:block bg-white shadow-lg rounded-lg p-2">
                  <p className="text-sm font-semibold">
                    {user?.displayName || "User"}
                  </p>
                  <p className="text-xs text-gray-600">{user?.email}</p>
                  {/* Sign Out Button */}
                  <button
                    onClick={signOutHandel}
                    className="bg-red-500 my-2 px-3 py-1.5 rounded-lg text-white"
                  >
                    Log Out
                  </button>
                </div>
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

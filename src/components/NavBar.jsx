import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/assignments">Assignments </NavLink>
      </li>
      <li>
        <NavLink to="/pendingAssignments">Pending Assignments</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-cyan-600 py-5 ">
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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
            className="menu menu-sm dropdown-content  bg-base-100 rounded-box z-[1] mt-3 w-52 p-3  shadow"
          >
            {links}
          </ul>
        </div>
        <div  className="flex items-center gap-5">
          <div>
            <img className="w-[40px]" src={logo} alt="" />
          </div>
          <div>
            <Link className="font-bold text-white text-2xl">
              <span className="text-gray-900">Pro</span>Academy
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-white text-base px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-3">
          {/* <div>
            {user && user?.email ? (
              <div className=" w-[50px] h-[50px]">
                <img
                  className="border-2 w-full h-full rounded-xl"
                  src={user.photoURL}
                  alt=""
                />
              </div>
            ) : (
              ""
            )}
          </div> */}

          {/* 
          <div>
            {user && user?.email ? (
              <Link
                onClick={logOut}
                to="/auth/login"
                className=" text-xs md:text-sm bg-red-500 text-white btn"
              >
                Log Out
              </Link>
            ) : (
              <Link
                to="/auth/login"
                className=" text-xs md:text-sm  bg-gray-800 border-none text-white     btn"
              >
                Login
              </Link>
            )}
          </div> */}

          <Link
            to="/"
            className=" text-xs md:text-sm  bg-gray-800 border-none text-white     btn"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

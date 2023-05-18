import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
               All Toys
              </a>
            </li>
            <li>
              <a>My Toys</a>
            </li>
            <li>
              <a>Add a Toys</a>
            </li>
            <li>
              <a>Blogs</a>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl font-bold">Babys Car <img src="logo.png" alt="" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li tabIndex={0}>
            <a>
             All Toys
            </a>
          </li>
          <li>
            <a>My Toys</a>
          </li>
          <li>
            <a>Add a Toys</a>
          </li>
          <li>
            <a>Blogs</a>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end avatar">
          <div className="w-8 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
      </div>
    </div>
  );
};

export default Navbar;

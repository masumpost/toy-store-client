import { useContext } from 'react';
import { NavLink} from 'react-router-dom'
import { AuthContext } from '../../porviders/AuthProviders';
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);

  const handelLogout = () => {
    logOut()
    .then(() => {})
    .catch(error => console.log(error))
  }

  return (
    <div className="navbar bg-base-100 my-4">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-3"
          >
            <li>
              <NavLink className="${isActive ? 'text-blue-500' : 'text-gray-500'}" to='/'>Home</NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink to='/allToys'>All Toys</NavLink>
            </li>
            <li>
              <NavLink to='/blogs'>Blogs</NavLink>
            </li>
            <li>
             {
              user?  <NavLink to='myToys'>My Toys</NavLink> : ''
             }
            </li>
            <li>
             {
              user?  <NavLink to='/addToys'>Add a Toys</NavLink> : ''
             }
            </li>
            <li>
              {
                user? <span>{user.email}</span> : <NavLink to='/login'>Login</NavLink>
              }
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl font-bold">Babys Car <img src="logo.png" alt="" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/blogs'>Blogs</NavLink>
          </li>
          <li>
            <NavLink to='/allToys'>All Toys</NavLink>
          </li>
          <li tabIndex={0}>
            {
              user? <NavLink to='myToys'>My Toys</NavLink> : ''
            }
          </li>
          <li>
            {
              user? <NavLink to='/addToys'>Add a Toys</NavLink> : ''
            }
          </li>
         
          
        </ul>
      </div>
      <div className="navbar-end avatar flex gap-4 items-center">
              
             <div>
             {
              user? <FaUserCircle title={user.email} className='text-4xl items-center mr-2'></FaUserCircle> : ''
             }
             </div>

              <div>
              {
                user? <> <button onClick={handelLogout} className='btn btn-primary mt-2'>LogOut</button></> : <NavLink to='/login'><button className='btn btn-primary mt-2'>Login</button></NavLink>
              }
              </div>
          
      </div>
    </div>
  );
};

export default Navbar;

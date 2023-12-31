import {Link,useLocation, useNavigate} from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { AuthContext } from '../../porviders/AuthProviders';

const Login = () => {
  const [error, setError] = useState('');
  const {signIn, googleLoggedIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)
  const from = location?.state?.from?.pathname || '/';


  const handelLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = {email, password}
    console.log(user);

    signIn(email, password)
    .then(result => {
      const LoggedUser = result.user;
      console.log(LoggedUser)
      navigate(from, { replace: true })
      form.reset();
    })
    .catch(error => {
      console.log(error.massage)
      setError(error.message);
    })
  }

  const handelGoogle = () => {
    googleLoggedIn()
    .then(result => {
      const user = result.user;
      console.log(user)
    })
    .catch(error => {
      console.log(error)
      setError(error.message)
    })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
         <form onSubmit={handelLogin}>
         <div className="card-body">
          <h1 className="text-2xl font-bold text-center">Please Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                name='email'
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name='password'
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className='btn btn-primary' type="submit" value="Login" />
            </div>
            <p className='my-2'><>New in Babys toy? <span className='font-bold'><Link to="/register">Register</Link></span></></p>
            <div className='text-center'>
              <p className='font-bold'>or</p>
              <h6 className='flex items-center gap-2 justify-center my-2 bg-slate-500 p-3 rounded-md text-white font-semibold cursor-pointer' onClick={handelGoogle}>Sign In With Google <span className='text-blue-800 text-2xl'><FaGoogle /></span></h6>
            </div>
          </div>
          <p className='text-center font-semibold text-red-600 my-3'>{error}</p>
         </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { AuthContext } from '../../porviders/AuthProviders';

const Register = () => {


  const {createUser} = useContext(AuthContext);

    const handelRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const register = {name, email, password, photo}
        console.log(register);

        createUser(email, password)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
          form.reset();
        })
        .catch(error => {
          console.log(error)
        });

    }

    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelRegister}>
          <div className="card-body">
          <h1 className="text-2xl font-bold text-center">Please Register</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                name='name'
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="photo"
                className="input input-bordered"
                name='photo'
              />
            </div>
            <div className="form-control mt-6">
              <input className='btn btn-primary' type="submit" value="Register" />
            </div>
            <p className='my-2'><>Already Have an account? <span className='font-bold'><Link to="/login">Login</Link></span></></p>
          </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Register;
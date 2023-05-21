import { useContext } from "react";
import { AuthContext } from "../porviders/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import Swal from 'sweetalert2'


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children
    }
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Need to login first!'
      })
    return (
          <Navigate state={{from:location}} to="/login" replace></Navigate>
    );
};

export default PrivateRoute;
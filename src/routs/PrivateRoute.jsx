import { useContext } from "react";
import { AuthContext } from "../porviders/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);
    const location = useLocation();
   

    if(user){
        return children
    }

    return (<>
        
        <ToastContainer></ToastContainer>
        <Navigate state={{from:location}} to="/login" replace></Navigate>
    </>
    );
};

export default PrivateRoute;
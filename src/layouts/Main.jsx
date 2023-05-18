import { Outlet } from 'react-router-dom';
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
import  {Outlet}  from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Logo from "../components/header/Logo";

const Mainlayout = () => {
    return (
        <div >
          <div className='w-full  px-3 md:px-7 lg:px-20 flex justify-between py-3'>
          <Logo></Logo>
            <Navbar></Navbar></div>  
            <Outlet></Outlet>
          
        </div>
    );
};

export default Mainlayout;
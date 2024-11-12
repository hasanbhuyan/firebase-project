import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="my-5 flex gap-10">
            <NavLink to='/' className='bg-green-500 rounded-lg py-3 px-5'>Home</NavLink>
            <NavLink to='login' className='bg-green-500 rounded-lg py-3 px-5' >Login</NavLink>
        </div>
    );
};

export default Header;
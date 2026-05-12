import { Link, NavLink } from "react-router-dom";
import logoImg from "../../assets/logo.png";

const Navbar = () => {
    const navLinkStyles = ({ isActive }) => 
        `flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all ${
            isActive ? "bg-[#244235] text-white" : "text-gray-500 hover:bg-gray-100"
        }`;

    return (
        <nav className="bg-white border-b py-4 px-10 flex justify-between items-center sticky top-0 z-50">
            <Link to="/">
                <img src={logoImg} alt="KeenKeeper" className="h-8" />
            </Link>
            <div className="flex gap-4">
                <NavLink to="/" className={navLinkStyles}>Home</NavLink>
                <NavLink to="/timeline" className={navLinkStyles}>Timeline</NavLink>
                <NavLink to="/stats" className={navLinkStyles}>Stats</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
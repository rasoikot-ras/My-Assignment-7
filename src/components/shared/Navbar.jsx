import { NavLink, Link } from "react-router-dom";
import logoImg from "../../assets/logo.png"; //

const Navbar = () => {
    const active = "text-[#1a2e1a] font-bold bg-green-50 px-4 py-2 rounded-lg";
    const normal = "text-gray-500 px-4 py-2 hover:text-green-700 transition-all";

    return (
        <nav className="bg-white border-b sticky top-0 z-50 py-3 px-10 flex justify-between items-center">
            <Link to="/"><img src={logoImg} alt="Logo" className="h-10" /></Link>
            <div className="flex gap-4">
                <NavLink to="/" className={({isActive}) => isActive ? active : normal}>Home</NavLink>
                <NavLink to="/timeline" className={({isActive}) => isActive ? active : normal}>Timeline</NavLink>
                <NavLink to="/stats" className={({isActive}) => isActive ? active : normal}>Stats</NavLink>
            </div>
        </nav>
    );
};
export default Navbar;
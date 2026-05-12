import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineHome, HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { LuHistory } from "react-icons/lu";
import { GoGraph } from "react-icons/go"; 
import logoImg from "../../assets/logo.png"; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const getLinkStyles = (path) => {
        const baseStyles = "flex items-center gap-2 text-[14px] font-bold transition-all px-4 py-2 rounded-lg";
        return location.pathname === path
            ? `${baseStyles} bg-[#244235] text-white shadow-sm` 
            : `${baseStyles} text-gray-500 hover:text-gray-800`;
    };

    return (
        <nav className="bg-white border-b border-gray-100 py-3 sticky top-0 z-50">
            <div className="container mx-auto px-6 flex justify-between items-center">
                
                
                <Link to="/" className="flex items-center">
                    <img src={logoImg} alt="KeenKeeper Logo" className="h-9 w-auto object-contain" />
                </Link>

                
                <div className="hidden md:flex items-center gap-2">
                    <Link to="/" className={getLinkStyles("/")}>
                        <HiOutlineHome className="text-[18px]" />
                        <span>Home</span>
                    </Link>
                    <Link to="/timeline" className={getLinkStyles("/timeline")}>
                        <LuHistory className="text-[18px]" />
                        <span>Timeline</span>
                    </Link>
                    <Link to="/stats" className={getLinkStyles("/stats")}>
                        <GoGraph className="text-[18px]" />
                        <span>Stats</span>
                    </Link>
                </div>

                
                <button 
                    className="md:hidden text-2xl text-gray-600 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
                </button>
            </div>

            
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-50 absolute w-full left-0 px-6 py-4 shadow-lg flex flex-col gap-3">
                    <Link to="/" onClick={() => setIsOpen(false)} className={getLinkStyles("/")}>
                        <HiOutlineHome className="text-[18px]" />
                        <span>Home</span>
                    </Link>
                    <Link to="/timeline" onClick={() => setIsOpen(false)} className={getLinkStyles("/timeline")}>
                        <LuHistory className="text-[18px]" />
                        <span>Timeline</span>
                    </Link>
                    <Link to="/stats" onClick={() => setIsOpen(false)} className={getLinkStyles("/stats")}>
                        <GoGraph className="text-[18px]" />
                        <span>Stats</span>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
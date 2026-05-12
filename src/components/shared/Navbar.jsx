import { Link, useLocation } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
import { LuHistory } from "react-icons/lu";
import { GoGraph } from "react-icons/go"; 


import logoImg from "../../assets/logo.png"; 

const Navbar = () => {
    const location = useLocation();

    const getLinkStyles = (path) => {
        return location.pathname === path
            ? "bg-[#244235] text-white rounded-lg px-4 py-1.5 shadow-sm" 
            : "text-gray-500 hover:text-gray-800 px-4 py-1.5"; 
    };

    return (
        <nav className="bg-white border-b border-gray-100 py-3 sticky top-0 z-50">
            <div className="container mx-auto px-6 flex justify-between items-center">
                
                
                <Link to="/" className="flex items-center">
                    <img 
                        src={logoImg} 
                        alt="KeenKeeper Logo" 
                        className="h-9 w-auto object-contain" 
                    />
                </Link>

                
                <div className="flex items-center gap-2">
                    <Link 
                        to="/" 
                        className={`flex items-center gap-2 text-[14px] font-bold ${getLinkStyles("/")}`}
                    >
                        <HiOutlineHome className="text-[18px]" />
                        <span>Home</span>
                    </Link>

                    <Link 
                        to="/timeline" 
                        className={`flex items-center gap-2 text-[14px] font-bold ${getLinkStyles("/timeline")}`}
                    >
                        <LuHistory className="text-[18px]" />
                        <span>Timeline</span>
                    </Link>

                    <Link 
                        to="/stats" 
                        className={`flex items-center gap-2 text-[14px] font-bold ${getLinkStyles("/stats")}`}
                    >
                        <GoGraph className="text-[18px]" />
                        <span>Stats</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
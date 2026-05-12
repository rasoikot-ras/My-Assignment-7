import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import logoImg from "../../assets/logo.png";

const Footer = () => (
    <footer className="bg-[#244235] text-white pt-24 pb-12 mt-20">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-black mb-6">KeenKeeper</h2>
            <p className="max-w-2xl mx-auto text-gray-300 mb-12 text-sm leading-relaxed">
                Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
            </p>
            
            <div className="mb-16">
                <p className="font-medium text-xl mb-6 tracking-widest">Social Links</p>
                <div className="flex justify-center gap-4">
                    <a href="#" className="bg-white text-[#244235] p-3 rounded-full hover:scale-110 transition-transform"><FaInstagram size={18}/></a>
                    <a href="#" className="bg-white text-[#244235] p-3 rounded-full hover:scale-110 transition-transform"><FaFacebookF size={18}/></a>
                    <a href="#" className="bg-white text-[#244235] p-3 rounded-full hover:scale-110 transition-transform"><FaXTwitter size={18}/></a>
                </div>
            </div>

            <div className="border-t border-[#345546] pt-10 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-400 gap-4">
                <p>© 2026 KeenKeeper. All rights reserved.</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Terms of Service</a>
                    <a href="#" className="hover:text-white">Cookies</a>
                </div>
            </div>
        </div>
    </footer>
);
export default Footer;
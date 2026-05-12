import { Link } from "react-router-dom";

const NotFound = () => (
    <div className="h-[70vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-9xl font-black text-green-100">404</h1>
        <p className="text-2xl font-bold">Page not found</p>
        <Link to="/" className="mt-8 px-8 py-3 bg-[#1a2e1a] text-white rounded-xl font-bold">Back to Home</Link>
    </div>
);

export default NotFound;
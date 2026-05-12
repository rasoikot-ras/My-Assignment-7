const Banner = () => (
    <div className="text-center py-16 px-4">
        <h1 className="text-5xl font-black text-[#1a2e1a] mb-4">Friends to keep close in your life</h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button className="bg-[#244235] text-white px-8 py-3 rounded-lg mt-8 font-bold hover:bg-[#1a2e1a] transition-all flex items-center gap-2 mx-auto">
            <span>+</span> Add a Friend
        </button>
    </div>
);
export default Banner;
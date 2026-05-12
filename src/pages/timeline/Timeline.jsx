import { useTimeline } from "../../context/TimelineContext";
import { FaPhone, FaMessage, FaVideo, FaHandshake } from "react-icons/fa6";
import { useState } from "react";

const Timeline = () => {
    const { interactions } = useTimeline();
    const [filter, setFilter] = useState("All");

    const filteredInteractions = interactions.filter(item => 
        filter === "All" ? true : item.type === filter
    );

    
    const getIcon = (type) => {
        switch (type) {
            case 'Call': return <FaPhone className="text-gray-600" />;
            case 'Text': return <FaMessage className="text-gray-600" />;
            case 'Video': return <FaVideo className="text-gray-600" />;
            case 'Meetup': return <FaHandshake className="text-yellow-600" />;
            default: return <FaMessage className="text-gray-600" />;
        }
    };

    return (
        <div className="bg-[#F9FBFA] min-h-screen pb-20">
            <div className="container mx-auto px-6 pt-12 max-w-4xl">
                <h1 className="text-4xl font-black text-[#1a2e1a] mb-6">Timeline</h1>
                
                
                <div className="mb-8">
                    <select 
                        onChange={(e) => setFilter(e.target.value)}
                        className="bg-white border border-gray-100 rounded-lg px-4 py-2 text-sm text-gray-500 outline-none w-48 shadow-sm cursor-pointer"
                    >
                        <option value="All">Filter timeline</option>
                        <option value="Call">Call</option>
                        <option value="Text">Text</option>
                        <option value="Video">Video</option>
                        <option value="Meetup">Meetup</option>
                    </select>
                </div>

                
                <div className="space-y-3">
                    {filteredInteractions.length > 0 ? (
                        filteredInteractions.map((item) => (
                            <div 
                                key={item.id} 
                                className="bg-white p-5 rounded-xl border border-gray-50 shadow-sm flex items-center gap-5 hover:shadow-md transition-all"
                            >
                                
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-lg">
                                    {getIcon(item.type)}
                                </div>
                                
                                
                                <div>
                                    <h4 className="text-[15px] font-bold text-gray-800">
                                        {item.type} <span className="font-normal text-gray-500">with</span> {item.name}
                                    </h4>
                                    <p className="text-[12px] text-gray-400 font-medium">
                                        {item.date}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">No data found!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
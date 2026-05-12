import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTimeline } from "../../context/TimelineContext";
import toast from 'react-hot-toast';
import { FaPhone, FaMessage, FaVideo, FaBoxArchive, FaTrash, FaClock, FaHandshake } from "react-icons/fa6";

const FriendDetails = () => {
    const { id } = useParams();
    const [friend, setFriend] = useState(null);
    const { addInteraction, interactions } = useTimeline();

    useEffect(() => {
        fetch('/friends.json')
            .then(res => res.json())
            .then(data => {
                const found = data.find(f => f.id === parseInt(id));
                setFriend(found);
            });
    }, [id]);

    const friendInteractions = interactions.filter(i => i.name === friend?.name);

    const handleAction = (type) => {
        if (friend && friend.name) {
            addInteraction(type, friend.name);
            
            toast.success(`${type} with ${friend.name} logged!`, {
                style: { 
                    borderRadius: '12px', 
                    background: '#244235', 
                    color: '#fff',
                    fontWeight: 'bold' 
                },
            });
        }
    };

    if (!friend) return null;

    return (
        <div className="bg-[#F9FBFA] min-h-screen pb-20 font-sans">
            <div className="container mx-auto px-6 py-12 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    
                    <div className="lg:col-span-4 space-y-4">
                        <div className="bg-white p-10 rounded-xl border border-gray-100 shadow-sm text-center">
                            <img src={friend.picture} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-gray-50" alt={friend.name} />
                            <h2 className="text-xl font-bold text-gray-800 tracking-tight">{friend.name}</h2>
                            <div className="flex flex-col items-center gap-2 my-3">
                                <span className="bg-[#FF4D4D] text-white text-[9px] font-black px-4 py-1 rounded-full uppercase tracking-widest">Overdue</span>
                                <span className="bg-[#E7F3EF] text-[#244235] text-[9px] font-black px-4 py-1 rounded-full uppercase tracking-widest">Family</span>
                            </div>
                            <p className="text-gray-500 italic text-[13px] mb-4">"{friend.bio}"</p>
                            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Preferred: email</p>
                        </div>

                        <div className="space-y-2">
                            <button className="w-full py-4 bg-white border border-gray-100 rounded-lg flex items-center justify-center gap-3 font-bold text-gray-700 text-[10px] uppercase tracking-widest shadow-sm hover:bg-gray-50">
                                <FaClock className="text-gray-400"/> Snooze 2 Weeks
                            </button>
                            <button className="w-full py-4 bg-white border border-gray-100 rounded-lg flex items-center justify-center gap-3 font-bold text-gray-700 text-[10px] uppercase tracking-widest shadow-sm hover:bg-gray-50">
                                <FaBoxArchive className="text-gray-400"/> Archive
                            </button>
                            <button className="w-full py-4 bg-white border border-gray-100 rounded-lg flex items-center justify-center gap-3 font-bold text-[#FF4D4D] text-[10px] uppercase tracking-widest shadow-sm hover:bg-red-50">
                                <FaTrash/> Delete
                            </button>
                        </div>
                    </div>

                    
                    <div className="lg:col-span-8 space-y-6">
                        
                        
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white py-10 rounded-xl border border-gray-100 shadow-sm text-center">
                                <h3 className="text-3xl font-black text-gray-800 tracking-tighter">{friend.days_since_contact}</h3>
                                <p className="text-gray-400 text-[10px] font-bold uppercase mt-2 tracking-widest">Days Since Contact</p>
                            </div>
                            <div className="bg-white py-10 rounded-xl border border-gray-100 shadow-sm text-center">
                                <h3 className="text-3xl font-black text-gray-800 tracking-tighter">{friend.goal}</h3>
                                <p className="text-gray-400 text-[10px] font-bold uppercase mt-2 tracking-widest">Goal (Days)</p>
                            </div>
                            <div className="bg-white py-10 rounded-xl border border-gray-100 shadow-sm text-center">
                                <h3 className="text-[22px] font-black text-gray-800 uppercase tracking-tighter">Feb 27, 2026</h3>
                                <p className="text-gray-400 text-[10px] font-bold uppercase mt-2 tracking-widest">Next Due</p>
                            </div>
                        </div>

                        
                        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
                            <div>
                                <h4 className="font-bold text-gray-700 text-sm uppercase tracking-tight">Relationship Goal</h4>
                                <p className="text-sm text-gray-400">Connect every <span className="font-black text-gray-900">30 days</span></p>
                            </div>
                            <button className="bg-gray-50 px-5 py-2 rounded-lg text-[10px] font-black uppercase text-gray-500 border border-gray-100 hover:bg-gray-100 transition-all">Edit</button>
                        </div>

                        
                        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                            <h4 className="font-bold text-gray-700 text-sm mb-8 uppercase tracking-tight">Quick Check-In</h4>
                            <div className="grid grid-cols-3 gap-6">
                                <button onClick={() => handleAction('Call')} className="py-10 bg-[#F9FBFA] rounded-xl flex flex-col items-center gap-4 hover:bg-gray-100 transition-all group">
                                    <FaPhone className="text-2xl text-gray-700" />
                                    <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Call</span>
                                </button>
                                <button onClick={() => handleAction('Text')} className="py-10 bg-[#F9FBFA] rounded-xl flex flex-col items-center gap-4 hover:bg-gray-100 transition-all group">
                                    <FaMessage className="text-2xl text-gray-700" />
                                    <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Text</span>
                                </button>
                                <button onClick={() => handleAction('Video')} className="py-10 bg-[#F9FBFA] rounded-xl flex flex-col items-center gap-4 hover:bg-gray-100 transition-all group">
                                    <FaVideo className="text-2xl text-gray-700" />
                                    <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Video</span>
                                </button>
                            </div>
                        </div>

                        

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;
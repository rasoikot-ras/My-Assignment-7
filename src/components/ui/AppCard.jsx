import { useNavigate } from 'react-router-dom';

const AppCard = ({ friend }) => {
    const navigate = useNavigate();

    const statusColors = {
        'overdue': 'bg-red-500 text-white',
        'almost due': 'bg-[#FFB800] text-white',
        'on-track': 'bg-[#244235] text-white'
    };

    
    const handleCardClick = () => {
        console.log("Navigating to friend ID:", friend.id);
        navigate(`/friend/${friend.id}`);
    };

    return (
        <div 
            onClick={handleCardClick}
            className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm text-center cursor-pointer hover:shadow-xl transition-all group"
        >
            <img src={friend.picture} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" alt="" />
            <h3 className="text-xl font-bold text-gray-800 leading-tight">{friend.name}</h3>
            <p className="text-[10px] text-gray-400 font-bold mb-4 uppercase">{friend.days_since_contact}d ago</p>
            
            <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                {friend.tags?.map((tag, i) => (
                    <span key={i} className="bg-[#E7F3EF] text-[#244235] text-[9px] font-black px-3 py-1 rounded-full uppercase">
                        {tag}
                    </span>
                ))}
            </div>

            <div className={`text-[10px] font-black py-2 px-6 rounded-full inline-block uppercase tracking-widest ${statusColors[friend.status?.toLowerCase()] || 'bg-gray-200'}`}>
                {friend.status}
            </div>
        </div>
    );
};

export default AppCard;
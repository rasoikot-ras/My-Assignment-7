import { useEffect, useState } from "react";
import Banner from "../../components/homepage/Banner";
import Stats from "../../components/homepage/Stats";
import AppCard from "../../components/ui/AppCard";

const Home = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        fetch("/friends.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("JSON file not found in public folder");
                }
                return res.json();
            })
            .then((data) => {
                setFriends(data);
            })
            .catch((err) => {
                console.error("Data loading error:", err);
            })
            .finally(() => {
                
                setLoading(false); 
            });
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <div className="w-12 h-12 border-4 border-[#244235] border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 font-black text-[#244235] tracking-widest uppercase">Loading Friends</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 pb-20">
            <Banner />
            <Stats friends={friends} />
            
            <div className="mt-12">
                <h2 className="text-2xl font-black text-gray-800 mb-8">All Connections</h2>
                
                {friends.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {friends.map((friend) => (
                            <AppCard key={friend.id} friend={friend} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-red-50 rounded-[32px] border-2 border-dashed border-red-100">
                        <p className="text-red-500 font-bold">No friends found!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
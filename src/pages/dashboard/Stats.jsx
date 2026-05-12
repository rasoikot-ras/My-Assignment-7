import { useTimeline } from "../../context/TimelineContext";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const Stats = () => {
    const { interactions } = useTimeline();

    
    const data = [
        { name: 'Text', value: interactions.filter(i => i.type === 'Text').length },
        { name: 'Call', value: interactions.filter(i => i.type === 'Call').length },
        { name: 'Video', value: interactions.filter(i => i.type === 'Video').length },
    ];

    
    const hasData = interactions.length > 0;

    
    const COLORS = ['#8B5CF6', '#244235', '#4ADE80']; 

    return (
        <div className="bg-[#F9FBFA] min-h-screen pb-20">
            <div className="container mx-auto px-6 pt-12">
                <h1 className="text-4xl font-black text-[#1a2e1a] mb-10">Friendship Analytics</h1>
                
                <div className="bg-white p-12 rounded-[32px] border border-gray-50 shadow-sm max-w-5xl mx-auto min-h-[450px] flex flex-col">
                    <p className="text-gray-500 font-bold text-sm mb-10">By Interaction Type</p>
                    
                    <div className="flex-1 w-full flex items-center justify-center">
                        {hasData ? (
                            <ResponsiveContainer width="100%" height={350}>
                                <PieChart>
                                    <Pie
                                        data={data}
                                        innerRadius={80}
                                        outerRadius={120}
                                        paddingAngle={5}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend 
                                        iconType="circle" 
                                        verticalAlign="bottom" 
                                        align="center"
                                        wrapperStyle={{ paddingTop: "20px", fontWeight: "bold", fontSize: "12px" }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        ) : (
                            
                            <div className="text-center">
                                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <div className="w-12 h-12 border-4 border-gray-100 border-dashed rounded-full animate-pulse"></div>
                                </div>
                                <p className="text-gray-400 font-bold text-sm">No interactions logged yet.</p>
                                
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
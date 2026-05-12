const Stats = ({ friends = [] }) => {
    const data = [
        { label: "Total Friends", val: friends.length },
        { label: "On Track", val: friends.filter(f => f.status.toLowerCase() === 'on-track').length },
        { label: "Need Attention", val: friends.filter(f => f.status.toLowerCase() !== 'on-track').length },
        { label: "Interactions This Month", val: 12 }
    ];

    return (
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
                    <p className="text-4xl font-black text-[#1a2e1a] mb-1">{item.val}</p>
                    
                    <p className="text-[#64748B] text-[18px]">{item.label}</p>
                </div>
            ))}
        </section>
    );
};

export default Stats;
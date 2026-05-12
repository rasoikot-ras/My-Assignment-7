import { createContext, useState, useContext } from 'react';

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
    const [interactions, setInteractions] = useState([]);

    const addInteraction = (type, name) => {
        const newEntry = {
            id: Date.now(),
            type,
            name,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            icon: type // 'Call', 'Text', or 'Video'
        };
        setInteractions([newEntry, ...interactions]);
    };

    return (
        <TimelineContext.Provider value={{ interactions, addInteraction }}>
            {children}
        </TimelineContext.Provider>
    );
};

export const useTimeline = () => useContext(TimelineContext);
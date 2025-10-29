import React from 'react';
import { IconStar } from './Icons';

interface GuideProfileProps {
    name: string;
    title: string;
    description: string;
    isLead?: boolean;
    icon?: React.ReactNode;
}

const GuideProfile: React.FC<GuideProfileProps> = ({ name, title, description, isLead = false, icon }) => {
    const containerClasses = isLead 
        ? 'p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-6 bg-teal-50 border-teal-200 hover:border-teal-400' 
        : 'p-6 rounded-xl shadow-lg flex flex-col items-center gap-4 bg-white border-slate-200 hover:border-teal-300 h-full';
    
    const textAlignment = isLead ? 'text-center md:text-left' : 'text-center';

    return (
        // FIX: Replaced single quotes with backticks to enable template literal for dynamic classes.
        <div className={`${containerClasses} border transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
            {isLead && <IconStar className="h-12 w-12 text-amber-500 flex-shrink-0" />}
            {!isLead && <div className="text-teal-600">{icon}</div>}
             <div className={textAlignment}>
                <h3 className="text-xl font-bold text-slate-800">{name}</h3>
                {/* FIX: Replaced single quotes with backticks to enable template literal for dynamic classes. */}
                <p className={`font-semibold ${isLead ? 'text-teal-700' : 'text-slate-500'} mb-2`}>{title}</p>
                <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
            </div>
        </div>
    );
};

export default GuideProfile;
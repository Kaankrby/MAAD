
import React from 'react';

interface ProgramCardProps {
    week: number;
    title: string;
    description: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ week, title, description }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 border-2 border-transparent hover:border-teal-500 flex flex-col">
            <div className="flex-grow">
                <div className="bg-teal-100 text-teal-700 font-bold w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    {week}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
                <p className="text-slate-600">{description}</p>
            </div>
        </div>
    );
};

export default ProgramCard;

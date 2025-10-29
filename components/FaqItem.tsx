import React, { useState } from 'react';

interface FaqItemProps {
    question: string;
    answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-4"
            >
                <h3 className="text-lg font-semibold text-slate-800">{question}</h3>
                <svg
                    // FIX: Replaced single quotes with backticks to enable template literal for dynamic classes.
                    className={`w-6 h-6 text-teal-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {/* FIX: Replaced single quotes with backticks to enable template literal for dynamic classes. */}
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <p className="pb-4 text-slate-600 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
};

export default FaqItem;
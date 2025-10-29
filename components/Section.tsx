
import React from 'react';

interface SectionProps {
    id: string;
    title: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, icon, children }) => {
    return (
        <section id={id} className="py-16 sm:py-20 scroll-mt-24">
            <div className="flex items-center mb-8">
                 {icon && <div className="mr-4 text-teal-500">{icon}</div>}
                <h2 className="text-3xl font-bold text-slate-800 tracking-tight">{title}</h2>
            </div>
            <div className="pl-0 md:pl-12">
                {children}
            </div>
        </section>
    );
};

export default Section;
import React, { useState } from 'react';
import { IconChevronDown, IconChevronRight } from './Icons';

interface DetailItem {
  title: string;
  theme?: string;
  imbalance?: string;
  practice?: string;
  affirmation?: string;
  colorSymbol?: string;
  tip?: string;
  motto?: string;
}

interface PhilosophyDetailProps {
  details: DetailItem[];
  layerTitle: string;
}

const DetailAccordionItem: React.FC<{ item: DetailItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-4 px-2 hover:bg-slate-100 transition-colors duration-200 rounded-md"
            >
                <h4 className="text-lg font-semibold text-slate-800">{item.title}</h4>
                {isOpen ? <IconChevronDown className="h-5 w-5 text-teal-600" /> : <IconChevronRight className="h-5 w-5 text-slate-500" />}
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4 bg-white grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {item.theme && <div className="mb-2"><strong className="block text-slate-600">Tema:</strong><p>{item.theme}</p></div>}
                    {item.colorSymbol && <div className="mb-2"><strong className="block text-slate-600">Renk / Sembol:</strong><p>{item.colorSymbol}</p></div>}
                    {item.imbalance && <div className="mb-2"><strong className="block text-slate-600">Dengesizlik İşaretleri:</strong><p>{item.imbalance}</p></div>}
                    {item.practice && <div className="mb-2"><strong className="block text-slate-600">Kısa Pratik:</strong><p>{item.practice}</p></div>}
                    {item.affirmation && <div className="md:col-span-2 bg-teal-50 border-l-4 border-teal-500 text-teal-800 p-4 rounded-r-lg"><strong className="block">Onaylama:</strong><p className="italic">“{item.affirmation}”</p></div>}
                </div>
            </div>
        </div>
    );
};


const PhilosophyDetail: React.FC<PhilosophyDetailProps> = ({ details, layerTitle }) => {
    const isSimpleList = details.some(d => d.tip || d.motto);

    return (
        <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-xl animate-fade-in">
            <style>{`
              @keyframes fade-in {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-fade-in {
                animation: fade-in 0.5s ease-out forwards;
              }
            `}</style>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">{layerTitle} Detayları</h3>
            <div className="space-y-2">
                {isSimpleList ? (
                     <ul className="space-y-4">
                        {details.map((item, index) => (
                            <li key={index} className="p-4 bg-white rounded-lg shadow-sm border border-slate-200">
                                <h4 className="font-bold text-teal-700">{item.title}</h4>
                                <p className="text-slate-600">{item.tip || item.motto}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    details.map((item, index) => (
                        <DetailAccordionItem key={index} item={item} />
                    ))
                )}
            </div>
        </div>
    );
};

export default PhilosophyDetail;
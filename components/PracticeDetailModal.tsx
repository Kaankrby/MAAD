import React from 'react';
import { IconX } from './Icons';

interface PracticeDetail {
  title: string;
  purpose: string;
  duration: string;
  preparation: string[];
  steps?: { title: string; description: string }[];
  protocols?: { title: string; steps: string[]; note?: string }[];
  // FIX: Made the description property optional to handle cases where it might be missing.
  variations?: { title: string; description?: string }[];
  safety: string[];
  tracking: string[];
  script: string;
}

interface PracticeDetailModalProps {
  practice: PracticeDetail;
  onClose: () => void;
}

const DetailSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h4 className="font-bold text-teal-700 text-lg mb-2 border-b border-teal-200 pb-1">{title}</h4>
        {children}
    </div>
);

const PracticeDetailModal: React.FC<PracticeDetailModalProps> = ({ practice, onClose }) => {
  return (
    <div 
        className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4 animate-fade-in-fast"
        onClick={onClose}
    >
      <style>{`
        @keyframes fade-in-fast {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-fast {
          animation: fade-in-fast 0.3s ease-out forwards;
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out forwards;
        }
      `}</style>
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        <header className="flex justify-between items-center p-6 border-b border-slate-200 sticky top-0 bg-white rounded-t-2xl">
          <h2 className="text-3xl font-bold text-slate-800">{practice.title}</h2>
          <button onClick={onClose} className="text-slate-500 hover:text-red-600 transition-colors">
            <IconX className="h-8 w-8" />
          </button>
        </header>
        
        <div className="p-8 overflow-y-auto space-y-8">
            <DetailSection title="Amaç">
                <p className="text-slate-600">{practice.purpose}</p>
            </DetailSection>
            
            <DetailSection title="Süre / Yoğunluk">
                <p className="text-slate-600">{practice.duration}</p>
            </DetailSection>
            
            <DetailSection title="Hazırlık">
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                    {practice.preparation.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </DetailSection>

            {practice.steps && (
                <DetailSection title="Adım Adım Uygulama">
                    <ol className="list-decimal list-inside text-slate-600 space-y-2">
                        {practice.steps.map((step, i) => <li key={i}><strong>{step.title}:</strong> {step.description}</li>)}
                    </ol>
                </DetailSection>
            )}
            
            {practice.protocols && (
                 <DetailSection title="Protokoller">
                     <div className="space-y-4">
                        {practice.protocols.map((protocol, i) => (
                            <div key={i} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                                <h5 className="font-semibold text-slate-700">{protocol.title}</h5>
                                <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1">
                                    {protocol.steps.map((step, j) => <li key={j}>{step}</li>)}
                                </ul>
                                {protocol.note && <p className="text-sm text-slate-500 mt-2"><em>Not: {protocol.note}</em></p>}
                            </div>
                        ))}
                    </div>
                 </DetailSection>
            )}

            {practice.variations && (
                <DetailSection title="Varyasyonlar">
                    <ul className="list-disc list-inside text-slate-600 space-y-2">
                        {practice.variations.map((item, i) => <li key={i}><strong>{item.title}:</strong> {item.description}</li>)}
                    </ul>
                </DetailSection>
            )}

            <DetailSection title="Güvenlik">
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                    {practice.safety.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </DetailSection>

            <DetailSection title="Ölçüm / İzleme">
                 <ul className="list-disc list-inside text-slate-600 space-y-1">
                    {practice.tracking.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </DetailSection>
            
            <div className="bg-teal-50 border-l-4 border-teal-500 text-teal-800 p-4 rounded-r-lg">
                <h4 className="font-bold text-lg mb-2">Kısa Rehber Metni (Script)</h4>
                <p className="italic">“{practice.script}”</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeDetailModal;

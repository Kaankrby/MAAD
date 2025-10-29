
import React from 'react';

const Hero: React.FC = () => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href')?.substring(1);
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    };

    return (
        <section className="text-center py-20 sm:py-28 lg:py-36 relative overflow-hidden rounded-b-3xl mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-fuchsia-100 to-amber-100 opacity-80"></div>
            <div className="relative z-10 max-w-3xl mx-auto px-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
                    İçsel Evreninizi Yeniden Keşfedin: <br/> Gerçek Dönüşüm Başlıyor.
                </h1>
                <p className="mt-6 text-xl text-slate-700 leading-relaxed">
                   Metamorfozik Atom Altı Duygu Düzenlemesi (MAAD) ile kuantum fiziği ve kadim bilgeliği birleştirerek duygusal dengeye ve yüksek bilince ulaşın.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a href="#iletisim" onClick={handleNavClick} className="bg-teal-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto">
                        Yolculuğa Başla
                    </a>
                    <a href="#hakkinda" onClick={handleNavClick} className="bg-white/80 backdrop-blur-sm text-slate-700 font-semibold px-8 py-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-slate-200 w-full sm:w-auto">
                        MAAD Nedir?
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

import React, { useState, useEffect } from 'react';
import { IconLotus } from './Icons';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#hakkinda', label: 'MAAD Nedir?' },
        { href: '#program', label: 'Program' },
        { href: '#uygulamalar', label: 'Uygulamalar' },
        { href: '#rehberlik', label: 'Rehberlik' },
        { href: '#deneyimler', label: 'Deneyimler' },
        { href: '#sss', label: 'SSS' },
        { href: '#iletisim', label: 'İletişim' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        setIsMenuOpen(false); // Close mobile menu on click
    };

    return (
        // FIX: Replaced single quotes with backticks for template literal className.
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center space-x-2">
                        <IconLotus className="h-8 w-8 text-teal-600" />
                        <span className="text-xl font-bold text-slate-800 tracking-wider">MAAD</span>
                    </a>
                    
                    <nav className="hidden md:flex items-center space-x-6">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} onClick={handleNavClick} className="text-slate-600 hover:text-teal-600 font-medium transition-colors">
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-teal-600 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} onClick={handleNavClick} className="text-slate-600 hover:text-teal-600 font-medium transition-colors">
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;

import React from 'react';
import { IconLotus, IconBrandInstagram, IconAt, IconPhone } from './Icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-100 border-t border-slate-200 mt-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                         <div className="flex items-center space-x-2 mb-4">
                            <IconLotus className="h-8 w-8 text-teal-600" />
                            <span className="text-xl font-bold text-slate-800">MAAD</span>
                        </div>
                        <p className="text-slate-500">Metamorfozik Atom Altı Duygu Düzenlemesi</p>
                    </div>
                    
                    <div className="text-center">
                        <h4 className="font-semibold text-slate-800 mb-4">Hızlı Bağlantılar</h4>
                        <ul className="space-y-2">
                             <li><a href="#program" className="text-slate-600 hover:text-teal-600">Program</a></li>
                            <li><a href="#rehberlik" className="text-slate-600 hover:text-teal-600">Rehberlik</a></li>
                            <li><a href="#sss" className="text-slate-600 hover:text-teal-600">SSS</a></li>
                        </ul>
                    </div>

                    <div className="text-center md:text-right">
                         <h4 className="font-semibold text-slate-800 mb-4">Sosyal Medya</h4>
                        <div className="flex justify-center md:justify-end space-x-4">
                            <a href="mailto:info@maadseanslari.com" className="text-slate-500 hover:text-teal-600"><IconAt /></a>
                            <a href="tel:+905551234567" className="text-slate-500 hover:text-teal-600"><IconPhone /></a>
                            <a href="https://instagram.com/maadseanslari" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-teal-600"><IconBrandInstagram /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} MAAD Seansları. Tüm hakları saklıdır.</p>
                     <p className="mt-2">Bu site tıbbi tavsiye niteliği taşımaz. Lütfen bir sağlık uzmanına danışın.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
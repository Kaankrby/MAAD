
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import ProgramCard from './components/ProgramCard';
import GuideProfile from './components/GuideProfile';
import FaqItem from './components/FaqItem';
import Footer from './components/Footer';
import { sections, programWeeks, guides, faqs, microPractices, bibliography, philosophyLayers, practices, testimonials, concreteGoals, participationSteps } from './constants';
import { IconBookOpen, IconTarget, IconShieldCheck, IconRoad, IconClipboardList, IconUsers, IconHelpCircle, IconCode, IconHeartHandshake, IconQuote } from './components/Icons';

const App: React.FC = () => {
  const leadGuide = guides.find(g => g.isLead);
  const lotusGuides = guides.filter(g => !g.isLead);

  return (
    <div className="bg-white text-slate-700">
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        
        {/* What is MAAD? Section */}
        <Section id="hakkinda" title={sections[0].title} icon={<IconBookOpen />}>
            <p className="text-xl text-slate-600 leading-relaxed mb-12">
                {sections[0].content}
            </p>
             <div className="grid md:grid-cols-3 gap-8 text-center">
                {concreteGoals.map((goal, index) => (
                    <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <div className="flex justify-center mb-4 text-teal-600">
                            {goal.icon}
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">{goal.text}</h3>
                    </div>
                ))}
            </div>
        </Section>
        
        {/* Philosophy Section */}
        <Section id="felsefemiz" title={sections[1].title} icon={<IconCode />}>
            <p className="text-center text-xl mb-10 text-slate-600">MAAD, iç dünyamızı anlamak için güçlü metaforlar kullanır. Varlığımızı, birbiriyle etkileşim halinde olan üç temel enerji katmanı olarak görürüz:</p>
            <div className="grid md:grid-cols-3 gap-8">
                {philosophyLayers.map((layer, index) => (
                    <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
                        <div className="flex justify-center mb-4 text-teal-600">{layer.icon}</div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{layer.title}</h3>
                        <p className="text-slate-600">{layer.description}</p>
                    </div>
                ))}
            </div>
        </Section>

        {/* Program Section */}
        <Section id="program" title={sections[2].title} icon={<IconRoad />}>
            <p className="text-center text-xl mb-10 text-slate-600">8 haftalık bu yolculukta, haftada bir buluşma ve günlük 10-15 dakikalık pratiklerle adım adım dönüşümü deneyimleyin.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {programWeeks.map((week, index) => (
                    <ProgramCard key={index} week={week.week} title={week.title} description={week.description} />
                ))}
            </div>
             <div className="mt-16">
                <h3 className="text-2xl font-bold text-center text-slate-800 mb-6">Günlük Mikro Pratikler (10-15 dk)</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                    {microPractices.map((practice, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                            <p className="font-semibold text-teal-700">{practice}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
        
        {/* Practices Section */}
        <Section id="uygulamalar" title={sections[3].title} icon={<IconClipboardList />}>
            <p className="text-center text-xl mb-10 text-slate-600">Programımızda, kadim bilgelik ve modern teknikleri bir araya getiren çeşitli uygulamalar kullanıyoruz:</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {practices.map((practice, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-slate-200 flex items-start space-x-4 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex-shrink-0 text-teal-600 mt-1">{practice.icon}</div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-800">{practice.title}</h3>
                            <p className="text-slate-600 text-sm">{practice.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>

        {/* Guides Section */}
        <Section id="rehberlik" title={sections[4].title} icon={<IconUsers />}>
            {leadGuide && (
                <div className="mb-12">
                    <GuideProfile 
                        key={leadGuide.name}
                        name={leadGuide.name} 
                        title={leadGuide.title} 
                        description={leadGuide.description} 
                        isLead={leadGuide.isLead} 
                    />
                </div>
            )}
            
            <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-slate-800 tracking-tight">Lotus Rehberleri</h3>
                <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
                    Yolculuğunuz boyunca, her biri farklı bir arketipi temsil eden Lotus Rehberlerimiz dönüşümlü olarak seanslara eşlik eder. Her rehber, programın o haftaki temasına uygun olarak kendi uzmanlık alanındaki bilgeliği ve enerjiyi gruba sunar.
                </p>
            </div>

            <div className="space-y-8">
                {/* Row 1: 2 Guides */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {lotusGuides.slice(0, 2).map((guide, index) => (
                        <GuideProfile
                            key={index}
                            name={guide.name}
                            title={guide.title}
                            description={guide.description}
                            isLead={guide.isLead}
                            icon={guide.icon}
                        />
                    ))}
                </div>

                {/* Row 2: 3 Guides */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {lotusGuides.slice(2, 5).map((guide, index) => (
                        <GuideProfile
                            key={index + 2}
                            name={guide.name}
                            title={guide.title}
                            description={guide.description}
                            isLead={guide.isLead}
                            icon={guide.icon}
                        />
                    ))}
                </div>

                {/* Row 3: 2 Guides */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {lotusGuides.slice(5, 7).map((guide, index) => (
                        <GuideProfile
                            key={index + 5}
                            name={guide.name}
                            title={guide.title}
                            description={guide.description}
                            isLead={guide.isLead}
                            icon={guide.icon}
                        />
                    ))}
                </div>
            </div>
        </Section>

        {/* Testimonials Section */}
        <Section id="deneyimler" title={sections[5].title} icon={<IconQuote />}>
            <div className="space-y-12 bg-slate-50 p-8 md:p-12 rounded-xl border border-slate-200">
                {testimonials.map((testimonial, index) => (
                    <blockquote key={index} className="text-center max-w-3xl mx-auto">
                        <p className="text-2xl italic text-slate-700 leading-relaxed">"{testimonial.quote}"</p>
                        <footer className="mt-4 text-lg font-semibold text-teal-700">— {testimonial.author}</footer>
                    </blockquote>
                ))}
            </div>
        </Section>

        {/* Trust & Safety Section */}
        <Section id="guven" title={sections[6].title} icon={<IconShieldCheck />}>
             <ul className="space-y-4 list-disc list-inside text-slate-600 text-lg">
                <li><strong>Gizlilik ve Mahremiyet:</strong> Paylaşımlarınız bizimle güvendedir. Tüm oturum içerikleri gizli kalır.</li>
                <li><strong>Profesyonel Sınırlar:</strong> MAAD, <strong>tıbbi veya psikoterapötik bir tedavi değildir.</strong> Bu yönde bir ihtiyacınız varsa sizi ilgili uzmanlara yönlendirmekten mutluluk duyarız.</li>
                <li><strong>Katılım Koşulları:</strong> Aktif psikoz, intihar riski veya ağır travma gibi durumlarda, hekim veya terapist onayı olmadan katılımı önermiyoruz. Sizin güvenliğiniz her şeyden önemli.</li>
                <li><strong>Açık Rıza:</strong> Sürecin her adımında bilgilendirilirsiniz. Programın niteliği ve sınırları hakkında tam bilgi sahibi olarak, yazılı onamınızla başlarsınız.</li>
                <li><strong>Kapsayıcılık:</strong> Her türlü kültürel ve inançsal arka plana saygı duyduğumuz, yargısız ve kapsayıcı bir alan sunuyoruz.</li>
             </ul>
        </Section>

        {/* FAQ Section */}
        <Section id="sss" title={sections[7].title} icon={<IconHelpCircle />}>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <FaqItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </Section>

        {/* Inspiration Section */}
        <Section id="ilham" title={sections[8].title} icon={<IconBookOpen />}>
            <p className="text-lg mb-8 text-slate-600">Yaklaşımımız, kuantum fiziği, zihin-beden tıbbı ve farkındalık alanlarındaki öncü çalışmalardan ilham almaktadır. Bu eserler, programımızın teorik çerçevesini oluşturan temel kaynaklardır.</p>
            <div className="grid md:grid-cols-2 gap-10">
                {bibliography.map((category, index) => (
                    <div key={index} className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-800 mb-4">{category.title}</h3>
                        <ul className="space-y-2 list-disc list-inside text-slate-600">
                            {category.items.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>

        {/* Contact Section */}
        <Section id="iletisim" title={sections[9].title} icon={<IconHeartHandshake />}>
             <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Dönüşüm Yolculuğunuza Başlamaya Hazır mısınız?</h2>
                <p className="mt-4 text-xl text-slate-600">
                    İçsel huzurunuzu bulmak ve yüksek bilinç seviyelerine ulaşmak için ilk adımı atın.
                </p>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-16 items-start">
                <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">Katılım Süreci</h3>
                    <ol className="relative border-l border-slate-200">
                        {participationSteps.map((step, index) => (
                            <li key={index} className="mb-10 ml-6">
                                <span className="absolute flex items-center justify-center w-8 h-8 bg-teal-100 rounded-full -left-4 ring-8 ring-white">
                                    <span className="font-bold text-teal-700">{index + 1}</span>
                                </span>
                                <h4 className="flex items-center mb-1 text-xl font-semibold text-slate-900">{step.title}</h4>
                                <p className="mb-4 text-base font-normal text-slate-600">{step.description}</p>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                    <form action="mailto:info@maadseanslari.com" method="post" encType="text/plain">
                        <h3 className="text-2xl font-bold text-slate-800 mb-6">İletişim Formu</h3>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Ad Soyad</label>
                                <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700">E-posta</label>
                                <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Mesajınız</label>
                                <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-teal-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                    Gönder
                                </button>
                            </div>
                        </div>
                    </form>
                     <div className="mt-6 text-center text-sm text-slate-500">
                        Veya bize doğrudan ulaşın: <a href="mailto:info@maadseanslari.com" className="font-medium text-teal-600 hover:underline">info@maadseanslari.com</a>
                    </div>
                </div>
            </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
import React from 'react';
import { IconBrain, IconHeart, IconSparkles, IconHeartHandshake, IconShieldCheck, IconBrush, IconFeather, IconAtom, IconUsers, IconHandsPraying, IconCrystalBall, IconYinYang, IconSpiral, IconTarget, IconRoad } from './components/Icons';

export const sections = [
    { id: "hakkinda", title: "Modern Bilim ve Kadim Bilgeliğin Buluştuğu Yer: MAAD", content: "MAAD, modern farkındalık tekniklerini ve kadim bilgelik pratiklerini birleştiren, 8 haftalık bütünsel bir duygu düzenleme ve kişisel dönüşüm programıdır. Bu yolculukta, niyetin gücünü kullanarak içsel dengeyi ve huzuru bulmayı, stresle daha sağlıklı yollarla başa çıkmayı ve yaşam enerjinizi yükseltmeyi öğreneceksiniz." },
    { id: "felsefemiz", title: "Yöntemimiz: Atom Altı Evrenler" },
    { id: "program", title: "8 Haftalık Program Yolculuğu" },
    { id: "uygulamalar", title: "Uygulamalarımız (Seanslarda Sizi Ne Bekliyor?)" },
    { id: "rehberlik", title: "Rehberlerinizle Tanışın" },
    { id: "deneyimler", title: "Dönüşüm Hikayeleri" },
    { id: "guven", title: "İlkelerimiz: Güven, Saygı ve Bilim" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
    { id: "ilham", title: "İlham Kaynakları ve Bilimsel Temel" },
    { id: "iletisim", title: "Bize Katılın" },
];

export const concreteGoals = [
    { text: "8 Haftada Duygusal Denge", icon: React.createElement(IconTarget) },
    { text: "12 Haftada Optimize Enerji Akışı", icon: React.createElement(IconRoad) },
    { text: "6 Ayda Yüksek Bilinç Erişimi", icon: React.createElement(IconSparkles) }
];

export const philosophyLayers = [
    {
        title: "İçimizdeki 7 Evren",
        description: "Bedeninizdeki çakra-benzeri kuantum enerji merkezleri. Duygusal ve ruhsal işlevlerinizi düzenler.",
        icon: React.createElement(IconAtom),
        details: [
            { title: 'Temel Evren (Kök)', theme: 'Güven, bedenlenme, hayatta kalma.', imbalance: 'Sürekli kaygı, aşırı kontrol/dağınıklık.', practice: '4-7-8 nefes + ayakta topraklama (ayak tabanını hissederek).', affirmation: 'Yerdeyim ve güvendeyim.', colorSymbol: 'Kırmızı / kare' },
            { title: 'Akış Evreni (Sakral)', theme: 'Duygusal akış, haz–yaratıcılık, yakınlık.', imbalance: 'Bastırılmış duygu, suçluluk/taşkınlık.', practice: 'Pelvis odaklı nefes, nazik esneme; “duygumu adlandırıyorum.”', affirmation: 'Duygularım akıyor ve güvenle ifade buluyor.', colorSymbol: 'Turuncu / dalga' },
            { title: 'Kıvılcım Evreni (Solar)', theme: 'İrade, sınır koyma, öz-etkinlik.', imbalance: 'Kararsızlık/katılık, öfke birikimi.', practice: '5 dak. dik duruş + kontrollü nefes; “hayır” deme provası.', affirmation: 'İrade ve nezaketle eyleme geçiyorum.', colorSymbol: 'Sarı / güneş' },
            { title: 'Şefkat Evreni (Kalp)', theme: 'Öz-şefkat, bağ, affedicilik.', imbalance: 'Kırgınlık, aşırı özveri/duygusal kapanma.', practice: 'Sevgi-nezaket meditasyonu (Loving-kindness).', affirmation: 'Kendime ve başkalarına nazik davranıyorum.', colorSymbol: 'Yeşil / lotus' },
            { title: 'Söz Evreni (Boğaz)', theme: 'İfade, dürüst iletişim, dinleme.', imbalance: 'Yutkunma/ketumluk, aşırı konuşma.', practice: '3 dak. bilinçli dinleme + netlik cümlesi (“İhtiyacım şudur…”).', affirmation: 'Gerçeğimi net ve nazikçe ifade ediyorum.', colorSymbol: 'Mavi / çember' },
            { title: 'Görü Evreni (3. Göz)', theme: 'İçgörü, sezgi, perspektif.', imbalance: 'Aşırı ruminasyon, kopuk hayalcilik.', practice: '2 dak. nokta odak + 3 dak. geniş farkındalık.', affirmation: 'Net görüyorum; olanı olduğu gibi kabul ediyorum.', colorSymbol: 'Lacivert / göz' },
            { title: 'Işık Evreni (Taç)', theme: 'Anlam, transandans, sessizlik.', imbalance: 'Anlam boşluğu, spiritüel bypass.', practice: 'Sessiz oturuş (7–10 dk), minnettarlık notu.', affirmation: 'Varlığımda bütünlük ve ışık var.', colorSymbol: 'Mor/beyaz / ışıma' }
        ]
    },
    {
        title: "Yakın Çevredeki 5 Evren",
        description: "Auranızın yakın katmanları. Günlük etkileşimlerinizi ve enerjisel sınırlarınızı belirler.",
        icon: React.createElement(IconUsers),
        details: [
            { title: 'Sınır Evreni', tip: '“Rica–Sınır–Alternatif” cümle mimarisi.' },
            { title: 'Rezonans Evreni', tip: '“Bu duygu bana mı, karşımdakine mi ait?” kontrolü.' },
            { title: 'Yansıma Evreni', tip: 'Tetikleyici günlüğü (olay–duygu–ihtiyaç).' },
            { title: 'Uyum Evreni', tip: 'Senkronize nefes; konuşma/ara oranı 3:1.' },
            { title: 'Topraklama Evreni', tip: '90 saniyelik “somut üçleme” (gör–işit–hisset).' },
        ]
    },
    {
        title: "Uzak Aura Alanındaki 6 Evren",
        description: "Evrensel bilinçle olan kuantum bağlantınız. Yüksek farkındalık seviyelerine kapı açar.",
        icon: React.createElement(IconSparkles),
        details: [
            { title: 'Birlik Evreni', motto: '“Ayrı ve yine de bağlı.”' },
            { title: 'Anlam Evreni', motto: '“Değerlerim eylemimi belirler.”' },
            { title: 'Hizmet Evreni', motto: '“Küçük bir iyi eylem bugün.”' },
            { title: 'Şükran Evreni', motto: '“Bugün 3 teşekkür.”' },
            { title: 'Neşe Evreni', motto: '“Küçük sevinçleri büyüt.”' },
            { title: 'Sessizlik Evreni', motto: '“Sessizlikte netlik belirir.”' },
        ]
    }
];

export const programWeeks = [
    { week: 1, title: "Temel Atma (Kök)", description: "Güven ve bedenlenme temalarıyla yolculuğa başlangıç. Temel Evren ile bağlantı kuruyoruz." },
    { week: 2, title: "Duygusal Akış (Sakral)", description: "Duyguları tanıma, ifade etme ve Akış Evreni'nin yaratıcı enerjisini keşfetme." },
    { week: 3, title: "İrade ve Güç (Solar)", description: "Öz-etkinlik ve sağlıklı sınırlar. Kıvılcım ve Söz Evrenleri ile çalışma." },
    { week: 4, title: "Kalbin Bilgeliği (Kalp)", description: "Öz-şefkat, bağ kurma ve affedicilik. Şefkat Evreni'ni merkeze alıyoruz." },
    { week: 5, title: "Sezgi ve Görü (3. Göz)", description: "İçgörü, perspektif ve Görü Evreni'ni aktive etme pratikleri." },
    { week: 6, title: "Bütünleşme ve Sınırlar", description: "Yakın Çevre Evrenleri'ni (Sınır, Rezonans) anlayıp günlük hayata entegre etme." },
    { week: 7, title: "Anlam ve Bağlantı (Taç)", description: "Uzak Aura Evrenleri (Birlik, Anlam) ile bağlantı kurarak daha geniş bir perspektif kazanma." },
    { week: 8, title: "Yeni Bir Başlangıç", description: "Tüm evrenleri dengeleyerek kişisel yol haritanızı oluşturma ve kazanımları kutlama." }
];

export const microPractices = [
    "4-7-8 Nefesi",
    "2 dk Minnettarlık",
    "5 dk Odaklanma",
    "2 dk Beden Tarama"
];

export const dailyPracticeMap = [
    { time: "Sabah (3–5 dk)", practice: "Temel/Topraklama + gün niyeti." },
    { time: "Gün ortası (2–3 dk)", practice: "Rezonans/Sınır kontrolü." },
    { time: "Akşam (7–10 dk)", practice: "Şefkat veya Sessizlik Evreni oturuşu + şükran 3’lemesi." }
];

export const practices = [
    {
        title: "Kuantum Meditasyon",
        description: "Bilinçli niyetlerle enerji alanına etki ederek içsel merkezleri dengeleme.",
        icon: React.createElement(IconBrain)
    },
    {
        title: "Reiki ve Enerji Şifası",
        description: "Evrensel yaşam enerjisiyle blokajları açma ve enerji akışını iyileştirme.",
        icon: React.createElement(IconHandsPraying)
    },
    {
        title: "Çakra ve Meridyen Dengeleme",
        description: "Bedenin enerji noktalarını ve kanallarını hizalayarak bütünsel denge sağlama.",
        icon: React.createElement(IconYinYang)
    },
    {
        title: "Kristal ve Taş Terapisi",
        description: "Kristallerin frekanslarını kullanarak enerjisel iyileşmeyi ve dengeyi destekleme.",
        icon: React.createElement(IconCrystalBall)
    },
    {
        title: "Nefes Çalışmaları ve Mantralar",
        description: "Nefes ve ses titreşimleriyle zihinsel ve duygusal dengeyi derinleştirme.",
        icon: React.createElement(IconFeather)
    },
    {
        title: "Ritüeller ve Enerji Temizliği",
        description: "Belirli ritüeller ve niyetlerle kişisel enerji alanını arındırma ve yeniden düzenleme.",
        icon: React.createElement(IconSpiral)
    }
];

export const guides = [
    { 
        name: "Shanti Sage", 
        title: "En Üst Rehber / Kurucu", 
        description: "Yüksek huzur ve bilgeliğin sembolü. Kolektif enerji alanını dengeleyen kuantum bilinç rehberi.", 
        isLead: true 
    },
    { 
        name: "Harmony Guide - Zenji (禅師)", 
        title: "Erdemi: Uyum ve Denge", 
        description: "Katılımcıların içsel ve dışsal uyumlarını sağlamalarına, enerji dalgalarının harmonisiyle denge bulmalarına yardımcı olur.", 
        isLead: false,
        icon: React.createElement(IconYinYang, { className: 'h-10 w-10' })
    },
    { 
        name: "Compassion Guide - Kannon (観音)", 
        title: "Erdemi: Şefkat ve Anlayış", 
        description: "Kuantum alanındaki birlik ilkesiyle, duygusal yaraların iyileşmesine ve şefkatli bir tutum geliştirmenize destek olur.", 
        isLead: false,
        icon: React.createElement(IconHeart, { className: 'h-10 w-10' })
    },
    { 
        name: "Wisdom Guide - Roshi (老師)", 
        title: "Erdemi: Bilgelik ve İçgörü", 
        description: "Bilinçli farkındalık ve gözlemcinin etkisiyle, derin içgörüler kazanmanıza ve sezgilerinizi güçlendirmenize rehberlik eder.", 
        isLead: false,
        icon: React.createElement(IconBrain, { className: 'h-10 w-10' })
    },
    { 
        name: "Courage Guide - Samurai (侍)", 
        title: "Erdemi: Cesaret ve Kararlılık", 
        description: "Zorlu süreçlerde destek ve cesaret sağlayarak, enerji seviyeleri arasındaki kararlı geçişlerinizde size yol gösterir.", 
        isLead: false,
        icon: React.createElement(IconShieldCheck, { className: 'h-10 w-10' })
    },
    { 
        name: "Patience Guide - Satori (悟り)", 
        title: "Erdemi: Sabır ve Tahammül", 
        description: "Zamanın göreceliliği ilkesiyle, dönüşüm süreciniz boyunca sabrı ve sebatı teşvik eder.",
        isLead: false,
        icon: React.createElement(IconFeather, { className: 'h-10 w-10' })
    },
    { 
        name: "Gratitude Guide - Arigato (ありがとう)", 
        title: "Erdemi: Şükran ve Takdir", 
        description: "Şükranın enerji akışına pozitif etkisini kullanarak, günlük yaşantınızda minnettarlığı artırmanıza yardımcı olur.",
        isLead: false,
        icon: React.createElement(IconHeartHandshake, { className: 'h-10 w-10' })
    },
    { 
        name: "Joy Guide - Eiko (栄光)", 
        title: "Erdemi: Neşe ve Pozitiflik", 
        description: "Enerjinin titreşim frekanslarını yükselterek, yaşamınıza pozitif enerji ve neşe katmanızı teşvik eder.",
        isLead: false,
        icon: React.createElement(IconSparkles, { className: 'h-10 w-10' })
    }
];

export const testimonials = [
    {
        quote: "Seanslara katılmadan önce duygusal olarak sıkışmış hissediyordum. İlk seansımdan itibaren içimdeki enerji akışının değiştiğini fark ettim. Süreç sonunda sadece iç huzuru bulmakla kalmadım, çevremdeki insanlarla ilişkilerim de iyileşti.",
        author: "Bir Katılımcı"
    },
    {
        quote: "Kuantum meditasyon teknikleri bakış açımı tamamen değiştirdi. Rehberlerin desteği paha biçilemezdi. Artık daha yüksek bir bilinçle yaşıyorum.",
        author: "Bir Katılımcı"
    }
];

export const faqs = [
    { question: "Bu seanslar kimler için uygun?", answer: "Duygusal denge arayan, stresle başa çıkmak isteyen ve kişisel dönüşüm yolculuğuna çıkmaya hazır hisseden herkes için uygundur." },
    { question: "Kuantum veya fizik hakkında bilgim yok, katılabilir miyim?", answer: "Kesinlikle. Programımız, hiçbir ön bilgi gerektirmeyecek şekilde, herkesin anlayabileceği metaforlar ve pratik uygulamalar üzerine kuruludur." },
    { question: "Herhangi bir dini inanca sahip olmam gerekir mi?", answer: "Hayır. Programımız evrensel ve kapsayıcıdır; tüm inanç sistemlerine saygılıdır ve herhangi bir dogmaya dayanmaz." },
    { question: "Seanslar online mı yoksa yüz yüze mi yapılıyor?", answer: "Seanslarımız, dünyanın her yerinden katılabileceğiniz şekilde online olarak gerçekleştirilmektedir." },
    { question: "İlk seanstan itibaren etki görmeye başlar mıyım?", answer: "Dönüşüm kişisel bir yolculuktur, ancak birçok katılımcımız ilk seanslardan itibaren daha sakin ve farkında hissetmeye başladıklarını bildirmektedir." }
];

export const participationSteps = [
    { title: "Başvuru", description: "Formu doldurun veya e-posta gönderin." },
    { title: "Ücretsiz Danışma", description: "İhtiyaçlarınızı belirlemek için sizinle 15 dakikalık ücretsiz bir ön görüşme yapalım." },
    { title: "Program Başlangıcı", description: "Size özel seans programınızla enerjisel dönüşümünüze başlayalım." },
];

export const bibliography = [
    {
        title: "Metaforik Çerçeve ve Kuantum Fiziği",
        items: [
            "Capra, F. The Tao of Physics.",
            "Rosenblum, B., & Kuttner, F. Quantum Enigma.",
            "McTaggart, L. The Field."
        ]
    },
    {
        title: "Zihin-Beden Pratikleri ve Bilimsel Literatür",
        items: [
            "Kabat-Zinn, J. Full Catastrophe Living.",
            "Davidson, R. J., & Goleman, D. Altered Traits.",
            "Chopra, D. Quantum Healing."
        ]
    }
];
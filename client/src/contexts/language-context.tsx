import React, { createContext, useContext, useState, ReactNode } from 'react';

// Language definitions
export type Language = 'en' | 'ar' | 'az';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.clients': 'Clients',
    
    // Hero Section
    'hero.building': 'Building',
    'hero.digital': 'Digital',
    'hero.and': 'and',
    'hero.creative': 'Creative',
    'hero.legacies': 'Legacies',
    'hero.showreel': 'Showreel',
    'hero.scroll': 'Scroll',
    
    // About Section
    'about.title': "Dubai's Top Digital Marketing Agency for Innovative Solutions",
    'about.subtitle': 'Plan A Beginning With Us',
    'about.description1': 'We are a homegrown digital creative agency in Dubai, powering clients and brands of purpose to achieve their kind of success. Your goals create our milestones, but the finish line we draw is always beyond.',
    'about.description2': 'We approach everything with a multi-faceted attitude, armed with digital marketing professionals and award-winning creatives. Each member of our in-house team of digital marketing experts owns the DNA of the \'renaissance human\' and this creates all the difference for your brand when they seamlessly integrate different disciplines to come up with solutions that spur inspiration and positive emotions.',
    'about.description3': 'Our wide base of governmental and international clientele and our versatile portfolio is a testament to how we excel in branding, design and development for websites and mobile apps, digital marketing and social media.',
    'about.meetUs': 'Meet Us',
    
    // Portfolio Section
    'portfolio.title': 'OUR WORK',
    'portfolio.description': 'Our client\'s needs and their customer experience stand at the heart of everything we do. All our digital marketing services seamlessly integrate creative, development and content best practices to deliver on your vision. There is no magic here, just years of experience, solid market insight and an unwavering drive to create something that empowers your brand to stand the test of time.',
    'portfolio.prev': 'Prev',
    'portfolio.next': 'Next',
    'portfolio.viewProject': 'VIEW PROJECT',
    
    // Services Section
    'services.title': 'What WE DO',
    'services.description': 'Our client\'s needs and their customer experience stand at the heart of everything we do. All our digital marketing services seamlessly integrate creative, development and content best practices to deliver on your vision. There is no magic here, just years of experience, solid market insight and an unwavering drive to create something that empowers your brand to stand the test of time.',
    
    // Clients Section
    'clients.title': 'A Partnership Based On Trust',
    'clients.description': 'We\'ve worked with prominent clients from different industries and have always developed every project with an attitude of partnership, putting ourselves in our client\'s shoes and aiming for results that answer their needs, setting them apart and help them navigate a competitive market. Our varied clientele includes innovative startups, government entities and international corporations across the MENAT region.',
    'clients.viewAll': 'View All Clients',
    
    // Contact Section
    'contact.getInTouch': 'Get in touch',
    'contact.phone': 'Phone',
    'contact.mobile': 'Mobile',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.requestQuote': 'REQUEST A QUOTATION',
    'contact.companyInfo': 'Company Info',
    'contact.locations': 'LOCATIONS',
    'contact.locationsList': 'DUBAI • RIYADH • LONDON',
    'contact.aboutPlanA': 'About Plan A',
    'contact.aboutDescription': 'We are a homegrown digital creative agency in Dubai, powering clients and brands of purpose to achieve their kind of success. Your goals create our milestones, but the finish line we draw is always beyond.',
    'contact.followUs': 'Follow Us',
    
    // Common
    'common.privacyPolicy': 'Privacy Policy',
    'common.sitemap': 'Sitemap',
  },
  ar: {
    // Navigation - Arabic translations
    'nav.home': 'الرئيسية',
    'nav.about': 'معلومات عنا',
    'nav.portfolio': 'أعمالنا',
    'nav.services': 'الخدمات',
    'nav.contact': 'تواصل معنا',
    'nav.clients': 'عملاؤنا',
    
    // Hero Section
    'hero.building': 'بناء',
    'hero.digital': 'رقمية',
    'hero.and': 'و',
    'hero.creative': 'إبداعية',
    'hero.legacies': 'إرث',
    'hero.showreel': 'عرض الأعمال',
    'hero.scroll': 'تمرير',
    
    // About Section
    'about.title': 'أفضل وكالة تسويق رقمي في دبي للحلول المبتكرة',
    'about.subtitle': 'خطة أ تبدأ معنا',
    'about.description1': 'نحن وكالة إبداعية رقمية محلية في دبي، نمنح العملاء والعلامات التجارية ذات الغرض القوة لتحقيق نوعها من النجاح. أهدافك تخلق معالمنا، لكن خط النهاية الذي نرسمه دائماً أبعد من ذلك.',
    'about.description2': 'نتعامل مع كل شيء بموقف متعدد الأوجه، مسلحين بمهنيي التسويق الرقمي والمبدعين الحائزين على جوائز. كل عضو في فريقنا الداخلي من خبراء التسويق الرقمي يمتلك الحمض النووي للإنسان النهضوي وهذا يخلق كل الفرق لعلامتك التجارية.',
    'about.description3': 'قاعدتنا الواسعة من العملاء الحكوميين والدوليين ومحفظتنا المتنوعة شاهد على كيفية تفوقنا في العلامة التجارية والتصميم والتطوير للمواقع وتطبيقات الهاتف المحمول والتسويق الرقمي ووسائل التواصل الاجتماعي.',
    'about.meetUs': 'تعرف علينا',
    
    // Portfolio Section
    'portfolio.title': 'أعمالنا',
    'portfolio.description': 'احتياجات عملائنا وتجربة عملائهم تقف في قلب كل ما نفعله. جميع خدمات التسويق الرقمي لدينا تدمج بسلاسة أفضل الممارسات الإبداعية والتطويرية والمحتوى لتحقق رؤيتك.',
    'portfolio.prev': 'السابق',
    'portfolio.next': 'التالي',
    'portfolio.viewProject': 'عرض المشروع',
    
    // Services Section
    'services.title': 'ما نفعله',
    'services.description': 'احتياجات عملائنا وتجربة عملائهم تقف في قلب كل ما نفعله. جميع خدمات التسويق الرقمي لدينا تدمج بسلاسة أفضل الممارسات الإبداعية والتطويرية والمحتوى لتحقق رؤيتك.',
    
    // Clients Section
    'clients.title': 'شراكة مبنية على الثقة',
    'clients.description': 'لقد عملنا مع عملاء بارزين من صناعات مختلفة وطورنا دائماً كل مشروع بموقف الشراكة، وضعنا أنفسنا في مكان عملائنا ونهدف إلى نتائج تجيب على احتياجاتهم.',
    'clients.viewAll': 'عرض جميع العملاء',
    
    // Contact Section
    'contact.getInTouch': 'تواصل معنا',
    'contact.phone': 'الهاتف',
    'contact.mobile': 'الجوال',
    'contact.email': 'البريد الإلكتروني',
    'contact.address': 'العنوان',
    'contact.requestQuote': 'طلب عرض سعر',
    'contact.companyInfo': 'معلومات الشركة',
    'contact.locations': 'المواقع',
    'contact.locationsList': 'دبي • الرياض • لندن',
    'contact.aboutPlanA': 'حول خطة أ',
    'contact.aboutDescription': 'نحن وكالة إبداعية رقمية محلية في دبي، نمنح العملاء والعلامات التجارية ذات الغرض القوة لتحقيق نوعها من النجاح.',
    'contact.followUs': 'تابعنا',
    
    // Common
    'common.privacyPolicy': 'سياسة الخصوصية',
    'common.sitemap': 'خريطة الموقع',
  },
  az: {
    // Navigation - Azerbaijani translations
    'nav.home': 'Ana səhifə',
    'nav.about': 'Haqqımızda',
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Xidmətlər',
    'nav.contact': 'Əlaqə',
    'nav.clients': 'Müştərilər',
    
    // Hero Section
    'hero.building': 'Qurma',
    'hero.digital': 'Rəqəmsal',
    'hero.and': 'və',
    'hero.creative': 'Yaradıcı',
    'hero.legacies': 'Miras',
    'hero.showreel': 'İş nümunələri',
    'hero.scroll': 'Aşağı keç',
    
    // About Section
    'about.title': 'İnnovativ həllər üçün Dubayın ən yaxşı rəqəmsal marketinq agentliyi',
    'about.subtitle': 'Plan A bizimlə başlayır',
    'about.description1': 'Biz Dubaydakı yerli rəqəmsal yaradıcı agentliyik, məqsədli müştərilərə və brendlərə öz növ uğurlarına nail olmaq üçün güc veririk.',
    'about.description2': 'Hər şeyə çoxşaxəli münasibətlə yanaşırıq, rəqəmsal marketinq peşəkarları və mükafat qazanmış yaradıcılarla silahlanırıq.',
    'about.description3': 'Geniş hökumət və beynəlxalq müştəri bazamız və çoxşaxəli portfelimiz brendinq, dizayn və veb saytlar üçün inkişaf sahəsində necə üstünlük təşkil etdiyimizin şahididir.',
    'about.meetUs': 'Bizimlə tanış olun',
    
    // Portfolio Section
    'portfolio.title': 'BİZİM İŞLƏRİMİZ',
    'portfolio.description': 'Müştərilərimizin ehtiyacları və onların müştəri təcrübəsi etdiyimiz hər şeyin mərkəzindədir.',
    'portfolio.prev': 'Əvvəlki',
    'portfolio.next': 'Növbəti',
    'portfolio.viewProject': 'LAYİHƏYƏ BAXIN',
    
    // Services Section
    'services.title': 'NƏ EDİRİK',
    'services.description': 'Müştərilərimizin ehtiyacları və onların müştəri təcrübəsi etdiyimiz hər şeyin mərkəzindədir.',
    
    // Clients Section
    'clients.title': 'Etimada əsaslanan tərəfdaşlıq',
    'clients.description': 'Müxtəlif sahələrdən görkəmli müştərilərlə işləmişik və həmişə hər layihəni tərəfdaşlıq münasibəti ilə inkişaf etdirmişik.',
    'clients.viewAll': 'Bütün müştərilərə baxın',
    
    // Contact Section
    'contact.getInTouch': 'Əlaqə saxlayın',
    'contact.phone': 'Telefon',
    'contact.mobile': 'Mobil',
    'contact.email': 'E-poçt',
    'contact.address': 'Ünvan',
    'contact.requestQuote': 'QİYMƏT SORĞUSU',
    'contact.companyInfo': 'Şirkət məlumatları',
    'contact.locations': 'YERLƏŞDİYİMİZ ŞƏHƏRLƏR',
    'contact.locationsList': 'DUBAY • ƏR-RİYAD • LONDON',
    'contact.aboutPlanA': 'Plan A haqqında',
    'contact.aboutDescription': 'Biz Dubaydakı yerli rəqəmsal yaradıcı agentliyik, məqsədli müştərilərə və brendlərə öz növ uğurlarına nail olmaq üçün güc veririk.',
    'contact.followUs': 'Bizi izləyin',
    
    // Common
    'common.privacyPolicy': 'Məxfilik siyasəti',
    'common.sitemap': 'Sayt xəritəsi',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const currentTranslations = translations[language];
    return (currentTranslations as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
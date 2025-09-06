import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage, Language } from "@/contexts/language-context";
import { useState } from "react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: Language; name: string; nativeName: string }[] = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
    { code: 'az', name: 'Azerbaijani', nativeName: 'Azərbaycanca' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-white hover:text-primary transition-colors p-2 rounded-lg"
        whileHover={{ scale: 1.05 }}
        data-testid="language-switcher"
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm font-medium">{currentLanguage?.nativeName}</span>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 mt-2 bg-black/90 backdrop-blur-lg border border-white/10 rounded-lg shadow-lg overflow-hidden min-w-[150px] z-50"
        >
          {languages.map((lang) => (
            <motion.button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-primary/20 ${
                language === lang.code 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-white hover:text-primary'
              }`}
              whileHover={{ x: 4 }}
              data-testid={`language-option-${lang.code}`}
            >
              <span className="block font-medium">{lang.nativeName}</span>
              <span className="block text-xs opacity-70">{lang.name}</span>
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  );
}
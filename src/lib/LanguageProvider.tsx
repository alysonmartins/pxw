// LanguageContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import languageData from './lang.json';

type LanguageData = typeof languageData;
type LanguageKeys = keyof LanguageData;
type LanguageContent = LanguageData[LanguageKeys];

interface LanguageContextType {
  language: LanguageKeys;
  setLanguage: (lang: LanguageKeys) => void;
  translate: (key: keyof LanguageContent) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const DEFAULT_LANGUAGE: LanguageKeys = 'es';

export const LanguageProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageKeys>(() => {
    const savedLanguage = localStorage.getItem('language') as LanguageKeys;
    return savedLanguage || DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const translate = (key: keyof LanguageContent): string => {
    return languageData[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
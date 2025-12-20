"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { dictionary, LanguageType } from "@/constants/dictionary";

interface LanguageContextType {
    language: LanguageType;
    setLanguage: (lang: LanguageType) => void;
    t: typeof dictionary.KO; // t는 번역(translation)된 텍스트 뭉치
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<LanguageType>("KO"); // 기본 언어: 한국어

    const value = {
        language,
        setLanguage,
        t: dictionary[language], // 현재 언어에 맞는 텍스트만 뽑아서 전달
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

// 편하게 쓰기 위한 커스텀 훅
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
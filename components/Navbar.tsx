"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
    const { language, setLanguage, t } = useLanguage();

    return (
        <nav className="w-full py-4 px-6 border-b border-gray-900 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">

                {/* 1. 로고 (모바일/PC 공통) */}
                <Link
                    href="/"
                    className="font-bold text-xl tracking-tighter hover:text-blue-400 transition-colors text-white"
                >
                    Be:Long Tech
                </Link>

                {/* 2. 우측 컨트롤 패널 (언어 버튼 + 메뉴) */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">

                    {/* A. 언어 선택 버튼 */}
                    <div className="flex gap-1 text-xs font-bold bg-gray-900 p-1 rounded-lg">
                        <button
                            onClick={() => setLanguage("KO")}
                            className={`px-3 py-1 rounded transition-colors ${language === "KO" ? "bg-blue-600 text-white" : "text-gray-500 hover:text-gray-300"}`}
                        >
                            KR
                        </button>
                        <button
                            onClick={() => setLanguage("EN")}
                            className={`px-3 py-1 rounded transition-colors ${language === "EN" ? "bg-blue-600 text-white" : "text-gray-500 hover:text-gray-300"}`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => setLanguage("VI")}
                            className={`px-3 py-1 rounded transition-colors ${language === "VI" ? "bg-blue-600 text-white" : "text-gray-500 hover:text-gray-300"}`}
                        >
                            VN
                        </button>
                    </div>

                    {/* B. 메뉴 링크 (hidden 제거!) */}
                    <div className="flex gap-6 text-sm font-medium text-gray-400">
                        <Link href="/" className="hover:text-white transition-colors">
                            {t.nav.home}
                        </Link>
                        <Link href="/about" className="hover:text-white transition-colors">
                            {t.nav.about}
                        </Link>
                        <a
                            href="https://github.com/LongKim88"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            {t.nav.github}
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    );
}
"use client"; // 필수!

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
    const { language, setLanguage, t } = useLanguage();

    return (
        <nav className="w-full py-6 px-8 flex justify-between items-center max-w-4xl mx-auto border-b border-gray-900 bg-black/50 backdrop-blur-sm sticky top-0 z-50">

            <Link href="/" className="font-bold text-xl tracking-tighter hover:text-blue-400 transition-colors text-white">
                Be:Long Tech
            </Link>

            <div className="flex items-center gap-6">
                {/* 언어 선택 버튼 그룹 */}
                <div className="flex gap-2 text-xs font-bold bg-gray-900 p-1 rounded-lg">
                    <button
                        onClick={() => setLanguage("KO")}
                        className={`px-2 py-1 rounded ${language === "KO" ? "bg-blue-600 text-white" : "text-gray-500 hover:text-gray-300"}`}
                    >
                        KR
                    </button>
                    <button
                        onClick={() => setLanguage("EN")}
                        className={`px-2 py-1 rounded ${language === "EN" ? "bg-blue-600 text-white" : "text-gray-500 hover:text-gray-300"}`}
                    >
                        EN
                    </button>
                    <button
                        onClick={() => setLanguage("VI")}
                        className={`px-2 py-1 rounded ${language === "VI" ? "bg-blue-600 text-white" : "text-gray-500 hover:text-gray-300"}`}
                    >
                        VN
                    </button>
                </div>

                {/* 메뉴 링크 (사전에서 글자 가져옴: t.nav...) */}
                <div className="flex gap-6 text-sm font-medium text-gray-400 hidden sm:flex">
                    <Link href="/" className="hover:text-white transition-colors">{t.nav.home}</Link>
                    <Link href="/about" className="hover:text-white transition-colors">{t.nav.about}</Link>
                    <a href="https://github.com/LongKim88" target="_blank" className="hover:text-white transition-colors">{t.nav.github}</a>
                </div>
            </div>
        </nav>
    );
}
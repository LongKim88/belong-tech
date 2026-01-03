"use client";

import Image from 'next/image';
import { Github, Mail, Terminal, Server, Database } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// 기술 스택 (리눅스, 쉘 스크립트 추가 완료)
const techStack = {
    Infrastructure: ["Kubernetes", "AWS", "Docker", "Linux", "Shell Script", "Prometheus"],
    Backend: ["Python"],
};

function TechBadge({ name }: { name: string }) {
    return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-900 border border-gray-800 text-gray-300 hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default">
            {name}
        </span>
    );
}

export default function About() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-black text-white p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="max-w-4xl mx-auto pt-8">

                {/* 프로필 섹션 */}
                <section className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 items-center mb-20">
                    <div className="flex justify-center md:justify-start">
                        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-800/50 shadow-xl shadow-blue-900/10">
                            <Image src="/images/profile.jpg" alt="Bernard Kim" fill className="object-cover" priority />
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-6">
                            {t.about.title}
                        </h1>
                        <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                            <p>{t.about.intro}</p>
                            <p>{t.about.desc1}</p>
                            <p>{t.about.desc2}</p>
                        </div>

                        <div className="flex gap-6 justify-center md:justify-start mt-8">
                            <a href="https://github.com/LongKim88" target="_blank" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                <Github className="w-5 h-5" /> <span className="font-medium">GitHub</span>
                            </a>
                            <a href="mailto:email@example.com" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                <Mail className="w-5 h-5" /> <span className="font-medium">Email</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* 기술 스택 섹션 */}
                <section className="border-t border-gray-800 pt-16">
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <Terminal className="w-8 h-8 text-blue-500" />
                        Tech Stack & Expertise
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        {/* Infrastructure (Linux, Shell Script 포함) */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-200">
                                <Server className="w-5 h-5 text-gray-400" /> {t.about.tech_infra}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.Infrastructure.map(tech => <TechBadge key={tech} name={tech} />)}
                            </div>
                        </div>

                        {/* Backend */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-200">
                                <Database className="w-5 h-5 text-gray-400" /> {t.about.tech_back}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.Backend.map(tech => <TechBadge key={tech} name={tech} />)}
                            </div>
                        </div>

                    </div>
                </section>

            </main>
        </div>
    );
}
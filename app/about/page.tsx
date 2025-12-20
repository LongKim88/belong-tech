import Image from 'next/image';
import { Github, Mail, Terminal, Server, Code2, Database } from 'lucide-react'; // 아이콘 임포트

export const metadata = {
    title: 'About - Be:Long Tech',
    description: 'Tech enthusiast bridging AI & Infrastructure.',
};

// 기술 스택 데이터 (나중에 여기서 쉽게 추가/수정 가능)
const techStack = {
    Infrastructure: ["Kubernetes", "AWS", "Terraform", "Docker", "ArgoCD", "Prometheus"],
    Backend: ["Go (Golang)", "Python", "FastAPI", "Django", "gRPC"],
    Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    "AI/ML Engineering": ["LLM Serving (vLLM, TGI)", "MLOps Pipelines (Kubeflow)", "LangChain", "Hugging Face"],
};

// 기술 배지 컴포넌트 (작은 부품)
function TechBadge({ name }: { name: string }) {
    return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-900 border border-gray-800 text-gray-300 hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default">
            {name}
        </span>
    );
}

export default function About() {
    return (
        <div className="min-h-screen bg-black text-white p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="max-w-4xl mx-auto pt-8">

                {/* --- 상단: 프로필 섹션 (반응형 레이아웃) --- */}
                <section className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 items-center mb-20">

                    {/* 왼쪽: 프로필 이미지 (원형) */}
                    <div className="flex justify-center md:justify-start">
                        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-800/50 shadow-xl shadow-blue-900/10">
                            {/* 만약 사진을 아직 안 넣으셨다면, 이 부분에서 에러가 날 수 있습니다. 사진을 꼭 넣어주세요! */}
                            <Image
                                src="/images/profile.jpg"
                                alt="Bernard Kim (Long)"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* 오른쪽: 간단 소개글 */}
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-6">
                            Hi, I'm <span className="text-blue-500">Bernard Kim</span>.
                        </h1>
                        <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                            <p>
                                저는 <strong>Cloud Native Infrastructure</strong>와 <strong>AI Engineering</strong>의 접점에서 활동하는 엔지니어입니다.
                            </p>
                            <p>
                                복잡한 문제를 단순화하고, 견고한 시스템 위에서 최첨단 AI 기술이 안정적으로 서비스될 수 있도록 가교(Bridge) 역할을 수행하는 데 열정을 쏟고 있습니다.
                            </p>
                            <p>
                                "안정성 없는 혁신은 없다"는 믿음으로, 오늘도 코드를 작성하고 인프라를 구축합니다.
                            </p>
                        </div>

                        {/* 연락처 링크 (아이콘 추가) */}
                        <div className="flex gap-6 justify-center md:justify-start mt-8">
                            <a href="https://github.com/LongKim88" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                <div className="p-2 bg-gray-900 rounded-full group-hover:bg-gray-800 transition-colors">
                                    <Github className="w-5 h-5" />
                                </div>
                                <span className="font-medium">GitHub</span>
                            </a>
                            <a href="mailto:주상전하의이메일@example.com" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                <div className="p-2 bg-gray-900 rounded-full group-hover:bg-gray-800 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="font-medium">Email Contact</span>
                            </a>
                        </div>
                    </div>
                </section>


                {/* --- 하단: 기술 스택 섹션 (배지 형태) --- */}
                <section className="border-t border-gray-800 pt-16">
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <Terminal className="w-8 h-8 text-blue-500" />
                        Tech Stack & Expertise
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        {/* Infrastructure */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-200">
                                <Server className="w-5 h-5 text-gray-400" /> Infrastructure & DevOps
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.Infrastructure.map(tech => <TechBadge key={tech} name={tech} />)}
                            </div>
                        </div>

                        {/* AI/ML */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-200">
                                <Database className="w-5 h-5 text-gray-400" /> AI & ML Engineering
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack["AI/ML Engineering"].map(tech => <TechBadge key={tech} name={tech} />)}
                            </div>
                        </div>

                        {/* Backend */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-200">
                                <Terminal className="w-5 h-5 text-gray-400" /> Backend Development
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.Backend.map(tech => <TechBadge key={tech} name={tech} />)}
                            </div>
                        </div>

                        {/* Frontend */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-200">
                                <Code2 className="w-5 h-5 text-gray-400" /> Frontend & Others
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.Frontend.map(tech => <TechBadge key={tech} name={tech} />)}
                            </div>
                        </div>

                    </div>
                </section>

            </main>
        </div>
    );
}
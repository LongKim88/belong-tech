export const metadata = {
    title: 'About - Be:Long Tech',
    description: 'About Bernard Kim (Long)',
};

export default function About() {
    return (
        <div className="min-h-screen bg-black text-white p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="max-w-3xl mx-auto pt-4">

                <h1 className="text-4xl font-bold mb-8">About Me</h1>

                <article className="prose prose-invert prose-lg border-t border-gray-800 pt-8">
                    <p>
                        안녕하세요, <strong>Bernard Kim (Long)</strong>입니다.
                    </p>
                    <p>
                        저는 <strong>Cloud Native Infrastructure</strong>와 <strong>AI Engineering</strong>을 연결하는 기술에 깊은 관심을 가지고 있습니다.
                        안정적인 인프라 위에서 AI 모델이 최상의 성능을 낼 수 있도록 돕는 것이 저의 목표입니다.
                    </p>

                    <h3>🛠 Tech Stack</h3>
                    <ul>
                        <li><strong>Infrastructure:</strong> Kubernetes, AWS, Terraform, Docker</li>
                        <li><strong>Backend:</strong> Go, Python, FastAPI</li>
                        <li><strong>Frontend:</strong> Next.js, React, TypeScript</li>
                        <li><strong>AI/ML:</strong> LLM Serving, MLOps Pipelines</li>
                    </ul>

                    <h3>📫 Contact</h3>
                    <ul>
                        <li>Email: (이메일)</li>
                        <li>GitHub: <a href="https://github.com/LongKim88">@LongKim88</a></li>
                    </ul>
                </article>

            </main>
        </div>
    );
}
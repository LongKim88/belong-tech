import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';

// 1. 블로그 글이 있는 폴더 위치
const postsDirectory = path.join(process.cwd(), 'posts');

// 2. 글의 내용을 가져와서 HTML로 변환하는 함수
async function getPostData(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // gray-matter로 제목(frontmatter)과 내용 분리
    const { data, content } = matter(fileContents);

    // remark를 사용하여 Markdown을 HTML로 변환
    const processedContent = await remark()
        .use(html)
        .process(content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        contentHtml,
        title: data.title,
        date: data.date,
        description: data.description,
    };
}

// 3. 정적 경로 생성 (매우 중요: 미리 페이지를 만들어두는 역할)
export async function generateStaticParams() {
    const filenames = fs.readdirSync(postsDirectory);

    return filenames.map((filename) => ({
        slug: filename.replace('.md', ''),
    }));
}

// 4. 실제 상세 페이지 화면
export default async function Post({ params }: { params: { slug: string } }) {
    // params는 Promise일 수 있으므로 await 처리 (Next.js 최신 버전 대응)
    const { slug } = await Promise.resolve(params);
    const postData = await getPostData(slug);

    return (
        <div className="min-h-screen bg-black text-white font-[family-name:var(--font-geist-sans)] p-8 sm:p-20">
            <main className="max-w-3xl mx-auto">

                {/* 뒤로 가기 버튼 */}
                <Link href="/" className="text-gray-500 hover:text-blue-400 transition-colors mb-8 inline-block">
                    ← Back to Home
                </Link>

                {/* 글 헤더 */}
                <header className="mb-12">
                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter mb-4">{postData.title}</h1>
                    <p className="text-gray-400 text-lg mb-4">{postData.description}</p>
                    <div className="text-sm text-gray-500 border-l-2 border-blue-500 pl-3">
                        {postData.date} • By Bernard Kim (Long)
                    </div>
                </header>

                {/* 본문 내용 (HTML 렌더링) */}
                <article
                    className="prose prose-invert prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />

            </main>
        </div>
    );
}
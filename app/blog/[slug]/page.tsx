import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';

const postsDirectory = path.join(process.cwd(), 'posts');

// 글 내용 가져와서 HTML로 변환
async function getPostData(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    // 파일이 없을 경우 대비
    if (!fs.existsSync(fullPath)) {
        throw new Error('글을 찾을 수 없사옵니다.');
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

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

// 정적 경로 생성 (Build 시 필요)
export async function generateStaticParams() {
    if (!fs.existsSync(postsDirectory)) return [];

    const filenames = fs.readdirSync(postsDirectory);
    return filenames.map((filename) => ({
        slug: filename.replace('.md', ''),
    }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    return (
        <div className="min-h-screen bg-black text-white font-[family-name:var(--font-geist-sans)] p-8 sm:p-20">
            <main className="max-w-3xl mx-auto">

                {/* 뒤로 가기 버튼 */}
                <Link href="/" className="text-gray-500 hover:text-blue-400 transition-colors mb-8 inline-block">
                    ← Back to Home
                </Link>

                {/* 글 헤더 (이미지 제거됨) */}
                <header className="mb-12 border-b border-gray-800 pb-8">
                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter mb-6">
                        {postData.title}
                    </h1>
                    <p className="text-gray-400 text-lg mb-6">
                        {postData.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
                        <span className="px-2 py-1 bg-gray-900 rounded border border-gray-800">
                            {postData.date}
                        </span>
                        <span>•</span>
                        <span>By Bernard Kim (Long)</span>
                    </div>
                </header>

                {/* 본문 (Typography 플러그인 적용됨) */}
                <article
                    className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-400 hover:prose-a:text-blue-300"
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />

            </main>
        </div>
    );
}
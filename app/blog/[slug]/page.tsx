import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';
import Image from 'next/image'; // 이미지 기능 수입

const postsDirectory = path.join(process.cwd(), 'posts');

async function getPostData(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
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
        coverImage: data.coverImage, // 여기도 이미지 데이터 추가
    };
}

export async function generateStaticParams() {
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

                <Link href="/" className="text-gray-500 hover:text-blue-400 transition-colors mb-8 inline-block">
                    ← Back to Home
                </Link>

                <header className="mb-12">
                    {/* 상세 페이지 상단 이미지 */}
                    {postData.coverImage && (
                        <div className="relative w-full h-64 sm:h-96 mb-8 rounded-2xl overflow-hidden border border-gray-800">
                            <Image
                                src={postData.coverImage}
                                alt={postData.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter mb-4">{postData.title}</h1>
                    <p className="text-gray-400 text-lg mb-4">{postData.description}</p>
                    <div className="text-sm text-gray-500 border-l-2 border-blue-500 pl-3">
                        {postData.date} • By Bernard Kim (Long)
                    </div>
                </header>

                <article
                    className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-400 hover:prose-a:text-blue-300"
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />

            </main>
        </div>
    );
}
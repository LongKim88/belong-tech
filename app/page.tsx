import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

// [핵심 로직] posts 폴더에 있는 글들을 읽어오는 함수
function getPosts() {
  // 1. posts 폴더 위치 찾기
  const postsDirectory = path.join(process.cwd(), 'posts');

  // 2. 폴더 내의 모든 파일 이름 가져오기
  const filenames = fs.readdirSync(postsDirectory);

  // 3. 각 파일을 읽어서 정보 추출하기
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // gray-matter로 제목, 날짜 등(frontmatter) 파싱
    const { data } = matter(fileContents);

    return {
      slug: filename.replace('.md', ''), // 파일명에서 .md 제거 (주소로 사용)
      title: data.title,
      date: data.date,
      description: data.description,
    };
  });

  return posts;
}

export default function Home() {
  const posts = getPosts(); // 위에서 만든 함수 실행

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-3xl">

        {/* --- 헤더 섹션 --- */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl mb-4">
            Be:Long <span className="text-blue-500">Tech</span>
          </h1>
          <p className="text-xl text-gray-400">
            Bridging <span className="text-white font-semibold">AI</span> &{" "}
            <span className="text-white font-semibold">Infrastructure</span> in the Cloud Era
          </p>
          <div className="mt-4 inline-block px-4 py-1 border border-gray-800 rounded-full text-xs text-gray-500">
            By Bernard Kim (Long)
          </div>
        </div>

        {/* --- 글 목록 섹션 (여기가 핵심이옵니다) --- */}
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-800 pb-2">Latest Posts</h2>

          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block p-6 border border-gray-800 rounded-xl hover:border-blue-500/50 hover:bg-white/[0.02] transition-all"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <span className="text-sm text-gray-500 font-mono">{post.date}</span>
              </div>
              <p className="text-gray-400 line-clamp-2">
                {post.description}
              </p>
            </Link>
          ))}
        </div>

      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-gray-600 text-xs">
        <p>© 2025 Be:Long Tech. All rights reserved.</p>
      </footer>
    </div>
  );
}
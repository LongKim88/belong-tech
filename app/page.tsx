import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image'; // 이미지 기능 수입

function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      date: data.date,
      description: data.description,
      coverImage: data.coverImage, // 이미지 주소 추가
    };
  });

  return posts;
}

export default function Home() {
  const posts = getPosts();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-3xl">

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

        <div className="w-full flex flex-col gap-6">
          <h2 className="text-2xl font-semibold mb-2 border-b border-gray-800 pb-2">Latest Posts</h2>

          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-[#111] border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all"
            >
              {/* 이미지가 있을 때만 보여주는 구역 */}
              {post.coverImage && (
                <div className="relative w-full h-48 sm:h-64">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <span className="text-sm text-gray-500 font-mono">{post.date}</span>
                </div>
                <p className="text-gray-400 line-clamp-2 text-sm sm:text-base">
                  {post.description}
                </p>
              </div>
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
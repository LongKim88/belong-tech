import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center">

        {/* 블로그 타이틀 */}
        <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl">
          Be:Long <span className="text-blue-500">Tech</span>
        </h1>

        {/* 슬로건 */}
        <p className="text-xl text-gray-400 max-w-2xl">
          Bridging <span className="text-white font-semibold">AI</span> &{" "}
          <span className="text-white font-semibold">Infrastructure</span> in the Cloud Era
        </p>

        {/* 저자 이름 */}
        <div className="mt-4 px-6 py-2 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-blue-500 transition-colors cursor-pointer">
          By Bernard Kim (Long)
        </div>

        {/* 임시 메뉴 버튼들 */}
        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
          <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
            Read Latest Posts
          </button>
          <button className="rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">
            View Portfolio
          </button>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-gray-500 text-xs">
        <p>© 2025 Be:Long Tech. All rights reserved.</p>
      </footer>
    </div>
  );
}
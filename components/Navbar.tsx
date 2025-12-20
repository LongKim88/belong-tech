import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full py-6 px-8 flex justify-between items-center max-w-3xl mx-auto border-b border-gray-900 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
            {/* 로고 (클릭하면 홈으로) */}
            <Link href="/" className="font-bold text-xl tracking-tighter hover:text-blue-400 transition-colors text-white">
                Be:Long Tech
            </Link>

            {/* 메뉴 링크들 */}
            <div className="flex gap-6 text-sm font-medium text-gray-400">
                <Link href="/" className="hover:text-white transition-colors">
                    Home
                </Link>
                <Link href="/about" className="hover:text-white transition-colors">
                    About
                </Link>
                <a
                    href="https://github.com/LongKim88"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                >
                    GitHub
                </a>
            </div>
        </nav>
    );
}
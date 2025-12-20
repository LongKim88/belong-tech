// constants/dictionary.ts

export const dictionary = {
    KO: {
        nav: { home: "홈", about: "소개", github: "깃허브" },
        hero: {
            title: "Be:Long Tech",
            subtitle: "클라우드 시대의 AI와 인프라를 잇다",
            desc: "안정성 없는 혁신은 없다는 믿음으로 코드를 작성합니다.",
            author: "By Bernard Kim (Long)",
            latest: "최신 글",
        },
        about: {
            title: "저를 소개합니다",
            intro: "안녕하세요, Bernard Kim (Long)입니다.",
            desc1: "저는 Cloud Native Infrastructure와 AI Engineering의 접점에서 활동하는 엔지니어입니다.",
            desc2: "복잡한 문제를 단순화하고, 견고한 시스템 위에서 최첨단 AI 기술이 안정적으로 서비스될 수 있도록 가교(Bridge) 역할을 수행하는 데 열정을 쏟고 있습니다.",
            tech_infra: "인프라 & 데브옵스",
            tech_ai: "AI & 머신러닝",
            tech_back: "백엔드 개발",
            tech_front: "프론트엔드 & 기타",
        }
    },
    EN: {
        nav: { home: "Home", about: "About", github: "GitHub" },
        hero: {
            title: "Be:Long Tech",
            subtitle: "Bridging AI & Infrastructure in the Cloud Era",
            desc: "I write code with the belief that there is no innovation without stability.",
            author: "By Bernard Kim (Long)",
            latest: "Latest Posts",
        },
        about: {
            title: "About Me",
            intro: "Hi, I'm Bernard Kim (Long).",
            desc1: "I am an engineer working at the intersection of Cloud Native Infrastructure and AI Engineering.",
            desc2: "I am passionate about simplifying complex problems and acting as a bridge to ensure cutting-edge AI technologies run reliably on robust systems.",
            tech_infra: "Infrastructure & DevOps",
            tech_ai: "AI & ML Engineering",
            tech_back: "Backend Development",
            tech_front: "Frontend & Others",
        }
    },
    VI: {
        nav: { home: "Trang chủ", about: "Giới thiệu", github: "GitHub" },
        hero: {
            title: "Be:Long Tech",
            subtitle: "Kết nối AI & Hạ tầng trong Kỷ nguyên Đám mây",
            desc: "Tôi viết mã với niềm tin rằng không có sự đổi mới nào thiếu đi sự ổn định.",
            author: "Bởi Bernard Kim (Long)",
            latest: "Bài viết mới nhất",
        },
        about: {
            title: "Giới thiệu",
            intro: "Xin chào, tôi là Bernard Kim (Long).",
            desc1: "Tôi là kỹ sư làm việc tại giao điểm của Hạ tầng Cloud Native và Kỹ thuật AI.",
            desc2: "Tôi đam mê đơn giản hóa các vấn đề phức tạp và đóng vai trò cầu nối để đảm bảo các công nghệ AI tiên tiến hoạt động tin cậy trên các hệ thống vững chắc.",
            tech_infra: "Hạ tầng & DevOps",
            tech_ai: "AI & Kỹ thuật ML",
            tech_back: "Phát triển Backend",
            tech_front: "Frontend & Khác",
        }
    },
};

export type LanguageType = "KO" | "EN" | "VI";
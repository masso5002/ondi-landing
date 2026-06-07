import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const features = [
  {
    icon: "📄",
    title: "Tạo đề từ file nhanh hơn",
    text: "Giáo viên có thể tải lên tài liệu đề thi, hệ thống hỗ trợ chuyển thành bản nháp để thầy cô xem lại, chỉnh sửa và xuất bản cho học sinh.",
  },
  {
    icon: "📝",
    title: "Ôn tập và thi thử trực tuyến",
    text: "Học sinh có thể luyện đề ở chế độ ôn tập hoặc thử sức trong phòng thi mô phỏng với thời gian và trải nghiệm gần với kỳ thi thật.",
  },
  {
    icon: "🏫",
    title: "Lớp học bằng mã mời",
    text: "Giáo viên tạo lớp, gửi mã mời cho học sinh và có thể kiểm duyệt thành viên trước khi cho phép tham gia lớp.",
  },
  {
    icon: "👥",
    title: "Mạng xã hội học tập",
    text: "Học sinh có thể đăng câu hỏi, chia sẻ bài học, trao đổi cách giải và cùng nhau xây dựng một cộng đồng học tập tích cực.",
    badge: "Nổi bật",
  },
  {
    icon: "✨",
    title: "Đóng góp bài tập cộng đồng",
    text: "ONDI hướng tới việc cho phép học sinh và giáo viên đóng góp bài tập lẻ để mọi người cùng luyện tập, giữ chuỗi học và tiến bộ mỗi ngày.",
  },
  {
    icon: "📈",
    title: "Theo dõi tiến bộ",
    text: "Học sinh có thể theo dõi quá trình luyện tập, độ chính xác, streak học tập và động lực tự học theo thời gian.",
  },
];

const values = [
  "Vì cộng đồng học sinh Việt Nam",
  "Giúp việc ôn tập dễ tiếp cận hơn",
  "Hỗ trợ giáo viên tiết kiệm thời gian",
  "Khuyến khích tinh thần tự học",
];

const roadmap = [
  {
    title: "Hoàn thiện công cụ tạo đề từ file",
    description:
      "Hỗ trợ giáo viên chuyển đổi tài liệu thành đề thi trực tuyến nhanh chóng và thuận tiện.",
  },
  {
    title: "Xây dựng phòng ôn tập và phòng thi mô phỏng",
    description:
      "Tạo không gian luyện đề an toàn, mô phỏng đúng áp lực phòng thi thật.",
  },
  {
    title: "Phát triển lớp học, bài tập và thông báo",
    description:
      "Kết nối lớp học, giao bài tự động và nhận phản hồi trực tiếp từ giáo viên.",
  },
  {
    title: "Xây dựng mạng xã hội học tập",
    description:
      "Nơi học sinh trao đổi bài tập, đặt câu hỏi học tập và chia sẻ các phương pháp giải hay cùng bạn bè toàn quốc.",
    highlight: true,
  },
  {
    title: "Mở rộng đóng góp bài tập cộng đồng",
    description:
      "Xây dựng ngân hàng bài tập mở do giáo viên và học sinh chung tay đóng góp.",
  },
  {
    title: "Theo dõi tiến bộ, streak và bảng xếp hạng",
    description:
      "Ghi nhận nỗ lực hàng ngày, tạo động lực tự học qua bảng vàng vinh danh và chuỗi ngày học tập.",
  },
];

// Helper variants for framer-motion animations
const fadeInUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

function App() {
  const [progressVal, setProgressVal] = useState(0);

  useEffect(() => {
    // Delay slightly then animate progress bar in the hero visual
    const timer = setTimeout(() => {
      setProgressVal(72);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950 selection:bg-blue-100 selection:text-blue-900">
      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_left,#eff6ff_0%,transparent_55%),radial-gradient(ellipse_at_bottom_right,#e0e7ff_0%,transparent_55%),linear-gradient(160deg,#ffffff_0%,#f8fafc_40%,#eff6ff_80%,#dbeafe_100%)] pb-16 pt-6 sm:pb-20">
        {/* Animated decorative glow blobs */}
        <div className="animate-blob-spin-slow absolute right-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-300/20 to-sky-200/20 blur-[120px]" />
        <div className="animate-blob-spin-fast absolute bottom-[-10%] left-[-10%] h-[550px] w-[550px] rounded-full bg-gradient-to-br from-indigo-200/20 to-sky-100/30 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <header className="flex items-center justify-between border-b border-blue-50/50 py-5">
            <a
              href="#"
              className="group flex items-center gap-2 text-2xl font-black tracking-tight text-blue-700 transition-transform duration-200 active:scale-95"
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-600"></span>
              </span>
              <span>ONDI</span>
            </a>

            <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
              <a
                href="#about"
                className="relative py-1 transition-colors duration-200 hover:text-blue-700 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                Giới thiệu
              </a>
              <a
                href="#features"
                className="relative py-1 transition-colors duration-200 hover:text-blue-700 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                Tính năng
              </a>
              <a
                href="#roadmap"
                className="relative py-1 transition-colors duration-200 hover:text-blue-700 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                Lộ trình
              </a>
            </nav>

            <a
              href="#about"
              className="rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700 transition-all duration-200 hover:bg-blue-100/80 active:scale-95 md:hidden"
            >
              Tìm hiểu
            </a>
          </header>

          {/* Hero Content Grid */}
          <div className="grid min-h-[calc(100vh-100px)] items-center gap-12 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-16">
            {/* Left side: Information */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col items-start"
            >
              {/* Badge */}
              <motion.div
                variants={fadeInUp}
                className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-blue-200/60 bg-white/80 px-4 py-1.5 text-xs font-bold text-blue-700 shadow-sm shadow-blue-500/5 backdrop-blur-md"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
                </span>
                Dự án giáo dục phi lợi nhuận vì cộng đồng
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={fadeInUp}
                className="max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
              >
                Nền tảng hỗ trợ{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 bg-clip-text text-transparent">
                    tự học và luyện đề
                  </span>
                  <span className="absolute bottom-1 left-0 -z-10 h-3 w-full rounded-sm bg-blue-100/50" />
                </span>{" "}
                cho học sinh Việt Nam
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={fadeInUp}
                className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8"
              >
                ONDI được phát triển bởi 2 sinh viên với sứ mệnh mang đến công
                cụ tự ôn luyện hiện đại, miễn phí. Hỗ trợ học sinh làm chủ kiến
                thức, giúp giáo viên quản lý lớp học và lan tỏa tinh thần học
                tập tích cực.
              </motion.p>

              {/* Actions */}
              <motion.div
                variants={fadeInUp}
                className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
              >
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-center text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-premium hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/30 active:translate-y-0"
                >
                  Khám phá tính năng
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-full border border-blue-200/80 bg-white/80 px-8 py-4 text-center text-sm font-bold text-blue-700 shadow-sm backdrop-blur-sm transition-premium hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/80 active:translate-y-0"
                >
                  Tìm hiểu sứ mệnh
                </a>
              </motion.div>

              {/* Stat Cards */}
              <motion.div
                variants={fadeInUp}
                className="mt-12 grid w-full max-w-xl grid-cols-3 gap-4"
              >
                {[
                  { value: "2", label: "Người sáng lập", color: "from-blue-600 to-indigo-600" },
                  { value: "3", label: "Nhóm đối tượng", color: "from-indigo-600 to-sky-600" },
                  { value: "∞", label: "Cộng đồng hỗ trợ", color: "from-sky-600 to-emerald-600" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="group rounded-2xl border border-blue-100/50 bg-white/60 p-4 transition-premium hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-blue-500/5 backdrop-blur-md"
                  >
                    <p className={`bg-gradient-to-r ${stat.color} bg-clip-text text-3xl font-black text-transparent`}>
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-slate-500 sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right side: Premium Hub Visual (No Dark Card, light option, modern, clean) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative flex justify-center"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-blue-400/10 via-sky-400/10 to-transparent blur-xl" />

              {/* Outer Card - Beautiful White Hub */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
                className="relative w-full max-w-md rounded-[2.2rem] border border-white bg-gradient-to-b from-white to-blue-50/30 p-5 shadow-[0_32px_64px_-16px_rgba(30,58,138,0.08)] backdrop-blur-xl sm:p-6"
              >
                {/* Visual Header */}
                <div className="mb-5 flex items-center justify-between border-b border-blue-100/40 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-extrabold tracking-wider uppercase text-slate-400">
                      Góc Học Tập Chủ Động
                    </span>
                  </div>
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-700 ring-1 ring-blue-100">
                    ONDI Workspace
                  </span>
                </div>

                {/* Main Heading inside visual - Short, cleanly formatted */}
                <div className="mb-5">
                  <h3 className="text-lg font-black text-slate-900">
                    Học tập chủ động hơn mỗi ngày
                  </h3>
                  <p className="text-xs text-slate-500">
                    Tự học, luyện tập và kết nối cùng cộng đồng.
                  </p>
                </div>

                {/* Dashboard layout (Option A - light backgrounds with colorful active cards) */}
                <div className="grid gap-4">
                  
                  {/* Row 1: Tự Học Card (Streak, Progress) */}
                  <div className="rounded-2xl border border-blue-100/40 bg-white p-4 shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-base">
                          📘
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-800">Tự học mỗi ngày</p>
                          <p className="text-[10px] text-slate-400">Duy trì thói quen học tập</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                        🔥 12 Ngày
                      </span>
                    </div>
                    {/* Animated Progress Bar */}
                    <div className="mt-3">
                      <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1">
                        <span>Mục tiêu tuần</span>
                        <span>{progressVal}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${progressVal}%` }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Two Columns (Cộng Đồng & Tiến Độ) */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Card 2: Cộng Đồng */}
                    <div className="flex flex-col justify-between rounded-2xl border border-blue-100/40 bg-white p-4 shadow-sm transition-all hover:shadow-md">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-base mb-3">
                        👥
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800">Cộng đồng</p>
                        <p className="text-[10px] text-slate-400 leading-normal mt-0.5">
                          Hỏi bài, chia sẻ cách giải hay
                        </p>
                      </div>
                      {/* Avatars simulation */}
                      <div className="flex items-center gap-1.5 mt-3">
                        <div className="flex -space-x-2">
                          <div className="h-5 w-5 rounded-full border border-white bg-gradient-to-tr from-blue-400 to-indigo-500 flex items-center justify-center text-[7px] font-bold text-white">A</div>
                          <div className="h-5 w-5 rounded-full border border-white bg-gradient-to-tr from-purple-400 to-pink-500 flex items-center justify-center text-[7px] font-bold text-white">M</div>
                          <div className="h-5 w-5 rounded-full border border-white bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center text-[7px] font-bold text-white">N</div>
                        </div>
                        <span className="text-[9px] font-bold text-blue-600">+250 bạn</span>
                      </div>
                    </div>

                    {/* Card 3: Tiến Độ */}
                    <div className="flex flex-col justify-between rounded-2xl border border-blue-100/40 bg-white p-4 shadow-sm transition-all hover:shadow-md">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-base">
                          📈
                        </div>
                        <span className="text-xs font-extrabold text-emerald-600">86%</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800">Chính xác</p>
                        <p className="text-[10px] text-slate-400 leading-normal mt-0.5">
                          Tỷ lệ làm đúng đề thi
                        </p>
                      </div>
                      {/* Mini Bar Chart Mock */}
                      <div className="flex items-end gap-1.5 h-6 mt-3">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "40%" }}
                          transition={{ duration: 0.6, delay: 1 }}
                          className="w-full rounded-sm bg-slate-200"
                        />
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "65%" }}
                          transition={{ duration: 0.6, delay: 1.1 }}
                          className="w-full rounded-sm bg-slate-200"
                        />
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "86%" }}
                          transition={{ duration: 0.6, delay: 1.2 }}
                          className="w-full rounded-sm bg-gradient-to-t from-emerald-400 to-emerald-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Lớp Học & Mục tiêu hôm nay */}
                  <div className="rounded-2xl border border-blue-100/40 bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white shadow-md">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-3">
                        <span className="text-lg">🏫</span>
                        <div>
                          <p className="text-xs font-bold">Lớp học cộng đồng</p>
                          <p className="text-[10px] text-blue-100 leading-relaxed mt-0.5">
                            Nhập mã nhận tài liệu từ giáo viên
                          </p>
                        </div>
                      </div>
                      <span className="rounded-md bg-white/20 px-2 py-0.5 text-[9px] font-mono font-bold tracking-wider text-white">
                        MÃ: ON-2026
                      </span>
                    </div>
                  </div>

                  {/* Row 4: Mục tiêu hôm nay - Ticked task (clean, no overlap) */}
                  <div className="rounded-xl border border-slate-100 bg-slate-50/50 px-3.5 py-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-emerald-500 text-[9px] text-white">
                        ✓
                      </div>
                      <span className="text-[11px] font-semibold text-slate-600 line-through">
                        Hoàn thành 10 câu Toán ôn tập
                      </span>
                    </div>
                    <span className="text-[9px] font-semibold text-slate-400">Vừa xong</span>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT SECTION
      ═══════════════════════════════════════════ */}
      <section id="about" className="relative bg-white px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]"
          >
            <div>
              <motion.p
                variants={fadeInUp}
                className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600"
              >
                Về dự án
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
              >
                Được bắt đầu từ mong muốn giúp việc học tốt hơn
              </motion.h2>
            </div>

            <motion.div
              variants={fadeInUp}
              className="space-y-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8"
            >
              <p>
                ONDI không bắt đầu như một sản phẩm thương mại lớn. Dự án khởi nghiệp được
                tạo ra bởi hai sinh viên với mong muốn thử sức, học hỏi và tạo
                nên một nền tảng thực sự có ích cho cộng đồng học tập tại Việt Nam.
              </p>
              <p>
                Chúng tôi tin rằng mỗi học sinh đều nên có cơ hội tiếp cận công
                cụ ôn tập tốt hơn, dễ dùng hơn và phù hợp hơn với thói quen học
                tập hiện đại. Đồng thời, giáo viên cũng có thêm một công cụ hỗ trợ
                tiện lợi để tổ chức kiểm tra và giao bài mà không gặp rào cản kỹ thuật.
              </p>

              <div className="grid gap-4 pt-4 sm:grid-cols-2">
                {values.map((value, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 rounded-2xl border border-blue-100/50 bg-gradient-to-br from-blue-50/30 to-white p-4 font-semibold text-slate-700 transition-premium hover:border-blue-200 hover:shadow-md"
                  >
                    <span className="flex h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                    <span className="text-sm sm:text-base">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURES SECTION
      ═══════════════════════════════════════════ */}
      <section
        id="features"
        className="relative bg-gradient-to-b from-slate-50 to-white px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              Tính năng nổi bật
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Những gì ONDI hướng tới
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Các tính năng được xây dựng xoay quanh nhu cầu thực tế của học
              sinh và giáo viên: tối ưu hóa thời gian tạo đề, tạo phòng ôn thi
              giả lập và chia sẻ tri thức cùng cộng đồng.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group relative rounded-3xl border border-slate-200/60 bg-white p-7 shadow-sm transition-premium hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_40px_-15px_rgba(30,58,138,0.06)] sm:p-8"
              >
                {/* Special highlighted badge for community */}
                {feature.badge && (
                  <span className="absolute right-6 top-6 rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-700 ring-1 ring-blue-100">
                    {feature.badge}
                  </span>
                )}

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 text-xl shadow-inner transition-transform duration-300 group-hover:scale-110">
                  <span>{feature.icon}</span>
                </div>

                <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl flex items-center gap-2">
                  <span>{feature.title}</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ROADMAP SECTION (TIMELINE DESIGN)
      ═══════════════════════════════════════════ */}
      <section id="roadmap" className="relative bg-white px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                Lộ trình phát triển
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                Từng bước hoàn thiện vì cộng đồng
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                ONDI đang trong quá trình phát triển tích cực. Chúng tôi sẽ tiếp tục
                hoàn thiện từng mảnh ghép để tạo nên một hệ sinh thái học tập an toàn,
                mượt mà và miễn phí.
              </p>
            </div>

            {/* Timeline Wrapper */}
            <div className="relative border-l border-blue-100 pl-6 sm:pl-8 ml-4">
              <div className="space-y-10">
                {roadmap.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="relative group"
                  >
                    {/* Timeline Node Point */}
                    <span className={`absolute -left-[35px] sm:-left-[43px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-white transition-colors duration-300 ${item.highlight ? 'border-blue-600 ring-4 ring-blue-100' : 'border-blue-300 group-hover:border-blue-500'}`}>
                      <span className={`h-2.5 w-2.5 rounded-full ${item.highlight ? 'bg-blue-600' : 'bg-blue-300 group-hover:bg-blue-500'}`} />
                    </span>

                    {/* Timeline Card */}
                    <div className={`rounded-2xl border bg-white p-5 transition-premium hover:shadow-lg ${item.highlight ? 'border-blue-200 shadow-md shadow-blue-500/5 bg-gradient-to-br from-white to-blue-50/10' : 'border-slate-100 hover:border-blue-100'}`}>
                      <div className="flex items-center gap-3">
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                          {item.title}
                        </h4>
                        {item.highlight && (
                          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-700 ring-1 ring-emerald-100">
                            Quan trọng
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA / COMING SOON SECTION (PREMIUM GLOW)
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 px-6 py-24 text-white lg:px-8 lg:py-32">
        {/* Decorative elements */}
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-sky-300/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[250px] w-[250px] rounded-full bg-indigo-500/10 blur-[80px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-200">
              Cập nhật thông tin
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              ONDI đang được xây dựng
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base leading-7 text-blue-100">
              Đây là trang giới thiệu chính thức của dự án. Khi hệ thống ra mắt
              phiên bản thử nghiệm (Beta) công khai, chúng tôi sẽ công bố tại đây
              để học sinh và giáo viên trải nghiệm trọn vẹn nhất.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════ */}
      <footer className="bg-slate-950 px-6 py-12 text-center text-xs sm:text-sm text-slate-400">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-bold text-white text-base">ONDI</p>
          <p>© {new Date().getFullYear()} ONDI. Dự án giáo dục vì cộng đồng Việt Nam.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
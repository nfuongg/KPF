/// <reference types="vite/client" />
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { assignments as assignmentData } from "@/data/assignments";

const assignments = assignmentData;

/** @param {string} fileName */
const assetPath = (fileName) =>
  `${import.meta.env.BASE_URL}${fileName.replace(/^\//, "")}`;

const images = {
  hero: assetPath("vk36.jpg"),
  aboutFeature: assetPath("khanh1.png"),
  aboutPortrait: assetPath("khanh2.jpg"),
  setupMain: assetPath("Rectangle-26602@2x.png"),
  setupLaptop: assetPath("Rectangle-29441@2x.png"),
  setupCreative: assetPath("Rectangle-26603@2x.png"),
  setupWorkspace: assetPath("Rectangle-2944@2x.png"),
};

const skillIconByName = {
  "HTML 5": assetPath("./Skill-Icon-ri-html5-fill.svg"),
  "CSS 3": assetPath("./Skill-Icon-uiw-css3.svg"),
  Github: assetPath("./Skill-Icon-mdi-github.svg"),
  JQuery: assetPath("./Skill-Icon-akar-icons-jquery-fill@2x.png"),
  "VS Code": assetPath("./Skill-Icon-akar-icons-vscode-fill@2x.png"),
  Git: assetPath("./Skill-Icon-bi-git.svg"),
  MongoDB: assetPath("./Skill-Icon-bxl-mongodb.svg"),
  "RESTFull APIs": assetPath("./Skill-Icon-mdi-api.svg"),
  Boostrap: assetPath("./Skill-Icon-mdi-bootstrap.svg"),
  FIREBASE: assetPath("./Skill-Icon-mdi-firebase.svg"),
  ReactJS: assetPath("./Skill-Icon-mdi-react.svg"),
  Figma: assetPath("./Skill-Icon-solar-figma-bold.svg"),
  Javascript: assetPath("./Skill-Icon-teenyicons-nodejs-solid.svg"),
};

const blogPosts = [
  {
    title: "Tuần 1: Khám phá thế giới phần cứng máy tính",
    date: "Tháng 3, 2025",
    excerpt:
      "Lần đầu tiên tôi thực sự hiểu được bên trong một chiếc máy tính có những gì. Bài học về phần cứng mở ra cho tôi một góc nhìn hoàn toàn mới...",
    tags: ["Phần cứng", "Tuần 1"],
  },
  {
    title: "Tuần 2: Nghệ thuật tìm kiếm thông tin trên mạng",
    date: "Tháng 3, 2025",
    excerpt:
      "Tôi nhận ra mình đã tìm kiếm trên Google không hiệu quả suốt bao nhiêu năm. Các kỹ thuật Boolean và tìm kiếm nâng cao thực sự thay đổi cách tôi học...",
    tags: ["Thông tin số", "Tuần 2"],
  },
  {
    title: "Tuần 3: AI không còn xa lạ nữa",
    date: "Tháng 4, 2025",
    excerpt:
      "ChatGPT, Gemini, hay các mô hình học máy — giờ tôi đã hiểu chúng hoạt động như thế nào và tại sao AI lại đang thay đổi mọi thứ xung quanh chúng ta...",
    tags: ["AI", "Tuần 3"],
  },
];

export default function Portfolio() {
  const [expandedAssignment, setExpandedAssignment] = useState(null);

  const skills = [
    { name: "HTML 5", src: skillIconByName["HTML 5"] },
    { name: "CSS 3", src: skillIconByName["CSS 3"] },
    { name: "Github", src: skillIconByName.Github },
    { name: "JQuery", src: skillIconByName.JQuery },
    { name: "VS Code", src: skillIconByName["VS Code"] },
    { name: "Git", src: skillIconByName.Git },
    { name: "MongoDB", src: skillIconByName.MongoDB },
    { name: "RESTFull APIs", src: skillIconByName["RESTFull APIs"] },
    { name: "Boostrap", src: skillIconByName.Boostrap },
    { name: "FIREBASE", src: skillIconByName.FIREBASE },
    { name: "ReactJS", src: skillIconByName.ReactJS },
    { name: "Figma", src: skillIconByName.Figma },
    { name: "Javascript", src: skillIconByName.Javascript },
  ];

  return (
    <main className="max-w-[1920px] w-full mx-auto relative bg-background overflow-clip font-heading text-primary">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] flex justify-between w-full h-full">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="w-1 h-full bg-[#3d3a37]" />
        ))}
      </div>

      {/* Navigation */}
      <nav className="sticky top-6 z-50 mx-4 md:mx-[clamp(16px,2vw,38px)] flex flex-row justify-between items-center p-[15px] rounded-[16px] shadow-[inset_0_0_0_1px_#3d3a37] bg-background/80 backdrop-blur-md">
        <div className="flex flex-row items-center gap-[18px]">
          <p className="text-[clamp(20px,2.4vw,46px)] font-extrabold leading-none">
            PORTFOLIO
          </p>
          <div className="bg-secondary w-5 h-5 rounded-full" />
        </div>
        <div className="hidden lg:flex flex-row items-center gap-[clamp(16px,1.7vw,33px)]">
          {[
            { label: "Giới thiệu", href: "#about" },
            { label: "Kỹ năng", href: "#services" },
            { label: "Dự án", href: "#project" },
            { label: "Nhật ký", href: "#blog" },
            { label: "Tổng kết", href: "#reflection" },
            { label: "Liên hệ", href: "#contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[clamp(14px,1.3vw,22px)] font-medium hover:text-secondary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="flex flex-row items-center gap-2 p-2.5 bg-[#c96b8a] hover:bg-[#b45b78] rounded-[57px] hover:scale-105 transition-transform"
        >
          <span className="text-[clamp(14px,1.25vw,22px)] font-bold text-white px-3">
            Liên hệ
          </span>
        </a>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-[clamp(25px,5.2vw,100px)] mx-4 md:mx-10 relative rounded-[20px] overflow-clip aspect-[16/9] md:aspect-[1843/906] z-10"
      >
        <img
          className="w-full h-full object-cover shadow-[inset_0_0_0_1px_#3d3a37]"
          src={images.hero}
          alt="Không gian công nghệ"
        />
        <div className="absolute inset-0 bg-figma-subtle opacity-[0.42]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[clamp(14px,1.5vw,24px)] font-medium !text-[#fdf0f3] [-webkit-text-fill-color:#fdf0f3]! [background:none]! [background-clip:unset]! [-webkit-background-clip:unset]! mb-2 tracking-widest uppercase"
          >
            Nhập môn Công nghệ số và Ứng dụng Trí tuệ Nhân tạo
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-[clamp(36px,6vw,120px)] font-extrabold !text-[#fdf0f3] [-webkit-text-fill-color:#fdf0f3]! [background:none]! [background-clip:unset]! [-webkit-background-clip:unset]! leading-none"
          >
            Lưu Hoàng Vân Khánh
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-[clamp(14px,1.5vw,26px)] font-light text-secondary mt-4"
          >
            Sinh viên Ngôn ngữ Trung Quốc · ULIS-VNU
          </motion.p>
        </div>
      </motion.section>

      {/* About Me Section */}
      <section
        id="about"
        className="mt-[clamp(38px,7.8vw,150px)] mx-4 md:mx-10 flex flex-col gap-10 z-10 relative"
      >
        <div className="flex justify-center items-center gap-[20px] md:gap-[clamp(16px,2.8vw,53px)]">
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
          <h2 className="text-[clamp(32px,5.0vw,96px)] font-extrabold leading-none tracking-[-0.01em] text-secondary uppercase">
            Giới Thiệu
          </h2>
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-[20px] p-8 md:p-[clamp(16px,2.1vw,40px)] flex flex-col gap-6"
            >
              <p className="text-[clamp(28px,3.5vw,60px)] font-extrabold leading-none text-primary">
                Xin chào! 👋
              </p>
              <p className="text-[clamp(16px,1.3vw,22px)] font-normal leading-[1.7] text-primary">
                Tôi là <strong>Lưu Hoàng Vân Khánh</strong>, sinh viên ngành{" "}
                <strong>Ngôn ngữ Trung Quốc</strong>, ULIS-VNU. Tôi đam mê các
                bộ phim Trung Quốc, văn hoá truyền Trung Quốc , luôn thích tìm
                tòi, học hỏi những điều mới để phát triển bản thân mỗi ngày.
              </p>
              <p className="text-[clamp(16px,1.3vw,22px)] font-normal leading-[1.7] text-primary">
                Sở thích của tôi bao gồm: học thư pháp, trải nghiệm ẩm thực
                Trung Quốc(như Tứ Xuyên, Quảng Đông,…), múa cổ trang và đọc sách
                về định hướng bản thân.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-[20px] p-8 shadow-[inset_0_0_0_1px_#3d3a37] flex flex-col gap-4"
            >
              <p className="text-[clamp(20px,2vw,36px)] font-extrabold text-secondary">
                🎯 Mục tiêu học tập
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Thành thạo tiếng Trung trong giao tiếp và lý thuyết sách vở",
                  "Xây dựng sự tự tin khi giao tiếp, xây dựng tư duy giải quyết vấn đề",
                  "Phát triển kỹ năng làm việc nhóm, làm chủ công việc",
                  "Ứng dụng tiếng Trung trong học tập, công việc",
                ].map((goal, i) => (
                  <div key={i} className="flex flex-row items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                    <p className="text-[clamp(14px,1.2vw,20px)] font-light leading-[1.6]">
                      {goal}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[20px] w-full h-[350px] xl:h-[400px]"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-[20px] z-[1]"
                src={images.aboutFeature}
                alt="Không gian sáng tạo nội dung"
              />
              <div className="absolute inset-0 bg-background opacity-[0.3] rounded-[20px] z-[2]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-[20px] p-8 bg-[#fdf0f3] shadow-[inset_0_0_0_1px_#3d3a37] flex flex-col gap-4"
            >
              <p className="text-[clamp(20px,2vw,36px)] font-extrabold text-secondary">
                📌 Mục đích Portfolio
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Thể hiện các kỹ năng số đã học trong khóa học",
                  "Lưu trữ sản phẩm cá nhân để dễ dàng truy cập và chia sẻ",
                  "Ghi lại hành trình học tập và sự tiến bộ của bản thân",
                  "Tạo nền tảng cho sự phát triển nghề nghiệp trong tương lai",
                ].map((item, i) => (
                  <div key={i} className="flex flex-row items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                    <p className="text-[clamp(14px,1.2vw,20px)] font-light leading-[1.6]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Marquee */}
      <section className="mt-[clamp(38px,7.8vw,150px)] bg-secondary py-[20px] overflow-clip flex relative z-10">
        <motion.div
          className="flex flex-row items-center gap-12 px-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1.5 w-20 shrink-0"
            >
              <div className="h-20 w-20 relative flex items-center justify-center">
                <img
                  src={skill.src}
                  className="max-w-full max-h-full object-contain"
                  alt={skill.name}
                />
              </div>
              <p className="text-[clamp(14px,1.3vw,25px)] font-bold text-accent">
                {skill.name}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="mt-[clamp(50px,10.4vw,200px)] mx-4 md:mx-[clamp(16px,3.5vw,68px)] relative z-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(60px,11.77vw,226px)] font-extrabold leading-[1.1] md:leading-[1.3] max-w-[1819px]"
        >
          Các <span className="text-secondary">kỹ năng</span> tôi đã phát triển
        </motion.p>

        <div className="mt-[clamp(25px,5.2vw,100px)] relative flex flex-col xl:flex-row items-start justify-between">
          <div className="relative w-full max-w-[1030px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-accent rounded-[40px] md:rounded-[72px] shadow-[inset_0_0_0_1px_#3d3a37] p-6 md:p-[clamp(16px,3.4vw,66px)] flex flex-col gap-10 relative z-10"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="relative">
                    <img
                      src={images.aboutPortrait}
                      className="w-[100px] md:w-[141px] h-[100px] md:h-[141px] rounded-full object-cover shadow-[inset_0_0_0_1px_#3d3a37] z-[3] relative"
                      alt="Ảnh chân dung"
                    />
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-secondary rounded-full shadow-[inset_0_0_0_2px_#3d3a37] z-[4]" />
                  </div>
                  <div className="flex flex-col gap-2 md:gap-4 text-center md:text-left">
                    <p className="text-[clamp(22px,2.08vw,40px)] font-bold text-primary">
                      Lưu Hoàng Vân Khánh
                    </p>
                    <div className="flex flex-row items-center justify-center md:justify-start gap-2">
                      <p className="text-[14px] md:text-[18px] font-medium text-primary">
                        📍 Hà Nội, Việt Nam
                      </p>
                    </div>
                    <p className="text-[14px] md:text-[18px] font-bold text-primary">
                      Sinh viên Ngôn ngữ Trung Quốc · Năm 1 · ULIS-VNU
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-[clamp(20px,2.08vw,36px)] font-extrabold leading-[1.2] text-primary">
                  Nhập môn Công nghệ số & Ứng dụng Trí tuệ nhân tạo
                </p>
                <p className="text-[clamp(16px,1.5vw,26px)] font-normal leading-[1.6] text-primary">
                  Môn học đã mở ra cho tôi cánh cửa bước vào thế giới công nghệ
                  số, nơi mỗi kỹ năng đều trở thành hành trang cho tương lai. Từ
                  việc sử dụng máy tính thành thạo, tìm kiếm và khai thác thông
                  tin hiệu quả, đến việc tiếp cận trí tuệ nhân tạo và những công
                  nghệ tiên tiến, tôi dần hình thành tư duy của một công dân số
                  hiện đại. Bên cạnh đó, khả năng giao tiếp, hợp tác trực tuyến
                  và sáng tạo nội dung số cũng được bồi đắp từng ngày. Trên hết,
                  tôi nhận thức sâu sắc rằng an toàn thông tin và liêm chính học
                  thuật không chỉ là nguyên tắc học tập mà còn là nền tảng để
                  phát triển bền vững trong kỷ nguyên số.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section
        id="project"
        className="mt-[clamp(38px,7.8vw,150px)] mx-4 md:mx-[clamp(16px,3vw,60px)] flex flex-col gap-[clamp(20px,5.2vw,80px)] z-10 relative"
      >
        <div className="flex justify-center items-center gap-[20px] md:gap-[clamp(16px,2.8vw,53px)]">
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
          <h2 className="text-[clamp(32px,5.0vw,96px)] font-extrabold leading-none tracking-[-0.01em] text-secondary uppercase">
            Dự Án
          </h2>
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
        </div>

        <p className="text-center text-[clamp(16px,1.5vw,26px)] font-light text-primary/70 -mt-4">
          6 bài tập thuộc môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ Nhân tạo
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {assignments.map((assignment, i) => (
            <motion.div
              key={assignment.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-[20px] overflow-hidden shadow-[inset_0_0_0_1px_#3d3a37] bg-[#fdf0f3] hover:bg-[#f8e1e7] transition-all duration-300 group"
            >
              {/* Card Header */}
              <div className="bg-secondary p-6 flex flex-col gap-2">
                <div className="flex flex-row items-center justify-between">
                  <span className="text-[13px] font-bold text-primary/70 uppercase tracking-widest">
                    {assignment.baiTap}
                  </span>
                  <span className="text-3xl">{assignment.icon}</span>
                </div>
                <p className="text-[clamp(16px,1.5vw,22px)] font-extrabold text-primary leading-[1.3]">
                  {assignment.title}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div>
                  <p className="text-[13px] font-bold text-secondary uppercase tracking-widest mb-2">
                    🎯 Mục tiêu
                  </p>
                  <p className="text-[clamp(14px,1.1vw,18px)] font-light leading-[1.6] text-primary/80">
                    {assignment.goal}
                  </p>
                </div>

                <div>
                  <p className="text-[13px] font-bold text-secondary uppercase tracking-widest mb-2">
                    📋 Tóm tắt
                  </p>
                  <p className="text-[clamp(14px,1.1vw,18px)] font-light leading-[1.6] text-primary/80">
                    {assignment.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {assignment.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="py-1 px-3 rounded-full shadow-[inset_0_0_0_1px_#e8b2c5] text-[12px] font-bold text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <Link
                  to={`/assignments/${assignment.id}`}
                  className="flex flex-row items-center justify-center gap-2 w-full py-3 px-6 bg-[#c96b8a] hover:bg-[#b45b78] rounded-[12px] hover:scale-[1.02] transition-transform text-white font-bold text-[clamp(14px,1.2vw,18px)]"
                >
                  <span>📄</span>
                  <span>Bài học chi tiết</span>
                  <span className="ml-1">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Set-Up Section */}
      <section
        id="set-up"
        className="mt-[clamp(38px,7.8vw,150px)] mx-4 md:mx-[clamp(16px,2.8vw,53px)] grid grid-cols-1 xl:grid-cols-[832fr_910fr] gap-[clamp(20px,5.2vw,100px)] z-10 relative"
      >
        {/* Left Column */}
        <div className="flex flex-col gap-[clamp(16px,3.2vw,62px)]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-[20px] md:gap-[clamp(16px,2.8vw,53px)]">
              <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
              <h2 className="text-[clamp(32px,5.0vw,96px)] font-extrabold leading-none tracking-[-0.01em] text-secondary uppercase">
                Set - Up
              </h2>
              <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
            </div>
            <p className="text-[clamp(25px,2.34vw,45px)] font-extrabold leading-[1.26]">
              CÔNG CỤ VÀ THIẾT BỊ CỦA TÔI
            </p>
            <p className="text-[clamp(16px,1.5vw,24px)] font-normal leading-[1.6] text-primary/70">
              Những công cụ tôi sử dụng hàng ngày trong học tập và làm việc
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {[
              {
                i1: images.setupLaptop,
                i2: images.setupCreative,
                title: "Máy tính / Laptop",
                sub: "Thiết bị học tập chính",
              },
              {
                i1: images.setupCreative,
                i2: images.setupWorkspace,
                title: "Google Scholar",
                sub: "Công cụ tìm kiếm & nghiên cứu",
              },
              {
                i1: images.setupWorkspace,
                i2: images.setupLaptop,
                title: "Google Workspace",
                sub: "Làm việc và cộng tác nhóm",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-5 bg-accent rounded-[20px] w-full"
              >
                <img
                  src={item.i1}
                  className="w-full sm:w-[226px] h-[150px] sm:h-full object-cover rounded-[20px]"
                  alt="Setup Item"
                />
                <div className="flex flex-col gap-3 items-start w-full">
                  <p className="text-[clamp(19px,1.82vw,30px)] font-extrabold text-primary">
                    {item.title}
                  </p>
                  <p className="text-[16px] md:text-[18px] font-normal text-primary/80">
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[16/9] md:aspect-[910/591]"
          >
            <img
              src={images.setupMain}
              className="w-full h-full object-cover rounded-[20px] shadow-[inset_0_0_0_8px_#3d3a37] md:shadow-[inset_0_0_0_18px_#3d3a37]"
              alt="Không gian làm việc"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              images.setupLaptop,
              images.setupCreative,
              images.setupWorkspace,
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <img
                  src={src}
                  className="w-full aspect-[270/164] object-cover rounded-[15px]"
                  alt="Chi tiết thiết lập"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog / Nhật ký Section */}
      <section
        id="blog"
        className="mt-[clamp(38px,7.8vw,150px)] mx-4 md:mx-16 flex flex-col gap-[clamp(20px,5.2vw,80px)] z-10 relative"
      >
        <div className="flex justify-center items-center gap-[20px] md:gap-[clamp(16px,2.8vw,53px)]">
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
          <h2 className="text-[clamp(32px,5.0vw,96px)] font-extrabold leading-none tracking-[-0.01em] text-secondary uppercase">
            Nhật Ký Học Tập
          </h2>
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-[clamp(20px,5.2vw,100px)]">
          {/* Left sticky */}
          <div className="flex flex-col gap-6 xl:sticky top-32 h-fit">
            <p className="text-[clamp(32px,3.91vw,65px)] font-extrabold leading-[1.3] tracking-[-0.01em]">
              Hành trình <span className="text-secondary">học hỏi</span> từng
              ngày
            </p>
            <p className="text-[clamp(16px,1.5vw,24px)] font-light leading-[1.7] text-primary/70">
              Đây là nơi tôi ghi lại những suy nghĩ, khám phá và bài học từ mỗi
              tuần học. Nhật ký giúp tôi nhìn lại hành trình và tiếp tục tiến
              bộ.
            </p>
          </div>

          {/* Right blog posts */}
          <div className="flex flex-col gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4 pt-6 border-t-[2px] border-primary/20 group cursor-pointer"
              >
                <div className="flex flex-row flex-wrap gap-2">
                  {post.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="py-1 px-3 rounded-full shadow-[inset_0_0_0_1px_#e8b2c5] text-[12px] font-bold text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-[13px] text-primary/50 font-light self-center ml-2">
                    {post.date}
                  </span>
                </div>
                <p className="text-[clamp(18px,1.5vw,26px)] font-extrabold group-hover:text-secondary transition-colors">
                  {post.title}
                </p>
                <p className="text-[clamp(14px,1.2vw,20px)] font-light leading-[1.7] text-primary/70">
                  {post.excerpt}
                </p>
                <p className="text-secondary font-bold text-[14px] group-hover:underline">
                  Đọc thêm →
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection / Tổng kết Section */}
      <section
        id="reflection"
        className="mt-[clamp(38px,7.8vw,150px)] mx-4 md:mx-[clamp(16px,3.5vw,68px)] flex flex-col gap-[clamp(20px,5.2vw,80px)] z-10 relative"
      >
        <div className="flex justify-center items-center gap-[20px] md:gap-[clamp(16px,2.8vw,53px)]">
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
          <h2 className="text-[clamp(28px,4.5vw,86px)] font-extrabold leading-none tracking-[-0.01em] text-secondary uppercase">
            Tổng Kết
          </h2>
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Cảm nhận */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-3 bg-secondary rounded-[20px] p-8 md:p-12"
          >
            <p className="text-[clamp(24px,2.5vw,46px)] font-extrabold text-primary mb-6">
              💭 Trải nghiệm & cảm nhận
            </p>
            <p className="text-[clamp(16px,1.4vw,24px)] font-normal leading-[1.8] text-primary/90">
              Nhìn lại hành trình hoàn thiện portfolio, tôi nhận ra mình đã đi
              xa hơn những gì từng nghĩ. Điều đọng lại không chỉ là những kiến
              thức về máy tính, AI hay môi trường số, mà còn là một cách tư duy
              mới: biết học hỏi, biết chọn lọc thông tin, biết sáng tạo và biết
              sử dụng công nghệ một cách có trách nhiệm. Mỗi bài học là một viên
              gạch nhỏ góp phần xây dựng nền tảng số vững chắc, giúp tôi tự tin
              hơn để thích nghi, đổi mới và sẵn sàng bước vào tương lai trong kỷ
              nguyên số.
            </p>
          </motion.div>

          {/* Kiến thức & Kỹ năng */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-[20px] p-8 shadow-[inset_0_0_0_1px_#3d3a37] flex flex-col gap-4"
          >
            <p className="text-[clamp(20px,1.8vw,32px)] font-extrabold text-secondary">
              📚 Kiến thức đã học
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Hiểu rõ cấu trúc phần cứng máy tính",
                "Kỹ năng tìm kiếm và đánh giá thông tin",
                "Kiến thức cơ bản về AI và ứng dụng",
                "Giao tiếp và hợp tác trong môi trường số",
                "Sáng tạo nội dung số đa phương tiện",
                "An toàn thông tin và liêm chính học thuật",
              ].map((item, i) => (
                <div key={i} className="flex flex-row items-start gap-3">
                  <span className="text-secondary font-bold shrink-0">✓</span>
                  <p className="text-[14px] md:text-[16px] font-light leading-[1.6]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Điểm tâm đắc */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-[20px] p-8 shadow-[inset_0_0_0_1px_#3d3a37] flex flex-col gap-4"
          >
            <p className="text-[clamp(20px,1.8vw,32px)] font-extrabold text-secondary">
              ⭐ Điểm tâm đắc nhất
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  emoji: "🤖",
                  text: "Bài học về trí tuệ nhân tạo giúp tôi nhận ra AI không chỉ là công cụ hỗ trợ, mà còn là người bạn đồng hành, mở ra những phương pháp học tập và làm việc thông minh, hiệu quả hơn trong kỷ nguyên số.",
                },
                {
                  emoji: "🛡️",
                  text: "Chủ đề về an toàn thông tin và liêm chính học thuật giúp tôi hiểu rằng năng lực số không chỉ được đo bằng kỹ năng công nghệ, mà còn bằng ý thức trách nhiệm và đạo đức trong việc sử dụng, chia sẻ thông tin.",
                },
                {
                  emoji: "🎨",
                  text: "Những trải nghiệm sáng tạo nội dung số đã giúp tôi rèn luyện tư duy sáng tạo, khả năng truyền đạt ý tưởng và biến những kiến thức khô khan thành các sản phẩm trực quan, sinh động và giàu giá trị.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-row items-start gap-3 p-4 bg-[#fdf0f3] rounded-[12px]"
                >
                  <span className="text-2xl shrink-0">{item.emoji}</span>
                  <p className="text-[14px] md:text-[16px] font-light leading-[1.6]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Thách thức */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="rounded-[20px] p-8 shadow-[inset_0_0_0_1px_#3d3a37] flex flex-col gap-4"
          >
            <p className="text-[clamp(20px,1.8vw,32px)] font-extrabold text-secondary">
              💪 Thách thức đã vượt qua
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  emoji: "⏰",
                  text: "Quản lý thời gian để hoàn thành đầy đủ 6 bài tập trong thời hạn đề ra.",
                },
                {
                  emoji: "🌐",
                  text: "Xây dựng một website portfolio từ đầu — điều tôi chưa từng làm trước đây.",
                },
                {
                  emoji: "📖",
                  text: "Tổng hợp và trình bày kiến thức từ nhiều chủ đề khác nhau một cách mạch lạc và logic.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-row items-start gap-3 p-4 bg-[#fdf0f3] rounded-[12px]"
                >
                  <span className="text-2xl shrink-0">{item.emoji}</span>
                  <p className="text-[14px] md:text-[16px] font-light leading-[1.6]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="mt-[clamp(38px,7.8vw,150px)] mx-4 md:mx-10 flex flex-col gap-[clamp(20px,5.2vw,100px)] z-10 relative"
      >
        <div className="flex justify-center items-center gap-[20px] md:gap-[clamp(16px,2.8vw,53px)]">
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
          <h2 className="text-[clamp(32px,5.0vw,96px)] font-extrabold leading-none tracking-[-0.01em] text-secondary uppercase">
            Liên Hệ
          </h2>
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1220fr_582fr] gap-[clamp(16px,2.6vw,50px)] xl:gap-[clamp(20px,5.2vw,100px)]">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-[clamp(16px,2.1vw,40px)] md:gap-[clamp(16px,3.1vw,60px)]"
          >
            <p className="text-[clamp(32px,3.54vw,68px)] font-extrabold leading-[1.1]">
              Có câu hỏi hoặc muốn kết nối? Hãy liên hệ với tôi!
            </p>
            <p className="text-[clamp(18px,1.93vw,37px)] font-light leading-[1.4]">
              Tôi luôn sẵn sàng lắng nghe và trao đổi. Đừng ngần ngại gửi tin
              nhắn cho tôi nhé.
            </p>

            <form
              className="flex flex-col gap-[23px] w-full"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col md:flex-row gap-[23px] w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 p-2.5 border-b-[2px] border-primary bg-transparent text-primary text-[clamp(16px,1.56vw,30px)] font-light outline-none placeholder:text-primary/50 focus:border-primary transition-colors"
                />

                <input
                  type="text"
                  placeholder="Tên của bạn"
                  className="flex-1 p-2.5 border-b-[2px] border-primary bg-transparent text-primary text-[clamp(16px,1.56vw,30px)] font-light outline-none placeholder:text-primary/50 focus:border-primary transition-colors"
                />
              </div>
              <textarea
                placeholder="Lời nhắn"
                className="w-full h-[150px] md:h-[263px] p-2.5 border-b-[2px] border-primary bg-transparent text-primary text-[clamp(16px,1.56vw,30px)] font-light outline-none resize-none placeholder:text-primary/50 focus:border-primary transition-colors"
              />

              <button
                type="submit"
                className="flex flex-row items-center gap-[11px] p-4 md:p-5 bg-[#c96b8a] hover:bg-[#b45b78] rounded-[58px] w-fit hover:scale-105 transition-transform mt-4"
              >
                <img
                  src={assetPath("./formkit-submit@2x.png")}
                  className="w-5 h-4"
                  alt="Gửi"
                />
                <span className="text-[16px] md:text-[20px] font-semibold text-white">
                  Gửi tin nhắn
                </span>
              </button>
            </form>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-[clamp(16px,3.1vw,60px)] md:gap-[clamp(20px,5.2vw,100px)]"
          >
            <div className="flex flex-col gap-[21px]">
              <p className="text-[clamp(22px,2.08vw,40px)] font-extrabold">
                Thông tin liên hệ
              </p>
              <a
                href="mailto:hoangkhasnh77@gmail.com"
                className="text-[clamp(16px,1.8vw,32px)] font-normal hover:text-secondary transition-colors break-all"
              >
                hoangkhasnh77@gmail.com
              </a>
              <p className="text-[clamp(14px,1.5vw,24px)] font-normal text-primary/80">
                0974572763
              </p>
            </div>

            <div className="flex flex-col gap-[21px]">
              <p className="text-[clamp(22px,2.08vw,40px)] font-extrabold">
                Mạng xã hội
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    name: "Facebook",
                    icon: assetPath("./ant-design-facebook-filled.svg"),
                  },
                  {
                    name: "Instagram",
                    icon: assetPath("./ri-instagram-fill.svg"),
                  },
                  {
                    name: "Tiktok",
                    icon: assetPath("./ic-baseline-tiktok.svg"),
                  },
                  { name: "Youtube", icon: assetPath("./mdi-youtube.svg") },
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex flex-row items-center gap-[15px] group w-fit"
                  >
                    <div className="w-[42px] min-h-[42px] relative flex items-center justify-center">
                      <img
                        src={social.icon}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform"
                        alt={social.name}
                      />
                    </div>
                    <p className="text-[clamp(19px,1.82vw,35px)] font-normal group-hover:text-secondary transition-colors">
                      {social.name}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[21px]">
              <p className="text-[clamp(22px,2.08vw,40px)] font-extrabold">
                Địa điểm
              </p>
              <p className="text-[clamp(18px,1.8vw,32px)] font-normal leading-[1.4]">
                Hà Nội, Việt Nam
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-[clamp(38px,7.8vw,150px)] mx-4 md:mx-12 mb-12 flex flex-col lg:flex-row justify-between items-center gap-10 z-10 relative border-t border-primary/20 pt-10">
        <div className="flex flex-row items-center gap-[clamp(16px,2.1vw,40px)] md:gap-[clamp(19px,4.9vw,95px)]">
          <p className="text-[clamp(20px,2.34vw,45px)] font-extralight">©</p>
          <p className="text-[clamp(20px,2.34vw,45px)] font-light">2026</p>
          <p className="text-[clamp(20px,2.34vw,45px)] font-extrabold">
            VÂN KHÁNH
          </p>
        </div>
        <p className="text-[clamp(16px,2.34vw,45px)] font-normal text-center">
          Nhập môn Công nghệ số & TTNT{" "}
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-row items-center gap-2.5 hover:text-secondary transition-colors group"
        >
          <p className="text-[clamp(18px,2.34vw,45px)] font-extrabold">
            LÊN ĐẦU TRANG
          </p>
        </button>
      </footer>
    </main>
  );
}

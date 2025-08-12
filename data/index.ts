export const navItems = [
  { name: "Giới thiệu", link: "#about" },
  { name: "Dự án", link: "#projects" },
  { name: "Đánh giá", link: "#testimonials" },
  { name: "Liên hệ", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Tôi ưu tiên sự hợp tác với khách hàng, khuyến khích giao tiếp cởi mở",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Tôi rất linh hoạt trong việc giao tiếp theo múi giờ",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Công nghệ tôi sử dụng",
    description: "Tôi luôn cố gắng cải thiện liên tục",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Người đam mê công nghệ với niềm yêu thích phát triển phần mềm",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Hiện đang xây dựng thư viện JS Animation",
    description: "Thông tin bên trong",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Bạn có muốn bắt đầu một dự án cùng nhau?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Hệ Mặt Trời 3D - Khám phá các hành tinh",
    des: "Khám phá vẻ đẹp kỳ diệu của hệ Mặt Trời qua mô phỏng 3D hấp dẫn sử dụng Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Ứng dụng gọi video",
    des: "Đơn giản hóa trải nghiệm gọi video, kết nối liền mạch với đồng nghiệp và bạn bè.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Ứng dụng Canva",
    des: "Ứng dụng SaaS tích hợp AI cùng hệ thống thanh toán và quản lý credits hiện đại.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Website iPhone 3D có Animation",
    des: "Tái hiện website iPhone 15 Pro với hiệu ứng 3D và animation GSAP cực mượt.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Hợp tác với Quang.Dev là một trải nghiệm tuyệt vời. Sự chuyên nghiệp, nhanh chóng và tận tâm của anh ấy thể hiện rõ trong suốt dự án. Niềm đam mê của Quang đối với mọi khía cạnh phát triển thật sự nổi bật. Nếu bạn muốn nâng tầm website và thương hiệu, Quang là lựa chọn lý tưởng.",
    name: "",
    title: "",
  },

];

export const companies = [
  { id: 1, name: "Cloudinary", img: "/cloud.svg", nameImg: "/cloudName.svg" },
  { id: 2, name: "Appwrite", img: "/app.svg", nameImg: "/appName.svg" },
  { id: 3, name: "Hostinger", img: "/host.svg", nameImg: "/hostName.svg" },
  { id: 4, name: "Stream", img: "/s.svg", nameImg: "/streamName.svg" },
  { id: 5, name: "Docker", img: "/dock.svg", nameImg: "/dockerName.svg" },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer ",
    desc: "Hỗ trợ phát triển nền tảng web bằng React.js, tăng tính tương tác.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "FiveM Developer",
    desc: "Phát triển và tối ưu hóa server FiveM với ESX/QBCore, viết script tùy chỉnh, tối ưu hiệu suất và tạo trải nghiệm chơi game độc đáo.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },

  {
    id: 3,
    title: "Design",
    desc: "Thiết kế đồ họa chuyên nghiệp bao gồm banner, poster, giao diện và các ấn phẩm truyền thông.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },

  // {
  //   id: 4,
  //   title: "Trưởng nhóm Frontend",
  //   desc: "Phát triển và duy trì các tính năng giao diện người dùng với công nghệ hiện đại.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  { id: 1, img: "/git.svg" },
  { id: 2, img: "/twit.svg" },
  { id: 3, img: "/link.svg" },
];

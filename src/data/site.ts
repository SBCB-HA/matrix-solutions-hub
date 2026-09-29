import type { CostOption, NavItem, Project, Service } from "@/types/site";

export const site = {
  brand: "MATRIX SOFTWARE",
  brandShort: "MATRIX",
  nav: [
    { label: "Về chúng tôi", href: "#ve-chung-toi" },
    { label: "Giải pháp", href: "#giai-phap" },
    { label: "Dự án", href: "#du-an" },
    { label: "Ước tính chi phí", href: "#chi-phi" },
  ] satisfies NavItem[],
  contactLabel: "Bắt đầu dự án",
  hero: {
    eyebrow: "ĐỐI TÁC CÔNG NGHỆ CHO DOANH NGHIỆP",
    titleTop: "Phần mềm đúng bài toán.",
    titleBottom: "Tăng trưởng đúng hướng.",
    description: "Từ ý tưởng đến sản phẩm vận hành thực tế, chúng tôi thiết kế và phát triển giải pháp số phù hợp với cách doanh nghiệp của bạn hoạt động.",
    primary: "Trao đổi về dự án",
    secondary: "Khám phá giải pháp",
    scroll: "CUỘN ĐỂ KHÁM PHÁ",
    imageAlt: "Đội ngũ phát triển phần mềm cùng thảo luận giao diện phân tích doanh nghiệp",
  },
  intro: { index: "01 / THẤU HIỂU", eyebrow: "VẤN ĐỀ & GIẢI PHÁP", title: "Công nghệ chỉ có giá trị khi giải quyết đúng vấn đề.", description: "Không bắt đầu bằng những dòng code. Chúng tôi bắt đầu bằng việc hiểu quy trình, con người và mục tiêu kinh doanh phía sau mỗi yêu cầu.", problemLabel: "KHI CHƯA CÓ GIẢI PHÁP PHÙ HỢP", solutionLabel: "CÙNG MATRIX SOFTWARE", problems: ["Dữ liệu rời rạc, khó đưa ra quyết định", "Quy trình thủ công làm chậm tăng trưởng", "Phần mềm có sẵn không vừa cách vận hành"], solutions: ["Một hệ thống kết nối mọi điểm dữ liệu", "Tự động hóa để đội ngũ tập trung vào giá trị", "Sản phẩm được thiết kế theo doanh nghiệp bạn"], whyTitle: "Một đội ngũ. Đồng hành đến cùng.", whyDescription: "Chúng tôi kết hợp tư duy sản phẩm, thiết kế trải nghiệm và kỹ thuật để biến nhu cầu phức tạp thành phần mềm dễ dùng, dễ mở rộng." },
  services: { index: "02 / GIẢI PHÁP", eyebrow: "CHÚNG TÔI LÀM GÌ", title: "Từ nhu cầu thực tế đến sản phẩm có thể vận hành.", description: "Giải pháp được xây dựng theo mục tiêu của bạn, không ép doanh nghiệp vào một khuôn mẫu có sẵn.", items: [
    { number: "01", icon: "workflow", title: "Phần mềm nội bộ", description: "Số hóa quy trình, quản lý vận hành và kết nối dữ liệu trong một hệ thống thống nhất.", tags: ["ERP / CRM", "Tự động hóa"] },
    { number: "02", icon: "globe", title: "Nền tảng web", description: "Website và ứng dụng web hiệu suất cao, tạo trải nghiệm liền mạch cho khách hàng và đội ngũ.", tags: ["Web app", "Cổng thông tin"] },
    { number: "03", icon: "smartphone", title: "Ứng dụng di động", description: "Đưa sản phẩm đến gần người dùng hơn với trải nghiệm trực quan trên mọi thiết bị.", tags: ["iOS / Android", "Đa nền tảng"] },
    { number: "04", icon: "blocks", title: "Sản phẩm theo yêu cầu", description: "Tư vấn, thiết kế và phát triển từ đầu cho những bài toán không có lời giải đóng gói.", tags: ["MVP", "Tích hợp hệ thống"] },
  ] satisfies Service[] },
  projects: { index: "03 / NĂNG LỰC", eyebrow: "HƯỚNG GIẢI QUYẾT", title: "Hình dung sản phẩm của bạn trong thực tế.", description: "Một số mô hình giải pháp tiêu biểu mà chúng tôi có thể cùng doanh nghiệp xây dựng.", note: "Minh họa năng lực, không đại diện cho dự án hay khách hàng đã triển khai.", items: [
    { category: "MÔ HÌNH GIẢI PHÁP / VẬN HÀNH", title: "Trung tâm điều hành hợp nhất", description: "Một nơi để theo dõi dữ liệu, công việc và hiệu suất trên toàn bộ tổ chức.", outcome: "Dữ liệu rõ ràng. Quyết định nhanh hơn.", image: "product" },
    { category: "MÔ HÌNH GIẢI PHÁP / TRẢI NGHIỆM", title: "Cổng dịch vụ khách hàng", description: "Tối giản hành trình tương tác từ yêu cầu đầu tiên đến hỗ trợ sau triển khai.", outcome: "Trải nghiệm nhất quán trên mọi điểm chạm." },
  ] satisfies Project[], testimonialLabel: "GÓC NHÌN CỦA CHÚNG TÔI", testimonial: "“Một sản phẩm tốt không chỉ chạy ổn định hôm nay, mà còn đủ linh hoạt cho cách doanh nghiệp phát triển ngày mai.”", testimonialBy: "— Triết lý phát triển của Matrix Software" },
  cost: { index: "04 / ƯỚC TÍNH", eyebrow: "LẬP KẾ HOẠCH", title: "Dự trù ngân sách cho ý tưởng của bạn.", description: "Chọn nền tảng và tính năng cần thiết để nhận khoảng chi phí tham khảo ngay lập tức.", platformLabel: "01 / CHỌN NỀN TẢNG", featuresLabel: "02 / CHỌN TÍNH NĂNG", platformOptions: [ { id: "web", label: "Ứng dụng web", price: 120 }, { id: "mobile", label: "Ứng dụng di động", price: 180 }, { id: "both", label: "Web + Di động", price: 260 } ] satisfies CostOption[], featureOptions: [ { id: "accounts", label: "Tài khoản & phân quyền", price: 35 }, { id: "dashboard", label: "Báo cáo & dashboard", price: 45 }, { id: "payment", label: "Thanh toán trực tuyến", price: 40 }, { id: "integration", label: "Tích hợp hệ thống", price: 55 }, { id: "automation", label: "Tự động hóa quy trình", price: 65 }, { id: "realtime", label: "Thông báo thời gian thực", price: 30 } ] satisfies CostOption[], estimateLabel: "KHOẢNG ĐẦU TƯ DỰ KIẾN", summaryPlatform: "NỀN TẢNG", summaryFeatures: "TÍNH NĂNG", unit: "triệu VNĐ", disclaimer: "Con số chỉ mang tính tham khảo, chưa phải báo giá chính thức. Chi phí thực tế phụ thuộc vào phạm vi và yêu cầu chi tiết.", action: "Nhận tư vấn chi tiết" },
  contact: { index: "05 / KẾT NỐI", eyebrow: "BƯỚC TIẾP THEO", title: "Hãy bắt đầu bằng một cuộc trò chuyện.", description: "Kể chúng tôi nghe về bài toán của bạn. Cùng tìm ra hướng đi phù hợp trước khi nói về giải pháp.", promises: ["Lắng nghe và làm rõ nhu cầu", "Đề xuất hướng triển khai phù hợp", "Minh bạch về phạm vi và chi phí"], formTitle: "Chia sẻ ý tưởng của bạn", fields: { name: "Họ và tên", email: "Email công việc", company: "Tên doanh nghiệp", message: "Bạn đang muốn giải quyết vấn đề gì?" }, submit: "Gửi yêu cầu tư vấn", unavailable: "Chưa cấu hình email nhận yêu cầu. Vui lòng liên hệ khi kênh tiếp nhận được cập nhật.", sent: "Ứng dụng email đã được mở. Vui lòng kiểm tra và gửi thư để hoàn tất yêu cầu.", estimatePrefix: "Ước tính tham khảo" },
  footer: { tagline: "Thiết kế phần mềm cho cách doanh nghiệp bạn vận hành và phát triển.", linksTitle: "KHÁM PHÁ", contactTitle: "LIÊN HỆ", contactNote: "Sẵn sàng trao đổi về dự án tiếp theo của bạn.", copyright: "© 2026 Matrix Software. Bảo lưu mọi quyền.", backTop: "Về đầu trang" },
};

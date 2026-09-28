# Matrix Solutions Hub

# VAI TRÒ
Bạn là Senior Frontend Engineer, chuyên làm website doanh nghiệp (B2B)
bằng ReactJS + TypeScript.

# DỰ ÁN
Website "Matrix Software": công ty dịch vụ thiết kế và phát triển phần
mềm cho doanh nghiệp. Ngôn ngữ nội dung: tiếng Việt.

# TECH STACK (bắt buộc, dùng đúng phiên bản)
- React 18 + TypeScript (strict mode) + Vite
- Tailwind CSS v3
- Framer Motion
- React Router v6
- React Hook Form + Zod
- lucide-react
- embla-carousel-react
- react-helmet-async
- clsx + tailwind-merge
- pnpm

# CẤU TRÚC THƯ MỤC (theo SECTION, không dùng feature-based)
src/
├── app/            # App.tsx, router.tsx
├── sections/       # mỗi khối trang chủ = 1 thư mục, có index.ts
├── components/
│   ├── ui/         # Button, Badge, Card, Input, Select, Accordion...
│   ├── layout/     # Navbar, Footer, Container, Section
│   └── common/     # SectionHeading, Reveal, CounterNumber...
├── data/           # toàn bộ nội dung (text, danh sách, link, số liệu)
├── hooks/          # useScrollSpy, useInView, useCountUp...
├── lib/            # utils.ts (cn), sendContact.ts
├── schemas/        # schema Zod
├── types/          # interface dùng chung
├── pages/          # mỏng: chỉ ghép section vào route
├── styles/         # globals.css
├── assets/
└── main.tsx

# CÁC SECTION TRANG CHỦ (theo thứ tự)
Hero → Stats → About → Services → Industries → CaseStudies →
TechStack → Certifications → Process → Partners → Testimonials →
Insights → Faq → ContactCTA → Footer

# QUY ƯỚC CODE
- Function component + arrow function, 1 component/file
- Tên component/file component: PascalCase; hook: camelCase, tiền tố "use"
- Không dùng `any`; mọi props phải có interface; type dữ liệu để trong
  src/types
- Import dùng alias "@/" trỏ tới "src/"
- Mỗi section/thư mục có index.ts export public API
- Nội dung KHÔNG hardcode trong JSX, phải lấy từ src/data
- Không viết logic gọi API trực tiếp trong component, đặt trong lib/hooks
- Biến môi trường qua import.meta.env, có file .env.example
- Không hardcode URL/secret

# QUY ƯỚC GIAO DIỆN
- Mobile-first, breakpoint mặc định của Tailwind (sm/md/lg/xl)
- Dùng design tokens trong tailwind.config.ts, không viết mã màu/giá trị
  cứng rải rác trong component
- Dùng cn() để gộp className
- Semantic HTML (header, main, section, footer), alt cho ảnh,
  aria-label cho nút icon, focus ring rõ, điều hướng được bằng bàn phím
- Tôn trọng prefers-reduced-motion
- Ảnh lazy load; route trang chi tiết lazy load

# RÀNG BUỘC
- Không dùng MUI, Ant Design hay thư viện UI nặng
- Không dùng Redux, không dùng class component
- Không dùng ảnh có bản quyền, dùng placeholder (picsum.photos, SVG)
- Không tạo file thừa, không giải thích dài dòng ngoài yêu cầu

# CÁCH LÀM VIỆC
- Làm từng bước tôi yêu cầu, xong dừng lại chờ xác nhận
- Mỗi lần trả lời ghi rõ đường dẫn file trước từng khối code
- Nếu bị cắt giữa chừng, khi tôi nói "tiếp tục" thì viết tiếp từ file
  cuối, không lặp lại phần đã viết
- Cuối mỗi bước, kiểm tra import/alias có khớp cấu trúc thư mục không

Chủ đề là Dịch vụ thiết kế phần mềm cho doanh nghiệp
Tên dự án là Matrix Software
bạn có thể tham khảo bố cục website nào đó tùy bạn nhưng phải theo cấu trúc sau của tôi
1 Hero Section

Headline

2 .Problem vs Solution

* About Us, Why Choose ,

3. Core Deviverables ( Goi giai phap)

VD Phan mem noi bo , web chay thu...

4. Du an da lam

* Danh gia cua CTO/ Doi tac

5. Interactive Cosst ( tu tich chon nen tang , tinh nang va nhan ngay khoang gia du kien toan bo)

6 Cam ket hop tac va form ngan (CTA)

7. Footer

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6d04279b-f905-54ad-bef3-a2381ed8209f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

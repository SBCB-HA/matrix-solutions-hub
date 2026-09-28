import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Vui lòng nhập họ tên (ít nhất 2 ký tự)."),
  email: z.string().trim().email("Vui lòng nhập email hợp lệ."),
  company: z.string().trim().min(2, "Vui lòng nhập tên doanh nghiệp."),
  message: z.string().trim().min(10, "Vui lòng mô tả thêm về nhu cầu của bạn."),
});
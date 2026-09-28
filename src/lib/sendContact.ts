import type { ContactValues } from "@/types/site";

export const sendContact = (values: ContactValues, estimate?: string): boolean => {
  const recipient = import.meta.env.VITE_CONTACT_EMAIL;
  if (!recipient) return false;
  const subject = encodeURIComponent(`Yêu cầu tư vấn từ ${values.company}`);
  const body = encodeURIComponent(`Họ tên: ${values.name}\nEmail: ${values.email}\nDoanh nghiệp: ${values.company}\n${estimate ? `Ước tính tham khảo: ${estimate}\n` : ""}\nNhu cầu:\n${values.message}`);
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  return true;
};
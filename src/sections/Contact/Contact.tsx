import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { contactSchema } from "@/schemas/contact";
import { sendContact } from "@/lib/sendContact";
import type { ContactValues } from "@/types/site";

interface ContactProps { estimate: string }

export const Contact = ({ estimate }: ContactProps) => {
  const [status, setStatus] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });
  const submit = (values: ContactValues) => setStatus(sendContact(values, estimate) ? site.contact.sent : site.contact.unavailable);
  return <section id="lien-he" className="section-pad contact-section"><div className="container-wide"><div className="section-kicker"><span>{site.contact.index}</span><span>{site.contact.eyebrow}</span></div><div className="contact-layout"><div className="contact-copy"><h2>{site.contact.title}</h2><p>{site.contact.description}</p><ul>{site.contact.promises.map(item => <li key={item}><Check size={17} aria-hidden="true" />{item}</li>)}</ul><div className="contact-decoration" aria-hidden="true">M<span>✳</span></div></div><div className="contact-form-wrap"><h3>{site.contact.formTitle}</h3>{estimate && <p className="form-estimate">{site.contact.estimatePrefix}: {estimate}</p>}<form onSubmit={handleSubmit(submit)} noValidate><div className="form-row"><div className="form-field"><label htmlFor="contact-name">{site.contact.fields.name}</label><input id="contact-name" type="text" autoComplete="name" {...register("name")} aria-invalid={!!errors.name} /><span role="alert">{errors.name?.message}</span></div><div className="form-field"><label htmlFor="contact-email">{site.contact.fields.email}</label><input id="contact-email" type="email" autoComplete="email" {...register("email")} aria-invalid={!!errors.email} /><span role="alert">{errors.email?.message}</span></div></div><div className="form-field"><label htmlFor="contact-company">{site.contact.fields.company}</label><input id="contact-company" type="text" autoComplete="organization" {...register("company")} aria-invalid={!!errors.company} /><span role="alert">{errors.company?.message}</span></div><div className="form-field"><label htmlFor="contact-message">{site.contact.fields.message}</label><textarea id="contact-message" rows={4} {...register("message")} aria-invalid={!!errors.message} /><span role="alert">{errors.message?.message}</span></div><Button type="submit" size="lg" className="form-submit">{site.contact.submit}<ArrowUpRight /></Button>{status && <p className="form-status" role="status">{status}</p>}</form></div></div></div></section>;
};
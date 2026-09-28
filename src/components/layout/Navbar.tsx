import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="container-wide nav-inner">
    <a href="#top" className="brand" aria-label="Matrix Software - về đầu trang"><span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span><span>MATRIX<span className="brand-sub"> SOFTWARE</span></span></a>
    <nav className="desktop-nav" aria-label="Điều hướng chính">{site.nav.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
    <Button asChild className="nav-cta"><a href="#lien-he">{site.contactLabel}<ArrowUpRight aria-hidden="true" /></a></Button>
    <Button variant="ghost" size="icon" className="mobile-menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Đóng menu" : "Mở menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</Button>
  </div>{open && <nav className="mobile-nav" aria-label="Điều hướng di động">{site.nav.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}<a href="#lien-he" onClick={() => setOpen(false)}>{site.contactLabel}</a></nav>}</header>;
};
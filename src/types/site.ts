export interface NavItem { label: string; href: string }
export interface Service { number: string; icon: string; title: string; description: string; tags: string[] }
export interface Project { category: string; title: string; description: string; outcome: string; image?: string }
export interface CostOption { id: string; label: string; price: number }
export interface ContactValues { name: string; email: string; company: string; message: string }
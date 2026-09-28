import type { ReactNode } from "react";

interface SectionHeadingProps { index: string; eyebrow: string; title: string; description?: string; light?: boolean; children?: ReactNode }

export const SectionHeading = ({ index, eyebrow, title, description, light = false, children }: SectionHeadingProps) => (
  <div className="section-heading">
    <div className="section-kicker"><span>{index}</span><span>{eyebrow}</span></div>
    <div className="section-heading-grid"><h2 className={light ? "text-primary-foreground" : "text-foreground"}>{title}</h2><div>{description && <p className={light ? "text-on-dark-muted" : "text-muted-foreground"}>{description}</p>}{children}</div></div>
  </div>
);
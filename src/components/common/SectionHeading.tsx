import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  children?: ReactNode;
}

export const SectionHeading = ({
  index,
  eyebrow,
  title,
  description,
  light = false,
  children,
}: SectionHeadingProps) => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="section-heading"
      initial={reducedMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-kicker">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="section-heading-grid">
        <h2 className={light ? "text-primary-foreground" : "text-foreground"}>{title}</h2>
        <div>
          {description && (
            <p className={light ? "text-on-dark-muted" : "text-muted-foreground"}>{description}</p>
          )}
          {children}
        </div>
      </div>
    </motion.div>
  );
};

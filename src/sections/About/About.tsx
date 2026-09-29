import { ArrowRight, Check, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/common/SectionHeading";
import { site } from "@/data/site";

export const About = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section id="ve-chung-toi" className="section-pad about-section">
      <div className="container-wide">
        <SectionHeading {...site.intro} />
        <div className="transformation" aria-label={site.intro.eyebrow}>
          <div className="transformation-headings" aria-hidden="true">
            <span>{site.intro.problemLabel}</span>
            <span>{site.intro.solutionLabel}</span>
          </div>
          {site.intro.problems.map((problem, index) => (
            <motion.div
              className="transformation-row"
              key={problem}
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="transformation-problem">
                <X size={18} aria-hidden="true" />
                <span>{problem}</span>
              </div>
              <span className="transformation-arrow" aria-hidden="true">
                <ArrowRight size={19} />
              </span>
              <div className="transformation-solution">
                <Check size={18} aria-hidden="true" />
                <span>{site.intro.solutions[index]}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="about-bottom">
          <span className="about-asterisk" aria-hidden="true">
            ✳
          </span>
          <h3>{site.intro.whyTitle}</h3>
          <p>{site.intro.whyDescription}</p>
        </div>
      </div>
    </section>
  );
};

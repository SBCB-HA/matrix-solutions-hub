import { ArrowUpRight, Blocks, Globe2, Smartphone, Workflow } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/common/SectionHeading";
import { site } from "@/data/site";

const icons = { workflow: Workflow, globe: Globe2, smartphone: Smartphone, blocks: Blocks };

export const Services = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section id="giai-phap" className="section-pad services-section">
      <div className="container-wide">
        <SectionHeading {...site.services} />
        <div className="services-grid">
          {site.services.items.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <motion.article
                className="service-item"
                key={item.number}
                initial={reducedMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={reducedMotion ? {} : { y: -5 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="service-top">
                  <span>{item.number} / 04</span>
                  <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="service-bottom">
                    <div className="service-tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

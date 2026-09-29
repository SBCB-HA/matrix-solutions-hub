import { useState } from "react";
import { ArrowRight, Check, Calculator } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/common/SectionHeading";
import { site } from "@/data/site";

interface CostProps {
  onEstimate: (value: string) => void;
}

export const Cost = ({ onEstimate }: CostProps) => {
  const [platform, setPlatform] = useState(site.cost.platformOptions[0]?.id ?? "web");
  const [features, setFeatures] = useState<string[]>([]);
  const reducedMotion = useReducedMotion();
  const selectedPlatform = site.cost.platformOptions.find((item) => item.id === platform);
  const total =
    (selectedPlatform?.price ?? 0) +
    site.cost.featureOptions
      .filter((item) => features.includes(item.id))
      .reduce((sum, item) => sum + item.price, 0);
  const estimate = `${total}–${Math.round(total * 1.4)} ${site.cost.unit}`;
  const toggle = (id: string) =>
    setFeatures((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );

  return (
    <section id="chi-phi" className="section-pad cost-section">
      <div className="container-wide">
        <SectionHeading {...site.cost} light />
        <div className="cost-layout">
          <div className="cost-options">
            <div className="cost-group">
              <h3>{site.cost.platformLabel}</h3>
              <div className="platform-options">
                {site.cost.platformOptions.map((item) => (
                  <Button
                    type="button"
                    variant={platform === item.id ? "selectorActive" : "selector"}
                    key={item.id}
                    onClick={() => setPlatform(item.id)}
                    aria-pressed={platform === item.id}
                  >
                    {item.label}
                    <span className="selector-indicator" aria-hidden="true">
                      {platform === item.id && <Check size={16} />}
                    </span>
                  </Button>
                ))}
              </div>
            </div>
            <div className="cost-group">
              <h3>{site.cost.featuresLabel}</h3>
              <div className="feature-options">
                {site.cost.featureOptions.map((item) => (
                  <Button
                    type="button"
                    variant={features.includes(item.id) ? "selectorActive" : "selector"}
                    key={item.id}
                    onClick={() => toggle(item.id)}
                    aria-pressed={features.includes(item.id)}
                  >
                    {item.label}
                    <span className="selector-indicator" aria-hidden="true">
                      {features.includes(item.id) && <Check size={16} />}
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <aside className="estimate-panel">
            <div className="estimate-panel-top">
              <div className="estimate-icon">
                <Calculator size={25} strokeWidth={1.5} />
              </div>
              <span className="estimate-live-dot" aria-hidden="true" />
            </div>
            <p className="estimate-label">{site.cost.estimateLabel}</p>
            <div className="estimate-value" role="status" aria-live="polite" aria-atomic="true">
              <motion.div
                key={estimate}
                initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="estimate-amount"
              >
                {total}–{Math.round(total * 1.4)}
                <span>{site.cost.unit}</span>
              </motion.div>
            </div>
            <div className="estimate-summary">
              <div>
                <span>{site.cost.summaryPlatform}</span>
                <strong>{selectedPlatform?.label}</strong>
              </div>
              <div>
                <span>{site.cost.summaryFeatures}</span>
                <strong>{features.length}</strong>
              </div>
            </div>
            <div className="estimate-divider" />
            <p className="estimate-disclaimer">{site.cost.disclaimer}</p>
            <Button asChild className="estimate-action" onClick={() => onEstimate(estimate)}>
              <a href="#lien-he">
                {site.cost.action}
                <ArrowRight />
              </a>
            </Button>
          </aside>
        </div>
      </div>
    </section>
  );
};

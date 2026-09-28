import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Services } from "@/sections/Services";
import { Projects } from "@/sections/Projects";
import { Cost } from "@/sections/Cost";
import { Contact } from "@/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Matrix Software | Thiết kế phần mềm cho doanh nghiệp" },
    { name: "description", content: "Matrix Software thiết kế và phát triển phần mềm theo yêu cầu, ứng dụng web, di động và giải pháp vận hành cho doanh nghiệp." },
    { property: "og:title", content: "Matrix Software | Thiết kế phần mềm cho doanh nghiệp" },
    { property: "og:description", content: "Giải pháp phần mềm được thiết kế theo cách doanh nghiệp bạn vận hành và phát triển." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  const [estimate, setEstimate] = useState("");
  return <><Navbar /><main><Hero /><About /><Services /><Projects /><Cost onEstimate={setEstimate} /><Contact estimate={estimate} /></main><Footer /></>;
}

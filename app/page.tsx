import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StatCard } from "@/components/stat-card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const skills = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "ShadCN UI",
  "API Design",
  "Performance",
];

const careerStartYear = 2022;

const engagementFlow = [
  {
    stage: "Discover",
    detail: "Define goals, constraints, and the right release scope.",
  },
  {
    stage: "Build",
    detail: "Ship clean, component-driven implementation with fast iteration.",
  },
  {
    stage: "Optimize",
    detail: "Measure outcomes, improve UX, and scale maintainably.",
  },
];

const projects = [
  {
    title: "Operations Analytics Dashboard",
    description:
      "A real-time dashboard for cross-team operations with role-based views, KPI insights, and exportable reports.",
    impact: "Cut weekly reporting time by 62%.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    href: "#contact",
    ctaLabel: "Build something similar",
  },
  {
    title: "High-Converting E-Commerce Experience",
    description:
      "A scalable storefront focused on speed, discoverability, and conversion through optimized flows and UI clarity.",
    impact: "Improved conversion rate by 31%.",
    stack: ["Next.js", "Stripe", "React Query", "ShadCN UI"],
    href: "#contact",
    ctaLabel: "Discuss your store",
  },
  {
    title: "SaaS Marketing Platform",
    description:
      "A modular marketing site and CMS workflow designed for rapid experimentation, SEO, and fast content publishing.",
    impact: "Increased organic traffic by 2.3x in 5 months.",
    stack: ["Next.js", "MDX", "Edge Functions", "Analytics"],
    href: "#contact",
    ctaLabel: "Plan your platform",
  },
];

export default function Home() {
  const experienceYears = Math.max(1, new Date().getFullYear() - careerStartYear);
  const isWeekend = [0, 6].includes(new Date().getDay());
  const responseCommitment = isWeekend
    ? "By the next business day"
    : "Within one business day";

  const stats = [
    {
      tag: "Experience",
      value: `${experienceYears}+ Years`,
      label: "Production engineering experience",
    },
    {
      tag: "Delivery",
      value: "35+",
      label: "Product features delivered",
    },
    {
      tag: "Quality",
      value: "98%",
      label: "Lighthouse performance target",
    },
    {
      tag: "Communication",
      value: "<24h",
      label: "Average response time",
    },
  ];

  const revealDelays = ["", "delay-1", "delay-2", "delay-3"];

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] overflow-hidden"
      >
        <div className="float-ambient absolute -left-28 top-14 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="float-ambient absolute right-[-5rem] top-44 h-80 w-80 rounded-full bg-accent/15 blur-3xl [animation-delay:1.2s]" />
      </div>
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-16 pt-10 sm:gap-20 sm:px-6 sm:pb-20 sm:pt-14 lg:gap-24 lg:px-10 lg:pb-24">
        <section
          id="home"
          className="grid scroll-mt-36 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
        >
          <div className="reveal-up">
            <Badge className="mb-5 border-white/25 bg-white/10 text-white">
              Available for new projects
            </Badge>
            <h1 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Modern web products built with clean code and strong UX.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              I&apos;m Muhammad Hassan, a software developer focused on building
              reliable, scalable, and polished web experiences for startups and
              growing product teams.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#projects"
                className={buttonVariants({
                  size: "lg",
                  className: "w-full sm:w-auto",
                })}
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "w-full sm:w-auto",
                })}
              >
                Contact Me
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <Card className="reveal-up delay-1 border-border/70 shadow-lg shadow-primary/10 glass-elevated shimmer-border">
            <CardHeader>
              <CardTitle>What you can expect</CardTitle>
              <CardDescription>
                A product-minded development approach from discovery to delivery.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              {engagementFlow.map((item, index) => (
                <div
                  key={item.stage}
                  className="rounded-xl border border-border/70 bg-muted/45 p-4 transition-colors duration-200 hover:border-primary/30 hover:bg-muted/70"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/85">
                    {`0${index + 1} - ${item.stage}`}
                  </p>
                  <p className="mt-1">{item.detail}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section id="about" className="scroll-mt-36">
          <SectionHeading
            eyebrow="About"
            title="Engineering with a product perspective"
            description="I combine design sensitivity and technical depth to ship interfaces that are easy to use, easy to maintain, and aligned with business goals."
            className="reveal-up"
          />
          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => (
              <StatCard
                key={item.label}
                tag={item.tag}
                value={item.value}
                label={item.label}
                className={`reveal-up ${revealDelays[index % revealDelays.length]}`}
              />
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Card className="reveal-up delay-1 border-border/70">
              <CardHeader>
                <CardTitle>How I work</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  I start by clarifying goals and constraints, then design a
                  lean technical plan that supports rapid progress without
                  compromising maintainability.
                </p>
                <p>
                  Throughout delivery, I prioritize clarity in code structure,
                  component reuse, and practical documentation so teams can
                  confidently scale the product.
                </p>
              </CardContent>
            </Card>
            <Card className="reveal-up delay-2 border-border/70">
              <CardHeader>
                <CardTitle>Core strengths</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm text-muted-foreground">
                <p>Component architecture and design systems</p>
                <p>API integration and state management</p>
                <p>Performance optimization and web vitals</p>
                <p>Cross-functional communication and ownership</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="projects" className="scroll-mt-36">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            description="A sample of projects focused on business impact, technical quality, and long-term maintainability."
            className="reveal-up"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                className={`reveal-up ${revealDelays[(index % 3) + 1]}`}
              />
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-36">
          <SectionHeading
            eyebrow="Contact"
            title="Let&apos;s build your next product"
            description="If you need a developer who can ship high-quality interfaces with strong engineering standards, I&apos;d be glad to collaborate."
            className="reveal-up"
          />
          <Card className="mt-8 border-border/70 glass-elevated shimmer-border reveal-up delay-1">
            <CardContent className="grid items-start gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
              <div className="space-y-6">
                <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                  Share your goals, current product stage, and timeline. I can
                  help with new builds, ongoing product development, or UI
                  modernization for existing platforms.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=mhassan909234@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({
                      size: "lg",
                      className: "w-full sm:min-w-56 sm:w-auto",
                    })}
                  >
                    Start a Project
                  </Link>
                  <Link
                    href="#home"
                    className={buttonVariants({
                      variant: "outline",
                      size: "lg",
                      className: "w-full sm:w-auto",
                    })}
                  >
                    Back to Top
                  </Link>
                </div>
              </div>
              <div className="self-start space-y-4 rounded-xl border border-border/80 bg-background/70 p-5 text-sm shadow-[0_12px_28px_-24px_rgba(15,23,42,0.9)] sm:p-6">
                <div>
                  <p className="text-muted-foreground">Location</p>
                  <p className="mt-1 font-medium">Remote, worldwide</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Availability</p>
                  <p className="mt-1 font-medium">Open for freelance and full-time roles</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Typical response</p>
                  <p className="mt-1 font-medium">{responseCommitment}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

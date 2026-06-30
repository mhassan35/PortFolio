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
  "Lead Generation",
  "Digital Marketing",
  "Email Research",
  "LinkedIn Outreach",
  "Data Entry",
  "Computer Operator",
];

const careerStartYear = 2022;

const engagementFlow = [
  {
    stage: "Understand",
    detail: "I first learn about your target market, ideal customer, and what kind of leads you actually need.",
  },
  {
    stage: "Research",
    detail: "I find verified contacts using LinkedIn, Google, and trusted tools, making sure every lead is real and accurate.",
  },
  {
    stage: "Deliver",
    detail: "You get a clean, organized list ready to use, with names, emails, phone numbers, and company details.",
  },
];

const projects = [
  {
    title: "B2B Lead List for Real Estate Firm",
    description:
      "Built a verified lead list of property buyers and investors for a small real estate company. Used LinkedIn and Google Maps to find contact details for decision makers in target cities.",
    impact: "Delivered 350+ verified leads with 96% email accuracy.",
    stack: ["LinkedIn", "Google Maps", "Email Finder", "Excel"],
    href: "https://www.upwork.com/freelancers/~016ad665ff9aa81689",
    ctaLabel: "Get similar leads",
  },
  {
    title: "Email Outreach List for Digital Agency",
    description:
      "Helped a small digital marketing agency find potential clients. Researched business owners and marketing managers in the USA and UK, collected verified emails and company details.",
    impact: "500+ qualified contacts delivered in under a week.",
    stack: ["Hunter.io", "Apollo", "LinkedIn", "Google Sheets"],
    href: "https://www.upwork.com/freelancers/~016ad665ff9aa81689",
    ctaLabel: "Start your campaign",
  },
  {
    title: "LinkedIn Lead Research for Software Startup",
    description:
      "Found verified decision-maker contacts for a B2B software company targeting IT managers and business owners. Cleaned and organized the data in a ready-to-use format.",
    impact: "Built a list of 400+ warm prospects across 3 industries.",
    stack: ["LinkedIn Sales Navigator", "Data Cleaning", "Excel", "CRM"],
    href: "https://www.upwork.com/freelancers/~016ad665ff9aa81689",
    ctaLabel: "Work with me",
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
      label: "Lead generation and digital marketing",
    },
    {
      tag: "Leads",
      value: "5,000+",
      label: "Verified leads delivered to clients",
    },
    {
      tag: "Accuracy",
      value: "95%+",
      label: "Email and contact accuracy rate",
    },
    {
      tag: "Response",
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
              I find real, verified leads so your business can grow faster.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              I&apos;m Haiqa Noor, a lead generation and digital marketing specialist. I help businesses find the right people to talk to: verified contacts, clean data, and results you can actually use.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#projects"
                className={buttonVariants({
                  size: "lg",
                  className: "w-full sm:w-auto",
                })}
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "w-full sm:w-auto",
                })}
              >
                Hire Me
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
              <CardTitle>How I work with you</CardTitle>
              <CardDescription>
                A simple, clear process from start to delivery.
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
            title="Finding the right leads is my job"
            description="I have been doing lead generation and digital marketing for a few years now. I know how to find real, verified contacts that actually match what my clients need."
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
                <CardTitle>How I approach the work</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  I take time to understand what you need before I start. Every client has a different target audience, so I research carefully and make sure the leads I find are actually useful to you.
                </p>
                <p>
                  I always double-check the data before sending. No bad emails, no fake contacts. Just clean, organized information that saves you time and helps you close more deals.
                </p>
              </CardContent>
            </Card>
            <Card className="reveal-up delay-2 border-border/70">
              <CardHeader>
                <CardTitle>My core skills</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm text-muted-foreground">
                <p>Lead generation and verified contact research</p>
                <p>LinkedIn outreach and prospect list building</p>
                <p>Digital marketing and online brand presence</p>
                <p>Data entry, CRM management, and MS Office</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="projects" className="scroll-mt-36">
          <SectionHeading
            eyebrow="Projects"
            title="Work I have done"
            description="Here are some of the projects I have worked on. All clients were small or private businesses looking for targeted leads and outreach support."
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
            title="Let&apos;s work together"
            description="If you need verified leads, email lists, or digital marketing help, I am ready to start. Reach out and tell me what you need."
            className="reveal-up"
          />
          <Card className="mt-8 border-border/70 glass-elevated shimmer-border reveal-up delay-1">
            <CardContent className="grid items-start gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
              <div className="space-y-6">
                <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                  Tell me about your business, who you want to reach, and how many leads you need. I will come back to you quickly with a plan and timeline.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="https://www.upwork.com/freelancers/~016ad665ff9aa81689"
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({
                      size: "lg",
                      className: "w-full sm:min-w-56 sm:w-auto",
                    })}
                  >
                    Hire Me on Upwork
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/aqiahnoor05/"
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({
                      variant: "outline",
                      size: "lg",
                      className: "w-full sm:w-auto",
                    })}
                  >
                    Connect on LinkedIn
                  </Link>
                </div>
                <div className="flex flex-wrap gap-3 text-sm">
                  <Link
                    href="mailto:haiqanoor36.36@gmail.com"
                    className="text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    haiqanoor36.36@gmail.com
                  </Link>
                  <Link
                    href="https://www.facebook.com/share/18niqT6VGz/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    Facebook
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
                  <p className="mt-1 font-medium">Open for freelance work</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Find me on</p>
                  <div className="mt-1 flex flex-col gap-1 font-medium">
                    <Link
                      href="https://www.upwork.com/freelancers/~016ad665ff9aa81689"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:underline"
                    >
                      Upwork Profile
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/aqiahnoor05/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:underline"
                    >
                      LinkedIn Profile
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <Link
                    href="mailto:haiqanoor36.36@gmail.com"
                    className="mt-1 block font-medium text-primary hover:underline break-all"
                  >
                    haiqanoor36.36@gmail.com
                  </Link>
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

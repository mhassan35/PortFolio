import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  impact: string;
  stack: string[];
  href?: string;
  ctaLabel?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  impact,
  stack,
  href,
  ctaLabel = "View details",
  className,
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "group flex h-full flex-col border-border/70 transition-transform duration-300 hover:-translate-y-1",
        className
      )}
    >
      <CardHeader className="space-y-3">
        <Badge variant="outline" className="w-fit">
          Case Study
        </Badge>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="pr-1">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="rounded-xl border border-white/12 bg-[linear-gradient(140deg,rgba(255,255,255,0.18),rgba(255,255,255,0.06))] p-4 shadow-[0_12px_30px_rgba(15,23,42,0.35)] backdrop-blur-md transition-colors duration-300 group-hover:border-white/25">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
            Impact
          </p>
          <p className="mt-1 text-sm font-medium text-white">{impact}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <Badge key={item} variant="secondary">
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
      {href ? (
        <CardFooter className="mt-auto">
          <Link
            href={href}
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className: "group-hover:border-primary/45",
            })}
          >
            {ctaLabel}
          </Link>
        </CardFooter>
      ) : null}
    </Card>
  );
}

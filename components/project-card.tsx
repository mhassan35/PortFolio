import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
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
}

export function ProjectCard({
  title,
  description,
  impact,
  stack,
  href,
  ctaLabel = "View details",
}: ProjectCardProps) {
  return (
    <Card className="group flex h-full flex-col border-border/70">
      <CardHeader className="space-y-3">
        <Badge variant="outline" className="w-fit">
          Case Study
        </Badge>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="pr-1">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="rounded-xl border border-secondary/75 bg-secondary/35 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">
            Impact
          </p>
          <p className="mt-1 text-sm font-medium text-foreground">{impact}</p>
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

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  tag: string;
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ tag, value, label, className }: StatCardProps) {
  return (
    <Card
      className={cn(
        "group h-full border-border/75 bg-background/70 shadow-none transition-transform duration-300 hover:-translate-y-1",
        className
      )}
    >
      <CardContent className="flex h-full min-h-44 flex-col gap-5 px-5 pb-6 pt-7 sm:px-6 sm:pb-7 sm:pt-8">
        <span className="inline-flex w-fit rounded-full border border-border/75 bg-secondary/40 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          {tag}
        </span>
        <p className="text-3xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-[2rem]">
          {value}
        </p>
        <p className="text-sm leading-6 text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  );
}

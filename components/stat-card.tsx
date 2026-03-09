import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  tag: string;
  value: string;
  label: string;
}

export function StatCard({ tag, value, label }: StatCardProps) {
  return (
    <Card className="h-full border-border/75 bg-background/70 shadow-none">
      <CardContent className="flex h-full min-h-44 flex-col gap-5 px-5 pb-6 pt-7 sm:px-6 sm:pb-7 sm:pt-8">
        <span className="inline-flex w-fit rounded-full border border-border/75 bg-secondary/40 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          {tag}
        </span>
        <p className="text-3xl font-semibold tracking-tight text-foreground sm:text-[2rem]">
          {value}
        </p>
        <p className="text-sm leading-6 text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  );
}

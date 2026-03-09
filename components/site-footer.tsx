export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:px-6 lg:px-10">
        <p>&copy; {year} Muhammad Hassan. All rights reserved.</p>
        <p>Built with Next.js, TypeScript, Tailwind CSS, and ShadCN UI.</p>
      </div>
    </footer>
  );
}

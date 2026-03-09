import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-lg">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between py-4">
          <Link href="#home" className="flex min-w-0 items-center gap-3">
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
              MH
            </span>
            <span className="truncate text-sm font-semibold tracking-wide">
              Muhammad Hassan
            </span>
          </Link>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                  className: "text-sm text-muted-foreground hover:text-foreground",
                })}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="#contact"
            className={buttonVariants({
              size: "sm",
              className: "hidden sm:inline-flex",
            })}
          >
            Start a Project
          </Link>
          <Link
            href="#contact"
            className={buttonVariants({
              size: "sm",
              className: "sm:hidden",
            })}
          >
            Contact
          </Link>
        </div>
        <nav className="flex items-center gap-1 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
                className: "shrink-0 text-sm text-muted-foreground hover:text-foreground",
              })}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

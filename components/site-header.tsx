"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [activeHref, setActiveHref] = useState(navItems[0]?.href ?? "#home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const updateActiveSection = () => {
      const headerHeight = headerRef.current?.offsetHeight ?? 0;
      const activationOffset = headerHeight + Math.max(140, window.innerHeight * 0.32);
      const marker = window.scrollY + activationOffset;
      let currentSection = sections[0];

      for (const section of sections) {
        if (section.offsetTop <= marker) {
          currentSection = section;
          continue;
        }
        break;
      }

      const nearPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (nearPageBottom) {
        currentSection = sections[sections.length - 1];
      }

      setActiveHref(`#${currentSection.id}`);
    };

    const handleHashChange = () => {
      const { hash } = window.location;

      if (hash && navItems.some((item) => item.href === hash)) {
        setActiveHref(hash);
        return;
      }

      updateActiveSection();
    };

    updateActiveSection();
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const updateScrollProgress = () => {
      const totalScrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (totalScrollableHeight <= 0) {
        setScrollProgress(0);
        return;
      }

      const nextProgress = window.scrollY / totalScrollableHeight;
      setScrollProgress(Math.min(1, Math.max(0, nextProgress)));
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="relative sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-lg"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between gap-2 py-3 sm:py-4">
          <Link href="#home" className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground sm:h-9 sm:w-9 sm:text-base">
              MH
            </span>
            <span className="hidden truncate text-sm font-semibold tracking-wide sm:inline">
              Muhammad Hassan
            </span>
            <span className="truncate text-sm font-semibold tracking-wide sm:hidden">
              M Hassan
            </span>
          </Link>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={activeHref === item.href ? "page" : undefined}
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                  className: cn(
                    "text-sm transition-colors",
                    activeHref === item.href
                      ? "bg-primary/10 text-foreground hover:bg-primary/15"
                      : "text-muted-foreground hover:text-foreground"
                  ),
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
              className: "shrink-0 px-2.5 text-xs sm:hidden",
            })}
          >
            Contact
          </Link>
        </div>
        <nav className="grid grid-cols-2 gap-2 pb-4 sm:grid-cols-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={activeHref === item.href ? "page" : undefined}
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
                className: cn(
                  "w-full justify-center text-sm transition-colors",
                  activeHref === item.href
                    ? "bg-primary/10 text-foreground hover:bg-primary/15"
                    : "text-muted-foreground hover:text-foreground"
                ),
              })}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-border/70">
        <div
          className="h-full bg-primary/85 transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </header>
  );
}

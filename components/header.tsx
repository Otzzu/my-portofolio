"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-900/60 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-[76rem] items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="bg-gradient-to-br from-indigo-500 via-sky-400 to-cyan-300 bg-clip-text text-2xl font-semibold text-transparent"
        >
          MCH.
        </Link>
        <ul className="hidden items-center gap-10 text-sm font-medium text-slate-200 md:flex lg:gap-12">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative transition-colors hover:text-slate-300"
              >
                <span className="after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-gradient-to-r after:from-indigo-500 after:to-cyan-300 after:transition-transform hover:after:origin-left hover:after:scale-x-100">
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Toggle navigation menu"
          onClick={toggle}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>
      <div
        className={cn(
          "relative md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          className={cn(
            "absolute inset-x-0 top-full z-50 mx-6 mt-2 origin-top rounded-2xl border border-slate-800 bg-slate-950/95 p-6 shadow-xl shadow-slate-950/80 transition-all",
            open ? "scale-y-100 opacity-100" : "scale-y-90 opacity-0"
          )}
        >
          <ul className="flex flex-col gap-4 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  className="block rounded-full px-4 py-2 transition-colors hover:bg-slate-900 hover:text-slate-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {open && (
          <div
            className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm"
            onClick={close}
          />
        )}
      </div>
    </header>
  );
}

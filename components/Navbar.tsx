"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

function hashOf(href: string) {
  return href.slice(href.indexOf("#"));
}

function scrollToHash(href: string) {
  const target = document.getElementById(hashOf(href).slice(1));
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pendingHashRef = useRef<string | null>(null);
  const isHome = usePathname() === "/";

  useLayoutEffect(() => {
    if (open) return;

    const href = pendingHashRef.current;
    if (!href) return;
    pendingHashRef.current = null;

    scrollToHash(href);
    window.history.replaceState(null, "", hashOf(href));
  }, [open]);

  function handleHashClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    // Off the homepage, let <Link> navigate to "/#section" instead.
    if (!isHome) return;
    event.preventDefault();

    if (open) {
      pendingHashRef.current = href;
      setOpen(false);
      return;
    }

    scrollToHash(href);
    window.history.replaceState(null, "", hashOf(href));
  }

  function handleLogoClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (!isHome) return;
    event.preventDefault();
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", "/");
  }

  return (
    <header className="relative z-50 border-b border-[#26263A] bg-page/80 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1340px] items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="relative z-10 text-[22px] font-bold tracking-tight text-white"
        >
          eya
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(event) => handleHashClick(event, link.href)}
              className="text-[14px] font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="relative z-10 hidden items-center gap-6 md:flex">
          <a
            href="https://my.goeya.app/login"
            className="text-[14px] font-medium text-white/80 transition-colors hover:text-white"
          >
            Sign in
          </a>
          <a
            href="https://buy.stripe.com/5kQ5kDeZJ48U5KfapcfQI05"
            className="inline-flex items-center gap-1.5 rounded-[8px] bg-brand px-[18px] py-2 text-[13.5px] font-semibold text-white transition-colors hover:bg-brand-hover"
          >
            Get Lifetime Deal
            <ArrowIcon />
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/[0.06] bg-page px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => handleHashClick(event, link.href)}
                className="text-[15px] font-medium text-white/80"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://my.goeya.app/login"
              onClick={() => setOpen(false)}
              className="text-[15px] font-medium text-white/80"
            >
              Sign in
            </a>
            <a
              href="https://buy.stripe.com/5kQ5kDeZJ48U5KfapcfQI05"
              className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-[8px] bg-brand px-5 py-2.5 text-sm font-semibold text-white"
            >
              Get Lifetime Deal
              <ArrowIcon />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.5 8h9m0 0L9 4.5M12.5 8 9 11.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

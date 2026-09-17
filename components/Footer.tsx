export default function Footer() {
  return (
    <footer className="border-t border-[#26263A]">
      <div className="mx-auto max-w-[1340px] px-6 py-8 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-3">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <a href="#" className="text-[20px] font-bold tracking-tight text-white">
              eya
            </a>
            <p className="text-[13px] text-white/40">
              More conversations. More opportunities.
            </p>
          </div>

          <nav className="flex items-center gap-6 sm:justify-center">
            <a href="#terms" className="text-[13px] text-white/45 transition-colors hover:text-white">
              Terms
            </a>
            <a href="#privacy" className="text-[13px] text-white/45 transition-colors hover:text-white">
              Privacy
            </a>
            <a href="#contact" className="text-[13px] text-white/45 transition-colors hover:text-white">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4 sm:justify-end">
            <a href="#linkedin" aria-label="LinkedIn" className="text-[13px] font-semibold text-white/55 transition-colors hover:text-white">
              in
            </a>
            <a href="#x" aria-label="X" className="text-white/55 transition-colors hover:text-white">
              <XIcon />
            </a>
            <a href="#youtube" aria-label="YouTube" className="text-white/55 transition-colors hover:text-white">
              <PlayIcon />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-[12px] text-white/30">
          © 2026 Eya, by Creative Deer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M12.7 1.6h2.2L9.7 7.3 16 14.4h-4.4L8.1 9.8 4.1 14.4H1.9l5.6-6.2L.8 1.6h4.5l3.2 4.2 4.2-4.2Zm-.8 11.5h1.2L4.2 2.8H2.9l8.99 10.3Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M4.2 2.6v10.8L13.4 8 4.2 2.6Z" />
    </svg>
  );
}

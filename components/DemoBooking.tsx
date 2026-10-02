import Script from "next/script";

const checks = [
  "No pressure, no pitch deck",
  "See your real use case",
  "Get your questions answered",
];

export default function DemoBooking() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[10%] top-[10%] h-[260px] w-[260px] rounded-full bg-accent/12 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-[1340px] grid-cols-1 items-start gap-12 px-6 pb-24 pt-14 lg:px-8 lg:pb-28 lg:pt-[72px] xl:grid-cols-[420px_minmax(0,1fr)] xl:gap-16">
        <div className="min-w-0">
          <span className="inline-flex rounded-full bg-accent px-3.5 py-[5px] text-[12px] font-semibold text-[#8B5CF6]">
            Book a Demo
          </span>

          <h1 className="mt-6 text-[clamp(30px,4vw,40px)] font-extrabold leading-[1.15] tracking-[-0.03em] text-white">
            See Eya in action
          </h1>

          <p className="mt-6 max-w-[420px] text-[16px] leading-7 text-white/50">
            Grab 20 minutes with the team &mdash; we&apos;ll walk through live outreach and AI replies, and answer anything about getting set up.
          </p>

          <ul className="mt-6 flex flex-col gap-2.5">
            {checks.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 text-[13.5px] font-medium text-white/65"
              >
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0 rounded-[16px] border border-[#26263A] bg-surface p-4">
          <div className="tidycal-embed" data-path="eya/demo-call" />
          <Script
            src="https://asset-tidycal.b-cdn.net/js/embed.js"
            strategy="afterInteractive"
          />
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.2 8.2 6.15 11.1 12.8 4.5"
        stroke="#4ADE80"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

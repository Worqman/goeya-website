import DashboardPreview from "./DashboardPreview";

const highlights = [
  "Automate outreach",
  "AI handles replies",
  "Save hours",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[8%] top-[12%] h-[280px] w-[280px] rounded-full bg-accent/12 blur-[120px]" />
        <div className="absolute right-[12%] top-[22%] h-[240px] w-[240px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-[1340px] grid-cols-1 items-start gap-12 px-6 pb-24 pt-14 lg:px-8 lg:pb-28 lg:pt-[72px] xl:grid-cols-[minmax(0,1fr)_660px] xl:gap-16">
        <div className="min-w-0">
          <span className="inline-flex rounded-full bg-accent px-3.5 py-[5px] text-[12px] font-semibold text-[#8B5CF6]">
            Beta Version
          </span>

          <h1 className="mt-6 text-[clamp(34px,4vw,50px)] font-extrabold leading-[1.12] tracking-[-0.035em] text-white">
            <span className="block min-[1180px]:whitespace-nowrap">Your LinkedIn outreach</span>
            <span className="block">
              shouldn&apos;t stop at{" "}
              <span className="text-brand">the</span>
            </span>
            <span className="block text-brand">reply.</span>
          </h1>

          <p className="mt-6 max-w-[500px] text-[16px] leading-7 text-white/50">
            Automate prospecting, start more conversations, and let Eya&nbsp;AI
            keep them moving when you don&apos;t have time.
          </p>

          <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 text-[13.5px] font-medium text-white/65"
              >
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <a
              href="https://buy.stripe.com/5kQ5kDeZJ48U5KfapcfQI05"
              className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-brand px-6 py-[13px] text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(139,92,246,0.28)] transition-colors hover:bg-brand-hover"
            >
              Get Lifetime Deal
              <ArrowIcon />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2.5 rounded-[8px] border border-white/12 bg-[#0C0C16] px-5 py-[13px] text-[15px] font-semibold text-white transition-colors hover:border-white/20 hover:bg-surface"
            >
              <PlayIcon />
              Watch Demo
            </a>
          </div>

          <p className="mt-5 text-[13px] text-white/32">
            Beta access · One-time payment · 3,000 credits every month
          </p>
        </div>

        <div className="flex w-full min-w-0 justify-center xl:mt-6 xl:justify-end">
          <DashboardPreview />
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

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.5 8h9m0 0L9 4.5M12.5 8 9 11.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M4.2 2.4v11.2L13.6 8 4.2 2.4Z" />
    </svg>
  );
}

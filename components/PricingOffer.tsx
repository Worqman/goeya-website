const leftFeatures = [
  "Lifetime access to Eya",
  "3,000 credits every month",
  "LinkedIn outreach automation",
  "AI-powered conversations",
];

const rightFeatures = [
  "LinkedIn content generator",
  "Lead Finder",
  "Email automation when released",
  "Future product updates",
  "Be part of shaping the product",
];

export default function PricingOffer() {
  return (
    <section id="pricing" className="relative pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-8">
        <div className="flex flex-col gap-8 rounded-[16px] border border-[#26263A] bg-[#13131F] px-6 py-8 sm:px-10 sm:py-10 lg:flex-row lg:items-center lg:justify-start lg:gap-8 lg:px-14 lg:py-12">
          <div className="max-w-[560px]">
            <span className="inline-flex rounded-full bg-accent px-3 py-[5px] text-[11px] font-bold uppercase tracking-[0.12em] text-[#C4B5FD]">
              Limited Time Beta Offer
            </span>

            <h3 className="mt-5 text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-white sm:text-[34px]">
              Get in early. Keep it for life.
            </h3>

            <p className="mt-4 text-[15px] leading-7 text-white/50">
              Eya is currently in beta. We&apos;re opening lifetime access to a limited number of early
              users before moving to monthly subscriptions.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-2.5 sm:grid-cols-2">
              <ul className="space-y-2.5">
                {leftFeatures.map((item) => (
                  <FeatureItem key={item} label={item} />
                ))}
              </ul>
              <ul className="space-y-2.5">
                {rightFeatures.map((item) => (
                  <FeatureItem key={item} label={item} />
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full max-w-[380px] shrink-0 rounded-[12px] border border-[#4D3873] bg-[#191926] px-8 py-9 text-center lg:w-[380px]">
            <p className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-white">
              <DiamondIcon />
              Lifetime Access
            </p>
            <p className="mt-2 text-[13px] text-white/45">
              One-time payment. No monthly fees.
            </p>

            <div className="mt-5 flex items-end justify-center gap-2.5">
              <span className="text-[48px] font-extrabold leading-none tracking-tight text-white">
                £149
              </span>
              <span className="mb-1.5 text-[20px] font-medium text-white/35 line-through">
                £499
              </span>
            </div>

            <a
              href="#get-lifetime-deal"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-[8px] bg-brand px-5 py-[14px] text-[15px] font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              Get Lifetime Deal
              <ArrowIcon />
            </a>

            <p className="mt-3 text-[12px] text-white/40">Limited spots available</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ label }: { label: string }) {
  return (
    <li className="flex items-start gap-2 text-[14px] font-medium text-white/70">
      <CheckIcon />
      {label}
    </li>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-[3px] shrink-0"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
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

function DiamondIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="#8B5CF6" aria-hidden="true">
      <path d="M6 1.1 10.9 6 6 10.9 1.1 6 6 1.1Z" />
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

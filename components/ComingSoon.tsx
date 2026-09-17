export default function ComingSoon() {
  return (
    <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-28">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-8">
        <div className="flex h-auto flex-col items-start rounded-[20px] border border-[#4D3873] bg-[#1A1429] px-5 py-8 sm:px-8 lg:h-[314px] lg:min-h-[314px] lg:flex-row lg:items-center lg:justify-between lg:rounded-[12px] lg:px-12 lg:py-8">
          <div className="w-full max-w-none lg:max-w-[500px]">
            <span className="inline-flex rounded-full bg-accent px-3 py-[5px] text-[11px] font-bold uppercase tracking-[0.12em] text-brand lg:text-[#C4B5FD]">
              Coming Soon
            </span>

            <h2 className="mt-5 text-[26px] font-extrabold leading-[1.2] tracking-[-0.03em] text-white lg:mt-4 lg:text-[28px]">
              LinkedIn + email. One
              <br className="lg:hidden" />
              <span className="lg:inline"> </span>
              conversation.
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-white/50 lg:mt-3 lg:text-[14px] lg:leading-6">
              <span className="lg:hidden">
                We&apos;re bringing email directly into Eya, so you can
                build integrated sequences across LinkedIn and
                email from the same campaign.
              </span>
              <span className="hidden lg:inline">
                We&apos;re bringing email directly into Eya, allowing you to build
                integrated sequences across LinkedIn and email from the same campaign.
              </span>
            </p>

            <ChannelIcons className="mt-7 flex lg:hidden" />

            <a
              href="#whats-coming"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-[8px] bg-brand px-5 py-[14px] text-[15px] font-semibold text-white transition-colors hover:bg-brand-hover lg:mt-6 lg:inline-flex lg:w-auto lg:py-[12px] lg:text-[14px]"
            >
              See what&apos;s coming
              <ArrowIcon />
            </a>
          </div>

          <div className="mx-auto hidden w-full max-w-[280px] flex-col items-center text-center lg:mx-0 lg:mr-6 lg:flex">
            <ChannelIcons />

            <p className="mt-5 text-[14px] font-semibold leading-5 text-white">
              More channels. More touchpoints.
              <br />
              More opportunities.
            </p>

            <span className="mt-4 inline-flex rounded-full border border-white/15 px-3.5 py-1.5 text-[12px] font-medium text-white/55">
              Included with your lifetime access
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChannelIcons({ className = "flex" }: { className?: string }) {
  return (
    <div className={`items-center gap-3 ${className}`}>
      <span className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#3B82F6] text-[18px] font-bold text-white">
        in
      </span>
      <span className="text-[20px] font-medium text-white/45">+</span>
      <span className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-brand">
        <MailIcon />
      </span>
    </div>
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

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2.2"
        stroke="white"
        strokeWidth="1.8"
      />
      <path
        d="m4.5 7.5 7.5 6 7.5-6"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

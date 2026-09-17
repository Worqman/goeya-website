const features = [
  {
    title: "LinkedIn Outreach",
    description:
      "Build automated campaigns with connection requests, messages, and follow-ups.",
    href: "#linkedin-outreach",
    iconBg: "bg-[#4C7DFF]",
    icon: PaperPlaneIcon,
  },
  {
    title: "AI Conversations",
    description:
      "Let Eya AI continue conversations when prospects respond, helping turn interest into opportunities.",
    href: "#ai-conversations",
    iconBg: "bg-brand",
    icon: SparkleIcon,
  },
  {
    title: "LinkedIn Content",
    description:
      "Create engaging LinkedIn posts with our built-in content generator and stay active without the hassle.",
    href: "#linkedin-content",
    iconBg: "bg-[#22C55E]",
    icon: DocumentIcon,
  },
  {
    title: "Lead Finder",
    description:
      "Find prospects and add them to your campaigns without leaving Eya.",
    href: "#lead-finder",
    iconBg: "bg-[#F472B6]",
    icon: SearchIcon,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative pt-20 pb-8 lg:pt-28 lg:pb-8">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-8">
        <div className="mx-auto text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand">
            Key Features
          </p>
          <h2 className="mt-4 text-[28px] font-extrabold leading-[1.2] tracking-[-0.03em] text-white sm:text-[34px] lg:text-[36px] lg:whitespace-nowrap">
            One platform. Your LinkedIn growth engine.
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[16px] leading-7 text-white/50">
            Everything you need to run effective outreach and keep conversations moving
            <br />
            — in one simple platform.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="flex h-full flex-col rounded-[12px] border border-white/[0.08] bg-[#13131F] p-6"
              >
                <span
                  className={`mb-5 flex h-10 w-10 items-center justify-center rounded-[10px] ${feature.iconBg}`}
                >
                  <Icon />
                </span>
                <h3 className="text-[17px] font-semibold tracking-tight text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 flex-1 text-[14px] leading-6 text-white/50">
                  {feature.description}
                </p>
                <a
                  href={feature.href}
                  className="mt-5 hidden items-center gap-1.5 text-[14px] font-medium text-white transition-colors hover:text-brand lg:inline-flex"
                >
                  Learn more
                  <ArrowIcon />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
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

function PaperPlaneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21.5 3.5 10.2 14.2"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M21.5 3.5 14.2 21.5l-3.1-8.2L3 10.2 21.5 3.5Z"
        stroke="white"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4.5 13.6 10.4 19.5 12 13.6 13.6 12 19.5 10.4 13.6 4.5 12 10.4 10.4 12 4.5Z"
        fill="white"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 4.5h6.2L18 8.3V19a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 7 19V6A1.5 1.5 0 0 1 8.5 4.5H8Z"
        stroke="white"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M14 4.5V8h3.8"
        stroke="white"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="5.5" stroke="white" strokeWidth="1.8" />
      <path
        d="m15.2 15.2 4 4"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

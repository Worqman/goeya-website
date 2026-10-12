import type { ReactNode } from "react";
import type { LegalDocument } from "@/content/legal/types";

const LINK_PATTERN = /(https?:\/\/[^\s,;)]+[^\s,;).]|[\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g;

function linkify(text: string): ReactNode[] {
  return text.split(LINK_PATTERN).map((part, index) => {
    if (index % 2 === 0) return part;
    const href = part.includes("@") && !part.startsWith("http") ? `mailto:${part}` : part;
    return (
      <a
        key={index}
        href={href}
        className="text-[#A78BFA] underline decoration-[#A78BFA]/30 underline-offset-2 transition-colors hover:text-white hover:decoration-white/40"
      >
        {part}
      </a>
    );
  });
}

function sectionId(index: number) {
  return `section-${index + 1}`;
}

export default function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[10%] top-[6%] h-[260px] w-[260px] rounded-full bg-accent/12 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1340px] px-6 pb-24 pt-14 lg:px-8 lg:pb-28 lg:pt-[72px]">
        <header className="max-w-[760px]">
          <span className="inline-flex rounded-full bg-accent px-3.5 py-[5px] text-[12px] font-semibold text-[#8B5CF6]">
            Legal
          </span>

          <h1 className="mt-6 text-[clamp(30px,4vw,40px)] font-extrabold leading-[1.15] tracking-[-0.03em] text-white">
            {document.title}
          </h1>

          <p className="mt-4 text-[16px] leading-7 text-white/50">
            {document.subtitle}
          </p>

          <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[13px]">
            <div className="flex gap-1.5">
              <dt className="text-white/40">Effective date</dt>
              <dd className="font-medium text-white/70">{document.effectiveDate}</dd>
            </div>
            <div className="flex gap-1.5">
              <dt className="text-white/40">Operator</dt>
              <dd className="font-medium text-white/70">Craftio Ltd, trading as Eya</dd>
            </div>
            <div className="flex gap-1.5">
              <dt className="text-white/40">Contact</dt>
              <dd className="font-medium text-white/70">{linkify("hello@goeya.app")}</dd>
            </div>
          </dl>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-12 border-t border-[#26263A] pt-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
          <nav aria-label="Sections" className="hidden lg:block">
            <ol className="sticky top-8 flex flex-col gap-2.5">
              {document.sections.map((section, index) => (
                <li key={section.heading}>
                  <a
                    href={`#${sectionId(index)}`}
                    className="flex gap-2 text-[13px] leading-5 text-white/45 transition-colors hover:text-white"
                  >
                    <span className="w-5 shrink-0 tabular-nums text-white/30">{index + 1}.</span>
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <ol className="flex max-w-[760px] flex-col gap-10">
            {document.sections.map((section, index) => (
              <li key={section.heading} id={sectionId(index)} className="scroll-mt-8">
                <h2 className="text-[19px] font-bold tracking-[-0.01em] text-white">
                  <span className="mr-2 text-white/35">{index + 1}.</span>
                  {section.heading}
                </h2>
                <p className="mt-3 text-[15px] leading-[1.8] text-white/60">
                  {linkify(section.body)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

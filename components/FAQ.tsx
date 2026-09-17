"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Eya?",
    answer:
      "Eya is a LinkedIn growth platform that automates outreach and uses AI to keep conversations moving after prospects reply — so you never miss an opportunity.",
  },
  {
    question: "How do credits work?",
    answer:
      "Every lifetime plan includes 3,000 Eya credits each month. Credits are used for outreach, AI replies, and other actions in the platform, and they renew automatically every month.",
  },
  {
    question: "What happens when I use all my credits?",
    answer:
      "When you reach your monthly limit, sending pauses until your credits renew at the start of the next month. Your lifetime access and conversations stay in place.",
  },
  {
    question: "Is this really a one-time payment?",
    answer:
      "Yes. Lifetime access is a single £149 payment with no monthly subscription. You keep Eya for life, including 3,000 credits every month.",
  },
  {
    question: "When will email automation be available?",
    answer:
      "Email is coming soon and will be included with your lifetime access at no extra cost. You'll be able to run LinkedIn and email sequences from the same campaign.",
  },
  {
    question: "Can I use Eya for my agency or team?",
    answer:
      "Yes. Agencies and teams can use Eya to run outreach, manage conversations, and keep follow-ups moving across clients and campaigns.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative pb-16 pt-8 lg:pb-20 lg:pt-10">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand">
              FAQ
            </p>
            <h2 className="mt-3 text-[28px] font-extrabold tracking-[-0.03em] text-white sm:text-[32px]">
              Frequently asked questions
            </h2>
          </div>
          <a
            href="#faq"
            className="hidden shrink-0 items-center gap-1.5 text-[14px] font-medium text-brand sm:inline-flex"
          >
            View all FAQs
            <ArrowIcon />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-x-4 md:gap-y-3">
          <div className="flex flex-col gap-3">
            {faqs.slice(0, 3).map((item, index) => (
              <FaqItem
                key={item.question}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {faqs.slice(3).map((item, index) => (
              <FaqItem
                key={item.question}
                item={item}
                isOpen={openIndex === index + 3}
                onToggle={() =>
                  setOpenIndex(openIndex === index + 3 ? null : index + 3)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-[12px] border border-[#26263A] bg-[#13131F]">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-[18px] text-left"
      >
        <span className="text-[15px] font-medium text-white/85">
          {item.question}
        </span>
        <ChevronIcon open={isOpen} />
      </button>
      {isOpen && (
        <p className="px-5 pb-5 text-[14px] leading-6 text-white/50">
          {item.answer}
        </p>
      )}
    </div>
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

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`shrink-0 text-white/40 transition-transform ${open ? "rotate-180" : ""}`}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6.2 8 10l4-3.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const testimonials = [
  {
    quote:
      "Eya has saved me hours every week. I'm getting more replies and booking more calls than ever before.",
    name: "James T.",
    role: "Founder",
  },
  {
    quote:
      "Super easy to use and the AI replies are a game changer. Excited to see what's next!",
    name: "Priya S.",
    role: "Growth Manager",
  },
  {
    quote:
      "Finally, a tool that keeps the conversation going. It feels like having an extra team member.",
    name: "Mark R.",
    role: "Sales Director",
  },
];

export default function Testimonials() {
  return (
    <section className="relative pb-12 lg:pb-16">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-8">
        <div className="mx-auto text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand">
            Early Users
          </p>
          <h2 className="mt-4 text-[28px] font-extrabold leading-[1.2] tracking-[-0.03em] text-white sm:text-[36px]">
            Real results. Real feedback.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex flex-col rounded-[12px] border border-white/[0.08] bg-[#13131F] p-6"
            >
              <p className="flex-1 text-[15px] leading-6 text-white/70">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-10 w-10 shrink-0 rounded-full bg-[#382959]" />
                <div>
                  <p className="text-[14px] font-semibold leading-tight text-white">
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-[12px] text-white/45">{item.role}</p>
                  <Stars />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <div className="mt-1 flex gap-[2px]" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="#F5C542"
          aria-hidden="true"
        >
          <path d="M6 1.1 7.35 4.2l3.35.3-2.55 2.2.8 3.25L6 8.3 3.05 9.95l.8-3.25L1.3 4.5l3.35-.3L6 1.1Z" />
        </svg>
      ))}
    </div>
  );
}

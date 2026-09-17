const steps = [
  { lines: ["Automated", "outreach"], color: "bg-[#4ADE80]" },
  { lines: ["Prospect", "replies"], color: "bg-[#4ADE80]" },
  { lines: ["Eya AI", "takes over"], color: "bg-brand" },
  { lines: ["Conversation", "keeps going"], color: "bg-brand" },
];

export default function Problem() {
  return (
    <section id="how-it-works" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1340px] grid-cols-1 items-center gap-12 px-6 lg:px-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] xl:gap-12">
        <div className="max-w-[520px]">
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand">
            The Problem
          </p>

          <h2 className="mt-4 text-[32px] font-extrabold leading-[1.18] tracking-[-0.03em] text-white sm:text-[38px] lg:text-[40px]">
            <span className="block">Getting replies isn&apos;t the</span>
            <span className="block">
              problem.{" "}
              <span className="text-brand whitespace-nowrap">
                Following them up
              </span>
            </span>
            <span className="block text-brand">is.</span>
          </h2>

          <p className="mt-6 text-[16px] leading-7 text-white/50">
            Automation can start hundreds of conversations. But when
            real people reply, those conversations often sit unanswered
            — and opportunities are lost.
          </p>

          <p className="mt-5 text-[16px] leading-7 text-white/50">
            Eya is built differently. It not only automates your outreach, it
            can also use AI to continue the conversation, so you never
            miss a chance.
          </p>
        </div>

        <div className="flex min-w-0 flex-col gap-5 xl:flex-row xl:items-stretch xl:justify-start xl:gap-5">
          <div className="w-full max-w-[400px]">
            <ChatMockup />

            <ul className="mt-5 flex flex-col gap-3 xl:hidden">
              <li className="flex items-center gap-2.5 text-[14px] font-medium text-white/60">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#4ADE80]" />
                <span>Automated outreach</span>
                <span className="text-white/35">→</span>
                <span>Prospect replies</span>
              </li>
              <li className="flex items-center gap-2.5 text-[14px] font-medium text-white/60">
                <span className="h-2 w-2 shrink-0 rounded-full bg-brand" />
                <span>Eya AI takes over</span>
                <span className="text-white/35">→</span>
                <span>Conversation continues</span>
              </li>
            </ul>
          </div>

          <ul className="hidden w-[110px] shrink-0 flex-col justify-evenly py-2 xl:flex">
            {steps.map((step) => (
              <li key={step.lines.join(" ")} className="flex items-start gap-3">
                <span
                  className={`mt-[6px] h-2 w-2 shrink-0 rounded-full ${step.color}`}
                />
                <span className="text-[13px] font-medium leading-[1.35] text-white/55">
                  {step.lines[0]}
                  <br />
                  {step.lines[1]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ChatMockup() {
  return (
    <div className="w-full min-w-0 max-w-[400px] rounded-[12px] border border-white/[0.08] bg-[#13131F] p-5 sm:p-6">
      <Message
        name="You"
        time="10:24"
        text="Hi Sarah, I came across your profile and thought it would be great to connect!"
      />
      <Message
        name="Sarah"
        time="14:37"
        text="Hi! Thanks for reaching out. I'm interested to learn more."
      />
      <Message
        name="eya AI"
        time="14:38"
        nameClass="text-brand"
        bubbleClass="bg-[#6A4DB8] text-white"
        text="Great! Would you be open to a quick call next week to discuss how we can help?"
      />

      <div className="mt-3 hidden items-center gap-[5px] rounded-full bg-[#6A4DB8] px-2.5 py-[7px] sm:inline-flex">
        <span className="h-[5px] w-[5px] rounded-full bg-white/85" />
        <span className="h-[5px] w-[5px] rounded-full bg-white/85" />
        <span className="h-[5px] w-[5px] rounded-full bg-white/85" />
      </div>
    </div>
  );
}

function Message({
  name,
  time,
  text,
  nameClass = "text-white",
  bubbleClass = "bg-[#191926] text-white/75",
}: {
  name: string;
  time: string;
  text: string;
  nameClass?: string;
  bubbleClass?: string;
}) {
  return (
    <div className="mb-[18px] last:mb-0">
      <div className="mb-2 flex items-baseline gap-2">
        <span className={`text-[13px] font-semibold ${nameClass}`}>{name}</span>
        <span className="text-[12px] text-white/35">{time}</span>
      </div>
      <div
        className={`rounded-[12px] px-4 py-3 text-[13.5px] leading-[1.55] ${bubbleClass}`}
      >
        {text}
      </div>
    </div>
  );
}

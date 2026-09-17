const metrics = [
  { value: "1,248", label: "Invites Sent", color: "text-[#60A5FA]" },
  { value: "312", label: "Replies", color: "text-[#A78BFA]" },
  { value: "68%", label: "Acceptance Rate", color: "text-[#4ADE80]" },
  { value: "24", label: "Meetings Booked", color: "text-[#F472B6]" },
];

export default function DashboardPreview() {
  return (
    <div className="relative w-full min-w-0 max-w-[660px] overflow-hidden xl:w-[660px]">
      <div className="absolute -inset-6 rounded-[12px] bg-[#382959]/25 blur-3xl" />
      <div className="relative overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#13131F] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-[18px]">
        <div className="mb-3.5 flex items-center gap-[6px] px-1">
          <span className="h-[9px] w-[9px] rounded-full bg-[#FF5F57]" />
          <span className="h-[9px] w-[9px] rounded-full bg-[#FEBC2E]" />
          <span className="h-[9px] w-[9px] rounded-full bg-[#28C840]" />
        </div>

        <div className="mb-3.5 flex items-center justify-between gap-3 px-1">
          <span className="text-[16px] font-semibold tracking-tight text-white">
            eya
          </span>
          <span className="truncate text-[14px] font-semibold text-white">
            Campaign Performance
          </span>
        </div>

        <div className="grid min-w-0 grid-cols-2 gap-2.5">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="min-w-0 rounded-[12px] bg-[#191926] px-3.5 py-4 sm:px-5 sm:py-[18px]"
            >
              <div
                className={`text-[22px] font-semibold leading-none tracking-tight sm:text-[26px] ${metric.color}`}
              >
                {metric.value}
              </div>
              <div className="mt-1.5 truncate text-[12px] font-medium text-white/38 sm:text-[12.5px]">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2.5 flex min-h-[96px] items-end rounded-[12px] bg-[#191926] px-5 py-4">
          <span className="inline-flex items-center rounded-full bg-[#163224] px-2.5 py-[5px] text-[11.5px] font-semibold text-[#4ADE80]">
            +142% vs previous month
          </span>
        </div>
      </div>
    </div>
  );
}

import {
  MonitorSmartphone,
  Check,
} from "lucide-react";

const AFTER_INSTALL = [
  "Open the application.",
  "Select the appropriate login method.",
  "Enter the supplied account information.",
  "Allow the available categories to load.",
  "Test a stream and check audio and picture playback.",
];

export function AndroidContent() {
  return (
    <div>
      <h3 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[32px] sm:leading-[1.15] lg:text-[38px]">
        Set Up Android TV, Google TV or an{" "}
        <span className="text-gradient-brand">Android Device</span>
      </h3>
      <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-[15px] sm:leading-[1.75]">
        Confirm that your model supports the service’s application, then use the
        installation instructions provided for that device.
      </p>

      <div className="mt-6 glass-card p-5 sm:mt-8 sm:p-6">
        <div className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] bg-[#2563EB]/10 text-[#2563EB] sm:h-10 sm:w-10">
            <MonitorSmartphone className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
          </span>
          <h3 className="text-[14px] font-bold leading-snug text-[#0B0E2C] sm:text-lg">
            After installation:
          </h3>
        </div>
        <ul className="mt-2.5 space-y-2.5 sm:mt-5 sm:space-y-3">
          {AFTER_INSTALL.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-[14px] font-medium leading-snug text-[#0B0E2C] sm:gap-3 sm:text-[14px]"
            >
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#2563EB]/10 text-[#2563EB] sm:h-5 sm:w-5">
                <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" strokeWidth={3} />
              </span>
              <span className="min-w-0">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-5 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:text-[15px]">
        If you are moving between an Android phone and a television, remember
        that the application layout and controls may differ.
      </p>
    </div>
  );
}

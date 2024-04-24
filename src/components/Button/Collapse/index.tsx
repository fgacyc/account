import Link from "next/link";
import { useRouter } from "next/router";
import { useState, type FunctionComponent } from "react";

// interface CollapseProps {}

export const Collapse: FunctionComponent = () => {
  const router = useRouter();

  const locales = [
    { label: "en", value: "en" },
    { label: "bm", value: "ms" },
    { label: "中文", value: "zh" },
  ];
  return (
    <div
      className={`group relative flex h-[40px] w-[40px] flex-row items-center gap-1 overflow-hidden rounded-xl bg-[#00EDC2] transition-all duration-300 hover:w-[120px] dark:bg-gray-700`}
    >
      {[
        locales.find(
          (l) => l.value.toUpperCase() === router.locale?.toUpperCase(),
        ),
      ].map((l) => (
        <button
          key={l?.label}
          className={`absolute left-[1px] top-[1px] z-10 flex h-[38px] w-[38px] flex-col items-center justify-center gap-1 whitespace-nowrap rounded-xl ${l?.value === "zh" ? "p-1.5" : "p-2"} font-montserrat text-sm font-bold dark:text-white text-black${router.locale === l?.value ? " bg-black text-[white_!important]" : " hover:bg-gray-700/75 hover:text-white dark:hover:bg-white/50"}`}
        >
          {l?.label.toUpperCase()}
        </button>
      ))}

      {locales
        .filter((l) => l.value.toUpperCase() !== router.locale?.toUpperCase())
        .map((l, i) => (
          <Link
            key={l.label}
            href={router.pathname}
            locale={l.value}
            style={{
              translate: `${39 + i * 39}px`,
            }}
            className={`duration-250 invisible absolute left-0.5 top-0.5 flex h-[37px] w-[37px] flex-col items-center justify-center whitespace-nowrap rounded-xl font-montserrat ${l.value === "zh" ? "p-1.5" : "p-2"} text-sm font-bold transition-colors ease-in-out group-hover:visible dark:text-white text-black${router.locale === l.value ? " bg-black text-[white_!important]" : " hover:bg-gray-700/75 hover:text-white dark:hover:bg-[#FFFFFF]/25"}`}
          >
            {l.label.toUpperCase()}
          </Link>
        ))}
    </div>
  );
};

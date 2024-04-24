import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import { cloneElement, type ReactElement, type FunctionComponent } from "react";

export type NavItem = {
  href: string;
  label: string;
  icon: ReactElement;
};

interface NavProps {
  items: NavItem[];
}

export const Nav: FunctionComponent<NavProps> = ({ items }) => {
  const t = useTranslations();
  const router = useRouter();

  return (
    <div className="flex w-full flex-col gap-2">
      {items.map((item) => (
        <Link
          href={item.href}
          key={item.href}
          className={`flex w-full flex-row items-center gap-3 rounded-xl bg-gray-500/20 px-4 py-3 text-white hover:bg-gray-500/40 dark:text-black ${router.locale === "zh" ? "text-[15px]" : "font-inter text-base"}`}
        >
          <span>
            {cloneElement(item.icon, {
              size: 25,
              className: "",
            })}
          </span>
          {t(item.label)}
        </Link>
      ))}
    </div>
  );
};

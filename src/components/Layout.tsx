/* eslint-disable @next/next/no-img-element */

import { Drawer } from "@/components/Drawer";
import { IoMenu } from "react-icons/io5";
import { PiMoon, PiSun } from "react-icons/pi";
import { Collapse } from "@/components/Button/Collapse";
import { type ReactElement, useState, type FunctionComponent } from "react";
import { useTheme } from "@/stores/useTheme";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { Nav, type NavItem } from "./Nav";
import { FaAddressCard } from "react-icons/fa6";
import { HiHomeModern } from "react-icons/hi2";
import { RiCrossFill } from "react-icons/ri";

export const locales = [
  { label: "en", value: "en" },
  { label: "bm", value: "ms" },
  { label: "中文", value: "zh" },
];

export const navs: NavItem[] = [
  {
    label: "personal_info",
    href: "/",
    icon: <FaAddressCard />,
  },
  {
    label: "fam_info",
    href: "/family",
    icon: <HiHomeModern />,
  },
  {
    label: "pastoral_info",
    href: "/pastoral",
    icon: <RiCrossFill />,
  },
];

export const Layout: FunctionComponent<{
  children: ReactElement;
}> = ({ children }) => {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const t = useTranslations();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f1f2f4] dark:bg-[#241F20] lg:px-10 lg:py-8">
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <div className="relative flex w-full flex-grow flex-row justify-between overflow-hidden bg-[#ddd] shadow-xl dark:bg-[#505050] lg:rounded-xl lg:bg-white">
        <button
          onClick={() => setDrawerOpen((state) => !state)}
          className="absolute left-4 top-4 rounded-xl bg-black p-2.5 dark:bg-[#00EDC2]"
        >
          <IoMenu
            size={20}
            className="text-white opacity-100 dark:text-black"
          />
        </button>
        <div className="relative hidden w-full max-w-[320px] flex-grow flex-col gap-10 bg-[#3b3b3b] p-5 dark:bg-[#00EDC2] lg:flex">
          <div className="flex flex-row items-center gap-2">
            <img
              src="/favicon.ico"
              className="h-[40px] w-[40px]"
              alt="fga logo"
            />
            <div className="font-sf text-[22px] font-[800] leading-[22px] text-white dark:text-black">
              {t("title")}
            </div>
          </div>
          <Nav items={navs} />
          <div className="absolute bottom-5 left-5 flex h-[30px] flex-row items-center gap-2">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-xl bg-[#00EDC2] p-2.5 dark:bg-black"
            >
              {theme === "dark" ? (
                <PiMoon size={20} className="text-white opacity-100" />
              ) : (
                <PiSun size={20} className="text-black opacity-70" />
              )}
            </button>
            <Collapse items={locales} primary={String(router.locale)} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};

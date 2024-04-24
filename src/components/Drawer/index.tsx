/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  type Dispatch,
  Fragment,
  type SetStateAction,
  type FunctionComponent,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoCloseOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";
import { useTheme } from "@/stores/useTheme";
import { PiMoon, PiSun } from "react-icons/pi";
import { Collapse } from "../Button/Collapse";
// import { montserrat } from "@/pages/_app";
// import { useRouter } from "next/router";

interface DrawerProps {
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  //   installPrompt?: Event;
  //   setInstallPrompt: Dispatch<SetStateAction<Event | undefined>>;
  //   registration?: ServiceWorkerRegistration;
  // setRegistration: Dispatch<
  //   SetStateAction<ServiceWorkerRegistration | undefined>
  // >;
  //   subscription?: PushSubscription;
  //   setSubscription: Dispatch<SetStateAction<PushSubscription | undefined>>;
  //   isSubscribed: boolean;
  //   setIsSubscribed: Dispatch<SetStateAction<boolean>>;
}
export const Drawer: FunctionComponent<DrawerProps> = ({
  open,
  onClose,
  //   installPrompt,
  //   setInstallPrompt,
  // subscription,
  // registration,
  // setSubscription,
  // setIsSubscribed,
}) => {
  //   const router = useRouter();

  const { theme, setTheme } = useTheme();
  const t = useTranslations();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className={`relative z-[120] font-sf ${theme}`}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-5">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-xs">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    // enterFrom="opacity-0"
                    // enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    // leaveFrom="opacity-100"
                    // leaveTo="opacity-0"
                  >
                    <div className="absolute right-0 top-0 -mr-9 flex pr-4 pt-4 sm:-ml-10 sm:pl-4">
                      <button
                        type="button"
                        className="relative rounded-xl bg-[#00EDC2] p-2.5 focus:outline-none dark:bg-black"
                        onClick={() => onClose(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <IoCloseOutline
                          className="text-black outline-none dark:text-white"
                          aria-hidden="true"
                          size={20}
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full w-full flex-col justify-between rounded-r-xl bg-[#3b3b3b] p-5 px-4 py-4 shadow-xl dark:bg-[#00EDC2] sm:px-6">
                    <div className="flex flex-row items-center justify-between">
                      <Dialog.Title className="flex flex-row items-center gap-2">
                        <img
                          src="/favicon.ico"
                          className="h-[40px] w-[40px]"
                          alt="fga logo"
                        />
                        <div className="font-sf text-[22px] font-[800] leading-[22px] text-white dark:text-black">
                          {t("title")}
                        </div>
                      </Dialog.Title>
                    </div>
                    <div className="flex h-[40px] flex-row items-center gap-2">
                      <button
                        onClick={() =>
                          setTheme(theme === "light" ? "dark" : "light")
                        }
                        className="rounded-xl bg-[#00EDC2] p-2.5 dark:bg-black"
                      >
                        {theme === "dark" ? (
                          <PiMoon
                            size={20}
                            className="text-white opacity-100"
                          />
                        ) : (
                          <PiSun size={20} className="text-black opacity-70" />
                        )}
                      </button>
                      <Collapse />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

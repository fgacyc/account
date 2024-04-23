import { type AppType } from "next/app";
import { Montserrat } from "next/font/google";

import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useTheme } from "@/stores/useTheme";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});
const queryClient = new QueryClient();

const MyApp: AppType = ({ Component, pageProps }) => {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="Asia/Kuala_Lumpur"
      // @ts-expect-error unsure types
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      messages={pageProps.messages}
    >
      <QueryClientProvider client={queryClient}>
        <main
          className={`font-sans ${theme === "dark" ? "dark" : "light"} ${montserrat.variable}`}
        >
          <Component {...pageProps} />
        </main>
      </QueryClientProvider>
    </NextIntlClientProvider>
  );
};

export default MyApp;

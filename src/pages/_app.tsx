import { type AppType } from "next/app";
import { Montserrat } from "next/font/google";

import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});
const queryClient = new QueryClient();

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={`font-sans ${montserrat.variable}`}>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
};

export default MyApp;

import "@/app/globals.css";
import Theme from "@/components/Theme";
import { IBM_Plex_Sans_Thai } from "next/font/google";

const ibm_plex = IBM_Plex_Sans_Thai({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
});

export default function MyApp({ Component, pageProps }: any) {
  return (
    <Theme className={ibm_plex.className}>
      <Component {...pageProps} />
    </Theme>
  );
}

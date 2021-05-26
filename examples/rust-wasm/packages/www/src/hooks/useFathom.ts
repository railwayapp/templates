import * as Fathom from "fathom-client";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

export const useFathom = (trackingCode: string, siteUrl: string) => {
  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load(trackingCode, {
      url: "https://jackal.jakerunzer.com/script.js",
      includedDomains: [siteUrl],
    });

    const onRouteChangeComplete = () => {
      Fathom.trackPageview();
    };
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);
};

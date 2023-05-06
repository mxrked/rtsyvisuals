// React/Next Imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// Library Imports
import "bootstrap/dist/css/bootstrap.min.css";

import { AnimatePresence } from "framer-motion";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import NProgress from "nprogress";

// Data/Functions/Images Imports
import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";
import RemoveStorageVariable from "@/assets/functions/data/storage/RemoveStorageVariable";
import CheckUserDevice from "@/assets/functions/dom/checkers/CheckUserDevice";
import CheckMobileNavMenuStatus from "@/assets/functions/dom/checkers/CheckMobileNavMenuStatus";

// Component Imports

// Style Imports
import "../assets/styles/tools/global_classnames/global_classnames.css";
import "../assets/styles/tools/overrides/overrides.css";
import "../assets/styles/tools/resets/resets.css";
import "../assets/styles/tools/library_styles/nprogress/nprogress.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [updateUI, setUpdateUI] = useState(0);

  //? GLOBALS
  //! NProgress Init
  useEffect(() => {
    // NProgress.done(); // Prevents NProgress from being stuck after page route completed

    router.events.on("routeChangeStart", () => {
      NProgress.start();
    });

    router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });
  }, [router, router.events]);

  //! Forget scroll position and force user back to top of page
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.addEventListener("beforeunload", () => {
      if (window.scrollY !== 0) {
        DeclareStorageVariable("session", "Reload Scroll", true);
      }
    });

    if (sessionStorage.getItem("Reload Scroll")) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      RemoveStorageVariable("session", "Reload Scroll");
    }
  }, []);

  //! Updating UI State
  useEffect(() => {
    if (!sessionStorage.getItem("Mobile Nav Opened")) {
      if (!sessionStorage.getItem("Search Opened")) {
        setTimeout(() => {
          if (sessionStorage.getItem("FM Loaded")) {
            setUpdateUI(updateUI + 1);
          }
        }, 2500);
      }
    }
  }, [router]);

  //! Enabling scrolling and pointerevents when updateUI == 1
  useEffect(() => {
    if (updateUI == 1) {
      document.body.style.overflowY = "auto";
      document.body.style.pointerEvents = "auto";
    }
  }, [updateUI]);

  //! Reload Page after route change (This is mostly for the animations)
  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      router.reload();
    });
  }, [router]);

  //? DATA
  //! Session/Local Storage Clearing
  useEffect(() => {
    RemoveStorageVariable("local", "ally-supports-cache");
    RemoveStorageVariable("session", "Search Opened");
    RemoveStorageVariable("session", "Mobile Nav Opened");
    RemoveStorageVariable("session", "HREF");
    RemoveStorageVariable("session", "FM Loaded");

    // This will allow the modal to stay opened and prevents user from interacting
    if (!window.location.hash) {
      RemoveStorageVariable("session", "Modal Opened");
    }

    RemoveStorageVariable("session", "Page Reload");
  }, [router]);

  //! Adding value after framer motion content has loaded
  useEffect(() => {
    setTimeout(() => {
      DeclareStorageVariable("session", "FM Loaded", true);
    }, 2000);

    window.addEventListener("beforeunload", () => {
      RemoveStorageVariable("session", "FM Loaded");
    });
  }, [router]);

  //? CHECKERS
  //! Check User Device
  useEffect(() => {
    let mobile,
      desktop = false;

    // Page Load
    window.addEventListener("load", () => {
      setTimeout(() => {
        CheckUserDevice(mobile, desktop);
      }, 500);
    });

    if (document.readyState === "complete") {
      setTimeout(() => {
        CheckUserDevice(mobile, desktop);
      }, 500);
    }

    // Resize
    window.addEventListener("resize", () => {
      CheckUserDevice(mobile, desktop);
    });
  }, []);

  //! Checking Mobile Nav Menu Status
  useEffect(() => {
    window.addEventListener("resize", () => {
      CheckMobileNavMenuStatus();
    });

    window.addEventListener("load", () => {
      CheckMobileNavMenuStatus();
    });

    router.events.on("routeChangeComplete", () => {
      CheckMobileNavMenuStatus();
    });
  }, [router]);

  //? DISPLAYS/HIDERS
  //! Showing Page after some time
  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll(".page").forEach((page) => {
        page.style.opacity = 1;
        page.style.visibility = "visible";
      });
    }, 500);
  }, [router]);

  // // Display/Hide links if/not logged in
  // useEffect(() => {
  //   if (router.pathname !== "/login_register") {
  //     if (sessionStorage.getItem("Logged In User")) {
  //       document.querySelectorAll(".sign-out").forEach((btn) => {
  //         btn.style.display = "flex";
  //       });
  //     }

  //     if (!sessionStorage.getItem("Logged In User")) {
  //       document.querySelectorAll(".sign-out").forEach((btn) => {
  //         btn.style.display = "none";
  //       });
  //     }
  //   }
  // }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;

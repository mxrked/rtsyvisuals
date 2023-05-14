// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";
import ManipPageLink from "@/assets/functions/dom/manip/ManipPageLinks";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/Mobile/MobileNavMenu";
import { Search } from "@/assets/components/global/Nav/Both/Search";
import { Footer } from "@/assets/components/global/Footer/Footer";

import { PageTop } from "@/assets/components/pages/All/PageTop";
import { ServicesTop } from "@/assets/components/pages/Services/ServicesTop";
import { ServicesMain } from "@/assets/components/pages/Services/ServicesMain";

// Style Imports
import "../assets/styles/modules/Services/Services.module.css";

export default function Services() {
  const router = useRouter();

  // Exit Animations trigger
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  // Disabling Page Links
  useEffect(() => {
    ManipPageLink("disable", "multiple", ".services-link");
  }, []);

  // Scrolling and opening service based on hash
  useEffect(() => {
    setTimeout(() => {
      const HASH = router.asPath.split("#")[1] || "";

      if (HASH === "portraits") {
        document.querySelectorAll(".services-checkbox")[0].scrollIntoView();

        document.querySelectorAll(".services-checkbox")[0].checked = true;
        document.querySelectorAll(".services-text")[0].style.height = "auto";
        document.querySelectorAll(".service-caret")[0].style.transform =
          "rotate(180deg)";
      }

      if (HASH === "boudoirs") {
        document.querySelectorAll(".services-checkbox")[1].scrollIntoView();

        document.querySelectorAll(".services-checkbox")[1].checked = true;
        document.querySelectorAll(".services-text")[1].style.height = "auto";
        document.querySelectorAll(".service-caret")[1].style.transform =
          "rotate(180deg)";
      }

      if (HASH === "blacklights") {
        document.querySelectorAll(".services-checkbox")[2].scrollIntoView();

        document.querySelectorAll(".services-checkbox")[2].checked = true;
        document.querySelectorAll(".services-text")[2].style.height = "auto";
        document.querySelectorAll(".service-caret")[2].style.transform =
          "rotate(180deg)";
      }

      if (HASH === "packages") {
        document.querySelectorAll(".services-checkbox")[3].scrollIntoView();

        document.querySelectorAll(".services-checkbox")[3].checked = true;
        document.querySelectorAll(".services-text")[3].style.height = "auto";
        document.querySelectorAll(".service-caret")[3].style.transform =
          "rotate(180deg)";
      }
    }, 1200);
  }, []);

  return (
    <div id="PAGE" className="page overrides_Services">
      <PageHead />

      <DesktopNav />
      <MobileNav />
      <MobileNavMenu />
      <Search />

      <main id="PAGE_CNT" className="page-cnt">
        <PageTop pageTopH1="My Services." />
        <ServicesTop />
        <ServicesMain />
      </main>

      <Footer />
    </div>
  );
}

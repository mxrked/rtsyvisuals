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

// Style Imports
import "../assets/styles/modules/Info/Info.module.css";
import { InfoTop } from "@/assets/components/pages/Info/InfoTop";
import { InfoText } from "@/assets/components/pages/Info/InfoText";

export default function Info() {
  const router = useRouter();

  // Exit Animations trigger
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  // Disabling Page Links
  useEffect(() => {
    ManipPageLink("disable", "multiple", ".info-link");
  }, []);

  return (
    <div id="PAGE" className="page overrides_Info">
      <PageHead />

      <DesktopNav />
      <MobileNav />
      <MobileNavMenu />
      <Search />

      <main id="PAGE_CNT" className="page-cnt">
        <PageTop pageTopH1="About Rick Dingwall." />

        <InfoTop />
        <InfoText />
      </main>

      <Footer />
    </div>
  );
}

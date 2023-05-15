// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";
import ManipPageLink from "@/assets/functions/dom/manip/ManipPageLinks";
import ManipPortfolioFilterBtns from "@/assets/functions/dom/manip/ManipPortfolioFilterBtns";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/Mobile/MobileNavMenu";
import { Search } from "@/assets/components/global/Nav/Both/Search";
import { Footer } from "@/assets/components/global/Footer/Footer";

import { PageTop } from "@/assets/components/pages/All/PageTop";
import { PortfolioTop } from "@/assets/components/pages/Portfolio/PortfolioTop";
import { PortfolioMain } from "@/assets/components/pages/Portfolio/PortfolioMain";

// Style Imports
import "../assets/styles/modules/Portfolio/Portfolio.module.css";

export default function Portfolio() {
  const router = useRouter();

  // Exit Animations trigger
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  // Disabling Page Links
  useEffect(() => {
    ManipPageLink("disable", "multiple", ".portfolio-link");
  }, []);

  // Disabling Filter Btns
  useEffect(() => {
    ManipPortfolioFilterBtns();
  }, []);

  return (
    <div id="PAGE" className="page overrides_Portfolio">
      <PageHead />

      <DesktopNav />
      <MobileNav />
      <MobileNavMenu />
      <Search />

      <main id="PAGE_CNT" className="page-cnt">
        <PageTop pageTopH1="My Portfolio/Work." />
        <PortfolioTop />
        <PortfolioMain />
      </main>

      <Footer />
    </div>
  );
}

// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/Mobile/MobileNavMenu";
import { Search } from "@/assets/components/global/Nav/Both/Search";
import { Footer } from "@/assets/components/global/Footer/Footer";

import { PageTop } from "@/assets/components/pages/All/PageTop";

// Style Imports
import "../assets/styles/modules/Services/Services.module.css";

export default function Services() {
  const router = useRouter();

  // Exit Animations trigger
  useEffect(() => {
    TriggerExitAnimations();
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
      </main>

      <Footer />
    </div>
  );
}

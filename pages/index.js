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
import { IndexTop } from "@/assets/components/pages/Index/IndexTop";
import { IndexInfo } from "@/assets/components/pages/Index/IndexInfo";
import { IndexWork } from "@/assets/components/pages/Index/IndexWork";

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";

export default function Home() {
  const router = useRouter();

  // Exit Animations trigger
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="PAGE" className="page overrides_Index">
      <PageHead />

      <DesktopNav />
      <MobileNav />
      <MobileNavMenu />
      <Search />

      <main id="PAGE_CNT" className="page-cnt">
        <IndexTop />
        <IndexInfo />
        <IndexWork />
      </main>
    </div>
  );
}

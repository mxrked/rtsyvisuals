// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <div id="PAGE" className="page overrides_Index">
      <PageHead />

      <DesktopNav />
      <MobileNav />

      <main id="PAGE_CNT" className="page-cnt">
        <div className="test-box" />
      </main>
    </div>
  );
}

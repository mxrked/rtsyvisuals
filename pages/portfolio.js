// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";

// Style Imports
import "../assets/styles/modules/Portfolio/Portfolio.module.css";

export default function Portfolio() {
  const router = useRouter();

  return (
    <div id="PAGE" className="page overrides_Portfolio">
      <PageHead />

      <DesktopNav />

      <main id="PAGE_CNT" className="page-cnt"></main>
    </div>
  );
}

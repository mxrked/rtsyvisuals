// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { NotFoundMain } from "@/assets/components/pages/404/404Main";

// Style Imports
import "../assets/styles/modules/404/404.module.css";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div id="PAGE" className="page overrides_404">
      <PageHead />

      <main id="PAGE_CNT" className="page-cnt">
        <NotFoundMain />
      </main>
    </div>
  );
}

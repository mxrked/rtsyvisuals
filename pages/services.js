// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";

// Style Imports
import "../assets/styles/modules/Services/Services.module.css";

export default function Services() {
  const router = useRouter();

  return (
    <div id="PAGE" className="page overrides_Services">
      <PageHead />

      <main id="PAGE_CNT" className="page-cnt"></main>
    </div>
  );
}

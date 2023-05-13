/**
 *
 *  This is the page top
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { BG_CAMERA_LENS } from "@/assets/cdns/CDNBgs";

import { FADES } from "@/assets/data/variables/ARRAYS";
import { FADE_IN } from "@/assets/animations/FADES";
import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import { BackgroundImage } from "react-image-and-background-image-fade";

import styles from "../../../styles/modules/All/All.module.css";

export const PageTop = (props) => {
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section id="pageTop" className={`${styles.page_top} overrides_PageTop`}>
      <motion.div
        className={`${styles.motion} fm-motion full-second fade-in`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        // isMobile = true - Fade In
        // isMobile = false - Fade Down
        // variants={isMobile ? FADES[0] : FADES[4]}
        variants={FADE_IN}
      >
        <BackgroundImage src={BG_CAMERA_LENS} className={`${styles.bg}`} />

        <div className={`${styles.page_top_div}`}>
          <h1 className="half-second">{props.pageTopH1}</h1>
        </div>
      </motion.div>
    </section>
  );
};

/**
 *
 *  This is the Info Top
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { IMG_RICK } from "@/assets/cdns/CDNImgs";

import { FADE_IN } from "@/assets/animations/FADES";
import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Info/Info.module.css";

export const InfoTop = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section id="infoTop" className={`${styles.info_top} overrides_InfoTop`}>
      <motion.div
        className={`${styles.motion} fm-motion full-second fade-in`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        // isMobile = true - Fade In
        // isMobile = false - Fade Up
        // variants={isMobile ? FADES[0] : FADES[3]}
        variants={FADE_IN}
      >
        <div className={`${styles.info_top_inner}`}>
          <img
            data-src={IMG_RICK}
            className="lazyload half-second"
            alt="Image of Rick Dingwall."
          />

          <blockquote className="half-second">
            “Normal is not something to aspire to, it's something to get away
            from.”
          </blockquote>

          <span className="half-second">- Jodie Foster</span>
        </div>
      </motion.div>
    </section>
  );
};

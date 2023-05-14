/**
 *
 *  This is the services top
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// import { BG_PROJECTION_2 } from "@/assets/cdns/CDNBgs";
import { BG_PORTRAIT_18 } from "@/assets/cdns/CDNBgs";

import { FADE_IN } from "@/assets/animations/FADES";
import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import { BackgroundImage } from "react-image-and-background-image-fade";

import styles from "../../../styles/modules/Services/Services.module.css";

export const ServicesTop = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section
      id="servicesTop"
      className={`${styles.services_top} overrides_ServicesTop`}
    >
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
        <div className={`${styles.services_top_cnt}`}>
          <p className="half-second">
            I currently have 4 different types of services that I am able to
            provide when a client requests a photoshoot. Those being: Portraits,
            Projections, Blacklights and Packages.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

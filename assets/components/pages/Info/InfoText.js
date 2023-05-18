/**
 *
 *  This is the Info Text
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_IN } from "@/assets/animations/FADES";
import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Info/Info.module.css";

export const InfoText = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section id="infoText" className={`${styles.info_text} overrides_InfoText`}>
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
        <div className={`${styles.info_text_inner}`}>
          <p className="half-second">
            Hi, I'm Rick, I am happily married healthcare professional. I
            decided to start RTSY Visuals to express myself and create art. I
            have always been adventurous and enjoy being an “out of the box”
            thinker. I decided to invest in a quality camera several years ago
            and took some classes to develop skills. My photography style is to
            try something new, unique, or experimental.
          </p>

          <p className="half-second">
            I want to capture that “Wow” photo. I am a photographer, not a
            digital artist. I won't use Photoshop to make you taller, thinner,
            or change you into something you are not. I use lighting and
            positioning to achieve the best about you.
          </p>

          <p className="half-second">
            I have been published over 50 times in a variety of magazines.
            Including 10 covers.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

/**
 *
 *  This is the index top
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

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexTop = () => {
  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section id="indexTop" className={`${styles.index_top} overrides_IndexTop`}>
      <motion.div
        className={`${styles.motion} fm-motion fade-in full-second`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <BackgroundImage
          // src={BG_PROJECTION_2}
          src={BG_PORTRAIT_18}
          className={`${styles.bg}`}
          width="100%"
          height="100%"
          aria-label="Background image of a woman standing in front of a projection of a blue dragon."
        ></BackgroundImage>

        <div className={`${styles.overlay}`}>
          <div className={`${styles.overlay_cnt}`}>
            <h1 className="half-second">PRONOUNCED ARTSY.</h1>

            <span className={`${styles.small_text} half-second`}>
              Rick dingwall photography.
            </span>

            <div className={`${styles.links}`}>
              <a href="/info" className="half-second">
                <span>My Info</span>
              </a>

              <a href="/portfolio" className="half-second">
                <span>My Work</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

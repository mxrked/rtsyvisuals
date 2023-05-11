/**
 *
 *  This is the index services
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  BG_PORTRAIT_4,
  BG_BLACKLIGHT_7,
  BG_BOUDOIR_11,
  BG_PORTRAIT_20,
} from "@/assets/cdns/CDNBgs";

import { FADES } from "@/assets/data/variables/ARRAYS";
import { FADE_IN } from "@/assets/animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import { BackgroundImage } from "react-image-and-background-image-fade";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexServices = () => {
  // const [isMobile, setIsMobile] = useState(false); // This is used to indicate if the variant needs to be changed

  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  //! Changing Variant based on device size
  // useEffect(() => {
  //   // Fade In
  //   if (window.innerWidth <= 1024) {
  //     setIsMobile(true);
  //   }

  //   // Fade Up
  //   if (window.innerWidth > 1024) {
  //     setIsMobile(false);
  //   }
  // }, [router]);

  return (
    <section
      id="indexServices"
      className={`${styles.index_services} overrides_IndexServices`}
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
        <div className={`${styles.index_services_inner}`}>
          <div className={`${styles.index_services_inner_top}`}>
            <div className={`${styles.index_services_inner_top_cnt}`}>
              <h1 className="half-second">Provided Services.</h1>

              <p className="half-second">
                I can provide different types of photography services. Those
                include: Portraits, Boudoirs, Blacklights and Packages.
              </p>

              <a href="/services" className="half-second">
                <span>View Services</span>
              </a>
            </div>
          </div>

          <div className={`${styles.index_services_inner_main}`}>
            <div
              className={`${styles.index_services_inner_main_box} container-fluid`}
            >
              <div className={`${styles.index_services_inner_main_row} row`}>
                <div
                  className={`${styles.index_services_inner_main_service} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
                >
                  <BackgroundImage
                    src={BG_PORTRAIT_4}
                    className={`${styles.bg} half-second`}
                    width="100%"
                    height="100%"
                  />

                  <a href="/services#portraits" className="half-second">
                    <span>Portraits</span>
                  </a>
                </div>
                <div
                  className={`${styles.index_services_inner_main_service} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
                >
                  <BackgroundImage
                    src={BG_BOUDOIR_11}
                    className={`${styles.bg} half-second`}
                    width="100%"
                    height="100%"
                  />

                  <a href="/services#boudoirs" className="half-second">
                    <span>Boudoirs</span>
                  </a>
                </div>
                <div
                  className={`${styles.index_services_inner_main_service} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
                >
                  <BackgroundImage
                    src={BG_BLACKLIGHT_7}
                    className={`${styles.bg} half-second`}
                    width="100%"
                    height="100%"
                  />

                  <a href="/services#blacklights" className="half-second">
                    <span>Blacklights</span>
                  </a>
                </div>
                <div
                  className={`${styles.index_services_inner_main_service} ${styles.packages} col-lg-12 col-md-12 col-sm-12 col-xs-12`}
                >
                  <BackgroundImage
                    src={BG_PORTRAIT_20}
                    className={`${styles.bg} half-second`}
                    width="100%"
                    height="100%"
                  />

                  <a href="/services#packages" className="half-second">
                    <span>Packages</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

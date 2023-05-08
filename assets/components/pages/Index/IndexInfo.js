/**
 *
 *  This is the index info
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import { BG_GRAYSCALE_CAMERA } from "@/assets/cdns/CDNBgs";

import { FADES } from "@/assets/data/variables/ARRAYS";
import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import { BackgroundImage } from "react-image-and-background-image-fade";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexInfo = () => {
  const [isMobile, setIsMobile] = useState(false); // This is used to indicate if the variant needs to be changed

  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  //! Changing Variant based on device size
  useEffect(() => {
    // Fade In
    if (window.innerWidth <= 1024) {
      setIsMobile(true);
    }

    // Fade Up
    if (window.innerWidth > 1024) {
      setIsMobile(false);
    }
  }, [router]);

  return (
    <section
      id="indexInfo"
      className={`${styles.index_info} ovderride_IndexInfo`}
    >
      <div className={`${styles.index_info_box} container-fluid`}>
        <div className={`${styles.index_info_row} row`}>
          <motion.div
            className={`${styles.index_info_side} ${styles.index_info_L} ${styles.motion} fm-motion fade-right-fix fade-in col-lg-5 col-md-5 col-sm-5 col-xs-5`}
            ref={REF}
            initial="hidden"
            animate={CONTROLS}
            // isMobile = true - Fade In
            // isMobile = false - Fade Right
            variants={isMobile ? FADES[0] : FADES[2]}
          >
            <BackgroundImage
              src={BG_GRAYSCALE_CAMERA}
              className={`${styles.bg}`}
              width="100%"
              height="100%"
              aria-label="Background image of a grayscale photography camera."
            />
          </motion.div>
          <motion.div
            className={`${styles.index_info_side} ${styles.index_info_R} ${styles.motion} fm-motion fade-left-fix fade-in col-lg-7 col-md-7 col-sm-7 col-xs-7`}
            ref={REF}
            initial="hidden"
            animate={CONTROLS}
            // isMobile = true - Fade In
            // isMobile = false - Fade Left
            variants={isMobile ? FADES[0] : FADES[1]}
          >
            <div className={`${styles.index_info_side_cnt}`}>
              <h1 className="half-second">What Makes Me Rtsy?</h1>

              <p className="half-second">
                I focus on creating breathtaking portraits using interesting
                techniques involving color and light. You can view my work in
                the galleries . If you like what you see, consider booking a
                photography session with me.
              </p>

              <div className={`${styles.socials}`}>
                <div
                  //   href="https://www.instagram.com/rtsy.visuals/?hl=en"
                  //   target={"_blank"}
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/rtsy.visuals/?hl=en",
                      "_blank"
                    );
                  }}
                  className="half-second"
                >
                  <FaInstagram className={`${styles.icon}`} />
                </div>
                <div
                  //   href="https://www.facebook.com/richard.dingwall.7"
                  //   target={"_blank"}
                  onClick={() => {
                    window.open(
                      "https://www.facebook.com/richard.dingwall.7",
                      "_blank"
                    );
                  }}
                  className="half-second"
                >
                  <FaFacebook className={`${styles.icon}`} />
                </div>
              </div>
              <span className="half-second">Reaching out to me</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

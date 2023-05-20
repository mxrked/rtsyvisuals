/**
 *
 *  This is the Contact Top
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_IN } from "@/assets/animations/FADES";
import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Contact/Contact.module.css";

export const ContactTop = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section id="contactTop" className={`${styles.contact_top}`}>
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
        <div className={`${styles.contact_top_inner}`}>
          <p className="half-second">
            You can contact me via my social media accounts on{" "}
            <span
              className="half-second"
              onClick={() => {
                window.open(
                  "https://www.facebook.com/richard.dingwall.7",
                  "_blank"
                );
              }}
            >
              Facebook
            </span>
            &nbsp;or&nbsp;
            <span
              className="half-second"
              onClick={() => {
                window.open(
                  "https://www.instagram.com/rtsy.visuals/?hl=en",
                  "_blank"
                );
              }}
            >
              Instagram
            </span>
            . You can also get in touch with me via my phone number or by using
            the contact form below.
          </p>

          <span className={`${styles.phone_number} half-second`}>
            +1 (336)-816-2199
          </span>
        </div>
      </motion.div>
    </section>
  );
};

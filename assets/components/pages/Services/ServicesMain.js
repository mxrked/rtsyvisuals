/**
 *
 *  This is the services main
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCaretDown } from "react-icons/fa";

// import { BG_PROJECTION_2 } from "@/assets/cdns/CDNBgs";
import {
  BG_PORTRAIT_4,
  BG_BLACKLIGHT_7,
  BG_BOUDOIR_11,
  BG_PORTRAIT_20,
} from "@/assets/cdns/CDNBgs";

import { FADE_IN } from "@/assets/animations/FADES";
import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import { BackgroundImage } from "react-image-and-background-image-fade";

import styles from "../../../styles/modules/Services/Services.module.css";

export const ServicesMain = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section
      id="servicesMain"
      className={`${styles.services_main} overrides_ServicesMain`}
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
        <div className={`${styles.services_main_inner}`}>
          <div className={`${styles.services_main_inner_service_toggler}`}>
            <BackgroundImage
              src={BG_PORTRAIT_4}
              className={`${styles.bg} half-second`}
              width="100%"
              height="100%"
            />

            <input
              type="checkbox"
              className="half-second services-checkbox"
              onChange={(e) => {
                if (e.currentTarget.checked) {
                  document.querySelectorAll(".services-text")[0].style.height =
                    "auto";
                  document.querySelectorAll(
                    ".service-caret"
                  )[0].style.transform = "rotate(180deg)";
                } else {
                  document.querySelectorAll(".services-text")[0].style.height =
                    "0";
                  document.querySelectorAll(
                    ".service-caret"
                  )[0].style.transform = "rotate(0deg)";
                }
              }}
            />

            <div className={`${styles.cnt_holder} half-second`}>
              <span className="half-second">Portraits</span>

              <FaCaretDown
                className={`${styles.icon} half-second service-caret`}
              />
            </div>
          </div>
          <div
            className={`${styles.services_main_inner_service_text} half-second services-text`}
          >
            <p className="half-second">
              A portrait photograph is a way of capturing a person's appearance,
              personality and mood in a single image. It can be a valuable
              memory of a loved one, a creative expression of oneself, or a
              professional representation of one's identity. A portrait
              photograph can also convey a message, a story, or an emotion to
              the viewer. Having a portrait photograph can help you preserve
              your history, celebrate your achievements, or share your vision
              with others.
            </p>
          </div>
          <div className={`${styles.services_main_inner_service_toggler}`}>
            <BackgroundImage
              src={BG_BOUDOIR_11}
              className={`${styles.bg} half-second`}
              width="100%"
              height="100%"
            />

            <input
              type="checkbox"
              className="half-second services-checkbox"
              onChange={(e) => {
                if (e.currentTarget.checked) {
                  document.querySelectorAll(".services-text")[1].style.height =
                    "auto";
                  document.querySelectorAll(
                    ".service-caret"
                  )[1].style.transform = "rotate(180deg)";
                } else {
                  document.querySelectorAll(".services-text")[1].style.height =
                    "0";
                  document.querySelectorAll(
                    ".service-caret"
                  )[1].style.transform = "rotate(0deg)";
                }
              }}
            />

            <div className={`${styles.cnt_holder} half-second`}>
              <span className="half-second">Boudoirs</span>

              <FaCaretDown
                className={`${styles.icon} half-second service-caret`}
              />
            </div>
          </div>
          <div
            className={`${styles.services_main_inner_service_text} half-second services-text`}
          >
            <p className="half-second">
              When you hear "boudoir," you might think of nudity or sexiness.
              But at its core, boudoir photography is about celebrating the
              beauty of the human body and helping people feel good about
              themselves. It's about creating an experience that makes you feel
              beautiful, empowered and confident.
            </p>

            <span className="half-second">
              Reasons to book a boudoir shoot:
            </span>

            <ul>
              <li className="half-second">
                Celebrate birthdays - turning 30, 40, 50, 60!
              </li>
              <li className="half-second">
                To give a special gift to someone important{" "}
              </li>
              <li className="half-second">Because you deserve it.</li>
            </ul>
          </div>
          <div className={`${styles.services_main_inner_service_toggler}`}>
            <BackgroundImage
              src={BG_BLACKLIGHT_7}
              className={`${styles.bg} half-second`}
              width="100%"
              height="100%"
            />

            <input
              type="checkbox"
              className="half-second services-checkbox"
              onChange={(e) => {
                if (e.currentTarget.checked) {
                  document.querySelectorAll(".services-text")[2].style.height =
                    "auto";
                  document.querySelectorAll(
                    ".service-caret"
                  )[2].style.transform = "rotate(180deg)";
                } else {
                  document.querySelectorAll(".services-text")[2].style.height =
                    "0";
                  document.querySelectorAll(
                    ".service-caret"
                  )[2].style.transform = "rotate(0deg)";
                }
              }}
            />

            <div className={`${styles.cnt_holder} half-second`}>
              <span className="half-second">Blacklights</span>

              <FaCaretDown
                className={`${styles.icon} half-second service-caret`}
              />
            </div>
          </div>
          <div
            className={`${styles.services_main_inner_service_text} half-second services-text`}
          >
            <p className="half-second">
              Blacklight photography can be a fun and creative way to experiment
              with different effects and colors. Using props, clothes, and
              makeup that glow under the black light, or UV paint for a more
              artistic look. It can be used to capture portraits that have a
              psychedelic or surreal effect.
            </p>
          </div>
          <div className={`${styles.services_main_inner_service_toggler}`}>
            <BackgroundImage
              src={BG_PORTRAIT_20}
              className={`${styles.bg} half-second`}
              width="100%"
              height="100%"
            />

            <input
              type="checkbox"
              className="half-second services-checkbox"
              onChange={(e) => {
                if (e.currentTarget.checked) {
                  document.querySelectorAll(".services-text")[3].style.height =
                    "auto";
                  document.querySelectorAll(
                    ".service-caret"
                  )[3].style.transform = "rotate(180deg)";
                } else {
                  document.querySelectorAll(".services-text")[3].style.height =
                    "0";
                  document.querySelectorAll(
                    ".service-caret"
                  )[3].style.transform = "rotate(0deg)";
                }
              }}
            />

            <div className={`${styles.cnt_holder} half-second`}>
              <span className="half-second">Packages</span>

              <FaCaretDown
                className={`${styles.icon} half-second service-caret`}
              />
            </div>
          </div>
          <div
            className={`${styles.services_main_inner_service_text} half-second services-text`}
          >
            <p className="half-second">
              There is no one size fits all when it comes to an empowering and
              artsy (RTSY) portraiture experience. Every photo session is
              customized to you. Upon booking, you will receive a digital posing
              guide and tips for finding just the right outfits to let your
              personality shine through. Before your session, we will do a full
              consultation to go discuss vision.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

/**
 *
 *  This is the portfolio main
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BackgroundImage } from "react-image-and-background-image-fade";

import {
  PORTRAIT_OBJS,
  BLACKLIGHT_OBJS,
  BOUDOIR_OBJS,
} from "@/assets/data/variables/ARRAYS";

import { FADE_IN } from "@/assets/animations/FADES";
import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";
import RemoveStorageVariable from "@/assets/functions/data/storage/RemoveStorageVariable";
import DisplayWorkModal from "@/assets/functions/dom/displays/DisplayWorkModal";

import styles from "../../../styles/modules/Portfolio/Portfolio.module.css";
import { MdZoomIn } from "react-icons/md";

export const PortfolioMain = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section
      id="portfolioMain"
      className={`${styles.portfolio_main} overrides_PortfolioMain`}
    >
      <div id="workModal" className={`${styles.work_modal} full-second`}>
        <div
          id="workModalCloser"
          className={`${styles.work_modal_closer}`}
          onClick={() => {
            const MODAL = document.getElementById("workModal");
            const IMG = document.getElementById("workModalImg");

            MODAL.style.pointerEvents = "none";
            MODAL.style.overflowY = "hidden";

            setTimeout(() => {
              MODAL.style.opacity = 0;
              MODAL.style.visibility = "hidden";
            }, 600);

            setTimeout(() => {
              IMG.setAttribute("data-src", "");
              RemoveStorageVariable("session", "Modal Opened");
              document.body.style.pointerEvents = "auto";
              document.body.style.overflowY = "auto";
            }, 1500);
          }}
        />

        <div className={`${styles.img_holder}`}>
          <img id="workModalImg" className="half-second" />
        </div>
      </div>

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
        <div className={`${styles.portfolio_main_inner}`}>
          <div className={`${styles.portfolio_main_inner_box} container-fluid`}>
            <div className={`${styles.portfolio_main_inner_row} row`}>
              {PORTRAIT_OBJS.map((item) => (
                <div
                  className={`${styles.portfolio_main_inner_item} portfolio-item portraits-item col-lg-4 col-md-4 col-sm-6 col-xs-12`}
                  onClick={() => {
                    DisplayWorkModal(item);
                  }}
                >
                  <BackgroundImage
                    src={item.getImg}
                    className={`${styles.bg} half-second`}
                    width="100%"
                    height="100%"
                  />

                  <div className={`${styles.overlay} half-second`}>
                    <div>
                      <MdZoomIn className={`${styles.icon}`} />

                      <span>{item.getType}</span>
                    </div>
                  </div>
                </div>
              ))}
              {BOUDOIR_OBJS.map((item) => (
                <div
                  className={`${styles.portfolio_main_inner_item} portfolio-item boudoirs-item col-lg-4 col-md-4 col-sm-6 col-xs-12`}
                  onClick={() => {
                    DisplayWorkModal(item);
                  }}
                >
                  <BackgroundImage
                    src={item.getImg}
                    className={`${styles.bg} half-second`}
                    width="100%"
                    height="100%"
                  />

                  <div className={`${styles.overlay} half-second`}>
                    <div>
                      <MdZoomIn className={`${styles.icon}`} />

                      <span>{item.getType}</span>
                    </div>
                  </div>
                </div>
              ))}
              {BLACKLIGHT_OBJS.map((item) => (
                <div
                  className={`${styles.portfolio_main_inner_item} portfolio-item blacklights-item col-lg-4 col-md-4 col-sm-6 col-xs-12`}
                  onClick={() => {
                    DisplayWorkModal(item);
                  }}
                >
                  <BackgroundImage
                    src={item.getImg}
                    className={`${styles.bg} half-second`}
                    width="100%"
                    height="100%"
                  />

                  <div className={`${styles.overlay} half-second`}>
                    <div>
                      <MdZoomIn className={`${styles.icon}`} />

                      <span>{item.getType}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

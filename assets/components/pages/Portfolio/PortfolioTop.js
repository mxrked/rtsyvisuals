/**
 *
 *  This is the portfolio top
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_IN } from "@/assets/animations/FADES";
import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Portfolio/Portfolio.module.css";
import ManipPortfolioFilterBtns from "@/assets/functions/dom/manip/ManipPortfolioFilterBtns";
import DisplayPortfolioItems from "@/assets/functions/dom/displays/DisplayPortfolioItems";

export const PortfolioTop = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section
      id="portfolioTop"
      className={`${styles.portfolio_top} overrides_PortfolioTop`}
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
        <div className={`${styles.portfolio_top_cnt}`}>
          <p className="half-second">
            Below is a majority of my current work that I have created over my
            photography career. I have captured over 100+ photos with the best
            of equipment.
          </p>

          <button
            id="viewAllBtn"
            className={`${styles.btn} ${styles.view_all_btn} portfolio-top-btn half-second`}
            onClick={(e) => {
              ManipPortfolioFilterBtns(e.currentTarget);
              DisplayPortfolioItems(e);
            }}
          >
            <span>View All</span>
          </button>

          <div className={`${styles.btns}`}>
            <button
              id="viewPortraitsBtn"
              className={`${styles.btn} ${styles.view_portraits_btn} portfolio-top-btn half-second`}
              onClick={(e) => {
                ManipPortfolioFilterBtns(e.currentTarget);
                DisplayPortfolioItems(e);
              }}
            >
              <span>Portraits</span>
            </button>
            <button
              id="viewBoudoirsBtn"
              className={`${styles.btn} ${styles.view_boudoirs_btn} portfolio-top-btn half-second`}
              onClick={(e) => {
                ManipPortfolioFilterBtns(e.currentTarget);
                DisplayPortfolioItems(e);
              }}
            >
              <span>Boudoirs</span>
            </button>
            <button
              id="viewBlacklightsBtn"
              className={`${styles.btn} ${styles.view_blacklights_btn} portfolio-top-btn half-second`}
              onClick={(e) => {
                ManipPortfolioFilterBtns(e.currentTarget);
                DisplayPortfolioItems(e);
              }}
            >
              <span>Blacklights</span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

/**
 *
 *  This is the index work
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdOutlineZoomIn } from "react-icons/md";

import {
  BG_PORTRAIT_1,
  BG_BLACKLIGHT_11,
  BG_BOUDOIR_13,
} from "@/assets/cdns/CDNBgs";

import {
  OBJ_BL_11,
  OBJ_PORT_1,
  OBJ_BOUD_13,
} from "@/assets/data/variables/OBJECTS";
import { FADES } from "@/assets/data/variables/ARRAYS";
import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";
import RemoveStorageVariable from "@/assets/functions/data/storage/RemoveStorageVariable";

import { BackgroundImage } from "react-image-and-background-image-fade";

import styles from "../../../styles/modules/Index/Index.module.css";
import DisplayWorkModal from "@/assets/functions/dom/displays/DisplayWorkModal";

export const IndexWork = () => {
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
      id="indexWork"
      className={`${styles.index_work} overrides_IndexWork`}
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
        className={`${styles.motion} fm-motion fade-down-fix full-second fade-in`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        // isMobile = true - Fade In
        // isMobile = false - Fade Down
        variants={isMobile ? FADES[0] : FADES[4]}
      >
        <div className={`${styles.index_work_inner}`}>
          <div className={`${styles.index_work_inner_top}`}>
            <div className={`${styles.index_work_inner_top_cnt}`}>
              <h1 className="half-second">A look at my work.</h1>

              <p className="half-second">
                Here are some samples of the different photography projects I
                have created over my professional history.
              </p>

              <a href="/portfolio" className="half-second">
                <span>View Work</span>
              </a>
            </div>
          </div>

          <div className={`${styles.index_work_inner_main}`}>
            <div
              className={`${styles.index_work_inner_main_box} container-fluid`}
            >
              <div className={`${styles.index_work_inner_main_row} row`}>
                <div
                  className={`${styles.index_work_inner_main_work} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
                >
                  <BackgroundImage
                    src={BG_PORTRAIT_1}
                    className={`${styles.bg} half-second`}
                  />

                  <button
                    className="half-second work-toggler"
                    onClick={() => {
                      DisplayWorkModal(OBJ_PORT_1);
                    }}
                  >
                    <MdOutlineZoomIn className={`${styles.icon}`} />
                  </button>
                </div>
                <div
                  className={`${styles.index_work_inner_main_work} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
                >
                  <BackgroundImage
                    src={BG_BLACKLIGHT_11}
                    className={`${styles.bg} half-second`}
                  />

                  <button
                    className="half-second work-toggler"
                    onClick={() => {
                      DisplayWorkModal(OBJ_BL_11);
                    }}
                  >
                    <MdOutlineZoomIn className={`${styles.icon}`} />
                  </button>
                </div>
                <div
                  className={`${styles.index_work_inner_main_work} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
                >
                  <BackgroundImage
                    src={BG_BOUDOIR_13}
                    className={`${styles.bg} half-second`}
                  />

                  <button
                    className="half-second work-toggler"
                    onClick={() => {
                      DisplayWorkModal(OBJ_BOUD_13);
                    }}
                  >
                    <MdOutlineZoomIn className={`${styles.icon}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

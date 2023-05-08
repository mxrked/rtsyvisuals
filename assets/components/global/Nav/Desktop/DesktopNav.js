/**
 *
 *  This is the desktop nav
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";

import { FADE_IN } from "@/assets/animations/FADES";
import ToggleSearch from "@/assets/functions/dom/togglers/ToggleSearch";
import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const DesktopNav = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <nav id="desktopNav" className={`${styles.desktop_nav} desktop-nav`}>
      <motion.div
        className={`${styles.motion} fm-motion fade-in full-second`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <div className={`${styles.desktop_nav_inner}`}>
          <div className={`${styles.desktop_nav_inner_box} container-fluid`}>
            <div className={`${styles.desktop_nav_inner_row} row`}>
              <div
                className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_L} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
              >
                <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                  <div className={`${styles.logo}`}>
                    <a href="/" className="half-second index-link">
                      <div>
                        <span className={`${styles.top_text}`}>
                          rtsyvisuals
                        </span>
                        <span className={`${styles.bottom_text}`}>
                          Why be normal when you can be RTSY.
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_R} col-lg-8 col-md-8 col-sm-8 col-xs-8`}
              >
                <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                  <ul className={`${styles.main_links}`}>
                    <li>
                      <a href="/" className="index-link half-second">
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <a href="/info" className="info-link half-second">
                        <span>Info</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/portfolio"
                        className="portfolio-link half-second"
                      >
                        <span>Portfolio</span>
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="services-link half-second">
                        <span>Services</span>
                      </a>
                    </li>
                    {/** <li>
                      <a href="/store" className="store-link half-second">
                        <span>Store</span>
                      </a>
                    </li> */}
                    <li>
                      <a href="/contact" className="contact-link half-second">
                        <span>Contact</span>
                      </a>
                    </li>
                  </ul>

                  <button
                    className={`${styles.sign_out} sign-out-btn half-second`}
                  >
                    <FaSignOutAlt className={`${styles.icon}`} />
                  </button>
                  <div
                    className={`${styles.login_register_link} login-register-link half-second`}
                  >
                    <a href="/login_register" className="login-register-link">
                      <span>Login/Register</span>
                    </a>
                  </div>
                  <button
                    className={`${styles.search_toggler} search-toggler half-second`}
                    onClick={() => {
                      ToggleSearch();
                    }}
                  >
                    <FaSearch className={`${styles.icon}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

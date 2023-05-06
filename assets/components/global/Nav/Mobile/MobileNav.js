/**
 *
 *  This is the mobile nav
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

import { FADE_IN } from "@/assets/animations/FADES";
import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";
import Display1Of2 from "@/assets/functions/dom/displays/Display1Of2";
import ToggleMobileNav from "@/assets/functions/dom/togglers/ToggleMobileNav";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNav = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  // Changing Login/Register Link text based on screen size
  useEffect(() => {
    const SMALL_SCREEN = "(max-width: 768px)";

    window.addEventListener("load", () => {
      Display1Of2("loginRegisterSpan", "loginRegisterIcon", SMALL_SCREEN);

      if (window.matchMedia(SMALL_SCREEN).matches) {
        document.getElementById("mobileLoginRegisterLink").style.width = "35px";
      } else {
        document.getElementById("mobileLoginRegisterLink").style.width =
          "125px";
      }
    });

    window.addEventListener("resize", () => {
      Display1Of2("loginRegisterSpan", "loginRegisterIcon", SMALL_SCREEN);

      if (window.matchMedia(SMALL_SCREEN).matches) {
        document.getElementById("mobileLoginRegisterLink").style.width = "35px";
      } else {
        document.getElementById("mobileLoginRegisterLink").style.width =
          "125px";
      }
    });
  }, [router]);

  return (
    <nav id="mobileNav" className={`${styles.mobile_nav} mobile-nav`}>
      <motion.div
        className={`${styles.motion} fm-motion fade-in full-second`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <div className={`${styles.mobile_nav_inner}`}>
          <div className={`${styles.mobile_nav_inner_box} container-fluid`}>
            <div className={`${styles.mobile_nav_inner_row} row`}>
              <div
                className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_L} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
              >
                <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                  <div className={`${styles.logo}`}>
                    <a href="/" className="half-second index-link">
                      <div>
                        <span className={`${styles.top_text}`}>
                          rtsyvisuals
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_R} col-lg-8 col-md-8 col-sm-8 col-xs-8`}
              >
                <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                  <button
                    className={`${styles.sign_out} sign-out-btn half-second`}
                  >
                    <FaSignOutAlt className={`${styles.icon}`} />
                  </button>
                  <div
                    className={`${styles.login_register_link} login-register-link half-second`}
                    id="mobileLoginRegisterLink"
                  >
                    <a
                      href="/login_register"
                      className="nav-link login-register-link"
                    >
                      <MdAccountCircle
                        id="loginRegisterIcon"
                        className={`${styles.icon}`}
                      />
                      <span id="loginRegisterSpan">Login/Register</span>
                    </a>
                  </div>
                  <button
                    className={`${styles.search_toggler} search-toggler half-second`}
                  >
                    <FaSearch className={`${styles.icon}`} />
                  </button>

                  <button
                    id="mobileNavMenuToggler"
                    className={`${styles.mobile_nav_menu_toggler}`}
                    onClick={() => {
                      ToggleMobileNav();
                    }}
                  >
                    <span className="half-second" />
                    <span className="half-second" />
                    <span className="half-second" />
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

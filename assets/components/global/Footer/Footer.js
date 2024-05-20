/**
 *
 *  This is the footer
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { FaInstagram, FaFacebook, FaCopyright } from "react-icons/fa";

import styles from "../../../styles/modules/Footer/Footer.module.css";

export const Footer = () => {
  // Adding current year to copyright
  useEffect(() => {
    const CURRENT_YEAR = new Date().getFullYear();

    document.getElementById("currentYear").innerHTML = CURRENT_YEAR;
  }, []);

  return (
    <footer
      id="footer"
      className={`${styles.footer} fm-motion full-second overrides_Footer`}
    >
      <div className={`${styles.footer_top}`}>
        <div className={`${styles.footer_top_inner}`}>
          <div className={`${styles.footer_top_inner_box} container-fluid`}>
            <div className={`${styles.footer_top_inner_row} row`}>
              <div
                className={`${styles.footer_top_inner_side} ${styles.footer_top_L} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
              >
                <div className={`${styles.footer_top_inner_side_cnt}`}>
                  <div className={`${styles.logo}`}>
                    <a href="/" className="index-link half-second">
                      <h1>rtsyvisuals</h1>

                      <span>Why be normal when you can be RTSY.</span>
                    </a>
                  </div>

                  <ul className={`${styles.contact}`}>
                    <li>+1 (336)-816-2199</li>
                    <li>rtsyvisuals@gmail.com</li>
                  </ul>

                  <ul className={`${styles.socials}`}>
                    <li>
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
                    </li>
                    <li>
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
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`${styles.footer_top_inner_side} ${styles.footer_top_R} col-lg-8 col-md-8 col-sm-8 col-xs-8`}
              >
                <div className={`${styles.footer_top_inner_side_cnt}`}>
                  <ul className={`${styles.links}`}>
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
                  </ul>
                  <ul className={`${styles.links}`}>
                    <li>
                      <a href="/services" className="services-link half-second">
                        <span>Services</span>
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="contact-link half-second">
                        <span>Contact</span>
                      </a>
                    </li>
                    <li></li>
                    {/**
                    <li>
                      <a href="/sitemap.xml" className="half-second">
                        <span>Sitemap</span>
                      </a>
                    </li>
                    */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.footer_bottom}`}>
        <div className={`${styles.footer_bottom_cnt}`}>
          Website created by{" "}
          <a
            href="https://dynamicwebtechnologies.com/"
            target={"_blank"}
            className="orientation-change-element half-second"
          >
            Dynamic Web Technologies
          </a>
        </div>
      </div>
    </footer>
  );
};

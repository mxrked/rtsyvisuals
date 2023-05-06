/**
 *
 *  This is the mobile nav menu
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { FaTimes } from "react-icons/fa";

import CloseMobileNav from "@/assets/functions/dom/closers/CloseMobileNav";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNavMenu = () => {
  return (
    <div id="mobileNavMenu" className={`${styles.mobile_nav_menu}`}>
      <div
        id="mobileNavMenuDarken"
        className={`${styles.darken} full-second`}
        onClick={() => {
          CloseMobileNav();
        }}
      />

      <div
        id="mobileNavMenuMain"
        className={`${styles.mobile_nav_menu_main} full-second`}
      >
        <div id="mobileNavMenuMainCnt" className="half-second">
          <div className={`${styles.mobile_nav_menu_main_top}`}>
            <button
              className="half-second"
              onClick={() => {
                CloseMobileNav();
              }}
            >
              <FaTimes className={`${styles.icon}`} />
            </button>
          </div>

          <ul>
            <li>
              <a href="/" className="nav-link index-link half-second">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/info" className="nav-link info-link half-second">
                <span>Info</span>
              </a>
            </li>
            <li>
              <a
                href="/portfolio"
                className="nav-link portfolio-link half-second"
              >
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="nav-link services-link half-second"
              >
                <span>Services</span>
              </a>
            </li>
            <li>
              <a href="/store" className="nav-link store-link half-second">
                <span>Store</span>
              </a>
            </li>
            <li>
              <a href="/contact" className="nav-link contact-link half-second">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

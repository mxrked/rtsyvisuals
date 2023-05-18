/**
 *
 *  This is the search
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { FaSearch, FaTimes } from "react-icons/fa";

import CloseSearch from "@/assets/functions/dom/closers/CloseSearch";
import SearchRouting from "@/assets/functions/routing/SearchRouting";
import FilterSearchLinks from "@/assets/functions/dom/filters/FilterSearchLinks";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const Search = () => {
  const router = useRouter();

  return (
    <div id="search" className={`${styles.search} full-second`}>
      <div className={`${styles.search_inner} half-second`} id="searchInner">
        <div className={`${styles.search_inner_top}`}>
          <span className="half-second">Search</span>

          <button
            className="half-second"
            onClick={() => {
              CloseSearch();
            }}
          >
            <FaTimes className={`${styles.icon}`} />
          </button>
        </div>

        <div className={`${styles.search_inner_input_holder}`}>
          <input
            type="text"
            id="searchInput"
            placeholder="Search something.."
            className="half-second"
            onKeyPress={(e) => {
              if (e.key == "Enter") {
                SearchRouting(e, window);
              }
            }}
            onKeyUp={(e) => {
              FilterSearchLinks();
            }}
          />

          <button
            id="searchGo"
            className="half-second"
            onClick={(e) => {
              SearchRouting(e, window);
            }}
          >
            <FaSearch className={`${styles.icon}`} />
          </button>
        </div>

        <ul id="searchLinks">
          <li>
            <a href="/" className="index-link search-link half-second">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/info" className="info-link search-link half-second">
              <span>Info</span>
            </a>
          </li>
          <li>
            <a
              href="/portfolio"
              className="portfolio-link search-link half-second"
            >
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="services-link search-link half-second"
            >
              <span>Services</span>
            </a>
          </li>
          <li>
            <a
              href="/services#portraits"
              className="services-link search-link half-second"
            >
              <span>Portraits</span>
            </a>
          </li>
          {/***  <li>
            <a
              href="/services#projections"
              className="services-link search-link half-second"
            >
              <span>Projections</span>
            </a>
          </li> */}
          <li>
            <a
              href="/services#boudoirs"
              className="services-link search-link half-second"
            >
              <span>Boudoirs</span>
            </a>
          </li>
          <li>
            <a
              href="/services#blacklights"
              className="services-link search-link half-second"
            >
              <span>Blacklights</span>
            </a>
          </li>
          {/** <li>
            <a href="/store" className="store-link search-link half-second">
              <span>Store</span>
            </a>
          </li> */}
          <li>
            <a href="/contact" className="contact-link search-link half-second">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

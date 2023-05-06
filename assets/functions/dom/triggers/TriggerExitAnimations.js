/**
 *
 *  This is used to trigger the exit animations for framer-motion
 *
 */

import DeclareStorageVariable from "../../data/storage/DeclareStorageVariable";
import CloseMobileNav from "../closers/CloseMobileNav";
// import CloseSearch from "../closers/CloseSearch";

function TriggerExitAnimations() {
  document.querySelectorAll("a").forEach((link) => {
    //! Regular Links
    if (
      !link.classList.contains("nav-link") &&
      !link.classList.contains("search-link")
    ) {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        // Storing href
        DeclareStorageVariable("session", "HREF", link.href);

        // Disabling pointer events and scrolling
        document.body.style.overflowY = "hidden";
        document.body.style.pointerEvents = "none";

        // Hiding elements
        document.querySelectorAll(".fm-motion").forEach((fm) => {
          fm.style.opacity = 0;
        });

        // Route to href value
        setTimeout(() => {
          window.location.href = sessionStorage.getItem("HREF");
        }, 1000);
      });
    }

    //! Mobile Nav Links
    if (
      link.classList.contains("nav-link") ||
      link.classList.contains("search-link")
    ) {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        // Storing href
        DeclareStorageVariable("session", "HREF", link.href);

        // Closing the mobile nav and search
        CloseMobileNav();
        // CloseSearch();

        // Disabling pointer events and scrolling
        setTimeout(() => {
          document.body.style.overflowY = "hidden";
          document.body.style.pointerEvents = "none";
        }, 2300);

        // Hiding elements
        setTimeout(() => {
          document.querySelectorAll(".fm-motion").forEach((fm) => {
            fm.style.opacity = 0;
          });
        }, 2320);

        // Route to href value
        setTimeout(() => {
          window.location.href = sessionStorage.getItem("HREF");
        }, 2400);
      });
    }
  });
}

function TriggerExitAnimations_NON_LINKS() {
  // Disabling pointer events and scrolling
  document.body.style.overflowY = "hidden";
  document.body.style.pointerEvents = "none";

  // Hiding elements
  document.querySelectorAll(".fm-motion").forEach((fm) => {
    fm.style.opacity = 0;
  });
}

export { TriggerExitAnimations, TriggerExitAnimations_NON_LINKS };

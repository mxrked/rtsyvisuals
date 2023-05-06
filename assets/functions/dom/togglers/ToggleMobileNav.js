/**
 *
 *  This is used to toggle the mobile nav menu
 *
 */

import DeclareStorageVariable from "../../data/storage/DeclareStorageVariable";

export default function ToggleMobileNav() {
  const DARKEN = document.getElementById("mobileNavMenuDarken");
  const MAIN = document.getElementById("mobileNavMenuMain");
  const CNT = document.getElementById("mobileNavMenuMainCnt");

  document.body.style.overflowY = "hidden";
  document.body.style.pointerEvents = "none";

  DeclareStorageVariable("session", "Mobile Nav Opened", true);

  DARKEN.style.display = "block";
  MAIN.style.display = "block";

  setTimeout(() => {
    DARKEN.style.opacity = 1;
    DARKEN.style.visibility = "visible";
  }, 500);

  setTimeout(() => {
    MAIN.style.opacity = 1;
    MAIN.style.visibility = "visible";
    MAIN.style.transform = "translateX(0)";
  }, 1000);

  setTimeout(() => {
    CNT.style.opacity = 1;
    CNT.style.visibility = "visible";
  }, 1400);

  setTimeout(() => {
    DARKEN.style.pointerEvents = "auto";
    MAIN.style.pointerEvents = "auto";
    MAIN.style.overflowY = "auto";
  }, 2000);
}

/**
 *
 *  This is to close the mobile nav
 *
 */

import RemoveStorageVariable from "../../data/storage/RemoveStorageVariable";

export default function CloseMobileNav() {
  const DARKEN = document.getElementById("mobileNavMenuDarken");
  const MAIN = document.getElementById("mobileNavMenuMain");
  const CNT = document.getElementById("mobileNavMenuMainCnt");

  //   document.body.style.overflowY = "hidden";
  //   document.body.style.pointerEvents = "none";

  //   DeclareStorageVariable("session", "Mobile Nav Opened", true);

  //   DARKEN.style.display = "block";
  //   MAIN.style.display = "block";

  //   setTimeout(() => {
  //     DARKEN.style.opacity = 1;
  //     DARKEN.style.visibility = "visible";
  //   }, 500);

  //   setTimeout(() => {
  //     MAIN.style.opacity = 1;
  //     MAIN.style.visibility = "visible";
  //     MAIN.style.transform = "translateX(0)";
  //   }, 1000);

  //   setTimeout(() => {
  //     DARKEN.style.pointerEvents = "auto";
  //     MAIN.style.pointerEvents = "auto";
  //     MAIN.style.overflowY = "auto";
  //   }, 2000);

  DARKEN.style.pointerEvents = "none";
  MAIN.style.pointerEvents = "none";
  MAIN.style.overflowY = "hidden";
  CNT.style.opacity = 0;
  CNT.style.visibility = "hidden";

  setTimeout(() => {
    MAIN.style.opacity = 0;
    MAIN.style.visibility = "hidden";
    MAIN.style.transform = "translateX(100%)";
  }, 700);

  setTimeout(() => {
    DARKEN.style.opacity = 0;
    DARKEN.style.visibility = "hidden";
  }, 1000);

  setTimeout(() => {
    RemoveStorageVariable("session", "Mobile Nav Opened");
    document.body.style.overflowY = "auto";
    document.body.style.pointerEvents = "auto";
  }, 2300);
}

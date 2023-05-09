/**
 *
 *  This is used to display the work modal
 *
 */

import DeclareStorageVariable from "../../data/storage/DeclareStorageVariable";

export default function DisplayWorkModal(obj) {
  const MODAL = document.getElementById("workModal");
  const IMG = document.getElementById("workModalImg");

  document.body.style.pointerEvents = "none";
  document.body.style.overflowY = "hidden";

  DeclareStorageVariable("session", "Modal Opened", true);

  MODAL.style.display = "block";
  IMG.src = obj.getImg;

  setTimeout(() => {
    MODAL.style.opacity = 1;
    MODAL.style.visibility = "visible";
  }, 700);

  setTimeout(() => {
    MODAL.style.pointerEvents = "auto";
  }, 1400);
}

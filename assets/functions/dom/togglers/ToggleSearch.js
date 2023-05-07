/**
 *
 *  This is used to toggle the search
 *
 */

import DeclareStorageVariable from "../../data/storage/DeclareStorageVariable";

export default function ToggleSearch() {
  const SEARCH = document.getElementById("search");
  const INNER = document.getElementById("searchInner");

  DeclareStorageVariable("session", "Search Opened", true);

  document.body.style.overflowY = "hidden";
  document.body.style.pointerEvents = "none";

  SEARCH.style.display = "flex";

  setTimeout(() => {
    SEARCH.style.opacity = 1;
    SEARCH.style.visibility = "visible";
  }, 700);

  setTimeout(() => {
    INNER.style.opacity = 1;
    INNER.style.visibility = "visible";
  }, 1300);

  setTimeout(() => {
    SEARCH.style.pointerEvents = "auto";
    SEARCH.style.overflowY = "auto";
  }, 1900);
}

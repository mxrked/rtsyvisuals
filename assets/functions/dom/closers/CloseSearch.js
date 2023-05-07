/**
 *
 *  This is used to close the search
 *
 */

import RemoveStorageVariable from "../../data/storage/RemoveStorageVariable";

export default function CloseSearch() {
  const SEARCH = document.getElementById("search");
  const INNER = document.getElementById("searchInner");

  SEARCH.style.pointerEvents = "none";
  SEARCH.style.overflowY = "hidden";
  INNER.style.opacity = 0;
  INNER.style.visibility = "hidden";

  setTimeout(() => {
    SEARCH.style.opacity = 0;
    SEARCH.style.visibility = "hidden";
  }, 700);

  setTimeout(() => {
    RemoveStorageVariable("session", "Search Opened");
    document.body.style.overflowY = "auto";
    document.body.style.pointerEvents = "auto";
  }, 1400);
}

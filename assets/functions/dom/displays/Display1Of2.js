/**
 *
 *  This is used to display 1 of 2 different elements based on the window size
 *
 */

export default function Display1Of2(a, b, mQ) {
  if (window.matchMedia(mQ).matches) {
    document.getElementById(a).style.display = "none";
    document.getElementById(b).style.display = "block";
  } else {
    document.getElementById(a).style.display = "block";
    document.getElementById(b).style.display = "none";
  }
}

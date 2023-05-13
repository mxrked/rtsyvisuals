/**
 *
 *  This is used to change the behavior of certain page link(s)
 *
 */

export default function ManipPageLink(manipState, type, linkClass) {
  if (manipState == "enable") {
    if (type == "single") {
      document.querySelector(linkClass).style.opacity = 1;
      document.querySelector(linkClass).style.pointerEvents = "auto";
    }

    if (type == "multiple") {
      document.querySelectorAll(linkClass).forEach((link) => {
        link.style.opacity = 1;
        link.style.pointerEvents = "auto";
      });
    }
  }

  if (manipState == "disable") {
    if (type == "single") {
      document.querySelector(linkClass).style.opacity = 0.5;
      document.querySelector(linkClass).style.pointerEvents = "none";
    }

    if (type == "multiple") {
      document.querySelectorAll(linkClass).forEach((link) => {
        link.style.opacity = 0.5;
        link.style.pointerEvents = "none";
      });
    }
  }
}

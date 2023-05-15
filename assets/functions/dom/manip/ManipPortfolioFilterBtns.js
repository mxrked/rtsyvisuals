/**
 *
 *  This is used to enable/disable a portfolio top filter btn
 *
 */

export default function ManipPortfolioFilterBtns(btn) {
  const BTNS = document.querySelectorAll(".portfolio-top-btn");

  // This is used to disable the view all btn by default
  if (typeof btn === "undefined") {
    if (window.location.href.indexOf("portfolio") > -1) {
      BTNS[0].style.opacity = 0.5;
      BTNS[0].style.pointerEvents = "none";
      BTNS[0].style.userSelect = "none";
    }
  }

  // This is used to check if a button has been clicked
  if (typeof btn !== "undefined") {
    // Enabling all btns
    BTNS.forEach((button) => {
      button.style.pointerEvents = "auto";
      button.style.opacity = 1;
    });

    // Disabling btn
    btn.style.pointerEvents = "none";
    btn.style.opacity = 0.5;
    btn.style.userSelect = "none";
  }
}

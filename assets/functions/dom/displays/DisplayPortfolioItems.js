/**
 *
 *  This is used to display a type or all of the portfolio items
 *
 */

function HideAllPortfolioItems() {
  document.querySelectorAll(".portfolio-item").forEach((item) => {
    item.style.display = "none";
  });
}

function DisplayByType(type) {
  document.querySelectorAll(type).forEach((item) => {
    item.style.display = "block";
  });
}

export default function DisplayPortfolioItems(e) {
  const BTNS = document.querySelectorAll(".portfolio-top-btn");

  // View All
  if (e.currentTarget === BTNS[0]) {
    // HideAllPortfolioItems();

    console.log("View All Clicked");

    document.querySelectorAll(".portfolio-item").forEach((item) => {
      item.style.display = "block";
    });
  }

  // Portraits
  if (e.currentTarget === BTNS[1]) {
    console.log("Portraits Clicked");

    HideAllPortfolioItems();

    DisplayByType(".portraits-item");
  }

  // Boudoirs
  if (e.currentTarget === BTNS[2]) {
    console.log("Boudoirs Clicked");

    HideAllPortfolioItems();

    DisplayByType(".boudoirs-item");
  }

  // Blacklights
  if (e.currentTarget === BTNS[3]) {
    console.log("Blacklights Clicked");

    HideAllPortfolioItems();

    DisplayByType(".blacklights-item");
  }
}

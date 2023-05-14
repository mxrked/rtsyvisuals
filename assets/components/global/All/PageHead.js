/**
 *
 *  This is the page's meta data and tab settings
 *
 */

import { useRouter } from "next/router";

import Head from "next/head";

import {
  INDEX_KWS,
  INFO_KWS,
  CONTACT_KWS,
  STORE_KWS,
  SERVICES_KWS,
  PORTFOLIO_KWS,
} from "@/assets/data/variables/ARRAYS";

export const PageHead = () => {
  const router = useRouter();

  //! Descriptions
  const INDEX_DESC =
    "RTSYVisuals is dedicated to Rick Dingwall, a medical certified photographer who has a passion for taking photos.";
  const INFO_DESC =
    "Learn Rick's background and why he has a passion for photography and how he works.";
  const STORE_DESC =
    "RTSYVisuals is selling different photography based products ranging from calendars to so much more.";
  const CONTACT_DESC =
    "If you are in need to contacting or reaching out to Rick for any reason, you can do so easily.";
  const SERVICES_DESC =
    "Rick provides 4 different types of services: Portraits, Projections, Blacklights and Packages.";
  const PORTFOLIO_DESC =
    "View Rick's current portfolio which hosts all of his work he has created of the years.";

  const DESCS = [
    INDEX_DESC,
    INFO_DESC,
    STORE_DESC,
    CONTACT_DESC,
    SERVICES_DESC,
    PORTFOLIO_DESC,
  ];

  let desc;
  let kws;
  let title;
  let robots;
  let url;

  // Index Page
  if (router.pathname == "/") {
    title = "RTSYVisuals - Home";
    robots = "index, follow";
    url = router.pathname;

    if (INDEX_DESC.length > 0) {
      desc = DESCS[0];
    } else {
      desc = DESCS[0];
    }

    kws = INDEX_KWS;
  }
  // // Store Page
  // if (router.pathname == "/store") {
  //   title = "RTSYVisuals - Store";
  //   robots = "index, follow";
  //   url = router.pathname;

  //   if (STORE_DESC.length > 0) {
  //     desc = DESCS[2];
  //   } else {
  //     desc = DESCS[2];
  //   }

  //   if (STORE_KWS.length > 0) {
  //     kws = STORE_KWS;
  //   } else {
  //     kws = "No keywords";
  //   }
  // }
  // Info Page
  if (router.pathname == "/info") {
    title = "RTSYVisuals - Info";
    robots = "index, follow";
    url = router.pathname;

    if (INFO_DESC.length > 0) {
      desc = DESCS[1];
    } else {
      desc = DESCS[1];
    }

    if (INFO_KWS.length > 0) {
      kws = INFO_KWS;
    } else {
      kws = "No keywords";
    }
  }
  // Contact Page
  if (router.pathname == "/contact") {
    title = "RTSYVisuals - Contact";
    robots = "index, follow";
    url = router.pathname;

    if (CONTACT_DESC.length > 0) {
      desc = DESCS[3];
    } else {
      desc = DESCS[3];
    }

    if (CONTACT_DESC.length > 0) {
      kws = CONTACT_KWS;
    } else {
      kws = "No keywords";
    }
  }
  // Services Page
  if (router.pathname == "/services") {
    title = "RTSYVisuals - Services";
    robots = "index, follow";
    url = router.pathname;

    if (SERVICES_DESC.length > 0) {
      desc = DESCS[4];
    } else {
      desc = DESCS[4];
    }

    if (SERVICES_KWS.length > 0) {
      kws = SERVICES_KWS;
    } else {
      kws = "No keywords";
    }
  }
  // Portfolio Page
  if (router.pathname == "/portfolio") {
    title = "RTSYVisuals - Portfolio";
    robots = "index, follow";
    url = router.pathname;

    if (PORTFOLIO_DESC.length > 0) {
      desc = DESCS[5];
    } else {
      desc = DESCS[5];
    }

    if (PORTFOLIO_KWS.length > 0) {
      kws = PORTFOLIO_KWS;
    } else {
      kws = "No keywords";
    }
  }
  // // Login/Register Page
  // if (router.pathname == "/login_register") {
  //   title = "RTSYVisuals - Login/Register";
  //   robots = "no index, no follow";
  //   desc = "No description";
  //   kws = "No keywords";
  //   url = router.pathname;
  // }
  // 404 Page
  if (router.pathname == "/404") {
    title = "RTSYVisuals - 404";
    robots = "no index, no follow";
    desc = "No description";
    kws = "No keywords";
    url = router.pathname;
  }

  return (
    <Head id="pageHead">
      <title>{title}</title>

      <meta name="keywords" content={kws} />
      <meta name="description" content={desc} />
      <meta name="robots" content={robots} />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:url" content={url} />

      <link rel="canonical" href={url} />

      <link
        rel="shortcut icon"
        href="https://raw.githubusercontent.com/mxrked/rtsyvisuals_cdn/main/icons/tab-icons/favicon.ico"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://raw.githubusercontent.com/mxrked/rtsyvisuals_cdn/main/icons/tab-icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://raw.githubusercontent.com/mxrked/rtsyvisuals_cdn/main/icons/tab-icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://raw.githubusercontent.com/mxrked/rtsyvisuals_cdn/main/icons/tab-icons/favicon-16x16.png"
      />
    </Head>
  );
};

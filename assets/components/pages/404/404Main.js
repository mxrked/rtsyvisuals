/**
 *
 *  This is the 404 Main
 *
 */

import styles from "../../../styles/modules/404/404.module.css";

export const NotFoundMain = () => {
  return (
    <section
      id="404Main"
      className={`${styles.not_found_main} overrides_404Main`}
    >
      <div className={`${styles.not_found_main_cnt}`}>
        <h1 className="half-second">404.</h1>

        <p className="half-second">
          The page you are looking for does not exist. Please proceed back to
          the home/index page.
        </p>

        <a href="/" className="half-second index-page">
          <span>Go Home</span>
        </a>
      </div>
    </section>
  );
};

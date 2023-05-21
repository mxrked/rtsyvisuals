/**
 *
 *  This is the Contact Form
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_IN } from "@/assets/animations/FADES";
import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";
import EmailSend from "@/assets/functions/data/email/EmailSend";

import styles from "../../../styles/modules/Contact/Contact.module.css";

export const ContactForm = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  // Displaying success_message if submission was sent
  useEffect(() => {
    if (sessionStorage.getItem("Submission Sent")) {
      document.getElementById("formSentSuccessfully").style.opacity = 1;
    }
  }, []);

  return (
    <section id="contactFormHolder" className={`${styles.contact_form_holder}`}>
      <motion.div
        className={`${styles.motion} fm-motion full-second fade-in`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        // isMobile = true - Fade In
        // isMobile = false - Fade Up
        // variants={isMobile ? FADES[0] : FADES[3]}
        variants={FADE_IN}
      >
        <div className={`${styles.contact_form_holder_inner}`}>
          <span
            id="formSentSuccessfully"
            className={`${styles.success_message}`}
          >
            Submission sent!
          </span>

          <form
            noValidate="noValidate"
            autoComplete={"false"}
            id="contactForm"
            className={`${styles.contact_form}`}
            onSubmit={(e) => {
              EmailSend(router, e);
            }}
          >
            <div className={`${styles.contact_form_double_group}`}>
              <div className={`${styles.contact_form_set}`}>
                <input
                  type="text"
                  id="formFN"
                  name="first_name"
                  className="half-second"
                  placeholder="First Name"
                  autoComplete={"off"}
                  role={"presentation"}
                />
              </div>
              <div className={`${styles.contact_form_set}`}>
                <input
                  type="text"
                  id="formLN"
                  name="last_name"
                  className="half-second"
                  placeholder="Last Name"
                  autoComplete={"off"}
                  role={"presentation"}
                />
              </div>
            </div>
            <div className={`${styles.contact_form_double_group}`}>
              <div className={`${styles.contact_form_set}`}>
                <input
                  type="email"
                  id="formEmail"
                  name="from_email"
                  className="half-second"
                  placeholder="Email Address"
                  autoComplete={"off"}
                  role={"presentation"}
                />
              </div>
              <div className={`${styles.contact_form_set}`}>
                <div>
                  <span className={`${styles.top_span} half-second`}>
                    * Add your country code before your full number. (Ex: +1...)
                  </span>
                  <input
                    type="tel"
                    id="formPhone"
                    name="phone"
                    className="half-second"
                    placeholder="Phone Number"
                    autoComplete={"off"}
                    role={"presentation"}
                  />
                  <span className={`${styles.bottom_span} half-second`}>
                    * Add your country code before your full number. (Ex: +1...)
                  </span>
                </div>
              </div>
            </div>
            <div className={`${styles.contact_form_single_group}`}>
              <div className={`${styles.contact_form_set}`}>
                <input
                  type="text"
                  id="formSubject"
                  name="subject"
                  className="half-second"
                  placeholder="Subject"
                  autoComplete={"off"}
                  role={"presentation"}
                />
              </div>
            </div>
            <div className={`${styles.contact_form_single_group}`}>
              <div className={`${styles.contact_form_set}`}>
                <textarea
                  data-gram="false"
                  data-disable-grammarly="true"
                  id="formMessage"
                  name="message"
                  className="half-second"
                  placeholder="Message"
                />
              </div>
            </div>

            <div className={`${styles.btns}`}>
              <button
                type={"submit"}
                className={`${styles.submit_btn} half-second`}
              >
                <span>Send</span>
              </button>

              <button
                type={"reset"}
                className={`${styles.reset_btn} half-second`}
              >
                <span>Clear</span>
              </button>
            </div>
          </form>

          <span id="formNotice" className={`${styles.form_notice}`}>
            PLACE_TEXT_HERE
          </span>
        </div>
      </motion.div>
    </section>
  );
};

/**
 *
 *  This is used to send an email to rtsyvisualsemail@gmail.com using EmailJS
 *
 */

import emailjs from "@emailjs/browser";

import CheckValidEmail from "./CheckValidEmail";
import CheckValidPhoneNumber from "./CheckValidPhoneNumber";
import DeclareStorageVariable from "../storage/DeclareStorageVariable";

const SERVICE_ID = "service_sjf3zeb";
const TEMPLATE_ID = "template_jcq9isf";
const PUBLIC_KEY = "bT7Z2ZBkumqlNpl-Y";

emailjs.init(PUBLIC_KEY);

function CheckForSpaceInFirstCharacter(input) {
  const CHECK_FOR_SPACE = /^\s/.test(input.value);

  if (CHECK_FOR_SPACE) {
    return true;
  } else {
    return false;
  }
}

export default function EmailSend(rooter, formTarget) {
  const FORM_NOTICE = document.getElementById("formNotice");
  const FN = document.getElementById("formFN");
  const LN = document.getElementById("formLN");
  const EMAIL = document.getElementById("formEmail");
  const PHONE = document.getElementById("formPhone");
  const SUBJECT = document.getElementById("formSubject");
  const MESSAGE = document.getElementById("formMessage");
  const TEMPLATE_PARAMS = {
    first_name: FN.value,
    last_name: LN.value,
    from_email: EMAIL.value,
    phone: PHONE.value,
    subject: SUBJECT.value,
    message: MESSAGE.value,
  };

  const CHECK_EMAIL = CheckValidEmail(EMAIL);
  const CHECK_PHONE = CheckValidPhoneNumber(PHONE);
  const SPACE_FN = CheckForSpaceInFirstCharacter(FN);
  const SPACE_LN = CheckForSpaceInFirstCharacter(LN);
  const SPACE_EMAIL = CheckForSpaceInFirstCharacter(EMAIL);
  const SPACE_SUBJECT = CheckForSpaceInFirstCharacter(SUBJECT);
  const SPACE_MESSAGE = CheckForSpaceInFirstCharacter(MESSAGE);

  let nonEmptyInputs = false;
  let noSpacesAsFirstCharacter = false;
  let validEmail = false;
  let validPhone = false;
  let sentSuccess = false; // This is used to determine if the email was sent successfully

  //   // Prevent send
  formTarget.preventDefault();

  // Checking if all fields are valid, then sends email
  if (
    FN.value != "" &&
    LN.value != "" &&
    EMAIL.value != "" &&
    PHONE.value != "" &&
    SUBJECT.value != "" &&
    MESSAGE.value != ""
  ) {
    nonEmptyInputs = true;

    FORM_NOTICE.style.opacity = 0;
    FORM_NOTICE.innerHTML = "Test";

    if (CHECK_EMAIL) {
      validEmail = true;

      FORM_NOTICE.style.opacity = 0;
      FORM_NOTICE.innerHTML = "Test";

      if (CHECK_PHONE) {
        validPhone = true;

        FORM_NOTICE.style.opacity = 0;
        FORM_NOTICE.innerHTML = "Test";

        if (
          !SPACE_FN &&
          !SPACE_LN &&
          !SPACE_EMAIL &&
          !SPACE_SUBJECT &&
          !SPACE_MESSAGE
        ) {
          noSpacesAsFirstCharacter = true;

          FORM_NOTICE.style.opacity = 0;
          FORM_NOTICE.innerHTML = "Test";

          formTarget.preventDefault();

          // Sending email after all valid checks
          emailjs
            .send(SERVICE_ID, TEMPLATE_ID, TEMPLATE_PARAMS)
            .then((res) => {
              console.log("Email sent successfully: " + res);

              sentSuccess = true;

              DeclareStorageVariable("session", "Submission Sent", true);

              setTimeout(() => {
                if (sentSuccess) {
                  rooter.reload();
                }
              }, 300);
            })
            .catch((error) => {
              console.error("Error sending email: " + error);
            });
        } else {
          noSpacesAsFirstCharacter = false;

          FORM_NOTICE.style.opacity = 1;
          FORM_NOTICE.innerHTML =
            "Error: You cannot have a space as the first character in an input.";
        }
      } else {
        validPhone = false;

        FORM_NOTICE.style.opacity = 1;
        FORM_NOTICE.innerHTML = "Error: That is an invalid phone number.";
      }
    } else {
      validEmail = false;

      FORM_NOTICE.style.opacity = 1;
      FORM_NOTICE.innerHTML = "Error: That is an invalid email address.";
    }
  } else {
    nonEmptyInputs = false;

    FORM_NOTICE.style.opacity = 1;
    FORM_NOTICE.innerHTML = "Error: You cannot have empty inputs.";
  }

  //   if (
  //     FN.value == "" ||
  //     LN.value == "" ||
  //     EMAIL.value == "" ||
  //     PHONE.value == "" ||
  //     SUBJECT.value == "" ||
  //     MESSAGE.value == ""
  //   ) {
  //     nonEmptyInputs = false;

  //     FORM_NOTICE.innerHTML = "Error: You cannot have empty inputs.";
  //   }

  //   if (
  //     FN.value != "" &&
  //     LN.value != "" &&
  //     EMAIL.value != "" &&
  //     PHONE.value != "" &&
  //     SUBJECT.value != "" &&
  //     MESSAGE.value != ""
  //   ) {
  //     nonEmptyInputs = true;

  //     FORM_NOTICE.innerHTML = "Test";
  //   }

  //   if (CHECK_EMAIL) {
  //     validEmail = true;

  //     FORM_NOTICE.innerHTML = "Test";
  //   } else {
  //     validEmail = false;

  //     FORM_NOTICE.innerHTML = "Error: That is an invalid email address.";
  //   }

  //   if (CHECK_PHONE) {
  //     validPhone = true;

  //     FORM_NOTICE.innerHTML = "Test";
  //   } else {
  //     validPhone = false;

  //     FORM_NOTICE.innerHTML = "Error: That is an invalid phone number.";
  //   }

  //   if (
  //     !SPACE_FN &&
  //     !SPACE_LN &&
  //     !SPACE_EMAIL &&
  //     !SPACE_SUBJECT &&
  //     !SPACE_MESSAGE
  //   ) {
  //     noSpacesAsFirstCharacter = true;

  //     FORM_NOTICE.innerHTML = "Test";
  //   } else {
  //     noSpacesAsFirstCharacter = false;

  //     FORM_NOTICE.innerHTML =
  //       "Error: You cannot have a space as the first character in an input.";
  //   }

  //   if (nonEmptyInputs && noSpacesAsFirstCharacter && validEmail && validPhone) {

  //   }
}

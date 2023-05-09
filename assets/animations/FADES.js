/**
 *
 *  This is the fade animations
 *
 */

const FADE_IN = {
  visible: {
    opacity: 1,
    transition: { duration: 0.9, delay: 1 },
  },
  hidden: {
    opacity: 0,
  },
};

const FADE_LEFT = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9 },
  },
  hidden: {
    opacity: 0,
    x: 50,
  },
};
const FADE_RIGHT = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9 },
  },
  hidden: {
    opacity: 0,
    x: -50,
  },
};

const FADE_DOWN = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
  hidden: {
    opacity: 0,
    y: -50,
  },
};

export { FADE_IN, FADE_LEFT, FADE_RIGHT, FADE_DOWN };

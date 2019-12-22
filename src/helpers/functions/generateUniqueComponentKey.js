/**
 * Generate a random key for component
 *
 * @returns {Number}
 */
const generateUniqueComponentKey = () =>
  Math.random()
    .toString(36)
    .substring(2, 5) +
  Math.random()
    .toString(36)
    .substring(2, 5);

export default generateUniqueComponentKey;

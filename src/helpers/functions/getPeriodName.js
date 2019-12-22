/**
 * Get the displayable period name from period index
 *
 * @param {String|Number} period
 * @returns {String}
 */
const getPeriodName = period => {
  switch (parseInt(period, 10)) {
    case 0:
      return 'Petit déjeuner';
    case 1:
      return 'Déjeuner';
    case 2:
      return 'Goûter';
    case 3:
      return 'Dîner';
    default:
      return 'Indéterminé';
  }
};

export default getPeriodName;

/**
 * Get the displayable day name from day index
 *
 * @param {String} day
 * @returns {String}
 */
const getDayName = day => {
  switch (day) {
    case 'monday':
      return 'Lundi';
    case 'thuesday':
      return 'Mardi';
    case 'wednesday':
      return 'Mercredi';
    case 'thursday':
      return 'Jeudi';
    case 'Friday':
      return 'Vendredi';
    case 'saturday':
      return 'Samedi';
    case 'sunday':
      return 'Dimanche';
    default:
      return 'Indéterminé';
  }
};

export default getDayName;
/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
if (year < 1971 || year > 2100) {
    return 'Invalid year';
  }

  const inputDate = new Date(year, month - 1, day);
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long'
  });

  return dateFormatter.format(inputDate);
};
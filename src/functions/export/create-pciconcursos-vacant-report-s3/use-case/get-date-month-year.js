function getDateMonthYearStringFromDate(eventDate) {
  const date = new Date(eventDate);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

module.exports = getDateMonthYearStringFromDate;

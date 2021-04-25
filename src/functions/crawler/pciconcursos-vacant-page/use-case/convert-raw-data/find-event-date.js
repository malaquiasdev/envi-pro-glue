function findElementEventDate($, element) {
  const regexDate = new RegExp('(\\d{2})[/](\\d{2})[/](\\d{4})');
  const fullEventDateText = $(element).find('div.ce').text();
  const piecesOfDate = regexDate.exec(fullEventDateText);
  if (!Array.isArray(piecesOfDate)) {
    return '';
  }
  const [day, month, year] = piecesOfDate[0].split('/');
  return new Date(year, month - 1, day);
}

module.exports = findElementEventDate;

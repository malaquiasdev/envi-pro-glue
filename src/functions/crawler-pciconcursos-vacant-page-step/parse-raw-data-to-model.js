function getVacantTitle($, element) {
  return $(element).find('a').text();
}

function getVacantLink($, element) {
  return $(element).find('a').attr('href');
}

function getVacantEventDate($, element) {
  const regexDate = new RegExp('(\\d{2})[/](\\d{2})[/](\\d{4})');
  const fullEventDateText = $(element).find('div.ce').text();
  const array = regexDate.exec(fullEventDateText);
  if (!Array.isArray(array)) {
    return '';
  }
  const [day, month, year] = array[0].split('/');
  return new Date(year, month - 1, day);
}

function getVacantUF($, element) {
  return $(element).find('div.cc').text();
}

function parseRawDataToVacantModel($) {
  const vacants = [];
  $('div.ca').each((_, element) => {
    vacants.push({
      title: getVacantTitle($, element),
      link: getVacantLink($, element),
      eventDate: getVacantEventDate($, element),
      uf: getVacantUF($, element)
    });
  });
  return vacants;
}
module.exports = parseRawDataToVacantModel;

function getVacantTitle($, element) {
  return $(element).find('a').text();
}
function getVacantLink($, element) {
  return $(element).find('a').attr('href');
}
function getVacantEventDate($, element) {
  return $(element).find('div.ce').text().replace('Reaberto até', '');
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

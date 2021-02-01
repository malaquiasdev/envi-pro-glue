function getVacantTitle($, element) {
  return $(element).find('a').text();
}
function getVacantLink($, element) {
  return $(element).find('a').attr('href');
}
function getVacantEventDate($, element) {
  const fullEventDateText = $(element).find('div.ce').text();
  if (fullEventDateText.includes('Conferir período por cargo')) {
    return fullEventDateText.replace('Conferir período por cargo', '');
  }
  if (fullEventDateText.includes('Prorrogado até')) {
    return fullEventDateText.replace('Prorrogado até', '');
  }
  if (fullEventDateText.includes('Reaberto até')) {
    return fullEventDateText.replace('Reaberto até', '');
  }
  if (fullEventDateText.includes('Prorrogado edital n°')) {
    return fullEventDateText.replace('Prorrogado edital n°', '');
  }
  if (fullEventDateText.includes('Reaberto p/ alguns cargos')) {
    return fullEventDateText.replace('Reaberto p/ alguns cargos', '');
  }
  return fullEventDateText;
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

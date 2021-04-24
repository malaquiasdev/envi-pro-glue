const findElementTitle = require('./find-title');
const findElementLink = require('./find-link');
const findElementEventDate = require('./find-event-date');
const findElementUF = require('./find-uf');

function convertRawData($) {
  const vacants = [];
  $('div.ca').each((_, element) => {
    vacants.push({
      title: findElementTitle($, element),
      link: findElementLink($, element),
      eventDate: findElementEventDate($, element),
      uf: findElementUF($, element)
    });
  });
  return vacants;
}
module.exports = { convertRawData };

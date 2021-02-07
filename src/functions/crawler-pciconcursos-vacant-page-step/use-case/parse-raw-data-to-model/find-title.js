function findElementTitle($, element) {
  return $(element).find('a').text();
}

module.exports = findElementTitle;

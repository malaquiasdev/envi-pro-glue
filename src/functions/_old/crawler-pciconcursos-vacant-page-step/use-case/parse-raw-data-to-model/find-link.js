function findElementLink($, element) {
  return $(element).find('a').attr('href');
}

module.exports = findElementLink;

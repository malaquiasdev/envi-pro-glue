function getURL(config, event) {
  return `${config.baseUrl}/${event.category}`;
}

module.exports = getURL;

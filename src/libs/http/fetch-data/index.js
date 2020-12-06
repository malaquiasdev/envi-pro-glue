const axios = require('axios');
const cheerio = require('cheerio');
const logger = require('pino')();

async function fetchData(url) {
  if (!url) {
    throw Error('url parameter is required');
  }
  try {
    const result = await axios.get(url);
    return cheerio.load(result.data);
  } catch (error) {
    logger.error(error);
    throw error;
  }
}

module.exports = fetchData;

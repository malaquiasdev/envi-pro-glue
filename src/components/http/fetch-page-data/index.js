const axios = require('axios');
const cheerio = require('cheerio');
const { logError } = require('../logger');

async function fetchPageData(url) {
  if (!url) {
    throw Error('url parameter is required');
  }
  try {
    const result = await axios.get(url);
    return cheerio.load(result.data);
  } catch (error) {
    logError({
      message: error.message,
      params: { type: error.name, stack: error.stack }
    });
    throw error;
  }
}

module.exports = { fetchPageData };

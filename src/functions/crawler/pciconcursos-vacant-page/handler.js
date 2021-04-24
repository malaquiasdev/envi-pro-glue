const config = require('./config');
const { logError } = require('../../../components/logger');
const { fetchPageData } = require('../../../components/http/fetch-page-data');
const { crawlerPCIConcursosVacantPageData } = require('./use-case');

async function handlerCrawlerPCIConcursosVacantPage(event) {
  try {
    const result = await crawlerPCIConcursosVacantPageData(
      {
        category: event.category,
        baseUrl: config.baseUrl
      },
      { fetchPageData, logError }
    );
    return {
      ...event,
      ...result
    };
  } catch (error) {
    logError({
      message: error.message,
      params: { type: error.name, stack: error.stack }
    });
    throw error;
  }
}

module.exports = { handlerCrawlerPCIConcursosVacantPage };

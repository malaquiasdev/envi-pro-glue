const config = require('./config');
const { logInfo, logError } = require('../../../components/logger');
const { fetchPageData } = require('../../../components/http/fetch-page-data');
const { crawlerPCIConcursosVacantPageData } = require('./use-case');

async function handlerCrawlerPCIConcursosVacantPage(event) {
  logInfo({
    message: 'start - event',
    params: event
  });
  try {
    const result = await crawlerPCIConcursosVacantPageData(
      {
        category: event.Payload.category,
        baseUrl: config.baseUrl
      },
      { fetchPageData, logError }
    );
    logInfo({
      message: 'end - result',
      params: result
    });
    return {
      ...event,
      result
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

const { logError } = require('../../../components/logger');
const config = require('./config');
const fetchPageData = require('../../../components/fetch-page-data');

async function handlerCrawlerPCIConcursosVacantPage(event) {
  try {
    /*const result = await executeTheCrawlerPCIConcursosVacantPage(
      {
        event,
        config
      },
      { fetchData, VacantModel }
    );*/
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

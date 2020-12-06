const logger = require('pino')();
const fetchData = require('../../libs/http/fetch-data');
const SummaryVacantModel = require('../../models/Vacant');
const crawlerSummaryVacantPage = require('./crawler-summary-vacant-page');

async function handlerCollectVacant(event, _) {
  try {
    const vacants = await crawlerSummaryVacantPage(event, { fetchData });
    await SummaryVacantModel.batchPut(vacants, { overwrite: false });
  } catch (error) {
    logger.info(event, 'event');
    logger.error(error, 'error');
  }
}

module.exports = { handlerCollectVacant };

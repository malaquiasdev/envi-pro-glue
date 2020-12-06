const logger = require('pino')();
const fetchData = require('../../libs/http/fetch-data');
const SummaryVacantModel = require('../../models/Vacant');
const crawlerSummaryVacantPage = require('./crawler-summary-vacant-page');

async function handlerCollectVacant(event) {
  let vacants = null;
  try {
    vacants = await crawlerSummaryVacantPage(event, { fetchData });
    for (const vacant of vacants) {
      await SummaryVacantModel.create(vacant);
    }
  } catch (error) {
    logger.info(event, 'event');
    logger.info(vacants, 'vacants');
    throw error;
  }
}

module.exports = { handlerCollectVacant };

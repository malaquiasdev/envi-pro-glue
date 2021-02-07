const logger = require('pino')();
const config = require('./config');
const fetchData = require('../../libs/http/fetch-data');
const VacantModel = require('../../models/Vacant')(config.tableName);
const executeTheCrawlerPCIConcursosVacantPage = require('./use-case');

async function handlerCrawlerPciconcursosVacantPageStep(event) {
  try {
    const result = await executeTheCrawlerPCIConcursosVacantPage(
      {
        event,
        config
      },
      { fetchData, VacantModel }
    );
    return {
      ...event,
      ...result
    };
  } catch (error) {
    logger.error(error);
    throw error;
  }
}

module.exports = { handlerCrawlerPciconcursosVacantPageStep };

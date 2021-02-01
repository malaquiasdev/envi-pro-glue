const uuid = require('uuid');
const logger = require('pino')();
const fetchData = require('../../libs/http/fetch-data');
const createVacantModel = require('../../models/Vacant');
const config = require('./config');
const parseRawDataToVacantModel = require('./parse-raw-data-to-model');

async function handlerCrawlerPciconcursosVacantPageStep(event) {
  try {
    const VacantModel = createVacantModel(config.tableName);
    const rawData = await fetchData(`${config.baseUrl}/${event.category}`);
    const result = parseRawDataToVacantModel(rawData).filter(vacant => {
      return new Date(vacant.eventDate) > new Date();
    });
    const vacant = {
      id: uuid.v4(),
      category: event.category,
      result
    };
    if (result && result.length > 0) {
      await VacantModel.create(vacant);
    }
    return vacant;
  } catch (error) {
    logger.error(error);
    throw error;
  }
}

module.exports = { handlerCrawlerPciconcursosVacantPageStep };

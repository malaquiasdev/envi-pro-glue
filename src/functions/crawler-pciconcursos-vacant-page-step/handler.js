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
    await VacantModel.create({
      id: uuid.v4(),
      category: event.category,
      result: parseRawDataToVacantModel(rawData).filter(vacant => {
        return new Date(vacant.eventDate) > new Date();
      })
    });
  } catch (error) {
    logger.error(error);
    throw error;
  }
}

module.exports = { handlerCrawlerPciconcursosVacantPageStep };

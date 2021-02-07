const logger = require('pino')();
const uuid = require('uuid');
const getURL = require('./get-url-page');
const parseRawDataToVacantModel = require('./parse-raw-data-to-model');
const filterVacantsByFutureDate = require('./filter-data-by-future-date');

async function executeTheCrawlerPCIConcursosVacantPage(
  { event, config },
  { fetchData, VacantModel }
) {
  const vacant = {
    id: uuid.v4(),
    category: event.category,
    result: []
  };
  try {
    const rawData = await fetchData(getURL(config, event));
    vacant.result = filterVacantsByFutureDate(
      parseRawDataToVacantModel(rawData)
    );
    await VacantModel.create(vacant);
    return vacant;
  } catch (error) {
    logger.error(error);
    return vacant;
  }
}

module.exports = executeTheCrawlerPCIConcursosVacantPage;

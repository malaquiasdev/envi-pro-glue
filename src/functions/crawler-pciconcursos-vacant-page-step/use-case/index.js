const logger = require('pino')();
const parseRawDataToVacantModel = require('./parse-raw-data-to-model');
const filterVacantsByFutureDate = require('./filter-data-by-future-date');

async function executeTheCrawlerPCIConcursosVacantPage(
  { event, uuid, url },
  { fetchData, VacantModel }
) {
  try {
    const rawData = await fetchData(url);
    const result = filterVacantsByFutureDate(
      parseRawDataToVacantModel(rawData)
    );
    const vacant = {
      id: uuid,
      category: event.category,
      result
    };
    if (Array.isArray(result)) {
      await VacantModel.create(vacant);
    }
    return vacant;
  } catch (error) {
    logger.error(error);
    throw error;
  }
}

module.exports = executeTheCrawlerPCIConcursosVacantPage;

const logger = require('pino')();
const parseRawDataToVacantModel = require('./parse-raw-data-to-model');

async function executeTheCrawlerPCIConcursosVacantPage(
  { event, uuid, url },
  { fetchData, VacantModel }
) {
  try {
    const rawData = await fetchData(url);
    const result = parseRawDataToVacantModel(rawData).filter(vacant => {
      return vacant.eventDate > new Date();
    });
    const vacant = {
      id: uuid,
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

module.exports = executeTheCrawlerPCIConcursosVacantPage;

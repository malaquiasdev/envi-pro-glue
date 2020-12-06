const parseRawDataToSummaryVacantModel = require('./parse-raw-data-to-model');

async function crawlerSummaryVacantPage(event, { fetchData }) {
  const data = await fetchData(event.url);
  return parseRawDataToSummaryVacantModel(event, data);
}
module.exports = crawlerSummaryVacantPage;

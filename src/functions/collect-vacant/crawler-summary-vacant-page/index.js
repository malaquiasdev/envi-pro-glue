const parseRawDataToSummaryVacantModel = require('./parse-raw-data-to-model');

async function crawlerSummaryVacantPage(event, { fetchData }) {
  const data = await fetchData(event.summaryVacantListPageURL);
  return parseRawDataToSummaryVacantModel(data);
}
module.exports = crawlerSummaryVacantPage;

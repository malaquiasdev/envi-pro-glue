const response = require('../../libs/http/response');
const fetchData = require('../../libs/http/fetch-data');
const SummaryVacantModel = require('../../models/Vacant');
const crawlerSummaryVacantPage = require('./crawler-summary-vacant-page');

async function handlerCollectVacant(event, context) {
  const vacants = await crawlerSummaryVacantPage(event, { fetchData });
  await SummaryVacantModel.batchPut(vacants, { overwrite: false });
  const result = response.create({ body: vacants });
  return response.send(context, result);
}

module.exports = { handlerCollectVacant };

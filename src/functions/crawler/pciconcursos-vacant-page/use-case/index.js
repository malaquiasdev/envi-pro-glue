const { getURL } = require('./get-url');
const { convertRawData } = require('./convert-raw-data');
const { filterVacantsByFutureDate } = require('./filter-data-by-future-date');

async function crawlerPCIConcursosVacantPageData(
  { category, baseUrl },
  { fetchPageData, logError }
) {
  try {
    const rawData = await fetchPageData(getURL(baseUrl, category));
    return convertRawData(rawData);
  } catch (error) {
    logError({
      message: error.message,
      params: { type: error.name, stack: error.stack }
    });
    return [];
  }
}

module.exports = { crawlerPCIConcursosVacantPageData };

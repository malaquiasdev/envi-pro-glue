const { getURL } = require('./get-url');
const { convertRawData } = require('./convert-raw-data');
const { filterVacantsByFutureDate } = require('./filter-data-by-future-date');

async function crawlerPCIConcursosVacantPageData(
  { category, baseUrl },
  { fetchPageData, logError }
) {
  const vacant = {
    category,
    result: []
  };
  try {
    const rawData = await fetchPageData(getURL(baseUrl, category));
    vacant.result = filterVacantsByFutureDate(convertRawData(rawData));
    return vacant;
  } catch (error) {
    logError({
      message: error.message,
      params: { type: error.name, stack: error.stack }
    });
    return vacant;
  }
}

module.exports = { crawlerPCIConcursosVacantPageData };

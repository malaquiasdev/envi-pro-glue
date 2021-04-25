const parseDataToCSV = require('./parse-data-to-csv');
const getDateMonthYearStringFromDate = require('./get-date-month-year');

async function exportVacantDataToCSVFileInS3(
  { tableName, bucketPath },
  { createNewS3File, findAllVacants, logInfo }
) {
  const data = await findAllVacants({ tableName });
  logInfo({ message: 'findAllVacants', params: data });
  const csv = await parseDataToCSV(data);
  const params = {
    Bucket: bucketPath,
    ACL: 'public-read',
    Key: `vacants-${getDateMonthYearStringFromDate(new Date())}.csv`,
    Body: csv,
    ContentType: 'text/csv'
  };
  return createNewS3File(params);
}

module.exports = { exportVacantDataToCSVFileInS3 };

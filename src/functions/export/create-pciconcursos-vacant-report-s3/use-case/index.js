const parseDataToCSV = require('./parse-data-to-csv');
const getDateMonthYearStringFromDate = require('./get-date-month-year');

async function exportVacantDataToCSVFileInS3(
  { tableName, bucketName },
  { createNewS3File, findAllVacants, logInfo }
) {
  const data = await findAllVacants({ tableName });
  logInfo({ message: 'dynamodb - vacants data', params: data });
  const csv = await parseDataToCSV(data);
  const params = {
    Bucket: bucketName,
    ACL: 'public-read',
    Key: `vacants-${getDateMonthYearStringFromDate(new Date())}.csv`,
    Body: csv,
    ContentType: 'text/csv'
  };
  return createNewS3File(params);
}

module.exports = { exportVacantDataToCSVFileInS3 };

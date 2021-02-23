const parseDataToCSV = require('./parse-data-to-csv');
const getDateMonthYearStringFromDate = require('./get-date-month-year');

async function executeExportDataToCSVFile(
  { tableName, bucketName },
  { createVacantModel, createNewS3File }
) {
  const VacantModel = createVacantModel(tableName);
  const data = await VacantModel.scan().exec();
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

module.exports = executeExportDataToCSVFile;

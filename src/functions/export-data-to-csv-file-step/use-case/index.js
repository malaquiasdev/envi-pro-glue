const parseDataToCSV = require('./parse-data-to-csv');

async function executeExportDataToCSVFile(
  { tableName, bucketName },
  { createVacantModel, fs, logError, createNewFile }
) {
  const VacantModel = createVacantModel(tableName);
  const data = await VacantModel.scan().exec();
  await parseDataToCSV(data);
  fs.readFile('/tmp/data.csv', 'utf8', (err, res) => {
    if (err) {
      logError({
        message: err.message,
        params: { type: err.name, stack: err.stack }
      });
      throw err;
    }
    const params = {
      Bucket: bucketName,
      ACL: 'public-read',
      Key: `vacants-${new Date().getTime()}.csv`,
      Body: res,
      ContentType: 'text/csv'
    };
    return createNewFile(params);
  });
}

module.exports = executeExportDataToCSVFile;

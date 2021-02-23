const parseDataToCSV = require('./parse-data-to-csv');

async function executeExportDataToCSVFile(
  { tableName, bucketName },
  { createVacantModel, fs, logger, s3 }
) {
  try {
    const VacantModel = createVacantModel(tableName);
    const data = await VacantModel.scan().exec();
    await parseDataToCSV(data);
    fs.readFile('/tmp/data.csv', 'utf8', (err, res) => {
      if (err) {
        logger.error(err, 'err');
      }
      const params = {
        Bucket: bucketName,
        Key: `vacants-${new Date().getTime()}.csv`,
        ACL: 'public-read',
        Body: res,
        ContentType: 'text/csv'
      };
      return s3.putObject(params, (s3Err, result) => {
        if (s3Err) {
          throw s3Err;
        } else {
          return { redirectUri: result.Location };
        }
      });
    });
  } catch (error) {
    logger.error(error);
    throw error;
  }
}

module.exports = executeExportDataToCSVFile;

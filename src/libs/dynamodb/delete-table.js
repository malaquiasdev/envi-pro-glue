const logger = require('pino')();
const dynamoose = require('dynamoose');

const dynamoDB = dynamoose.aws.ddb();

const ENVI_GLUE_VACANT_TABLE_NAME = 'ENVI-GLUE-VACANT';

async function deleteEnviGlueVacantTable() {
  return new Promise((resolve, reject) => {
    dynamoDB.deleteTable(
      { TableName: ENVI_GLUE_VACANT_TABLE_NAME },
      (err, response) => {
        if (err) {
          if (err.code === 'ResourceNotFoundException') {
            return resolve('table does not exists, so nothing to delete');
          }
          return reject(err);
        }
        dynamoDB.waitFor(
          'tableNotExists',
          { TableName: ENVI_GLUE_VACANT_TABLE_NAME },
          error => {
            if (error) {
              logger.error(error);
              return reject(error);
            }
            return resolve(response);
          }
        );
        return null;
      }
    );
  });
}

module.exports = deleteEnviGlueVacantTable;

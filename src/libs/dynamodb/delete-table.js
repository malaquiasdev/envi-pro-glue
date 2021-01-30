const logger = require('pino')();
const dynamoose = require('dynamoose');

const dynamoDB = dynamoose.aws.ddb();

async function deleteTable(tableName) {
  return new Promise((resolve, reject) => {
    dynamoDB.deleteTable({ TableName: tableName }, (err, response) => {
      if (err) {
        logger.error(err);
        if (err.code === 'ResourceNotFoundException') {
          const message = 'table does not exists, so nothing to delete';
          logger.error(message);
          return resolve(message);
        }
        return reject(err);
      }
      dynamoDB.waitFor('tableNotExists', { TableName: tableName }, error => {
        if (error) {
          logger.error(error);
          return reject(error);
        }
        return resolve(response);
      });
      logger.info('table deleted with sucess');
      return resolve(response);
    });
  });
}

module.exports = deleteTable;

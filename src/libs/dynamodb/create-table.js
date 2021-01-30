const logger = require('pino')();
const dynamoose = require('dynamoose');

const dynamoDB = dynamoose.aws.ddb();

async function createTable(params) {
  return new Promise((resolve, reject) => {
    dynamoDB.createTable(params, (err, data) => {
      if (err) {
        logger.error(err);
        if (err.code === 'ResourceInUseException:') {
          const message = 'table exists, so nothing to create';
          logger.error(message);
          return resolve(message);
        }
        return reject(err);
      }
      return resolve(data);
    });
  });
}

module.exports = createTable;

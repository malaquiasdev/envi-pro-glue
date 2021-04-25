const { dynamoDB } = require('../utils/dynamodb');
const {
  convertRecordsToObject
} = require('../utils/convert-records-to-object');

async function findAllVacants({ tableName }) {
  const statement = `SELECT * FROM "${tableName}"`;
  const { Items } = await dynamoDB
    .executeStatement({ Statement: statement })
    .promise();
  return convertRecordsToObject(Items);
}

module.exports = { findAllVacants };

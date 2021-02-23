const dynamoose = require('dynamoose');
const createDynamodbInstance = require('../../create-instance');
const createVacantSchema = require('./schema');

function createVacantModel(tableName) {
  return createDynamodbInstance(tableName, createVacantSchema(dynamoose));
}
module.exports = createVacantModel;

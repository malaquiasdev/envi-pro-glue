const dynamoose = require('dynamoose');
const createDynamodbInstance = require('../../libs/dynamodb/create-instance');
const createVacantSchema = require('./schema');

const Vacant = createDynamodbInstance(
  'ENVI-GLUE-VACANT',
  createVacantSchema(dynamoose)
);

module.exports = Vacant;

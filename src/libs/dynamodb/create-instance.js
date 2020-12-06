const dynamoose = require('dynamoose');

const ENVI_GLUE_VACANT_TABLE_NAME = 'ENVI-GLUE-VACANT';

function createDynamodbInstance(schema) {
  return dynamoose.model(ENVI_GLUE_VACANT_TABLE_NAME, schema);
}

module.exports = createDynamodbInstance;

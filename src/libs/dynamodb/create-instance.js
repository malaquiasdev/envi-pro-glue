const dynamoose = require('dynamoose');

function createDynamodbInstance(table, schema) {
  return dynamoose.model(table, schema);
}

module.exports = createDynamodbInstance;

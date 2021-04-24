const logger = require('pino')();
const config = require('./config');
const deleteTable = require('../../components/dynamodb/delete-table');

async function handlerDeleteVacantStep() {
  try {
    await deleteTable(config.tableName);
  } catch (error) {
    logger.error(error);
    throw error;
  }
}

module.exports = { handlerDeleteVacantStep };

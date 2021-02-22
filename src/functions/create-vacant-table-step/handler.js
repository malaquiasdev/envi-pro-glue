const logger = require('pino')();
const config = require('./config');
const createVacantModel = require('../../components/dynamodb/models/Vacant');
const createTable = require('../../components/dynamodb/create-table');

async function handlerCreateVacantTableStep() {
  try {
    const VacantModel = createVacantModel(config.tableName);
    const params = await VacantModel.table.create.request();
    await createTable(params);
  } catch (error) {
    logger.error(error);
    throw error;
  }
}

module.exports = { handlerCreateVacantTableStep };

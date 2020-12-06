const logger = require('pino')();

const deleteEnviGlueVacantTable = require('../../libs/dynamodb/delete-table');

async function handlerDeleteVacantStep() {
  try {
    await deleteEnviGlueVacantTable();
  } catch (error) {
    logger.error(error);
    throw error;
  }
}

module.exports = { handlerDeleteVacantStep };

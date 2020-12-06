const logger = require('pino')();
const Vacant = require('../../models/Vacant');

async function handlerDeleteVacantStep() {
  try {
    const vacants = await Vacant.scan().exec();
    if (vacants && vacants.count) {
      await Vacant.batchDelete(vacants);
    }
    return true;
  } catch (error) {
    logger.error(error);
    return false;
  }
}

module.exports = { handlerDeleteVacantStep };

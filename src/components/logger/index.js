const logger = require('pino')();

function logInfo({ message, params = {} }) {
  logger.info(params, message);
}

function logError({ message, params = {} }) {
  logger.error(params, message);
}

module.exports = {
  logInfo,
  logError
};

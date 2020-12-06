const handlerError = require('./handler_error');
const handlerSuccess = require('./handler_success');

/*
 *  Send the final response object in AWS model pattern
 *  @public
 *  @memberof Response
 *  @function send
 *  @param {Object} [contex] - context object passed by AWS lambda request
 *  @param {Promise} [promise] - The promise that will be resolved by function flow
 *  @returns {Object} the response object
 */
async function send(context, promise) {
  try {
    const response = await promise;
    return handlerSuccess(response, context.awsRequestId);
  } catch (err) {
    return handlerError(err, context.awsRequestId);
  }
}

module.exports = send;

const toAWS = require("./to_aws");

function handlerSuccess(response, requestId) {
    const { body, headers, statusCode } = response;
    const newBody = { data: body, requestId };
    return toAWS(newBody, headers, statusCode);
}

module.exports = handlerSuccess;
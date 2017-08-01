'use strict';

const successResponse = (res, message, data, type) => {
  return res.status(200).send({
    status: "Success",
    message: message,
    data: data,
    type: type,
    msgCode: "405"
  });
}


const errorResponse = (res, err, msg, type, statusCode) => {

  let message = "";
  if (err && err.message) {
    message = err.message;
  } else if (msg) {
    message = msg;
  } else {
    message = err.stack ? err.stack.split("\n") : "Error Occured";
  }

  return res.status(statusCode).send({
    status: "Error",
    message: message,
    originalError: err.stack ? err.stack.split("\n") : err,
    type: type,
    severity: "high",
    msgCode: "409"
  });

}

module.exports = {
  successResponse,
  errorResponse
}

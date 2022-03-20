const createError = require('http-errors');

module.exports.Response = {
  success: (res, status=200, message="OK", body={}) => {
    res.status(status).json({ message, body});
  },
  error: (res, erro = null) => {
    //valido si existe un error como parametro lo utilizo
    // sino uso el que creo con InternalServerError
    const { statusCode, message } = error ? error : new createError.InternalServerError();
    res.status(statusCode).json({message})
  }
};
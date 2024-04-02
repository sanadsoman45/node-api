function globalErrorHandler(err, req, res) {
  //getting the current date and time in unix epoch
  const dateTime = new Date(Date.now());

  //get datetimestamp in format of 2024-03-01 18:23:00
  const formattedDateTimeStampStr = `${dateTime.getFullYear()}- ${(
    dateTime.getMonth() + 1
  )
    .toString()
    .padStart(2, 0)} - ${dateTime
    .getDate()
    .toString()
    .padStart(2, 0)} ${dateTime
    .getHours()
    .toString()
    .padStart(2, 0)}: ${dateTime
    .getMinutes()
    .toString()
    .padStart(2, 0)}: ${dateTime.getSeconds().toString().padStart(2, 0)}`;

  //setting the status code from error if any or else default to 404.
  err.statusCode = err.statusCode || 404;

  // return the json obj for the error if message is found in err then use that message or pass error as the message.
  return err.customMessage || err.message
    ? res.status(err.statusCode || 500).json({
        status: err.statusCode,
        messsage: err.customMessage || err.message,
        timeStamp: formattedDateTimeStampStr
      })
    : res.status(err.statusCode).json({
        status: err.statusCode,
        message: err,
        timeStamp: formattedDateTimeStampStr
      });
}

module.exports = globalErrorHandler;

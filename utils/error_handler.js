export const errorHandler = (err, req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    console.log(err);
  }

  if (err.isOperational) {
    res.status(err.statusCode || 500).json({
      message: err.message,
    });
  } else {
    // Send a genaric message to avoid leaking non operational error details
    res.status(err.statusCode || 500).json({
      message: "something went wrong :<",
    });
  }
};

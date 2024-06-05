class apiErrors extends Error {
  constructor(statusCode, message, success = false, errors = [], stack) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.success = success;
    this.errors = this.errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

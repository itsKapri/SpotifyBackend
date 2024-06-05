class apiResponce {
  constructor(statusCode, data) {
    this.statusCode = statusCode;
    this.data = data;
    this.success = statusCode < 400;
  }
}

export default apiResponce;

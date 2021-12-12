import { CustomError } from "./custom.error";

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    //message for log
    super("Route not found");

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  //Same format for all errors across the app
  serializeErrors() {
    return [{ message: "Not Found" }];
  }
}

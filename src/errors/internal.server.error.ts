import { CustomError } from "./custom.error";

export class InternalServerError extends CustomError {
  statusCode = 500;

  constructor() {
    //message for log
    super("Server side error");

    Object.setPrototypeOf(this, InternalServerError.prototype);
  }

  //Same format for all errors across the app
  serializeErrors() {
    return [{ message: "Something went wrong on the server!" }];
  }
}

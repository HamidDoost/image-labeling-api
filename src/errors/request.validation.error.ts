import { ValidationError } from "express-validator";
import { CustomError } from "./custom.error";

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    //Message for log
    super("Invalid request parameters");

    // Due to extending of a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  //Same format for all errors across the app
  serializeErrors() {
    return this.errors.map((err) => {
      return { message: err.msg, field: err.param };
    });
  }
}

/**
 * Application error.
 */
export class AppError extends Error {
  /**
   * Returns an instance of AppError with given message and optional error cause.
   * @param message message
   * @param cause error cause
   */
  constructor(message: string, public cause?: Error) {
    super(message);
    this.name = 'AppError';
  }
}

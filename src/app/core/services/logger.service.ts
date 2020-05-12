import { Injectable } from '@angular/core';
import { environment } from '@app/env';

import { LogLevel } from '../models';

/**
 * Log function doing nothing (used when log level is lower than current minimal level)
 */
const noLog = () => undefined;

/**
 * Application logger.
 */
@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  /**
   * Current minimal log level.
   */
  private level: LogLevel;

  /**
   * Returns an instance of LoggerService.
   */
  constructor() {
    this.level = LogLevel[environment.logLevel];
  }

  /**
   * Logs a message at debug level.
   */
  get debug() {
    return LogLevel.DEBUG <= this.level ? console.log.bind(console, '[DEBUG]') : noLog;
  }

  /**
   * Logs a message at info level.
   */
  get info() {
    return LogLevel.INFO <= this.level ? console.log.bind(console, '[INFO]') : noLog;
  }

  /**
   * Logs a message at warn level.
   */
  get warn() {
    return LogLevel.WARN <= this.level ? console.log.bind(console, '[WARN]') : noLog;
  }

  /**
   * Logs a message at error level.
   */
  get error() {
    return LogLevel.ERROR <= this.level ? console.error.bind(console, '[ERROR]') : noLog;
  }
}

import {Injectable} from "@angular/core";
import log = require('loglevel');

const LogLevel = {
    DEBUG: "debug",
    INFO: "info",
    ERROR: "error",
    WARN: "warn",
};

@Injectable()
class Logger {

    setLogLevel(level) {
        log.setLevel(level);
    }

    debug(...args: any[]) {
        log.debug(...args);
    }

    info(...args: any[]) {
        log.info( ...args);
    }

    error(...args: any[]) {
        log.error( ...args);
    }

    trace(...args: any[]) {
        log.trace( ...args);
    }

    warn(...args: any[]) {
        log.warn( ...args);
    }
}

export {
    Logger,
    LogLevel
}
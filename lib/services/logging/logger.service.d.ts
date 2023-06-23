export declare abstract class Logger {
    info: any;
    warn: any;
    error: any;
}
export declare type logFn = (message?: any, ...optionalParams: any[]) => void;
export declare class LoggerService implements Logger {
    info: logFn;
    warn: logFn;
    error: logFn;
}

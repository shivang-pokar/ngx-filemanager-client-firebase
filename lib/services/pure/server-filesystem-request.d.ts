import { HttpClient } from '@angular/common/http';
import { LoggerService } from '../logging/logger.service';
export declare class FileSystemRequestBuilder {
    private http;
    private url;
    private logger;
    private LOG_ID;
    private options;
    private body;
    constructor(http: HttpClient, url: string, logger: LoggerService, LOG_ID: string);
    AddBody(body: any): this;
    PatchBody<T>(body: Partial<T>): this;
    PatchHeaders(headers: {}): this;
    MakeJson(): void;
    private makeRequestKey;
    POST(): Promise<any>;
}

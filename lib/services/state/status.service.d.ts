import { Observable } from 'rxjs';
export declare class FilemanagerStatusService {
    private _ActiveRequestsMap;
    get ActiveRequestsMap(): Observable<ActiveRequestsMap>;
    UpdateStatus(key: string, status: RequestStatus, error?: string): void;
}
export interface ActiveRequestsMap {
    [key: string]: {
        status?: RequestStatus;
        error?: string;
    };
}
export declare type RequestStatus = 'SENDING' | 'SUCCESS' | 'FAILED';

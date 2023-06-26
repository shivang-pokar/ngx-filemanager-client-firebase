import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
export declare class Interceptor implements HttpInterceptor {
    token: Subject<unknown>;
    constructor();
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}

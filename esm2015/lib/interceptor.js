/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Subject, from } from "rxjs";
import { switchMap } from "rxjs/operators";
import * as firebase from 'firebase/app';
export class Interceptor {
    constructor() {
        this.token = new Subject();
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        if (firebase.default.auth().currentUser) {
            return from(firebase.default.auth().currentUser.getIdToken().then(token => {
                return request.clone({
                    setHeaders: {
                        authorization: `${token}`
                    }
                });
            }).catch(err => {
                return request;
            })).pipe(switchMap(req => {
                return next.handle(req);
            }));
        }
        else {
            return next.handle(request);
        }
    }
}
Interceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
Interceptor.ctorParameters = () => [];
function Interceptor_tsickle_Closure_declarations() {
    /** @type {?} */
    Interceptor.prototype.token;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvU2hpdmFuZy9QaSBTb2Z0d2FyZS9maWxlLW1hbmFnZXIvbmd4LWZpbGVtYW5hZ2VyL3Byb2plY3RzL25neC1maWxlbWFuYWdlci1jbGllbnQtZmlyZWJhc2Uvc3JjLyIsInNvdXJjZXMiOlsibGliL2ludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEtBQUssUUFBUSxNQUFNLGNBQWMsQ0FBQztBQUd6QyxNQUFNLE9BQU8sV0FBVztJQUlwQjtRQUZBLGFBQVEsSUFBSSxPQUFPLEVBQUUsQ0FBQztLQU1yQjs7Ozs7O0lBRUQsU0FBUyxDQUFDLE9BQXlCLEVBQUUsSUFBaUI7UUFDbEQsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUM5RCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQ2pCLFVBQVUsRUFBRTt3QkFDUixhQUFhLEVBQUUsR0FBRyxLQUFLLEVBQUU7cUJBQzVCO2lCQUNKLENBQUMsQ0FBQzthQUNOLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1gsT0FBTyxPQUFPLENBQUM7YUFDbEIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDckIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzNCLENBQUMsQ0FBQyxDQUFBO1NBQ047YUFDSTtZQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvQjtLQUNKOzs7WUE1QkosVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yLCBIdHRwSGFuZGxlciwgSHR0cFJlcXVlc3QsIEh0dHBFdmVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuLyogaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjsgKi9cbi8qIGltcG9ydCB7IEF1dGhTZXJ2aWNlcyB9IGZyb20gXCIuL3NlcnZpY2VzL2F1dGgtc2VydmljZXMvYXV0aC1zZXJ2aWNlcy5zZXJ2aWNlXCI7ICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBmcm9tIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcblxuICAgIHRva2VuID0gbmV3IFN1YmplY3QoKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuXG4gICAgKSB7XG5cbiAgICB9XG5cbiAgICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgICAgIGlmIChmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmcm9tKGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5nZXRJZFRva2VuKCkudGhlbih0b2tlbiA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QuY2xvbmUoe1xuICAgICAgICAgICAgICAgICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uOiBgJHt0b2tlbn1gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgICAgICAgICB9KSkucGlwZShzd2l0Y2hNYXAocmVxID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class FilemanagerStatusService {
    constructor() {
        this._ActiveRequestsMap = new BehaviorSubject({});
    }
    /**
     * @return {?}
     */
    get ActiveRequestsMap() {
        return this._ActiveRequestsMap;
    }
    /**
     * @param {?} key
     * @param {?} status
     * @param {?=} error
     * @return {?}
     */
    UpdateStatus(key, status, error) {
        console.log('UpdateStatus()', { key, status, error });
        let /** @type {?} */ currentValue;
        currentValue = this._ActiveRequestsMap.value;
        if (!currentValue[key]) {
            currentValue[key] = {};
        }
        currentValue[key].status = status;
        currentValue[key].error = error;
        this._ActiveRequestsMap.next(currentValue);
    }
}
FilemanagerStatusService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ FilemanagerStatusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FilemanagerStatusService_Factory() { return new FilemanagerStatusService(); }, token: FilemanagerStatusService, providedIn: "root" });
function FilemanagerStatusService_tsickle_Closure_declarations() {
    /** @type {?} */
    FilemanagerStatusService.prototype._ActiveRequestsMap;
}
/**
 * @record
 */
export function ActiveRequestsMap() { }
function ActiveRequestsMap_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    [key: string]: {
        status?: RequestStatus;
        error?: string;
      };
    */
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvU2hpdmFuZy9QaSBTb2Z0d2FyZS9maWxlLW1hbmFnZXIvbmd4LWZpbGVtYW5hZ2VyL3Byb2plY3RzL25neC1maWxlbWFuYWdlci1jbGllbnQtZmlyZWJhc2Uvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3N0YXRlL3N0YXR1cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7O0FBS25ELE1BQU0sT0FBTyx3QkFBd0I7O2tDQUNOLElBQUksZUFBZSxDQUFvQixFQUFFLENBQUM7Ozs7O0lBQ3ZFLElBQUksaUJBQWlCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0tBQ2hDOzs7Ozs7O0lBRU0sWUFBWSxDQUFDLEdBQVcsRUFBRSxNQUFxQixFQUFFLEtBQWM7UUFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN0RCxxQkFBSSxZQUErQixDQUFDO1FBQ3BDLFlBQVksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDO1FBQzdDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUN4QjtRQUNELFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2xDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Ozs7WUFsQjlDLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGaWxlbWFuYWdlclN0YXR1c1NlcnZpY2Uge1xuICBwcml2YXRlIF9BY3RpdmVSZXF1ZXN0c01hcCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QWN0aXZlUmVxdWVzdHNNYXA+KHt9KTtcbiAgZ2V0IEFjdGl2ZVJlcXVlc3RzTWFwKCk6IE9ic2VydmFibGU8QWN0aXZlUmVxdWVzdHNNYXA+IHtcbiAgICByZXR1cm4gdGhpcy5fQWN0aXZlUmVxdWVzdHNNYXA7XG4gIH1cblxuICBwdWJsaWMgVXBkYXRlU3RhdHVzKGtleTogc3RyaW5nLCBzdGF0dXM6IFJlcXVlc3RTdGF0dXMsIGVycm9yPzogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coJ1VwZGF0ZVN0YXR1cygpJywgeyBrZXksIHN0YXR1cywgZXJyb3IgfSk7XG4gICAgbGV0IGN1cnJlbnRWYWx1ZTogQWN0aXZlUmVxdWVzdHNNYXA7XG4gICAgY3VycmVudFZhbHVlID0gdGhpcy5fQWN0aXZlUmVxdWVzdHNNYXAudmFsdWU7XG4gICAgaWYgKCFjdXJyZW50VmFsdWVba2V5XSkge1xuICAgICAgY3VycmVudFZhbHVlW2tleV0gPSB7fTtcbiAgICB9XG4gICAgY3VycmVudFZhbHVlW2tleV0uc3RhdHVzID0gc3RhdHVzO1xuICAgIGN1cnJlbnRWYWx1ZVtrZXldLmVycm9yID0gZXJyb3I7XG4gICAgdGhpcy5fQWN0aXZlUmVxdWVzdHNNYXAubmV4dChjdXJyZW50VmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZlUmVxdWVzdHNNYXAge1xuICBba2V5OiBzdHJpbmddOiB7XG4gICAgc3RhdHVzPzogUmVxdWVzdFN0YXR1cztcbiAgICBlcnJvcj86IHN0cmluZztcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgUmVxdWVzdFN0YXR1cyA9ICdTRU5ESU5HJyB8ICdTVUNDRVNTJyB8ICdGQUlMRUQnO1xuIl19
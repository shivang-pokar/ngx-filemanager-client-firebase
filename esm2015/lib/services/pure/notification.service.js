/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
export class NotificationService {
    /**
     * @param {?} matSnackbar
     */
    constructor(matSnackbar) {
        this.matSnackbar = matSnackbar;
    }
    /**
     * @param {?} msg
     * @param {?=} title
     * @return {?}
     */
    notify(msg, title) {
        return this.matSnackbar.open(msg, title, {
            duration: 4000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
        });
    }
    /**
     * @return {?}
     */
    notifyCancelled() {
        return this.notify('Cancelled Operation');
    }
}
NotificationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NotificationService.ctorParameters = () => [
    { type: MatSnackBar }
];
function NotificationService_tsickle_Closure_declarations() {
    /** @type {?} */
    NotificationService.prototype.matSnackbar;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvU2hpdmFuZy9QaSBTb2Z0d2FyZS9maWxlLW1hbmFnZXIvbmd4LWZpbGVtYW5hZ2VyL3Byb2plY3RzL25neC1maWxlbWFuYWdlci1jbGllbnQtZmlyZWJhc2Uvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3B1cmUvbm90aWZpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRzFELE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFDOUIsWUFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7S0FBSTs7Ozs7O0lBRXpDLE1BQU0sQ0FBQyxHQUFXLEVBQUUsS0FBYztRQUN2QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUU7WUFDdkMsUUFBUSxFQUFFLElBQUk7WUFDZCxrQkFBa0IsRUFBRSxRQUFRO1lBQzVCLGdCQUFnQixFQUFFLFFBQVE7U0FDM0IsQ0FBQyxDQUFDOzs7OztJQUdFLGVBQWU7UUFDcEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7Ozs7WUFiN0MsVUFBVTs7OztZQUZGLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXRTbmFja2JhcjogTWF0U25hY2tCYXIpIHt9XG5cbiAgcHVibGljIG5vdGlmeShtc2c6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRTbmFja2Jhci5vcGVuKG1zZywgdGl0bGUsIHtcbiAgICAgIGR1cmF0aW9uOiA0MDAwLFxuICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgIHZlcnRpY2FsUG9zaXRpb246ICdib3R0b20nLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5vdGlmeUNhbmNlbGxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoJ0NhbmNlbGxlZCBPcGVyYXRpb24nKTtcbiAgfVxufVxuIl19
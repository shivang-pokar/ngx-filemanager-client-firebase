/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
export class ConsoleLoggerService {
    /**
     * @return {?}
     */
    get info() {
        const /** @type {?} */ boundLogFn = console.log.bind(console, 'ngx-fm:: ');
        return boundLogFn;
    }
    /**
     * @return {?}
     */
    get warn() {
        const /** @type {?} */ boundLogFn = console.warn.bind(console, 'ngx-fm:: ');
        return boundLogFn;
    }
    /**
     * @return {?}
     */
    get error() {
        const /** @type {?} */ boundLogFn = console.error.bind(console, 'ngx-fm:: ');
        return boundLogFn;
    }
}
ConsoleLoggerService.decorators = [
    { type: Injectable }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS1sb2dnZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9TaGl2YW5nL1BpIFNvZnR3YXJlL2ZpbGUtbWFuYWdlci9uZ3gtZmlsZW1hbmFnZXIvcHJvamVjdHMvbmd4LWZpbGVtYW5hZ2VyLWNsaWVudC1maXJlYmFzZS9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbG9nZ2luZy9jb25zb2xlLWxvZ2dlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFDL0IsSUFBSSxJQUFJO1FBQ04sdUJBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMxRCxPQUFPLFVBQVUsQ0FBQztLQUNuQjs7OztJQUVELElBQUksSUFBSTtRQUNOLHVCQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDM0QsT0FBTyxVQUFVLENBQUM7S0FDbkI7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCx1QkFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzVELE9BQU8sVUFBVSxDQUFDO0tBQ25COzs7WUFmRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb25zb2xlTG9nZ2VyU2VydmljZSBpbXBsZW1lbnRzIExvZ2dlciB7XG4gIGdldCBpbmZvKCkge1xuICAgIGNvbnN0IGJvdW5kTG9nRm4gPSBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUsICduZ3gtZm06OiAnKTtcbiAgICByZXR1cm4gYm91bmRMb2dGbjtcbiAgfVxuXG4gIGdldCB3YXJuKCkge1xuICAgIGNvbnN0IGJvdW5kTG9nRm4gPSBjb25zb2xlLndhcm4uYmluZChjb25zb2xlLCAnbmd4LWZtOjogJyk7XG4gICAgcmV0dXJuIGJvdW5kTG9nRm47XG4gIH1cblxuICBnZXQgZXJyb3IoKSB7XG4gICAgY29uc3QgYm91bmRMb2dGbiA9IGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlLCAnbmd4LWZtOjogJyk7XG4gICAgcmV0dXJuIGJvdW5kTG9nRm47XG4gIH1cbn1cbiJdfQ==
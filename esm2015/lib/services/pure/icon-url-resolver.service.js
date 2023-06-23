/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { guesser } from '../../utils/file-icon-guesser';
import { Injectable, Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import path from 'path-browserify';
export class IconUrlResolverService {
    /**
     * @param {?} baseHref
     */
    constructor(baseHref) {
        this.baseHref = baseHref;
        this.iconAssetDirectory = '/assets/fileicons/';
    }
    /**
     * @param {?} filename
     * @return {?}
     */
    getFileIconUrl(filename) {
        return path.join(this.baseHref, this.iconAssetDirectory, guesser.getFileIconName(filename) + '.svg');
    }
    /**
     * @param {?} filename
     * @return {?}
     */
    getFolderIconUrl(filename) {
        return path.join(this.baseHref, this.iconAssetDirectory, guesser.getFolderIconName(filename) + '.svg');
    }
}
IconUrlResolverService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
IconUrlResolverService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [APP_BASE_HREF,] }] }
];
function IconUrlResolverService_tsickle_Closure_declarations() {
    /** @type {?} */
    IconUrlResolverService.prototype.iconAssetDirectory;
    /** @type {?} */
    IconUrlResolverService.prototype.baseHref;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi11cmwtcmVzb2x2ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9TaGl2YW5nL1BpIFNvZnR3YXJlL2ZpbGUtbWFuYWdlci9uZ3gtZmlsZW1hbmFnZXIvcHJvamVjdHMvbmd4LWZpbGVtYW5hZ2VyLWNsaWVudC1maXJlYmFzZS9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcHVyZS9pY29uLXVybC1yZXNvbHZlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sSUFBSSxNQUFNLGlCQUFpQixDQUFDO0FBR25DLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFFakMsWUFBMkMsUUFBZ0I7UUFBaEIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUQzRCwwQkFBcUIsb0JBQW9CLENBQUM7S0FDcUI7Ozs7O0lBRS9ELGNBQWMsQ0FBQyxRQUFnQjtRQUM3QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQ2QsSUFBSSxDQUFDLFFBQVEsRUFDYixJQUFJLENBQUMsa0JBQWtCLEVBQ3ZCLE9BQU8sQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUMzQyxDQUFDO0tBQ0g7Ozs7O0lBQ0QsZ0JBQWdCLENBQUMsUUFBZ0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUNkLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLGtCQUFrQixFQUN2QixPQUFPLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUM3QyxDQUFDO0tBQ0g7OztZQWxCRixVQUFVOzs7O3lDQUdJLE1BQU0sU0FBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3Vlc3NlciB9IGZyb20gJy4uLy4uL3V0aWxzL2ZpbGUtaWNvbi1ndWVzc2VyJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQVBQX0JBU0VfSFJFRiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoLWJyb3dzZXJpZnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSWNvblVybFJlc29sdmVyU2VydmljZSB7XG4gIGljb25Bc3NldERpcmVjdG9yeSA9ICcvYXNzZXRzL2ZpbGVpY29ucy8nO1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KEFQUF9CQVNFX0hSRUYpIHByaXZhdGUgYmFzZUhyZWY6IHN0cmluZykge31cblxuICBnZXRGaWxlSWNvblVybChmaWxlbmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHBhdGguam9pbihcbiAgICAgIHRoaXMuYmFzZUhyZWYsXG4gICAgICB0aGlzLmljb25Bc3NldERpcmVjdG9yeSxcbiAgICAgIGd1ZXNzZXIuZ2V0RmlsZUljb25OYW1lKGZpbGVuYW1lKSArICcuc3ZnJ1xuICAgICk7XG4gIH1cbiAgZ2V0Rm9sZGVySWNvblVybChmaWxlbmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHBhdGguam9pbihcbiAgICAgIHRoaXMuYmFzZUhyZWYsXG4gICAgICB0aGlzLmljb25Bc3NldERpcmVjdG9yeSxcbiAgICAgIGd1ZXNzZXIuZ2V0Rm9sZGVySWNvbk5hbWUoZmlsZW5hbWUpICsgJy5zdmcnXG4gICAgKTtcbiAgfVxufVxuIl19
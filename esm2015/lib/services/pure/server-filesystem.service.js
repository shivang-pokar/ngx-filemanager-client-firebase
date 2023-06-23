/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from '../logging/logger.service';
import { FileSystemRequestBuilder } from './server-filesystem-request';
import { EnsureNoTrailingSlash } from '../../utils/path-helpers';
export class ServerFilesystemProviderService {
    /**
     * @param {?} http
     * @param {?} logger
     */
    constructor(http, logger) {
        this.http = http;
        this.logger = logger;
        this.LOG_ID = Math.random().toString(32).slice(2, 10);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    makeAPIRequest(action) {
        this.logger.info('makeAPIRequest', { action, context: this });
        return new FileSystemRequestBuilder(this.http, this.apiEndpoint, this.logger, this.LOG_ID).AddBody({
            action: action,
            bucketname: this.bucketname,
            isAdmin: this.isAdmin,
        });
    }
    /**
     * @param {?} config
     * @return {?}
     */
    Initialize(config) {
        this.bucketname = config.bucketname;
        this.isAdmin = config.isAdmin;
        this.apiEndpoint = EnsureNoTrailingSlash(config.apiEndpoint);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    List(path) {
        return this.makeAPIRequest('list')
            .PatchBody({
            path: path,
        })
            .POST();
    }
    /**
     * @param {?} newPath
     * @param {?=} disableNoClobber
     * @return {?}
     */
    CreateFolder(newPath, disableNoClobber) {
        return this.makeAPIRequest('createFolder')
            .PatchBody({
            newPath: newPath,
        })
            .POST();
    }
    /**
     * @param {?} singleFileName
     * @param {?} newPath
     * @return {?}
     */
    Copy(singleFileName, newPath) {
        return this.makeAPIRequest('copy')
            .PatchBody({
            singleFileName: singleFileName,
            newPath: newPath,
        })
            .POST();
    }
    /**
     * @param {?} item
     * @param {?} newPath
     * @return {?}
     */
    Move(item, newPath) {
        return this.makeAPIRequest('move')
            .PatchBody({
            items: [item],
            newPath: newPath,
        })
            .POST();
    }
    /**
     * @param {?} item
     * @param {?} newItemPath
     * @return {?}
     */
    Rename(item, newItemPath) {
        return this.makeAPIRequest('rename')
            .PatchBody({
            item: item,
            newItemPath: newItemPath,
        })
            .POST();
    }
    /**
     * @param {?} item
     * @param {?} content
     * @return {?}
     */
    Edit(item, content) {
        return this.makeAPIRequest('edit')
            .PatchBody({
            item: item,
            content: content,
        })
            .POST();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    Getcontent(item) {
        return this.makeAPIRequest('getContent')
            .PatchBody({
            item: item,
        })
            .POST();
    }
    /**
     * @param {?} item
     * @param {?} role
     * @param {?} entity
     * @param {?=} recursive
     * @return {?}
     */
    SetPermissions(item, role, entity, recursive) {
        return this.makeAPIRequest('changePermissions')
            .PatchBody({
            items: [item],
            role: role,
            entity: entity,
            recursive: recursive,
        })
            .POST();
    }
    /**
     * @param {?} items
     * @param {?} newPath
     * @return {?}
     */
    MoveMultiple(items, newPath) {
        return this.makeAPIRequest('move')
            .PatchBody({
            items: items,
            newPath: newPath,
        })
            .POST();
    }
    /**
     * @param {?} items
     * @param {?} newPath
     * @return {?}
     */
    CopyMultiple(items, newPath) {
        return this.makeAPIRequest('copy')
            .PatchBody({
            items: items,
            newPath: newPath,
        })
            .POST();
    }
    /**
     * @param {?} items
     * @param {?} role
     * @param {?} entity
     * @param {?=} recursive
     * @return {?}
     */
    SetPermissionsMultiple(items, role, entity, recursive) {
        return this.makeAPIRequest('changePermissions')
            .PatchBody({
            items: items,
            role: role,
            entity: entity,
            recursive: recursive,
        })
            .POST();
    }
    /**
     * @param {?} items
     * @param {?} permissionsObj
     * @param {?=} recursive
     * @return {?}
     */
    SetPermissionsObjectMultiple(items, permissionsObj, recursive) {
        return this.makeAPIRequest('changePermissionsObject')
            .PatchBody({
            items: items,
            permissionsObj: permissionsObj,
            recursive: recursive,
        })
            .POST();
    }
    /**
     * @param {?} items
     * @return {?}
     */
    Remove(items) {
        return this.makeAPIRequest('remove')
            .PatchBody({
            items: items,
        })
            .POST();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    GetSingle(item) {
        return this.makeAPIRequest('getSingle')
            .PatchBody({
            item: item,
        })
            .POST();
    }
    /**
     * @param {?} currentPath
     * @return {?}
     */
    GetUploadApiUrl(currentPath) {
        const /** @type {?} */ uploadApiEndpoint = this.apiEndpoint +
            '/upload?' +
            'bucketname=' +
            this.bucketname +
            '&directoryPath=' +
            currentPath;
        return uploadApiEndpoint;
    }
    /**
     * @return {?}
     */
    CloneProvider() {
        return new ServerFilesystemProviderService(this.http, this.logger);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    CreateDownloadLink(file) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const /** @type {?} */ response = yield this.makeAPIRequest('getSingle')
                    .PatchBody({
                    item: file.fullPath,
                })
                    .POST();
                const /** @type {?} */ url = response.result.url;
                return url;
            }
            catch (/** @type {?} */ error) {
                throw new Error(error.message);
            }
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    Upload(item) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
}
ServerFilesystemProviderService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ServerFilesystemProviderService.ctorParameters = () => [
    { type: HttpClient },
    { type: LoggerService }
];
function ServerFilesystemProviderService_tsickle_Closure_declarations() {
    /** @type {?} */
    ServerFilesystemProviderService.prototype.bucketname;
    /** @type {?} */
    ServerFilesystemProviderService.prototype.apiEndpoint;
    /** @type {?} */
    ServerFilesystemProviderService.prototype.isAdmin;
    /** @type {?} */
    ServerFilesystemProviderService.prototype.LOG_ID;
    /** @type {?} */
    ServerFilesystemProviderService.prototype.http;
    /** @type {?} */
    ServerFilesystemProviderService.prototype.logger;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLWZpbGVzeXN0ZW0uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9TaGl2YW5nL1BpIFNvZnR3YXJlL2ZpbGUtbWFuYWdlci9uZ3gtZmlsZW1hbmFnZXIvcHJvamVjdHMvbmd4LWZpbGVtYW5hZ2VyLWNsaWVudC1maXJlYmFzZS9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcHVyZS9zZXJ2ZXItZmlsZXN5c3RlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR2pFLE1BQU0sT0FBTywrQkFBK0I7Ozs7O0lBTzFDLFlBQW9CLElBQWdCLEVBQVUsTUFBcUI7UUFBL0MsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWU7c0JBRmxELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7S0FFZTs7Ozs7SUFFL0QsY0FBYyxDQUFDLE1BQW1DO1FBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRTlELE9BQU8sSUFBSSx3QkFBd0IsQ0FDakMsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxNQUFNLENB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U0FDWCxDQUFDO2FBQ0QsSUFBSSxFQUFFLENBQUM7S0FDWDs7Ozs7SUFFRCxlQUFlLENBQUMsV0FBbUI7UUFDakMsdUJBQU0saUJBQWlCLEdBQ3JCLElBQUksQ0FBQyxXQUFXO1lBQ2hCLFVBQVU7WUFDVixhQUFhO1lBQ2IsSUFBSSxDQUFDLFVBQVU7WUFDZixpQkFBaUI7WUFDakIsV0FBVyxDQUFDO1FBQ2QsT0FBTyxpQkFBaUIsQ0FBQztLQUMxQjs7OztJQUVELGFBQWE7UUFDWCxPQUFPLElBQUksK0JBQStCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDcEU7Ozs7O0lBRUssa0JBQWtCLENBQUMsSUFBdUI7O1lBQzlDLElBQUk7Z0JBQ0YsdUJBQU0sUUFBUSxHQUErQixNQUFNLElBQUksQ0FBQyxjQUFjLENBQ3BFLFdBQVcsQ0FDWjtxQkFDRSxTQUFTLENBQTZCO29CQUNyQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVE7aUJBQ3BCLENBQUM7cUJBQ0QsSUFBSSxFQUFFLENBQUM7Z0JBQ1YsdUJBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNoQyxPQUFPLEdBQUcsQ0FBQzthQUNaO1lBQUMsd0JBQU8sS0FBSyxFQUFFO2dCQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hDOztLQUNGOzs7OztJQUVLLE1BQU0sQ0FBQyxJQUFZOztZQUN2QixPQUFPLElBQUksQ0FBQzs7S0FDYjs7O1lBNU5GLFVBQVU7Ozs7WUFORixVQUFVO1lBRVYsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb3JlVHlwZXMsIEZpbGVTeXN0ZW1Qcm92aWRlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUtdHlwZXMnO1xuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL2xvZ2dpbmcvbG9nZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmlsZVN5c3RlbVJlcXVlc3RCdWlsZGVyIH0gZnJvbSAnLi9zZXJ2ZXItZmlsZXN5c3RlbS1yZXF1ZXN0JztcbmltcG9ydCB7IEVuc3VyZU5vVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uL3V0aWxzL3BhdGgtaGVscGVycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJGaWxlc3lzdGVtUHJvdmlkZXJTZXJ2aWNlIGltcGxlbWVudHMgRmlsZVN5c3RlbVByb3ZpZGVyIHtcbiAgcHJpdmF0ZSBidWNrZXRuYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgYXBpRW5kcG9pbnQ6IHN0cmluZztcbiAgcHJpdmF0ZSBpc0FkbWluOiBib29sZWFuO1xuXG4gIHByaXZhdGUgTE9HX0lEID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMiwgMTApO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UpIHt9XG5cbiAgcHJpdmF0ZSBtYWtlQVBJUmVxdWVzdChhY3Rpb246IENvcmVUeXBlcy5GaWxlTWFuYWdlckFjdGlvbikge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oJ21ha2VBUElSZXF1ZXN0JywgeyBhY3Rpb24sIGNvbnRleHQ6IHRoaXMgfSk7XG5cbiAgICByZXR1cm4gbmV3IEZpbGVTeXN0ZW1SZXF1ZXN0QnVpbGRlcihcbiAgICAgIHRoaXMuaHR0cCxcbiAgICAgIHRoaXMuYXBpRW5kcG9pbnQsXG4gICAgICB0aGlzLmxvZ2dlcixcbiAgICAgIHRoaXMuTE9HX0lEXG4gICAgKS5BZGRCb2R5KHtcbiAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgYnVja2V0bmFtZTogdGhpcy5idWNrZXRuYW1lLFxuICAgICAgaXNBZG1pbjogdGhpcy5pc0FkbWluLFxuICAgIH0pO1xuICB9XG5cbiAgSW5pdGlhbGl6ZShjb25maWc6IHtcbiAgICBidWNrZXRuYW1lOiBzdHJpbmc7XG4gICAgYXBpRW5kcG9pbnQ6IHN0cmluZztcbiAgICBpc0FkbWluOiBib29sZWFuO1xuICB9KSB7XG4gICAgdGhpcy5idWNrZXRuYW1lID0gY29uZmlnLmJ1Y2tldG5hbWU7XG4gICAgdGhpcy5pc0FkbWluID0gY29uZmlnLmlzQWRtaW47XG4gICAgdGhpcy5hcGlFbmRwb2ludCA9IEVuc3VyZU5vVHJhaWxpbmdTbGFzaChjb25maWcuYXBpRW5kcG9pbnQpO1xuICB9XG5cbiAgTGlzdChwYXRoOiBzdHJpbmcpOiBQcm9taXNlPENvcmVUeXBlcy5SZXNCb2R5TGlzdD4ge1xuICAgIHJldHVybiB0aGlzLm1ha2VBUElSZXF1ZXN0KCdsaXN0JylcbiAgICAgIC5QYXRjaEJvZHk8Q29yZVR5cGVzLlJlcUJvZHlMaXN0Pih7XG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICB9KVxuICAgICAgLlBPU1QoKTtcbiAgfVxuXG4gIENyZWF0ZUZvbGRlcihcbiAgICBuZXdQYXRoOiBzdHJpbmcsXG4gICAgZGlzYWJsZU5vQ2xvYmJlcj86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb3JlVHlwZXMuUmVzQm9keUNyZWF0ZUZvbGRlcj4ge1xuICAgIHJldHVybiB0aGlzLm1ha2VBUElSZXF1ZXN0KCdjcmVhdGVGb2xkZXInKVxuICAgICAgLlBhdGNoQm9keTxDb3JlVHlwZXMuUmVxQm9keUNyZWF0ZUZvbGRlcj4oe1xuICAgICAgICBuZXdQYXRoOiBuZXdQYXRoLFxuICAgICAgfSlcbiAgICAgIC5QT1NUKCk7XG4gIH1cblxuICBDb3B5KFxuICAgIHNpbmdsZUZpbGVOYW1lOiBzdHJpbmcsXG4gICAgbmV3UGF0aDogc3RyaW5nXG4gICk6IFByb21pc2U8Q29yZVR5cGVzLlJlc0JvZHlDb3B5PiB7XG4gICAgcmV0dXJuIHRoaXMubWFrZUFQSVJlcXVlc3QoJ2NvcHknKVxuICAgICAgLlBhdGNoQm9keTxDb3JlVHlwZXMuUmVxQm9keUNvcHk+KHtcbiAgICAgICAgc2luZ2xlRmlsZU5hbWU6IHNpbmdsZUZpbGVOYW1lLFxuICAgICAgICBuZXdQYXRoOiBuZXdQYXRoLFxuICAgICAgfSlcbiAgICAgIC5QT1NUKCk7XG4gIH1cblxuICBNb3ZlKGl0ZW06IHN0cmluZywgbmV3UGF0aDogc3RyaW5nKTogUHJvbWlzZTxDb3JlVHlwZXMuUmVzQm9keU1vdmU+IHtcbiAgICByZXR1cm4gdGhpcy5tYWtlQVBJUmVxdWVzdCgnbW92ZScpXG4gICAgICAuUGF0Y2hCb2R5PENvcmVUeXBlcy5SZXFCb2R5TW92ZT4oe1xuICAgICAgICBpdGVtczogW2l0ZW1dLFxuICAgICAgICBuZXdQYXRoOiBuZXdQYXRoLFxuICAgICAgfSlcbiAgICAgIC5QT1NUKCk7XG4gIH1cblxuICBSZW5hbWUoaXRlbTogc3RyaW5nLCBuZXdJdGVtUGF0aDogc3RyaW5nKTogUHJvbWlzZTxDb3JlVHlwZXMuUmVzQm9keVJlbmFtZT4ge1xuICAgIHJldHVybiB0aGlzLm1ha2VBUElSZXF1ZXN0KCdyZW5hbWUnKVxuICAgICAgLlBhdGNoQm9keTxDb3JlVHlwZXMuUmVxQm9keVJlbmFtZT4oe1xuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICBuZXdJdGVtUGF0aDogbmV3SXRlbVBhdGgsXG4gICAgICB9KVxuICAgICAgLlBPU1QoKTtcbiAgfVxuXG4gIEVkaXQoaXRlbTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpOiBQcm9taXNlPENvcmVUeXBlcy5SZXNCb2R5RWRpdD4ge1xuICAgIHJldHVybiB0aGlzLm1ha2VBUElSZXF1ZXN0KCdlZGl0JylcbiAgICAgIC5QYXRjaEJvZHk8Q29yZVR5cGVzLlJlcUJvZHlFZGl0Pih7XG4gICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICB9KVxuICAgICAgLlBPU1QoKTtcbiAgfVxuXG4gIEdldGNvbnRlbnQoaXRlbTogc3RyaW5nKTogUHJvbWlzZTxDb3JlVHlwZXMuUmVzQm9keUdldENvbnRlbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5tYWtlQVBJUmVxdWVzdCgnZ2V0Q29udGVudCcpXG4gICAgICAuUGF0Y2hCb2R5PENvcmVUeXBlcy5SZXFCb2R5RWRpdD4oe1xuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgfSlcbiAgICAgIC5QT1NUKCk7XG4gIH1cblxuICBTZXRQZXJtaXNzaW9ucyhcbiAgICBpdGVtOiBzdHJpbmcsXG4gICAgcm9sZTogQ29yZVR5cGVzLlBlcm1pc3Npb25zUm9sZSxcbiAgICBlbnRpdHk6IENvcmVUeXBlcy5GaWxlUGVybWlzc2lvbkVudGl0eSxcbiAgICByZWN1cnNpdmU/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29yZVR5cGVzLlJlc0JvZHlTZXRQZXJtaXNzaW9ucz4ge1xuICAgIHJldHVybiB0aGlzLm1ha2VBUElSZXF1ZXN0KCdjaGFuZ2VQZXJtaXNzaW9ucycpXG4gICAgICAuUGF0Y2hCb2R5PENvcmVUeXBlcy5SZXFCb2R5U2V0UGVybWlzc2lvbnM+KHtcbiAgICAgICAgaXRlbXM6IFtpdGVtXSxcbiAgICAgICAgcm9sZTogcm9sZSxcbiAgICAgICAgZW50aXR5OiBlbnRpdHksXG4gICAgICAgIHJlY3Vyc2l2ZTogcmVjdXJzaXZlLFxuICAgICAgfSlcbiAgICAgIC5QT1NUKCk7XG4gIH1cblxuICBNb3ZlTXVsdGlwbGUoXG4gICAgaXRlbXM6IHN0cmluZ1tdLFxuICAgIG5ld1BhdGg6IHN0cmluZ1xuICApOiBQcm9taXNlPENvcmVUeXBlcy5SZXNCb2R5TW92ZT4ge1xuICAgIHJldHVybiB0aGlzLm1ha2VBUElSZXF1ZXN0KCdtb3ZlJylcbiAgICAgIC5QYXRjaEJvZHk8Q29yZVR5cGVzLlJlcUJvZHlNb3ZlPih7XG4gICAgICAgIGl0ZW1zOiBpdGVtcyxcbiAgICAgICAgbmV3UGF0aDogbmV3UGF0aCxcbiAgICAgIH0pXG4gICAgICAuUE9TVCgpO1xuICB9XG5cbiAgQ29weU11bHRpcGxlKFxuICAgIGl0ZW1zOiBzdHJpbmdbXSxcbiAgICBuZXdQYXRoOiBzdHJpbmdcbiAgKTogUHJvbWlzZTxDb3JlVHlwZXMuUmVzQm9keUNvcHk+IHtcbiAgICByZXR1cm4gdGhpcy5tYWtlQVBJUmVxdWVzdCgnY29weScpXG4gICAgICAuUGF0Y2hCb2R5PENvcmVUeXBlcy5SZXFCb2R5Q29weT4oe1xuICAgICAgICBpdGVtczogaXRlbXMsXG4gICAgICAgIG5ld1BhdGg6IG5ld1BhdGgsXG4gICAgICB9KVxuICAgICAgLlBPU1QoKTtcbiAgfVxuXG4gIFNldFBlcm1pc3Npb25zTXVsdGlwbGUoXG4gICAgaXRlbXM6IHN0cmluZ1tdLFxuICAgIHJvbGU6IENvcmVUeXBlcy5QZXJtaXNzaW9uc1JvbGUsXG4gICAgZW50aXR5OiBDb3JlVHlwZXMuRmlsZVBlcm1pc3Npb25FbnRpdHksXG4gICAgcmVjdXJzaXZlPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvcmVUeXBlcy5SZXNCb2R5U2V0UGVybWlzc2lvbnM+IHtcbiAgICByZXR1cm4gdGhpcy5tYWtlQVBJUmVxdWVzdCgnY2hhbmdlUGVybWlzc2lvbnMnKVxuICAgICAgLlBhdGNoQm9keTxDb3JlVHlwZXMuUmVxQm9keVNldFBlcm1pc3Npb25zPih7XG4gICAgICAgIGl0ZW1zOiBpdGVtcyxcbiAgICAgICAgcm9sZTogcm9sZSxcbiAgICAgICAgZW50aXR5OiBlbnRpdHksXG4gICAgICAgIHJlY3Vyc2l2ZTogcmVjdXJzaXZlLFxuICAgICAgfSlcbiAgICAgIC5QT1NUKCk7XG4gIH1cblxuICBTZXRQZXJtaXNzaW9uc09iamVjdE11bHRpcGxlKFxuICAgIGl0ZW1zOiBzdHJpbmdbXSxcbiAgICBwZXJtaXNzaW9uc09iajogQ29yZVR5cGVzLkZpbGVQZXJtaXNzaW9uc09iamVjdCxcbiAgICByZWN1cnNpdmU/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29yZVR5cGVzLlJlc0JvZHlTZXRQZXJtaXNzaW9ucz4ge1xuICAgIHJldHVybiB0aGlzLm1ha2VBUElSZXF1ZXN0KCdjaGFuZ2VQZXJtaXNzaW9uc09iamVjdCcpXG4gICAgICAuUGF0Y2hCb2R5PENvcmVUeXBlcy5SZXFCb2R5U2V0UGVybWlzc2lvbnNPYmplY3Q+KHtcbiAgICAgICAgaXRlbXM6IGl0ZW1zLFxuICAgICAgICBwZXJtaXNzaW9uc09iajogcGVybWlzc2lvbnNPYmosXG4gICAgICAgIHJlY3Vyc2l2ZTogcmVjdXJzaXZlLFxuICAgICAgfSlcbiAgICAgIC5QT1NUKCk7XG4gIH1cblxuICBSZW1vdmUoaXRlbXM6IHN0cmluZ1tdKTogUHJvbWlzZTxDb3JlVHlwZXMuUmVzQm9keVJlbW92ZT4ge1xuICAgIHJldHVybiB0aGlzLm1ha2VBUElSZXF1ZXN0KCdyZW1vdmUnKVxuICAgICAgLlBhdGNoQm9keTxDb3JlVHlwZXMuUmVxQm9keVJlbW92ZT4oe1xuICAgICAgICBpdGVtczogaXRlbXMsXG4gICAgICB9KVxuICAgICAgLlBPU1QoKTtcbiAgfVxuXG4gIEdldFNpbmdsZShpdGVtOiBzdHJpbmcpOiBQcm9taXNlPENvcmVUeXBlcy5SZXNCb2R5R2V0U2luZ2xlPiB7XG4gICAgcmV0dXJuIHRoaXMubWFrZUFQSVJlcXVlc3QoJ2dldFNpbmdsZScpXG4gICAgICAuUGF0Y2hCb2R5PENvcmVUeXBlcy5SZXFCb2R5R2V0U2luZ2xlPih7XG4gICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICB9KVxuICAgICAgLlBPU1QoKTtcbiAgfVxuXG4gIEdldFVwbG9hZEFwaVVybChjdXJyZW50UGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCB1cGxvYWRBcGlFbmRwb2ludCA9XG4gICAgICB0aGlzLmFwaUVuZHBvaW50ICtcbiAgICAgICcvdXBsb2FkPycgK1xuICAgICAgJ2J1Y2tldG5hbWU9JyArXG4gICAgICB0aGlzLmJ1Y2tldG5hbWUgK1xuICAgICAgJyZkaXJlY3RvcnlQYXRoPScgK1xuICAgICAgY3VycmVudFBhdGg7XG4gICAgcmV0dXJuIHVwbG9hZEFwaUVuZHBvaW50O1xuICB9XG5cbiAgQ2xvbmVQcm92aWRlcigpOiBGaWxlU3lzdGVtUHJvdmlkZXIge1xuICAgIHJldHVybiBuZXcgU2VydmVyRmlsZXN5c3RlbVByb3ZpZGVyU2VydmljZSh0aGlzLmh0dHAsIHRoaXMubG9nZ2VyKTtcbiAgfVxuXG4gIGFzeW5jIENyZWF0ZURvd25sb2FkTGluayhmaWxlOiBDb3JlVHlwZXMuUmVzRmlsZSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlOiBDb3JlVHlwZXMuUmVzQm9keUdldFNpbmdsZSA9IGF3YWl0IHRoaXMubWFrZUFQSVJlcXVlc3QoXG4gICAgICAgICdnZXRTaW5nbGUnXG4gICAgICApXG4gICAgICAgIC5QYXRjaEJvZHk8Q29yZVR5cGVzLlJlcUJvZHlHZXRTaW5nbGU+KHtcbiAgICAgICAgICBpdGVtOiBmaWxlLmZ1bGxQYXRoLFxuICAgICAgICB9KVxuICAgICAgICAuUE9TVCgpO1xuICAgICAgY29uc3QgdXJsID0gcmVzcG9uc2UucmVzdWx0LnVybDtcbiAgICAgIHJldHVybiB1cmw7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBVcGxvYWQoaXRlbTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdfQ==
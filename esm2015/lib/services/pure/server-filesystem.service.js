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
        }).PatchHeaders({
            Authorization: window.localStorage.getItem('token')
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLWZpbGVzeXN0ZW0uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9TaGl2YW5nL1BpIFNvZnR3YXJlL2ZpbGUtbWFuYWdlci9uZ3gtZmlsZW1hbmFnZXIvcHJvamVjdHMvbmd4LWZpbGVtYW5hZ2VyLWNsaWVudC1maXJlYmFzZS9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcHVyZS9zZXJ2ZXItZmlsZXN5c3RlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR2pFLE1BQU0sT0FBTywrQkFBK0I7Ozs7O0lBTzFDLFlBQW9CLElBQWdCLEVBQVUsTUFBcUI7UUFBL0MsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWU7c0JBRmxELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7S0FFZ0I7Ozs7O0lBRWhFLGNBQWMsQ0FBQyxNQUFtQztRQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUU5RCxPQUFPLElBQUksd0JBQXdCLENBQ2pDLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsTUFBTSxD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QVk7UUFDcEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQzthQUNwQyxTQUFTLENBQTZCO1lBQ3JDLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQzthQUNELElBQUksRUFBRSxDQUFDO0tBQ1g7Ozs7O0lBRUQsZUFBZSxDQUFDLFdBQW1CO1FBQ2pDLHVCQUFNLGlCQUFpQixHQUNyQixJQUFJLENBQUMsV0FBVztZQUNoQixVQUFVO1lBQ1YsYUFBYTtZQUNiLElBQUksQ0FBQyxVQUFVO1lBQ2YsaUJBQWlCO1lBQ2pCLFdBQVcsQ0FBQztRQUNkLE9BQU8saUJBQWlCLENBQUM7S0FDMUI7Ozs7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLCtCQUErQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3BFOzs7OztJQUVLLGtCQUFrQixDQUFDLElBQXVCOztZQUM5QyxJQUFJO2dCQUNGLHVCQUFNLFFBQVEsR0FBK0IsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUNwRSxXQUFXLENBQ1o7cUJBQ0UsU0FBUyxDQUE2QjtvQkFDckMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRO2lCQUNwQixDQUFDO3FCQUNELElBQUksRUFBRSxDQUFDO2dCQUNWLHVCQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDaEMsT0FBTyxHQUFHLENBQUM7YUFDWjtZQUFDLHdCQUFPLEtBQUssRUFBRTtnQkFDZCxNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNoQzs7S0FDRjs7Ozs7SUFFSyxNQUFNLENBQUMsSUFBWTs7WUFDdkIsT0FBTyxJQUFJLENBQUM7O0tBQ2I7OztZQTlORixVQUFVOzs7O1lBTkYsVUFBVTtZQUVWLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29yZVR5cGVzLCBGaWxlU3lzdGVtUHJvdmlkZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlLXR5cGVzJztcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi9sb2dnaW5nL2xvZ2dlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZpbGVTeXN0ZW1SZXF1ZXN0QnVpbGRlciB9IGZyb20gJy4vc2VydmVyLWZpbGVzeXN0ZW0tcmVxdWVzdCc7XG5pbXBvcnQgeyBFbnN1cmVOb1RyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi91dGlscy9wYXRoLWhlbHBlcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VydmVyRmlsZXN5c3RlbVByb3ZpZGVyU2VydmljZSBpbXBsZW1lbnRzIEZpbGVTeXN0ZW1Qcm92aWRlciB7XG4gIHByaXZhdGUgYnVja2V0bmFtZTogc3RyaW5nO1xuICBwcml2YXRlIGFwaUVuZHBvaW50OiBzdHJpbmc7XG4gIHByaXZhdGUgaXNBZG1pbjogYm9vbGVhbjtcblxuICBwcml2YXRlIExPR19JRCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIsIDEwKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlKSB7IH1cblxuICBwcml2YXRlIG1ha2VBUElSZXF1ZXN0KGFjdGlvbjogQ29yZVR5cGVzLkZpbGVNYW5hZ2VyQWN0aW9uKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbygnbWFrZUFQSVJlcXVlc3QnLCB7IGFjdGlvbiwgY29udGV4dDogdGhpcyB9KTtcblxuICAgIHJldHVybiBuZXcgRmlsZVN5c3RlbVJlcXVlc3RCdWlsZGVyKFxuICAgICAgdGhpcy5odHRwLFxuICAgICAgdGhpcy5hcGlFbmRwb2ludCxcbiAgICAgIHRoaXMubG9nZ2VyLFxuICAgICAgdGhpcy5MT0dfSURcbiAgICApLkFkZEJvZHkoe1xuICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICBidWNrZXRuYW1lOiB0aGlzLmJ1Y2tldG5hbWUsXG4gICAgICBpc0FkbWluOiB0aGlzLmlzQWRtaW4sXG4gICAgfSk7XG4gIH1cblxuICBJbml0aWFsaXplKGNvbmZpZzoge1xuICAgIGJ1Y2tldG5hbWU6IHN0cmluZztcbiAgICBhcGlFbmRwb2ludDogc3RyaW5nO1xuICAgIGlzQWRtaW46IGJvb2xlYW47XG4gIH0pIHtcbiAgICB0aGlzLmJ1Y2tldG5hbWUgPSBjb25maWcuYnVja2V0bmFtZTtcbiAgICB0aGlzLmlzQWRtaW4gPSBjb25maWcuaXNBZG1pbjtcbiAgICB0aGlzLmFwaUVuZHBvaW50ID0gRW5zdXJlTm9UcmFpbGluZ1NsYXNoKGNvbmZpZy5hcGlFbmRwb2ludCk7XG4gIH1cblxuICBMaXN0KHBhdGg6IHN0cmluZyk6IFByb21pc2U8Q29yZVR5cGVzLlJlc0JvZHlMaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMubWFrZUFQSVJlcXVlc3QoJ2xpc3QnKVxuICAgICAgLlBhdGNoQm9keTxDb3JlVHlwZXMuUmVxQm9keUxpc3Q+KHtcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgIH0pLlBhdGNoSGVhZGVycyh7XG4gICAgICAgIEF1dGhvcml6YXRpb246IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuICAgICAgfSlcbiAgICAgIC5QT1NUKCk7XG4gIH1cblxuICBDcmVhdGVGb2xkZXIoXG4gICAgbmV3UGF0aDogc3RyaW5nLFxuICAgIGRpc2FibGVOb0Nsb2JiZXI/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29yZVR5cGVzLlJlc0JvZHlDcmVhdGVGb2xkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5tYWtlQVBJUmVxdWVzdCgnY3JlYXRlRm9sZGVyJylcbiAgICAgIC5QYXRjaEJvZHk8Q29yZVR5cGVzLlJlcUJvZHlDcmVhdGVGb2xkZXI+KHtcbiAgICAgICAgbmV3UGF0aDogbmV3UGF0aCxcbiAgICAgIH0pXG4gICAgICAuUE9TVCgpO1xuICB9XG5cbiAgQ29weShcbiAgICBzaW5nbGVGaWxlTmFtZTogc3RyaW5nLFxuICAgIG5ld1BhdGg6IHN0cmluZ1xuICApOiBQcm9taXNlPENvcmVUeXBlcy5SZXNCb2R5Q29weT4ge1xuICAgIHJldHVybiB0aGlzLm1ha2VBUElSZXF1ZXN0KCdjb3B5JylcbiAgICAgIC5QYXRjaEJvZHk8Q29yZVR5cGVzLlJlcUJvZHlDb3B5Pih7XG4gICAgICAgIHNpbmdsZUZpbGVOYW1lOiBzaW5nbGVGaWxlTmFtZSxcbiAgICAgICAgbmV3UGF0aDogbmV3UGF0aCxcbiAgICAgIH0pXG4gICAgICAuUE9TVCgpO1xuICB9XG5cbiAgTW92ZShpdGVtOiBzdHJpbmcsIG5ld1BhdGg6IHN0cmluZyk6IFByb21pc2U8Q29yZVR5cGVzLlJlc0JvZHlNb3ZlPiB7XG4gICAgcmV0dXJuIHRoaXMubWFrZUFQSVJlcXVlc3QoJ21vdmUnKVxuICAgICAgLlBhdGNoQm9keTxDb3JlVHlwZXMuUmVxQm9keU1vdmU+KHtcbiAgICAgICAgaXRlbXM6IFtpdGVtXSxcbiAgICAgICAgbmV3UGF0aDogbmV3UGF0aCxcbiAgICAgIH0pXG4gICAgICAuUE9TVCgpO1xuICB9XG5cbiAgUmVuYW1lKGl0ZW06IHN0cmluZywgbmV3SXRlbVBhdGg6IHN0cmluZyk6IFByb21pc2U8Q29yZVR5cGVzLlJlc0JvZHlSZW5hbWU+IHtcbiAgICByZXR1cm4gdGhpcy5tYWtlQVBJUmVxdWVzdCgncmVuYW1lJylcbiAgICAgIC5QYXRjaEJvZHk8Q29yZVR5cGVzLlJlcUJvZHlSZW5hbWU+KHtcbiAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgbmV3SXRlbVBhdGg6IG5ld0l0ZW1QYXRoLFxuICAgICAgfSlcbiAgICAgIC5QT1NUKCk7XG4gIH1cblxuICBFZGl0KGl0ZW06IHN0cmluZywgY29udGVudDogc3RyaW5nKTogUHJvbWlzZTxDb3JlVHlwZXMuUmVzQm9keUVkaXQ+IHtcbiAgICByZXR1cm4gdGhpcy5tYWtlQVBJUmVxdWVzdCgnZWRpdCcpXG4gICAgICAuUGF0Y2hCb2R5PENvcmVUeXBlcy5SZXFCb2R5RWRpdD4oe1xuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgfSlcbiAgICAgIC5QT1NUKCk7XG4gIH1cblxuICBHZXRjb250ZW50KGl0ZW06IHN0cmluZyk6IFByb21pc2U8Q29yZVR5cGVzLlJlc0JvZHlHZXRDb250ZW50PiB7XG4gICAgcmV0dXJuIHRoaXMubWFrZUFQSVJlcXVlc3QoJ2dldENvbnRlbnQnKVxuICAgICAgLlBhdGNoQm9keTxDb3JlVHlwZXMuUmVxQm9keUVkaXQ+KHtcbiAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgIH0pXG4gICAgICAuUE9TVCgpO1xuICB9XG5cbiAgU2V0UGVybWlzc2lvbnMoXG4gICAgaXRlbTogc3RyaW5nLFxuICAgIHJvbGU6IENvcmVUeXBlcy5QZXJtaXNzaW9uc1JvbGUsXG4gICAgZW50aXR5OiBDb3JlVHlwZXMuRmlsZVBlcm1pc3Npb25FbnRpdHksXG4gICAgcmVjdXJzaXZlPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvcmVUeXBlcy5SZXNCb2R5U2V0UGVybWlzc2lvbnM+IHtcbiAgICByZXR1cm4gdGhpcy5tYWtlQVBJUmVxdWVzdCgnY2hhbmdlUGVybWlzc2lvbnMnKVxuICAgICAgLlBhdGNoQm9keTxDb3JlVHlwZXMuUmVxQm9keVNldFBlcm1pc3Npb25zPih7XG4gICAgICAgIGl0ZW1zOiBbaXRlbV0sXG4gICAgICAgIHJvbGU6IHJvbGUsXG4gICAgICAgIGVudGl0eTogZW50aXR5LFxuICAgICAgICByZWN1cnNpdmU6IHJlY3Vyc2l2ZSxcbiAgICAgIH0pXG4gICAgICAuUE9TVCgpO1xuICB9XG5cbiAgTW92ZU11bHRpcGxlKFxuICAgIGl0ZW1zOiBzdHJpbmdbXSxcbiAgICBuZXdQYXRoOiBzdHJpbmdcbiAgKTogUHJvbWlzZTxDb3JlVHlwZXMuUmVzQm9keU1vdmU+IHtcbiAgICByZXR1cm4gdGhpcy5tYWtlQVBJUmVxdWVzdCgnbW92ZScpXG4gICAgICAuUGF0Y2hCb2R5PENvcmVUeXBlcy5SZXFCb2R5TW92ZT4oe1xuICAgICAgICBpdGVtczogaXRlbXMsXG4gICAgICAgIG5ld1BhdGg6IG5ld1BhdGgsXG4gICAgICB9KVxuICAgICAgLlBPU1QoKTtcbiAgfVxuXG4gIENvcHlNdWx0aXBsZShcbiAgICBpdGVtczogc3RyaW5nW10sXG4gICAgbmV3UGF0aDogc3RyaW5nXG4gICk6IFByb21pc2U8Q29yZVR5cGVzLlJlc0JvZHlDb3B5PiB7XG4gICAgcmV0dXJuIHRoaXMubWFrZUFQSVJlcXVlc3QoJ2NvcHknKVxuICAgICAgLlBhdGNoQm9keTxDb3JlVHlwZXMuUmVxQm9keUNvcHk+KHtcbiAgICAgICAgaXRlbXM6IGl0ZW1zLFxuICAgICAgICBuZXdQYXRoOiBuZXdQYXRoLFxuICAgICAgfSlcbiAgICAgIC5QT1NUKCk7XG4gIH1cblxuICBTZXRQZXJtaXNzaW9uc011bHRpcGxlKFxuICAgIGl0ZW1zOiBzdHJpbmdbXSxcbiAgICByb2xlOiBDb3JlVHlwZXMuUGVybWlzc2lvbnNSb2xlLFxuICAgIGVudGl0eTogQ29yZVR5cGVzLkZpbGVQZXJtaXNzaW9uRW50aXR5LFxuICAgIHJlY3Vyc2l2ZT86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb3JlVHlwZXMuUmVzQm9keVNldFBlcm1pc3Npb25zPiB7XG4gICAgcmV0dXJuIHRoaXMubWFrZUFQSVJlcXVlc3QoJ2NoYW5nZVBlcm1pc3Npb25zJylcbiAgICAgIC5QYXRjaEJvZHk8Q29yZVR5cGVzLlJlcUJvZHlTZXRQZXJtaXNzaW9ucz4oe1xuICAgICAgICBpdGVtczogaXRlbXMsXG4gICAgICAgIHJvbGU6IHJvbGUsXG4gICAgICAgIGVudGl0eTogZW50aXR5LFxuICAgICAgICByZWN1cnNpdmU6IHJlY3Vyc2l2ZSxcbiAgICAgIH0pXG4gICAgICAuUE9TVCgpO1xuICB9XG5cbiAgU2V0UGVybWlzc2lvbnNPYmplY3RNdWx0aXBsZShcbiAgICBpdGVtczogc3RyaW5nW10sXG4gICAgcGVybWlzc2lvbnNPYmo6IENvcmVUeXBlcy5GaWxlUGVybWlzc2lvbnNPYmplY3QsXG4gICAgcmVjdXJzaXZlPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvcmVUeXBlcy5SZXNCb2R5U2V0UGVybWlzc2lvbnM+IHtcbiAgICByZXR1cm4gdGhpcy5tYWtlQVBJUmVxdWVzdCgnY2hhbmdlUGVybWlzc2lvbnNPYmplY3QnKVxuICAgICAgLlBhdGNoQm9keTxDb3JlVHlwZXMuUmVxQm9keVNldFBlcm1pc3Npb25zT2JqZWN0Pih7XG4gICAgICAgIGl0ZW1zOiBpdGVtcyxcbiAgICAgICAgcGVybWlzc2lvbnNPYmo6IHBlcm1pc3Npb25zT2JqLFxuICAgICAgICByZWN1cnNpdmU6IHJlY3Vyc2l2ZSxcbiAgICAgIH0pXG4gICAgICAuUE9TVCgpO1xuICB9XG5cbiAgUmVtb3ZlKGl0ZW1zOiBzdHJpbmdbXSk6IFByb21pc2U8Q29yZVR5cGVzLlJlc0JvZHlSZW1vdmU+IHtcbiAgICByZXR1cm4gdGhpcy5tYWtlQVBJUmVxdWVzdCgncmVtb3ZlJylcbiAgICAgIC5QYXRjaEJvZHk8Q29yZVR5cGVzLlJlcUJvZHlSZW1vdmU+KHtcbiAgICAgICAgaXRlbXM6IGl0ZW1zLFxuICAgICAgfSlcbiAgICAgIC5QT1NUKCk7XG4gIH1cblxuICBHZXRTaW5nbGUoaXRlbTogc3RyaW5nKTogUHJvbWlzZTxDb3JlVHlwZXMuUmVzQm9keUdldFNpbmdsZT4ge1xuICAgIHJldHVybiB0aGlzLm1ha2VBUElSZXF1ZXN0KCdnZXRTaW5nbGUnKVxuICAgICAgLlBhdGNoQm9keTxDb3JlVHlwZXMuUmVxQm9keUdldFNpbmdsZT4oe1xuICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgfSlcbiAgICAgIC5QT1NUKCk7XG4gIH1cblxuICBHZXRVcGxvYWRBcGlVcmwoY3VycmVudFBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgdXBsb2FkQXBpRW5kcG9pbnQgPVxuICAgICAgdGhpcy5hcGlFbmRwb2ludCArXG4gICAgICAnL3VwbG9hZD8nICtcbiAgICAgICdidWNrZXRuYW1lPScgK1xuICAgICAgdGhpcy5idWNrZXRuYW1lICtcbiAgICAgICcmZGlyZWN0b3J5UGF0aD0nICtcbiAgICAgIGN1cnJlbnRQYXRoO1xuICAgIHJldHVybiB1cGxvYWRBcGlFbmRwb2ludDtcbiAgfVxuXG4gIENsb25lUHJvdmlkZXIoKTogRmlsZVN5c3RlbVByb3ZpZGVyIHtcbiAgICByZXR1cm4gbmV3IFNlcnZlckZpbGVzeXN0ZW1Qcm92aWRlclNlcnZpY2UodGhpcy5odHRwLCB0aGlzLmxvZ2dlcik7XG4gIH1cblxuICBhc3luYyBDcmVhdGVEb3dubG9hZExpbmsoZmlsZTogQ29yZVR5cGVzLlJlc0ZpbGUpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZTogQ29yZVR5cGVzLlJlc0JvZHlHZXRTaW5nbGUgPSBhd2FpdCB0aGlzLm1ha2VBUElSZXF1ZXN0KFxuICAgICAgICAnZ2V0U2luZ2xlJ1xuICAgICAgKVxuICAgICAgICAuUGF0Y2hCb2R5PENvcmVUeXBlcy5SZXFCb2R5R2V0U2luZ2xlPih7XG4gICAgICAgICAgaXRlbTogZmlsZS5mdWxsUGF0aCxcbiAgICAgICAgfSlcbiAgICAgICAgLlBPU1QoKTtcbiAgICAgIGNvbnN0IHVybCA9IHJlc3BvbnNlLnJlc3VsdC51cmw7XG4gICAgICByZXR1cm4gdXJsO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgVXBsb2FkKGl0ZW06IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { __awaiter } from "tslib";
import { map, filter, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import * as path from 'path-browserify';
import { Add2ToPathDir, EnsureTrailingSlash, EnsureNoTrailingSlash, Add2ToPath } from '../../utils/path-helpers';
import { LoggerService } from '../logging/logger.service';
import { ClientFileSystemDataStore } from '../state/client-filesystem.datastore';
import { IconUrlResolverService } from './icon-url-resolver.service';
import { MakeClientDirectory, MakeClientFile } from '../../utils/file.factory';
export class ClientFileSystemService {
    /**
     * @param {?} logger
     * @param {?} iconResolver
     */
    constructor(logger, iconResolver) {
        this.logger = logger;
        this.iconResolver = iconResolver;
        this.store = new ClientFileSystemDataStore();
        this.instanceCountIncr();
    }
    /**
     * @return {?}
     */
    get $currentFiles() {
        return this.store.$currentFiles;
    }
    /**
     * @return {?}
     */
    get $currentPath() {
        return this.store.$currentPath;
    }
    /**
     * @return {?}
     */
    get $selectedFile() {
        return this.store.$selectedFile;
    }
    /**
     * @return {?}
     */
    instanceCountIncr() {
        ClientFileSystemService.instanceCount++;
        this.logger.info('new instance created', { instances: this.instances });
    }
    /**
     * @return {?}
     */
    instanceCountDecr() {
        ClientFileSystemService.instanceCount--;
        this.logger.info('instance destroyed', { instances: this.instances });
    }
    /**
     * @return {?}
     */
    get instances() {
        return ClientFileSystemService.instanceCount;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.instanceCountDecr();
    }
    /**
     * @param {?} store
     * @return {?}
     */
    SetStore(store) {
        this.store = store;
    }
    /**
     * @param {?} folderPath
     * @return {?}
     */
    OnList(folderPath) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info('client.OnList', { folderPath });
            this.store.SetPath(folderPath);
        });
    }
    /**
     * @param {?} newPath
     * @param {?=} disableNoClobber
     * @return {?}
     */
    OnCreateFolder(newPath, disableNoClobber) {
        return __awaiter(this, void 0, void 0, function* () {
            const /** @type {?} */ cwd = path.dirname(newPath);
            const /** @type {?} */ cachedFiles = this.store.GetCached(cwd);
            const /** @type {?} */ newDirPathNoClobber = this.getNextFreeFoldernameRecursively(newPath, cwd);
            const /** @type {?} */ folderName = path.basename(newDirPathNoClobber);
            const /** @type {?} */ newFolder = MakeClientDirectory(folderName, newDirPathNoClobber);
            cachedFiles.unshift(newFolder);
            this.store.SetDirectoryFiles(cachedFiles, cwd);
            this.store.SetPath(cwd);
        });
    }
    /**
     * @param {?} uploadedFiles
     * @return {?}
     */
    OnUploadedFiles(uploadedFiles) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Array.isArray(uploadedFiles) || !uploadedFiles.length) {
                return;
            }
            const /** @type {?} */ cwd = this.store.CurrentPath();
            uploadedFiles.map(f => this.recursivelyTryAddFile(cwd, f));
        });
    }
    /**
     * @param {?} cwd
     * @param {?} newFilePath
     * @return {?}
     */
    recursivelyTryAddFile(cwd, newFilePath) {
        const /** @type {?} */ filePath = EnsureNoTrailingSlash(newFilePath);
        const /** @type {?} */ exists = this.store.exists(filePath, cwd);
        if (!exists) {
            const /** @type {?} */ newFile = MakeClientFile(newFilePath);
            const /** @type {?} */ oldFiles = this.store.GetCached(cwd);
            const /** @type {?} */ newFiles = [...oldFiles, newFile];
            this.store.SetDirectoryFiles(newFiles, cwd);
            return;
        }
        const /** @type {?} */ filePathWith2 = Add2ToPath(filePath);
        return this.recursivelyTryAddFile(cwd, filePathWith2);
    }
    /**
     * @param {?} singleFileName
     * @param {?} newPath
     * @return {?}
     */
    OnCopy(singleFileName, newPath) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    /**
     * @param {?} item
     * @param {?} newPath
     * @return {?}
     */
    OnMove(item, newPath) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.removeSingleFromList(item);
        });
    }
    /**
     * @param {?} item
     * @param {?} newItemPath
     * @return {?}
     */
    OnRename(item, newItemPath) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    /**
     * @param {?} item
     * @param {?} content
     * @return {?}
     */
    OnEdit(item, content) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    OnGetcontent(item) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    /**
     * @param {?} item
     * @param {?} role
     * @param {?} entity
     * @param {?=} recursive
     * @return {?}
     */
    OnSetPermissions(item, role, entity, recursive) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    /**
     * @param {?} items
     * @param {?} newPath
     * @return {?}
     */
    OnMoveMultiple(items, newPath) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.removeMultiple(items);
        });
    }
    /**
     * @param {?} items
     * @param {?} newPath
     * @return {?}
     */
    OnCopyMultiple(items, newPath) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    /**
     * @param {?} items
     * @param {?} role
     * @param {?} entity
     * @param {?=} recursive
     * @return {?}
     */
    OnSetPermissionsMultiple(items, role, entity, recursive) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    /**
     * @param {?} items
     * @param {?} permissionsObj
     * @param {?=} recursive
     * @return {?}
     */
    OnSetPermissionsObjectMultiple(items, permissionsObj, recursive) {
        return __awaiter(this, void 0, void 0, function* () {
            const /** @type {?} */ currentFile = yield this.$selectedFile.pipe(take(1)).toPromise();
            if (items.includes(currentFile.fullPath)) {
                currentFile.permissions = permissionsObj;
                this.store.SelectFile(currentFile);
            }
        });
    }
    /**
     * @param {?} items
     * @return {?}
     */
    OnRemove(items) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.removeMultiple(items);
        });
    }
    /**
     * @param {?} res
     * @param {?} directoryPath
     * @return {?}
     */
    UpdateList(res, directoryPath) {
        return __awaiter(this, void 0, void 0, function* () {
            this.store.SetDirectoryFiles(res.result, directoryPath);
        });
    }
    /**
     * @param {?} inputDir
     * @param {?} cwd
     * @return {?}
     */
    getNextFreeFoldernameRecursively(inputDir, cwd) {
        const /** @type {?} */ folderPath = EnsureTrailingSlash(inputDir);
        const /** @type {?} */ exists = this.store.exists(folderPath, cwd);
        if (!exists) {
            return inputDir;
        }
        const /** @type {?} */ nextPath = Add2ToPathDir(folderPath);
        return this.getNextFreeFoldernameRecursively(nextPath, cwd);
    }
    /**
     * @param {?} filePath
     * @return {?}
     */
    removeSingleFromList(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const /** @type {?} */ directoryPath = path.dirname(filePath);
            const /** @type {?} */ currentFiles = this.store.GetCached(filePath);
            const /** @type {?} */ itemName = this.GetFileNameFromPath(filePath);
            const /** @type {?} */ cachedFilesWithout = currentFiles.filter(f => f.name !== itemName);
            this.store.SetDirectoryFiles(cachedFilesWithout, directoryPath);
        });
    }
    /**
     * @param {?} inputPath
     * @return {?}
     */
    EnsureNoTrailingSlash(inputPath) {
        const /** @type {?} */ hasTrailing = inputPath.slice(-1) === '/';
        const /** @type {?} */ pathParsed = hasTrailing ? inputPath.slice(0, -1) : inputPath;
        return pathParsed;
    }
    /**
     * @param {?} inputPath
     * @return {?}
     */
    GetFileNameFromPath(inputPath) {
        const /** @type {?} */ safePath = inputPath || '';
        const /** @type {?} */ parsedPath = this.EnsureNoTrailingSlash(safePath);
        const /** @type {?} */ basename = parsedPath.split('/').pop();
        return basename;
    }
    /**
     * @param {?} filePaths
     * @return {?}
     */
    removeMultiple(filePaths) {
        return __awaiter(this, void 0, void 0, function* () {
            const /** @type {?} */ firstPath = filePaths[0];
            if (!firstPath) {
                return;
            }
            const /** @type {?} */ directoryPath = path.dirname(firstPath);
            const /** @type {?} */ removeSet = new Set(filePaths.map(filePath => path.basename(filePath)));
            const /** @type {?} */ currentFiles = this.store.GetCached(directoryPath);
            const /** @type {?} */ cachedFilesWithout = currentFiles.filter(f => !removeSet.has(f.name));
            this.store.SetDirectoryFiles(cachedFilesWithout, directoryPath);
            this.store.SetPath(directoryPath);
        });
    }
    /**
     * @return {?}
     */
    get $FilesWithIcons() {
        return this.$currentFiles.pipe(map(files => (files ? files : [])), map(files => files.map(file => this.addIconPath(file))), map(files => files.map(file => {
            return Object.assign({}, file);
        })));
    }
    /**
     * @return {?}
     */
    get $NoParentFolder() {
        return this.$currentPath.pipe(filter(p => !!p), map(p => p.split('/').length < 2));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onSelectItem(item) {
        this.store.SelectFile(item);
    }
    /**
     * @return {?}
     */
    CurrentFiles() {
        return this.store.CurrentFiles();
    }
    /**
     * @param {?} file
     * @return {?}
     */
    addIconPath(file) {
        if (file.type === 'file') {
            file['icon'] = this.iconResolver.getFileIconUrl(file.name);
        }
        else {
            file['icon'] = this.iconResolver.getFolderIconUrl(file.name);
        }
        return file;
    }
    /**
     * @return {?}
     */
    CloneProvider() {
        const /** @type {?} */ newClone = new ClientFileSystemService(this.logger, this.iconResolver);
        const /** @type {?} */ newStore = this.store.CloneStore();
        newClone.SetStore(newStore);
        return newClone;
    }
}
ClientFileSystemService.instanceCount = 0;
ClientFileSystemService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ClientFileSystemService.ctorParameters = () => [
    { type: LoggerService },
    { type: IconUrlResolverService }
];
function ClientFileSystemService_tsickle_Closure_declarations() {
    /** @type {?} */
    ClientFileSystemService.instanceCount;
    /** @type {?} */
    ClientFileSystemService.prototype.store;
    /** @type {?} */
    ClientFileSystemService.prototype.logger;
    /** @type {?} */
    ClientFileSystemService.prototype.iconResolver;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LWZpbGVzeXN0ZW0uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9TaGl2YW5nL1BpIFNvZnR3YXJlL2ZpbGUtbWFuYWdlci9uZ3gtZmlsZW1hbmFnZXIvcHJvamVjdHMvbmd4LWZpbGVtYW5hZ2VyLWNsaWVudC1maXJlYmFzZS9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcHVyZS9jbGllbnQtZmlsZXN5c3RlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUV0RCxPQUFPLEtBQUssSUFBSSxNQUFNLGlCQUFpQixDQUFDO0FBRXhDLE9BQU8sRUFDTCxhQUFhLEVBQ2IsbUJBQW1CLEVBQ25CLHFCQUFxQixFQUNyQixVQUFVLEVBQ1gsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFMUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDakYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBSS9FLE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBMEJsQyxZQUNVLFFBQ0E7UUFEQSxXQUFNLEdBQU4sTUFBTTtRQUNOLGlCQUFZLEdBQVosWUFBWTtxQkEzQk4sSUFBSSx5QkFBeUIsRUFBRTtRQTZCN0MsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7S0FDMUI7Ozs7SUE1QkQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztLQUNqQzs7OztJQUNELElBQUksWUFBWTtR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QUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQ2xDLENBQUM7Ozs7OztJQUdHLFlBQVksQ0FBQyxJQUF1QjtRQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7SUFHdkIsWUFBWTtRQUNqQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7Ozs7OztJQUczQixXQUFXLENBQUMsSUFBdUI7UUFDekMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVEO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUQ7UUFDRCxPQUFPLElBQUksQ0FBQzs7Ozs7SUFHZCxhQUFhO1FBQ1gsdUJBQU0sUUFBUSxHQUFHLElBQUksdUJBQXVCLENBQzFDLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLFlBQVksQ0FDbEIsQ0FBQztRQUNGLHVCQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3pDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUIsT0FBTyxRQUFRLENBQUM7S0FDakI7O3dDQTdNOEIsQ0FBQzs7WUFkakMsVUFBVTs7OztZQVBGLGFBQWE7WUFHYixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYXAsIGZpbHRlciwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoLWJyb3dzZXJpZnknO1xuaW1wb3J0IHsgQ29yZVR5cGVzIH0gZnJvbSAnLi4vLi4vLi4vY29yZS10eXBlcyc7XG5pbXBvcnQge1xuICBBZGQyVG9QYXRoRGlyLFxuICBFbnN1cmVUcmFpbGluZ1NsYXNoLFxuICBFbnN1cmVOb1RyYWlsaW5nU2xhc2gsXG4gIEFkZDJUb1BhdGhcbn0gZnJvbSAnLi4vLi4vdXRpbHMvcGF0aC1oZWxwZXJzJztcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi9sb2dnaW5nL2xvZ2dlci5zZXJ2aWNlJztcbmltcG9ydCB7IENsaWVudEZpbGVTeXN0ZW0gfSBmcm9tICcuL2NsaWVudC1maWxlc3lzdGVtLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDbGllbnRGaWxlU3lzdGVtRGF0YVN0b3JlIH0gZnJvbSAnLi4vc3RhdGUvY2xpZW50LWZpbGVzeXN0ZW0uZGF0YXN0b3JlJztcbmltcG9ydCB7IEljb25VcmxSZXNvbHZlclNlcnZpY2UgfSBmcm9tICcuL2ljb24tdXJsLXJlc29sdmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFrZUNsaWVudERpcmVjdG9yeSwgTWFrZUNsaWVudEZpbGUgfSBmcm9tICcuLi8uLi91dGlscy9maWxlLmZhY3RvcnknO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTptZW1iZXItb3JkZXJpbmdcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDbGllbnRGaWxlU3lzdGVtU2VydmljZSBpbXBsZW1lbnRzIENsaWVudEZpbGVTeXN0ZW0sIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3RvcmUgPSBuZXcgQ2xpZW50RmlsZVN5c3RlbURhdGFTdG9yZSgpO1xuXG4gIGdldCAkY3VycmVudEZpbGVzKCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLiRjdXJyZW50RmlsZXM7XG4gIH1cbiAgZ2V0ICRjdXJyZW50UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS4kY3VycmVudFBhdGg7XG4gIH1cbiAgZ2V0ICRzZWxlY3RlZEZpbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuJHNlbGVjdGVkRmlsZTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlQ291bnQgPSAwO1xuICBwcml2YXRlIGluc3RhbmNlQ291bnRJbmNyKCkge1xuICAgIENsaWVudEZpbGVTeXN0ZW1TZXJ2aWNlLmluc3RhbmNlQ291bnQrKztcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCduZXcgaW5zdGFuY2UgY3JlYXRlZCcsIHsgaW5zdGFuY2VzOiB0aGlzLmluc3RhbmNlcyB9KTtcbiAgfVxuICBwcml2YXRlIGluc3RhbmNlQ291bnREZWNyKCkge1xuICAgIENsaWVudEZpbGVTeXN0ZW1TZXJ2aWNlLmluc3RhbmNlQ291bnQtLTtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdpbnN0YW5jZSBkZXN0cm95ZWQnLCB7IGluc3RhbmNlczogdGhpcy5pbnN0YW5jZXMgfSk7XG4gIH1cbiAgZ2V0IGluc3RhbmNlcygpIHtcbiAgICByZXR1cm4gQ2xpZW50RmlsZVN5c3RlbVNlcnZpY2UuaW5zdGFuY2VDb3VudDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgaWNvblJlc29sdmVyOiBJY29uVXJsUmVzb2x2ZXJTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuaW5zdGFuY2VDb3VudEluY3IoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuaW5zdGFuY2VDb3VudERlY3IoKTtcbiAgfVxuXG4gIHB1YmxpYyBTZXRTdG9yZShzdG9yZTogQ2xpZW50RmlsZVN5c3RlbURhdGFTdG9yZSkge1xuICAgIHRoaXMuc3RvcmUgPSBzdG9yZTtcbiAgfVxuXG4gIGFzeW5jIE9uTGlzdChmb2xkZXJQYXRoOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdjbGllbnQuT25MaXN0JywgeyBmb2xkZXJQYXRoIH0pO1xuICAgIHRoaXMuc3RvcmUuU2V0UGF0aChmb2xkZXJQYXRoKTtcbiAgfVxuICBhc3luYyBPbkNyZWF0ZUZvbGRlcihcbiAgICBuZXdQYXRoOiBzdHJpbmcsXG4gICAgZGlzYWJsZU5vQ2xvYmJlcj86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgY3dkID0gcGF0aC5kaXJuYW1lKG5ld1BhdGgpO1xuICAgIGNvbnN0IGNhY2hlZEZpbGVzID0gdGhpcy5zdG9yZS5HZXRDYWNoZWQoY3dkKTtcbiAgICBjb25zdCBuZXdEaXJQYXRoTm9DbG9iYmVyID0gdGhpcy5nZXROZXh0RnJlZUZvbGRlcm5hbWVSZWN1cnNpdmVseShcbiAgICAgIG5ld1BhdGgsXG4gICAgICBjd2RcbiAgICApO1xuICAgIGNvbnN0IGZvbGRlck5hbWUgPSBwYXRoLmJhc2VuYW1lKG5ld0RpclBhdGhOb0Nsb2JiZXIpO1xuICAgIGNvbnN0IG5ld0ZvbGRlciA9IE1ha2VDbGllbnREaXJlY3RvcnkoZm9sZGVyTmFtZSwgbmV3RGlyUGF0aE5vQ2xvYmJlcik7XG4gICAgY2FjaGVkRmlsZXMudW5zaGlmdChuZXdGb2xkZXIpO1xuICAgIHRoaXMuc3RvcmUuU2V0RGlyZWN0b3J5RmlsZXMoY2FjaGVkRmlsZXMsIGN3ZCk7XG4gICAgdGhpcy5zdG9yZS5TZXRQYXRoKGN3ZCk7XG4gIH1cbiAgYXN5bmMgT25VcGxvYWRlZEZpbGVzKHVwbG9hZGVkRmlsZXM6IHN0cmluZ1tdKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHVwbG9hZGVkRmlsZXMpIHx8ICF1cGxvYWRlZEZpbGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjd2QgPSB0aGlzLnN0b3JlLkN1cnJlbnRQYXRoKCk7XG4gICAgdXBsb2FkZWRGaWxlcy5tYXAoZiA9PiB0aGlzLnJlY3Vyc2l2ZWx5VHJ5QWRkRmlsZShjd2QsIGYpKTtcbiAgfVxuICBwcml2YXRlIHJlY3Vyc2l2ZWx5VHJ5QWRkRmlsZShjd2Q6IHN0cmluZywgbmV3RmlsZVBhdGg6IHN0cmluZykge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gRW5zdXJlTm9UcmFpbGluZ1NsYXNoKG5ld0ZpbGVQYXRoKTtcbiAgICBjb25zdCBleGlzdHMgPSB0aGlzLnN0b3JlLmV4aXN0cyhmaWxlUGF0aCwgY3dkKTtcbiAgICBpZiAoIWV4aXN0cykge1xuICAgICAgY29uc3QgbmV3RmlsZSA9IE1ha2VDbGllbnRGaWxlKG5ld0ZpbGVQYXRoKTtcbiAgICAgIGNvbnN0IG9sZEZpbGVzID0gdGhpcy5zdG9yZS5HZXRDYWNoZWQoY3dkKTtcbiAgICAgIGNvbnN0IG5ld0ZpbGVzID0gWy4uLm9sZEZpbGVzLCBuZXdGaWxlXTtcbiAgICAgIHRoaXMuc3RvcmUuU2V0RGlyZWN0b3J5RmlsZXMobmV3RmlsZXMsIGN3ZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZpbGVQYXRoV2l0aDIgPSBBZGQyVG9QYXRoKGZpbGVQYXRoKTtcbiAgICByZXR1cm4gdGhpcy5yZWN1cnNpdmVseVRyeUFkZEZpbGUoY3dkLCBmaWxlUGF0aFdpdGgyKTtcbiAgfVxuICBhc3luYyBPbkNvcHkoc2luZ2xlRmlsZU5hbWU6IHN0cmluZywgbmV3UGF0aDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7fVxuICBhc3luYyBPbk1vdmUoaXRlbTogc3RyaW5nLCBuZXdQYXRoOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5yZW1vdmVTaW5nbGVGcm9tTGlzdChpdGVtKTtcbiAgfVxuICBhc3luYyBPblJlbmFtZShpdGVtOiBzdHJpbmcsIG5ld0l0ZW1QYXRoOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHt9XG4gIGFzeW5jIE9uRWRpdChpdGVtOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge31cbiAgYXN5bmMgT25HZXRjb250ZW50KGl0ZW06IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge31cbiAgYXN5bmMgT25TZXRQZXJtaXNzaW9ucyhcbiAgICBpdGVtOiBzdHJpbmcsXG4gICAgcm9sZTogQ29yZVR5cGVzLlBlcm1pc3Npb25zUm9sZSxcbiAgICBlbnRpdHk6IENvcmVUeXBlcy5GaWxlUGVybWlzc2lvbkVudGl0eSxcbiAgICByZWN1cnNpdmU/OiBib29sZWFuXG4gICk6IFByb21pc2U8dm9pZD4ge31cbiAgYXN5bmMgT25Nb3ZlTXVsdGlwbGUoaXRlbXM6IHN0cmluZ1tdLCBuZXdQYXRoOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5yZW1vdmVNdWx0aXBsZShpdGVtcyk7XG4gIH1cbiAgYXN5bmMgT25Db3B5TXVsdGlwbGUoaXRlbXM6IHN0cmluZ1tdLCBuZXdQYXRoOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHt9XG4gIGFzeW5jIE9uU2V0UGVybWlzc2lvbnNNdWx0aXBsZShcbiAgICBpdGVtczogc3RyaW5nW10sXG4gICAgcm9sZTogQ29yZVR5cGVzLlBlcm1pc3Npb25zUm9sZSxcbiAgICBlbnRpdHk6IENvcmVUeXBlcy5GaWxlUGVybWlzc2lvbkVudGl0eSxcbiAgICByZWN1cnNpdmU/OiBib29sZWFuXG4gICk6IFByb21pc2U8dm9pZD4ge31cbiAgYXN5bmMgT25TZXRQZXJtaXNzaW9uc09iamVjdE11bHRpcGxlKFxuICAgIGl0ZW1zOiBzdHJpbmdbXSxcbiAgICBwZXJtaXNzaW9uc09iajogQ29yZVR5cGVzLkZpbGVQZXJtaXNzaW9uc09iamVjdCxcbiAgICByZWN1cnNpdmU/OiBib29sZWFuXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGN1cnJlbnRGaWxlID0gYXdhaXQgdGhpcy4kc2VsZWN0ZWRGaWxlLnBpcGUodGFrZSgxKSkudG9Qcm9taXNlKCk7XG4gICAgaWYgKGl0ZW1zLmluY2x1ZGVzKGN1cnJlbnRGaWxlLmZ1bGxQYXRoKSkge1xuICAgICAgY3VycmVudEZpbGUucGVybWlzc2lvbnMgPSBwZXJtaXNzaW9uc09iajtcbiAgICAgIHRoaXMuc3RvcmUuU2VsZWN0RmlsZShjdXJyZW50RmlsZSk7XG4gICAgfVxuICB9XG4gIGFzeW5jIE9uUmVtb3ZlKGl0ZW1zOiBzdHJpbmdbXSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnJlbW92ZU11bHRpcGxlKGl0ZW1zKTtcbiAgfVxuICBhc3luYyBVcGRhdGVMaXN0KFxuICAgIHJlczogQ29yZVR5cGVzLlJlc0JvZHlMaXN0LFxuICAgIGRpcmVjdG9yeVBhdGg6IHN0cmluZ1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLnN0b3JlLlNldERpcmVjdG9yeUZpbGVzKHJlcy5yZXN1bHQsIGRpcmVjdG9yeVBhdGgpO1xuICB9XG5cbiAgcHVibGljIGdldE5leHRGcmVlRm9sZGVybmFtZVJlY3Vyc2l2ZWx5KFxuICAgIGlucHV0RGlyOiBzdHJpbmcsXG4gICAgY3dkOiBzdHJpbmdcbiAgKTogc3RyaW5nIHtcbiAgICBjb25zdCBmb2xkZXJQYXRoID0gRW5zdXJlVHJhaWxpbmdTbGFzaChpbnB1dERpcik7XG4gICAgY29uc3QgZXhpc3RzID0gdGhpcy5zdG9yZS5leGlzdHMoZm9sZGVyUGF0aCwgY3dkKTtcbiAgICBpZiAoIWV4aXN0cykge1xuICAgICAgcmV0dXJuIGlucHV0RGlyO1xuICAgIH1cbiAgICBjb25zdCBuZXh0UGF0aCA9IEFkZDJUb1BhdGhEaXIoZm9sZGVyUGF0aCk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TmV4dEZyZWVGb2xkZXJuYW1lUmVjdXJzaXZlbHkobmV4dFBhdGgsIGN3ZCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlbW92ZVNpbmdsZUZyb21MaXN0KGZpbGVQYXRoOiBzdHJpbmcpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlQYXRoID0gcGF0aC5kaXJuYW1lKGZpbGVQYXRoKTtcbiAgICBjb25zdCBjdXJyZW50RmlsZXMgPSB0aGlzLnN0b3JlLkdldENhY2hlZChmaWxlUGF0aCk7XG4gICAgY29uc3QgaXRlbU5hbWUgPSB0aGlzLkdldEZpbGVOYW1lRnJvbVBhdGgoZmlsZVBhdGgpO1xuICAgIGNvbnN0IGNhY2hlZEZpbGVzV2l0aG91dCA9IGN1cnJlbnRGaWxlcy5maWx0ZXIoZiA9PiBmLm5hbWUgIT09IGl0ZW1OYW1lKTtcbiAgICB0aGlzLnN0b3JlLlNldERpcmVjdG9yeUZpbGVzKGNhY2hlZEZpbGVzV2l0aG91dCwgZGlyZWN0b3J5UGF0aCk7XG4gIH1cblxuICBwcml2YXRlIEVuc3VyZU5vVHJhaWxpbmdTbGFzaChpbnB1dFBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgaGFzVHJhaWxpbmcgPSBpbnB1dFBhdGguc2xpY2UoLTEpID09PSAnLyc7XG4gICAgY29uc3QgcGF0aFBhcnNlZCA9IGhhc1RyYWlsaW5nID8gaW5wdXRQYXRoLnNsaWNlKDAsIC0xKSA6IGlucHV0UGF0aDtcbiAgICByZXR1cm4gcGF0aFBhcnNlZDtcbiAgfVxuXG4gIHByaXZhdGUgR2V0RmlsZU5hbWVGcm9tUGF0aChpbnB1dFBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3Qgc2FmZVBhdGggPSBpbnB1dFBhdGggfHwgJyc7XG4gICAgY29uc3QgcGFyc2VkUGF0aCA9IHRoaXMuRW5zdXJlTm9UcmFpbGluZ1NsYXNoKHNhZmVQYXRoKTtcbiAgICBjb25zdCBiYXNlbmFtZSA9IHBhcnNlZFBhdGguc3BsaXQoJy8nKS5wb3AoKTtcbiAgICByZXR1cm4gYmFzZW5hbWU7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlbW92ZU11bHRpcGxlKGZpbGVQYXRoczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBmaXJzdFBhdGggPSBmaWxlUGF0aHNbMF07XG4gICAgaWYgKCFmaXJzdFBhdGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IHBhdGguZGlybmFtZShmaXJzdFBhdGgpO1xuICAgIGNvbnN0IHJlbW92ZVNldCA9IG5ldyBTZXQoXG4gICAgICBmaWxlUGF0aHMubWFwKGZpbGVQYXRoID0+IHBhdGguYmFzZW5hbWUoZmlsZVBhdGgpKVxuICAgICk7XG4gICAgY29uc3QgY3VycmVudEZpbGVzID0gdGhpcy5zdG9yZS5HZXRDYWNoZWQoZGlyZWN0b3J5UGF0aCk7XG4gICAgY29uc3QgY2FjaGVkRmlsZXNXaXRob3V0ID0gY3VycmVudEZpbGVzLmZpbHRlcihmID0+ICFyZW1vdmVTZXQuaGFzKGYubmFtZSkpO1xuICAgIHRoaXMuc3RvcmUuU2V0RGlyZWN0b3J5RmlsZXMoY2FjaGVkRmlsZXNXaXRob3V0LCBkaXJlY3RvcnlQYXRoKTtcbiAgICB0aGlzLnN0b3JlLlNldFBhdGgoZGlyZWN0b3J5UGF0aCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0ICRGaWxlc1dpdGhJY29ucygpOiBPYnNlcnZhYmxlPENvcmVUeXBlcy5SZXNGaWxlW10+IHtcbiAgICByZXR1cm4gdGhpcy4kY3VycmVudEZpbGVzLnBpcGUoXG4gICAgICBtYXAoZmlsZXMgPT4gKGZpbGVzID8gZmlsZXMgOiBbXSkpLFxuICAgICAgbWFwKGZpbGVzID0+IGZpbGVzLm1hcChmaWxlID0+IHRoaXMuYWRkSWNvblBhdGgoZmlsZSkpKSxcbiAgICAgIG1hcChmaWxlcyA9PlxuICAgICAgICBmaWxlcy5tYXAoZmlsZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgLi4uZmlsZSB9O1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZ2V0ICROb1BhcmVudEZvbGRlcigpIHtcbiAgICByZXR1cm4gdGhpcy4kY3VycmVudFBhdGgucGlwZShcbiAgICAgIGZpbHRlcihwID0+ICEhcCksXG4gICAgICBtYXAocCA9PiBwLnNwbGl0KCcvJykubGVuZ3RoIDwgMilcbiAgICApO1xuICB9XG5cbiAgcHVibGljIG9uU2VsZWN0SXRlbShpdGVtOiBDb3JlVHlwZXMuUmVzRmlsZSk6IGFueSB7XG4gICAgdGhpcy5zdG9yZS5TZWxlY3RGaWxlKGl0ZW0pO1xuICB9XG5cbiAgcHVibGljIEN1cnJlbnRGaWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5DdXJyZW50RmlsZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkSWNvblBhdGgoZmlsZTogQ29yZVR5cGVzLlJlc0ZpbGUpIHtcbiAgICBpZiAoZmlsZS50eXBlID09PSAnZmlsZScpIHtcbiAgICAgIGZpbGVbJ2ljb24nXSA9IHRoaXMuaWNvblJlc29sdmVyLmdldEZpbGVJY29uVXJsKGZpbGUubmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbGVbJ2ljb24nXSA9IHRoaXMuaWNvblJlc29sdmVyLmdldEZvbGRlckljb25VcmwoZmlsZS5uYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBDbG9uZVByb3ZpZGVyKCk6IENsaWVudEZpbGVTeXN0ZW1TZXJ2aWNlIHtcbiAgICBjb25zdCBuZXdDbG9uZSA9IG5ldyBDbGllbnRGaWxlU3lzdGVtU2VydmljZShcbiAgICAgIHRoaXMubG9nZ2VyLFxuICAgICAgdGhpcy5pY29uUmVzb2x2ZXJcbiAgICApO1xuICAgIGNvbnN0IG5ld1N0b3JlID0gdGhpcy5zdG9yZS5DbG9uZVN0b3JlKCk7XG4gICAgbmV3Q2xvbmUuU2V0U3RvcmUobmV3U3RvcmUpO1xuICAgIHJldHVybiBuZXdDbG9uZTtcbiAgfVxufVxuIl19
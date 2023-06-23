/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { take, takeUntil, tap, auditTime } from 'rxjs/operators';
import { LoggerService } from '../logging/logger.service';
import path from 'path-browserify';
import { NotificationService } from './notification.service';
import { Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { FilemanagerStatusService } from '../state/status.service';
export class OptimisticFilesystemService {
    /**
     * @param {?} logger
     * @param {?} notifications
     * @param {?} status
     */
    constructor(logger, notifications, status) {
        this.logger = logger;
        this.notifications = notifications;
        this.status = status;
        this.refreshEmitter = new Subject();
        this.destroyed = new Subject();
        this.instanceCountIncr();
    }
    /**
     * @return {?}
     */
    instanceCountIncr() {
        OptimisticFilesystemService.instanceCount++;
        this.logger.info('new instance created', { instances: this.instances });
    }
    /**
     * @return {?}
     */
    instanceCountDecr() {
        OptimisticFilesystemService.instanceCount--;
        this.logger.info('instance destroyed', { instances: this.instances });
    }
    /**
     * @return {?}
     */
    get instances() {
        return OptimisticFilesystemService.instanceCount;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.instanceCountDecr();
    }
    /**
     * @return {?}
     */
    get $CurrentPath() {
        return this.clientFilesystem.$currentPath;
    }
    /**
     * @return {?}
     */
    get $SelectedFile() {
        return this.clientFilesystem.$selectedFile;
    }
    /**
     * @return {?}
     */
    get $FilesWithIcons() {
        return this.clientFilesystem.$FilesWithIcons;
    }
    /**
     * @param {?} serverFilesystem
     * @param {?} clientFilesystem
     * @return {?}
     */
    initialize(serverFilesystem, clientFilesystem) {
        this.logger.info('initializing...', { serverFilesystem, clientFilesystem });
        this.serverFilesystem = serverFilesystem;
        this.clientFilesystem = clientFilesystem;
        this.destroyed.next();
        this.refreshEmitter
            .pipe(takeUntil(this.destroyed), auditTime(800), tap((currentPath) => __awaiter(this, void 0, void 0, function* () {
            return this.clientFilesystem.OnList(currentPath);
        })))
            .subscribe((currentPath) => __awaiter(this, void 0, void 0, function* () {
            return this.updateListFromServer(currentPath);
        }));
    }
    /**
     * @param {?} error
     * @param {?} msg
     * @param {?} title
     * @return {?}
     */
    reportError(error, msg, title) {
        this.logger.error('optimistic-filesystem:', { error, title, msg });
        this.notifications.notify(error.message, title);
    }
    /**
     * @param {?} directoryPath
     * @return {?}
     */
    updateListFromServer(directoryPath) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.status.UpdateStatus(directoryPath, 'SENDING');
                this.logger.info('updateListFromServer', { directoryPath });
                const /** @type {?} */ apiResult = yield this.serverFilesystem.List(directoryPath);
                yield this.clientFilesystem.UpdateList(apiResult, directoryPath);
                const /** @type {?} */ currentDirectory = yield this.$CurrentPath
                    .pipe(take(1))
                    .toPromise();
                if (currentDirectory === directoryPath) {
                    yield Promise.all([
                        this.clientFilesystem.OnList(directoryPath),
                        this.selectFirstInCurrentDirectory()
                    ]);
                }
                this.status.UpdateStatus(directoryPath, 'SUCCESS');
            }
            catch (/** @type {?} */ error) {
                this.reportError(error, 'Cannot get directory list', 'List Error');
                this.status.UpdateStatus(directoryPath, 'FAILED', error);
            }
        });
    }
    /**
     * @param {?} directoryPath
     * @return {?}
     */
    HandleList(directoryPath) {
        return __awaiter(this, void 0, void 0, function* () {
            this.refreshEmitter.next(directoryPath);
        });
    }
    /**
     * @param {?} newPath
     * @param {?=} disableNoClobber
     * @return {?}
     */
    HandleCreateFolder(newPath, disableNoClobber) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.status.UpdateStatus(newPath, 'SENDING');
                this.logger.info('HandleCreateFolder', { newPath });
                yield Promise.all([
                    this.clientFilesystem.OnCreateFolder(newPath, disableNoClobber),
                    this.serverFilesystem.CreateFolder(newPath, disableNoClobber)
                ]);
                this.status.UpdateStatus(newPath, 'SUCCESS');
            }
            catch (/** @type {?} */ error) {
                this.reportError(error, 'Cannot create folder', 'Create Folder Error');
                this.status.UpdateStatus(newPath, 'FAILED', error);
                yield this.clientFilesystem.OnRemove([newPath]);
            }
        });
    }
    /**
     * @param {?} uploadedFiles
     * @return {?}
     */
    HandleUpload(uploadedFiles) {
        return __awaiter(this, void 0, void 0, function* () {
            this.status.UpdateStatus('HandleUpload', 'SENDING');
            this.logger.info('HandleUpload', { uploadedFiles });
            const /** @type {?} */ uploadAllPromise = uploadedFiles.map(f => this.serverFilesystem.Upload(f));
            const /** @type {?} */ blankPermissionsObj = {
                others: 'read/write',
                readers: [],
                writers: []
            };
            yield Promise.all([
                this.serverFilesystem.SetPermissionsObjectMultiple(uploadedFiles, blankPermissionsObj, true),
                this.clientFilesystem.OnUploadedFiles(uploadedFiles),
                uploadAllPromise
            ]);
            this.status.UpdateStatus('HandleUpload', 'SUCCESS');
        });
    }
    /**
     * @param {?} singleFileName
     * @param {?} newPath
     * @return {?}
     */
    HandleCopy(singleFileName, newPath) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.status.UpdateStatus('HandleCopy' + singleFileName, 'SENDING');
                this.logger.info('HandleCopy', { singleFileName, newPath });
                yield Promise.all([
                    this.clientFilesystem.OnCopy(singleFileName, newPath),
                    this.serverFilesystem.Copy(singleFileName, newPath)
                ]);
                this.status.UpdateStatus('HandleCopy' + singleFileName, 'SUCCESS');
            }
            catch (/** @type {?} */ error) {
                this.reportError(error, 'Cannot copy item', 'Copy Error');
                this.status.UpdateStatus('HandleCopy' + singleFileName, 'FAILED', error);
                return this.clientFilesystem.OnRemove([newPath]);
            }
        });
    }
    /**
     * @param {?} item
     * @param {?} newPath
     * @return {?}
     */
    HandleMove(item, newPath) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.status.UpdateStatus('HandleMove' + item, 'SENDING');
                this.logger.info('HandleMove', { item, newPath });
                yield Promise.all([
                    this.clientFilesystem.OnMove(item, newPath),
                    this.serverFilesystem.Move(item, newPath)
                ]);
                this.status.UpdateStatus('HandleMove' + item, 'SUCCESS');
            }
            catch (/** @type {?} */ error) {
                this.reportError(error, 'Cannot move item', 'Move Error');
                this.status.UpdateStatus('HandleMove' + item, 'FAILED');
                return this.clientFilesystem.OnRemove([newPath]);
            }
        });
    }
    /**
     * @param {?} item
     * @param {?} newItemPath
     * @return {?}
     */
    HandleRename(item, newItemPath) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.status.UpdateStatus('HandleRename' + item, 'SENDING');
                this.logger.info('HandleRename', { item, newItemPath });
                yield Promise.all([
                    this.clientFilesystem.OnRename(item, newItemPath),
                    this.serverFilesystem.Rename(item, newItemPath)
                ]);
                this.status.UpdateStatus('HandleRename' + item, 'SUCCESS');
            }
            catch (/** @type {?} */ error) {
                this.reportError(error, 'Cannot rename item', 'Rename Error');
                this.status.UpdateStatus('HandleRename' + item, 'FAILED');
                return this.clientFilesystem.OnRename(newItemPath, item);
            }
        });
    }
    /**
     * @param {?} item
     * @param {?} content
     * @return {?}
     */
    HandleEdit(item, content) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.status.UpdateStatus('HandleEdit' + item, 'SENDING');
                this.logger.info('HandleEdit', { item, content });
                yield Promise.all([
                    this.clientFilesystem.OnEdit(item, content),
                    this.serverFilesystem.Edit(item, content)
                ]);
                this.status.UpdateStatus('HandleEdit' + item, 'SUCCESS');
            }
            catch (/** @type {?} */ error) {
                this.reportError(error, 'Cannot edit item', 'Edit Error');
                this.status.UpdateStatus('HandleEdit' + item, 'FAILED');
            }
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    HandleGetcontent(item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.status.UpdateStatus('HandleGetcontent' + item, 'SENDING');
                this.logger.info('HandleGetcontent', { item });
                yield this.clientFilesystem.OnGetcontent(item);
                const /** @type {?} */ response = yield this.serverFilesystem.Getcontent(item);
                this.status.UpdateStatus('HandleGetcontent' + item, 'SUCCESS');
                return response.result;
            }
            catch (/** @type {?} */ error) {
                this.reportError(error, 'Cannot get item', 'Get Content Error');
                this.status.UpdateStatus('HandleGetcontent' + item, 'FAILED');
            }
        });
    }
    /**
     * @param {?} item
     * @param {?} role
     * @param {?} entity
     * @param {?=} recursive
     * @return {?}
     */
    HandleSetPermissions(item, role, entity, recursive) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.status.UpdateStatus('HandleSetPermissions' + item, 'SENDING');
                this.logger.info('HandleSetPermissions', {
                    item,
                    role,
                    entity,
                    recursive
                });
                yield Promise.all([
                    this.clientFilesystem.OnSetPermissions(item, role, entity, recursive),
                    this.serverFilesystem.SetPermissions(item, role, entity, recursive)
                ]);
                this.status.UpdateStatus('HandleSetPermissions' + item, 'SUCCESS');
            }
            catch (/** @type {?} */ error) {
                this.reportError(error, 'Cannot set permissions to item', 'Permissions Error');
                this.status.UpdateStatus('HandleSetPermissions' + item, 'FAILED');
            }
        });
    }
    /**
     * @param {?} items
     * @param {?} newPath
     * @return {?}
     */
    HandleMoveMultiple(items, newPath) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.status.UpdateStatus('HandleMoveMultiple' + items, 'SENDING');
                this.logger.info('HandleMoveMultiple', { items, newPath });
                yield Promise.all([
                    this.clientFilesystem.OnMoveMultiple(items, newPath),
                    this.serverFilesystem.MoveMultiple(items, newPath)
                ]);
                this.status.UpdateStatus('HandleMoveMultiple' + items, 'SUCCESS');
            }
            catch (/** @type {?} */ error) {
                this.reportError(error, 'Cannot move items', 'Move Error');
                this.status.UpdateStatus('HandleMoveMultiple' + items, 'FAILED');
            }
        });
    }
    /**
     * @param {?} items
     * @param {?} newPath
     * @return {?}
     */
    HandleCopyMultiple(items, newPath) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.status.UpdateStatus('HandleCopyMultiple' + items, 'SENDING');
                this.logger.info('HandleCopyMultiple', { items, newPath });
                yield Promise.all([
                    this.clientFilesystem.OnCopyMultiple(items, newPath),
                    this.serverFilesystem.CopyMultiple(items, newPath)
                ]);
                this.status.UpdateStatus('HandleCopyMultiple' + items, 'SUCCESS');
            }
            catch (/** @type {?} */ error) {
                this.reportError(error, 'Cannot copy items', 'Copy Error');
                this.status.UpdateStatus('HandleCopyMultiple' + items, 'FAILED');
            }
        });
    }
    /**
     * @param {?} items
     * @param {?} role
     * @param {?} entity
     * @param {?=} recursive
     * @return {?}
     */
    HandleSetPermissionsMultiple(items, role, entity, recursive) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.status.UpdateStatus('HandleSetPermissionsMultiple' + items, 'SENDING');
                this.logger.info('HandleSetPermissionsMultiple', {
                    items,
                    role,
                    entity,
                    recursive
                });
                yield Promise.all([
                    this.clientFilesystem.OnSetPermissionsMultiple(items, role, entity, recursive),
                    this.serverFilesystem.SetPermissionsMultiple(items, role, entity, recursive)
                ]);
                this.status.UpdateStatus('HandleSetPermissionsMultiple' + items, 'SUCCESS');
            }
            catch (/** @type {?} */ error) {
                this.reportError(error, 'Cannot set permissions to items', 'Permissions Error');
                this.status.UpdateStatus('HandleSetPermissionsMultiple' + items, 'FAILED');
            }
        });
    }
    /**
     * @param {?} items
     * @param {?} permissionsObj
     * @param {?=} recursive
     * @return {?}
     */
    HandleSetPermissionsObjectMultiple(items, permissionsObj, recursive) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.status.UpdateStatus('HandleSetPermissionsObjectMultiple' + items, 'SENDING');
                this.logger.info('HandleSetPermissionsMultiple', {
                    items,
                    permissionsObj,
                    recursive
                });
                yield Promise.all([
                    this.clientFilesystem.OnSetPermissionsObjectMultiple(items, permissionsObj, recursive),
                    this.serverFilesystem.SetPermissionsObjectMultiple(items, permissionsObj, recursive)
                ]);
                this.status.UpdateStatus('HandleSetPermissionsObjectMultiple' + items, 'SUCCESS');
            }
            catch (/** @type {?} */ error) {
                this.reportError(error, 'Cannot set permissions to items', 'Permissions Error');
                this.status.UpdateStatus('HandleSetPermissionsObjectMultiple' + items, 'FAILED');
            }
        });
    }
    /**
     * @param {?} items
     * @return {?}
     */
    HandleRemove(items) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.status.UpdateStatus('HandleRemove' + items, 'SENDING');
                this.logger.info('HandleRemove', { items });
                yield Promise.all([
                    this.clientFilesystem.OnRemove(items),
                    this.serverFilesystem.Remove(items)
                ]);
                this.status.UpdateStatus('HandleRemove' + items, 'SUCCESS');
            }
            catch (/** @type {?} */ error) {
                this.reportError(error, 'Cannot remove items', 'Remove Error');
                this.status.UpdateStatus('HandleRemove' + items, 'FAILED');
            }
        });
    }
    /**
     * @return {?}
     */
    HandleNavigateUp() {
        return __awaiter(this, void 0, void 0, function* () {
            const /** @type {?} */ uuid = uuidv4();
            try {
                this.status.UpdateStatus('HandleNavigateUp' + uuid, 'SENDING');
                this.logger.info('HandleNavigateUp');
                const /** @type {?} */ currentPath = yield this.$CurrentPath.pipe(take(1)).toPromise();
                const /** @type {?} */ parentPath = path.dirname(currentPath);
                yield this.HandleList(parentPath);
                this.status.UpdateStatus('HandleNavigateUp' + uuid, 'SUCCESS');
            }
            catch (/** @type {?} */ error) {
                this.reportError(error, 'Cannot navigate to parent directory', 'Navigate Error');
                this.status.UpdateStatus('HandleNavigateUp' + uuid, 'FAILED');
                throw new Error(error.message);
            }
        });
    }
    /**
     * @param {?} file
     * @return {?}
     */
    onSelectItem(file) {
        return __awaiter(this, void 0, void 0, function* () {
            this.clientFilesystem.onSelectItem(file);
        });
    }
    /**
     * @param {?} filePath
     * @return {?}
     */
    GetItemByName(filePath) {
        const /** @type {?} */ currentFiles = this.clientFilesystem.CurrentFiles();
        const /** @type {?} */ match = currentFiles.find(f => f.fullPath === filePath);
        return match;
    }
    /**
     * @param {?} filePath
     * @return {?}
     */
    onSelectItemByName(filePath) {
        const /** @type {?} */ match = this.GetItemByName(filePath);
        this.clientFilesystem.onSelectItem(match);
    }
    /**
     * @return {?}
     */
    selectFirstInCurrentDirectory() {
        return __awaiter(this, void 0, void 0, function* () {
            const /** @type {?} */ currentFiles = this.clientFilesystem.CurrentFiles();
            const /** @type {?} */ firstSelected = [...currentFiles].shift();
            this.clientFilesystem.onSelectItem(firstSelected);
        });
    }
    /**
     * @return {?}
     */
    CloneProvider() {
        const /** @type {?} */ newClone = new OptimisticFilesystemService(this.logger, this.notifications, this.status);
        newClone.initialize(this.serverFilesystem.CloneProvider(), this.clientFilesystem.CloneProvider());
        return newClone;
    }
}
OptimisticFilesystemService.instanceCount = 0;
OptimisticFilesystemService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OptimisticFilesystemService.ctorParameters = () => [
    { type: LoggerService },
    { type: NotificationService },
    { type: FilemanagerStatusService }
];
function OptimisticFilesystemService_tsickle_Closure_declarations() {
    /** @type {?} */
    OptimisticFilesystemService.instanceCount;
    /** @type {?} */
    OptimisticFilesystemService.prototype.serverFilesystem;
    /** @type {?} */
    OptimisticFilesystemService.prototype.clientFilesystem;
    /** @type {?} */
    OptimisticFilesystemService.prototype.refreshEmitter;
    /** @type {?} */
    OptimisticFilesystemService.prototype.destroyed;
    /** @type {?} */
    OptimisticFilesystemService.prototype.logger;
    /** @type {?} */
    OptimisticFilesystemService.prototype.notifications;
    /** @type {?} */
    OptimisticFilesystemService.prototype.status;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW1pc3RpYy1maWxlc3lzdGVtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvU2hpdmFuZy9QaSBTb2Z0d2FyZS9maWxlLW1hbmFnZXIvbmd4LWZpbGVtYW5hZ2VyL3Byb2plY3RzL25neC1maWxlbWFuYWdlci1jbGllbnQtZmlyZWJhc2Uvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3B1cmUvb3B0aW1pc3RpYy1maWxlc3lzdGVtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBR3RELE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxJQUFJLE1BQU0saUJBQWlCLENBQUM7QUFDbkMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUcvQixPQUFPLEVBQUUsRUFBRSxJQUFJLE1BQU0sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUtuRSxNQUFNLE9BQU8sMkJBQTJCOzs7Ozs7SUFrQnRDLFlBQ1UsUUFDQSxlQUNBO1FBRkEsV0FBTSxHQUFOLE1BQU07UUFDTixrQkFBYSxHQUFiLGFBQWE7UUFDYixXQUFNLEdBQU4sTUFBTTs4QkFxQlMsSUFBSSxPQUFPLEVBQVU7eUJBQzFCLElBQUksT0FBTyxFQUFFO1FBcEIvQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztLQUMxQjs7OztJQWxCTyxpQkFBaUI7UUFDdkIsMkJBQTJCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLE1B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RUQsa0JBQWtCLENBQUMsUUFBZ0I7UUFDakMsdUJBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMzQzs7OztJQUVhLDZCQUE2Qjs7WUFDekMsdUJBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUMxRCx1QkFBTSxhQUFhLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7Ozs7OztJQUdwRCxhQUFhO1FBQ1gsdUJBQU0sUUFBUSxHQUFHLElBQUksMkJBQTJCLENBQzlDLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FDWixDQUFDO1FBQ0YsUUFBUSxDQUFDLFVBQVUsQ0FDakIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxFQUNyQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLENBQ3RDLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztLQUNqQjs7NENBM1o4QixDQUFDOztZQU5qQyxVQUFVOzs7O1lBWEYsYUFBYTtZQUViLG1CQUFtQjtZQUtuQix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9wdGltaXN0aWNGaWxlc3lzdGVtIH0gZnJvbSAnLi9vcHRpbWlzdGljLWZpbGVzeXN0ZW0uaW50ZXJmYWNlJztcbmltcG9ydCB7IENsaWVudEZpbGVTeXN0ZW1TZXJ2aWNlIH0gZnJvbSAnLi9jbGllbnQtZmlsZXN5c3RlbS5zZXJ2aWNlJztcbmltcG9ydCB7IHRha2UsIHRha2VVbnRpbCwgdGFwLCBhdWRpdFRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbG9nZ2luZy9sb2dnZXIuc2VydmljZSc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoLWJyb3dzZXJpZnknO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29yZVR5cGVzLCBGaWxlU3lzdGVtUHJvdmlkZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlLXR5cGVzJztcblxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBGaWxlbWFuYWdlclN0YXR1c1NlcnZpY2UgfSBmcm9tICcuLi9zdGF0ZS9zdGF0dXMuc2VydmljZSc7XG5cbi8vIHRzbGludDpkaXNhYmxlOm1lbWJlci1vcmRlcmluZ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3B0aW1pc3RpY0ZpbGVzeXN0ZW1TZXJ2aWNlXG4gIGltcGxlbWVudHMgT3B0aW1pc3RpY0ZpbGVzeXN0ZW0sIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc2VydmVyRmlsZXN5c3RlbTogRmlsZVN5c3RlbVByb3ZpZGVyO1xuICBwcml2YXRlIGNsaWVudEZpbGVzeXN0ZW06IENsaWVudEZpbGVTeXN0ZW1TZXJ2aWNlO1xuXG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlQ291bnQgPSAwO1xuICBwcml2YXRlIGluc3RhbmNlQ291bnRJbmNyKCkge1xuICAgIE9wdGltaXN0aWNGaWxlc3lzdGVtU2VydmljZS5pbnN0YW5jZUNvdW50Kys7XG4gICAgdGhpcy5sb2dnZXIuaW5mbygnbmV3IGluc3RhbmNlIGNyZWF0ZWQnLCB7IGluc3RhbmNlczogdGhpcy5pbnN0YW5jZXMgfSk7XG4gIH1cbiAgcHJpdmF0ZSBpbnN0YW5jZUNvdW50RGVjcigpIHtcbiAgICBPcHRpbWlzdGljRmlsZXN5c3RlbVNlcnZpY2UuaW5zdGFuY2VDb3VudC0tO1xuICAgIHRoaXMubG9nZ2VyLmluZm8oJ2luc3RhbmNlIGRlc3Ryb3llZCcsIHsgaW5zdGFuY2VzOiB0aGlzLmluc3RhbmNlcyB9KTtcbiAgfVxuICBnZXQgaW5zdGFuY2VzKCkge1xuICAgIHJldHVybiBPcHRpbWlzdGljRmlsZXN5c3RlbVNlcnZpY2UuaW5zdGFuY2VDb3VudDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgbm90aWZpY2F0aW9uczogTm90aWZpY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIHN0YXR1czogRmlsZW1hbmFnZXJTdGF0dXNTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuaW5zdGFuY2VDb3VudEluY3IoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuaW5zdGFuY2VDb3VudERlY3IoKTtcbiAgfVxuXG4gIGdldCAkQ3VycmVudFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50RmlsZXN5c3RlbS4kY3VycmVudFBhdGg7XG4gIH1cblxuICBnZXQgJFNlbGVjdGVkRmlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnRGaWxlc3lzdGVtLiRzZWxlY3RlZEZpbGU7XG4gIH1cblxuICBnZXQgJEZpbGVzV2l0aEljb25zKCkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudEZpbGVzeXN0ZW0uJEZpbGVzV2l0aEljb25zO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoRW1pdHRlciA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGluaXRpYWxpemUoXG4gICAgc2VydmVyRmlsZXN5c3RlbTogRmlsZVN5c3RlbVByb3ZpZGVyLFxuICAgIGNsaWVudEZpbGVzeXN0ZW06IENsaWVudEZpbGVTeXN0ZW1TZXJ2aWNlXG4gICkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oJ2luaXRpYWxpemluZy4uLicsIHsgc2VydmVyRmlsZXN5c3RlbSwgY2xpZW50RmlsZXN5c3RlbSB9KTtcbiAgICB0aGlzLnNlcnZlckZpbGVzeXN0ZW0gPSBzZXJ2ZXJGaWxlc3lzdGVtO1xuICAgIHRoaXMuY2xpZW50RmlsZXN5c3RlbSA9IGNsaWVudEZpbGVzeXN0ZW07XG5cbiAgICB0aGlzLmRlc3Ryb3llZC5uZXh0KCk7XG4gICAgdGhpcy5yZWZyZXNoRW1pdHRlclxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCksXG4gICAgICAgIGF1ZGl0VGltZSg4MDApLFxuICAgICAgICB0YXAoYXN5bmMgY3VycmVudFBhdGggPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNsaWVudEZpbGVzeXN0ZW0uT25MaXN0KGN1cnJlbnRQYXRoKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoYXN5bmMgY3VycmVudFBhdGggPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVMaXN0RnJvbVNlcnZlcihjdXJyZW50UGF0aCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVwb3J0RXJyb3IoZXJyb3I6IEVycm9yLCBtc2c6IHN0cmluZywgdGl0bGU6IHN0cmluZykge1xuICAgIHRoaXMubG9nZ2VyLmVycm9yKCdvcHRpbWlzdGljLWZpbGVzeXN0ZW06JywgeyBlcnJvciwgdGl0bGUsIG1zZyB9KTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbnMubm90aWZ5KGVycm9yLm1lc3NhZ2UsIHRpdGxlKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgdXBkYXRlTGlzdEZyb21TZXJ2ZXIoZGlyZWN0b3J5UGF0aDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc3RhdHVzLlVwZGF0ZVN0YXR1cyhkaXJlY3RvcnlQYXRoLCAnU0VORElORycpO1xuICAgICAgdGhpcy5sb2dnZXIuaW5mbygndXBkYXRlTGlzdEZyb21TZXJ2ZXInLCB7IGRpcmVjdG9yeVBhdGggfSk7XG4gICAgICBjb25zdCBhcGlSZXN1bHQgPSBhd2FpdCB0aGlzLnNlcnZlckZpbGVzeXN0ZW0uTGlzdChkaXJlY3RvcnlQYXRoKTtcbiAgICAgIGF3YWl0IHRoaXMuY2xpZW50RmlsZXN5c3RlbS5VcGRhdGVMaXN0KGFwaVJlc3VsdCwgZGlyZWN0b3J5UGF0aCk7XG4gICAgICBjb25zdCBjdXJyZW50RGlyZWN0b3J5ID0gYXdhaXQgdGhpcy4kQ3VycmVudFBhdGhcbiAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgLnRvUHJvbWlzZSgpO1xuICAgICAgaWYgKGN1cnJlbnREaXJlY3RvcnkgPT09IGRpcmVjdG9yeVBhdGgpIHtcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIHRoaXMuY2xpZW50RmlsZXN5c3RlbS5Pbkxpc3QoZGlyZWN0b3J5UGF0aCksXG4gICAgICAgICAgdGhpcy5zZWxlY3RGaXJzdEluQ3VycmVudERpcmVjdG9yeSgpXG4gICAgICAgIF0pO1xuICAgICAgfVxuICAgICAgdGhpcy5zdGF0dXMuVXBkYXRlU3RhdHVzKGRpcmVjdG9yeVBhdGgsICdTVUNDRVNTJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMucmVwb3J0RXJyb3IoZXJyb3IsICdDYW5ub3QgZ2V0IGRpcmVjdG9yeSBsaXN0JywgJ0xpc3QgRXJyb3InKTtcbiAgICAgIHRoaXMuc3RhdHVzLlVwZGF0ZVN0YXR1cyhkaXJlY3RvcnlQYXRoLCAnRkFJTEVEJywgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIEhhbmRsZUxpc3QoZGlyZWN0b3J5UGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICB0aGlzLnJlZnJlc2hFbWl0dGVyLm5leHQoZGlyZWN0b3J5UGF0aCk7XG4gIH1cbiAgYXN5bmMgSGFuZGxlQ3JlYXRlRm9sZGVyKFxuICAgIG5ld1BhdGg6IHN0cmluZyxcbiAgICBkaXNhYmxlTm9DbG9iYmVyPzogYm9vbGVhblxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnN0YXR1cy5VcGRhdGVTdGF0dXMobmV3UGF0aCwgJ1NFTkRJTkcnKTtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oJ0hhbmRsZUNyZWF0ZUZvbGRlcicsIHsgbmV3UGF0aCB9KTtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5jbGllbnRGaWxlc3lzdGVtLk9uQ3JlYXRlRm9sZGVyKG5ld1BhdGgsIGRpc2FibGVOb0Nsb2JiZXIpLFxuICAgICAgICB0aGlzLnNlcnZlckZpbGVzeXN0ZW0uQ3JlYXRlRm9sZGVyKG5ld1BhdGgsIGRpc2FibGVOb0Nsb2JiZXIpXG4gICAgICBdKTtcbiAgICAgIHRoaXMuc3RhdHVzLlVwZGF0ZVN0YXR1cyhuZXdQYXRoLCAnU1VDQ0VTUycpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLnJlcG9ydEVycm9yKGVycm9yLCAnQ2Fubm90IGNyZWF0ZSBmb2xkZXInLCAnQ3JlYXRlIEZvbGRlciBFcnJvcicpO1xuICAgICAgdGhpcy5zdGF0dXMuVXBkYXRlU3RhdHVzKG5ld1BhdGgsICdGQUlMRUQnLCBlcnJvcik7XG4gICAgICBhd2FpdCB0aGlzLmNsaWVudEZpbGVzeXN0ZW0uT25SZW1vdmUoW25ld1BhdGhdKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgSGFuZGxlVXBsb2FkKHVwbG9hZGVkRmlsZXM6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcbiAgICB0aGlzLnN0YXR1cy5VcGRhdGVTdGF0dXMoJ0hhbmRsZVVwbG9hZCcsICdTRU5ESU5HJyk7XG4gICAgdGhpcy5sb2dnZXIuaW5mbygnSGFuZGxlVXBsb2FkJywgeyB1cGxvYWRlZEZpbGVzIH0pO1xuICAgIGNvbnN0IHVwbG9hZEFsbFByb21pc2UgPSB1cGxvYWRlZEZpbGVzLm1hcChmID0+IHRoaXMuc2VydmVyRmlsZXN5c3RlbS5VcGxvYWQoZikpO1xuICAgIGNvbnN0IGJsYW5rUGVybWlzc2lvbnNPYmo6IENvcmVUeXBlcy5GaWxlUGVybWlzc2lvbnNPYmplY3QgPSB7XG4gICAgICBvdGhlcnM6ICdyZWFkL3dyaXRlJyxcbiAgICAgIHJlYWRlcnM6IFtdLFxuICAgICAgd3JpdGVyczogW11cbiAgICB9O1xuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMuc2VydmVyRmlsZXN5c3RlbS5TZXRQZXJtaXNzaW9uc09iamVjdE11bHRpcGxlKHVwbG9hZGVkRmlsZXMsIGJsYW5rUGVybWlzc2lvbnNPYmosIHRydWUpLFxuICAgICAgdGhpcy5jbGllbnRGaWxlc3lzdGVtLk9uVXBsb2FkZWRGaWxlcyh1cGxvYWRlZEZpbGVzKSxcbiAgICAgIHVwbG9hZEFsbFByb21pc2VcbiAgICBdKTtcbiAgICB0aGlzLnN0YXR1cy5VcGRhdGVTdGF0dXMoJ0hhbmRsZVVwbG9hZCcsICdTVUNDRVNTJyk7XG4gIH1cbiAgYXN5bmMgSGFuZGxlQ29weShzaW5nbGVGaWxlTmFtZTogc3RyaW5nLCBuZXdQYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnN0YXR1cy5VcGRhdGVTdGF0dXMoJ0hhbmRsZUNvcHknICsgc2luZ2xlRmlsZU5hbWUsICdTRU5ESU5HJyk7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKCdIYW5kbGVDb3B5JywgeyBzaW5nbGVGaWxlTmFtZSwgbmV3UGF0aCB9KTtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5jbGllbnRGaWxlc3lzdGVtLk9uQ29weShzaW5nbGVGaWxlTmFtZSwgbmV3UGF0aCksXG4gICAgICAgIHRoaXMuc2VydmVyRmlsZXN5c3RlbS5Db3B5KHNpbmdsZUZpbGVOYW1lLCBuZXdQYXRoKVxuICAgICAgXSk7XG4gICAgICB0aGlzLnN0YXR1cy5VcGRhdGVTdGF0dXMoJ0hhbmRsZUNvcHknICsgc2luZ2xlRmlsZU5hbWUsICdTVUNDRVNTJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMucmVwb3J0RXJyb3IoZXJyb3IsICdDYW5ub3QgY29weSBpdGVtJywgJ0NvcHkgRXJyb3InKTtcbiAgICAgIHRoaXMuc3RhdHVzLlVwZGF0ZVN0YXR1cygnSGFuZGxlQ29weScgKyBzaW5nbGVGaWxlTmFtZSwgJ0ZBSUxFRCcsIGVycm9yKTtcbiAgICAgIHJldHVybiB0aGlzLmNsaWVudEZpbGVzeXN0ZW0uT25SZW1vdmUoW25ld1BhdGhdKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgSGFuZGxlTW92ZShpdGVtOiBzdHJpbmcsIG5ld1BhdGg6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc3RhdHVzLlVwZGF0ZVN0YXR1cygnSGFuZGxlTW92ZScgKyBpdGVtLCAnU0VORElORycpO1xuICAgICAgdGhpcy5sb2dnZXIuaW5mbygnSGFuZGxlTW92ZScsIHsgaXRlbSwgbmV3UGF0aCB9KTtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5jbGllbnRGaWxlc3lzdGVtLk9uTW92ZShpdGVtLCBuZXdQYXRoKSxcbiAgICAgICAgdGhpcy5zZXJ2ZXJGaWxlc3lzdGVtLk1vdmUoaXRlbSwgbmV3UGF0aClcbiAgICAgIF0pO1xuICAgICAgdGhpcy5zdGF0dXMuVXBkYXRlU3RhdHVzKCdIYW5kbGVNb3ZlJyArIGl0ZW0sICdTVUNDRVNTJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMucmVwb3J0RXJyb3IoZXJyb3IsICdDYW5ub3QgbW92ZSBpdGVtJywgJ01vdmUgRXJyb3InKTtcbiAgICAgIHRoaXMuc3RhdHVzLlVwZGF0ZVN0YXR1cygnSGFuZGxlTW92ZScgKyBpdGVtLCAnRkFJTEVEJyk7XG4gICAgICByZXR1cm4gdGhpcy5jbGllbnRGaWxlc3lzdGVtLk9uUmVtb3ZlKFtuZXdQYXRoXSk7XG4gICAgfVxuICB9XG4gIGFzeW5jIEhhbmRsZVJlbmFtZShpdGVtOiBzdHJpbmcsIG5ld0l0ZW1QYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnN0YXR1cy5VcGRhdGVTdGF0dXMoJ0hhbmRsZVJlbmFtZScgKyBpdGVtLCAnU0VORElORycpO1xuICAgICAgdGhpcy5sb2dnZXIuaW5mbygnSGFuZGxlUmVuYW1lJywgeyBpdGVtLCBuZXdJdGVtUGF0aCB9KTtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5jbGllbnRGaWxlc3lzdGVtLk9uUmVuYW1lKGl0ZW0sIG5ld0l0ZW1QYXRoKSxcbiAgICAgICAgdGhpcy5zZXJ2ZXJGaWxlc3lzdGVtLlJlbmFtZShpdGVtLCBuZXdJdGVtUGF0aClcbiAgICAgIF0pO1xuICAgICAgdGhpcy5zdGF0dXMuVXBkYXRlU3RhdHVzKCdIYW5kbGVSZW5hbWUnICsgaXRlbSwgJ1NVQ0NFU1MnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5yZXBvcnRFcnJvcihlcnJvciwgJ0Nhbm5vdCByZW5hbWUgaXRlbScsICdSZW5hbWUgRXJyb3InKTtcbiAgICAgIHRoaXMuc3RhdHVzLlVwZGF0ZVN0YXR1cygnSGFuZGxlUmVuYW1lJyArIGl0ZW0sICdGQUlMRUQnKTtcbiAgICAgIHJldHVybiB0aGlzLmNsaWVudEZpbGVzeXN0ZW0uT25SZW5hbWUobmV3SXRlbVBhdGgsIGl0ZW0pO1xuICAgIH1cbiAgfVxuICBhc3luYyBIYW5kbGVFZGl0KGl0ZW06IHN0cmluZywgY29udGVudDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5zdGF0dXMuVXBkYXRlU3RhdHVzKCdIYW5kbGVFZGl0JyArIGl0ZW0sICdTRU5ESU5HJyk7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKCdIYW5kbGVFZGl0JywgeyBpdGVtLCBjb250ZW50IH0pO1xuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLmNsaWVudEZpbGVzeXN0ZW0uT25FZGl0KGl0ZW0sIGNvbnRlbnQpLFxuICAgICAgICB0aGlzLnNlcnZlckZpbGVzeXN0ZW0uRWRpdChpdGVtLCBjb250ZW50KVxuICAgICAgXSk7XG4gICAgICB0aGlzLnN0YXR1cy5VcGRhdGVTdGF0dXMoJ0hhbmRsZUVkaXQnICsgaXRlbSwgJ1NVQ0NFU1MnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5yZXBvcnRFcnJvcihlcnJvciwgJ0Nhbm5vdCBlZGl0IGl0ZW0nLCAnRWRpdCBFcnJvcicpO1xuICAgICAgdGhpcy5zdGF0dXMuVXBkYXRlU3RhdHVzKCdIYW5kbGVFZGl0JyArIGl0ZW0sICdGQUlMRUQnKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgSGFuZGxlR2V0Y29udGVudChpdGVtOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnN0YXR1cy5VcGRhdGVTdGF0dXMoJ0hhbmRsZUdldGNvbnRlbnQnICsgaXRlbSwgJ1NFTkRJTkcnKTtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oJ0hhbmRsZUdldGNvbnRlbnQnLCB7IGl0ZW0gfSk7XG4gICAgICBhd2FpdCB0aGlzLmNsaWVudEZpbGVzeXN0ZW0uT25HZXRjb250ZW50KGl0ZW0pO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZlckZpbGVzeXN0ZW0uR2V0Y29udGVudChpdGVtKTtcbiAgICAgIHRoaXMuc3RhdHVzLlVwZGF0ZVN0YXR1cygnSGFuZGxlR2V0Y29udGVudCcgKyBpdGVtLCAnU1VDQ0VTUycpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLnJlc3VsdDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5yZXBvcnRFcnJvcihlcnJvciwgJ0Nhbm5vdCBnZXQgaXRlbScsICdHZXQgQ29udGVudCBFcnJvcicpO1xuICAgICAgdGhpcy5zdGF0dXMuVXBkYXRlU3RhdHVzKCdIYW5kbGVHZXRjb250ZW50JyArIGl0ZW0sICdGQUlMRUQnKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgSGFuZGxlU2V0UGVybWlzc2lvbnMoXG4gICAgaXRlbTogc3RyaW5nLFxuICAgIHJvbGU6IENvcmVUeXBlcy5QZXJtaXNzaW9uc1JvbGUsXG4gICAgZW50aXR5OiBDb3JlVHlwZXMuRmlsZVBlcm1pc3Npb25FbnRpdHksXG4gICAgcmVjdXJzaXZlPzogYm9vbGVhblxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnN0YXR1cy5VcGRhdGVTdGF0dXMoJ0hhbmRsZVNldFBlcm1pc3Npb25zJyArIGl0ZW0sICdTRU5ESU5HJyk7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKCdIYW5kbGVTZXRQZXJtaXNzaW9ucycsIHtcbiAgICAgICAgaXRlbSxcbiAgICAgICAgcm9sZSxcbiAgICAgICAgZW50aXR5LFxuICAgICAgICByZWN1cnNpdmVcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLmNsaWVudEZpbGVzeXN0ZW0uT25TZXRQZXJtaXNzaW9ucyhpdGVtLCByb2xlLCBlbnRpdHksIHJlY3Vyc2l2ZSksXG4gICAgICAgIHRoaXMuc2VydmVyRmlsZXN5c3RlbS5TZXRQZXJtaXNzaW9ucyhpdGVtLCByb2xlLCBlbnRpdHksIHJlY3Vyc2l2ZSlcbiAgICAgIF0pO1xuICAgICAgdGhpcy5zdGF0dXMuVXBkYXRlU3RhdHVzKCdIYW5kbGVTZXRQZXJtaXNzaW9ucycgKyBpdGVtLCAnU1VDQ0VTUycpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLnJlcG9ydEVycm9yKFxuICAgICAgICBlcnJvcixcbiAgICAgICAgJ0Nhbm5vdCBzZXQgcGVybWlzc2lvbnMgdG8gaXRlbScsXG4gICAgICAgICdQZXJtaXNzaW9ucyBFcnJvcidcbiAgICAgICk7XG4gICAgICB0aGlzLnN0YXR1cy5VcGRhdGVTdGF0dXMoJ0hhbmRsZVNldFBlcm1pc3Npb25zJyArIGl0ZW0sICdGQUlMRUQnKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgSGFuZGxlTW92ZU11bHRpcGxlKGl0ZW1zOiBzdHJpbmdbXSwgbmV3UGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5zdGF0dXMuVXBkYXRlU3RhdHVzKCdIYW5kbGVNb3ZlTXVsdGlwbGUnICsgaXRlbXMsICdTRU5ESU5HJyk7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKCdIYW5kbGVNb3ZlTXVsdGlwbGUnLCB7IGl0ZW1zLCBuZXdQYXRoIH0pO1xuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLmNsaWVudEZpbGVzeXN0ZW0uT25Nb3ZlTXVsdGlwbGUoaXRlbXMsIG5ld1BhdGgpLFxuICAgICAgICB0aGlzLnNlcnZlckZpbGVzeXN0ZW0uTW92ZU11bHRpcGxlKGl0ZW1zLCBuZXdQYXRoKVxuICAgICAgXSk7XG4gICAgICB0aGlzLnN0YXR1cy5VcGRhdGVTdGF0dXMoJ0hhbmRsZU1vdmVNdWx0aXBsZScgKyBpdGVtcywgJ1NVQ0NFU1MnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5yZXBvcnRFcnJvcihlcnJvciwgJ0Nhbm5vdCBtb3ZlIGl0ZW1zJywgJ01vdmUgRXJyb3InKTtcbiAgICAgIHRoaXMuc3RhdHVzLlVwZGF0ZVN0YXR1cygnSGFuZGxlTW92ZU11bHRpcGxlJyArIGl0ZW1zLCAnRkFJTEVEJyk7XG4gICAgfVxuICB9XG4gIGFzeW5jIEhhbmRsZUNvcHlNdWx0aXBsZShpdGVtczogc3RyaW5nW10sIG5ld1BhdGg6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc3RhdHVzLlVwZGF0ZVN0YXR1cygnSGFuZGxlQ29weU11bHRpcGxlJyArIGl0ZW1zLCAnU0VORElORycpO1xuICAgICAgdGhpcy5sb2dnZXIuaW5mbygnSGFuZGxlQ29weU11bHRpcGxlJywgeyBpdGVtcywgbmV3UGF0aCB9KTtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5jbGllbnRGaWxlc3lzdGVtLk9uQ29weU11bHRpcGxlKGl0ZW1zLCBuZXdQYXRoKSxcbiAgICAgICAgdGhpcy5zZXJ2ZXJGaWxlc3lzdGVtLkNvcHlNdWx0aXBsZShpdGVtcywgbmV3UGF0aClcbiAgICAgIF0pO1xuICAgICAgdGhpcy5zdGF0dXMuVXBkYXRlU3RhdHVzKCdIYW5kbGVDb3B5TXVsdGlwbGUnICsgaXRlbXMsICdTVUNDRVNTJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMucmVwb3J0RXJyb3IoZXJyb3IsICdDYW5ub3QgY29weSBpdGVtcycsICdDb3B5IEVycm9yJyk7XG4gICAgICB0aGlzLnN0YXR1cy5VcGRhdGVTdGF0dXMoJ0hhbmRsZUNvcHlNdWx0aXBsZScgKyBpdGVtcywgJ0ZBSUxFRCcpO1xuICAgIH1cbiAgfVxuICBhc3luYyBIYW5kbGVTZXRQZXJtaXNzaW9uc011bHRpcGxlKFxuICAgIGl0ZW1zOiBzdHJpbmdbXSxcbiAgICByb2xlOiBDb3JlVHlwZXMuUGVybWlzc2lvbnNSb2xlLFxuICAgIGVudGl0eTogQ29yZVR5cGVzLkZpbGVQZXJtaXNzaW9uRW50aXR5LFxuICAgIHJlY3Vyc2l2ZT86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5zdGF0dXMuVXBkYXRlU3RhdHVzKFxuICAgICAgICAnSGFuZGxlU2V0UGVybWlzc2lvbnNNdWx0aXBsZScgKyBpdGVtcyxcbiAgICAgICAgJ1NFTkRJTkcnXG4gICAgICApO1xuICAgICAgdGhpcy5sb2dnZXIuaW5mbygnSGFuZGxlU2V0UGVybWlzc2lvbnNNdWx0aXBsZScsIHtcbiAgICAgICAgaXRlbXMsXG4gICAgICAgIHJvbGUsXG4gICAgICAgIGVudGl0eSxcbiAgICAgICAgcmVjdXJzaXZlXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5jbGllbnRGaWxlc3lzdGVtLk9uU2V0UGVybWlzc2lvbnNNdWx0aXBsZShcbiAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICByb2xlLFxuICAgICAgICAgIGVudGl0eSxcbiAgICAgICAgICByZWN1cnNpdmVcbiAgICAgICAgKSxcbiAgICAgICAgdGhpcy5zZXJ2ZXJGaWxlc3lzdGVtLlNldFBlcm1pc3Npb25zTXVsdGlwbGUoXG4gICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgcm9sZSxcbiAgICAgICAgICBlbnRpdHksXG4gICAgICAgICAgcmVjdXJzaXZlXG4gICAgICAgIClcbiAgICAgIF0pO1xuICAgICAgdGhpcy5zdGF0dXMuVXBkYXRlU3RhdHVzKFxuICAgICAgICAnSGFuZGxlU2V0UGVybWlzc2lvbnNNdWx0aXBsZScgKyBpdGVtcyxcbiAgICAgICAgJ1NVQ0NFU1MnXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLnJlcG9ydEVycm9yKFxuICAgICAgICBlcnJvcixcbiAgICAgICAgJ0Nhbm5vdCBzZXQgcGVybWlzc2lvbnMgdG8gaXRlbXMnLFxuICAgICAgICAnUGVybWlzc2lvbnMgRXJyb3InXG4gICAgICApO1xuICAgICAgdGhpcy5zdGF0dXMuVXBkYXRlU3RhdHVzKFxuICAgICAgICAnSGFuZGxlU2V0UGVybWlzc2lvbnNNdWx0aXBsZScgKyBpdGVtcyxcbiAgICAgICAgJ0ZBSUxFRCdcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGFzeW5jIEhhbmRsZVNldFBlcm1pc3Npb25zT2JqZWN0TXVsdGlwbGUoXG4gICAgaXRlbXM6IHN0cmluZ1tdLFxuICAgIHBlcm1pc3Npb25zT2JqOiBDb3JlVHlwZXMuRmlsZVBlcm1pc3Npb25zT2JqZWN0LFxuICAgIHJlY3Vyc2l2ZT86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5zdGF0dXMuVXBkYXRlU3RhdHVzKFxuICAgICAgICAnSGFuZGxlU2V0UGVybWlzc2lvbnNPYmplY3RNdWx0aXBsZScgKyBpdGVtcyxcbiAgICAgICAgJ1NFTkRJTkcnXG4gICAgICApO1xuICAgICAgdGhpcy5sb2dnZXIuaW5mbygnSGFuZGxlU2V0UGVybWlzc2lvbnNNdWx0aXBsZScsIHtcbiAgICAgICAgaXRlbXMsXG4gICAgICAgIHBlcm1pc3Npb25zT2JqLFxuICAgICAgICByZWN1cnNpdmVcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLmNsaWVudEZpbGVzeXN0ZW0uT25TZXRQZXJtaXNzaW9uc09iamVjdE11bHRpcGxlKFxuICAgICAgICAgIGl0ZW1zLFxuICAgICAgICAgIHBlcm1pc3Npb25zT2JqLFxuICAgICAgICAgIHJlY3Vyc2l2ZVxuICAgICAgICApLFxuICAgICAgICB0aGlzLnNlcnZlckZpbGVzeXN0ZW0uU2V0UGVybWlzc2lvbnNPYmplY3RNdWx0aXBsZShcbiAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICBwZXJtaXNzaW9uc09iaixcbiAgICAgICAgICByZWN1cnNpdmVcbiAgICAgICAgKVxuICAgICAgXSk7XG4gICAgICB0aGlzLnN0YXR1cy5VcGRhdGVTdGF0dXMoXG4gICAgICAgICdIYW5kbGVTZXRQZXJtaXNzaW9uc09iamVjdE11bHRpcGxlJyArIGl0ZW1zLFxuICAgICAgICAnU1VDQ0VTUydcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMucmVwb3J0RXJyb3IoXG4gICAgICAgIGVycm9yLFxuICAgICAgICAnQ2Fubm90IHNldCBwZXJtaXNzaW9ucyB0byBpdGVtcycsXG4gICAgICAgICdQZXJtaXNzaW9ucyBFcnJvcidcbiAgICAgICk7XG4gICAgICB0aGlzLnN0YXR1cy5VcGRhdGVTdGF0dXMoXG4gICAgICAgICdIYW5kbGVTZXRQZXJtaXNzaW9uc09iamVjdE11bHRpcGxlJyArIGl0ZW1zLFxuICAgICAgICAnRkFJTEVEJ1xuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgSGFuZGxlUmVtb3ZlKGl0ZW1zOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc3RhdHVzLlVwZGF0ZVN0YXR1cygnSGFuZGxlUmVtb3ZlJyArIGl0ZW1zLCAnU0VORElORycpO1xuICAgICAgdGhpcy5sb2dnZXIuaW5mbygnSGFuZGxlUmVtb3ZlJywgeyBpdGVtcyB9KTtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5jbGllbnRGaWxlc3lzdGVtLk9uUmVtb3ZlKGl0ZW1zKSxcbiAgICAgICAgdGhpcy5zZXJ2ZXJGaWxlc3lzdGVtLlJlbW92ZShpdGVtcylcbiAgICAgIF0pO1xuICAgICAgdGhpcy5zdGF0dXMuVXBkYXRlU3RhdHVzKCdIYW5kbGVSZW1vdmUnICsgaXRlbXMsICdTVUNDRVNTJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMucmVwb3J0RXJyb3IoZXJyb3IsICdDYW5ub3QgcmVtb3ZlIGl0ZW1zJywgJ1JlbW92ZSBFcnJvcicpO1xuICAgICAgdGhpcy5zdGF0dXMuVXBkYXRlU3RhdHVzKCdIYW5kbGVSZW1vdmUnICsgaXRlbXMsICdGQUlMRUQnKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBIYW5kbGVOYXZpZ2F0ZVVwKCk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnN0YXR1cy5VcGRhdGVTdGF0dXMoJ0hhbmRsZU5hdmlnYXRlVXAnICsgdXVpZCwgJ1NFTkRJTkcnKTtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oJ0hhbmRsZU5hdmlnYXRlVXAnKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gYXdhaXQgdGhpcy4kQ3VycmVudFBhdGgucGlwZSh0YWtlKDEpKS50b1Byb21pc2UoKTtcbiAgICAgIGNvbnN0IHBhcmVudFBhdGggPSBwYXRoLmRpcm5hbWUoY3VycmVudFBhdGgpO1xuICAgICAgYXdhaXQgdGhpcy5IYW5kbGVMaXN0KHBhcmVudFBhdGgpO1xuICAgICAgdGhpcy5zdGF0dXMuVXBkYXRlU3RhdHVzKCdIYW5kbGVOYXZpZ2F0ZVVwJyArIHV1aWQsICdTVUNDRVNTJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMucmVwb3J0RXJyb3IoXG4gICAgICAgIGVycm9yLFxuICAgICAgICAnQ2Fubm90IG5hdmlnYXRlIHRvIHBhcmVudCBkaXJlY3RvcnknLFxuICAgICAgICAnTmF2aWdhdGUgRXJyb3InXG4gICAgICApO1xuICAgICAgdGhpcy5zdGF0dXMuVXBkYXRlU3RhdHVzKCdIYW5kbGVOYXZpZ2F0ZVVwJyArIHV1aWQsICdGQUlMRUQnKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBvblNlbGVjdEl0ZW0oZmlsZTogQ29yZVR5cGVzLlJlc0ZpbGUpIHtcbiAgICB0aGlzLmNsaWVudEZpbGVzeXN0ZW0ub25TZWxlY3RJdGVtKGZpbGUpO1xuICB9XG5cbiAgR2V0SXRlbUJ5TmFtZShmaWxlUGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3QgY3VycmVudEZpbGVzID0gdGhpcy5jbGllbnRGaWxlc3lzdGVtLkN1cnJlbnRGaWxlcygpO1xuICAgIGNvbnN0IG1hdGNoID0gY3VycmVudEZpbGVzLmZpbmQoZiA9PiBmLmZ1bGxQYXRoID09PSBmaWxlUGF0aCk7XG4gICAgcmV0dXJuIG1hdGNoO1xuICB9XG5cbiAgb25TZWxlY3RJdGVtQnlOYW1lKGZpbGVQYXRoOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaCA9IHRoaXMuR2V0SXRlbUJ5TmFtZShmaWxlUGF0aCk7XG4gICAgdGhpcy5jbGllbnRGaWxlc3lzdGVtLm9uU2VsZWN0SXRlbShtYXRjaCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNlbGVjdEZpcnN0SW5DdXJyZW50RGlyZWN0b3J5KCkge1xuICAgIGNvbnN0IGN1cnJlbnRGaWxlcyA9IHRoaXMuY2xpZW50RmlsZXN5c3RlbS5DdXJyZW50RmlsZXMoKTtcbiAgICBjb25zdCBmaXJzdFNlbGVjdGVkID0gWy4uLmN1cnJlbnRGaWxlc10uc2hpZnQoKTtcbiAgICB0aGlzLmNsaWVudEZpbGVzeXN0ZW0ub25TZWxlY3RJdGVtKGZpcnN0U2VsZWN0ZWQpO1xuICB9XG5cbiAgQ2xvbmVQcm92aWRlcigpOiBPcHRpbWlzdGljRmlsZXN5c3RlbVNlcnZpY2Uge1xuICAgIGNvbnN0IG5ld0Nsb25lID0gbmV3IE9wdGltaXN0aWNGaWxlc3lzdGVtU2VydmljZShcbiAgICAgIHRoaXMubG9nZ2VyLFxuICAgICAgdGhpcy5ub3RpZmljYXRpb25zLFxuICAgICAgdGhpcy5zdGF0dXNcbiAgICApO1xuICAgIG5ld0Nsb25lLmluaXRpYWxpemUoXG4gICAgICB0aGlzLnNlcnZlckZpbGVzeXN0ZW0uQ2xvbmVQcm92aWRlcigpLFxuICAgICAgdGhpcy5jbGllbnRGaWxlc3lzdGVtLkNsb25lUHJvdmlkZXIoKVxuICAgICk7XG4gICAgcmV0dXJuIG5ld0Nsb25lO1xuICB9XG59XG4iXX0=
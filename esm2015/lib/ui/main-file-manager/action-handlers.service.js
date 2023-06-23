/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { take, map } from 'rxjs/operators';
import path from 'path-browserify';
import { LoggerService } from '../../services/logging/logger.service';
import { AppDialogRenameComponent, } from '../dialogs/dialog-rename.component';
import { AppDialogCopyComponent, } from '../dialogs/dialog-copy-or-move.component';
import { AppDialogPermissionsSetObjectComponent, } from '../dialogs/dialog-permissions-setobject.component';
import { AppDialogUploadFilesComponent, } from '../dialogs/dialog-upload.component';
import { AppDialogNewFolderComponent } from '../dialogs/dialog-new-folder.component';
import { ClientFileSystemService } from '../../services/pure/client-filesystem.service';
import { OptimisticFilesystemService } from '../../services/pure/optimistic-filesystem.service';
import { NotificationService } from '../../services/pure/notification.service';
import { AppDialogConfirmationComponent } from '../dialogs/dialog-confirmation.component';
import { MakeDir } from '../../services/stub/stub-files';
import { MatDialog } from '@angular/material/dialog';
export class ActionHandlersService {
    /**
     * @param {?} clientFilesystem
     * @param {?} optimisticFs
     * @param {?} dialog
     * @param {?} logger
     * @param {?} notifications
     */
    constructor(clientFilesystem, optimisticFs, dialog, logger, notifications) {
        this.clientFilesystem = clientFilesystem;
        this.optimisticFs = optimisticFs;
        this.dialog = dialog;
        this.logger = logger;
        this.notifications = notifications;
    }
    /**
     * @return {?}
     */
    get $CurrentPath() {
        return this.optimisticFs.$CurrentPath;
    }
    /**
     * @return {?}
     */
    GetCurrentPath() {
        return __awaiter(this, void 0, void 0, function* () {
            const /** @type {?} */ current = yield this.$CurrentPath.pipe(take(1)).toPromise();
            return current || '';
        });
    }
    /**
     * @param {?} directoryPath
     * @return {?}
     */
    ConvertToRelativePath(directoryPath) {
        const /** @type {?} */ rootLength = (this.config.virtualRoot || '').length;
        return (directoryPath || '').slice(rootLength);
    }
    /**
     * @return {?}
     */
    GetRootPath() {
        return this.config.virtualRoot || '';
    }
    /**
     * @return {?}
     */
    get $CurrentPathIsRoot() {
        return this.$CurrentPath.pipe(map((p) => p === this.config.virtualRoot));
    }
    /**
     * @return {?}
     */
    get $SelectedFile() {
        return this.optimisticFs.$SelectedFile;
    }
    /**
     * @return {?}
     */
    get $FilesWithIcons() {
        return this.optimisticFs.$FilesWithIcons;
    }
    /**
     * @param {?} fileSystem
     * @param {?} config
     * @return {?}
     */
    init(fileSystem, config) {
        return __awaiter(this, void 0, void 0, function* () {
            this.config = config;
            this.fileSystem = fileSystem;
            this.logger.info('init()', { fileSystem, config });
            this.optimisticFs.initialize(this.fileSystem, this.clientFilesystem);
            try {
                yield this.clientFilesystem.OnList(config.initialPath);
            }
            catch (/** @type {?} */ error) {
                this.logger.error('init() OnNewFolderClobber: error', error, {
                    fileSystem,
                    config,
                });
            }
        });
    }
    /**
     * @param {?} file
     * @return {?}
     */
    OnRename(file) {
        return __awaiter(this, void 0, void 0, function* () {
            const /** @type {?} */ data = {
                currentPath: file.fullPath,
            };
            this.logger.info('OnRename', { data });
            const /** @type {?} */ renamedPath = yield this.openDialog(AppDialogRenameComponent, data);
            if (!renamedPath) {
                this.notifications.notifyCancelled();
                return;
            }
            try {
                yield this.optimisticFs.HandleRename(file.fullPath, renamedPath);
                yield this.RefreshExplorer();
                setTimeout(() => {
                    this.optimisticFs.onSelectItemByName(renamedPath);
                }, 300);
            }
            catch (/** @type {?} */ error) {
                this.logger.error('OnRename', { error });
                this.notifications.notify(error.message, 'Rename Error');
            }
        });
    }
    /**
     * @param {?} files
     * @return {?}
     */
    OnMoveMultiple(files) {
        return __awaiter(this, void 0, void 0, function* () {
            const /** @type {?} */ data = {
                files: files,
                isCopy: false,
                actionHandler: this,
            };
            const /** @type {?} */ newFolderPath = yield this.openDialog(AppDialogCopyComponent, data);
            if (!newFolderPath) {
                this.notifications.notifyCancelled();
                return;
            }
            try {
                const /** @type {?} */ filePaths = files.map((f) => f.fullPath);
                yield this.optimisticFs.HandleMoveMultiple(filePaths, newFolderPath);
                yield this.RefreshExplorer();
            }
            catch (/** @type {?} */ error) {
                this.logger.error('OnMoveMultiple', { error });
                this.notifications.notify(error.message, 'Move Error');
            }
        });
    }
    /**
     * @param {?} files
     * @return {?}
     */
    OnCopyMultiple(files) {
        return __awaiter(this, void 0, void 0, function* () {
            const /** @type {?} */ data = {
                files: files,
                isCopy: true,
                actionHandler: this,
            };
            const /** @type {?} */ newFolderPath = yield this.openDialog(AppDialogCopyComponent, data);
            this.logger.info('OnCopyMultiple', { files, newFolderPath });
            if (!newFolderPath) {
                this.notifications.notifyCancelled();
                return;
            }
            try {
                const /** @type {?} */ filePaths = files.map((f) => f.fullPath);
                yield this.optimisticFs.HandleCopyMultiple(filePaths, newFolderPath);
                yield this.RefreshExplorer();
            }
            catch (/** @type {?} */ error) {
                this.logger.error('OnCopyMultiple', { error });
                this.notifications.notify(error.message, 'Copy Error');
            }
        });
    }
    /**
     * @return {?}
     */
    checkCanAddPermissions() {
        if (!this.config.users) {
            throw new Error('The "config.users" property was not defined');
        }
        if (!this.config.groups) {
            throw new Error('The "config.groups" property was not defined');
        }
    }
    /**
     * @param {?} files
     * @return {?}
     */
    OnSetPermissionsMultiple(files) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.OnSetPermissionsObjectMultiple(files);
        });
    }
    /**
     * @param {?} files
     * @return {?}
     */
    OnSetPermissionsObjectMultiple(files) {
        return __awaiter(this, void 0, void 0, function* () {
            const /** @type {?} */ data = {
                files: files,
                config: this.config,
            };
            try {
                this.checkCanAddPermissions();
            }
            catch (/** @type {?} */ error) {
                this.notifications.notify(error.message, 'Permissions Error');
                return;
            }
            const /** @type {?} */ res = yield this.openDialog(AppDialogPermissionsSetObjectComponent, data);
            if (!res) {
                this.notifications.notifyCancelled();
                return;
            }
            try {
                const /** @type {?} */ filePaths = files.map((f) => f.fullPath);
                yield this.optimisticFs.HandleSetPermissionsObjectMultiple(filePaths, res.permissionsObj, true);
                yield this.RefreshExplorer();
            }
            catch (/** @type {?} */ error) {
                this.logger.error('OnSetPermissionsMultiple', { error });
                this.notifications.notify(error.message, 'Permissions Error');
            }
        });
    }
    /**
     * @param {?} files
     * @return {?}
     */
    OnDeleteMultiple(files) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const /** @type {?} */ deletedPaths = files.map((f) => f.fullPath);
                this.logger.info('deleting files', { files, deletedPaths });
                yield this.optimisticFs.HandleRemove(deletedPaths);
                yield this.RefreshExplorer();
            }
            catch (/** @type {?} */ error) {
                this.logger.error('OnDeleteMultiple', { error });
                this.notifications.notify(error.message, 'Deletion Error');
            }
        });
    }
    /**
     * @param {?} folderPath
     * @return {?}
     */
    OnNavigateTo(folderPath) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info('action-handlers.OnNavigateTo', { folderPath });
            return this.optimisticFs.HandleList(folderPath);
        });
    }
    /**
     * @return {?}
     */
    OnNavigateToParent() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info('OnNavigateToParent');
            yield this.optimisticFs.HandleNavigateUp();
        });
    }
    /**
     * @param {?} itemPath
     * @return {?}
     */
    OnSelectItemByPath(itemPath) {
        return __awaiter(this, void 0, void 0, function* () {
            this.optimisticFs.onSelectItemByName(itemPath);
        });
    }
    /**
     * @return {?}
     */
    OnUploadFilesToCurrentDirectory() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info('onClickUpload');
            const /** @type {?} */ currentPath = yield this.GetCurrentPath();
            const /** @type {?} */ data = {
                currentDirectory: currentPath,
                firebaseConfig: this.config.firebaseConfig,
                bucketName: this.config.bucketName,
            };
            const /** @type {?} */ res = yield this.openDialog(AppDialogUploadFilesComponent, data);
            if (!res) {
                this.logger.info('onClickUpload canceled...');
                return;
            }
            const /** @type {?} */ filesToAdd = res.uploaded.map((f) => path.join(currentPath, f));
            yield this.optimisticFs.HandleUpload(filesToAdd);
            yield this.optimisticFs.HandleList(currentPath);
        });
    }
    /**
     * @return {?}
     */
    OnNewFolderInCurrentDirectory() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info('onClickNewFolder');
            const /** @type {?} */ newDirName = yield this.openDialog(AppDialogNewFolderComponent);
            if (!newDirName) {
                this.logger.info('onClickNewFolder   no folder created...');
                return;
            }
            yield this.OnNewFolder(newDirName);
            const /** @type {?} */ setPermissions = yield this.openDialog(AppDialogConfirmationComponent);
            if (setPermissions) {
                const /** @type {?} */ currentDirectory = yield this.GetCurrentPath();
                const /** @type {?} */ newDirectoryPath = path.join(currentDirectory, newDirName);
                const /** @type {?} */ folder = MakeDir(newDirectoryPath);
                yield this.OnSetPermissionsMultiple([folder]);
            }
        });
    }
    /**
     * @param {?} newDirName
     * @return {?}
     */
    OnNewFolder(newDirName) {
        return __awaiter(this, void 0, void 0, function* () {
            const /** @type {?} */ currentDirectory = yield this.GetCurrentPath();
            const /** @type {?} */ newDirectoryPath = path.join(currentDirectory, newDirName);
            yield this.optimisticFs.HandleCreateFolder(newDirectoryPath);
            yield this.optimisticFs.HandleList(currentDirectory);
        });
    }
    /**
     * @param {?} newDirName
     * @return {?}
     */
    OnNewFolderClobber(newDirName) {
        return __awaiter(this, void 0, void 0, function* () {
            if (newDirName === '/') {
                return;
            }
            const /** @type {?} */ currentDirectory = yield this.GetCurrentPath();
            const /** @type {?} */ newDirectoryPath = path.join(currentDirectory, newDirName);
            yield this.optimisticFs.HandleCreateFolder(newDirectoryPath, true);
            yield this.optimisticFs.HandleList(currentDirectory);
        });
    }
    /**
     * @param {?} file
     * @return {?}
     */
    OnDownloadFile(file) {
        return __awaiter(this, void 0, void 0, function* () {
            const /** @type {?} */ res = yield this.fileSystem.GetSingle(file.fullPath);
            const /** @type {?} */ newFile = res.result.file;
            yield this.optimisticFs.onSelectItem(newFile);
            this.initiateDownload(file.name, res.result.url);
            const /** @type {?} */ currentDirectory = yield this.GetCurrentPath();
            yield this.optimisticFs.HandleList(currentDirectory);
        });
    }
    /**
     * @param {?} filename
     * @param {?} url
     * @return {?}
     */
    initiateDownload(filename, url) {
        this.logger.info('initiateDownload...', { url });
        const /** @type {?} */ link = document.createElement('a');
        link.download = filename;
        link.target = '_blank';
        link.href = url;
        link.click();
    }
    /**
     * @return {?}
     */
    RefreshExplorer() {
        return __awaiter(this, void 0, void 0, function* () {
            const /** @type {?} */ currentPath = yield this.GetCurrentPath();
            return this.optimisticFs.HandleList(currentPath);
        });
    }
    /**
     * @param {?} comp
     * @param {?=} data
     * @return {?}
     */
    openDialog(comp, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const /** @type {?} */ ref = this.dialog.open(comp, {
                width: '600px',
                hasBackdrop: true,
                disableClose: false,
                data: data,
            });
            const /** @type {?} */ result = yield ref.afterClosed().pipe(take(1)).toPromise();
            return result;
        });
    }
    /**
     * @return {?}
     */
    CloneProvider() {
        return __awaiter(this, void 0, void 0, function* () {
            const /** @type {?} */ cloned = new ActionHandlersService(this.clientFilesystem.CloneProvider(), this.optimisticFs.CloneProvider(), this.dialog, this.logger, this.notifications);
            yield cloned.init(this.fileSystem, this.config);
            return cloned;
        });
    }
    /**
     * @param {?} path
     * @return {?}
     */
    ListCurrentPathItems(path) {
        return this.fileSystem.List(path);
    }
}
ActionHandlersService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ActionHandlersService.ctorParameters = () => [
    { type: ClientFileSystemService },
    { type: OptimisticFilesystemService },
    { type: MatDialog },
    { type: LoggerService },
    { type: NotificationService }
];
function ActionHandlersService_tsickle_Closure_declarations() {
    /** @type {?} */
    ActionHandlersService.prototype.fileSystem;
    /** @type {?} */
    ActionHandlersService.prototype.config;
    /** @type {?} */
    ActionHandlersService.prototype.clientFilesystem;
    /** @type {?} */
    ActionHandlersService.prototype.optimisticFs;
    /** @type {?} */
    ActionHandlersService.prototype.dialog;
    /** @type {?} */
    ActionHandlersService.prototype.logger;
    /** @type {?} */
    ActionHandlersService.prototype.notifications;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWhhbmRsZXJzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvU2hpdmFuZy9QaSBTb2Z0d2FyZS9maWxlLW1hbmFnZXIvbmd4LWZpbGVtYW5hZ2VyL3Byb2plY3RzL25neC1maWxlbWFuYWdlci1jbGllbnQtZmlyZWJhc2Uvc3JjLyIsInNvdXJjZXMiOlsibGliL3VpL21haW4tZmlsZS1tYW5hZ2VyL2FjdGlvbi1oYW5kbGVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sSUFBSSxNQUFNLGlCQUFpQixDQUFDO0FBRW5DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN0RSxPQUFPLEVBRUwsd0JBQXdCLEdBQ3pCLE1BQU0sb0NBQW9DLENBQUM7QUFDNUMsT0FBTyxFQUVMLHNCQUFzQixHQUN2QixNQUFNLDBDQUEwQyxDQUFDO0FBQ2xELE9BQU8sRUFHTCxzQ0FBc0MsR0FDdkMsTUFBTSxtREFBbUQsQ0FBQztBQUMzRCxPQUFPLEVBR0wsNkJBQTZCLEdBQzlCLE1BQU0sb0NBQW9DLENBQUM7QUFDNUMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFckYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDaEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDMUYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3pELE9BQU8sRUFBRSxT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QUFVOzs7O1lBUEYsdUJBQXVCO1lBQ3ZCLDJCQUEyQjtZQUkzQixTQUFTO1lBMUJULGFBQWE7WUF1QmIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZSwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aC1icm93c2VyaWZ5JztcbmltcG9ydCB7IEZpbGVTeXN0ZW1Qcm92aWRlciwgQ29yZVR5cGVzIH0gZnJvbSAnLi4vLi4vLi4vY29yZS10eXBlcyc7XG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9nZ2luZy9sb2dnZXIuc2VydmljZSc7XG5pbXBvcnQge1xuICBSZW5hbWVEaWFsb2dJbnRlcmZhY2UsXG4gIEFwcERpYWxvZ1JlbmFtZUNvbXBvbmVudCxcbn0gZnJvbSAnLi4vZGlhbG9ncy9kaWFsb2ctcmVuYW1lLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBDb3B5RGlhbG9nSW50ZXJmYWNlLFxuICBBcHBEaWFsb2dDb3B5Q29tcG9uZW50LFxufSBmcm9tICcuLi9kaWFsb2dzL2RpYWxvZy1jb3B5LW9yLW1vdmUuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIFBlcm1pc3Npb25zT2JqZWN0RGlhbG9nSW50ZXJmYWNlLFxuICBQZXJtaXNzaW9uc09iamVjdERpYWxvZ1Jlc3BvbnNlSW50ZXJmYWNlLFxuICBBcHBEaWFsb2dQZXJtaXNzaW9uc1NldE9iamVjdENvbXBvbmVudCxcbn0gZnJvbSAnLi4vZGlhbG9ncy9kaWFsb2ctcGVybWlzc2lvbnMtc2V0b2JqZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBVcGxvYWREaWFsb2dJbnRlcmZhY2UsXG4gIFVwbG9hZERpYWxvZ1Jlc3BvbnNlSW50ZXJmYWNlLFxuICBBcHBEaWFsb2dVcGxvYWRGaWxlc0NvbXBvbmVudCxcbn0gZnJvbSAnLi4vZGlhbG9ncy9kaWFsb2ctdXBsb2FkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBEaWFsb2dOZXdGb2xkZXJDb21wb25lbnQgfSBmcm9tICcuLi9kaWFsb2dzL2RpYWxvZy1uZXctZm9sZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWxlTWFuYWdlckNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZ3VyYXRpb24vY2xpZW50LWNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgQ2xpZW50RmlsZVN5c3RlbVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wdXJlL2NsaWVudC1maWxlc3lzdGVtLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3B0aW1pc3RpY0ZpbGVzeXN0ZW1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHVyZS9vcHRpbWlzdGljLWZpbGVzeXN0ZW0uc2VydmljZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHVyZS9ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBBcHBEaWFsb2dDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9kaWFsb2dzL2RpYWxvZy1jb25maXJtYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IE1ha2VEaXIgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdHViL3N0dWItZmlsZXMnO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjdGlvbkhhbmRsZXJzU2VydmljZSB7XG4gIHByaXZhdGUgZmlsZVN5c3RlbTogRmlsZVN5c3RlbVByb3ZpZGVyO1xuICBwcml2YXRlIGNvbmZpZzogRmlsZU1hbmFnZXJDb25maWc7XG5cbiAgLy8gR2V0dGVyc1xuXG4gIGdldCAkQ3VycmVudFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW1pc3RpY0ZzLiRDdXJyZW50UGF0aDtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBHZXRDdXJyZW50UGF0aCgpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gYXdhaXQgdGhpcy4kQ3VycmVudFBhdGgucGlwZSh0YWtlKDEpKS50b1Byb21pc2UoKTtcbiAgICByZXR1cm4gY3VycmVudCB8fCAnJztcbiAgfVxuXG4gIHB1YmxpYyBDb252ZXJ0VG9SZWxhdGl2ZVBhdGgoZGlyZWN0b3J5UGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCByb290TGVuZ3RoID0gKHRoaXMuY29uZmlnLnZpcnR1YWxSb290IHx8ICcnKS5sZW5ndGg7XG4gICAgcmV0dXJuIChkaXJlY3RvcnlQYXRoIHx8ICcnKS5zbGljZShyb290TGVuZ3RoKTtcbiAgfVxuICBwdWJsaWMgR2V0Um9vdFBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcudmlydHVhbFJvb3QgfHwgJyc7XG4gIH1cblxuICBnZXQgJEN1cnJlbnRQYXRoSXNSb290KCkge1xuICAgIHJldHVybiB0aGlzLiRDdXJyZW50UGF0aC5waXBlKG1hcCgocCkgPT4gcCA9PT0gdGhpcy5jb25maWcudmlydHVhbFJvb3QpKTtcbiAgfVxuXG4gIGdldCAkU2VsZWN0ZWRGaWxlKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGltaXN0aWNGcy4kU2VsZWN0ZWRGaWxlO1xuICB9XG5cbiAgZ2V0ICRGaWxlc1dpdGhJY29ucygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpbWlzdGljRnMuJEZpbGVzV2l0aEljb25zO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjbGllbnRGaWxlc3lzdGVtOiBDbGllbnRGaWxlU3lzdGVtU2VydmljZSxcbiAgICBwcml2YXRlIG9wdGltaXN0aWNGczogT3B0aW1pc3RpY0ZpbGVzeXN0ZW1TZXJ2aWNlLFxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBub3RpZmljYXRpb25zOiBOb3RpZmljYXRpb25TZXJ2aWNlXG4gICkge31cblxuICBwdWJsaWMgYXN5bmMgaW5pdChmaWxlU3lzdGVtOiBGaWxlU3lzdGVtUHJvdmlkZXIsIGNvbmZpZzogRmlsZU1hbmFnZXJDb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLmZpbGVTeXN0ZW0gPSBmaWxlU3lzdGVtO1xuICAgIHRoaXMubG9nZ2VyLmluZm8oJ2luaXQoKScsIHsgZmlsZVN5c3RlbSwgY29uZmlnIH0pO1xuICAgIHRoaXMub3B0aW1pc3RpY0ZzLmluaXRpYWxpemUodGhpcy5maWxlU3lzdGVtLCB0aGlzLmNsaWVudEZpbGVzeXN0ZW0pO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLmNsaWVudEZpbGVzeXN0ZW0uT25MaXN0KGNvbmZpZy5pbml0aWFsUGF0aCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKCdpbml0KCkgT25OZXdGb2xkZXJDbG9iYmVyOiBlcnJvcicsIGVycm9yLCB7XG4gICAgICAgIGZpbGVTeXN0ZW0sXG4gICAgICAgIGNvbmZpZyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBPblJlbmFtZShmaWxlOiBDb3JlVHlwZXMuUmVzRmlsZSkge1xuICAgIGNvbnN0IGRhdGE6IFJlbmFtZURpYWxvZ0ludGVyZmFjZSA9IHtcbiAgICAgIGN1cnJlbnRQYXRoOiBmaWxlLmZ1bGxQYXRoLFxuICAgIH07XG4gICAgdGhpcy5sb2dnZXIuaW5mbygnT25SZW5hbWUnLCB7IGRhdGEgfSk7XG4gICAgY29uc3QgcmVuYW1lZFBhdGggPSBhd2FpdCB0aGlzLm9wZW5EaWFsb2coQXBwRGlhbG9nUmVuYW1lQ29tcG9uZW50LCBkYXRhKTtcbiAgICBpZiAoIXJlbmFtZWRQYXRoKSB7XG4gICAgICB0aGlzLm5vdGlmaWNhdGlvbnMubm90aWZ5Q2FuY2VsbGVkKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLm9wdGltaXN0aWNGcy5IYW5kbGVSZW5hbWUoZmlsZS5mdWxsUGF0aCwgcmVuYW1lZFBhdGgpO1xuICAgICAgYXdhaXQgdGhpcy5SZWZyZXNoRXhwbG9yZXIoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLm9wdGltaXN0aWNGcy5vblNlbGVjdEl0ZW1CeU5hbWUocmVuYW1lZFBhdGgpO1xuICAgICAgfSwgMzAwKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoJ09uUmVuYW1lJywgeyBlcnJvciB9KTtcbiAgICAgIHRoaXMubm90aWZpY2F0aW9ucy5ub3RpZnkoZXJyb3IubWVzc2FnZSwgJ1JlbmFtZSBFcnJvcicpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBPbk1vdmVNdWx0aXBsZShmaWxlczogQ29yZVR5cGVzLlJlc0ZpbGVbXSkge1xuICAgIGNvbnN0IGRhdGE6IENvcHlEaWFsb2dJbnRlcmZhY2UgPSB7XG4gICAgICBmaWxlczogZmlsZXMsXG4gICAgICBpc0NvcHk6IGZhbHNlLFxuICAgICAgYWN0aW9uSGFuZGxlcjogdGhpcyxcbiAgICB9O1xuICAgIGNvbnN0IG5ld0ZvbGRlclBhdGggPSBhd2FpdCB0aGlzLm9wZW5EaWFsb2coQXBwRGlhbG9nQ29weUNvbXBvbmVudCwgZGF0YSk7XG4gICAgaWYgKCFuZXdGb2xkZXJQYXRoKSB7XG4gICAgICB0aGlzLm5vdGlmaWNhdGlvbnMubm90aWZ5Q2FuY2VsbGVkKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBmaWxlUGF0aHMgPSBmaWxlcy5tYXAoKGYpID0+IGYuZnVsbFBhdGgpO1xuICAgICAgYXdhaXQgdGhpcy5vcHRpbWlzdGljRnMuSGFuZGxlTW92ZU11bHRpcGxlKGZpbGVQYXRocywgbmV3Rm9sZGVyUGF0aCk7XG4gICAgICBhd2FpdCB0aGlzLlJlZnJlc2hFeHBsb3JlcigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmxvZ2dlci5lcnJvcignT25Nb3ZlTXVsdGlwbGUnLCB7IGVycm9yIH0pO1xuICAgICAgdGhpcy5ub3RpZmljYXRpb25zLm5vdGlmeShlcnJvci5tZXNzYWdlLCAnTW92ZSBFcnJvcicpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBPbkNvcHlNdWx0aXBsZShmaWxlczogQ29yZVR5cGVzLlJlc0ZpbGVbXSkge1xuICAgIGNvbnN0IGRhdGE6IENvcHlEaWFsb2dJbnRlcmZhY2UgPSB7XG4gICAgICBmaWxlczogZmlsZXMsXG4gICAgICBpc0NvcHk6IHRydWUsXG4gICAgICBhY3Rpb25IYW5kbGVyOiB0aGlzLFxuICAgIH07XG4gICAgY29uc3QgbmV3Rm9sZGVyUGF0aCA9IGF3YWl0IHRoaXMub3BlbkRpYWxvZyhBcHBEaWFsb2dDb3B5Q29tcG9uZW50LCBkYXRhKTtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdPbkNvcHlNdWx0aXBsZScsIHsgZmlsZXMsIG5ld0ZvbGRlclBhdGggfSk7XG4gICAgaWYgKCFuZXdGb2xkZXJQYXRoKSB7XG4gICAgICB0aGlzLm5vdGlmaWNhdGlvbnMubm90aWZ5Q2FuY2VsbGVkKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBmaWxlUGF0aHMgPSBmaWxlcy5tYXAoKGYpID0+IGYuZnVsbFBhdGgpO1xuICAgICAgYXdhaXQgdGhpcy5vcHRpbWlzdGljRnMuSGFuZGxlQ29weU11bHRpcGxlKGZpbGVQYXRocywgbmV3Rm9sZGVyUGF0aCk7XG4gICAgICBhd2FpdCB0aGlzLlJlZnJlc2hFeHBsb3JlcigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmxvZ2dlci5lcnJvcignT25Db3B5TXVsdGlwbGUnLCB7IGVycm9yIH0pO1xuICAgICAgdGhpcy5ub3RpZmljYXRpb25zLm5vdGlmeShlcnJvci5tZXNzYWdlLCAnQ29weSBFcnJvcicpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tDYW5BZGRQZXJtaXNzaW9ucygpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLnVzZXJzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBcImNvbmZpZy51c2Vyc1wiIHByb3BlcnR5IHdhcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuY29uZmlnLmdyb3Vwcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgXCJjb25maWcuZ3JvdXBzXCIgcHJvcGVydHkgd2FzIG5vdCBkZWZpbmVkJyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIE9uU2V0UGVybWlzc2lvbnNNdWx0aXBsZShmaWxlczogQ29yZVR5cGVzLlJlc0ZpbGVbXSkge1xuICAgIHJldHVybiB0aGlzLk9uU2V0UGVybWlzc2lvbnNPYmplY3RNdWx0aXBsZShmaWxlcyk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgT25TZXRQZXJtaXNzaW9uc09iamVjdE11bHRpcGxlKGZpbGVzOiBDb3JlVHlwZXMuUmVzRmlsZVtdKSB7XG4gICAgY29uc3QgZGF0YTogUGVybWlzc2lvbnNPYmplY3REaWFsb2dJbnRlcmZhY2UgPSB7XG4gICAgICBmaWxlczogZmlsZXMsXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuY2hlY2tDYW5BZGRQZXJtaXNzaW9ucygpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLm5vdGlmaWNhdGlvbnMubm90aWZ5KGVycm9yLm1lc3NhZ2UsICdQZXJtaXNzaW9ucyBFcnJvcicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlczogUGVybWlzc2lvbnNPYmplY3REaWFsb2dSZXNwb25zZUludGVyZmFjZSA9IGF3YWl0IHRoaXMub3BlbkRpYWxvZyhcbiAgICAgIEFwcERpYWxvZ1Blcm1pc3Npb25zU2V0T2JqZWN0Q29tcG9uZW50LFxuICAgICAgZGF0YVxuICAgICk7XG4gICAgaWYgKCFyZXMpIHtcbiAgICAgIHRoaXMubm90aWZpY2F0aW9ucy5ub3RpZnlDYW5jZWxsZWQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZpbGVQYXRocyA9IGZpbGVzLm1hcCgoZikgPT4gZi5mdWxsUGF0aCk7XG4gICAgICBhd2FpdCB0aGlzLm9wdGltaXN0aWNGcy5IYW5kbGVTZXRQZXJtaXNzaW9uc09iamVjdE11bHRpcGxlKFxuICAgICAgICBmaWxlUGF0aHMsXG4gICAgICAgIHJlcy5wZXJtaXNzaW9uc09iaixcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICAgIGF3YWl0IHRoaXMuUmVmcmVzaEV4cGxvcmVyKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKCdPblNldFBlcm1pc3Npb25zTXVsdGlwbGUnLCB7IGVycm9yIH0pO1xuICAgICAgdGhpcy5ub3RpZmljYXRpb25zLm5vdGlmeShlcnJvci5tZXNzYWdlLCAnUGVybWlzc2lvbnMgRXJyb3InKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgT25EZWxldGVNdWx0aXBsZShmaWxlczogQ29yZVR5cGVzLlJlc0ZpbGVbXSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkZWxldGVkUGF0aHMgPSBmaWxlcy5tYXAoKGYpID0+IGYuZnVsbFBhdGgpO1xuICAgICAgdGhpcy5sb2dnZXIuaW5mbygnZGVsZXRpbmcgZmlsZXMnLCB7IGZpbGVzLCBkZWxldGVkUGF0aHMgfSk7XG4gICAgICBhd2FpdCB0aGlzLm9wdGltaXN0aWNGcy5IYW5kbGVSZW1vdmUoZGVsZXRlZFBhdGhzKTtcbiAgICAgIGF3YWl0IHRoaXMuUmVmcmVzaEV4cGxvcmVyKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKCdPbkRlbGV0ZU11bHRpcGxlJywgeyBlcnJvciB9KTtcbiAgICAgIHRoaXMubm90aWZpY2F0aW9ucy5ub3RpZnkoZXJyb3IubWVzc2FnZSwgJ0RlbGV0aW9uIEVycm9yJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gTWlzY1xuXG4gIHB1YmxpYyBhc3luYyBPbk5hdmlnYXRlVG8oZm9sZGVyUGF0aDogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbygnYWN0aW9uLWhhbmRsZXJzLk9uTmF2aWdhdGVUbycsIHsgZm9sZGVyUGF0aCB9KTtcbiAgICByZXR1cm4gdGhpcy5vcHRpbWlzdGljRnMuSGFuZGxlTGlzdChmb2xkZXJQYXRoKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBPbk5hdmlnYXRlVG9QYXJlbnQoKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbygnT25OYXZpZ2F0ZVRvUGFyZW50Jyk7XG4gICAgYXdhaXQgdGhpcy5vcHRpbWlzdGljRnMuSGFuZGxlTmF2aWdhdGVVcCgpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIE9uU2VsZWN0SXRlbUJ5UGF0aChpdGVtUGF0aDogc3RyaW5nKSB7XG4gICAgdGhpcy5vcHRpbWlzdGljRnMub25TZWxlY3RJdGVtQnlOYW1lKGl0ZW1QYXRoKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBPblVwbG9hZEZpbGVzVG9DdXJyZW50RGlyZWN0b3J5KCkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oJ29uQ2xpY2tVcGxvYWQnKTtcbiAgICBjb25zdCBjdXJyZW50UGF0aCA9IGF3YWl0IHRoaXMuR2V0Q3VycmVudFBhdGgoKTtcbiAgICBjb25zdCBkYXRhOiBVcGxvYWREaWFsb2dJbnRlcmZhY2UgPSB7XG4gICAgICBjdXJyZW50RGlyZWN0b3J5OiBjdXJyZW50UGF0aCxcbiAgICAgIGZpcmViYXNlQ29uZmlnOiB0aGlzLmNvbmZpZy5maXJlYmFzZUNvbmZpZyxcbiAgICAgIGJ1Y2tldE5hbWU6IHRoaXMuY29uZmlnLmJ1Y2tldE5hbWUsXG4gICAgfTtcbiAgICBjb25zdCByZXM6IFVwbG9hZERpYWxvZ1Jlc3BvbnNlSW50ZXJmYWNlID0gYXdhaXQgdGhpcy5vcGVuRGlhbG9nKFxuICAgICAgQXBwRGlhbG9nVXBsb2FkRmlsZXNDb21wb25lbnQsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgICBpZiAoIXJlcykge1xuICAgICAgdGhpcy5sb2dnZXIuaW5mbygnb25DbGlja1VwbG9hZCBjYW5jZWxlZC4uLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmaWxlc1RvQWRkID0gcmVzLnVwbG9hZGVkLm1hcCgoZikgPT4gcGF0aC5qb2luKGN1cnJlbnRQYXRoLCBmKSk7XG4gICAgYXdhaXQgdGhpcy5vcHRpbWlzdGljRnMuSGFuZGxlVXBsb2FkKGZpbGVzVG9BZGQpO1xuICAgIGF3YWl0IHRoaXMub3B0aW1pc3RpY0ZzLkhhbmRsZUxpc3QoY3VycmVudFBhdGgpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIE9uTmV3Rm9sZGVySW5DdXJyZW50RGlyZWN0b3J5KCkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oJ29uQ2xpY2tOZXdGb2xkZXInKTtcbiAgICBjb25zdCBuZXdEaXJOYW1lID0gYXdhaXQgdGhpcy5vcGVuRGlhbG9nKEFwcERpYWxvZ05ld0ZvbGRlckNvbXBvbmVudCk7XG4gICAgaWYgKCFuZXdEaXJOYW1lKSB7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKCdvbkNsaWNrTmV3Rm9sZGVyICAgbm8gZm9sZGVyIGNyZWF0ZWQuLi4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5Pbk5ld0ZvbGRlcihuZXdEaXJOYW1lKTtcbiAgICBjb25zdCBzZXRQZXJtaXNzaW9ucyA9IGF3YWl0IHRoaXMub3BlbkRpYWxvZyhcbiAgICAgIEFwcERpYWxvZ0NvbmZpcm1hdGlvbkNvbXBvbmVudFxuICAgICk7XG5cbiAgICBpZiAoc2V0UGVybWlzc2lvbnMpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnREaXJlY3RvcnkgPSBhd2FpdCB0aGlzLkdldEN1cnJlbnRQYXRoKCk7XG4gICAgICBjb25zdCBuZXdEaXJlY3RvcnlQYXRoID0gcGF0aC5qb2luKGN1cnJlbnREaXJlY3RvcnksIG5ld0Rpck5hbWUpO1xuICAgICAgY29uc3QgZm9sZGVyID0gTWFrZURpcihuZXdEaXJlY3RvcnlQYXRoKTtcbiAgICAgIGF3YWl0IHRoaXMuT25TZXRQZXJtaXNzaW9uc011bHRpcGxlKFtmb2xkZXJdKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgT25OZXdGb2xkZXIobmV3RGlyTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgY3VycmVudERpcmVjdG9yeSA9IGF3YWl0IHRoaXMuR2V0Q3VycmVudFBhdGgoKTtcbiAgICBjb25zdCBuZXdEaXJlY3RvcnlQYXRoID0gcGF0aC5qb2luKGN1cnJlbnREaXJlY3RvcnksIG5ld0Rpck5hbWUpO1xuICAgIGF3YWl0IHRoaXMub3B0aW1pc3RpY0ZzLkhhbmRsZUNyZWF0ZUZvbGRlcihuZXdEaXJlY3RvcnlQYXRoKTtcbiAgICBhd2FpdCB0aGlzLm9wdGltaXN0aWNGcy5IYW5kbGVMaXN0KGN1cnJlbnREaXJlY3RvcnkpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIE9uTmV3Rm9sZGVyQ2xvYmJlcihuZXdEaXJOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAobmV3RGlyTmFtZSA9PT0gJy8nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnREaXJlY3RvcnkgPSBhd2FpdCB0aGlzLkdldEN1cnJlbnRQYXRoKCk7XG4gICAgY29uc3QgbmV3RGlyZWN0b3J5UGF0aCA9IHBhdGguam9pbihjdXJyZW50RGlyZWN0b3J5LCBuZXdEaXJOYW1lKTtcbiAgICBhd2FpdCB0aGlzLm9wdGltaXN0aWNGcy5IYW5kbGVDcmVhdGVGb2xkZXIobmV3RGlyZWN0b3J5UGF0aCwgdHJ1ZSk7XG4gICAgYXdhaXQgdGhpcy5vcHRpbWlzdGljRnMuSGFuZGxlTGlzdChjdXJyZW50RGlyZWN0b3J5KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBPbkRvd25sb2FkRmlsZShmaWxlOiBDb3JlVHlwZXMuUmVzRmlsZSkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZmlsZVN5c3RlbS5HZXRTaW5nbGUoZmlsZS5mdWxsUGF0aCk7XG4gICAgY29uc3QgbmV3RmlsZSA9IHJlcy5yZXN1bHQuZmlsZTtcbiAgICBhd2FpdCB0aGlzLm9wdGltaXN0aWNGcy5vblNlbGVjdEl0ZW0obmV3RmlsZSk7XG4gICAgdGhpcy5pbml0aWF0ZURvd25sb2FkKGZpbGUubmFtZSwgcmVzLnJlc3VsdC51cmwpO1xuICAgIGNvbnN0IGN1cnJlbnREaXJlY3RvcnkgPSBhd2FpdCB0aGlzLkdldEN1cnJlbnRQYXRoKCk7XG4gICAgYXdhaXQgdGhpcy5vcHRpbWlzdGljRnMuSGFuZGxlTGlzdChjdXJyZW50RGlyZWN0b3J5KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhdGVEb3dubG9hZChmaWxlbmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZykge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oJ2luaXRpYXRlRG93bmxvYWQuLi4nLCB7IHVybCB9KTtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpbmsuZG93bmxvYWQgPSBmaWxlbmFtZTtcbiAgICBsaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGxpbmsuaHJlZiA9IHVybDtcbiAgICBsaW5rLmNsaWNrKCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgUmVmcmVzaEV4cGxvcmVyKCkge1xuICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gYXdhaXQgdGhpcy5HZXRDdXJyZW50UGF0aCgpO1xuICAgIHJldHVybiB0aGlzLm9wdGltaXN0aWNGcy5IYW5kbGVMaXN0KGN1cnJlbnRQYXRoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgb3BlbkRpYWxvZyhjb21wOiBhbnksIGRhdGE/OiBhbnkpIHtcbiAgICBjb25zdCByZWYgPSB0aGlzLmRpYWxvZy5vcGVuKGNvbXAsIHtcbiAgICAgIHdpZHRoOiAnNjAwcHgnLFxuICAgICAgaGFzQmFja2Ryb3A6IHRydWUsXG4gICAgICBkaXNhYmxlQ2xvc2U6IGZhbHNlLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICB9KTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWYuYWZ0ZXJDbG9zZWQoKS5waXBlKHRha2UoMSkpLnRvUHJvbWlzZSgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgQ2xvbmVQcm92aWRlcigpOiBQcm9taXNlPEFjdGlvbkhhbmRsZXJzU2VydmljZT4ge1xuICAgIGNvbnN0IGNsb25lZCA9IG5ldyBBY3Rpb25IYW5kbGVyc1NlcnZpY2UoXG4gICAgICB0aGlzLmNsaWVudEZpbGVzeXN0ZW0uQ2xvbmVQcm92aWRlcigpLFxuICAgICAgdGhpcy5vcHRpbWlzdGljRnMuQ2xvbmVQcm92aWRlcigpLFxuICAgICAgdGhpcy5kaWFsb2csXG4gICAgICB0aGlzLmxvZ2dlcixcbiAgICAgIHRoaXMubm90aWZpY2F0aW9uc1xuICAgICk7XG4gICAgYXdhaXQgY2xvbmVkLmluaXQodGhpcy5maWxlU3lzdGVtLCB0aGlzLmNvbmZpZyk7XG4gICAgcmV0dXJuIGNsb25lZDtcbiAgfVxuXG4gIC8vU2VhcmNoIFxuICBwdWJsaWMgTGlzdEN1cnJlbnRQYXRoSXRlbXMocGF0aDogc3RyaW5nKTogUHJvbWlzZTxDb3JlVHlwZXMuUmVzQm9keUxpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5maWxlU3lzdGVtLkxpc3QocGF0aCk7XG4gIH1cbn1cbiJdfQ==
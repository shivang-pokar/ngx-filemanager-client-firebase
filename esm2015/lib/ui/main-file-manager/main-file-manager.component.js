/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { __awaiter } from "tslib";
import { Component, Input } from '@angular/core';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Subject, BehaviorSubject, of } from 'rxjs';
import { LoggerService } from '../../services/logging/logger.service';
import { ActionHandlersService } from './action-handlers.service';
import { ClientFileSystemService } from '../../services/pure/client-filesystem.service';
import { OptimisticFilesystemService } from '../../services/pure/optimistic-filesystem.service';
import { FilemanagerStatusService } from '../../services/state/status.service';
import { sortObjectArrayCase } from '../../utils/sort-helpers';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export class LibMainFileManagerComponent {
    /**
     * @param {?} actionHandlers
     * @param {?} logger
     * @param {?} status
     */
    constructor(actionHandlers, logger, status) {
        this.actionHandlers = actionHandlers;
        this.logger = logger;
        this.status = status;
        this.isFileDetailsOpen = true;
        this.$BulkSelected = new BehaviorSubject([]);
        this.$triggerClearSelected = new Subject();
        this.destroyed = new Subject();
        this.enableSearch = false;
        this.searchKeyword = '';
        this.seachResultDocuments = [];
        this.seachResultFolders = [];
        this.documentsShow = 10;
        this.foldersShow = 10;
        this.isSearching = false;
        this.showSearchingSpinner = false;
        this.requestMap = this.status.ActiveRequestsMap;
        this.searchForm = new FormGroup({
            searchKeyword: new FormControl('', [Validators.minLength(3)]),
        });
    }
    /**
     * @return {?}
     */
    get $status() {
        return this.status.ActiveRequestsMap.pipe(map(requests => {
            return Object.keys(requests).map(k => requests[k].status);
        }));
    }
    /**
     * @return {?}
     */
    get $hasSending() {
        return this.$status.pipe(map(s => !!s.find(status => status === 'SENDING')));
    }
    /**
     * @return {?}
     */
    get $hasFailed() {
        return this.$status.pipe(map(s => !!s.find(status => status === 'FAILED')));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.fileSystem) {
                throw new Error('<ngx-filemanager> must have input selector [fileSystem] set');
            }
            if (!this.config) {
                throw new Error('<ngx-filemanager> must have input selector [config] set');
            }
            if (!this.config.virtualRoot) {
                console.warn('<ngx-filemanager> warning config.virtualRoot not set, using bucket root "/"');
                this.config.virtualRoot = '/';
            }
            if (this.config.virtualRoot.endsWith('/')) {
                this.config.virtualRoot = this.config.virtualRoot.slice(0, -1);
            }
            if (!this.config.initialPath) {
                console.warn('<ngx-filemanager> warning config.initialPath not set, using virtualRoot: ' +
                    this.config.virtualRoot);
                this.config.initialPath = this.config.virtualRoot;
            }
            yield this.actionHandlers.init(this.fileSystem, this.config);
            yield this.actionHandlers.OnNavigateTo(this.config.virtualRoot);
            this.$CurrentPath = this.actionHandlers.$CurrentPath;
            this.actionHandlers.$SelectedFile
                .pipe(takeUntil(this.destroyed), tap(selectedFile => {
                console.log('this.$SelectedFile.pipe', { selectedFile });
                this.SelectedFile = null;
                setTimeout(() => {
                    this.SelectedFile = selectedFile;
                });
            }))
                .subscribe();
            this.makeConfig();
            this.initLoaded = true;
            this.enableSearch = !!this.config.enableSearch || false;
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed.next();
    }
    /**
     * @return {?}
     */
    makeConfig() {
        this.fileActions = [
            {
                label: 'Download',
                icon: 'file_download',
                onClick: (file) => __awaiter(this, void 0, void 0, function* () { return this.actionHandlers.OnDownloadFile(file); })
            },
            {
                label: 'Copy',
                icon: 'content_copy',
                onClick: (file) => __awaiter(this, void 0, void 0, function* () { return this.actionHandlers.OnCopyMultiple([file]); })
            },
            {
                label: 'Move',
                icon: 'forward',
                onClick: (file) => __awaiter(this, void 0, void 0, function* () { return this.actionHandlers.OnMoveMultiple([file]); })
            },
            {
                label: 'Rename',
                icon: 'border_color',
                onClick: (file) => __awaiter(this, void 0, void 0, function* () { return this.actionHandlers.OnRename(file); })
            },
            {
                label: 'Permissions',
                icon: 'lock_outline',
                onClick: (file) => __awaiter(this, void 0, void 0, function* () { return this.actionHandlers.OnSetPermissionsMultiple([file]); })
            },
            {
                label: 'Delete',
                icon: 'delete',
                color: 'warn',
                onClick: (file) => __awaiter(this, void 0, void 0, function* () { return this.actionHandlers.OnDeleteMultiple([file]); })
            }
        ];
        this.folderActions = [
            {
                label: 'Copy',
                icon: 'content_copy',
                onClick: (file) => __awaiter(this, void 0, void 0, function* () { return this.actionHandlers.OnCopyMultiple([file]); })
            },
            {
                label: 'Move',
                icon: 'forward',
                onClick: (file) => __awaiter(this, void 0, void 0, function* () { return this.actionHandlers.OnMoveMultiple([file]); })
            },
            {
                label: 'Rename',
                icon: 'border_color',
                onClick: (file) => __awaiter(this, void 0, void 0, function* () { return this.actionHandlers.OnRename(file); })
            },
            {
                label: 'Permissions',
                icon: 'lock_outline',
                onClick: (file) => __awaiter(this, void 0, void 0, function* () { return this.actionHandlers.OnSetPermissionsMultiple([file]); })
            },
            {
                label: 'Delete',
                icon: 'delete',
                color: 'warn',
                onClick: (file) => __awaiter(this, void 0, void 0, function* () { return this.actionHandlers.OnDeleteMultiple([file]); })
            }
        ];
        this.bulkActions = [
            {
                label: 'Cancel',
                icon: 'clear',
                onClick: (item) => __awaiter(this, void 0, void 0, function* () { return this.ClearBulkSelected(); })
            },
            {
                label: 'Copy',
                icon: 'content_copy',
                onClick: (items) => this.actionHandlers.OnCopyMultiple([...items])
            },
            {
                label: 'Move',
                icon: 'forward',
                onClick: (items) => this.actionHandlers.OnMoveMultiple(items)
            },
            {
                label: 'Set Permissions',
                icon: 'lock_outline',
                onClick: (items) => this.actionHandlers.OnSetPermissionsObjectMultiple(items),
                $disabled: of(!this.config.isAdmin)
            },
            {
                label: 'Delete',
                icon: 'delete',
                color: 'warn',
                onClick: (items) => this.actionHandlers.OnDeleteMultiple(items),
                $disabled: of(!this.config.isAdmin)
            }
        ];
        this.mainActions = [
            {
                label: 'Back Folder',
                icon: 'reply',
                onClick: () => __awaiter(this, void 0, void 0, function* () { return this.actionHandlers.OnNavigateToParent(); }),
                $disabled: this.actionHandlers.$CurrentPathIsRoot
            },
            {
                label: 'Refresh',
                icon: 'refresh',
                onClick: () => __awaiter(this, void 0, void 0, function* () { return this.actionHandlers.RefreshExplorer(); })
            },
            {
                label: 'Upload Files',
                icon: 'file_upload',
                onClick: () => __awaiter(this, void 0, void 0, function* () { return this.actionHandlers.OnUploadFilesToCurrentDirectory(); })
            },
            {
                label: 'New Folder',
                icon: 'create_new_folder',
                onClick: () => __awaiter(this, void 0, void 0, function* () { return this.actionHandlers.OnNewFolderInCurrentDirectory(); })
            }
        ];
        this.fileDetailActions = [
            {
                label: 'Download',
                toolTip: 'Click to Download',
                icon: 'file_download',
                $disabled: this.actionHandlers.$SelectedFile.pipe(map(f => !f || f.type !== 'file')),
                onClick: (file) => __awaiter(this, void 0, void 0, function* () { return this.actionHandlers.OnDownloadFile(file); })
            },
            {
                label: 'Rename',
                toolTip: 'Click to Rename',
                icon: 'border_color',
                $disabled: of(!this.config.isAdmin),
                onClick: (file) => __awaiter(this, void 0, void 0, function* () { return this.actionHandlers.OnRename(file); })
            },
            {
                label: 'Set Permissions',
                toolTip: 'Click to Set Permissions',
                icon: 'lock_outline',
                $disabled: of(!this.config.isAdmin),
                onClick: (file) => __awaiter(this, void 0, void 0, function* () { return this.actionHandlers.OnSetPermissionsObjectMultiple([file]); })
            },
            {
                label: 'Delete',
                toolTip: 'Click to Delete',
                icon: 'delete',
                $disabled: of(!this.config.isAdmin),
                color: 'warn',
                onClick: (file) => __awaiter(this, void 0, void 0, function* () { return this.actionHandlers.OnDeleteMultiple([file]); })
            }
        ];
        const /** @type {?} */ allFiles$ = new BehaviorSubject([]);
        this.actionHandlers.$FilesWithIcons.subscribe(files => allFiles$.next(files));
        this.folders$ = allFiles$.pipe(tap(folders => console.log('folders', { folders })), map(items => items
            .filter(a => a.type === 'dir')
            .sort(sortObjectArrayCase('name', 'asc'))));
        this.files$ = allFiles$.pipe(tap(files => console.log('files', { files })), map(items => items
            .filter(a => a.type === 'file')
            .sort(sortObjectArrayCase('name', 'asc'))));
    }
    /**
     * @param {?} itemPath
     * @return {?}
     */
    onEnterFolder(itemPath) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info('onSelectItemDoubleClick!', { itemPath });
            this.ClearBulkSelected();
            return this.actionHandlers.OnNavigateTo(itemPath);
        });
    }
    /**
     * @param {?} itemPath
     * @return {?}
     */
    onSelectedFilePath(itemPath) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info('onSelectItem!', { itemPath });
            return this.actionHandlers.OnSelectItemByPath(itemPath);
        });
    }
    /**
     * @param {?} file
     * @return {?}
     */
    onDetailsClickDelete(file) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.actionHandlers.OnDeleteMultiple([file]);
        });
    }
    /**
     * @param {?} file
     * @return {?}
     */
    onDetailsClickDownload(file) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.actionHandlers.OnDownloadFile(file);
        });
    }
    /**
     * @param {?} file
     * @return {?}
     */
    onDetailsClickRename(file) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.actionHandlers.OnRename(file);
        });
    }
    /**
     * @param {?} file
     * @return {?}
     */
    onDetailsClickSinglePermissions(file) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.actionHandlers.OnSetPermissionsMultiple([file]);
            yield this.actionHandlers.OnSelectItemByPath(file.fullPath);
        });
    }
    /**
     * @param {?} newPath
     * @return {?}
     */
    onClickCrumb(newPath) {
        return __awaiter(this, void 0, void 0, function* () {
            this.ClearBulkSelected();
            this.logger.info('onClickCrumb', { newPath });
            return this.actionHandlers.OnNavigateTo(newPath);
        });
    }
    /**
     * @return {?}
     */
    ClearBulkSelected() {
        this.$triggerClearSelected.next();
        this.$BulkSelected.next([]);
    }
    /**
     * @param {?} keyword
     * @return {?}
     */
    searchAllDocumentsAndFolders(keyword) {
        return __awaiter(this, void 0, void 0, function* () {
            keyword = keyword.toLocaleLowerCase().trim();
            if (!this.searchForm.valid) {
                return;
            }
            ;
            yield this.initCleanSearchResults();
            const /** @type {?} */ startPath = this.actionHandlers.GetRootPath();
            this.isSearching = true;
            this.showSearchingSpinner = true;
            this.iterateCurrentDocumentAndFolders(startPath, keyword, 0);
        });
    }
    /**
     * @param {?} currentPath
     * @param {?} keyword
     * @param {?} level
     * @return {?}
     */
    iterateCurrentDocumentAndFolders(currentPath, keyword, level) {
        return __awaiter(this, void 0, void 0, function* () {
            if (level > 100) {
                this.isSearching = false;
            }
            if (this.showSearchingSpinner) {
                this.showSearchingSpinner = (this.isSearching && this.seachResultDocuments.length === 0 && this.seachResultFolders.length === 0 && level < 3);
            }
            if (!this.isSearching) {
                return;
            }
            const /** @type {?} */ currentVisiableDocuments = (yield this.actionHandlers.ListCurrentPathItems(currentPath)).result;
            currentVisiableDocuments.forEach((item) => {
                console.log(item, 'item.type', item.type);
                if (item.type === 'file') {
                    if (this.checkSearchKeywordRelative(item.name, keyword)) {
                        this.seachResultDocuments.push(item);
                    }
                }
                else if (item.type === 'dir') {
                    if (this.checkSearchKeywordRelative(item.name, keyword)) {
                        this.seachResultFolders.push(item);
                    }
                    this.iterateCurrentDocumentAndFolders(item.fullPath, keyword, level + 1);
                }
            });
        });
    }
    /**
     * @param {?} targetName
     * @param {?} keyword
     * @return {?}
     */
    checkSearchKeywordRelative(targetName, keyword) {
        return targetName.toLowerCase().includes(keyword);
    }
    /**
     * @return {?}
     */
    initCleanSearchResults() {
        this.isSearching = false;
        this.showSearchingSpinner = false;
        return new Promise((resolve) => {
            setTimeout(() => {
                this.seachResultDocuments = [];
                this.seachResultFolders = [];
                this.foldersShow = 5;
                this.documentsShow = 5;
                resolve();
            }, 10);
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onSelectedSearchItem(item) {
        //this.initCleanSearchResults();
        if (item.type === 'file') {
            let /** @type {?} */ fileParentPath = item.fullPath.substring(0, item.fullPath.lastIndexOf('/'));
            this.onEnterFolder(fileParentPath);
        }
        else if (item.type === 'dir') {
            this.onEnterFolder(item.fullPath);
        }
    }
}
LibMainFileManagerComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngx-filemanager',
                template: "<div class=\"ngx-file-page-container\">\n  <mat-drawer-container>\n    <mat-drawer-content [class.loaded]=\"initLoaded\">\n      <div\n        class=\"bulk-actions-container\"\n        [class.hidden]=\"($BulkSelected | async).length < 1\"\n        *ngIf=\"initLoaded\"\n      >\n        <bulk-actions\n          [bulkActions]=\"this.bulkActions\"\n          [bulkSelected$]=\"this.$BulkSelected\"\n          (clearSelected)=\"this.ClearBulkSelected()\"\n        >\n        </bulk-actions>\n      </div>\n      <div class=\"folder-actions-container\">\n        <main-actions [mainActions]=\"this.mainActions\"> </main-actions>\n      </div>\n      <div class=\"flex-h space-between breadcrumb-container\">\n        <bread-crumbs\n          [currentPath]=\"$CurrentPath | async\"\n          (clickedCrumb)=\"this.onClickCrumb($event)\"\n          [config]=\"config\"\n        >\n        </bread-crumbs>\n        <div class=\"flex-h\">\n          <mat-progress-spinner\n            *ngIf=\"$hasSending | async\"\n            mode=\"indeterminate\"\n            [diameter]=\"40\"\n            color=\"primary\"\n          ></mat-progress-spinner>\n          <mat-progress-spinner\n            *ngIf=\"$hasFailed | async\"\n            mode=\"determinate\"\n            [diameter]=\"40\"\n            color=\"warn\"\n            [value]=\"100\"\n          ></mat-progress-spinner>\n          <div\n            class=\"mat-elevation-z8 expander-container has-pointer mat-table\"\n            (click)=\"isFileDetailsOpen = !isFileDetailsOpen\"\n          >\n            <mat-icon\n              matTooltip=\"View File Details\"\n              class=\"expander-icon\"\n              [class.drawer-out]=\"isFileDetailsOpen\"\n              [class.drawer-in]=\"!isFileDetailsOpen\"\n              >expand_more</mat-icon\n            >\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"enableSearch\">\n        <form (submit)=\"searchAllDocumentsAndFolders(searchKeyword)\" [formGroup]=\"searchForm\">\n          <mat-form-field class=\"w-full px-2\">\n            <input matInput [(ngModel)]=\"searchKeyword\" formControlName=\"searchKeyword\" placeholder=\"Search here\"/>\n          </mat-form-field>\n          <mat-progress-spinner\n              *ngIf=\"showSearchingSpinner\"\n              mode=\"determinate\"\n              [diameter]=\"40\"\n              color=\"warn\"\n              [value]=\"100\"\n            ></mat-progress-spinner>\n        </form>\n        <div *ngIf=\"!showSearchingSpinner&&isSearching&&seachResultDocuments.length===0&&seachResultFolders.length===0\">\n          <div class=\"card-container\">\n            <h4>Search results: </h4>\n            <mat-card >\n              <div class=\"document\">\n                <div class=\"title\">\n                  There are no site files/folders match your keyword.\n                </div>\n              </div>\n            </mat-card>\n          </div>\n        </div>\n        <div class=\"exp-panel\" *ngIf=\"seachResultDocuments.length>0\">\n          <mat-expansion-panel [expanded]=\"true\">\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Files:\n              </mat-panel-title>\n              <mat-panel-description>\n                They are results of search files.\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <mat-card (click)=\"onSelectedSearchItem(document)\" *ngFor=\"let document of seachResultDocuments|slice:0: documentsShow\">\n              <div class=\"document\">\n                <div class=\"title\">\n                  {{document.name}}\n                </div>\n                <div class=\"search-item\">\n                  <mat-icon class=\"icon-size-44 text-primary\">\n                      insert_drive_file\n                  </mat-icon>\n                  <span>{{ document.fullPath }}</span>\n              </div>\n              </div>\n            </mat-card>\n            <div class=\"text-right\">\n              <button \n                *ngIf=\"documentsShow < seachResultDocuments.length\"\n                (click)=\"documentsShow=documentsShow+10\"\n                mat-raised-button>Load more</button>\n              </div>\n          </mat-expansion-panel>\n        </div>\n        <div class=\"exp-panel\" *ngIf=\"seachResultFolders.length>0\">\n          <mat-expansion-panel [expanded]=\"true\">\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Folders:\n              </mat-panel-title>\n              <mat-panel-description>\n                They are results of search folders.\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <mat-card (click)=\"onSelectedSearchItem(folder)\" *ngFor=\"let folder of seachResultFolders|slice:0: foldersShow\">\n              <div class=\"document\">\n                <div class=\"title\">\n                  {{folder.name}}\n                </div>\n                <div class=\"search-item\">\n                  <mat-icon class=\"icon-size-44 text-primary\">\n                      folder\n                  </mat-icon>\n                  <span>{{ folder.fullPath }}</span>\n                </div>\n              </div>\n            </mat-card>\n            <div class=\"text-right\">\n              <button \n                *ngIf=\"foldersShow < seachResultFolders.length\"\n                (click)=\"foldersShow=foldersShow+10\"\n                mat-raised-button>Load more</button>\n            </div>\n          </mat-expansion-panel>\n        </div>\n      </div>\n      <app-file-table\n        *ngIf=\"folders$ && files$\"\n        [folders]=\"folders$ | async\"\n        [files]=\"files$ | async\"\n        [fileActions]=\"fileActions\"\n        [folderActions]=\"folderActions\"\n        [config]=\"config\"\n        [$triggerClearSelected]=\"$triggerClearSelected\"\n        (checkedChanged)=\"$BulkSelected.next($event)\"\n        (selectedChanged)=\"this.onSelectedFilePath($event)\"\n        (enterFolder)=\"this.onEnterFolder($event)\"\n      >\n      </app-file-table>\n    </mat-drawer-content>\n    <mat-drawer\n      #drawer\n      [(opened)]=\"isFileDetailsOpen\"\n      class=\"history-drawer\"\n      mode=\"side\"\n      position=\"end\"\n      opened\n    >\n      <ngx-filemanager-file-details\n        [actions]=\"fileDetailActions\"\n        [file]=\"SelectedFile\"\n        [fileSystem]=\"fileSystem\"\n        [config]=\"config\"\n        (clickedDownload)=\"this.onDetailsClickDownload($event)\"\n      >\n      </ngx-filemanager-file-details>\n    </mat-drawer>\n  </mat-drawer-container>\n</div>\n",
                providers: [
                    ActionHandlersService,
                    ClientFileSystemService,
                    OptimisticFilesystemService
                ],
                styles: [".heading{font-family:sans-serif;margin-left:10px}mat-drawer{width:260px}mat-drawer-content{overflow:hidden}mat-drawer-content .loaded{overflow:auto}mat-drawer-container{width:100%}.ngx-file-page-container{display:flex;height:calc(100% - 65px)}.expander-container{align-items:center;cursor:pointer;display:flex;flex-direction:row-reverse;right:0;top:0;z-index:1}.expander-icon{font-size:2em;height:1em;transition:transform .5s;width:1em}.bulk-actions-container{height:80px;overflow:hidden;position:absolute;top:0;transition:top .7s;width:100%;z-index:2}.hidden{top:-90px}.drawer-out{transform:rotate(-90deg)}.drawer-in{transform:rotate(90deg)}.flex-h{align-items:center;display:flex;flex-direction:row}.space-between{justify-content:space-between}button.top{margin-left:10px}.breadcrumb-container{margin:2px 0}.document{cursor:pointer}.search-item{align-items:center;display:flex}", "h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
            }] }
];
/** @nocollapse */
LibMainFileManagerComponent.ctorParameters = () => [
    { type: ActionHandlersService },
    { type: LoggerService },
    { type: FilemanagerStatusService }
];
LibMainFileManagerComponent.propDecorators = {
    fileSystem: [{ type: Input }],
    config: [{ type: Input }]
};
function LibMainFileManagerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    LibMainFileManagerComponent.prototype.fileSystem;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.config;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.isFileDetailsOpen;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.$BulkSelected;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.$triggerClearSelected;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.initLoaded;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.requestMap;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.$CurrentPath;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.SelectedFile;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.destroyed;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.folderActions;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.fileActions;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.bulkActions;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.mainActions;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.fileDetailActions;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.folders$;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.files$;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.enableSearch;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.searchForm;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.searchKeyword;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.seachResultDocuments;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.seachResultFolders;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.documentsShow;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.foldersShow;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.isSearching;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.showSearchingSpinner;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.actionHandlers;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.logger;
    /** @type {?} */
    LibMainFileManagerComponent.prototype.status;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1maWxlLW1hbmFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL1NoaXZhbmcvUGkgU29mdHdhcmUvZmlsZS1tYW5hZ2VyL25neC1maWxlbWFuYWdlci9wcm9qZWN0cy9uZ3gtZmlsZW1hbmFnZXItY2xpZW50LWZpcmViYXNlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi91aS9tYWluLWZpbGUtbWFuYWdlci9tYWluLWZpbGUtbWFuYWdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQVUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQVEsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRWhHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBSy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBY3BFLE1BQU0sT0FBTywyQkFBMkI7Ozs7OztJQXVDdEMsWUFDVSxnQkFDQSxRQUNBO1FBRkEsbUJBQWMsR0FBZCxjQUFjO1FBQ2QsV0FBTSxHQUFOLE1BQU07UUFDTixXQUFNLEdBQU4sTUFBTTtpQ0FwQ1csSUFBSTs2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SSxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDaEYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNwQzthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxLQUFLLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbkM7Ozs7WUFqYUosU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiwwaU5BQStDO2dCQUUvQyxTQUFTLEVBQUU7b0JBQ1QscUJBQXFCO29CQUNyQix1QkFBdUI7b0JBQ3ZCLDJCQUEyQjtpQkFDNUI7O2FBRUY7Ozs7WUF2QlEscUJBQXFCO1lBRHJCLGFBQWE7WUFLYix3QkFBd0I7Ozt5QkFxQjlCLEtBQUs7cUJBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCwgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlLCBtYXAsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRmlsZVN5c3RlbVByb3ZpZGVyLCBDb3JlVHlwZXMgfSBmcm9tICcuLi8uLi8uLi9jb3JlLXR5cGVzJztcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2dnaW5nL2xvZ2dlci5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGlvbkhhbmRsZXJzU2VydmljZSB9IGZyb20gJy4vYWN0aW9uLWhhbmRsZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2xpZW50RmlsZVN5c3RlbVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wdXJlL2NsaWVudC1maWxlc3lzdGVtLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3B0aW1pc3RpY0ZpbGVzeXN0ZW1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHVyZS9vcHRpbWlzdGljLWZpbGVzeXN0ZW0uc2VydmljZSc7XG5pbXBvcnQgeyBGaWxlTWFuYWdlckNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZ3VyYXRpb24vY2xpZW50LWNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgRmlsZW1hbmFnZXJTdGF0dXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RhdGUvc3RhdHVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgc29ydE9iamVjdEFycmF5Q2FzZSB9IGZyb20gJy4uLy4uL3V0aWxzL3NvcnQtaGVscGVycyc7XG5pbXBvcnQgeyBGaWxlQWN0aW9uRGVmaW5pdGlvbiB9IGZyb20gJy4uL2ZpbGUtdGFibGUvRmlsZUFjdGlvbkRlZmluaXRpb24nO1xuaW1wb3J0IHsgQnVsa0FjdGlvbkRlZmluaXRpb24gfSBmcm9tICcuLi9hY3Rpb25zLXRvb2xiYXJzL0J1bGtBY3Rpb25EZWZpbml0aW9uJztcbmltcG9ydCB7IE1haW5BY3Rpb25EZWZpbml0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy10b29sYmFycy9NYWluQWN0aW9uRGVmaW5pdGlvbic7XG5pbXBvcnQgeyBGaWxlRGV0YWlsQWN0aW9uRGVmaW5pdGlvbiB9IGZyb20gJy4uL2ZpbGUtZGV0YWlscy9GaWxlRGV0YWlsQWN0aW9uRGVmaW5pdGlvbic7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ25neC1maWxlbWFuYWdlcicsXG4gIHRlbXBsYXRlVXJsOiAnbWFpbi1maWxlLW1hbmFnZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbWFpbi1maWxlLW1hbmFnZXIuY29tcG9uZW50LnNjc3MnLCAnLi4vc2hhcmVkLXV0aWxpdHktc3R5bGVzLnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQWN0aW9uSGFuZGxlcnNTZXJ2aWNlLFxuICAgIENsaWVudEZpbGVTeXN0ZW1TZXJ2aWNlLFxuICAgIE9wdGltaXN0aWNGaWxlc3lzdGVtU2VydmljZVxuICBdXG4gIFxufSlcbmV4cG9ydCBjbGFzcyBMaWJNYWluRmlsZU1hbmFnZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpXG4gIGZpbGVTeXN0ZW06IEZpbGVTeXN0ZW1Qcm92aWRlcjtcbiAgQElucHV0KClcbiAgY29uZmlnOiBGaWxlTWFuYWdlckNvbmZpZztcblxuICBwdWJsaWMgaXNGaWxlRGV0YWlsc09wZW4gPSB0cnVlO1xuXG4gIHB1YmxpYyAkQnVsa1NlbGVjdGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDb3JlVHlwZXMuUmVzRmlsZVtdPihbXSk7XG4gIHB1YmxpYyAkdHJpZ2dlckNsZWFyU2VsZWN0ZWQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIHB1YmxpYyBpbml0TG9hZGVkO1xuICBwdWJsaWMgcmVxdWVzdE1hcDtcblxuICAkQ3VycmVudFBhdGg6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgU2VsZWN0ZWRGaWxlOiBDb3JlVHlwZXMuUmVzRmlsZTtcblxuICBkZXN0cm95ZWQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGZvbGRlckFjdGlvbnM6IEZpbGVBY3Rpb25EZWZpbml0aW9uW107XG4gIGZpbGVBY3Rpb25zOiBGaWxlQWN0aW9uRGVmaW5pdGlvbltdO1xuICBidWxrQWN0aW9uczogQnVsa0FjdGlvbkRlZmluaXRpb25bXTtcbiAgbWFpbkFjdGlvbnM6IE1haW5BY3Rpb25EZWZpbml0aW9uW107XG5cbiAgZmlsZURldGFpbEFjdGlvbnM6IEZpbGVEZXRhaWxBY3Rpb25EZWZpbml0aW9uW107XG5cbiAgZm9sZGVycyQ6IE9ic2VydmFibGU8Q29yZVR5cGVzLlJlc0ZpbGVbXT47XG4gIGZpbGVzJDogT2JzZXJ2YWJsZTxDb3JlVHlwZXMuUmVzRmlsZVtdPjtcblxuICBlbmFibGVTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2VhcmNoRm9ybTogRm9ybUdyb3VwO1xuICBzZWFyY2hLZXl3b3JkOiBzdHJpbmcgPSAnJztcbiAgc2VhY2hSZXN1bHREb2N1bWVudHM6IENvcmVUeXBlcy5SZXNGaWxlW10gPSBbXTtcbiAgc2VhY2hSZXN1bHRGb2xkZXJzOiBDb3JlVHlwZXMuUmVzRmlsZVtdID0gW107XG4gIGRvY3VtZW50c1Nob3c6IG51bWJlciA9IDEwO1xuICBmb2xkZXJzU2hvdzogbnVtYmVyID0gMTA7XG4gIGlzU2VhcmNoaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHNob3dTZWFyY2hpbmdTcGlubmVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25IYW5kbGVyczogQWN0aW9uSGFuZGxlcnNTZXJ2aWNlLFxuICAgIHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RhdHVzOiBGaWxlbWFuYWdlclN0YXR1c1NlcnZpY2UsXG4gICkge1xuICAgIHRoaXMucmVxdWVzdE1hcCA9IHRoaXMuc3RhdHVzLkFjdGl2ZVJlcXVlc3RzTWFwO1xuICAgIHRoaXMuc2VhcmNoRm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgc2VhcmNoS2V5d29yZDogbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5taW5MZW5ndGgoMyldKSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBnZXQgJHN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMuQWN0aXZlUmVxdWVzdHNNYXAucGlwZShcbiAgICAgIG1hcChyZXF1ZXN0cyA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhyZXF1ZXN0cykubWFwKGsgPT4gcmVxdWVzdHNba10uc3RhdHVzKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldCAkaGFzU2VuZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy4kc3RhdHVzLnBpcGUoXG4gICAgICBtYXAocyA9PiAhIXMuZmluZChzdGF0dXMgPT4gc3RhdHVzID09PSAnU0VORElORycpKVxuICAgICk7XG4gIH1cblxuICBnZXQgJGhhc0ZhaWxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4kc3RhdHVzLnBpcGUobWFwKHMgPT4gISFzLmZpbmQoc3RhdHVzID0+IHN0YXR1cyA9PT0gJ0ZBSUxFRCcpKSk7XG4gIH1cblxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuZmlsZVN5c3RlbSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnPG5neC1maWxlbWFuYWdlcj4gbXVzdCBoYXZlIGlucHV0IHNlbGVjdG9yIFtmaWxlU3lzdGVtXSBzZXQnXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICc8bmd4LWZpbGVtYW5hZ2VyPiBtdXN0IGhhdmUgaW5wdXQgc2VsZWN0b3IgW2NvbmZpZ10gc2V0J1xuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmNvbmZpZy52aXJ0dWFsUm9vdCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnPG5neC1maWxlbWFuYWdlcj4gd2FybmluZyBjb25maWcudmlydHVhbFJvb3Qgbm90IHNldCwgdXNpbmcgYnVja2V0IHJvb3QgXCIvXCInXG4gICAgICApO1xuICAgICAgdGhpcy5jb25maWcudmlydHVhbFJvb3QgPSAnLyc7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbmZpZy52aXJ0dWFsUm9vdC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICB0aGlzLmNvbmZpZy52aXJ0dWFsUm9vdCA9IHRoaXMuY29uZmlnLnZpcnR1YWxSb290LnNsaWNlKDAsIC0xKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5pbml0aWFsUGF0aCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnPG5neC1maWxlbWFuYWdlcj4gd2FybmluZyBjb25maWcuaW5pdGlhbFBhdGggbm90IHNldCwgdXNpbmcgdmlydHVhbFJvb3Q6ICcgK1xuICAgICAgICAgIHRoaXMuY29uZmlnLnZpcnR1YWxSb290XG4gICAgICApO1xuICAgICAgdGhpcy5jb25maWcuaW5pdGlhbFBhdGggPSB0aGlzLmNvbmZpZy52aXJ0dWFsUm9vdDtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5hY3Rpb25IYW5kbGVycy5pbml0KHRoaXMuZmlsZVN5c3RlbSwgdGhpcy5jb25maWcpO1xuICAgIGF3YWl0IHRoaXMuYWN0aW9uSGFuZGxlcnMuT25OYXZpZ2F0ZVRvKHRoaXMuY29uZmlnLnZpcnR1YWxSb290KTtcbiAgICB0aGlzLiRDdXJyZW50UGF0aCA9IHRoaXMuYWN0aW9uSGFuZGxlcnMuJEN1cnJlbnRQYXRoO1xuICAgIHRoaXMuYWN0aW9uSGFuZGxlcnMuJFNlbGVjdGVkRmlsZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCksXG4gICAgICAgIHRhcChzZWxlY3RlZEZpbGUgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLiRTZWxlY3RlZEZpbGUucGlwZScsIHsgc2VsZWN0ZWRGaWxlIH0pO1xuICAgICAgICAgIHRoaXMuU2VsZWN0ZWRGaWxlID0gbnVsbDtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuU2VsZWN0ZWRGaWxlID0gc2VsZWN0ZWRGaWxlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICAgIHRoaXMubWFrZUNvbmZpZygpO1xuICAgIHRoaXMuaW5pdExvYWRlZCA9IHRydWU7XG4gICAgdGhpcy5lbmFibGVTZWFyY2ggPSAhIXRoaXMuY29uZmlnLmVuYWJsZVNlYXJjaCB8fCBmYWxzZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveWVkLm5leHQoKTtcbiAgfVxuXG4gIG1ha2VDb25maWcoKSB7XG4gICAgdGhpcy5maWxlQWN0aW9ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdEb3dubG9hZCcsXG4gICAgICAgIGljb246ICdmaWxlX2Rvd25sb2FkJyxcbiAgICAgICAgb25DbGljazogYXN5bmMgKGZpbGU6IENvcmVUeXBlcy5SZXNGaWxlKSA9PlxuICAgICAgICAgIHRoaXMuYWN0aW9uSGFuZGxlcnMuT25Eb3dubG9hZEZpbGUoZmlsZSlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnQ29weScsXG4gICAgICAgIGljb246ICdjb250ZW50X2NvcHknLFxuICAgICAgICBvbkNsaWNrOiBhc3luYyAoZmlsZTogQ29yZVR5cGVzLlJlc0ZpbGUpID0+XG4gICAgICAgICAgdGhpcy5hY3Rpb25IYW5kbGVycy5PbkNvcHlNdWx0aXBsZShbZmlsZV0pXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ01vdmUnLFxuICAgICAgICBpY29uOiAnZm9yd2FyZCcsXG4gICAgICAgIG9uQ2xpY2s6IGFzeW5jIChmaWxlOiBDb3JlVHlwZXMuUmVzRmlsZSkgPT5cbiAgICAgICAgICB0aGlzLmFjdGlvbkhhbmRsZXJzLk9uTW92ZU11bHRpcGxlKFtmaWxlXSlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnUmVuYW1lJyxcbiAgICAgICAgaWNvbjogJ2JvcmRlcl9jb2xvcicsXG4gICAgICAgIG9uQ2xpY2s6IGFzeW5jIChmaWxlOiBDb3JlVHlwZXMuUmVzRmlsZSkgPT5cbiAgICAgICAgICB0aGlzLmFjdGlvbkhhbmRsZXJzLk9uUmVuYW1lKGZpbGUpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ1Blcm1pc3Npb25zJyxcbiAgICAgICAgaWNvbjogJ2xvY2tfb3V0bGluZScsXG4gICAgICAgIG9uQ2xpY2s6IGFzeW5jIChmaWxlOiBDb3JlVHlwZXMuUmVzRmlsZSkgPT5cbiAgICAgICAgICB0aGlzLmFjdGlvbkhhbmRsZXJzLk9uU2V0UGVybWlzc2lvbnNNdWx0aXBsZShbZmlsZV0pXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ0RlbGV0ZScsXG4gICAgICAgIGljb246ICdkZWxldGUnLFxuICAgICAgICBjb2xvcjogJ3dhcm4nLFxuICAgICAgICBvbkNsaWNrOiBhc3luYyAoZmlsZTogQ29yZVR5cGVzLlJlc0ZpbGUpID0+XG4gICAgICAgICAgdGhpcy5hY3Rpb25IYW5kbGVycy5PbkRlbGV0ZU11bHRpcGxlKFtmaWxlXSlcbiAgICAgIH1cbiAgICBdO1xuICAgIHRoaXMuZm9sZGVyQWN0aW9ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdDb3B5JyxcbiAgICAgICAgaWNvbjogJ2NvbnRlbnRfY29weScsXG4gICAgICAgIG9uQ2xpY2s6IGFzeW5jIChmaWxlOiBDb3JlVHlwZXMuUmVzRmlsZSkgPT5cbiAgICAgICAgICB0aGlzLmFjdGlvbkhhbmRsZXJzLk9uQ29weU11bHRpcGxlKFtmaWxlXSlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnTW92ZScsXG4gICAgICAgIGljb246ICdmb3J3YXJkJyxcbiAgICAgICAgb25DbGljazogYXN5bmMgKGZpbGU6IENvcmVUeXBlcy5SZXNGaWxlKSA9PlxuICAgICAgICAgIHRoaXMuYWN0aW9uSGFuZGxlcnMuT25Nb3ZlTXVsdGlwbGUoW2ZpbGVdKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdSZW5hbWUnLFxuICAgICAgICBpY29uOiAnYm9yZGVyX2NvbG9yJyxcbiAgICAgICAgb25DbGljazogYXN5bmMgKGZpbGU6IENvcmVUeXBlcy5SZXNGaWxlKSA9PlxuICAgICAgICAgIHRoaXMuYWN0aW9uSGFuZGxlcnMuT25SZW5hbWUoZmlsZSlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnUGVybWlzc2lvbnMnLFxuICAgICAgICBpY29uOiAnbG9ja19vdXRsaW5lJyxcbiAgICAgICAgb25DbGljazogYXN5bmMgKGZpbGU6IENvcmVUeXBlcy5SZXNGaWxlKSA9PlxuICAgICAgICAgIHRoaXMuYWN0aW9uSGFuZGxlcnMuT25TZXRQZXJtaXNzaW9uc011bHRpcGxlKFtmaWxlXSlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnRGVsZXRlJyxcbiAgICAgICAgaWNvbjogJ2RlbGV0ZScsXG4gICAgICAgIGNvbG9yOiAnd2FybicsXG4gICAgICAgIG9uQ2xpY2s6IGFzeW5jIChmaWxlOiBDb3JlVHlwZXMuUmVzRmlsZSkgPT5cbiAgICAgICAgICB0aGlzLmFjdGlvbkhhbmRsZXJzLk9uRGVsZXRlTXVsdGlwbGUoW2ZpbGVdKVxuICAgICAgfVxuICAgIF07XG4gICAgdGhpcy5idWxrQWN0aW9ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdDYW5jZWwnLFxuICAgICAgICBpY29uOiAnY2xlYXInLFxuICAgICAgICBvbkNsaWNrOiBhc3luYyAoaXRlbTogQ29yZVR5cGVzLlJlc0ZpbGVbXSkgPT4gdGhpcy5DbGVhckJ1bGtTZWxlY3RlZCgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ0NvcHknLFxuICAgICAgICBpY29uOiAnY29udGVudF9jb3B5JyxcbiAgICAgICAgb25DbGljazogKGl0ZW1zOiBDb3JlVHlwZXMuUmVzRmlsZVtdKSA9PlxuICAgICAgICAgIHRoaXMuYWN0aW9uSGFuZGxlcnMuT25Db3B5TXVsdGlwbGUoWy4uLml0ZW1zXSlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnTW92ZScsXG4gICAgICAgIGljb246ICdmb3J3YXJkJyxcbiAgICAgICAgb25DbGljazogKGl0ZW1zOiBDb3JlVHlwZXMuUmVzRmlsZVtdKSA9PlxuICAgICAgICAgIHRoaXMuYWN0aW9uSGFuZGxlcnMuT25Nb3ZlTXVsdGlwbGUoaXRlbXMpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ1NldCBQZXJtaXNzaW9ucycsXG4gICAgICAgIGljb246ICdsb2NrX291dGxpbmUnLFxuICAgICAgICBvbkNsaWNrOiAoaXRlbXM6IENvcmVUeXBlcy5SZXNGaWxlW10pID0+XG4gICAgICAgICAgdGhpcy5hY3Rpb25IYW5kbGVycy5PblNldFBlcm1pc3Npb25zT2JqZWN0TXVsdGlwbGUoaXRlbXMpLFxuICAgICAgICAkZGlzYWJsZWQ6IG9mKCF0aGlzLmNvbmZpZy5pc0FkbWluKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdEZWxldGUnLFxuICAgICAgICBpY29uOiAnZGVsZXRlJyxcbiAgICAgICAgY29sb3I6ICd3YXJuJyxcbiAgICAgICAgb25DbGljazogKGl0ZW1zOiBDb3JlVHlwZXMuUmVzRmlsZVtdKSA9PlxuICAgICAgICAgIHRoaXMuYWN0aW9uSGFuZGxlcnMuT25EZWxldGVNdWx0aXBsZShpdGVtcyksXG4gICAgICAgICRkaXNhYmxlZDogb2YoIXRoaXMuY29uZmlnLmlzQWRtaW4pXG4gICAgICB9XG4gICAgXTtcbiAgICB0aGlzLm1haW5BY3Rpb25zID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ0JhY2sgRm9sZGVyJyxcbiAgICAgICAgaWNvbjogJ3JlcGx5JyxcbiAgICAgICAgb25DbGljazogYXN5bmMgKCkgPT4gdGhpcy5hY3Rpb25IYW5kbGVycy5Pbk5hdmlnYXRlVG9QYXJlbnQoKSxcbiAgICAgICAgJGRpc2FibGVkOiB0aGlzLmFjdGlvbkhhbmRsZXJzLiRDdXJyZW50UGF0aElzUm9vdFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdSZWZyZXNoJyxcbiAgICAgICAgaWNvbjogJ3JlZnJlc2gnLFxuICAgICAgICBvbkNsaWNrOiBhc3luYyAoKSA9PiB0aGlzLmFjdGlvbkhhbmRsZXJzLlJlZnJlc2hFeHBsb3JlcigpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ1VwbG9hZCBGaWxlcycsXG4gICAgICAgIGljb246ICdmaWxlX3VwbG9hZCcsXG4gICAgICAgIG9uQ2xpY2s6IGFzeW5jICgpID0+XG4gICAgICAgICAgdGhpcy5hY3Rpb25IYW5kbGVycy5PblVwbG9hZEZpbGVzVG9DdXJyZW50RGlyZWN0b3J5KClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnTmV3IEZvbGRlcicsXG4gICAgICAgIGljb246ICdjcmVhdGVfbmV3X2ZvbGRlcicsXG4gICAgICAgIG9uQ2xpY2s6IGFzeW5jICgpID0+IHRoaXMuYWN0aW9uSGFuZGxlcnMuT25OZXdGb2xkZXJJbkN1cnJlbnREaXJlY3RvcnkoKVxuICAgICAgfVxuICAgIF07XG4gICAgdGhpcy5maWxlRGV0YWlsQWN0aW9ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdEb3dubG9hZCcsXG4gICAgICAgIHRvb2xUaXA6ICdDbGljayB0byBEb3dubG9hZCcsXG4gICAgICAgIGljb246ICdmaWxlX2Rvd25sb2FkJyxcbiAgICAgICAgJGRpc2FibGVkOiB0aGlzLmFjdGlvbkhhbmRsZXJzLiRTZWxlY3RlZEZpbGUucGlwZShtYXAoZiA9PiAhZiB8fCBmLnR5cGUgIT09ICdmaWxlJykpLFxuICAgICAgICBvbkNsaWNrOiBhc3luYyAoZmlsZSkgPT4gdGhpcy5hY3Rpb25IYW5kbGVycy5PbkRvd25sb2FkRmlsZShmaWxlKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdSZW5hbWUnLFxuICAgICAgICB0b29sVGlwOiAnQ2xpY2sgdG8gUmVuYW1lJyxcbiAgICAgICAgaWNvbjogJ2JvcmRlcl9jb2xvcicsXG4gICAgICAgICRkaXNhYmxlZDogb2YoIXRoaXMuY29uZmlnLmlzQWRtaW4pLFxuICAgICAgICBvbkNsaWNrOiBhc3luYyAoZmlsZSkgPT4gdGhpcy5hY3Rpb25IYW5kbGVycy5PblJlbmFtZShmaWxlKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdTZXQgUGVybWlzc2lvbnMnLFxuICAgICAgICB0b29sVGlwOiAnQ2xpY2sgdG8gU2V0IFBlcm1pc3Npb25zJyxcbiAgICAgICAgaWNvbjogJ2xvY2tfb3V0bGluZScsXG4gICAgICAgICRkaXNhYmxlZDogb2YoIXRoaXMuY29uZmlnLmlzQWRtaW4pLFxuICAgICAgICBvbkNsaWNrOiBhc3luYyAoZmlsZSkgPT4gdGhpcy5hY3Rpb25IYW5kbGVycy5PblNldFBlcm1pc3Npb25zT2JqZWN0TXVsdGlwbGUoW2ZpbGVdKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdEZWxldGUnLFxuICAgICAgICB0b29sVGlwOiAnQ2xpY2sgdG8gRGVsZXRlJyxcbiAgICAgICAgaWNvbjogJ2RlbGV0ZScsXG4gICAgICAgICRkaXNhYmxlZDogb2YoIXRoaXMuY29uZmlnLmlzQWRtaW4pLFxuICAgICAgICBjb2xvcjogJ3dhcm4nLFxuICAgICAgICBvbkNsaWNrOiBhc3luYyAoZmlsZSkgPT4gdGhpcy5hY3Rpb25IYW5kbGVycy5PbkRlbGV0ZU11bHRpcGxlKFtmaWxlXSlcbiAgICAgIH1cbiAgICBdO1xuICAgIGNvbnN0IGFsbEZpbGVzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Q29yZVR5cGVzLlJlc0ZpbGVbXT4oW10pO1xuICAgIHRoaXMuYWN0aW9uSGFuZGxlcnMuJEZpbGVzV2l0aEljb25zLnN1YnNjcmliZShmaWxlcyA9PlxuICAgICAgYWxsRmlsZXMkLm5leHQoZmlsZXMpXG4gICAgKTtcbiAgICB0aGlzLmZvbGRlcnMkID0gYWxsRmlsZXMkLnBpcGUoXG4gICAgICB0YXAoZm9sZGVycyA9PiBjb25zb2xlLmxvZygnZm9sZGVycycsIHsgZm9sZGVycyB9KSksXG4gICAgICBtYXAoaXRlbXMgPT5cbiAgICAgICAgaXRlbXNcbiAgICAgICAgICAuZmlsdGVyKGEgPT4gYS50eXBlID09PSAnZGlyJylcbiAgICAgICAgICAuc29ydChzb3J0T2JqZWN0QXJyYXlDYXNlKCduYW1lJywgJ2FzYycpKVxuICAgICAgKVxuICAgICk7XG4gICAgdGhpcy5maWxlcyQgPSBhbGxGaWxlcyQucGlwZShcbiAgICAgIHRhcChmaWxlcyA9PiBjb25zb2xlLmxvZygnZmlsZXMnLCB7IGZpbGVzIH0pKSxcbiAgICAgIG1hcChpdGVtcyA9PlxuICAgICAgICBpdGVtc1xuICAgICAgICAgIC5maWx0ZXIoYSA9PiBhLnR5cGUgPT09ICdmaWxlJylcbiAgICAgICAgICAuc29ydChzb3J0T2JqZWN0QXJyYXlDYXNlKCduYW1lJywgJ2FzYycpKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBhc3luYyBvbkVudGVyRm9sZGVyKGl0ZW1QYXRoOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdvblNlbGVjdEl0ZW1Eb3VibGVDbGljayEnLCB7IGl0ZW1QYXRoIH0pO1xuICAgIHRoaXMuQ2xlYXJCdWxrU2VsZWN0ZWQoKTtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25IYW5kbGVycy5Pbk5hdmlnYXRlVG8oaXRlbVBhdGgpO1xuICB9XG4gIGFzeW5jIG9uU2VsZWN0ZWRGaWxlUGF0aChpdGVtUGF0aDogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbygnb25TZWxlY3RJdGVtIScsIHsgaXRlbVBhdGggfSk7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9uSGFuZGxlcnMuT25TZWxlY3RJdGVtQnlQYXRoKGl0ZW1QYXRoKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBvbkRldGFpbHNDbGlja0RlbGV0ZShmaWxlOiBDb3JlVHlwZXMuUmVzRmlsZSkge1xuICAgIGF3YWl0IHRoaXMuYWN0aW9uSGFuZGxlcnMuT25EZWxldGVNdWx0aXBsZShbZmlsZV0pO1xuICB9XG4gIHB1YmxpYyBhc3luYyBvbkRldGFpbHNDbGlja0Rvd25sb2FkKGZpbGU6IENvcmVUeXBlcy5SZXNGaWxlKSB7XG4gICAgYXdhaXQgdGhpcy5hY3Rpb25IYW5kbGVycy5PbkRvd25sb2FkRmlsZShmaWxlKTtcbiAgfVxuICBwdWJsaWMgYXN5bmMgb25EZXRhaWxzQ2xpY2tSZW5hbWUoZmlsZTogQ29yZVR5cGVzLlJlc0ZpbGUpIHtcbiAgICBhd2FpdCB0aGlzLmFjdGlvbkhhbmRsZXJzLk9uUmVuYW1lKGZpbGUpO1xuICB9XG4gIHB1YmxpYyBhc3luYyBvbkRldGFpbHNDbGlja1NpbmdsZVBlcm1pc3Npb25zKGZpbGU6IENvcmVUeXBlcy5SZXNGaWxlKSB7XG4gICAgYXdhaXQgdGhpcy5hY3Rpb25IYW5kbGVycy5PblNldFBlcm1pc3Npb25zTXVsdGlwbGUoW2ZpbGVdKTtcbiAgICBhd2FpdCB0aGlzLmFjdGlvbkhhbmRsZXJzLk9uU2VsZWN0SXRlbUJ5UGF0aChmaWxlLmZ1bGxQYXRoKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBvbkNsaWNrQ3J1bWIobmV3UGF0aDogc3RyaW5nKSB7XG4gICAgdGhpcy5DbGVhckJ1bGtTZWxlY3RlZCgpO1xuICAgIHRoaXMubG9nZ2VyLmluZm8oJ29uQ2xpY2tDcnVtYicsIHsgbmV3UGF0aCB9KTtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25IYW5kbGVycy5Pbk5hdmlnYXRlVG8obmV3UGF0aCk7XG4gIH1cblxuICBwdWJsaWMgQ2xlYXJCdWxrU2VsZWN0ZWQoKSB7XG4gICAgdGhpcy4kdHJpZ2dlckNsZWFyU2VsZWN0ZWQubmV4dCgpO1xuICAgIHRoaXMuJEJ1bGtTZWxlY3RlZC5uZXh0KFtdKTtcbiAgfVxuXG4gIC8vIFNlYXJjaFxuICBwdWJsaWMgYXN5bmMgc2VhcmNoQWxsRG9jdW1lbnRzQW5kRm9sZGVycyhrZXl3b3JkOiBzdHJpbmcpIHtcbiAgICBrZXl3b3JkID0ga2V5d29yZC50b0xvY2FsZUxvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgICBpZighdGhpcy5zZWFyY2hGb3JtLnZhbGlkKXsgXG4gICAgICByZXR1cm5cbiAgICB9O1xuICAgIGF3YWl0IHRoaXMuaW5pdENsZWFuU2VhcmNoUmVzdWx0cygpO1xuICAgIGNvbnN0IHN0YXJ0UGF0aCA9IHRoaXMuYWN0aW9uSGFuZGxlcnMuR2V0Um9vdFBhdGgoKTtcbiAgICB0aGlzLmlzU2VhcmNoaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnNob3dTZWFyY2hpbmdTcGlubmVyID0gdHJ1ZTtcbiAgICB0aGlzLml0ZXJhdGVDdXJyZW50RG9jdW1lbnRBbmRGb2xkZXJzKHN0YXJ0UGF0aCwga2V5d29yZCwgMCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGl0ZXJhdGVDdXJyZW50RG9jdW1lbnRBbmRGb2xkZXJzKGN1cnJlbnRQYXRoOiBzdHJpbmcsIGtleXdvcmQ6IHN0cmluZywgbGV2ZWw6IG51bWJlcikge1xuICAgICAgaWYobGV2ZWwgPiAxMDApIHtcbiAgICAgICAgdGhpcy5pc1NlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYodGhpcy5zaG93U2VhcmNoaW5nU3Bpbm5lcikge1xuICAgICAgICB0aGlzLnNob3dTZWFyY2hpbmdTcGlubmVyID0gKHRoaXMuaXNTZWFyY2hpbmcmJnRoaXMuc2VhY2hSZXN1bHREb2N1bWVudHMubGVuZ3RoPT09MCYmdGhpcy5zZWFjaFJlc3VsdEZvbGRlcnMubGVuZ3RoPT09MCYmbGV2ZWwgPCAzKTtcbiAgICAgIH1cbiAgICAgIGlmKCF0aGlzLmlzU2VhcmNoaW5nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBjdXJyZW50VmlzaWFibGVEb2N1bWVudHM6IENvcmVUeXBlcy5SZXNGaWxlW10gPSAoYXdhaXQgdGhpcy5hY3Rpb25IYW5kbGVycy5MaXN0Q3VycmVudFBhdGhJdGVtcyhjdXJyZW50UGF0aCkpLnJlc3VsdDtcbiAgICAgIGN1cnJlbnRWaXNpYWJsZURvY3VtZW50cy5mb3JFYWNoKChpdGVtOiBDb3JlVHlwZXMuUmVzRmlsZSk9PntcbiAgICAgICAgY29uc29sZS5sb2coIGl0ZW0sICdpdGVtLnR5cGUnLCBpdGVtLnR5cGUpXG4gICAgICAgIGlmKGl0ZW0udHlwZT09PSdmaWxlJykge1xuICAgICAgICAgIGlmKHRoaXMuY2hlY2tTZWFyY2hLZXl3b3JkUmVsYXRpdmUoaXRlbS5uYW1lLCBrZXl3b3JkKSkge1xuICAgICAgICAgICAgdGhpcy5zZWFjaFJlc3VsdERvY3VtZW50cy5wdXNoKGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmKGl0ZW0udHlwZT09PSdkaXInKSB7XG4gICAgICAgICAgaWYodGhpcy5jaGVja1NlYXJjaEtleXdvcmRSZWxhdGl2ZShpdGVtLm5hbWUsIGtleXdvcmQpKSB7XG4gICAgICAgICAgICB0aGlzLnNlYWNoUmVzdWx0Rm9sZGVycy5wdXNoKGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLml0ZXJhdGVDdXJyZW50RG9jdW1lbnRBbmRGb2xkZXJzKGl0ZW0uZnVsbFBhdGgsIGtleXdvcmQsIGxldmVsKzEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjaGVja1NlYXJjaEtleXdvcmRSZWxhdGl2ZSh0YXJnZXROYW1lOiBzdHJpbmcsIGtleXdvcmQ6IHN0cmluZykge1xuICAgIHJldHVybiB0YXJnZXROYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoa2V5d29yZCk7XG4gIH1cblxuICBwdWJsaWMgaW5pdENsZWFuU2VhcmNoUmVzdWx0cygpIHtcbiAgICB0aGlzLmlzU2VhcmNoaW5nID0gZmFsc2U7XG4gICAgdGhpcy5zaG93U2VhcmNoaW5nU3Bpbm5lciA9IGZhbHNlO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSk9PntcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNlYWNoUmVzdWx0RG9jdW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuc2VhY2hSZXN1bHRGb2xkZXJzID0gW107XG4gICAgICAgIHRoaXMuZm9sZGVyc1Nob3cgPSA1O1xuICAgICAgICB0aGlzLmRvY3VtZW50c1Nob3cgPSA1O1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCAxMCk7XG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBvblNlbGVjdGVkU2VhcmNoSXRlbShpdGVtOiBDb3JlVHlwZXMuUmVzRmlsZSkge1xuICAgIC8vdGhpcy5pbml0Q2xlYW5TZWFyY2hSZXN1bHRzKCk7XG4gICAgaWYoaXRlbS50eXBlID09PSAnZmlsZScpIHtcbiAgICAgIGxldCBmaWxlUGFyZW50UGF0aCA9IGl0ZW0uZnVsbFBhdGguc3Vic3RyaW5nKDAsIGl0ZW0uZnVsbFBhdGgubGFzdEluZGV4T2YoJy8nKSk7XG4gICAgICB0aGlzLm9uRW50ZXJGb2xkZXIoZmlsZVBhcmVudFBhdGgpO1xuICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAnZGlyJykge1xuICAgICAgdGhpcy5vbkVudGVyRm9sZGVyKGl0ZW0uZnVsbFBhdGgpO1xuICAgIH1cbiAgfVxufVxuIl19
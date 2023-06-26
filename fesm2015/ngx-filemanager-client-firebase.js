import { Injectable, Component, Inject, ɵɵdefineInjectable, Input, EventEmitter, Output, Directive, forwardRef, NgModule, Pipe, ViewChild } from '@angular/core';
import { APP_BASE_HREF, CommonModule, PlatformLocation } from '@angular/common';
import { FormControl, FormGroup, Validators, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { __awaiter } from 'tslib';
import { map, takeUntil, tap, take, filter, auditTime, startWith, switchMap } from 'rxjs/operators';
import { Subject, BehaviorSubject, combineLatest, of, timer, Observable, from } from 'rxjs';
import path__default, { dirname, basename } from 'path-browserify';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { v4 } from 'uuid';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { initializeApp, storage, auth } from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SelectionModel } from '@angular/cdk/collections';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} platformLocation
 * @return {?}
 */
function getBaseHref(platformLocation) {
    return platformLocation.getBaseHrefFromDOM();
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class Logger {
}
function Logger_tsickle_Closure_declarations() {
    /** @type {?} */
    Logger.prototype.info;
    /** @type {?} */
    Logger.prototype.warn;
    /** @type {?} */
    Logger.prototype.error;
}
class LoggerService {
}
LoggerService.decorators = [
    { type: Injectable }
];
function LoggerService_tsickle_Closure_declarations() {
    /** @type {?} */
    LoggerService.prototype.info;
    /** @type {?} */
    LoggerService.prototype.warn;
    /** @type {?} */
    LoggerService.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
function RenameDialogInterface() { }
function RenameDialogInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    RenameDialogInterface.prototype.currentPath;
}
class AppDialogRenameComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.renamedItem = new FormControl();
        const /** @type {?} */ name = path__default.basename(data.currentPath);
        this.renamedItem.setValue(name);
    }
    /**
     * @return {?}
     */
    onSubmit() {
        const /** @type {?} */ renamedFullPath = this.newPath;
        this.dialogRef.close(renamedFullPath);
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.dialogRef.close();
    }
    /**
     * @return {?}
     */
    get newPath() {
        const /** @type {?} */ directoryPath = path__default.dirname(this.data.currentPath);
        const /** @type {?} */ newItemName = this.renamedItem.value;
        if (this.IsDir) {
            return path__default.join(directoryPath, newItemName, '/');
        }
        return path__default.join(directoryPath, newItemName);
    }
    /**
     * @return {?}
     */
    get IsDir() {
        return this.data.currentPath.endsWith('/');
    }
}
AppDialogRenameComponent.decorators = [
    {
        type: Component, args: [{
            template: `
    <base-dialog
      [header]="headerTemplate"
      [body]="bodyTemplate"
      [actions]="actionsTemplate"
    >
      <ng-template #headerTemplate>
        <h2>Rename Item</h2>
      </ng-template>
      <ng-template #bodyTemplate>
        <h5 class="p5 m0">Old Path: {{ data.currentPath }}</h5>
        <h5 class="p5 m0">New Path: {{ newPath }}</h5>

        <mat-form-field>
          <input
            matInput
            placeholder="New Name"
            [formControl]="renamedItem"
            (keyup.enter)="onSubmit()"
          />
        </mat-form-field>
      </ng-template>
      <ng-template #actionsTemplate>
        <btns-cancel-ok
          okIcon="done"
          okLabel="Rename Item"
          (clickedCancel)="onCancel()"
          (clickedOk)="onSubmit()"
        >
        </btns-cancel-ok>
      </ng-template>
    </base-dialog>
  `,
            styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
        }]
    }
];
/** @nocollapse */
AppDialogRenameComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
function AppDialogRenameComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppDialogRenameComponent.prototype.renamedItem;
    /** @type {?} */
    AppDialogRenameComponent.prototype.dialogRef;
    /** @type {?} */
    AppDialogRenameComponent.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} inputPath
 * @return {?}
 */
function HasPrefixSlash(inputPath) {
    if (!inputPath || !inputPath.length) {
        return false;
    }
    const /** @type {?} */ hasPrefix = inputPath.startsWith('/');
    return hasPrefix;
}
/**
 * @param {?} inputPath
 * @return {?}
 */
function TrimSlashes(inputPath) {
    return inputPath.replace(/^\/+|\/+$/g, '');
}
/**
 * @param {?} inputPath
 * @return {?}
 */
function HasTrailingSlash(inputPath) {
    if (!inputPath || !inputPath.length) {
        return false;
    }
    const /** @type {?} */ hasPrefix = inputPath.endsWith('/');
    return hasPrefix;
}
/**
 * @param {?} inputPath
 * @return {?}
 */
function EnsurePrefixSlash(inputPath) {
    const /** @type {?} */ hasPrefix = HasPrefixSlash(inputPath);
    const /** @type {?} */ pathParsed = hasPrefix ? inputPath : '/' + inputPath;
    return pathParsed;
}
/**
 * @param {?} inputPath
 * @return {?}
 */
function EnsureTrailingSlash(inputPath) {
    const /** @type {?} */ hasTrailing = HasTrailingSlash(inputPath);
    const /** @type {?} */ pathParsed = hasTrailing ? inputPath : inputPath + '/';
    return pathParsed;
}
/**
 * @param {?} inputPath
 * @return {?}
 */
function EnsureAbsoluteDirectory(inputPath) {
    const /** @type {?} */ pathParsed = EnsureTrailingSlash(EnsurePrefixSlash(inputPath));
    return pathParsed;
}
/**
 * @param {?} inputPath
 * @return {?}
 */
function EnsureNoTrailingSlash(inputPath) {
    const /** @type {?} */ hasTrailing = HasTrailingSlash(inputPath);
    const /** @type {?} */ pathParsed = hasTrailing ? inputPath.slice(0, -1) : inputPath;
    return pathParsed;
}
/**
 * @param {?} inputPath
 * @return {?}
 */
function Add2ToPath(inputPath) {
    const /** @type {?} */ dotSegments = inputPath.split('.');
    const /** @type {?} */ extension = dotSegments.pop();
    const /** @type {?} */ fileName = dotSegments.join('.') + ' (2)' + '.' + extension;
    return fileName;
}
/**
 * @param {?} inputPath
 * @return {?}
 */
function Add2ToPathDir(inputPath) {
    const /** @type {?} */ pathWithoutSlash = EnsureNoTrailingSlash(inputPath);
    const /** @type {?} */ pathWith2 = pathWithoutSlash + ' (2)';
    const /** @type {?} */ newDirName = EnsureTrailingSlash(pathWith2);
    return newDirName;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
function CopyDialogInterface() { }
function CopyDialogInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    CopyDialogInterface.prototype.files;
    /** @type {?} */
    CopyDialogInterface.prototype.isCopy;
    /** @type {?} */
    CopyDialogInterface.prototype.actionHandler;
}
class AppDialogCopyComponent {
    /**
     * @param {?} logger
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(logger, dialogRef, data) {
        this.logger = logger;
        this.dialogRef = dialogRef;
        this.data = data;
        this.destroyed = new Subject();
        this.$copyPathChanged = new BehaviorSubject(null);
        this.init().catch(e => console.error(e));
    }
    /**
     * @return {?}
     */
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info('initializing dialog:', { data: this.data });
            this.items = this.data.files;
            if (this.data.isCopy) {
                this.OkLabel = 'Copy';
                this.OkIcon = 'content_copy';
            }
            else {
                this.OkLabel = 'Move';
                this.OkIcon = 'forward';
            }
            this.actionHandlers = yield this.data.actionHandler.CloneProvider();
            this.mainActions = [
                {
                    label: 'Home',
                    icon: 'home',
                    onClick: () => __awaiter(this, void 0, void 0, function* () {
                        this.logger.info('Back clicked');
                        const /** @type {?} */ rootPath = this.actionHandlers.GetRootPath();
                        yield this.actionHandlers.OnNavigateTo(rootPath);
                        this.onSelectedDirectory(rootPath);
                        return this.onSelectedDirectory(rootPath);
                    }),
                    $disabled: combineLatest([
                        this.actionHandlers.$CurrentPathIsRoot,
                        this.$copyPathChanged
                    ]).pipe(map(([isRoot, copyTo]) => {
                        return this.DisableCopy;
                    }))
                },
                {
                    label: 'Back',
                    icon: 'reply',
                    onClick: () => __awaiter(this, void 0, void 0, function* () {
                        this.logger.info('Back clicked');
                        yield this.actionHandlers.OnNavigateToParent();
                        const /** @type {?} */ selectedDirectory = yield this.actionHandlers.GetCurrentPath();
                        return this.onSelectedDirectory(selectedDirectory);
                    }),
                    $disabled: this.actionHandlers.$CurrentPathIsRoot
                },
                {
                    label: 'New Folder',
                    icon: 'create_new_folder',
                    onClick: () => __awaiter(this, void 0, void 0, function* () { return this.actionHandlers.OnNewFolderInCurrentDirectory(); })
                }
            ];
            this.actionHandlers.$FilesWithIcons
                .pipe(takeUntil(this.destroyed))
                .subscribe(fileItems => {
                    this.folders = fileItems.filter(f => f.type === 'dir');
                });
            const /** @type {?} */ firstFile = [...this.items].pop();
            this.setSrcDirectory(firstFile.fullPath);
            this.setCopyToPath(this.actionHandlers.GetRootPath());
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
    get SelectedFolder() {
        return !!this.copyToPath;
    }
    /**
     * @return {?}
     */
    get SameAsSrcFolder() {
        return this.copyToPath === this.srcDirectory;
    }
    /**
     * @return {?}
     */
    get DisableCopy() {
        return !this.SelectedFolder || this.SameAsSrcFolder;
    }
    /**
     * @param {?} inputPath
     * @return {?}
     */
    setCopyToPath(inputPath) {
        const /** @type {?} */ dirPath = EnsureTrailingSlash(inputPath);
        this.copyToPath = dirPath;
        this.$copyPathChanged.next(dirPath);
        this.copyToPathRelative = this.actionHandlers.ConvertToRelativePath(dirPath);
        this.logger.info('setCopyToPath:', {
            inputPath,
            copyToPath: this.copyToPath,
            copyToPathRelative: this.copyToPathRelative
        });
    }
    /**
     * @param {?} inputPath
     * @return {?}
     */
    setSrcDirectory(inputPath) {
        const /** @type {?} */ dirPath = EnsureTrailingSlash(path__default.dirname(inputPath));
        this.srcDirectory = dirPath;
        this.logger.info('setSrcDirectory:', {
            inputPath,
            srcDirectory: this.srcDirectory
        });
    }
    /**
     * @param {?} directoryPath
     * @return {?}
     */
    onEnterDirectory(directoryPath) {
        this.logger.info('onEnterDirectory:', { directoryPath });
        this.setCopyToPath(directoryPath);
        return this.actionHandlers.OnNavigateTo(directoryPath);
    }
    /**
     * @param {?} directoryPath
     * @return {?}
     */
    onSelectedDirectory(directoryPath) {
        this.logger.info('onSelectedDirectory:', { directoryPath });
        this.setCopyToPath(directoryPath);
    }
    /**
     * @return {?}
     */
    onSubmit() {
        this.dialogRef.close(this.copyToPath);
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.dialogRef.close();
    }
}
AppDialogCopyComponent.decorators = [
    {
        type: Component, args: [{
            template: `
    <base-dialog
      *ngIf="srcDirectory"
      [header]="headerTemplate"
      [body]="bodyTemplate"
      [actions]="actionsTemplate"
    >
      <ng-template #headerTemplate>
        <h2>{{ OkLabel }} Items</h2>
      </ng-template>
      <ng-template #bodyTemplate>
        <h5 class="my-5">Selected Items</h5>
        <mat-chip-list class="mb-5">
          <mat-chip *ngFor="let file of items">
            <mat-icon *ngIf="file.type === 'file'">description</mat-icon>
            <mat-icon *ngIf="file.type !== 'file'">folder</mat-icon>
            {{ file.name }}
          </mat-chip>
        </mat-chip-list>
        <h5 class="my-5">Navigate to destination folder</h5>
        <div class="full-width">
          <mat-card class="m-10 bg-grey">
            <app-file-table-mini-folder-browser
              [folders]="folders"
              [mainActions]="mainActions"
              (enterDirectory)="onEnterDirectory($event)"
              (selectedDirectory)="onSelectedDirectory($event)"
            >
            </app-file-table-mini-folder-browser>
          </mat-card>
        </div>
      </ng-template>
      <ng-template #actionsTemplate>
        <h5 class="p5 m0" *ngIf="!SelectedFolder">No folder selected</h5>
        <h5 class="p5 m0" *ngIf="SameAsSrcFolder">
          Cannot copy to the same folder
        </h5>
        <h5 class="p5 m0" *ngIf="!DisableCopy">
          Will copy Selected Items to:
          <strong *ngIf="!copyToPathRelative">/</strong>
          <strong>{{ copyToPathRelative }}</strong>
        </h5>
        <btns-cancel-ok
          [okIcon]="OkIcon"
          [okLabel]="OkLabel"
          [okDisabled]="DisableCopy"
          (clickedCancel)="onCancel()"
          (clickedOk)="onSubmit()"
        >
        </btns-cancel-ok>
      </ng-template>
    </base-dialog>
  `,
            styles: [`
      .bg-grey {
        background-color: #eee;
      }
    `, "h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
        }]
    }
];
/** @nocollapse */
AppDialogCopyComponent.ctorParameters = () => [
    { type: LoggerService },
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
function AppDialogCopyComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppDialogCopyComponent.prototype.copyToPathRelative;
    /** @type {?} */
    AppDialogCopyComponent.prototype.copyToPath;
    /** @type {?} */
    AppDialogCopyComponent.prototype.srcDirectory;
    /** @type {?} */
    AppDialogCopyComponent.prototype.items;
    /** @type {?} */
    AppDialogCopyComponent.prototype.actionHandlers;
    /** @type {?} */
    AppDialogCopyComponent.prototype.mainActions;
    /** @type {?} */
    AppDialogCopyComponent.prototype.folders;
    /** @type {?} */
    AppDialogCopyComponent.prototype.OkLabel;
    /** @type {?} */
    AppDialogCopyComponent.prototype.OkIcon;
    /** @type {?} */
    AppDialogCopyComponent.prototype.destroyed;
    /** @type {?} */
    AppDialogCopyComponent.prototype.$copyPathChanged;
    /** @type {?} */
    AppDialogCopyComponent.prototype.logger;
    /** @type {?} */
    AppDialogCopyComponent.prototype.dialogRef;
    /** @type {?} */
    AppDialogCopyComponent.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
function PermissionsObjectDialogInterface() { }
function PermissionsObjectDialogInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    PermissionsObjectDialogInterface.prototype.files;
    /** @type {?} */
    PermissionsObjectDialogInterface.prototype.config;
}
/**
 * @record
 */
function PermissionsObjectDialogResponseInterface() { }
function PermissionsObjectDialogResponseInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    PermissionsObjectDialogResponseInterface.prototype.permissionsObj;
    /** @type {?} */
    PermissionsObjectDialogResponseInterface.prototype.files;
}
class AppDialogPermissionsSetObjectComponent {
    /**
     * @param {?} logger
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(logger, dialogRef, data) {
        this.logger = logger;
        this.dialogRef = dialogRef;
        this.data = data;
        this.othersControl = new FormControl();
        this.othersOptions = [
            'read/write',
            'read',
            'hidden',
        ];
        this.allReadersControl = new FormControl([]);
        this.allWritersControl = new FormControl([]);
        this.destroyed = new Subject();
        this.logger.info('Initializing setobject dialog', { data });
        this.items = data.files;
        this.config = data.config;
        const /** @type {?} */ users$ = this.config.users;
        const /** @type {?} */ groups$ = this.config.groups;
        this.$allEntities = combineLatest([groups$, users$]).pipe(tap((allEntities) => this.logger.info('allEntities', { allEntities })), map((arr) => {
            let /** @type {?} */ tempEntities = [
                {
                    uid: '',
                    name: 'Groups: ',
                    isDisabled: true,
                },
            ];
            tempEntities = tempEntities.concat(arr[0]);
            tempEntities.push({
                uid: '',
                name: 'Users: ',
                isDisabled: true,
            });
            return tempEntities.concat(arr[1]);
        }), map((arr) => arr.map((n) => ({
            id: n.uid,
            name: n.name,
            isDisabled: !!n.isDisabled,
        }))));
        this.$allEntities.subscribe((allEntities) => this.logger.info('allEntities', { allEntities }));
        this.initPermissions(data.files);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed.next();
    }
    /**
     * @param {?} files
     * @return {?}
     */
    initPermissions(files) {
        const /** @type {?} */ allPermissions = files.map((f) => f.permissions);
        const /** @type {?} */ othersVal = allPermissions
            .map((p) => p.others)
            .reduce((acc, curr) => {
                if (acc === '-') {
                    return curr;
                }
                const /** @type {?} */ stillSame = acc === curr;
                if (stillSame) {
                    return acc;
                }
                return null;
            }, '-');
        if (othersVal) {
            this.othersControl.setValue(othersVal);
        }
        const /** @type {?} */ uniqueWriters = this.getUniqueTags(allPermissions.map((p) => p.writers));
        this.allWritersControl.setValue(uniqueWriters);
        const /** @type {?} */ uniqueReaders = this.getUniqueTags(allPermissions.map((p) => p.readers));
        this.allReadersControl.setValue(uniqueReaders);
        this.logger.info('set permissions', {
            othersVal,
            uniqueWriters,
            uniqueReaders,
        });
    }
    /**
     * @param {?} inputEntities
     * @return {?}
     */
    getUniqueTags(inputEntities) {
        const /** @type {?} */ allInputEntities = inputEntities.reduce((acc, curr) => {
            return acc.concat(curr);
        }, []);
        const /** @type {?} */ allEntitiesUnique = Array.from(new Set(allInputEntities));
        return this.strings2Tags(allEntitiesUnique);
    }
    /**
     * @param {?} inputArr
     * @return {?}
     */
    strings2Tags(inputArr) {
        return inputArr.map((val) => ({
            id: v4(),
            name: val,
        }));
    }
    /**
     * @param {?} inputArr
     * @return {?}
     */
    tags2Strings(inputArr) {
        return inputArr.map((val) => val.name);
    }
    /**
     * @return {?}
     */
    onSubmit() {
        const /** @type {?} */ newPermissionsObj = {
            others: this.othersControl.value,
            readers: this.tags2Strings(this.allReadersControl.value),
            writers: this.tags2Strings(this.allWritersControl.value),
        };
        const /** @type {?} */ response = {
            permissionsObj: newPermissionsObj,
            files: this.data.files,
        };
        this.logger.info('onSubmit', { newPermissionsObj, response });
        this.dialogRef.close(response);
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.dialogRef.close();
    }
}
AppDialogPermissionsSetObjectComponent.decorators = [
    {
        type: Component, args: [{
            template: `
    <base-dialog
      [header]="headerTemplate"
      [body]="bodyTemplate"
      [actions]="actionsTemplate"
    >
      <ng-template #headerTemplate>
        <h2>Set Permissions</h2>
      </ng-template>
      <ng-template #bodyTemplate>
        <h5 class="my-5">Selected Items</h5>
        <mat-chip-list class="mb-5">
          <mat-chip *ngFor="let file of items">
            <mat-icon *ngIf="file.type === 'file'">description</mat-icon>
            <mat-icon *ngIf="file.type !== 'file'">folder</mat-icon>
            {{ file.name }}
          </mat-chip>
        </mat-chip-list>

        <div class="full-width">
          <h5 class="my-5">Who can see this</h5>
          <app-control-tag-multiple
            class="full-width -mt-15"
            [control]="allReadersControl"
            [selectChoices$]="$allEntities"
            [allowCustom]="false"
          >
          </app-control-tag-multiple>
        </div>

        <div *ngIf="config?.showWriters">
          <h5 class="my-5">Who can edit this</h5>
          <app-control-tag-multiple
            class="full-width -mt-15"
            [control]="allWritersControl"
            [selectChoices$]="$allEntities"
            [allowCustom]="false"
          >
          </app-control-tag-multiple>
        </div>

        <div *ngIf="config?.showOthers">
          <h5 class="my-5">Everyone else can</h5>
          <mat-form-field class="full-width">
            <mat-select matInput [formControl]="othersControl">
              <mat-option
                *ngFor="let permission of othersOptions"
                [value]="permission"
              >
                {{ permission }}
              </mat-option>
            </mat-select>
          </mat-form-field>
        </div>
      </ng-template>

      <ng-template #actionsTemplate>
        <btns-cancel-ok
          okIcon="done"
          okLabel="Set Permissions"
          (clickedCancel)="onCancel()"
          (clickedOk)="onSubmit()"
        >
        </btns-cancel-ok>
      </ng-template>
    </base-dialog>
  `,
            styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}", `
      .my-5 {
        margin: 5px 0;
      }
      .mb-5 {
        margin-bottom: 5px;
      }
      .-mt-15 {
        margin-top: -15px;
      }
    `]
        }]
    }
];
/** @nocollapse */
AppDialogPermissionsSetObjectComponent.ctorParameters = () => [
    { type: LoggerService },
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
function AppDialogPermissionsSetObjectComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppDialogPermissionsSetObjectComponent.prototype.items;
    /** @type {?} */
    AppDialogPermissionsSetObjectComponent.prototype.othersControl;
    /** @type {?} */
    AppDialogPermissionsSetObjectComponent.prototype.othersOptions;
    /** @type {?} */
    AppDialogPermissionsSetObjectComponent.prototype.allReadersControl;
    /** @type {?} */
    AppDialogPermissionsSetObjectComponent.prototype.allWritersControl;
    /** @type {?} */
    AppDialogPermissionsSetObjectComponent.prototype.$allEntities;
    /** @type {?} */
    AppDialogPermissionsSetObjectComponent.prototype.destroyed;
    /** @type {?} */
    AppDialogPermissionsSetObjectComponent.prototype.config;
    /** @type {?} */
    AppDialogPermissionsSetObjectComponent.prototype.logger;
    /** @type {?} */
    AppDialogPermissionsSetObjectComponent.prototype.dialogRef;
    /** @type {?} */
    AppDialogPermissionsSetObjectComponent.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NotificationService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
function UploadDialogInterface() { }
function UploadDialogInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    UploadDialogInterface.prototype.currentDirectory;
    /** @type {?} */
    UploadDialogInterface.prototype.firebaseConfig;
    /** @type {?} */
    UploadDialogInterface.prototype.bucketName;
}
/**
 * @record
 */
function UploadDialogResponseInterface() { }
function UploadDialogResponseInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    UploadDialogResponseInterface.prototype.uploaded;
}
class AppDialogUploadFilesComponent {
    /**
     * @param {?} logger
     * @param {?} notifications
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(logger, notifications, dialogRef, data) {
        this.logger = logger;
        this.notifications = notifications;
        this.dialogRef = dialogRef;
        this.data = data;
        this.filesControl = new FormControl([]);
        this.currentDirectory = '';
        this.isUploading = new BehaviorSubject(true);
        this.config = {
            directory: data.currentDirectory,
            bucketname: data.bucketName,
            firebaseConfig: data.firebaseConfig
        };
        this.logger.info('initializing:', {
            currentDirectory: this.currentDirectory,
            config: this.config,
            data: data
        });
    }
    /**
     * @return {?}
     */
    onSubmit() {
        const /** @type {?} */ files = this.filesControl.value;
        const /** @type {?} */ response = {
            uploaded: files.map(f => f.value.name)
        };
        this.dialogRef.close(response);
    }
    /**
     * @return {?}
     */
    onCancel() {
        const /** @type {?} */ response = {
            uploaded: []
        };
        this.dialogRef.close(response);
    }
}
AppDialogUploadFilesComponent.decorators = [
    {
        type: Component, args: [{
            template: `
    <base-dialog
      [header]="headerTemplate"
      [body]="bodyTemplate"
      [actions]="actionsTemplate"
    >
      <ng-template #headerTemplate>
        <h2>Upload Files</h2>
        <h5>To Folder: {{ currentDirectory }}</h5>
      </ng-template>
      <ng-template #bodyTemplate>
        <div style="width: 100%;">
          <form-file-firebase
            [formControl]="filesControl"
            [config]="config"
            (uploadStatusChanged)="isUploading.next($event)"
          >
          </form-file-firebase>
        </div>
      </ng-template>
      <ng-template #actionsTemplate>
        <btns-cancel-ok
          okIcon="done"
          okLabel="Finish"
          (clickedCancel)="onCancel()"
          (clickedOk)="onSubmit()"
          [okDisabled]="isUploading | async"
        >
        </btns-cancel-ok>
      </ng-template>
    </base-dialog>
    <div #hidden></div>
  `,
            styles: [`
      .dz-image {
        display: none;
      }
      .dz-details > img {
        display: none;
      }
    `, "h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
        }]
    }
];
/** @nocollapse */
AppDialogUploadFilesComponent.ctorParameters = () => [
    { type: LoggerService },
    { type: NotificationService },
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
function AppDialogUploadFilesComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppDialogUploadFilesComponent.prototype.filesControl;
    /** @type {?} */
    AppDialogUploadFilesComponent.prototype.currentDirectory;
    /** @type {?} */
    AppDialogUploadFilesComponent.prototype.config;
    /** @type {?} */
    AppDialogUploadFilesComponent.prototype.isUploading;
    /** @type {?} */
    AppDialogUploadFilesComponent.prototype.logger;
    /** @type {?} */
    AppDialogUploadFilesComponent.prototype.notifications;
    /** @type {?} */
    AppDialogUploadFilesComponent.prototype.dialogRef;
    /** @type {?} */
    AppDialogUploadFilesComponent.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AppDialogNewFolderComponent {
    /**
     * @param {?} dialogRef
     */
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.folderName = new FormControl('New folder');
    }
    /**
     * @return {?}
     */
    onSubmit() {
        this.dialogRef.close(this.folderName.value);
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.dialogRef.close();
    }
}
AppDialogNewFolderComponent.decorators = [
    {
        type: Component, args: [{
            template: `
    <base-dialog
      [header]="headerTemplate"
      [body]="bodyTemplate"
      [actions]="actionsTemplate"
    >
      <ng-template #headerTemplate>
        <h2>Create Folder</h2>
      </ng-template>
      <ng-template #bodyTemplate>
        <div>
          <mat-form-field>
            <input
              matInput
              placeholder="New Folder Name"
              [formControl]="folderName"
              (keyup.enter)="onSubmit()"
            />
          </mat-form-field>
        </div>
      </ng-template>
      <ng-template #actionsTemplate>
        <btns-cancel-ok
          okIcon="done"
          okLabel="Create Folder"
          (clickedCancel)="onCancel()"
          (clickedOk)="onSubmit()"
        >
        </btns-cancel-ok>
      </ng-template>
    </base-dialog>
  `,
            styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
        }]
    }
];
/** @nocollapse */
AppDialogNewFolderComponent.ctorParameters = () => [
    { type: MatDialogRef }
];
function AppDialogNewFolderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppDialogNewFolderComponent.prototype.folderName;
    /** @type {?} */
    AppDialogNewFolderComponent.prototype.dialogRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ConsoleLoggerService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ClientCache {
    constructor() {
        this.logger = new ConsoleLoggerService();
        this.cachedFolders = {};
        this.cacheLimit = 20;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    GetCached(input) {
        const /** @type {?} */ directoryPath = EnsureTrailingSlash(input);
        return this.cachedFolders[directoryPath] || [];
    }
    /**
     * @param {?} input
     * @param {?} newFolderFiles
     * @return {?}
     */
    SetCached(input, newFolderFiles) {
        const /** @type {?} */ directoryPath = EnsureTrailingSlash(input);
        const /** @type {?} */ oldFolders = this.GetCached(directoryPath);
        this.logger.info('SetCached()', {
            from: oldFolders.length,
            to: newFolderFiles.length
        });
        if (this.cachedCount > this.cacheLimit) {
            this.removeRandomFolderPath();
        }
        this.cachedFolders[directoryPath] = newFolderFiles;
    }
    /**
     * @return {?}
     */
    get cachedCount() {
        return Object.keys(this.cachedFolders).length;
    }
    /**
     * @return {?}
     */
    removeRandomFolderPath() {
        const /** @type {?} */ randomIndex = Math.floor(Math.random() * this.cachedCount);
        const /** @type {?} */ randomKey = Object.keys(this.cachedFolders)[randomIndex];
        delete this.cachedFolders[randomKey];
    }
}
function ClientCache_tsickle_Closure_declarations() {
    /** @type {?} */
    ClientCache.prototype.logger;
    /** @type {?} */
    ClientCache.prototype.cachedFolders;
    /** @type {?} */
    ClientCache.prototype.cacheLimit;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ClientFileSystemDataStore {
    constructor() {
        this.cache = new ClientCache();
        this._$currentFiles = new BehaviorSubject([]);
        this._$currentPath = new BehaviorSubject(null);
        this._$selectedFile = new BehaviorSubject(null);
        this.logger = new ConsoleLoggerService();
    }
    /**
     * @param {?} cache
     * @return {?}
     */
    SetCache(cache) {
        this.cache = cache;
    }
    /**
     * @return {?}
     */
    get $currentFiles() {
        return this._$currentFiles;
    }
    /**
     * @return {?}
     */
    get $currentPath() {
        return this._$currentPath;
    }
    /**
     * @return {?}
     */
    get $selectedFile() {
        return this._$selectedFile;
    }
    /**
     * @return {?}
     */
    CurrentPath() {
        return this._$currentPath.value;
    }
    /**
     * @return {?}
     */
    CurrentFiles() {
        return this._$currentFiles.value;
    }
    /**
     * @param {?} directoryPath
     * @return {?}
     */
    GetCached(directoryPath) {
        return this.cache.GetCached(directoryPath);
    }
    /**
     * @param {?} files
     * @param {?} directoryPath
     * @return {?}
     */
    SetDirectoryFiles(files, directoryPath) {
        this.cache.SetCached(directoryPath, files);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    SetPath(path) {
        const /** @type {?} */ pathParsed = EnsurePrefixSlash(path);
        this.logger.info('datastore.SetPath', { path, pathParsed });
        const /** @type {?} */ cachedFiles = this.cache.GetCached(pathParsed);
        this._$currentPath.next(pathParsed);
        this._$currentFiles.next(cachedFiles);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    SelectFile(item) {
        this._$selectedFile.next(item);
    }
    /**
     * @param {?} fullPath
     * @param {?} cwd
     * @return {?}
     */
    exists(fullPath, cwd) {
        const /** @type {?} */ filesInDir = this.cache.GetCached(cwd);
        const /** @type {?} */ exists = filesInDir.find(f => f.fullPath === fullPath);
        return !!exists;
    }
    /**
     * @return {?}
     */
    CloneStore() {
        const /** @type {?} */ newStore = new ClientFileSystemDataStore();
        newStore.SetPath(this.CurrentPath());
        newStore.SetDirectoryFiles(this._$currentFiles.getValue(), this.CurrentPath());
        newStore.SetCache(this.cache);
        return newStore;
    }
}
function ClientFileSystemDataStore_tsickle_Closure_declarations() {
    /** @type {?} */
    ClientFileSystemDataStore.prototype.cache;
    /** @type {?} */
    ClientFileSystemDataStore.prototype._$currentFiles;
    /** @type {?} */
    ClientFileSystemDataStore.prototype._$currentPath;
    /** @type {?} */
    ClientFileSystemDataStore.prototype._$selectedFile;
    /** @type {?} */
    ClientFileSystemDataStore.prototype.logger;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
function FileIcon() { }
function FileIcon_tsickle_Closure_declarations() {
    /**
     * Name of the icon, e.g. 'javascript'
     * @type {?}
     */
    FileIcon.prototype.name;
    /**
     * Define the file extensions that should use this icon.
     * E.g. ['js']
     * @type {?|undefined}
     */
    FileIcon.prototype.fileExtensions;
    /**
     * Define if there are some static file names that should apply this icon.
     * E.g. ['sample.js']
     * @type {?|undefined}
     */
    FileIcon.prototype.fileNames;
    /**
     * Define if there is a light icon available.
     * @type {?|undefined}
     */
    FileIcon.prototype.light;
    /**
     * Define if there is a high contrast icon available.
     * @type {?|undefined}
     */
    FileIcon.prototype.highContrast;
    /**
     * Define if the icon should be disabled.
     * @type {?|undefined}
     */
    FileIcon.prototype.disabled;
}
/**
 * @record
 */
function FolderTheme() { }
function FolderTheme_tsickle_Closure_declarations() {
    /**
     * Name of the theme
     * @type {?}
     */
    FolderTheme.prototype.name;
    /**
     * Define the default icon for folders in a theme.
     * @type {?}
     */
    FolderTheme.prototype.defaultIcon;
    /**
     * Icon for root folders.
     * @type {?|undefined}
     */
    FolderTheme.prototype.rootFolder;
    /**
     * Defines folder icons for specific folder names.
     * @type {?|undefined}
     */
    FolderTheme.prototype.icons;
}
/**
 * @record
 */
function FolderIcon() { }
function FolderIcon_tsickle_Closure_declarations() {
    /**
     * Name of the icon, e.g. 'src'
     * @type {?}
     */
    FolderIcon.prototype.name;
    /**
     * Define the folder names that should apply the icon.
     * E.g. ['src', 'source']
     * @type {?}
     */
    FolderIcon.prototype.folderNames;
    /**
     * Define if there is a light icon available.
     * @type {?|undefined}
     */
    FolderIcon.prototype.light;
    /**
     * Define if there is a high contrast icon available.
     * @type {?|undefined}
     */
    FolderIcon.prototype.highContrast;
    /**
     * Define if the icon should be disabled.
     * @type {?|undefined}
     */
    FolderIcon.prototype.disabled;
}
/**
 * @record
 */
function DefaultIcon() { }
function DefaultIcon_tsickle_Closure_declarations() {
    /**
     * Name of the icon, e.g. 'src'
     * @type {?}
     */
    DefaultIcon.prototype.name;
    /**
     * Define if there is a light icon available.
     * @type {?|undefined}
     */
    DefaultIcon.prototype.light;
    /**
     * Define if there is a high contrast icon available.
     * @type {?|undefined}
     */
    DefaultIcon.prototype.highContrast;
}
class FileIcons {
}
function FileIcons_tsickle_Closure_declarations() {
    /**
     * Define the default icon for files.
     * @type {?}
     */
    FileIcons.prototype.defaultIcon;
    /**
     * Defines all folder icons.
     * @type {?}
     */
    FileIcons.prototype.icons;
}
const /** @type {?} */ fileIcons = {
    defaultIcon: { name: 'file' },
    icons: [
        { name: 'word', fileExtensions: ['doc', 'docx', 'rtf'] },
        { name: 'pdf', fileExtensions: ['pdf'] },
        { name: 'table', fileExtensions: ['xlsx', 'xls', 'csv', 'tsv'] },
        {
            name: 'html',
            fileExtensions: ['html', 'htm', 'xhtml', 'html_vm', 'asp']
        },
        {
            name: 'markdown',
            fileExtensions: ['md', 'markdown', 'rst']
        },
        { name: 'yaml', fileExtensions: ['yaml', 'YAML-tmLanguage', 'yml'] },
        {
            name: 'xml',
            fileExtensions: [
                'xml',
                'plist',
                'xsd',
                'dtd',
                'xsl',
                'xslt',
                'resx',
                'iml',
                'xquery',
                'tmLanguage',
                'manifest',
                'project'
            ],
            fileNames: ['.htaccess']
        },
        {
            name: 'image',
            fileExtensions: [
                'png',
                'jpeg',
                'jpg',
                'gif',
                'svg',
                'ico',
                'tif',
                'tiff',
                'psd',
                'psb',
                'ami',
                'apx',
                'bmp',
                'bpg',
                'brk',
                'cur',
                'dds',
                'dng',
                'exr',
                'fpx',
                'gbr',
                'img',
                'jbig2',
                'jb2',
                'jng',
                'jxr',
                'pbm',
                'pgf',
                'pic',
                'raw',
                'webp',
                'eps'
            ]
        },
        { name: 'tex', fileExtensions: ['tex', 'cls', 'sty'] },
        {
            name: 'powerpoint',
            fileExtensions: [
                'pptx',
                'ppt',
                'pptm',
                'potx',
                'potm',
                'ppsx',
                'ppsm',
                'pps',
                'ppam',
                'ppa'
            ]
        },
        {
            name: 'video',
            fileExtensions: [
                'webm',
                'mkv',
                'flv',
                'vob',
                'ogv',
                'ogg',
                'gifv',
                'avi',
                'mov',
                'qt',
                'wmv',
                'yuv',
                'rm',
                'rmvb',
                'mp4',
                'm4v',
                'mpg',
                'mp2',
                'mpeg',
                'mpe',
                'mpv',
                'm2v'
            ]
        },
        { name: 'audio', fileExtensions: ['mp3', 'flac', 'm4a', 'wma', 'aiff'] },
        { name: 'document', fileExtensions: ['txt'] }
    ]
};
const /** @type {?} */ folderIcons = [
    {
        name: 'specific',
        defaultIcon: { name: 'folder-aws' },
        rootFolder: { name: 'folder-root' },
        icons: [
            { name: 'folder-src', folderNames: ['src', 'source', 'sources'] },
            { name: 'folder-dist', folderNames: ['dist', 'out', 'build', 'release'] },
            {
                name: 'folder-css',
                folderNames: ['css', 'stylesheet', 'stylesheets', 'style', 'styles']
            },
            { name: 'folder-sass', folderNames: ['sass', '_sass', 'scss', '_scss'] },
            {
                name: 'folder-images',
                folderNames: [
                    'images',
                    'image',
                    'img',
                    'icons',
                    'icon',
                    'ico',
                    'screenshot',
                    'screenshots'
                ]
            },
            { name: 'folder-scripts', folderNames: ['script', 'scripts'] },
            { name: 'folder-node', folderNames: ['node_modules'] },
            {
                name: 'folder-javascript',
                folderNames: ['js', 'javascript', 'javascripts']
            },
            { name: 'folder-font', folderNames: ['font', 'fonts'] },
            { name: 'folder-bower', folderNames: ['bower_components'] },
            {
                name: 'folder-test',
                folderNames: [
                    'test',
                    'tests',
                    'testing',
                    '__tests__',
                    '__snapshots__',
                    '__mocks__',
                    '__test__',
                    'spec',
                    'specs'
                ]
            },
            {
                name: 'folder-jinja',
                folderNames: ['jinja', 'jinja2', 'j2'],
                light: true
            },
            { name: 'folder-markdown', folderNames: ['markdown', 'md'] },
            { name: 'folder-php', folderNames: ['php'] },
            { name: 'folder-phpmailer', folderNames: ['phpmailer'] },
            { name: 'folder-sublime', folderNames: ['sublime'] },
            {
                name: 'folder-docs',
                folderNames: ['doc', 'docs', 'documents', 'documentation']
            },
            {
                name: 'folder-git',
                folderNames: ['.git', 'submodules', '.submodules']
            },
            { name: 'folder-github', folderNames: ['.github'] },
            { name: 'folder-gitlab', folderNames: ['.gitlab'] },
            { name: 'folder-vscode', folderNames: ['.vscode', '.vscode-test'] },
            {
                name: 'folder-views',
                folderNames: [
                    'view',
                    'views',
                    'screen',
                    'screens',
                    'page',
                    'pages',
                    'html'
                ]
            },
            { name: 'folder-vue', folderNames: ['vue'] },
            { name: 'folder-expo', folderNames: ['.expo'] },
            {
                name: 'folder-config',
                folderNames: [
                    'config',
                    'configs',
                    'configuration',
                    'configurations',
                    'settings',
                    'META-INF'
                ]
            },
            {
                name: 'folder-i18n',
                folderNames: [
                    'i18n',
                    'internationalization',
                    'lang',
                    'language',
                    'languages',
                    'locale',
                    'locales',
                    'localization',
                    'translation',
                    'translations'
                ]
            },
            { name: 'folder-components', folderNames: ['components'] },
            { name: 'folder-aurelia', folderNames: ['aurelia_project'] },
            {
                name: 'folder-resource',
                folderNames: [
                    'resource',
                    'resources',
                    'res',
                    'asset',
                    'assets',
                    'static'
                ]
            },
            {
                name: 'folder-lib',
                folderNames: ['lib', 'libs', 'library', 'libraries']
            },
            {
                name: 'folder-theme',
                folderNames: ['themes', 'theme', 'color', 'colors', 'design', 'designs']
            },
            { name: 'folder-webpack', folderNames: ['webpack'] },
            { name: 'folder-global', folderNames: ['global'] },
            { name: 'folder-public', folderNames: ['public', 'wwwroot'] },
            {
                name: 'folder-include',
                folderNames: ['include', 'includes', '_includes']
            },
            { name: 'folder-docker', folderNames: ['docker', '.docker'] },
            { name: 'folder-ngrx-effects', folderNames: ['effects'] },
            { name: 'folder-ngrx-state', folderNames: ['states', 'state'] },
            { name: 'folder-ngrx-reducer', folderNames: ['reducers', 'reducer'] },
            { name: 'folder-ngrx-actions', folderNames: ['actions'] },
            { name: 'folder-ngrx-entities', folderNames: ['entities'] },
            { name: 'folder-redux-reducer', folderNames: ['reducers', 'reducer'] },
            { name: 'folder-redux-actions', folderNames: ['actions'] },
            { name: 'folder-redux-store', folderNames: ['store'] },
            { name: 'folder-react-components', folderNames: ['components'] },
            {
                name: 'folder-database',
                folderNames: ['db', 'database', 'sql', 'data', '_data']
            },
            { name: 'folder-log', folderNames: ['log', 'logs'] },
            {
                name: 'folder-temp',
                folderNames: [
                    'temp',
                    '.temp',
                    'tmp',
                    '.tmp',
                    'cached',
                    'cache',
                    '.cache'
                ]
            },
            { name: 'folder-aws', folderNames: ['aws', '.aws'] },
            { name: 'folder-audio', folderNames: ['audio', 'audios', 'music'] },
            {
                name: 'folder-video',
                folderNames: ['video', 'videos', 'movie', 'movies']
            },
            { name: 'folder-kubernetes', folderNames: ['kubernetes', 'k8s'] },
            { name: 'folder-import', folderNames: ['import', 'imports', 'imported'] },
            { name: 'folder-export', folderNames: ['export', 'exports', 'exported'] },
            { name: 'folder-wakatime', folderNames: ['wakatime'] },
            { name: 'folder-circleci', folderNames: ['.circleci'] },
            { name: 'folder-wordpress', folderNames: ['wp-content'] },
            { name: 'folder-gradle', folderNames: ['gradle', '.gradle'] },
            { name: 'folder-coverage', folderNames: ['coverage', '.nyc-output'] },
            {
                name: 'folder-class',
                folderNames: ['class', 'classes', 'model', 'models']
            },
            {
                name: 'folder-other',
                folderNames: ['other', 'others', 'misc', 'miscellaneous']
            },
            { name: 'folder-typescript', folderNames: ['typescript', 'ts'] },
            { name: 'folder-routes', folderNames: ['routes'] },
            { name: 'folder-ci', folderNames: ['.ci', 'ci'] },
            {
                name: 'folder-benchmark',
                folderNames: [
                    'benchmark',
                    'benchmarks',
                    'performance',
                    'measure',
                    'measures',
                    'measurement'
                ]
            },
            {
                name: 'folder-messages',
                folderNames: [
                    'messages',
                    'forum',
                    'chat',
                    'chats',
                    'conversation',
                    'conversations'
                ]
            },
            { name: 'folder-less', folderNames: ['less'] },
            { name: 'folder-python', folderNames: ['python', '__pycache__'] },
            { name: 'folder-debug', folderNames: ['debug', 'debugging'] },
            { name: 'folder-fastlane', folderNames: ['fastlane'] },
            {
                name: 'folder-plugin',
                folderNames: [
                    'plugin',
                    'plugins',
                    '_plugins',
                    'extension',
                    'extensions',
                    'addon',
                    'addons'
                ]
            },
            {
                name: 'folder-controller',
                folderNames: ['controller', 'controllers', 'service', 'services']
            },
            { name: 'folder-ansible', folderNames: ['ansible'] },
            { name: 'folder-server', folderNames: ['server', 'servers', 'backend'] },
            { name: 'folder-client', folderNames: ['client', 'clients', 'frontend'] },
            { name: 'folder-tasks', folderNames: ['tasks', 'tickets'] },
            { name: 'folder-android', folderNames: ['android'] },
            { name: 'folder-ios', folderNames: ['ios'] },
            { name: 'folder-upload', folderNames: ['uploads', 'upload'] },
            { name: 'folder-download', folderNames: ['downloads', 'download'] },
            { name: 'folder-tools', folderNames: ['tools'] },
            { name: 'folder-helper', folderNames: ['helpers', 'helper'] }
        ]
    },
    {
        name: 'classic',
        defaultIcon: { name: 'folder' },
        rootFolder: { name: 'folder-root' }
    },
    { name: 'none', defaultIcon: { name: '' } }
];
const /** @type {?} */ getFileIconName = (input) => {
    if (!input || !input.includes('.')) {
        return fileIcons.defaultIcon.name;
    }
    const /** @type {?} */ filename = input.toLowerCase();
    const /** @type {?} */ ext = getFileExtension(filename);
    const /** @type {?} */ matchesExt = fileIcons.icons.filter(x => !!x.fileExtensions && !!x.fileExtensions.filter(y => y === ext).length);
    const /** @type {?} */ matchesFilename = fileIcons.icons.filter(x => !!x.fileNames && !!x.fileNames.filter(y => y === filename).length);
    if (!!matchesFilename.length) {
        return matchesFilename[0].name;
    }
    else if (!!matchesExt.length) {
        return matchesExt[0].name;
    }
    return fileIcons.defaultIcon.name;
};
const ɵ0 = getFileIconName;
const /** @type {?} */ isFileImage = (filename) => getFileIconName(filename) === 'image';
const ɵ1 = isFileImage;
const /** @type {?} */ getFileExtension = (filename) => filename.split('.').pop();
const ɵ2 = getFileExtension;
const /** @type {?} */ getFileName = (filename) => {
    const /** @type {?} */ slashSegments = filename.split('/');
    const /** @type {?} */ filenameWithExt = slashSegments.pop();
    const /** @type {?} */ dotSegments = filenameWithExt.split('.');
    if (dotSegments.length < 2) {
        return filenameWithExt;
    }
    dotSegments.pop();
    return dotSegments.join('.');
};
const ɵ3 = getFileName;
const /** @type {?} */ getFolderIconName = (filename) => {
    return 'folder-other';
    filename = filename.toLowerCase();
    const /** @type {?} */ matches = folderIcons[0].icons.filter(x => !!x.folderNames && !!x.folderNames.filter(y => y === filename).length);
    if (!!matches.length) {
        return matches[0].name;
    }
    return folderIcons[0].defaultIcon.name;
};
const ɵ4 = getFolderIconName;
const /** @type {?} */ guesser = {
    isFileImage,
    getFileExtension,
    getFileName,
    getFolderIconName,
    getFileIconName,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class IconUrlResolverService {
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
        return path__default.join(this.baseHref, this.iconAssetDirectory, guesser.getFileIconName(filename) + '.svg');
    }
    /**
     * @param {?} filename
     * @return {?}
     */
    getFolderIconUrl(filename) {
        return path__default.join(this.baseHref, this.iconAssetDirectory, guesser.getFolderIconName(filename) + '.svg');
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} name
 * @param {?} fullPath
 * @return {?}
 */
function MakeClientDirectory(name, fullPath) {
    return {
        name: name,
        fullPath: fullPath,
        rightsFirebase: [],
        permissions: {},
        size: null,
        date: new Date().toISOString(),
        type: 'dir'
    };
}
/**
 * @param {?} fullPath
 * @return {?}
 */
function MakeClientFile(fullPath) {
    const /** @type {?} */ fileName = path__default.basename(fullPath);
    return {
        name: fileName,
        fullPath: fullPath,
        rightsFirebase: [],
        permissions: {},
        size: null,
        date: new Date().toISOString(),
        type: 'file'
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ClientFileSystemService {
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
            const /** @type {?} */ cwd = dirname(newPath);
            const /** @type {?} */ cachedFiles = this.store.GetCached(cwd);
            const /** @type {?} */ newDirPathNoClobber = this.getNextFreeFoldernameRecursively(newPath, cwd);
            const /** @type {?} */ folderName = basename(newDirPathNoClobber);
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
            const /** @type {?} */ directoryPath = dirname(filePath);
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
            const /** @type {?} */ directoryPath = dirname(firstPath);
            const /** @type {?} */ removeSet = new Set(filePaths.map(filePath => basename(filePath)));
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FilemanagerStatusService {
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
    {
        type: Injectable, args: [{
            providedIn: 'root'
        },]
    }
];
/** @nocollapse */ FilemanagerStatusService.ɵprov = ɵɵdefineInjectable({ factory: function FilemanagerStatusService_Factory() { return new FilemanagerStatusService(); }, token: FilemanagerStatusService, providedIn: "root" });
function FilemanagerStatusService_tsickle_Closure_declarations() {
    /** @type {?} */
    FilemanagerStatusService.prototype._ActiveRequestsMap;
}
/**
 * @record
 */
function ActiveRequestsMap() { }
function ActiveRequestsMap_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    [key: string]: {
        status?: RequestStatus;
        error?: string;
      };
    */
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class OptimisticFilesystemService {
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
            const /** @type {?} */ uuid = v4();
            try {
                this.status.UpdateStatus('HandleNavigateUp' + uuid, 'SENDING');
                this.logger.info('HandleNavigateUp');
                const /** @type {?} */ currentPath = yield this.$CurrentPath.pipe(take(1)).toPromise();
                const /** @type {?} */ parentPath = path__default.dirname(currentPath);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AppDialogConfirmationComponent {
    /**
     * @param {?} dialogRef
     */
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    /**
     * @return {?}
     */
    onSubmit() {
        this.dialogRef.close(true);
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.dialogRef.close(false);
    }
}
AppDialogConfirmationComponent.decorators = [
    {
        type: Component, args: [{
            template: `
    <base-dialog
      [header]="headerTemplate"
      [body]="bodyTemplate"
      [actions]="actionsTemplate"
    >
      <ng-template #headerTemplate>
        <h2>Set Permissions</h2>
      </ng-template>
      <ng-template #bodyTemplate>
        <div>
          <p>Would you like to set permissions for this folder?</p>
        </div>
      </ng-template>
      <ng-template #actionsTemplate>
        <btns-cancel-ok
          okIcon="done"
          okLabel="Yes"
          (clickedCancel)="onCancel()"
          (clickedOk)="onSubmit()"
        >
        </btns-cancel-ok>
      </ng-template>
    </base-dialog>
  `,
            styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
        }]
    }
];
/** @nocollapse */
AppDialogConfirmationComponent.ctorParameters = () => [
    { type: MatDialogRef }
];
function AppDialogConfirmationComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppDialogConfirmationComponent.prototype.dialogRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} itemPath
 * @return {?}
 */
function MakeItem2(itemPath) {
    return {
        name: basename(itemPath),
        fullPath: itemPath,
        rightsFirebase: [],
        permissions: {
            others: 'read/write',
            readers: ['Example Reader'],
            writers: ['Example Writer', 'Managers']
        },
        size: '111',
        date: new Date().toISOString(),
        type: itemPath.endsWith('/') ? 'dir' : 'file'
    };
}
/**
 * @param {?} itemPath
 * @return {?}
 */
function MakeFile(itemPath) {
    const /** @type {?} */ filePath = EnsureNoTrailingSlash(itemPath);
    return MakeItem2(filePath);
}
/**
 * @param {?} itemPath
 * @return {?}
 */
function MakeDir(itemPath) {
    const /** @type {?} */ dirPath = EnsureTrailingSlash(itemPath);
    return MakeItem2(dirPath);
}
const /** @type {?} */ stubFiles = [
    MakeFile('/image1.png'),
    MakeFile('/image2.jpeg'),
    MakeFile('/subfile.txt'),
    MakeFile('/subfile.mp3'),
    MakeFile('/subfile.mp4'),
    MakeFile('/tables.csv'),
    MakeFile('/time.docx'),
    MakeDir('/emptyFolder/'),
    MakeDir('/subfolder/'),
    MakeFile('/subfolder/file.txt'),
    MakeFile('/subfolder/file.png'),
    MakeDir('/subfolder/xsub1/'),
    MakeDir('/subfolder/ysub1/'),
    MakeDir('/subfolder/2sub1/'),
    MakeDir('/subfolder/1sub1/'),
    MakeDir('/subfolder/sub1/'),
    MakeFile('/subfolder/sub1/file.txt'),
    MakeDir('/subfolder/sub1/sub1/'),
    MakeFile('/subfolder/sub1/sub11/file.txt'),
    MakeDir('/subfolder/sub1/sub11/sub111/'),
    MakeFile('/subfolder/sub1/sub11/sub111/file.txt'),
    MakeDir('/subfolder/sub1/sub12/'),
    MakeFile('/subfolder/sub1/sub12/file.txt'),
    MakeDir('/subfolder/sub1/sub12/sub112/'),
    MakeFile('/subfolder/sub1/sub12/sub112/file.txt'),
    MakeDir('/subfolder/sub2/'),
    MakeFile('/subfolder/sub2/file.txt'),
    MakeDir('/subfolder/sub2/sub21/'),
    MakeFile('/subfolder/sub2/sub21/file.txt'),
    MakeDir('/subfolder/sub2/sub21/sub211/'),
    MakeFile('/subfolder/sub2/sub21/sub211/file.txt'),
    MakeDir('/subfolder/sub2/sub22/'),
    MakeFile('/subfolder/sub2/sub22/file.txt'),
    MakeDir('/subfolder/sub2/sub22/sub221/'),
    MakeFile('/subfolder/sub2/sub22/sub221/file.txt')
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ActionHandlersService {
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
            const /** @type {?} */ filesToAdd = res.uploaded.map((f) => path__default.join(currentPath, f));
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
                const /** @type {?} */ newDirectoryPath = path__default.join(currentDirectory, newDirName);
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
            const /** @type {?} */ newDirectoryPath = path__default.join(currentDirectory, newDirName);
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
            const /** @type {?} */ newDirectoryPath = path__default.join(currentDirectory, newDirName);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} fieldName
 * @param {?=} direction
 * @return {?}
 */
function sortObjectArrayCase(fieldName, direction) {
    return (a, b) => {
        const /** @type {?} */ val_a = (a[fieldName] + '').toLowerCase();
        const /** @type {?} */ val_b = (b[fieldName] + '').toLowerCase();
        if (val_a < val_b) {
            return direction === 'desc' ? 1 : -1;
        }
        if (val_a > val_b) {
            return direction === 'desc' ? -1 : 1;
        }
        return 0;
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LibMainFileManagerComponent {
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
    {
        type: Component, args: [{
            // tslint:disable-next-line:component-selector
            selector: 'ngx-filemanager',
            template: "<div class=\"ngx-file-page-container\">\n  <mat-drawer-container>\n    <mat-drawer-content [class.loaded]=\"initLoaded\">\n      <div\n        class=\"bulk-actions-container\"\n        [class.hidden]=\"($BulkSelected | async).length < 1\"\n        *ngIf=\"initLoaded\"\n      >\n        <bulk-actions\n          [bulkActions]=\"this.bulkActions\"\n          [bulkSelected$]=\"this.$BulkSelected\"\n          (clearSelected)=\"this.ClearBulkSelected()\"\n        >\n        </bulk-actions>\n      </div>\n      <div class=\"folder-actions-container\">\n        <main-actions [mainActions]=\"this.mainActions\"> </main-actions>\n      </div>\n      <div class=\"flex-h space-between breadcrumb-container\">\n        <bread-crumbs\n          [currentPath]=\"$CurrentPath | async\"\n          (clickedCrumb)=\"this.onClickCrumb($event)\"\n          [config]=\"config\"\n        >\n        </bread-crumbs>\n        <div class=\"flex-h\">\n          <mat-progress-spinner\n            *ngIf=\"$hasSending | async\"\n            mode=\"indeterminate\"\n            [diameter]=\"40\"\n            color=\"primary\"\n          ></mat-progress-spinner>\n          <mat-progress-spinner\n            *ngIf=\"$hasFailed | async\"\n            mode=\"determinate\"\n            [diameter]=\"40\"\n            color=\"warn\"\n            [value]=\"100\"\n          ></mat-progress-spinner>\n          <div\n            class=\"mat-elevation-z8 expander-container has-pointer mat-table\"\n            (click)=\"isFileDetailsOpen = !isFileDetailsOpen\"\n          >\n            <mat-icon\n              matTooltip=\"View File Details\"\n              class=\"expander-icon\"\n              [class.drawer-out]=\"isFileDetailsOpen\"\n              [class.drawer-in]=\"!isFileDetailsOpen\"\n              >expand_more</mat-icon\n            >\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"enableSearch\">\n        <form (submit)=\"searchAllDocumentsAndFolders(searchKeyword)\" [formGroup]=\"searchForm\">\n          <mat-form-field class=\"w-full px-2\">\n            <input matInput [(ngModel)]=\"searchKeyword\" formControlName=\"searchKeyword\" placeholder=\"Search here\"/>\n          </mat-form-field>\n          <mat-progress-spinner\n              *ngIf=\"showSearchingSpinner\"\n              mode=\"determinate\"\n              [diameter]=\"40\"\n              color=\"warn\"\n              [value]=\"100\"\n            ></mat-progress-spinner>\n        </form>\n        <div *ngIf=\"!showSearchingSpinner&&isSearching&&seachResultDocuments.length===0&&seachResultFolders.length===0\">\n          <div class=\"card-container\">\n            <h4>Search results: </h4>\n            <mat-card >\n              <div class=\"document\">\n                <div class=\"title\">\n                  There are no site files/folders match your keyword.\n                </div>\n              </div>\n            </mat-card>\n          </div>\n        </div>\n        <div class=\"exp-panel\" *ngIf=\"seachResultDocuments.length>0\">\n          <mat-expansion-panel [expanded]=\"true\">\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Files:\n              </mat-panel-title>\n              <mat-panel-description>\n                They are results of search files.\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <mat-card (click)=\"onSelectedSearchItem(document)\" *ngFor=\"let document of seachResultDocuments|slice:0: documentsShow\">\n              <div class=\"document\">\n                <div class=\"title\">\n                  {{document.name}}\n                </div>\n                <div class=\"search-item\">\n                  <mat-icon class=\"icon-size-44 text-primary\">\n                      insert_drive_file\n                  </mat-icon>\n                  <span>{{ document.fullPath }}</span>\n              </div>\n              </div>\n            </mat-card>\n            <div class=\"text-right\">\n              <button \n                *ngIf=\"documentsShow < seachResultDocuments.length\"\n                (click)=\"documentsShow=documentsShow+10\"\n                mat-raised-button>Load more</button>\n              </div>\n          </mat-expansion-panel>\n        </div>\n        <div class=\"exp-panel\" *ngIf=\"seachResultFolders.length>0\">\n          <mat-expansion-panel [expanded]=\"true\">\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Folders:\n              </mat-panel-title>\n              <mat-panel-description>\n                They are results of search folders.\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <mat-card (click)=\"onSelectedSearchItem(folder)\" *ngFor=\"let folder of seachResultFolders|slice:0: foldersShow\">\n              <div class=\"document\">\n                <div class=\"title\">\n                  {{folder.name}}\n                </div>\n                <div class=\"search-item\">\n                  <mat-icon class=\"icon-size-44 text-primary\">\n                      folder\n                  </mat-icon>\n                  <span>{{ folder.fullPath }}</span>\n                </div>\n              </div>\n            </mat-card>\n            <div class=\"text-right\">\n              <button \n                *ngIf=\"foldersShow < seachResultFolders.length\"\n                (click)=\"foldersShow=foldersShow+10\"\n                mat-raised-button>Load more</button>\n            </div>\n          </mat-expansion-panel>\n        </div>\n      </div>\n      <app-file-table\n        *ngIf=\"folders$ && files$\"\n        [folders]=\"folders$ | async\"\n        [files]=\"files$ | async\"\n        [fileActions]=\"fileActions\"\n        [folderActions]=\"folderActions\"\n        [config]=\"config\"\n        [$triggerClearSelected]=\"$triggerClearSelected\"\n        (checkedChanged)=\"$BulkSelected.next($event)\"\n        (selectedChanged)=\"this.onSelectedFilePath($event)\"\n        (enterFolder)=\"this.onEnterFolder($event)\"\n      >\n      </app-file-table>\n    </mat-drawer-content>\n    <mat-drawer\n      #drawer\n      [(opened)]=\"isFileDetailsOpen\"\n      class=\"history-drawer\"\n      mode=\"side\"\n      position=\"end\"\n      opened\n    >\n      <ngx-filemanager-file-details\n        [actions]=\"fileDetailActions\"\n        [file]=\"SelectedFile\"\n        [fileSystem]=\"fileSystem\"\n        [config]=\"config\"\n        (clickedDownload)=\"this.onDetailsClickDownload($event)\"\n      >\n      </ngx-filemanager-file-details>\n    </mat-drawer>\n  </mat-drawer-container>\n</div>\n",
            providers: [
                ActionHandlersService,
                ClientFileSystemService,
                OptimisticFilesystemService
            ],
            styles: [".heading{font-family:sans-serif;margin-left:10px}mat-drawer{width:260px}mat-drawer-content{overflow:hidden}mat-drawer-content .loaded{overflow:auto}mat-drawer-container{width:100%}.ngx-file-page-container{display:flex;height:calc(100% - 65px)}.expander-container{align-items:center;cursor:pointer;display:flex;flex-direction:row-reverse;right:0;top:0;z-index:1}.expander-icon{font-size:2em;height:1em;transition:transform .5s;width:1em}.bulk-actions-container{height:80px;overflow:hidden;position:absolute;top:0;transition:top .7s;width:100%;z-index:2}.hidden{top:-90px}.drawer-out{transform:rotate(-90deg)}.drawer-in{transform:rotate(90deg)}.flex-h{align-items:center;display:flex;flex-direction:row}.space-between{justify-content:space-between}button.top{margin-left:10px}.breadcrumb-container{margin:2px 0}.document{cursor:pointer}.search-item{align-items:center;display:flex}", "h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
        }]
    }
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
function BreadCrumb() { }
function BreadCrumb_tsickle_Closure_declarations() {
    /** @type {?} */
    BreadCrumb.prototype.label;
    /** @type {?|undefined} */
    BreadCrumb.prototype.path;
    /** @type {?|undefined} */
    BreadCrumb.prototype.icon;
    /** @type {?|undefined} */
    BreadCrumb.prototype.virtualPath;
}
/**
 * @param {?} virtualRoot
 * @return {?}
 */
function MakeRootCrumb(virtualRoot) {
    return {
        label: '',
        icon: 'home',
        path: virtualRoot,
        virtualPath: '/'
    };
}
/**
 * @param {?} virtualRoot
 * @return {?}
 */
function MakeWarningCrumb(virtualRoot) {
    return {
        label: '',
        icon: 'mood_bad',
        path: virtualRoot,
        virtualPath: virtualRoot
    };
}
const /** @type {?} */ MakeCrumbs = (virtualRoot, absolutePath) => {
    const /** @type {?} */ virtualRootParsed = EnsureAbsoluteDirectory(virtualRoot);
    const /** @type {?} */ absolutePathParsed = EnsureAbsoluteDirectory(absolutePath);
    if (absolutePathParsed.indexOf(virtualRootParsed) !== 0) {
        console.warn('Absolute path is not within the virtualRoot', { virtualRoot, absolutePath });
        return [MakeWarningCrumb(virtualRootParsed)];
    }
    if (absolutePathParsed === virtualRootParsed) {
        return [MakeRootCrumb(virtualRootParsed)];
    }
    const /** @type {?} */ relativeVirtualRoot = absolutePathParsed.slice(virtualRootParsed.length);
    const /** @type {?} */ crumbs = [];
    relativeVirtualRoot
        .split('/')
        .filter(p => !!p)
        .reduce((currentPath, curr) => {
            const /** @type {?} */ dirname$1 = basename(currentPath);
            const /** @type {?} */ crumb = {
                label: dirname$1,
                path: EnsureAbsoluteDirectory(virtualRootParsed + currentPath),
                virtualPath: EnsureAbsoluteDirectory(currentPath)
            };
            crumbs.unshift(crumb);
            const /** @type {?} */ parentPath = dirname(currentPath);
            return parentPath;
        }, relativeVirtualRoot);
    crumbs.unshift(MakeRootCrumb(virtualRootParsed));
    return crumbs;
};
const ɵ0$1 = MakeCrumbs;
const /** @type {?} */ crumbFactory = {
    MakeCrumbs: MakeCrumbs
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AppBreadCrumbsComponent {
    /**
     * @param {?} logger
     */
    constructor(logger) {
        this.logger = logger;
        this.clickedCrumb = new EventEmitter();
    }
    /**
     * @param {?} newPath
     * @return {?}
     */
    set currentPath(newPath) {
        this._currentPath = newPath;
        this.makeCrumbs(newPath);
    }
    /**
     * @param {?} newConfig
     * @return {?}
     */
    set config(newConfig) {
        this._config = newConfig;
        this.makeCrumbs(this._currentPath);
    }
    /**
     * @param {?} newPath
     * @return {?}
     */
    makeCrumbs(newPath) {
        if (!this._config) {
            return;
        }
        const /** @type {?} */ virtualRoot = this._config.virtualRoot;
        this.crumbs = crumbFactory.MakeCrumbs(virtualRoot, newPath || virtualRoot);
        this.logger.info('makeCrumbs', {
            crumbs: this.crumbs,
            virtualRoot,
            newPath
        });
    }
    /**
     * @param {?} crumb
     * @return {?}
     */
    onClickCrumb(crumb) {
        this.logger.info('onClickCrumb', { crumb });
        this.clickedCrumb.emit(crumb.path);
    }
}
AppBreadCrumbsComponent.decorators = [
    {
        type: Component, args: [{
            // tslint:disable-next-line:component-selector
            selector: 'bread-crumbs',
            template: `
    <div class="flex-row align-center">
      <div
        class="flex-row align-center"
        *ngFor="let crumb of crumbs; let first = first; let last = last"
      >
        <div class="divider" *ngIf="!first">
          >
        </div>
        <button
          #myButton
          class="crumb"
          mat-raised-button
          color="secondary"
          [disabled]="last"
          (click)="onClickCrumb(crumb); myButton.disabled = true"
        >
          <mat-icon *ngIf="crumb.icon">{{ crumb.icon }}</mat-icon>
          {{ crumb.label }}
        </button>
      </div>
    </div>
  `,
            styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
        }]
    }
];
/** @nocollapse */
AppBreadCrumbsComponent.ctorParameters = () => [
    { type: LoggerService }
];
AppBreadCrumbsComponent.propDecorators = {
    clickedCrumb: [{ type: Output }],
    currentPath: [{ type: Input }],
    config: [{ type: Input }]
};
function AppBreadCrumbsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppBreadCrumbsComponent.prototype.crumbs;
    /** @type {?} */
    AppBreadCrumbsComponent.prototype.clickedCrumb;
    /** @type {?} */
    AppBreadCrumbsComponent.prototype._currentPath;
    /** @type {?} */
    AppBreadCrumbsComponent.prototype._config;
    /** @type {?} */
    AppBreadCrumbsComponent.prototype.logger;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AppBulkActionsComponent {
    constructor() {
        this.clearSelected = new EventEmitter();
    }
    /**
     * @param {?} action
     * @param {?} selected
     * @return {?}
     */
    executeAction(action, selected) {
        return __awaiter(this, void 0, void 0, function* () {
            yield action.onClick(selected);
            this.clearSelected.emit();
        });
    }
}
AppBulkActionsComponent.decorators = [
    {
        type: Component, args: [{
            // tslint:disable-next-line:component-selector
            selector: 'bulk-actions',
            template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row class="top-toolbar">
        <span class="top-toolbar-label">
          Bulk Actions
        </span>
      </mat-toolbar-row>
      <mat-toolbar-row class="action-toolbar scroll-x">
        <div class="flex-row" *ngIf="bulkSelected$ | async as selected">
          <div *ngFor="let action of bulkActions">
            <button
              class="mr-10 flex-row align-center"
              mat-raised-button
              [disabled]="action.$disabled | async"
              [color]="action.color"
              (click)="executeAction(action, selected)"
            >
              <mat-icon>{{ action.icon }}</mat-icon>
              {{ action.label }}
            </button>
          </div>
        </div>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
            styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
        }]
    }
];
AppBulkActionsComponent.propDecorators = {
    bulkActions: [{ type: Input }],
    bulkSelected$: [{ type: Input }],
    clearSelected: [{ type: Output }]
};
function AppBulkActionsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppBulkActionsComponent.prototype.bulkActions;
    /** @type {?} */
    AppBulkActionsComponent.prototype.bulkSelected$;
    /** @type {?} */
    AppBulkActionsComponent.prototype.clearSelected;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AppMainActionsComponent {
}
AppMainActionsComponent.decorators = [
    {
        type: Component, args: [{
            // tslint:disable-next-line:component-selector
            selector: 'main-actions',
            template: `
    <mat-toolbar>
      <mat-toolbar-row class="top-toolbar">
        <span class="top-toolbar-label">
          Folder Actions
        </span>
      </mat-toolbar-row>
      <mat-toolbar-row class="action-toolbar scroll-x">
        <div *ngFor="let action of mainActions">
          <button
            class="mr-10 has-pointer"
            mat-raised-button
            [color]="action.color"
            (click)="action.onClick(action)"
            [disabled]="action.$disabled | async"
          >
            <mat-icon inline="true">{{ action.icon }}</mat-icon>
            {{ action.label }}
          </button>
        </div>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
            styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}", `
      .top-toolbar-label {
        color: #8a8a8a;
      }
    `]
        }]
    }
];
AppMainActionsComponent.propDecorators = {
    mainActions: [{ type: Input }]
};
function AppMainActionsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppMainActionsComponent.prototype.mainActions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} ms
 * @return {?}
 */
function promiseDelay(ms) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => setTimeout(resolve, ms));
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
function FileIcon$1() { }
function FileIcon_tsickle_Closure_declarations$1() {
    /**
     * Name of the icon, e.g. 'javascript'
     * @type {?}
     */
    FileIcon$1.prototype.name;
    /**
     * Define the file extensions that should use this icon.
     * E.g. ['js']
     * @type {?|undefined}
     */
    FileIcon$1.prototype.fileExtensions;
    /**
     * Define if there are some static file names that should apply this icon.
     * E.g. ['sample.js']
     * @type {?|undefined}
     */
    FileIcon$1.prototype.fileNames;
    /**
     * Define if there is a light icon available.
     * @type {?|undefined}
     */
    FileIcon$1.prototype.light;
    /**
     * Define if there is a high contrast icon available.
     * @type {?|undefined}
     */
    FileIcon$1.prototype.highContrast;
    /**
     * Define if the icon should be disabled.
     * @type {?|undefined}
     */
    FileIcon$1.prototype.disabled;
}
/**
 * @record
 */
function FolderTheme$1() { }
function FolderTheme_tsickle_Closure_declarations$1() {
    /**
     * Name of the theme
     * @type {?}
     */
    FolderTheme$1.prototype.name;
    /**
     * Define the default icon for folders in a theme.
     * @type {?}
     */
    FolderTheme$1.prototype.defaultIcon;
    /**
     * Icon for root folders.
     * @type {?|undefined}
     */
    FolderTheme$1.prototype.rootFolder;
    /**
     * Defines folder icons for specific folder names.
     * @type {?|undefined}
     */
    FolderTheme$1.prototype.icons;
}
/**
 * @record
 */
function FolderIcon$1() { }
function FolderIcon_tsickle_Closure_declarations$1() {
    /**
     * Name of the icon, e.g. 'src'
     * @type {?}
     */
    FolderIcon$1.prototype.name;
    /**
     * Define the folder names that should apply the icon.
     * E.g. ['src', 'source']
     * @type {?}
     */
    FolderIcon$1.prototype.folderNames;
    /**
     * Define if there is a light icon available.
     * @type {?|undefined}
     */
    FolderIcon$1.prototype.light;
    /**
     * Define if there is a high contrast icon available.
     * @type {?|undefined}
     */
    FolderIcon$1.prototype.highContrast;
    /**
     * Define if the icon should be disabled.
     * @type {?|undefined}
     */
    FolderIcon$1.prototype.disabled;
}
/**
 * @record
 */
function DefaultIcon$1() { }
function DefaultIcon_tsickle_Closure_declarations$1() {
    /**
     * Name of the icon, e.g. 'src'
     * @type {?}
     */
    DefaultIcon$1.prototype.name;
    /**
     * Define if there is a light icon available.
     * @type {?|undefined}
     */
    DefaultIcon$1.prototype.light;
    /**
     * Define if there is a high contrast icon available.
     * @type {?|undefined}
     */
    DefaultIcon$1.prototype.highContrast;
}
class FileIcons$1 {
}
function FileIcons_tsickle_Closure_declarations$1() {
    /**
     * Define the default icon for files.
     * @type {?}
     */
    FileIcons$1.prototype.defaultIcon;
    /**
     * Defines all folder icons.
     * @type {?}
     */
    FileIcons$1.prototype.icons;
}
const /** @type {?} */ fileIcons$1 = {
    defaultIcon: { name: 'file' },
    icons: [
        { name: 'word', fileExtensions: ['doc', 'docx', 'rtf'] },
        { name: 'pdf', fileExtensions: ['pdf'] },
        { name: 'table', fileExtensions: ['xlsx', 'xls', 'csv', 'tsv'] },
        {
            name: 'html',
            fileExtensions: ['html', 'htm', 'xhtml', 'html_vm', 'asp']
        },
        {
            name: 'markdown',
            fileExtensions: ['md', 'markdown', 'rst']
        },
        { name: 'yaml', fileExtensions: ['yaml', 'YAML-tmLanguage', 'yml'] },
        {
            name: 'xml',
            fileExtensions: [
                'xml',
                'plist',
                'xsd',
                'dtd',
                'xsl',
                'xslt',
                'resx',
                'iml',
                'xquery',
                'tmLanguage',
                'manifest',
                'project'
            ],
            fileNames: ['.htaccess']
        },
        {
            name: 'image',
            fileExtensions: [
                'png',
                'jpeg',
                'jpg',
                'gif',
                'svg',
                'ico',
                'tif',
                'tiff',
                'psd',
                'psb',
                'ami',
                'apx',
                'bmp',
                'bpg',
                'brk',
                'cur',
                'dds',
                'dng',
                'exr',
                'fpx',
                'gbr',
                'img',
                'jbig2',
                'jb2',
                'jng',
                'jxr',
                'pbm',
                'pgf',
                'pic',
                'raw',
                'webp',
                'eps'
            ]
        },
        { name: 'tex', fileExtensions: ['tex', 'cls', 'sty'] },
        {
            name: 'powerpoint',
            fileExtensions: [
                'pptx',
                'ppt',
                'pptm',
                'potx',
                'potm',
                'ppsx',
                'ppsm',
                'pps',
                'ppam',
                'ppa'
            ]
        },
        {
            name: 'video',
            fileExtensions: [
                'webm',
                'mkv',
                'flv',
                'vob',
                'ogv',
                'ogg',
                'gifv',
                'avi',
                'mov',
                'qt',
                'wmv',
                'yuv',
                'rm',
                'rmvb',
                'mp4',
                'm4v',
                'mpg',
                'mp2',
                'mpeg',
                'mpe',
                'mpv',
                'm2v'
            ]
        },
        { name: 'audio', fileExtensions: ['mp3', 'flac', 'm4a', 'wma', 'aiff'] },
        { name: 'document', fileExtensions: ['txt'] }
    ]
};
const /** @type {?} */ getFileIconName$1 = (filename) => {
    filename = filename.toLowerCase();
    if (!filename || !filename.includes('.')) {
        return fileIcons$1.defaultIcon.name;
    }
    const /** @type {?} */ ext = getFileExtension$1(filename);
    const /** @type {?} */ matchesExt = fileIcons$1.icons.filter(x => !!x.fileExtensions && !!x.fileExtensions.filter(y => y === ext).length);
    const /** @type {?} */ matchesFilename = fileIcons$1.icons.filter(x => !!x.fileNames && !!x.fileNames.filter(y => y === filename).length);
    if (!!matchesFilename.length) {
        return matchesFilename[0].name;
    }
    else if (!!matchesExt.length) {
        return matchesExt[0].name;
    }
    return fileIcons$1.defaultIcon.name;
};
const /** @type {?} */ isFileImage$1 = (filename) => getFileIconName$1(filename) === 'image';
const /** @type {?} */ getFileExtension$1 = (filename) => filename.split('.').pop();
const /** @type {?} */ getFileName$1 = (filename) => filename.split('.').slice(-2, -1)[0];
const /** @type {?} */ getFileIcon = (filename) => {
    return '/assets/fileicons/' + getFileIconName$1(filename) + '.svg';
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FileDetailsComponent {
    /**
     * @param {?} logger
     */
    constructor(logger) {
        this.logger = logger;
        this.clickedDownload = new EventEmitter();
    }
    /**
     * @param {?} newFile
     * @return {?}
     */
    set file(newFile) {
        this._file = newFile;
        if (!newFile) {
            return;
        }
        this.logger.info('file-details: set file', { newFile });
        this.isFile = this.file.type === 'file';
        this.isImage = getFileIconName$1(this.file.name) === 'image';
        this.setImageUrl().catch(e => console.error(e));
        this.setPermissions();
    }
    /**
     * @return {?}
     */
    get file() {
        return this._file;
    }
    /**
     * @param {?} fileName
     * @return {?}
     */
    getFileType(fileName) {
        return getFileIconName$1(fileName);
    }
    /**
     * @return {?}
     */
    get hasInput() {
        return !!this.file;
    }
    /**
     * @return {?}
     */
    setImageUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            this.imageUrl = null;
            try {
                yield promiseDelay(300);
                if (!this.hasInput || !this.isFile) {
                    return;
                }
                this.imageUrl = yield this.fileSystem.CreateDownloadLink(this.file);
            }
            catch (/** @type {?} */ error) {
                this.logger.error('Error setting ImageUrl', { error }, error);
            }
        });
    }
    /**
     * @return {?}
     */
    setPermissions() {
        if (!this._file || !this._file.permissions) {
            return;
        }
        try {
            const /** @type {?} */ permissions = this._file.permissions;
            this.readers = permissions.readers;
            this.writers = permissions.writers;
            this.others = permissions.others;
        }
        catch (/** @type {?} */ error) {
            this.logger.error('file-details: setPermissions', {
                error,
                file: this._file
            });
        }
    }
    /**
     * @param {?} folder
     * @return {?}
     */
    getFolderSize(folder) {
        if (folder.metaData) {
            let /** @type {?} */ path = this.config.folderSizePath;
            return path.split('.').reduce(function (p, prop) { return p[prop]; }, folder);
        }
        return folder.size;
    }
}
FileDetailsComponent.decorators = [
    {
        type: Component, args: [{
            // tslint:disable-next-line:component-selector
            selector: 'ngx-filemanager-file-details',
            template: `
    <div class="details-container ml-5">
      <div *ngIf="!hasInput" class="none-selected">
        <h2>No item selected ...</h2>
      </div>
      <div *ngIf="hasInput">
        <mat-toolbar color="primary">
          <mat-toolbar-row class="title-row">
            <h2 *ngIf="isFile">File Details</h2>
            <h2 *ngIf="!isFile">Directory Details</h2>
          </mat-toolbar-row>
          <mat-toolbar-row class="action-row" *ngFor="let action of actions">
            <button
              mat-raised-button
              [matTooltip]="action.toolTip"
              [color]="action.color"
              (click)="action.onClick(file)"
              [disabled]="action.$disabled | async"
            >
              <mat-icon>{{ action.icon }}</mat-icon>
              <span>{{ action.label }}</span>
            </button>
          </mat-toolbar-row>
        </mat-toolbar>
        <span class="flex-row space-between align-top mt-5">
          <div>
            <h5>Name</h5>
            <h6 class="filename">{{ file.name }}</h6>
          </div>
        </span>
        <h5 class="mt-5">Size</h5>
        <h6 *ngIf="isFile">{{ file.size | fileSize }}</h6>
        <h6 *ngIf="!isFile&&config.folderSizePath">{{ getFolderSize(file) | fileSize }}</h6>
        <h5 class="mt-5">Date</h5>
        <h6>{{ file.date | date: 'short' }}</h6>
        <span class="flex-row space-between align-top mt-5">
          <div>
            <h5>Permissions</h5>
            <div class="mb-10">
              <div *ngIf="readers?.length">
                <h6>Who can see this</h6>
                <mat-chip-list>
                  <mat-chip *ngFor="let entity of readers">
                    <mat-icon>people</mat-icon>
                    <span>{{ entity }}</span>
                  </mat-chip>
                </mat-chip-list>
              </div>
              <div *ngIf="config?.showWriters && writers?.length">
                <h6>Who can edit this</h6>
                <mat-chip-list>
                  <mat-chip *ngFor="let entity of writers">
                    <mat-icon>people</mat-icon>
                    <span>{{ entity }}</span>
                  </mat-chip>
                </mat-chip-list>
              </div>
              <div *ngIf="config?.showOthers && others">
                <h6>Everyone else can</h6>
                <mat-chip-list>
                  <mat-chip>
                    {{ others }}
                  </mat-chip>
                </mat-chip-list>
              </div>
            </div>
          </div>
        </span>
        <h5 class="mt-5">Full Path</h5>
        <h6>{{ file.fullPath }}</h6>
        <h5 class="mt-5">Type</h5>
        <h6 *ngIf="!isFile">Directory</h6>
        <h6 *ngIf="isFile" class="capitalize ">
          {{ getFileType(file.name) }}
        </h6>
        <div *ngIf="isFile" class="flex-row space-between align-top mt-5">
          <div>
            <h5>Download</h5>
            <div *ngIf="isImage" class="preview">
              <i>Image Preview</i>
              <div
                class="has-pointer"
                (click)="this.clickedDownload.emit(file)"
              >
                <img *ngIf="imageUrl" [src]="imageUrl" />
              </div>
            </div>
            <div *ngIf="!isImage">
              <h6 class="no-preview-text">
                No preview available
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
            styles: [`
      .filename {
        padding-right: 10px;
      }
      .none-selected {
        color: grey;
        text-align: center;
        width: 100%;
        margin-top: 100px;
      }
      .mb-10 {
        margin-bottom: 10px;
      }
      .mt-5 {
        margin-top: 10px;
      }
      .ml-5 {
        margin-left: 5px;
      }
      .no-preview-text {
        color: grey;
        font-decoration: italic;
      }
      h5 {
        margin: 0px;
        color: #616161;
        font-weight: normal;
      }
      h6 {
        margin: 0px;
        font-size: 1em;
        overflow-wrap: break-word;
        font-weight: bold;
        margin-bottom: 5px;
        margin-top: 2px;
      }
      img {
        max-width: 100%;
        max-height: 400px;
      }
      .preview {
        opacity: 1;
        transition: opacity 1s;
      }
      .title-row {
        height: 45px;
        padding-left: 8px;
      }
      .action-row {
        height: 45px;
        padding-left: 8px;
      }
      .action-row:last-child {
        height: 48px;
        padding-bottom: 4px;
      }
    `, "h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
        }]
    }
];
/** @nocollapse */
FileDetailsComponent.ctorParameters = () => [
    { type: LoggerService }
];
FileDetailsComponent.propDecorators = {
    file: [{ type: Input }],
    fileSystem: [{ type: Input }],
    config: [{ type: Input }],
    actions: [{ type: Input }],
    clickedDownload: [{ type: Output }]
};
function FileDetailsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    FileDetailsComponent.prototype.imageUrl;
    /** @type {?} */
    FileDetailsComponent.prototype._file;
    /** @type {?} */
    FileDetailsComponent.prototype.fileSystem;
    /** @type {?} */
    FileDetailsComponent.prototype.config;
    /** @type {?} */
    FileDetailsComponent.prototype.actions;
    /** @type {?} */
    FileDetailsComponent.prototype.clickedDownload;
    /** @type {?} */
    FileDetailsComponent.prototype.others;
    /** @type {?} */
    FileDetailsComponent.prototype.writers;
    /** @type {?} */
    FileDetailsComponent.prototype.readers;
    /** @type {?} */
    FileDetailsComponent.prototype.isFile;
    /** @type {?} */
    FileDetailsComponent.prototype.isImage;
    /** @type {?} */
    FileDetailsComponent.prototype.logger;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} input
 * @return {?}
 */
function ConvertToTitleCase(input) {
    const /** @type {?} */ capitalsWithSpaces = input.replace(/([A-Z])/g, ' $1').trim();
    const /** @type {?} */ underscoresToSpaces = capitalsWithSpaces.replace(/_/g, ' ');
    return underscoresToSpaces
        .split(' ')
        .map(p => p.charAt(0).toUpperCase() + p.substr(1).toLowerCase())
        .join(' ');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
class FormBase {
    constructor() {
        this.internalControl = new FormControl();
        this._destroyed = new Subject();
        this.disabled = false;
        this.propagateOnChange = () => { };
        this.onTouched = () => { };
        // Garrentee that init and destroy are called
        // even if ngOnInit() or ngOnDestroy() are overriden
        const /** @type {?} */ originalOnDestroy = this.ngOnDestroy;
        this.ngOnDestroy = () => {
            this.destroy();
            originalOnDestroy.apply(this);
        };
        const /** @type {?} */ originalOnInit = this.ngOnInit;
        this.ngOnInit = () => {
            this.init();
            originalOnInit.apply(this);
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @return {?}
     */
    init() {
        this._destroyed.next();
        this.autoCompleteObscureName = v4();
        this.internalControl.valueChanges
            .pipe(takeUntil(this._destroyed))
            .pipe(auditTime(100))
            .subscribe(() => {
                this._value = this.internalControl.value;
                this.onChange(this._value);
                this.onTouched();
                // console.log('form-base-class: valueChanges', {val: this._value});
            });
        if (!this.placeholder) {
            const /** @type {?} */ nameParsed = ConvertToTitleCase(this.formControlName + '');
            this.placeholder = nameParsed;
        }
    }
    /**
     * @return {?}
     */
    destroy() {
        this._destroyed.next();
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set value(val) {
        this._value = val;
        this.internalControl.setValue(val);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateOnChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        setTimeout(() => {
            if (isDisabled) {
                this.internalControl.disable();
            }
            else {
                this.internalControl.enable();
            }
        });
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        const /** @type {?} */ errors = c.errors;
        const /** @type {?} */ value = c.value;
        // console.log('form-base-class: validate()', { errors, value });
        this.internalControl.setValidators(c.validator);
        return !this.validationError
            ? null
            : {
                validationError: {
                    valid: false
                }
            };
    }
    /**
     * @param {?} inputValue
     * @return {?}
     */
    onChange(inputValue) {
        this.validationError = this.CheckValueIsValid();
        if (this.validationError) {
            this.propagateOnChange(this.value);
        }
        else {
            this.propagateOnChange(inputValue);
        }
    }
    /**
     * @return {?}
     */
    CheckValueIsValid() {
        return null;
    }
}
FormBase.decorators = [
    { type: Directive }
];
/** @nocollapse */
FormBase.ctorParameters = () => [];
FormBase.propDecorators = {
    formControlName: [{ type: Input }],
    placeholder: [{ type: Input }]
};
function FormBase_tsickle_Closure_declarations() {
    /** @type {?} */
    FormBase.prototype.internalControl;
    /** @type {?} */
    FormBase.prototype.autoCompleteObscureName;
    /** @type {?} */
    FormBase.prototype._destroyed;
    /** @type {?} */
    FormBase.prototype.disabled;
    /** @type {?} */
    FormBase.prototype.validationError;
    /** @type {?} */
    FormBase.prototype._value;
    /** @type {?} */
    FormBase.prototype.formControlName;
    /** @type {?} */
    FormBase.prototype.placeholder;
    /** @type {?} */
    FormBase.prototype.propagateOnChange;
    /** @type {?} */
    FormBase.prototype.onTouched;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
function FormFilesConfiguration() { }
function FormFilesConfiguration_tsickle_Closure_declarations() {
    /** @type {?} */
    FormFilesConfiguration.prototype.directory;
    /** @type {?|undefined} */
    FormFilesConfiguration.prototype.bucketname;
    /** @type {?} */
    FormFilesConfiguration.prototype.firebaseConfig;
    /** @type {?|undefined} */
    FormFilesConfiguration.prototype.maxFiles;
    /** @type {?|undefined} */
    FormFilesConfiguration.prototype.imageCompressionQuality;
    /** @type {?|undefined} */
    FormFilesConfiguration.prototype.imageCompressionMaxSize;
    /** @type {?|undefined} */
    FormFilesConfiguration.prototype.acceptedFiles;
}
class FormFileFirebaseComponent extends FormBase {
    /**
     * @param {?} ns
     */
    constructor(ns) {
        super();
        this.ns = ns;
        this.placeholder = 'upload here';
        this.config = {};
        // tslint:disable-next-line: no-output-on-prefix
        this.uploadStatusChanged = new EventEmitter();
        this.destroyed = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        let /** @type {?} */ app;
        const firebaseApp = this.initializeApp(this.config.firebaseConfig);
        if (firebaseApp.apps.length) {
            app = firebaseApp.apps[0];
        }
        else {
            app = firebaseApp;
        }
        this.storage = app.storage(this.currentBucketName());
        timer(0, 1000)
            .pipe(takeUntil(this.destroyed))
            .subscribe(() => {
                this.checkAllUploadsAreDone();
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
    checkAllUploadsAreDone() {
        const /** @type {?} */ allFiles = this.value;
        const /** @type {?} */ completeArray = allFiles
            .filter(f => !!f)
            .filter(f => !!f.value)
            .filter(f => !!f.value.props)
            .map(f => f.value.props.completed);
        const /** @type {?} */ haveAllFilesComplete = completeArray.reduce((previous, currentComplete) => previous && currentComplete, true);
        const /** @type {?} */ isStillUploading = !haveAllFilesComplete;
        this.uploadStatusChanged.emit(isStillUploading);
    }
    /**
     * @return {?}
     */
    get isMultiple() {
        return this.config && this.config.maxFiles !== 1;
    }
    /**
     * @return {?}
     */
    get maxReached() {
        return (this.config &&
            this.config.maxFiles &&
            this.value &&
            this.config.maxFiles === this.value.length);
    }
    /**
     * @return {?}
     */
    currentBucketName() {
        return (this.config.bucketname ||
            // tslint:disable-next-line: no-string-literal
            this.config.firebaseConfig['storageBucket']);
    }
    /**
     * @param {?} fileObject
     * @return {?}
     */
    clickRemoveTag(fileObject) {
        return __awaiter(this, void 0, void 0, function* () {
            this.ensureValueIsArray();
            this.value = this.value.filter(f => f.id !== fileObject.id);
            if (fileObject.bucket_path) {
                try {
                    yield this.storage.refFromURL(fileObject.bucket_path).delete();
                    console.log('form-files: clickRemoveTag() file deleted from storage', {
                        fileObject
                    });
                }
                catch (/** @type {?} */ error) {
                    console.log('form-files: clickRemoveTag() problem deleting file', error);
                }
            }
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFileChange(event) {
        if (event.target.files && event.target.files.length) {
            const /** @type {?} */ filesList = event.target.files;
            const /** @type {?} */ fileArray = Array.from(filesList);
            fileArray.map((file) => this.beginUploadTask(file));
        }
    }
    /**
     * @param {?} file
     * @return {?}
     */
    beginUploadTask(file) {
        return __awaiter(this, void 0, void 0, function* () {
            const /** @type {?} */ bucketPath = 'gs://' + this.currentBucketName();
            const /** @type {?} */ uniqueFileName = file.name;
            const /** @type {?} */ originalFileName = file.name;
            const /** @type {?} */ dir = this.config.directory;
            const /** @type {?} */ dirPath = `${TrimSlashes(bucketPath)}/${TrimSlashes(dir)}`;
            const /** @type {?} */ fullPath = `${TrimSlashes(dirPath)}/${uniqueFileName}`;
            console.log('beginUploadTask()', { fileData: file, bucketPath, fullPath });
            let /** @type {?} */ fileParsed;
            if (file.type === 'image/*') {
                fileParsed = yield this.parseAndCompress(file);
            }
            else {
                fileParsed = file;
            }
            yield this.addFile(uniqueFileName, originalFileName, fullPath);
            const /** @type {?} */ uploadTask = this.storage.refFromURL(fullPath).put(fileParsed);
            uploadTask.on(this.storage.TaskEvent.STATE_CHANGED, {
                next: snap => this.onNext(snap, fullPath),
                error: error => this.onError(error),
                complete: () => this.onComplete(fullPath, uniqueFileName, originalFileName)
            });
            this.destroyed.pipe(take(1)).subscribe(() => {
                uploadTask.cancel();
            });
        });
    }
    /**
     * @param {?} file
     * @return {?}
     */
    parseAndCompress(file) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.config.imageCompressionMaxSize &&
                !this.config.imageCompressionQuality) {
                return file;
            }
            const /** @type {?} */ maxWidth = this.config.imageCompressionMaxSize || 1800;
            const /** @type {?} */ maxQuality = this.config.imageCompressionQuality || 0.6;
            const /** @type {?} */ dataURL = yield blobToDataURL(file);
            const /** @type {?} */ newDataURL = yield downscaleImage(dataURL, maxWidth, maxQuality, 'image/jpeg');
            const /** @type {?} */ oldKb = this.getFileSizeKiloBytes(dataURL);
            const /** @type {?} */ newKb = this.getFileSizeKiloBytes(newDataURL);
            const /** @type {?} */ fileNew = dataURItoBlob(newDataURL);
            console.log(`app-tags-files.component: optimized image...
  --> old=${oldKb} kb
  --> new=${newKb} kb`);
            return fileNew;
        });
    }
    /**
     * @param {?} dataURL
     * @return {?}
     */
    getFileSizeKiloBytes(dataURL) {
        const /** @type {?} */ head = 'data:image/*;base64,';
        const /** @type {?} */ fileSizeBytes = Math.round(((dataURL.length - head.length) * 3) / 4);
        const /** @type {?} */ fileSizeKiloBytes = (fileSizeBytes / 1024).toFixed(0);
        return fileSizeKiloBytes;
    }
    /**
     * @param {?} snapshot
     * @param {?} fullPath
     * @return {?}
     */
    onNext(snapshot, fullPath) {
        return __awaiter(this, void 0, void 0, function* () {
            this.ensureValueIsArray();
            switch (snapshot.state) {
                case this.storage.TaskState.RUNNING: // or 'running'
                    // or 'running'
                    const /** @type {?} */ file = this.value.find(f => f.bucket_path === fullPath);
                    const /** @type {?} */ progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is running', {
                        file,
                        fullPath,
                        progress,
                        snapshot
                    });
                    file.value.props.progress = progress;
                    break;
            }
        });
    }
    /**
     * @param {?} error
     * @return {?}
     */
    onError(error) {
        this.ns.notify('storage/unauthorized', 'Error Uploading');
        console.error('onError(error)', { error }, error);
    }
    /**
     * @param {?} fullPath
     * @param {?} uniqueFileName
     * @param {?} originalFileName
     * @return {?}
     */
    onComplete(fullPath, uniqueFileName, originalFileName) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('onComplete()', {});
            const /** @type {?} */ ref = this.storage.refFromURL(fullPath);
            const /** @type {?} */ url = yield ref.getDownloadURL();
            const /** @type {?} */ isImage = isFileImage$1(originalFileName);
            this.ensureValueIsArray();
            const /** @type {?} */ file = this.value.find(f => f.id === uniqueFileName);
            file.id = url;
            if (isImage) {
                file.imageurl = url;
            }
            file.value.props.completed = true;
            this.writeValue(this.value);
        });
    }
    /**
     * @param {?} uniqueFileName
     * @param {?} originalFileName
     * @param {?} fullPath
     * @return {?}
     */
    addFile(uniqueFileName, originalFileName, fullPath) {
        const /** @type {?} */ fileIcon = getFileIcon(originalFileName);
        const /** @type {?} */ newFile = {
            id: uniqueFileName,
            fileicon: fileIcon,
            imageurl: null,
            bucket_path: fullPath,
            value: {
                name: originalFileName,
                props: {
                    thumb: null,
                    fileicon: fileIcon,
                    progress: 0,
                    completed: false
                }
            }
        };
        this.ensureValueIsArray();
        this.value.push(newFile);
    }
    /**
     * @return {?}
     */
    ensureValueIsArray() {
        if (!Array.isArray(this.value)) {
            this.writeValue([]);
        }
    }
}
FormFileFirebaseComponent.decorators = [
    {
        type: Component, args: [{
            // tslint:disable-next-line: component-selector
            selector: 'form-file-firebase',
            template: `
    <div>
      <label class="custom-file-upload">
        <input
          *ngIf="isMultiple"
          class="hidden"
          type="file"
          multiple
          [disabled]="disabled || maxReached"
          (change)="onFileChange($event)"
        />
        <input
          *ngIf="!isMultiple"
          class="hidden"
          type="file"
          [disabled]="disabled || maxReached"
          (change)="onFileChange($event)"
        />
        {{ placeholder }}
        <div class="max-files" *ngIf="maxReached && !disabled">
          Max Uploaded - Limit of {{ config.maxFiles }} file(s) reached. Remove
          files to change uploads
        </div>
      </label>
      <app-uploaded-files-list
        [disabled]="disabled"
        [uploadedFiles]="this.value"
        (clickRemoveTag)="this.clickRemoveTag($event)"
      >
      </app-uploaded-files-list>
    </div>
  `,
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => FormFileFirebaseComponent),
                    multi: true
                },
                {
                    provide: NG_VALIDATORS,
                    useExisting: forwardRef(() => FormFileFirebaseComponent),
                    multi: true
                }
            ],
            styles: [`
      .custom-file-upload {
        border: 4px dashed #ccc;
        display: inline-block;
        padding: 35px 0px;
        cursor: pointer;
        width: calc(100% - 8px);
        text-align: center;
        font-size: 1.5em;
        color: #777;
      }
      .hidden {
        display: none;
      }
      .max-files {
        font-size: 0.9em;
        color: orange;
        font-style: italic;
      }
    `]
        }]
    }
];
/** @nocollapse */
FormFileFirebaseComponent.ctorParameters = () => [
    { type: NotificationService }
];
FormFileFirebaseComponent.propDecorators = {
    placeholder: [{ type: Input }],
    config: [{ type: Input }],
    uploadStatusChanged: [{ type: Output }]
};
function FormFileFirebaseComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    FormFileFirebaseComponent.prototype.placeholder;
    /** @type {?} */
    FormFileFirebaseComponent.prototype.config;
    /** @type {?} */
    FormFileFirebaseComponent.prototype.uploadStatusChanged;
    /** @type {?} */
    FormFileFirebaseComponent.prototype.destroyed;
    /** @type {?} */
    FormFileFirebaseComponent.prototype.storage;
    /** @type {?} */
    FormFileFirebaseComponent.prototype.ns;
}
/**
 * @param {?} blob
 * @return {?}
 */
function blobToDataURL(blob) {
    return __awaiter(this, void 0, void 0, function* () {
        const /** @type {?} */ reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.onload = function (e) {
                resolve(e.target.result);
            };
            reader.onerror = function (error) {
                reject(error);
            };
            reader.readAsDataURL(blob);
        });
    });
}
/**
 * @param {?} dataURI
 * @return {?}
 */
function dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    const /** @type {?} */ byteString = atob(dataURI.split(',')[1]);
    // separate out the mime component
    const /** @type {?} */ mimeString = dataURI
        .split(',')[0]
        .split(':')[1]
        .split(';')[0];
    // write the bytes of the string to an ArrayBuffer
    const /** @type {?} */ ab = new ArrayBuffer(byteString.length);
    // create a view into the buffer
    const /** @type {?} */ ia = new Uint8Array(ab);
    // set the bytes of the buffer to the correct values
    for (let /** @type {?} */ i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    // write the ArrayBuffer to a blob, and you're done
    const /** @type {?} */ blob = new Blob([ab], { type: mimeString });
    return blob;
}
/**
 * @param {?} dataUrl
 * @param {?} newWidth
 * @param {?} imageQuality
 * @param {?} imageType
 * @param {?=} debug
 * @return {?}
 */
function downscaleImage(dataUrl, newWidth, imageQuality, imageType, debug) {
    return __awaiter(this, void 0, void 0, function* () {
        // Provide default values
        imageType = imageType || 'image/jpeg';
        imageQuality = imageQuality || 0.7;
        // Create a temporary image so that we can compute the height of the downscaled image.
        const /** @type {?} */ image = new Image();
        image.src = dataUrl;
        yield new Promise(resolve => {
            image.onload = () => {
                resolve();
            };
        });
        const /** @type {?} */ oldWidth = image.width;
        const /** @type {?} */ oldHeight = image.height;
        const /** @type {?} */ newHeight = Math.floor((oldHeight / oldWidth) * newWidth);
        // Create a temporary canvas to draw the downscaled image on.
        const /** @type {?} */ canvas = document.createElement('canvas');
        canvas.width = newWidth;
        canvas.height = newHeight;
        // Draw the downscaled image on the canvas and return the new data URL.
        const /** @type {?} */ ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, newWidth, newHeight);
        const /** @type {?} */ newDataUrl = canvas.toDataURL(imageType, imageQuality);
        if (debug) {
            console.log('quill.imageCompressor: downscaling image...', {
                args: {
                    dataUrl,
                    newWidth,
                    imageType,
                    imageQuality
                },
                image,
                oldWidth,
                oldHeight,
                newHeight,
                canvas,
                ctx,
                newDataUrl
            });
        }
        return newDataUrl;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FormFileUploadedFileListComponent {
    constructor() {
        this.uploadedFiles = [];
        this.clickRemoveTag = new EventEmitter();
    }
    /**
     * @param {?} file
     * @return {?}
     */
    getProgress(file) {
        const /** @type {?} */ isDone = this.isDone(file);
        if (isDone) {
            return 100;
        }
        if (file && file.value && file.value.props) {
            const /** @type {?} */ p = file.value.props.progress;
            return p * 0.95; // 95% until download completed
        }
        return 100;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    isDone(file) {
        if (file && file.value && file.value.props) {
            const /** @type {?} */ c = file.value.props.completed;
            return c;
        }
        return false;
    }
}
FormFileUploadedFileListComponent.decorators = [
    {
        type: Component, args: [{
            selector: 'app-uploaded-files-list',
            template: `
    <p *ngIf="uploadedFiles?.length">Uploaded files:</p>
    <div>
      <div *ngFor="let file of uploadedFiles">
        <div class="full-width flex-h">
          <mat-icon id="i-done" *ngIf="!disabled && isDone(file)"
            >done</mat-icon
          >
          <img class="file-icon" image [src]="file['fileicon']" />
          <a class="full-width flex-h has-ellipsis" [href]="file.id" target="_blank">
            <span class="has-ellipsis">{{ file.value.name }}</span>
            <mat-icon class="i-open">open_in_new</mat-icon>
            <img
              *ngIf="file['imageurl']"
              class="file-thumb"
              image
              [src]="file['imageurl']"
            />
          </a>
          <mat-icon
            *ngIf="!disabled"
            class="has-pointer"
            (click)="this.clickRemoveTag.emit(file)"
            >cancel</mat-icon
          >
        </div>
        <div class="full-width">
          <mat-progress-bar
            class="progress"
            mode="determinate"
            [value]="getProgress(file)"
          ></mat-progress-bar>
        </div>
      </div>
    </div>
  `,
            styles: [`
      .full-width {
        width: 100%;
      }
      .flex-h {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .has-pointer {
        cursor: pointer;
      }
      .file-link {
        display: flex;
        align-items: center;
      }
      .file-thumb,
      .file-icon {
        margin: 0px 10px;
        height: 30px;
      }
      .file-thumb {
        background-color: #ddd;
      }
      .i-open {
        font-size: 1em;
      }
      .has-ellipsis {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    `]
        }]
    }
];
FormFileUploadedFileListComponent.propDecorators = {
    disabled: [{ type: Input }],
    uploadedFiles: [{ type: Input }],
    clickRemoveTag: [{ type: Output }]
};
function FormFileUploadedFileListComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    FormFileUploadedFileListComponent.prototype.disabled;
    /** @type {?} */
    FormFileUploadedFileListComponent.prototype.uploadedFiles;
    /** @type {?} */
    FormFileUploadedFileListComponent.prototype.clickRemoveTag;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FormFileFirebaseModule {
}
FormFileFirebaseModule.decorators = [
    {
        type: NgModule, args: [{
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                MatProgressBarModule,
                MatInputModule,
                MatIconModule
            ],
            exports: [FormFileFirebaseComponent],
            declarations: [FormFileFirebaseComponent, FormFileUploadedFileListComponent],
            providers: []
        },]
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FileSystemRequestBuilder {
    /**
     * @param {?} http
     * @param {?} url
     * @param {?} logger
     * @param {?} LOG_ID
     */
    constructor(http, url, logger, LOG_ID) {
        this.http = http;
        this.url = url;
        this.logger = logger;
        this.LOG_ID = LOG_ID;
        this.options = {
            headers: {}
        };
    }
    /**
     * @param {?} body
     * @return {?}
     */
    AddBody(body) {
        this.body = Object.assign(Object.assign({}, this.body), body);
        return this;
    }
    /**
     * @template T
     * @param {?} body
     * @return {?}
     */
    PatchBody(body) {
        const /** @type {?} */ partBody = body;
        this.body = Object.assign(Object.assign({}, this.body), partBody);
        return this;
    }
    /**
     * @param {?} headers
     * @return {?}
     */
    PatchHeaders(headers) {
        this.options.headers = Object.assign(Object.assign({}, this.options.headers), headers);
        return this;
    }
    /**
     * @return {?}
     */
    MakeJson() {
        this.options['responseType'] = 'json';
        this.options.headers['Content-Type'] = 'application/json';
    }
    /**
     * @return {?}
     */
    makeRequestKey() {
        const /** @type {?} */ key = this.url + JSON.stringify(this.body || {});
        return key;
    }
    /**
     * @return {?}
     */
    POST() {
        return __awaiter(this, void 0, void 0, function* () {
            const /** @type {?} */ key = this.makeRequestKey();
            try {
                this.logger.info(this.LOG_ID + ' FileSystemRequestBuilder', {
                    url: this.url,
                    body: this.body,
                    options: this.options
                });
                const /** @type {?} */ response = yield this.http
                    .post(this.url, this.body, this.options)
                    .pipe(take(1))
                    .toPromise();
                return response;
            }
            catch (/** @type {?} */ apiErrorResponse) {
                console.error('API Post Error', { apiErrorResponse });
                if (apiErrorResponse.error && apiErrorResponse.error.errorDetail) {
                    const /** @type {?} */ detail = apiErrorResponse.error.errorDetail;
                    throw new Error('API Response: ' + detail);
                }
                throw new Error('API request failed, status:' + apiErrorResponse.statusText);
            }
        });
    }
}
function FileSystemRequestBuilder_tsickle_Closure_declarations() {
    /** @type {?} */
    FileSystemRequestBuilder.prototype.options;
    /** @type {?} */
    FileSystemRequestBuilder.prototype.body;
    /** @type {?} */
    FileSystemRequestBuilder.prototype.http;
    /** @type {?} */
    FileSystemRequestBuilder.prototype.url;
    /** @type {?} */
    FileSystemRequestBuilder.prototype.logger;
    /** @type {?} */
    FileSystemRequestBuilder.prototype.LOG_ID;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ServerFilesystemProviderService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BaseDialogComponent {
}
BaseDialogComponent.decorators = [
    {
        type: Component, args: [{
            selector: 'base-dialog',
            template: `
    <div class="dialog-wrapper">
      <div class="header sans-serif flex-col align-center">
        <ng-container *ngTemplateOutlet="header"> </ng-container>
      </div>
      <div class="body sans-serif flex-col align-center">
        <ng-container *ngTemplateOutlet="body"> </ng-container>
      </div>
      <div class="actions sans-serif flex-col align-center">
        <ng-container *ngTemplateOutlet="actions"> </ng-container>
      </div>
    </div>
  `,
            styles: [`
      .dialog-wrapper {
        max-height: 80vh;
        min-width: 400px;
      }
      .header {
      }
      .body {
        overflow-y: auto;
        max-height: 60vh;
      }
      .actions {
        max-height: 200px;
      }
    `, "h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
        }]
    }
];
BaseDialogComponent.propDecorators = {
    header: [{ type: Input }],
    body: [{ type: Input }],
    actions: [{ type: Input }]
};
function BaseDialogComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    BaseDialogComponent.prototype.header;
    /** @type {?} */
    BaseDialogComponent.prototype.body;
    /** @type {?} */
    BaseDialogComponent.prototype.actions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
function PermissionsDialogInterface() { }
function PermissionsDialogInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    PermissionsDialogInterface.prototype.files;
    /** @type {?} */
    PermissionsDialogInterface.prototype.config;
}
/**
 * @record
 */
function PermissionsDialogResponseInterface() { }
function PermissionsDialogResponseInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    PermissionsDialogResponseInterface.prototype.role;
    /** @type {?} */
    PermissionsDialogResponseInterface.prototype.entity;
    /** @type {?} */
    PermissionsDialogResponseInterface.prototype.files;
}
class AppDialogPermissionsSetComponent {
    /**
     * @param {?} logger
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(logger, dialogRef, data) {
        this.logger = logger;
        this.dialogRef = dialogRef;
        this.data = data;
        this.roleControl = new FormControl('READER');
        this.roleOptions = ['OWNER', 'WRITER', 'READER'];
        this.entityTypeControl = new FormControl('group');
        this.entityTypeOptions = ['user', 'group'];
        this.entityControl = new FormControl();
        this.destroyed = new Subject();
        this.items = data.files;
        const /** @type {?} */ config = data.config;
        this.$users = config.users;
        this.$groups = config.groups;
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
    get EntityControlLabel() {
        return this.entityTypeControl.value === 'user' ? 'User' : 'Group';
    }
    /**
     * @return {?}
     */
    get HasSelectedUser() {
        return this.entityTypeControl.value === 'user';
    }
    /**
     * @return {?}
     */
    onSubmit() {
        const /** @type {?} */ choosenValue = this.entityControl.value;
        const /** @type {?} */ entity = choosenValue.uid;
        const /** @type {?} */ response = {
            role: this.roleControl.value,
            entity: entity,
            files: this.data.files
        };
        this.logger.info('onSubmit', { entity, choosenValue, response });
        this.dialogRef.close(response);
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.dialogRef.close();
    }
}
AppDialogPermissionsSetComponent.decorators = [
    {
        type: Component, args: [{
            template: `
    <base-dialog
      [header]="headerTemplate"
      [body]="bodyTemplate"
      [actions]="actionsTemplate"
    >
      <ng-template #headerTemplate>
        <h2>Set Permissions</h2>
      </ng-template>
      <ng-template #bodyTemplate>
        <h5>Selected Items</h5>
        <ol>
          <li *ngFor="let file of items">
            {{ file.name }}
          </li>
        </ol>

        <mat-form-field class="full-width">
          <mat-select
            matInput
            [formControl]="entityTypeControl"
            placeholder="Type"
          >
            <mat-option
              *ngFor="let option of entityTypeOptions"
              [value]="option"
            >
              {{ option }}
            </mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field class="full-width" *ngIf="HasSelectedUser">
          <mat-select
            matInput
            [formControl]="entityControl"
            [placeholder]="EntityControlLabel"
          >
            <mat-option *ngFor="let entity of $users | async" [value]="entity">
              {{ entity.name }}
            </mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field class="full-width" *ngIf="!HasSelectedUser">
          <mat-select
            matInput
            [formControl]="entityControl"
            [placeholder]="EntityControlLabel"
          >
            <mat-option *ngFor="let entity of $groups | async" [value]="entity">
              {{ entity.name }}
            </mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field class="full-width">
          <mat-select
            matInput
            [formControl]="roleControl"
            placeholder="Permissions"
          >
            <mat-option *ngFor="let option of roleOptions" [value]="option">
              {{ option }}
            </mat-option>
          </mat-select>
        </mat-form-field>
      </ng-template>
      <ng-template #actionsTemplate>
        <btns-cancel-ok
          okIcon="done"
          okLabel="Set Permissions"
          (clickedCancel)="onCancel()"
          (clickedOk)="onSubmit()"
        >
        </btns-cancel-ok>
      </ng-template>
    </base-dialog>
  `,
            styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
        }]
    }
];
/** @nocollapse */
AppDialogPermissionsSetComponent.ctorParameters = () => [
    { type: LoggerService },
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
function AppDialogPermissionsSetComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppDialogPermissionsSetComponent.prototype.items;
    /** @type {?} */
    AppDialogPermissionsSetComponent.prototype.roleControl;
    /** @type {?} */
    AppDialogPermissionsSetComponent.prototype.roleOptions;
    /** @type {?} */
    AppDialogPermissionsSetComponent.prototype.entityTypeControl;
    /** @type {?} */
    AppDialogPermissionsSetComponent.prototype.entityTypeOptions;
    /** @type {?} */
    AppDialogPermissionsSetComponent.prototype.entityControl;
    /** @type {?} */
    AppDialogPermissionsSetComponent.prototype.$users;
    /** @type {?} */
    AppDialogPermissionsSetComponent.prototype.$groups;
    /** @type {?} */
    AppDialogPermissionsSetComponent.prototype.destroyed;
    /** @type {?} */
    AppDialogPermissionsSetComponent.prototype.logger;
    /** @type {?} */
    AppDialogPermissionsSetComponent.prototype.dialogRef;
    /** @type {?} */
    AppDialogPermissionsSetComponent.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AppDialogMyDetailsComponent {
    /**
     * @param {?} dialogRef
     */
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    /**
     * @return {?}
     */
    onSubmit() {
        this.dialogRef.close();
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.dialogRef.close();
    }
}
AppDialogMyDetailsComponent.decorators = [
    {
        type: Component, args: [{
            template: `
    <base-dialog
      [header]="headerTemplate"
      [body]="bodyTemplate"
      [actions]="actionsTemplate"
    >
      <ng-template #headerTemplate>
        <h2>My Details</h2>
      </ng-template>
      <ng-template #bodyTemplate>
        <div>
          The following details were
        </div>
      </ng-template>
      <ng-template #actionsTemplate>
        <btns-cancel-ok
          okIcon="done"
          okLabel="Create Folder"
          (clickedCancel)="onCancel()"
          (clickedOk)="onSubmit()"
        >
        </btns-cancel-ok>
      </ng-template>
    </base-dialog>
  `,
            styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
        }]
    }
];
/** @nocollapse */
AppDialogMyDetailsComponent.ctorParameters = () => [
    { type: MatDialogRef }
];
function AppDialogMyDetailsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppDialogMyDetailsComponent.prototype.dialogRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AppBtnsCancelOkComponent {
    constructor() {
        this.clickedOk = new EventEmitter();
        this.clickedCancel = new EventEmitter();
    }
}
AppBtnsCancelOkComponent.decorators = [
    {
        type: Component, args: [{
            // tslint:disable-next-line:component-selector
            selector: 'btns-cancel-ok',
            template: `
    <div class="full-width text-center">
      <button mat-raised-button (click)="clickedCancel.emit()">
        <mat-icon>clear</mat-icon>
        Cancel
      </button>
      <button
        mat-raised-button
        color="primary"
        (click)="clickedOk.emit()"
        [disabled]="okDisabled"
      >
        <mat-icon>{{ okIcon }}</mat-icon>
        {{ okLabel }}
      </button>
    </div>
  `,
            styles: [`
      button {
        margin: 5px;
      }
    `]
        }]
    }
];
AppBtnsCancelOkComponent.propDecorators = {
    okDisabled: [{ type: Input }],
    okIcon: [{ type: Input }],
    okLabel: [{ type: Input }],
    clickedOk: [{ type: Output }],
    clickedCancel: [{ type: Output }]
};
function AppBtnsCancelOkComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppBtnsCancelOkComponent.prototype.okDisabled;
    /** @type {?} */
    AppBtnsCancelOkComponent.prototype.okIcon;
    /** @type {?} */
    AppBtnsCancelOkComponent.prototype.okLabel;
    /** @type {?} */
    AppBtnsCancelOkComponent.prototype.clickedOk;
    /** @type {?} */
    AppBtnsCancelOkComponent.prototype.clickedCancel;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AppFileTableMiniFolderBrowserComponent {
    /**
     * @param {?} logger
     */
    constructor(logger) {
        this.logger = logger;
        this.selectedItem = new SelectionModel(false);
        this.enterDirectory = new EventEmitter();
        this.selectedDirectory = new EventEmitter();
        this.destroyed = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.selectedItem.changed.pipe(takeUntil(this.destroyed)).subscribe(() => {
                const /** @type {?} */ selectedDir = this.selectedItem.selected[0];
                this.selectedDirectory.emit(selectedDir);
            });
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed.next();
    }
    /**
     * @param {?} folderPath
     * @return {?}
     */
    onEnterFolder(folderPath) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info('onEnterFolder', { folderPath });
            this.enterDirectory.emit(folderPath);
            this.selectedDirectory.emit(folderPath);
        });
    }
}
AppFileTableMiniFolderBrowserComponent.decorators = [
    {
        type: Component, args: [{
            // tslint:disable-next-line:component-selector
            selector: 'app-file-table-mini-folder-browser',
            template: `
    <div class="full-width mini-browser-height">
      <actions-mini-browser [mainActions]="mainActions"> </actions-mini-browser>
      <h4 class="p5 m0 color-grey">Folders</h4>
      <div class="flex-col bg-white">
        <card-folder
          *ngFor="let folder of folders"
          [folder]="folder"
          [selectedItem]="selectedItem"
          (enterFolder)="onEnterFolder($event)"
        >
        </card-folder>
      </div>
    </div>
  `,
            providers: [
                ActionHandlersService,
                ClientFileSystemService,
                OptimisticFilesystemService
            ],
            styles: [`
      .mini-browser-height {
        min-height: 400px;
        max-height: 80vh;
      }
      .bg-white {
        background-color: #fff;
      }
    `, "h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
        }]
    }
];
/** @nocollapse */
AppFileTableMiniFolderBrowserComponent.ctorParameters = () => [
    { type: LoggerService }
];
AppFileTableMiniFolderBrowserComponent.propDecorators = {
    folders: [{ type: Input }],
    mainActions: [{ type: Input }],
    enterDirectory: [{ type: Output }],
    selectedDirectory: [{ type: Output }]
};
function AppFileTableMiniFolderBrowserComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppFileTableMiniFolderBrowserComponent.prototype.selectedItem;
    /** @type {?} */
    AppFileTableMiniFolderBrowserComponent.prototype.folders;
    /** @type {?} */
    AppFileTableMiniFolderBrowserComponent.prototype.mainActions;
    /** @type {?} */
    AppFileTableMiniFolderBrowserComponent.prototype.enterDirectory;
    /** @type {?} */
    AppFileTableMiniFolderBrowserComponent.prototype.selectedDirectory;
    /** @type {?} */
    AppFileTableMiniFolderBrowserComponent.prototype.destroyed;
    /** @type {?} */
    AppFileTableMiniFolderBrowserComponent.prototype.logger;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AppActionsMiniBrowserComponent {
}
AppActionsMiniBrowserComponent.decorators = [
    {
        type: Component, args: [{
            // tslint:disable-next-line:component-selector
            selector: 'actions-mini-browser',
            template: `
    <mat-toolbar color="primary" *ngIf="this.mainActions">
      <mat-toolbar-row class="top-toolbar">
        <span class="top-toolbar-label">
          Actions
        </span>
      </mat-toolbar-row>
      <mat-toolbar-row class="action-toolbar scroll-x">
        <div *ngFor="let action of mainActions">
          <button
            class="action has-pointer"
            mat-raised-button
            [color]="action.color"
            (click)="action.onClick(action)"
            [disabled]="action.$disabled | async"
          >
            <mat-icon inline="true">{{ action.icon }}</mat-icon>
            {{ action.label }}
          </button>
        </div>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
            styles: [`
      button.action {
        margin-right: 10px;
      }
    `, "h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
        }]
    }
];
AppActionsMiniBrowserComponent.propDecorators = {
    mainActions: [{ type: Input }]
};
function AppActionsMiniBrowserComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppActionsMiniBrowserComponent.prototype.mainActions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FileSizePipe {
    constructor() {
        this.units = [
            'bytes',
            'KB',
            'MB',
            'GB',
            'TB',
            'PB'
        ];
    }
    /**
     * @param {?} bytesInput
     * @param {?=} precision
     * @return {?}
     */
    transform(bytesInput, precision = 0) {
        let /** @type {?} */ bytes = +bytesInput;
        if (!isFinite(bytes)) {
            return '?';
        }
        let /** @type {?} */ unit = 0;
        while (bytes >= 1024) {
            bytes /= 1024;
            unit++;
        }
        return bytes.toFixed(+precision) + ' ' + this.units[unit];
    }
}
FileSizePipe.decorators = [
    { type: Pipe, args: [{ name: 'fileSize' },] }
];
function FileSizePipe_tsickle_Closure_declarations() {
    /** @type {?} */
    FileSizePipe.prototype.units;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FileSizeModule {
}
FileSizeModule.decorators = [
    {
        type: NgModule, args: [{
            imports: [CommonModule],
            exports: [FileSizePipe],
            declarations: [FileSizePipe],
            providers: [],
        },]
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CardFileComponent {
    /**
     * @return {?}
     */
    get isChecked() {
        return this.checkedItems.isSelected(this.file.fullPath);
    }
    /**
     * @return {?}
     */
    get isSelected() {
        return this.selectedItem.isSelected(this.file.fullPath);
    }
    /**
     * @return {?}
     */
    onSelect() {
        this.selectedItem.select(this.file.fullPath);
    }
    /**
     * @return {?}
     */
    onCheck() {
        this.checkedItems.select(this.file.fullPath);
    }
    /**
     * @return {?}
     */
    onUnCheck() {
        this.checkedItems.deselect(this.file.fullPath);
    }
}
CardFileComponent.decorators = [
    {
        type: Component, args: [{
            selector: 'card-file',
            template: `
    <div
      class="flex-row p5 space-between bg-grey-hover rounded"
      matTooltip="Click For Details"
      [class.bg-grey-light]="isChecked"
      [class.bg-grey-dark]="isSelected"
      (click)="onSelect()"
    >
      <div class="flex-row align-center">
        <mat-icon
          *ngIf="!isChecked"
          class="color-white color-grey-hover"
          (click)="onCheck()"
          >check_box_outline_blank</mat-icon
        >
        <mat-icon
          *ngIf="isChecked"
          class="color-black color-grey-hover"
          (click)="onUnCheck()"
          >check_box_outline</mat-icon
        >
        <img class="mr-10" width="30" [src]="file['icon']" />
        <div>
          <h5 class="m0 mb-5 has-ellipsis">{{ file.name }}</h5>
          <small class="m0 color-grey">{{ file.size | fileSize }}</small>
        </div>
      </div>
      <div class="flex-row align-center">
        <button
          mat-icon-button
          [matMenuTriggerFor]="menu"
          aria-label="Example icon-button with a menu"
        >
          <mat-icon>more_vert</mat-icon>
        </button>
      </div>
    </div>
    <mat-menu #menu="matMenu">
      <button
        mat-menu-item
        *ngFor="let action of actions"
        (click)="action.onClick(file)"
      >
        <mat-icon [color]="action.color">{{ action.icon }}</mat-icon>
        <span>{{ action.label }}</span>
      </button>
    </mat-menu>
  `,
            styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}", ``]
        }]
    }
];
CardFileComponent.propDecorators = {
    file: [{ type: Input }],
    actions: [{ type: Input }],
    checkedItems: [{ type: Input }],
    selectedItem: [{ type: Input }]
};
function CardFileComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CardFileComponent.prototype.file;
    /** @type {?} */
    CardFileComponent.prototype.actions;
    /** @type {?} */
    CardFileComponent.prototype.checkedItems;
    /** @type {?} */
    CardFileComponent.prototype.selectedItem;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CardFolderComponent {
    constructor() {
        this.enterFolder = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get isChecked() {
        if (!this.checkedItems) {
            return;
        }
        return this.checkedItems.isSelected(this.folder.fullPath);
    }
    /**
     * @return {?}
     */
    get isSelected() {
        return this.selectedItem.isSelected(this.folder.fullPath);
    }
    /**
     * @return {?}
     */
    onSelect() {
        this.selectedItem.select(this.folder.fullPath);
    }
    /**
     * @return {?}
     */
    onCheck() {
        this.checkedItems.select(this.folder.fullPath);
    }
    /**
     * @return {?}
     */
    onUnCheck() {
        this.checkedItems.deselect(this.folder.fullPath);
    }
    /**
     * @return {?}
     */
    onDoubleClick() {
        console.log('onDoubleClick!');
        this.enterFolder.emit(this.folder.fullPath);
    }
    /**
     * @param {?} folder
     * @return {?}
     */
    getFolderSize(folder) {
        if (folder.metaData) {
            let /** @type {?} */ path = this.config.folderSizePath;
            return path.split('.').reduce(function (p, prop) { return p[prop]; }, folder);
        }
        return folder.size;
    }
}
CardFolderComponent.decorators = [
    {
        type: Component, args: [{
            selector: 'card-folder',
            template: `
    <div
      class="flex-row p5 space-between bg-grey-hover rounded"
      matTooltip="Click For Details"
      [class.bg-grey-light]="isChecked"
      [class.bg-grey-dark]="isSelected"
      (click)="onSelect()"
      (dblclick)="onDoubleClick()"
    >
      <div class="flex-row align-center">
        <div *ngIf="checkedItems">
          <mat-icon
            *ngIf="!isChecked"
            class="has-pointer color-white color-grey-hover"
            (click)="onCheck()"
            >check_box_outline_blank</mat-icon
          >
          <mat-icon
            *ngIf="isChecked"
            class="has-pointer color-black color-grey-hover"
            (click)="onUnCheck()"
            >check_box_outline</mat-icon
          >
        </div>
        <img class="mr-10" width="30" [src]="folder['icon']" />
        <div>
          <h5 class="m0 mb-5 has-ellipsis">{{ folder.name }}</h5>
          <small *ngIf="config && config.folderSizePath" class="m0 color-grey">{{ getFolderSize(folder) | fileSize }}</small>
        </div>
      </div>
      <button
        *ngIf="actions"
        mat-icon-button
        [matMenuTriggerFor]="menu"
        aria-label="Example icon-button with a menu"
      >
        <mat-icon>more_vert</mat-icon>
      </button>
    </div>
    <mat-menu #menu="matMenu">
      <button
        mat-menu-item
        *ngFor="let action of actions"
        (click)="action.onClick(folder)"
      >
        <mat-icon [color]="action.color">{{ action.icon }}</mat-icon>
        <span>{{ action.label }}</span>
      </button>
    </mat-menu>
  `,
            styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}", ``]
        }]
    }
];
CardFolderComponent.propDecorators = {
    folder: [{ type: Input }],
    actions: [{ type: Input }],
    checkedItems: [{ type: Input }],
    selectedItem: [{ type: Input }],
    config: [{ type: Input }],
    enterFolder: [{ type: Output }]
};
function CardFolderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CardFolderComponent.prototype.folder;
    /** @type {?} */
    CardFolderComponent.prototype.actions;
    /** @type {?} */
    CardFolderComponent.prototype.checkedItems;
    /** @type {?} */
    CardFolderComponent.prototype.selectedItem;
    /** @type {?} */
    CardFolderComponent.prototype.config;
    /** @type {?} */
    CardFolderComponent.prototype.enterFolder;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AppFileTableComponent {
    constructor() {
        this.checkedItems = new SelectionModel(true);
        this.selectedItem = new SelectionModel(false);
        this.clearSelected = new Subject();
        this.checkedChanged = new EventEmitter();
        this.selectedChanged = new EventEmitter();
        this.enterFolder = new EventEmitter();
        this.destroyed = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.$triggerClearSelected
            .pipe(takeUntil(this.destroyed))
            .subscribe(() => this.checkedItems.clear());
        this.checkedItems.changed.pipe(takeUntil(this.destroyed)).subscribe(() => {
            const /** @type {?} */ folders = this.folders.filter(f => this.checkedItems.selected.includes(f.fullPath));
            const /** @type {?} */ files = this.files.filter(f => this.checkedItems.selected.includes(f.fullPath));
            const /** @type {?} */ checkedFiles = [...folders, ...files];
            this.checkedChanged.emit(checkedFiles);
        });
        this.selectedItem.changed.pipe(takeUntil(this.destroyed)).subscribe(() => {
            const [selectedFilePath] = this.selectedItem.selected;
            this.selectedChanged.emit(selectedFilePath);
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
    get areAllFoldersChecked() {
        const /** @type {?} */ currentSelection = this.checkedItems.selected;
        const /** @type {?} */ hasAllFoldersSelected = this.folders.every(f => currentSelection.includes(f.fullPath));
        return hasAllFoldersSelected;
    }
    /**
     * @return {?}
     */
    get areAllFilesChecked() {
        const /** @type {?} */ currentSelection = this.checkedItems.selected;
        const /** @type {?} */ hasAllFilesSelected = this.files.every(f => currentSelection.includes(f.fullPath));
        return hasAllFilesSelected;
    }
    /**
     * @return {?}
     */
    onCheckAllFolders() {
        this.checkedItems.select(...this.folders.map(f => f.fullPath));
    }
    /**
     * @return {?}
     */
    onUnCheckAllFolders() {
        this.checkedItems.deselect(...this.folders.map(f => f.fullPath));
    }
    /**
     * @return {?}
     */
    onCheckAllFiles() {
        this.checkedItems.select(...this.files.map(f => f.fullPath));
    }
    /**
     * @return {?}
     */
    onUnCheckAllFiles() {
        this.checkedItems.deselect(...this.files.map(f => f.fullPath));
    }
}
AppFileTableComponent.decorators = [
    {
        type: Component, args: [{
            // tslint:disable-next-line:component-selector
            selector: 'app-file-table',
            template: `
    <div class="files-viewer full-width">
      <div *ngIf="folders?.length" class="flex-row align-center">
        <mat-icon
          *ngIf="!areAllFoldersChecked"
          class="has-pointer color-white color-grey-hover"
          (click)="onCheckAllFolders()"
          >check_box_outline_blank</mat-icon
        >
        <mat-icon
          *ngIf="areAllFoldersChecked"
          class="has-pointer color-black color-grey-hover"
          (click)="onUnCheckAllFolders()"
          >check_box_outline</mat-icon
        >
        <h4 class="p5 m0 color-grey">Folders</h4>
      </div>
      <div class="flex-col">
        <card-folder
          *ngFor="let folder of folders"
          [folder]="folder"
          [config]="config"
          [checkedItems]="checkedItems"
          [selectedItem]="selectedItem"
          [actions]="folderActions"
          (enterFolder)="enterFolder.emit($event)"
        >
        </card-folder>
      </div>
      <div *ngIf="files?.length" class="flex-row align-center">
        <mat-icon
          *ngIf="!areAllFilesChecked"
          class="has-pointer color-white color-grey-hover"
          (click)="onCheckAllFiles()"
          >check_box_outline_blank</mat-icon
        >
        <mat-icon
          *ngIf="areAllFilesChecked"
          class="has-pointer color-black color-grey-hover"
          (click)="onUnCheckAllFiles()"
          >check_box_outline</mat-icon
        >
        <h4 class="p5 m0 color-grey">Files</h4>
      </div>
      <div class="flex-col">
        <card-file
          *ngFor="let file of files"
          [file]="file"
          [checkedItems]="checkedItems"
          [selectedItem]="selectedItem"
          [actions]="fileActions"
        >
        </card-file>
      </div>
      <div class="nothing-here" *ngIf="!files?.length && !folders.length">
        <p>
          No folders/files here
        </p>
      </div>
    </div>
  `,
            styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}", `
      .nothing-here {
        padding: 20px;
        padding-bottom: 100px;
        font-size: 1.2em;
        color: #777;
      }
      .files-viewer {
        min-height: 500px;
      }
    `]
        }]
    }
];
AppFileTableComponent.propDecorators = {
    $triggerClearSelected: [{ type: Input }],
    fileActions: [{ type: Input }],
    folderActions: [{ type: Input }],
    files: [{ type: Input }],
    folders: [{ type: Input }],
    config: [{ type: Input }],
    checkedChanged: [{ type: Output }],
    selectedChanged: [{ type: Output }],
    enterFolder: [{ type: Output }]
};
function AppFileTableComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppFileTableComponent.prototype.checkedItems;
    /** @type {?} */
    AppFileTableComponent.prototype.selectedItem;
    /** @type {?} */
    AppFileTableComponent.prototype.clearSelected;
    /** @type {?} */
    AppFileTableComponent.prototype.$triggerClearSelected;
    /** @type {?} */
    AppFileTableComponent.prototype.fileActions;
    /** @type {?} */
    AppFileTableComponent.prototype.folderActions;
    /** @type {?} */
    AppFileTableComponent.prototype.files;
    /** @type {?} */
    AppFileTableComponent.prototype.folders;
    /** @type {?} */
    AppFileTableComponent.prototype.config;
    /** @type {?} */
    AppFileTableComponent.prototype.checkedChanged;
    /** @type {?} */
    AppFileTableComponent.prototype.selectedChanged;
    /** @type {?} */
    AppFileTableComponent.prototype.enterFolder;
    /** @type {?} */
    AppFileTableComponent.prototype.destroyed;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AppFileTableModule {
}
AppFileTableModule.decorators = [
    {
        type: NgModule, args: [{
            imports: [
                CommonModule,
                FileSizeModule,
                MatMenuModule,
                MatIconModule,
                MatButtonModule,
                MatTooltipModule
            ],
            exports: [AppFileTableComponent, CardFolderComponent],
            declarations: [CardFileComponent, CardFolderComponent, AppFileTableComponent],
            providers: []
        },]
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FileTableMiniModule {
}
FileTableMiniModule.decorators = [
    {
        type: NgModule, args: [{
            imports: [
                CommonModule,
                FileSizeModule,
                MatButtonModule,
                MatIconModule,
                AppFileTableModule,
                MatToolbarModule
            ],
            exports: [AppFileTableMiniFolderBrowserComponent],
            declarations: [
                AppFileTableMiniFolderBrowserComponent,
                AppActionsMiniBrowserComponent
            ],
            providers: []
        },]
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
function Tag() { }
function Tag_tsickle_Closure_declarations() {
    /** @type {?} */
    Tag.prototype.id;
    /** @type {?} */
    Tag.prototype.name;
    /** @type {?|undefined} */
    Tag.prototype.isDisabled;
}
class AppControlTagMultipleComponent {
    constructor() {
        // Tag defaults
        this.visible = true;
        this.selectable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.removableTags = true;
        this.allowCustom = true;
        this.selectChoices$ = new Observable();
    }
    /**
     * @param {?} val
     * @param {?} name
     * @return {?}
     */
    checkExists(val, name) {
        if (val == null) {
            throw new Error(name + ' has not been defined');
        }
    }
    /**
     * @return {?}
     */
    hasRed() {
        const /** @type {?} */ isDirty = this.control.dirty;
        const /** @type {?} */ notValid = this.control.invalid;
        return isDirty && notValid;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.checkExists(this.control, 'this.group');
        this.checkExists(this.selectChoices$, 'this.selectChoices');
        this.selectInitial = this.control.value;
        this.autoCompleteObscureName = v4();
        this.selectChoices$ = this.selectChoices$.pipe(take(1));
        this.controlAutocomplete = new FormControl([], Validators.minLength(1));
        // When selectChoices resolves (once)
        this.selectChoices$.subscribe((selectChoicesArr) => {
            // set the tags filtering pipe
            this.filteredTags = this.controlAutocomplete.valueChanges.pipe(startWith(null), map((keyboardInput) => {
                console.log({ keyboardInput }, { selectChoicesArr });
                // Filter based on the input value
                if (!keyboardInput) {
                    return selectChoicesArr;
                }
                return selectChoicesArr.filter((tag) => {
                    if (!tag) {
                        return false;
                    }
                    const /** @type {?} */ val = tag.name + '';
                    if (!val.includes(keyboardInput)) {
                        return false;
                    }
                    return true;
                });
            }));
        });
        // Add the initial values if they're passed in
        this.controlAutocomplete.setValue(this.selectInitial);
        this.control.markAsUntouched();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @param {?} event
     * @return {?}
     */
    add(event) {
        if (!this.allowCustom) {
            return;
        }
        if (!this.matAutocomplete.isOpen) {
            const /** @type {?} */ input = event.input;
            const /** @type {?} */ value = event.value;
            // Add our Tag
            if ((value || '').trim()) {
                const /** @type {?} */ newTagId = v4();
                const /** @type {?} */ val = value.trim();
                const /** @type {?} */ newTag = {
                    id: newTagId,
                    name: val,
                };
                this.control.value.push(newTag);
            }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.updateFormValue();
        }
    }
    /**
     * @param {?} removeTag
     * @return {?}
     */
    removeTag(removeTag) {
        const /** @type {?} */ index = this.control.value.findIndex((t) => t.id === removeTag.id);
        if (index >= 0) {
            this.control.value.splice(index, 1);
        }
        this.updateFormValue();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    selectedTag(event) {
        console.log(event);
        const /** @type {?} */ newVal = event.option.value;
        let /** @type {?} */ canPush = true;
        this.control.value.forEach((item) => {
            canPush = item.id !== newVal.id && canPush;
        });
        if (canPush)
            this.control.value.push(newVal);
        this.tagInput.nativeElement.value = '';
        this.tagInput.nativeElement.blur();
        this.updateFormValue();
    }
    /**
     * @return {?}
     */
    updateFormValue() {
        this.controlAutocomplete.reset();
        this.control.setValue(this.control.value); // Required to trigger value changes
        this.control.markAsDirty();
    }
    /**
     * @param {?} tag
     * @return {?}
     */
    getLowerCase(tag) {
        if (!tag || !tag.name) {
            return null;
        }
        const /** @type {?} */ val = tag.name + '';
        return val.toLowerCase();
    }
}
AppControlTagMultipleComponent.decorators = [
    {
        type: Component, args: [{
            // tslint:disable-next-line:component-selector
            selector: 'app-control-tag-multiple',
            template: `
    <mat-form-field class="full-width" [class.formInvalid]="hasRed()">
      <mat-chip-list #chipList [disabled]="!removableTags" [multiple]="true">
        <mat-chip
          *ngFor="let tag of selectInitial"
          [selectable]="selectable"
          [removable]="removableTags"
          (removed)="removeTag(tag)"
        >
          {{ getLowerCase(tag) }}
          <mat-icon matChipRemove *ngIf="removableTags">cancel</mat-icon>
        </mat-chip>
        <input
          #tagInput
          [placeholder]="placeholder"
          [formControl]="controlAutocomplete"
          [matAutocomplete]="auto"
          [matChipInputFor]="chipList"
          [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
          [matChipInputAddOnBlur]="addOnBlur"
          (matChipInputTokenEnd)="add($event)"
          [name]="autoCompleteObscureName"
        />
      </mat-chip-list>
      <mat-icon
        matTooltip="Add many tags here, you can manage all your tags using the tag list editor in the settings menu"
        class="tag-icon"
        matSuffix
        matBadge="∞"
        >local_offer</mat-icon
      >
      <mat-autocomplete
        #auto="matAutocomplete"
        (optionSelected)="selectedTag($event)"
      >
        <mat-option
          *ngFor="let tag of filteredTags | async"
          [value]="tag"
          [disabled]="tag['isDisabled']"
        >
          {{ tag.name }}
        </mat-option>
      </mat-autocomplete>
    </mat-form-field>
  `,
            styles: [`
      .full-width {
        width: 100%;
      }
      .tag-icon {
        color: grey;
        right: 15px;
      }
      .formInvalid {
        background-color: #ff4f4f30 !important;
      }
      .mat-badge-active {
        font-size: 18px;
      }
      mat-icon span {
        background-color: transparent;
        right: 1px !important;
        top: 1px !important;
        color: white;
      }
    `]
        }]
    }
];
AppControlTagMultipleComponent.propDecorators = {
    tagInput: [{ type: ViewChild, args: ['tagInput', { static: false },] }],
    matAutocomplete: [{ type: ViewChild, args: ['auto', { static: false },] }],
    placeholder: [{ type: Input }],
    displayLowerCase: [{ type: Input }],
    control: [{ type: Input }],
    removableTags: [{ type: Input }],
    allowCustom: [{ type: Input }],
    selectChoices$: [{ type: Input }]
};
function AppControlTagMultipleComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.controlAutocomplete;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.visible;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.selectable;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.addOnBlur;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.separatorKeysCodes;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.filteredTags;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.tagInput;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.matAutocomplete;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.selectInitial;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.placeholder;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.displayLowerCase;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.control;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.removableTags;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.allowCustom;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.selectChoices$;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.autoCompleteObscureName;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TagsControlModule {
}
TagsControlModule.decorators = [
    {
        type: NgModule, args: [{
            imports: [
                CommonModule,
                ReactiveFormsModule,
                FormsModule,
                MatChipsModule,
                MatAutocompleteModule,
                MatIconModule,
                MatInputModule,
                MatFormFieldModule
            ],
            exports: [AppControlTagMultipleComponent],
            declarations: [AppControlTagMultipleComponent],
            providers: []
        },]
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ entryComponents = [
    BaseDialogComponent,
    AppDialogRenameComponent,
    AppDialogNewFolderComponent,
    AppDialogPermissionsSetComponent,
    AppDialogPermissionsSetObjectComponent,
    AppDialogCopyComponent,
    AppDialogUploadFilesComponent,
    AppDialogMyDetailsComponent,
    AppDialogConfirmationComponent
];
const /** @type {?} */ declarations = [...entryComponents, AppBtnsCancelOkComponent];
class NgxFilemanagerClientDialogsModule {
}
NgxFilemanagerClientDialogsModule.decorators = [
    {
        type: NgModule, args: [{
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                FormFileFirebaseModule,
                MatChipsModule,
                MatDialogModule,
                MatFormFieldModule,
                MatButtonModule,
                MatInputModule,
                MatIconModule,
                MatSelectModule,
                MatCardModule,
                FileTableMiniModule,
                TagsControlModule
            ],
            exports: [...entryComponents],
            entryComponents: [...entryComponents],
            declarations: [...declarations],
            providers: []
        },]
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Interceptor {
    constructor() {
        this.token = new Subject();
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {

        let /** @type {?} */ app;
        const firebaseApp = this.initializeApp(this.config.firebaseConfig);
        if (firebaseApp.apps.length) {
            app = firebaseApp.apps[0];
        }
        else {
            app = firebaseApp;
        }

        if (app.auth().currentUser) {
            return from(app.auth().currentUser.getIdToken().then(token => {
                return request.clone({
                    setHeaders: {
                        authorization: `${token}`
                    }
                });
            }).catch(err => {
                return request;
            })).pipe(switchMap(req => {
                return next.handle(req);
            }));
        }
        else {
            return next.handle(request);
        }
    }
}
Interceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
Interceptor.ctorParameters = () => [];
function Interceptor_tsickle_Closure_declarations() {
    /** @type {?} */
    Interceptor.prototype.token;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ declarations$1 = [
    LibMainFileManagerComponent,
    AppBreadCrumbsComponent,
    AppBulkActionsComponent,
    AppMainActionsComponent,
    FileDetailsComponent,
];
const ɵ0$2 = getBaseHref;
class NgxFilemanagerClientFirebaseModule {
}
NgxFilemanagerClientFirebaseModule.decorators = [
    {
        type: NgModule, args: [{
            declarations: declarations$1,
            imports: [
                CommonModule,
                FormsModule,
                HttpClientModule,
                ReactiveFormsModule,
                FileSizeModule,
                AppFileTableModule,
                FormFileFirebaseModule,
                NgxFilemanagerClientDialogsModule,
                MatAutocompleteModule,
                MatButtonModule,
                MatButtonToggleModule,
                MatCheckboxModule,
                MatChipsModule,
                MatCardModule,
                MatDialogModule,
                MatFormFieldModule,
                MatIconModule,
                MatInputModule,
                MatMenuModule,
                MatPaginatorModule,
                MatProgressBarModule,
                MatProgressSpinnerModule,
                MatSelectModule,
                MatSidenavModule,
                MatSnackBarModule,
                MatSortModule,
                MatTableModule,
                MatTabsModule,
                MatToolbarModule,
                MatTooltipModule,
                MatExpansionModule
            ],
            exports: [LibMainFileManagerComponent],
            providers: [
                ServerFilesystemProviderService,
                FilemanagerStatusService,
                NotificationService,
                {
                    provide: APP_BASE_HREF,
                    useFactory: ɵ0$2,
                    deps: [PlatformLocation]
                },
                { provide: LoggerService, useClass: ConsoleLoggerService },
                IconUrlResolverService,
                { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
            ]
        },]
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FileSystemStub {
    constructor() {
        this.fakeDelayMs = 1000;
        this.logger = new ConsoleLoggerService();
        this.files = stubFiles;
    }
    /**
     * @param {?} newDelay
     * @return {?}
     */
    setFakeDelay(newDelay) {
        this.fakeDelayMs = newDelay;
    }
    /**
     * @return {?}
     */
    fakeDelay() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                }, this.fakeDelayMs);
            });
        });
    }
    /**
     * @param {?} items
     * @param {?} isMatch
     * @return {?}
     */
    selectMatches(items, isMatch) {
        const /** @type {?} */ itemsSet = new Set(items);
        if (isMatch) {
            return this.files.filter(f => itemsSet.has(f.fullPath));
        }
        else {
            return this.files.filter(f => !itemsSet.has(f.fullPath));
        }
    }
    /**
     * @param {?} dirPath
     * @param {?} filePath
     * @return {?}
     */
    isInDirectory(dirPath, filePath) {
        try {
            const /** @type {?} */ relative = path__default.relative(dirPath, filePath);
            const /** @type {?} */ isSubdir = relative && !relative.startsWith('..') && !relative.includes('/');
            return isSubdir;
        }
        catch (/** @type {?} */ error) {
            this.logger.warn('isInDirectory error', { dirPath, filePath, error });
            return false;
        }
    }
    /**
     * @param {?} inputPath
     * @return {?}
     */
    List(inputPath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            const /** @type {?} */ folderPath = this.ensurePrefixSlash(this.ensureTrailingSlash(inputPath));
            const /** @type {?} */ matches = this.files.filter(k => this.isInDirectory(folderPath, k.fullPath));
            this.logger.info('List', { folderPath, files: this.files, matches });
            return {
                result: matches
            };
        });
    }
    /**
     * @param {?} item
     * @param {?} newItemPath
     * @return {?}
     */
    Rename(item, newItemPath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            const /** @type {?} */ baseName = path__default.basename(newItemPath);
            this.selectMatches([item], true).map(match => {
                match.name = baseName;
                match.fullPath = newItemPath;
            });
            return null;
        });
    }
    /**
     * @param {?} item
     * @param {?} newPath
     * @return {?}
     */
    Move(item, newPath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            this.selectMatches([item], true).map(match => {
                match.fullPath = newPath;
            });
            return null;
        });
    }
    /**
     * @param {?} singleFileName
     * @param {?} newPath
     * @return {?}
     */
    Copy(singleFileName, newPath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            this.selectMatches([singleFileName], true).map(match => {
                const /** @type {?} */ copy = Object.assign({}, match);
                copy.fullPath = newPath;
                this.files.push(copy);
            });
            return null;
        });
    }
    /**
     * @param {?} item
     * @param {?} content
     * @return {?}
     */
    Edit(item, content) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            this.selectMatches([item], true).map(match => {
                match['content'] = content;
            });
            return null;
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    Getcontent(item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            const /** @type {?} */ matches = this.selectMatches([item], true);
            return [...matches].pop()['content'];
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    GetSingle(item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            const /** @type {?} */ matches = this.selectMatches([item], true);
            const /** @type {?} */ file = [...matches].pop();
            return {
                result: {
                    file,
                    url: file.downloadUrl,
                    success: true
                }
            };
        });
    }
    /**
     * @param {?} newPath
     * @param {?=} disableNoClobber
     * @return {?}
     */
    CreateFolder(newPath, disableNoClobber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            if (disableNoClobber) {
                const /** @type {?} */ directoryPath = EnsureTrailingSlash(newPath);
                this.files.push(MakeDir(directoryPath));
            }
            else {
                this.recursivelyTryToCreateFolder(newPath);
            }
            return null;
        });
    }
    /**
     * @param {?} newPath
     * @return {?}
     */
    recursivelyTryToCreateFolder(newPath) {
        const /** @type {?} */ directoryPath = EnsureTrailingSlash(newPath);
        const /** @type {?} */ exists = !!this.selectMatches([directoryPath], true).length;
        if (!exists) {
            this.files.push(MakeDir(directoryPath));
            return;
        }
        const /** @type {?} */ newPathWith2 = Add2ToPathDir(directoryPath);
        return this.recursivelyTryToCreateFolder(newPathWith2);
    }
    /**
     * @param {?} item
     * @param {?} role
     * @param {?} entity
     * @param {?=} recursive
     * @return {?}
     */
    SetPermissions(item, role, entity, recursive) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.SetPermissionsMultiple([item], role, entity, recursive);
        });
    }
    /**
     * @param {?} items
     * @param {?} newPath
     * @return {?}
     */
    CopyMultiple(items, newPath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            this.selectMatches(items, true).map(f => {
                const /** @type {?} */ copy = Object.assign({}, f);
                copy.fullPath = path__default.join(newPath, f.name);
                this.files.push(copy);
            });
            return null;
        });
    }
    /**
     * @param {?} items
     * @param {?} newPath
     * @return {?}
     */
    MoveMultiple(items, newPath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            this.selectMatches(items, true).map(f => {
                f.fullPath = path__default.join(newPath, f.name);
            });
            return null;
        });
    }
    /**
     * @param {?} items
     * @param {?} role
     * @param {?} entity
     * @param {?=} recursive
     * @return {?}
     */
    SetPermissionsMultiple(items, role, entity, recursive) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            this.logger.info('file-system-stub: SetPermissionsMultiple', {
                items,
                files: this.files
            });
            return this.recursivelySetPermissions(items, role, entity, recursive);
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    Upload(item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            this.recursivelyTryToAddFile(item);
            return null;
        });
    }
    /**
     * @param {?} filePath
     * @return {?}
     */
    recursivelyTryToAddFile(filePath) {
        const /** @type {?} */ parsedFilePath = EnsureNoTrailingSlash(filePath);
        const /** @type {?} */ exists = !!this.selectMatches([parsedFilePath], true).length;
        if (!exists) {
            this.files.push(MakeFile(parsedFilePath));
            return;
        }
        const /** @type {?} */ newPathWith2 = Add2ToPath(parsedFilePath);
        return this.recursivelyTryToAddFile(newPathWith2);
    }
    /**
     * @param {?} items
     * @param {?} role
     * @param {?} entity
     * @param {?=} recursive
     * @return {?}
     */
    recursivelySetPermissions(items, role, entity, recursive) {
        const /** @type {?} */ matches = this.selectMatches(items, true);
        matches.map(item => {
            this.setSinglePermission(item, role, entity);
            const /** @type {?} */ isFolder = item.type === 'dir';
            if (recursive && isFolder) {
                this.recursivelySetPermissions([item.fullPath], role, entity, recursive);
            }
        });
        return null;
    }
    /**
     * @param {?} item
     * @param {?} role
     * @param {?} entity
     * @return {?}
     */
    setSinglePermission(item, role, entity) {
        let /** @type {?} */ list;
        if (role === 'READER') {
            list = item.permissions.readers;
        }
        if (role === 'WRITER') {
            list = item.permissions.writers;
        }
        const /** @type {?} */ inListAlready = list.includes(entity);
        if (!inListAlready) {
            list.push(entity);
        }
    }
    /**
     * @param {?} items
     * @param {?} permissionsObj
     * @param {?=} recursive
     * @return {?}
     */
    SetPermissionsObjectMultiple(items, permissionsObj, recursive) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            const /** @type {?} */ matches = this.selectMatches(items, true);
            this.logger.info('file-system-stub: SetPermissionsMultiple', {
                items,
                matches,
                permissionsObj
            });
            this.recursivelySetPermissionsObjects(items, permissionsObj, recursive);
            return null;
        });
    }
    /**
     * @param {?} items
     * @param {?} permissionsObj
     * @param {?=} recursive
     * @return {?}
     */
    recursivelySetPermissionsObjects(items, permissionsObj, recursive) {
        const /** @type {?} */ matches = this.selectMatches(items, true);
        matches.map(item => {
            item.permissions = permissionsObj;
            const /** @type {?} */ isFolder = item.type === 'dir';
            if (recursive && isFolder) {
                this.recursivelySetPermissionsObjects([item.fullPath], permissionsObj, recursive);
            }
        });
        return null;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    Remove(items) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            const /** @type {?} */ itemsSet = new Set(items);
            const /** @type {?} */ itemsNotDeleted = this.files.filter(f => !itemsSet.has(f.fullPath));
            this.files = itemsNotDeleted;
            return null;
        });
    }
    /**
     * @return {?}
     */
    CloneProvider() {
        return new FileSystemStub();
    }
    /**
     * @param {?} inputPath
     * @return {?}
     */
    ensureTrailingSlash(inputPath) {
        const /** @type {?} */ hasTrailing = inputPath.slice(-1) === '/';
        if (hasTrailing) {
            return inputPath;
        }
        return inputPath + '/';
    }
    /**
     * @param {?} inputPath
     * @return {?}
     */
    ensurePrefixSlash(inputPath) {
        const /** @type {?} */ hasPrefix = inputPath.slice(0, 1) === '/';
        if (hasPrefix) {
            return inputPath;
        }
        return '/' + inputPath;
    }
    /**
     * @param {?} currentPath
     * @return {?}
     */
    GetUploadApiUrl(currentPath) {
        return 'https://httpbin.org/post';
    }
    /**
     * @param {?} file
     * @return {?}
     */
    CreateDownloadLink(file) {
        return __awaiter(this, void 0, void 0, function* () {
            return 'https://upload.wikimedia.org/wikipedia/commons/8/85/Exponential_Function_%28Abs_Imag_Part_at_Infinity%29_Density.png';
        });
    }
}
function FileSystemStub_tsickle_Closure_declarations() {
    /** @type {?} */
    FileSystemStub.prototype.fakeDelayMs;
    /** @type {?} */
    FileSystemStub.prototype.logger;
    /** @type {?} */
    FileSystemStub.prototype.files;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { FileSystemStub, NgxFilemanagerClientFirebaseModule, ServerFilesystemProviderService, LibMainFileManagerComponent as ɵa, ActionHandlersService as ɵb, TagsControlModule as ɵba, AppControlTagMultipleComponent as ɵbb, BaseDialogComponent as ɵbc, AppDialogRenameComponent as ɵbd, AppDialogNewFolderComponent as ɵbe, AppDialogPermissionsSetComponent as ɵbf, AppDialogPermissionsSetObjectComponent as ɵbg, AppDialogCopyComponent as ɵbh, AppDialogUploadFilesComponent as ɵbi, AppDialogMyDetailsComponent as ɵbj, AppDialogConfirmationComponent as ɵbk, AppBtnsCancelOkComponent as ɵbl, getBaseHref as ɵbm, ConsoleLoggerService as ɵbn, Interceptor as ɵbo, ClientFileSystemService as ɵc, LoggerService as ɵd, IconUrlResolverService as ɵe, OptimisticFilesystemService as ɵf, NotificationService as ɵg, FilemanagerStatusService as ɵh, AppBreadCrumbsComponent as ɵi, AppBulkActionsComponent as ɵj, AppMainActionsComponent as ɵk, FileDetailsComponent as ɵl, FileSizeModule as ɵm, FileSizePipe as ɵn, AppFileTableModule as ɵo, AppFileTableComponent as ɵp, CardFolderComponent as ɵq, CardFileComponent as ɵr, FormFileFirebaseModule as ɵs, FormFileFirebaseComponent as ɵt, FormBase as ɵu, FormFileUploadedFileListComponent as ɵv, NgxFilemanagerClientDialogsModule as ɵw, FileTableMiniModule as ɵx, AppFileTableMiniFolderBrowserComponent as ɵy, AppActionsMiniBrowserComponent as ɵz };
//# sourceMappingURL=ngx-filemanager-client-firebase.js.map

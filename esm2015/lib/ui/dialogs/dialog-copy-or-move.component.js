/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { __awaiter } from "tslib";
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoggerService } from '../../services/logging/logger.service';
import path from 'path-browserify';
import { Subject, BehaviorSubject, combineLatest } from 'rxjs';
import { EnsureTrailingSlash } from '../../utils/path-helpers';
import { takeUntil, map } from 'rxjs/operators';
/**
 * @record
 */
export function CopyDialogInterface() { }
function CopyDialogInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    CopyDialogInterface.prototype.files;
    /** @type {?} */
    CopyDialogInterface.prototype.isCopy;
    /** @type {?} */
    CopyDialogInterface.prototype.actionHandler;
}
export class AppDialogCopyComponent {
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
        const /** @type {?} */ dirPath = EnsureTrailingSlash(path.dirname(inputPath));
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
    { type: Component, args: [{
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
            }] }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvcHktb3ItbW92ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvU2hpdmFuZy9QaSBTb2Z0d2FyZS9maWxlLW1hbmFnZXIvbmd4LWZpbGVtYW5hZ2VyL3Byb2plY3RzL25neC1maWxlbWFuYWdlci1jbGllbnQtZmlyZWJhc2Uvc3JjLyIsInNvdXJjZXMiOlsibGliL3VpL2RpYWxvZ3MvZGlhbG9nLWNvcHktb3ItbW92ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN0RSxPQUFPLElBQUksTUFBTSxpQkFBaUIsQ0FBQztBQUNuQyxPQUFPLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFL0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQXdFaEQsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7O0lBZ0JqQyxZQUNVLFFBQ0QsV0FDeUIsSUFBeUI7UUFGakQsV0FBTSxHQUFOLE1BQU07UUFDUCxjQUFTLEdBQVQsU0FBUztRQUNnQixTQUFJLEdBQUosSUFBSSxDQUFxQjtRQU4zRCxpQkFBWSxJQUFJLE9BQU8sRUFBRSxDQUFDO2dDQUNQLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQztRQU9sRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxD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LENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ25DLFNBQVM7WUFDVCxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDaEMsQ0FBQyxDQUFDOzs7Ozs7SUFHTCxnQkFBZ0IsQ0FBQyxhQUFxQjtRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQ3hEOzs7OztJQUVELG1CQUFtQixDQUFDLGFBQXFCO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQ25DOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUN2Qzs7OztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ3hCOzs7WUF2TUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9EVDt5QkFFQzs7OztLQUlDO2FBR0o7Ozs7WUE1RVEsYUFBYTtZQUZiLFlBQVk7NENBa0doQixNQUFNLFNBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IENvcmVUeXBlcyB9IGZyb20gJy4uLy4uLy4uL2NvcmUtdHlwZXMnO1xuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvZ2dpbmcvbG9nZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aC1icm93c2VyaWZ5JztcbmltcG9ydCB7IFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRW5zdXJlVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uL3V0aWxzL3BhdGgtaGVscGVycyc7XG5pbXBvcnQgeyBBY3Rpb25IYW5kbGVyc1NlcnZpY2UgfSBmcm9tICcuLi9tYWluLWZpbGUtbWFuYWdlci9hY3Rpb24taGFuZGxlcnMuc2VydmljZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1haW5BY3Rpb25EZWZpbml0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy10b29sYmFycy9NYWluQWN0aW9uRGVmaW5pdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29weURpYWxvZ0ludGVyZmFjZSB7XG4gIGZpbGVzOiBDb3JlVHlwZXMuUmVzRmlsZVtdO1xuICBpc0NvcHk6IGJvb2xlYW47XG4gIGFjdGlvbkhhbmRsZXI6IEFjdGlvbkhhbmRsZXJzU2VydmljZTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGJhc2UtZGlhbG9nXG4gICAgICAqbmdJZj1cInNyY0RpcmVjdG9yeVwiXG4gICAgICBbaGVhZGVyXT1cImhlYWRlclRlbXBsYXRlXCJcbiAgICAgIFtib2R5XT1cImJvZHlUZW1wbGF0ZVwiXG4gICAgICBbYWN0aW9uc109XCJhY3Rpb25zVGVtcGxhdGVcIlxuICAgID5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjaGVhZGVyVGVtcGxhdGU+XG4gICAgICAgIDxoMj57eyBPa0xhYmVsIH19IEl0ZW1zPC9oMj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctdGVtcGxhdGUgI2JvZHlUZW1wbGF0ZT5cbiAgICAgICAgPGg1IGNsYXNzPVwibXktNVwiPlNlbGVjdGVkIEl0ZW1zPC9oNT5cbiAgICAgICAgPG1hdC1jaGlwLWxpc3QgY2xhc3M9XCJtYi01XCI+XG4gICAgICAgICAgPG1hdC1jaGlwICpuZ0Zvcj1cImxldCBmaWxlIG9mIGl0ZW1zXCI+XG4gICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJmaWxlLnR5cGUgPT09ICdmaWxlJ1wiPmRlc2NyaXB0aW9uPC9tYXQtaWNvbj5cbiAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cImZpbGUudHlwZSAhPT0gJ2ZpbGUnXCI+Zm9sZGVyPC9tYXQtaWNvbj5cbiAgICAgICAgICAgIHt7IGZpbGUubmFtZSB9fVxuICAgICAgICAgIDwvbWF0LWNoaXA+XG4gICAgICAgIDwvbWF0LWNoaXAtbGlzdD5cbiAgICAgICAgPGg1IGNsYXNzPVwibXktNVwiPk5hdmlnYXRlIHRvIGRlc3RpbmF0aW9uIGZvbGRlcjwvaDU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmdWxsLXdpZHRoXCI+XG4gICAgICAgICAgPG1hdC1jYXJkIGNsYXNzPVwibS0xMCBiZy1ncmV5XCI+XG4gICAgICAgICAgICA8YXBwLWZpbGUtdGFibGUtbWluaS1mb2xkZXItYnJvd3NlclxuICAgICAgICAgICAgICBbZm9sZGVyc109XCJmb2xkZXJzXCJcbiAgICAgICAgICAgICAgW21haW5BY3Rpb25zXT1cIm1haW5BY3Rpb25zXCJcbiAgICAgICAgICAgICAgKGVudGVyRGlyZWN0b3J5KT1cIm9uRW50ZXJEaXJlY3RvcnkoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIChzZWxlY3RlZERpcmVjdG9yeSk9XCJvblNlbGVjdGVkRGlyZWN0b3J5KCRldmVudClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9hcHAtZmlsZS10YWJsZS1taW5pLWZvbGRlci1icm93c2VyPlxuICAgICAgICAgIDwvbWF0LWNhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjYWN0aW9uc1RlbXBsYXRlPlxuICAgICAgICA8aDUgY2xhc3M9XCJwNSBtMFwiICpuZ0lmPVwiIVNlbGVjdGVkRm9sZGVyXCI+Tm8gZm9sZGVyIHNlbGVjdGVkPC9oNT5cbiAgICAgICAgPGg1IGNsYXNzPVwicDUgbTBcIiAqbmdJZj1cIlNhbWVBc1NyY0ZvbGRlclwiPlxuICAgICAgICAgIENhbm5vdCBjb3B5IHRvIHRoZSBzYW1lIGZvbGRlclxuICAgICAgICA8L2g1PlxuICAgICAgICA8aDUgY2xhc3M9XCJwNSBtMFwiICpuZ0lmPVwiIURpc2FibGVDb3B5XCI+XG4gICAgICAgICAgV2lsbCBjb3B5IFNlbGVjdGVkIEl0ZW1zIHRvOlxuICAgICAgICAgIDxzdHJvbmcgKm5nSWY9XCIhY29weVRvUGF0aFJlbGF0aXZlXCI+Lzwvc3Ryb25nPlxuICAgICAgICAgIDxzdHJvbmc+e3sgY29weVRvUGF0aFJlbGF0aXZlIH19PC9zdHJvbmc+XG4gICAgICAgIDwvaDU+XG4gICAgICAgIDxidG5zLWNhbmNlbC1va1xuICAgICAgICAgIFtva0ljb25dPVwiT2tJY29uXCJcbiAgICAgICAgICBbb2tMYWJlbF09XCJPa0xhYmVsXCJcbiAgICAgICAgICBbb2tEaXNhYmxlZF09XCJEaXNhYmxlQ29weVwiXG4gICAgICAgICAgKGNsaWNrZWRDYW5jZWwpPVwib25DYW5jZWwoKVwiXG4gICAgICAgICAgKGNsaWNrZWRPayk9XCJvblN1Ym1pdCgpXCJcbiAgICAgICAgPlxuICAgICAgICA8L2J0bnMtY2FuY2VsLW9rPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Jhc2UtZGlhbG9nPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuYmctZ3JleSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICB9XG4gICAgYFxuICBdLFxuICBzdHlsZVVybHM6IFsnLi4vc2hhcmVkLXV0aWxpdHktc3R5bGVzLnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBEaWFsb2dDb3B5Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgY29weVRvUGF0aFJlbGF0aXZlOiBzdHJpbmc7XG4gIGNvcHlUb1BhdGg6IHN0cmluZztcbiAgc3JjRGlyZWN0b3J5OiBzdHJpbmc7XG4gIGl0ZW1zOiBDb3JlVHlwZXMuUmVzRmlsZVtdO1xuICBhY3Rpb25IYW5kbGVyczogQWN0aW9uSGFuZGxlcnNTZXJ2aWNlO1xuXG4gIG1haW5BY3Rpb25zOiBNYWluQWN0aW9uRGVmaW5pdGlvbltdO1xuICBmb2xkZXJzOiBDb3JlVHlwZXMuUmVzRmlsZVtdO1xuXG4gIE9rTGFiZWw6IHN0cmluZztcbiAgT2tJY29uOiBzdHJpbmc7XG5cbiAgZGVzdHJveWVkID0gbmV3IFN1YmplY3QoKTtcbiAgJGNvcHlQYXRoQ2hhbmdlZCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyU2VydmljZSxcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8QXBwRGlhbG9nQ29weUNvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBDb3B5RGlhbG9nSW50ZXJmYWNlXG4gICkge1xuICAgIHRoaXMuaW5pdCgpLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihlKSk7XG4gIH1cblxuICBhc3luYyBpbml0KCkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oJ2luaXRpYWxpemluZyBkaWFsb2c6JywgeyBkYXRhOiB0aGlzLmRhdGEgfSk7XG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuZGF0YS5maWxlcztcbiAgICBpZiAodGhpcy5kYXRhLmlzQ29weSkge1xuICAgICAgdGhpcy5Pa0xhYmVsID0gJ0NvcHknO1xuICAgICAgdGhpcy5Pa0ljb24gPSAnY29udGVudF9jb3B5JztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5Pa0xhYmVsID0gJ01vdmUnO1xuICAgICAgdGhpcy5Pa0ljb24gPSAnZm9yd2FyZCc7XG4gICAgfVxuICAgIHRoaXMuYWN0aW9uSGFuZGxlcnMgPSBhd2FpdCB0aGlzLmRhdGEuYWN0aW9uSGFuZGxlci5DbG9uZVByb3ZpZGVyKCk7XG4gICAgdGhpcy5tYWluQWN0aW9ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdIb21lJyxcbiAgICAgICAgaWNvbjogJ2hvbWUnLFxuICAgICAgICBvbkNsaWNrOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbygnQmFjayBjbGlja2VkJyk7XG4gICAgICAgICAgY29uc3Qgcm9vdFBhdGggPSB0aGlzLmFjdGlvbkhhbmRsZXJzLkdldFJvb3RQYXRoKCk7XG4gICAgICAgICAgYXdhaXQgdGhpcy5hY3Rpb25IYW5kbGVycy5Pbk5hdmlnYXRlVG8ocm9vdFBhdGgpO1xuICAgICAgICAgIHRoaXMub25TZWxlY3RlZERpcmVjdG9yeShyb290UGF0aCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMub25TZWxlY3RlZERpcmVjdG9yeShyb290UGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgICRkaXNhYmxlZDogY29tYmluZUxhdGVzdChbXG4gICAgICAgICAgdGhpcy5hY3Rpb25IYW5kbGVycy4kQ3VycmVudFBhdGhJc1Jvb3QsXG4gICAgICAgICAgdGhpcy4kY29weVBhdGhDaGFuZ2VkXG4gICAgICAgIF0pLnBpcGUoXG4gICAgICAgICAgbWFwKChbaXNSb290LCBjb3B5VG9dKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5EaXNhYmxlQ29weTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ0JhY2snLFxuICAgICAgICBpY29uOiAncmVwbHknLFxuICAgICAgICBvbkNsaWNrOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbygnQmFjayBjbGlja2VkJyk7XG4gICAgICAgICAgYXdhaXQgdGhpcy5hY3Rpb25IYW5kbGVycy5Pbk5hdmlnYXRlVG9QYXJlbnQoKTtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZERpcmVjdG9yeSA9IGF3YWl0IHRoaXMuYWN0aW9uSGFuZGxlcnMuR2V0Q3VycmVudFBhdGgoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vblNlbGVjdGVkRGlyZWN0b3J5KHNlbGVjdGVkRGlyZWN0b3J5KTtcbiAgICAgICAgfSxcbiAgICAgICAgJGRpc2FibGVkOiB0aGlzLmFjdGlvbkhhbmRsZXJzLiRDdXJyZW50UGF0aElzUm9vdFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdOZXcgRm9sZGVyJyxcbiAgICAgICAgaWNvbjogJ2NyZWF0ZV9uZXdfZm9sZGVyJyxcbiAgICAgICAgb25DbGljazogYXN5bmMgKCkgPT4gdGhpcy5hY3Rpb25IYW5kbGVycy5Pbk5ld0ZvbGRlckluQ3VycmVudERpcmVjdG9yeSgpXG4gICAgICB9XG4gICAgXTtcbiAgICB0aGlzLmFjdGlvbkhhbmRsZXJzLiRGaWxlc1dpdGhJY29uc1xuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoZmlsZUl0ZW1zID0+IHtcbiAgICAgICAgdGhpcy5mb2xkZXJzID0gZmlsZUl0ZW1zLmZpbHRlcihmID0+IGYudHlwZSA9PT0gJ2RpcicpO1xuICAgICAgfSk7XG5cbiAgICBjb25zdCBmaXJzdEZpbGUgPSBbLi4udGhpcy5pdGVtc10ucG9wKCk7XG4gICAgdGhpcy5zZXRTcmNEaXJlY3RvcnkoZmlyc3RGaWxlLmZ1bGxQYXRoKTtcbiAgICB0aGlzLnNldENvcHlUb1BhdGgodGhpcy5hY3Rpb25IYW5kbGVycy5HZXRSb290UGF0aCgpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveWVkLm5leHQoKTtcbiAgfVxuXG4gIGdldCBTZWxlY3RlZEZvbGRlcigpIHtcbiAgICByZXR1cm4gISF0aGlzLmNvcHlUb1BhdGg7XG4gIH1cbiAgZ2V0IFNhbWVBc1NyY0ZvbGRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb3B5VG9QYXRoID09PSB0aGlzLnNyY0RpcmVjdG9yeTtcbiAgfVxuICBnZXQgRGlzYWJsZUNvcHkoKSB7XG4gICAgcmV0dXJuICF0aGlzLlNlbGVjdGVkRm9sZGVyIHx8IHRoaXMuU2FtZUFzU3JjRm9sZGVyO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb3B5VG9QYXRoKGlucHV0UGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3QgZGlyUGF0aCA9IEVuc3VyZVRyYWlsaW5nU2xhc2goaW5wdXRQYXRoKTtcbiAgICB0aGlzLmNvcHlUb1BhdGggPSBkaXJQYXRoO1xuICAgIHRoaXMuJGNvcHlQYXRoQ2hhbmdlZC5uZXh0KGRpclBhdGgpO1xuICAgIHRoaXMuY29weVRvUGF0aFJlbGF0aXZlID0gdGhpcy5hY3Rpb25IYW5kbGVycy5Db252ZXJ0VG9SZWxhdGl2ZVBhdGgoXG4gICAgICBkaXJQYXRoXG4gICAgKTtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdzZXRDb3B5VG9QYXRoOicsIHtcbiAgICAgIGlucHV0UGF0aCxcbiAgICAgIGNvcHlUb1BhdGg6IHRoaXMuY29weVRvUGF0aCxcbiAgICAgIGNvcHlUb1BhdGhSZWxhdGl2ZTogdGhpcy5jb3B5VG9QYXRoUmVsYXRpdmVcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U3JjRGlyZWN0b3J5KGlucHV0UGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3QgZGlyUGF0aCA9IEVuc3VyZVRyYWlsaW5nU2xhc2gocGF0aC5kaXJuYW1lKGlucHV0UGF0aCkpO1xuICAgIHRoaXMuc3JjRGlyZWN0b3J5ID0gZGlyUGF0aDtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdzZXRTcmNEaXJlY3Rvcnk6Jywge1xuICAgICAgaW5wdXRQYXRoLFxuICAgICAgc3JjRGlyZWN0b3J5OiB0aGlzLnNyY0RpcmVjdG9yeVxuICAgIH0pO1xuICB9XG5cbiAgb25FbnRlckRpcmVjdG9yeShkaXJlY3RvcnlQYXRoOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdvbkVudGVyRGlyZWN0b3J5OicsIHsgZGlyZWN0b3J5UGF0aCB9KTtcbiAgICB0aGlzLnNldENvcHlUb1BhdGgoZGlyZWN0b3J5UGF0aCk7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9uSGFuZGxlcnMuT25OYXZpZ2F0ZVRvKGRpcmVjdG9yeVBhdGgpO1xuICB9XG5cbiAgb25TZWxlY3RlZERpcmVjdG9yeShkaXJlY3RvcnlQYXRoOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdvblNlbGVjdGVkRGlyZWN0b3J5OicsIHsgZGlyZWN0b3J5UGF0aCB9KTtcbiAgICB0aGlzLnNldENvcHlUb1BhdGgoZGlyZWN0b3J5UGF0aCk7XG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLmNvcHlUb1BhdGgpO1xuICB9XG4gIG9uQ2FuY2VsKCkge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==
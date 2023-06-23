/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { __awaiter } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { promiseDelay } from '../../utils/delayer';
import { LoggerService } from '../../services/logging/logger.service';
import { getFileIconName } from '../file-upload/form-file-firebase/file-icon.helper';
export class FileDetailsComponent {
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
        this.isImage = getFileIconName(this.file.name) === 'image';
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
        return getFileIconName(fileName);
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
    { type: Component, args: [{
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
            }] }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9TaGl2YW5nL1BpIFNvZnR3YXJlL2ZpbGUtbWFuYWdlci9uZ3gtZmlsZW1hbmFnZXIvcHJvamVjdHMvbmd4LWZpbGVtYW5hZ2VyLWNsaWVudC1maXJlYmFzZS9zcmMvIiwic291cmNlcyI6WyJsaWIvdWkvZmlsZS1kZXRhaWxzL2ZpbGUtZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBcUtyRixNQUFNLE9BQU8sb0JBQW9COzs7O0lBbUMvQixZQUFvQixNQUFxQjtRQUFyQixXQUFNLEdBQU4sTUFBTSxDQUFlOytCQVR2QixJQUFJLFlBQVksRUFBcUI7S0FTVjs7Ozs7SUEvQjdDLElBQ0ksSUFBSSxDQUFDLE9BQU87UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssT0FBTyxDQUFDO1FBQzNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3ZCOzs7O0lBQ0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ25COzs7OztJQW1CRCxXQUFXLENBQUMsUUFBZ0I7UUFDMUIsT0FBTyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDbEM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ3BCOzs7O0lBRUssV0FBVzs7WUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJO2dCQUNGLE1BQU0sWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ2xDLE9BQU87aUJBQ1I7Z0JBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JFO1lBQUMsd0JBQU8sS0FBSyxFQUFFO2dCQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDL0Q7O0tBQ0Y7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUMxQyxPQUFPO1NBQ1I7UUFDRCxJQUFJO1lBQ0YsdUJBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1lBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztZQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUM7WUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBQ2xDO1FBQUMsd0JBQU8sS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsOEJBQThCLEVBQUU7Z0JBQ2hELEtBQUs7Z0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLO2FBQ2pCLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7O0lBRUQsYUFBYSxDQUFDLE1BQXlCO1FBQ3JDLElBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNsQixxQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUE7WUFDckMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFTLENBQUMsRUFBQyxJQUFJLElBQUksT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUEsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzVFO1FBQ0QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFBO0tBQ25COzs7WUFsUEYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWdHVDt5QkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F3REM7YUFHSjs7OztZQXJLUSxhQUFhOzs7bUJBMEtuQixLQUFLO3lCQWVMLEtBQUs7cUJBRUwsS0FBSztzQkFFTCxLQUFLOzhCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsZVN5c3RlbVByb3ZpZGVyLCBDb3JlVHlwZXMgfSBmcm9tICcuLi8uLi8uLi9jb3JlLXR5cGVzJztcbmltcG9ydCB7IHByb21pc2VEZWxheSB9IGZyb20gJy4uLy4uL3V0aWxzL2RlbGF5ZXInO1xuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvZ2dpbmcvbG9nZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgZ2V0RmlsZUljb25OYW1lIH0gZnJvbSAnLi4vZmlsZS11cGxvYWQvZm9ybS1maWxlLWZpcmViYXNlL2ZpbGUtaWNvbi5oZWxwZXInO1xuaW1wb3J0IHsgRmlsZU1hbmFnZXJDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWd1cmF0aW9uL2NsaWVudC1jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IEZpbGVEZXRhaWxBY3Rpb25EZWZpbml0aW9uIH0gZnJvbSAnLi9GaWxlRGV0YWlsQWN0aW9uRGVmaW5pdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbmd4LWZpbGVtYW5hZ2VyLWZpbGUtZGV0YWlscycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImRldGFpbHMtY29udGFpbmVyIG1sLTVcIj5cbiAgICAgIDxkaXYgKm5nSWY9XCIhaGFzSW5wdXRcIiBjbGFzcz1cIm5vbmUtc2VsZWN0ZWRcIj5cbiAgICAgICAgPGgyPk5vIGl0ZW0gc2VsZWN0ZWQgLi4uPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cImhhc0lucHV0XCI+XG4gICAgICAgIDxtYXQtdG9vbGJhciBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICA8bWF0LXRvb2xiYXItcm93IGNsYXNzPVwidGl0bGUtcm93XCI+XG4gICAgICAgICAgICA8aDIgKm5nSWY9XCJpc0ZpbGVcIj5GaWxlIERldGFpbHM8L2gyPlxuICAgICAgICAgICAgPGgyICpuZ0lmPVwiIWlzRmlsZVwiPkRpcmVjdG9yeSBEZXRhaWxzPC9oMj5cbiAgICAgICAgICA8L21hdC10b29sYmFyLXJvdz5cbiAgICAgICAgICA8bWF0LXRvb2xiYXItcm93IGNsYXNzPVwiYWN0aW9uLXJvd1wiICpuZ0Zvcj1cImxldCBhY3Rpb24gb2YgYWN0aW9uc1wiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICAgICAgICBbbWF0VG9vbHRpcF09XCJhY3Rpb24udG9vbFRpcFwiXG4gICAgICAgICAgICAgIFtjb2xvcl09XCJhY3Rpb24uY29sb3JcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwiYWN0aW9uLm9uQ2xpY2soZmlsZSlcIlxuICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiYWN0aW9uLiRkaXNhYmxlZCB8IGFzeW5jXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG1hdC1pY29uPnt7IGFjdGlvbi5pY29uIH19PC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgPHNwYW4+e3sgYWN0aW9uLmxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9tYXQtdG9vbGJhci1yb3c+XG4gICAgICAgIDwvbWF0LXRvb2xiYXI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmxleC1yb3cgc3BhY2UtYmV0d2VlbiBhbGlnbi10b3AgbXQtNVwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDU+TmFtZTwvaDU+XG4gICAgICAgICAgICA8aDYgY2xhc3M9XCJmaWxlbmFtZVwiPnt7IGZpbGUubmFtZSB9fTwvaDY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGg1IGNsYXNzPVwibXQtNVwiPlNpemU8L2g1PlxuICAgICAgICA8aDYgKm5nSWY9XCJpc0ZpbGVcIj57eyBmaWxlLnNpemUgfCBmaWxlU2l6ZSB9fTwvaDY+XG4gICAgICAgIDxoNiAqbmdJZj1cIiFpc0ZpbGUmJmNvbmZpZy5mb2xkZXJTaXplUGF0aFwiPnt7IGdldEZvbGRlclNpemUoZmlsZSkgfCBmaWxlU2l6ZSB9fTwvaDY+XG4gICAgICAgIDxoNSBjbGFzcz1cIm10LTVcIj5EYXRlPC9oNT5cbiAgICAgICAgPGg2Pnt7IGZpbGUuZGF0ZSB8IGRhdGU6ICdzaG9ydCcgfX08L2g2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImZsZXgtcm93IHNwYWNlLWJldHdlZW4gYWxpZ24tdG9wIG10LTVcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg1PlBlcm1pc3Npb25zPC9oNT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0xMFwiPlxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwicmVhZGVycz8ubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgPGg2PldobyBjYW4gc2VlIHRoaXM8L2g2PlxuICAgICAgICAgICAgICAgIDxtYXQtY2hpcC1saXN0PlxuICAgICAgICAgICAgICAgICAgPG1hdC1jaGlwICpuZ0Zvcj1cImxldCBlbnRpdHkgb2YgcmVhZGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+cGVvcGxlPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgZW50aXR5IH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9tYXQtY2hpcD5cbiAgICAgICAgICAgICAgICA8L21hdC1jaGlwLWxpc3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY29uZmlnPy5zaG93V3JpdGVycyAmJiB3cml0ZXJzPy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICA8aDY+V2hvIGNhbiBlZGl0IHRoaXM8L2g2PlxuICAgICAgICAgICAgICAgIDxtYXQtY2hpcC1saXN0PlxuICAgICAgICAgICAgICAgICAgPG1hdC1jaGlwICpuZ0Zvcj1cImxldCBlbnRpdHkgb2Ygd3JpdGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+cGVvcGxlPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgZW50aXR5IH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9tYXQtY2hpcD5cbiAgICAgICAgICAgICAgICA8L21hdC1jaGlwLWxpc3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY29uZmlnPy5zaG93T3RoZXJzICYmIG90aGVyc1wiPlxuICAgICAgICAgICAgICAgIDxoNj5FdmVyeW9uZSBlbHNlIGNhbjwvaDY+XG4gICAgICAgICAgICAgICAgPG1hdC1jaGlwLWxpc3Q+XG4gICAgICAgICAgICAgICAgICA8bWF0LWNoaXA+XG4gICAgICAgICAgICAgICAgICAgIHt7IG90aGVycyB9fVxuICAgICAgICAgICAgICAgICAgPC9tYXQtY2hpcD5cbiAgICAgICAgICAgICAgICA8L21hdC1jaGlwLWxpc3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGg1IGNsYXNzPVwibXQtNVwiPkZ1bGwgUGF0aDwvaDU+XG4gICAgICAgIDxoNj57eyBmaWxlLmZ1bGxQYXRoIH19PC9oNj5cbiAgICAgICAgPGg1IGNsYXNzPVwibXQtNVwiPlR5cGU8L2g1PlxuICAgICAgICA8aDYgKm5nSWY9XCIhaXNGaWxlXCI+RGlyZWN0b3J5PC9oNj5cbiAgICAgICAgPGg2ICpuZ0lmPVwiaXNGaWxlXCIgY2xhc3M9XCJjYXBpdGFsaXplIFwiPlxuICAgICAgICAgIHt7IGdldEZpbGVUeXBlKGZpbGUubmFtZSkgfX1cbiAgICAgICAgPC9oNj5cbiAgICAgICAgPGRpdiAqbmdJZj1cImlzRmlsZVwiIGNsYXNzPVwiZmxleC1yb3cgc3BhY2UtYmV0d2VlbiBhbGlnbi10b3AgbXQtNVwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDU+RG93bmxvYWQ8L2g1PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImlzSW1hZ2VcIiBjbGFzcz1cInByZXZpZXdcIj5cbiAgICAgICAgICAgICAgPGk+SW1hZ2UgUHJldmlldzwvaT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiaGFzLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJ0aGlzLmNsaWNrZWREb3dubG9hZC5lbWl0KGZpbGUpXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWcgKm5nSWY9XCJpbWFnZVVybFwiIFtzcmNdPVwiaW1hZ2VVcmxcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFpc0ltYWdlXCI+XG4gICAgICAgICAgICAgIDxoNiBjbGFzcz1cIm5vLXByZXZpZXctdGV4dFwiPlxuICAgICAgICAgICAgICAgIE5vIHByZXZpZXcgYXZhaWxhYmxlXG4gICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgLmZpbGVuYW1lIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgIH1cbiAgICAgIC5ub25lLXNlbGVjdGVkIHtcbiAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgfVxuICAgICAgLm1iLTEwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICAgIC5tdC01IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIH1cbiAgICAgIC5tbC01IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgIH1cbiAgICAgIC5uby1wcmV2aWV3LXRleHQge1xuICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgZm9udC1kZWNvcmF0aW9uOiBpdGFsaWM7XG4gICAgICB9XG4gICAgICBoNSB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBjb2xvcjogIzYxNjE2MTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIH1cbiAgICAgIGg2IHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICB9XG4gICAgICBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgfVxuICAgICAgLnByZXZpZXcge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xuICAgICAgfVxuICAgICAgLnRpdGxlLXJvdyB7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICB9XG4gICAgICAuYWN0aW9uLXJvdyB7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICB9XG4gICAgICAuYWN0aW9uLXJvdzpsYXN0LWNoaWxkIHtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgfVxuICAgIGBcbiAgXSxcbiAgc3R5bGVVcmxzOiBbJy4uL3NoYXJlZC11dGlsaXR5LXN0eWxlcy5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmlsZURldGFpbHNDb21wb25lbnQge1xuICBpbWFnZVVybDogc3RyaW5nO1xuXG4gIF9maWxlOiBDb3JlVHlwZXMuUmVzRmlsZTtcbiAgQElucHV0KClcbiAgc2V0IGZpbGUobmV3RmlsZSkge1xuICAgIHRoaXMuX2ZpbGUgPSBuZXdGaWxlO1xuICAgIGlmICghbmV3RmlsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdmaWxlLWRldGFpbHM6IHNldCBmaWxlJywgeyBuZXdGaWxlIH0pO1xuICAgIHRoaXMuaXNGaWxlID0gdGhpcy5maWxlLnR5cGUgPT09ICdmaWxlJztcbiAgICB0aGlzLmlzSW1hZ2UgPSBnZXRGaWxlSWNvbk5hbWUodGhpcy5maWxlLm5hbWUpID09PSAnaW1hZ2UnO1xuICAgIHRoaXMuc2V0SW1hZ2VVcmwoKS5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xuICAgIHRoaXMuc2V0UGVybWlzc2lvbnMoKTtcbiAgfVxuICBnZXQgZmlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZTtcbiAgfVxuICBASW5wdXQoKVxuICBmaWxlU3lzdGVtOiBGaWxlU3lzdGVtUHJvdmlkZXI7XG4gIEBJbnB1dCgpXG4gIGNvbmZpZzogRmlsZU1hbmFnZXJDb25maWc7XG4gIEBJbnB1dCgpXG4gIGFjdGlvbnM6IEZpbGVEZXRhaWxBY3Rpb25EZWZpbml0aW9uW107XG4gIEBPdXRwdXQoKVxuICBjbGlja2VkRG93bmxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyPENvcmVUeXBlcy5SZXNGaWxlPigpO1xuXG4gIG90aGVyczogc3RyaW5nO1xuICB3cml0ZXJzOiBDb3JlVHlwZXMuRmlsZVBlcm1pc3Npb25FbnRpdHlbXTtcbiAgcmVhZGVyczogQ29yZVR5cGVzLkZpbGVQZXJtaXNzaW9uRW50aXR5W107XG5cbiAgaXNGaWxlOiBib29sZWFuO1xuICBpc0ltYWdlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlKSB7fVxuXG4gIGdldEZpbGVUeXBlKGZpbGVOYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gZ2V0RmlsZUljb25OYW1lKGZpbGVOYW1lKTtcbiAgfVxuXG4gIGdldCBoYXNJbnB1dCgpIHtcbiAgICByZXR1cm4gISF0aGlzLmZpbGU7XG4gIH1cblxuICBhc3luYyBzZXRJbWFnZVVybCgpIHtcbiAgICB0aGlzLmltYWdlVXJsID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcHJvbWlzZURlbGF5KDMwMCk7XG4gICAgICBpZiAoIXRoaXMuaGFzSW5wdXQgfHwgIXRoaXMuaXNGaWxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW1hZ2VVcmwgPSBhd2FpdCB0aGlzLmZpbGVTeXN0ZW0uQ3JlYXRlRG93bmxvYWRMaW5rKHRoaXMuZmlsZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKCdFcnJvciBzZXR0aW5nIEltYWdlVXJsJywgeyBlcnJvciB9LCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgc2V0UGVybWlzc2lvbnMoKSB7XG4gICAgaWYgKCF0aGlzLl9maWxlIHx8ICF0aGlzLl9maWxlLnBlcm1pc3Npb25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBwZXJtaXNzaW9ucyA9IHRoaXMuX2ZpbGUucGVybWlzc2lvbnM7XG4gICAgICB0aGlzLnJlYWRlcnMgPSBwZXJtaXNzaW9ucy5yZWFkZXJzO1xuICAgICAgdGhpcy53cml0ZXJzID0gcGVybWlzc2lvbnMud3JpdGVycztcbiAgICAgIHRoaXMub3RoZXJzID0gcGVybWlzc2lvbnMub3RoZXJzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmxvZ2dlci5lcnJvcignZmlsZS1kZXRhaWxzOiBzZXRQZXJtaXNzaW9ucycsIHtcbiAgICAgICAgZXJyb3IsXG4gICAgICAgIGZpbGU6IHRoaXMuX2ZpbGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldEZvbGRlclNpemUoZm9sZGVyOiBDb3JlVHlwZXMuUmVzRmlsZSkge1xuICAgIGlmKGZvbGRlci5tZXRhRGF0YSkge1xuICAgICAgbGV0IHBhdGggPSB0aGlzLmNvbmZpZy5mb2xkZXJTaXplUGF0aFxuICAgICAgcmV0dXJuIHBhdGguc3BsaXQoJy4nKS5yZWR1Y2UoZnVuY3Rpb24ocCxwcm9wKSB7IHJldHVybiBwW3Byb3BdIH0sIGZvbGRlcik7XG4gICAgfVxuICAgIHJldHVybiBmb2xkZXIuc2l6ZVxuICB9XG59XG4iXX0=
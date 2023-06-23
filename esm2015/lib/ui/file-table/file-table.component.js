/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { takeUntil } from 'rxjs/operators';
export class AppFileTableComponent {
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
    { type: Component, args: [{
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
            }] }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvU2hpdmFuZy9QaSBTb2Z0d2FyZS9maWxlLW1hbmFnZXIvbmd4LWZpbGVtYW5hZ2VyL3Byb2plY3RzL25neC1maWxlbWFuYWdlci1jbGllbnQtZmlyZWJhc2Uvc3JjLyIsInNvdXJjZXMiOlsibGliL3VpL2ZpbGUtdGFibGUvZmlsZS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLE1BQU0sRUFDTixZQUFZLEVBRWIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQW1GM0MsTUFBTSxPQUFPLHFCQUFxQjs7NEJBQ2pCLElBQUksY0FBYyxDQUFTLElBQUksQ0FBQzs0QkFDaEMsSUFBSSxjQUFjLENBQVMsS0FBSyxDQUFDO1FBRWhELHFCQUFnQixJQUFJLE9BQU8sRUFBRSxDQUFDOzhCQWViLElBQUksWUFBWSxFQUF1QjsrQkFFdEMsSUFBSSxZQUFZLEVBQVU7MkJBRTlCLElBQUksWUFBWSxFQUFVO3lCQUVwQixJQUFJLE9BQU8sRUFBRTs7Ozs7SUFFakMsUUFBUTtRQUNOLElBQUksQ0FBQyxxQkFBcUI7YUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0IsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMs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QUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0RFQ7Z3hDQUdDOzs7Ozs7Ozs7O0tBVUM7YUFFSjs7O29DQU9FLEtBQUs7MEJBRUwsS0FBSzs0QkFFTCxLQUFLO29CQUVMLEtBQUs7c0JBRUwsS0FBSztxQkFFTCxLQUFLOzZCQUVMLE1BQU07OEJBRU4sTUFBTTswQkFFTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZVR5cGVzIH0gZnJvbSAnLi4vLi4vLi4vY29yZS10eXBlcyc7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTZWxlY3Rpb25Nb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBGaWxlQWN0aW9uRGVmaW5pdGlvbiB9IGZyb20gJy4vRmlsZUFjdGlvbkRlZmluaXRpb24nO1xuaW1wb3J0IHsgRmlsZU1hbmFnZXJDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWd1cmF0aW9uL2NsaWVudC1jb25maWd1cmF0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdhcHAtZmlsZS10YWJsZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImZpbGVzLXZpZXdlciBmdWxsLXdpZHRoXCI+XG4gICAgICA8ZGl2ICpuZ0lmPVwiZm9sZGVycz8ubGVuZ3RoXCIgY2xhc3M9XCJmbGV4LXJvdyBhbGlnbi1jZW50ZXJcIj5cbiAgICAgICAgPG1hdC1pY29uXG4gICAgICAgICAgKm5nSWY9XCIhYXJlQWxsRm9sZGVyc0NoZWNrZWRcIlxuICAgICAgICAgIGNsYXNzPVwiaGFzLXBvaW50ZXIgY29sb3Itd2hpdGUgY29sb3ItZ3JleS1ob3ZlclwiXG4gICAgICAgICAgKGNsaWNrKT1cIm9uQ2hlY2tBbGxGb2xkZXJzKClcIlxuICAgICAgICAgID5jaGVja19ib3hfb3V0bGluZV9ibGFuazwvbWF0LWljb25cbiAgICAgICAgPlxuICAgICAgICA8bWF0LWljb25cbiAgICAgICAgICAqbmdJZj1cImFyZUFsbEZvbGRlcnNDaGVja2VkXCJcbiAgICAgICAgICBjbGFzcz1cImhhcy1wb2ludGVyIGNvbG9yLWJsYWNrIGNvbG9yLWdyZXktaG92ZXJcIlxuICAgICAgICAgIChjbGljayk9XCJvblVuQ2hlY2tBbGxGb2xkZXJzKClcIlxuICAgICAgICAgID5jaGVja19ib3hfb3V0bGluZTwvbWF0LWljb25cbiAgICAgICAgPlxuICAgICAgICA8aDQgY2xhc3M9XCJwNSBtMCBjb2xvci1ncmV5XCI+Rm9sZGVyczwvaDQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWNvbFwiPlxuICAgICAgICA8Y2FyZC1mb2xkZXJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgZm9sZGVyIG9mIGZvbGRlcnNcIlxuICAgICAgICAgIFtmb2xkZXJdPVwiZm9sZGVyXCJcbiAgICAgICAgICBbY29uZmlnXT1cImNvbmZpZ1wiXG4gICAgICAgICAgW2NoZWNrZWRJdGVtc109XCJjaGVja2VkSXRlbXNcIlxuICAgICAgICAgIFtzZWxlY3RlZEl0ZW1dPVwic2VsZWN0ZWRJdGVtXCJcbiAgICAgICAgICBbYWN0aW9uc109XCJmb2xkZXJBY3Rpb25zXCJcbiAgICAgICAgICAoZW50ZXJGb2xkZXIpPVwiZW50ZXJGb2xkZXIuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgPlxuICAgICAgICA8L2NhcmQtZm9sZGVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2ICpuZ0lmPVwiZmlsZXM/Lmxlbmd0aFwiIGNsYXNzPVwiZmxleC1yb3cgYWxpZ24tY2VudGVyXCI+XG4gICAgICAgIDxtYXQtaWNvblxuICAgICAgICAgICpuZ0lmPVwiIWFyZUFsbEZpbGVzQ2hlY2tlZFwiXG4gICAgICAgICAgY2xhc3M9XCJoYXMtcG9pbnRlciBjb2xvci13aGl0ZSBjb2xvci1ncmV5LWhvdmVyXCJcbiAgICAgICAgICAoY2xpY2spPVwib25DaGVja0FsbEZpbGVzKClcIlxuICAgICAgICAgID5jaGVja19ib3hfb3V0bGluZV9ibGFuazwvbWF0LWljb25cbiAgICAgICAgPlxuICAgICAgICA8bWF0LWljb25cbiAgICAgICAgICAqbmdJZj1cImFyZUFsbEZpbGVzQ2hlY2tlZFwiXG4gICAgICAgICAgY2xhc3M9XCJoYXMtcG9pbnRlciBjb2xvci1ibGFjayBjb2xvci1ncmV5LWhvdmVyXCJcbiAgICAgICAgICAoY2xpY2spPVwib25VbkNoZWNrQWxsRmlsZXMoKVwiXG4gICAgICAgICAgPmNoZWNrX2JveF9vdXRsaW5lPC9tYXQtaWNvblxuICAgICAgICA+XG4gICAgICAgIDxoNCBjbGFzcz1cInA1IG0wIGNvbG9yLWdyZXlcIj5GaWxlczwvaDQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWNvbFwiPlxuICAgICAgICA8Y2FyZC1maWxlXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGZpbGUgb2YgZmlsZXNcIlxuICAgICAgICAgIFtmaWxlXT1cImZpbGVcIlxuICAgICAgICAgIFtjaGVja2VkSXRlbXNdPVwiY2hlY2tlZEl0ZW1zXCJcbiAgICAgICAgICBbc2VsZWN0ZWRJdGVtXT1cInNlbGVjdGVkSXRlbVwiXG4gICAgICAgICAgW2FjdGlvbnNdPVwiZmlsZUFjdGlvbnNcIlxuICAgICAgICA+XG4gICAgICAgIDwvY2FyZC1maWxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibm90aGluZy1oZXJlXCIgKm5nSWY9XCIhZmlsZXM/Lmxlbmd0aCAmJiAhZm9sZGVycy5sZW5ndGhcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgTm8gZm9sZGVycy9maWxlcyBoZXJlXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi4vc2hhcmVkLXV0aWxpdHktc3R5bGVzLnNjc3MnXSxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgLm5vdGhpbmctaGVyZSB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgY29sb3I6ICM3Nzc7XG4gICAgICB9XG4gICAgICAuZmlsZXMtdmlld2VyIHtcbiAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcEZpbGVUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY2hlY2tlZEl0ZW1zID0gbmV3IFNlbGVjdGlvbk1vZGVsPHN0cmluZz4odHJ1ZSk7XG4gIHNlbGVjdGVkSXRlbSA9IG5ldyBTZWxlY3Rpb25Nb2RlbDxzdHJpbmc+KGZhbHNlKTtcblxuICBjbGVhclNlbGVjdGVkID0gbmV3IFN1YmplY3QoKTtcblxuICBASW5wdXQoKVxuICAkdHJpZ2dlckNsZWFyU2VsZWN0ZWQ6IE9ic2VydmFibGU8dm9pZD47XG4gIEBJbnB1dCgpXG4gIGZpbGVBY3Rpb25zOiBGaWxlQWN0aW9uRGVmaW5pdGlvbltdO1xuICBASW5wdXQoKVxuICBmb2xkZXJBY3Rpb25zOiBGaWxlQWN0aW9uRGVmaW5pdGlvbltdO1xuICBASW5wdXQoKVxuICBmaWxlczogQ29yZVR5cGVzLlJlc0ZpbGVbXTtcbiAgQElucHV0KClcbiAgZm9sZGVyczogQ29yZVR5cGVzLlJlc0ZpbGVbXTtcbiAgQElucHV0KClcbiAgY29uZmlnOiBGaWxlTWFuYWdlckNvbmZpZztcbiAgQE91dHB1dCgpXG4gIGNoZWNrZWRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxDb3JlVHlwZXMuUmVzRmlsZVtdPigpO1xuICBAT3V0cHV0KClcbiAgc2VsZWN0ZWRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKVxuICBlbnRlckZvbGRlciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIHByaXZhdGUgZGVzdHJveWVkID0gbmV3IFN1YmplY3QoKTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLiR0cmlnZ2VyQ2xlYXJTZWxlY3RlZFxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jaGVja2VkSXRlbXMuY2xlYXIoKSk7XG4gICAgdGhpcy5jaGVja2VkSXRlbXMuY2hhbmdlZC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCBmb2xkZXJzID0gdGhpcy5mb2xkZXJzLmZpbHRlcihmID0+XG4gICAgICAgIHRoaXMuY2hlY2tlZEl0ZW1zLnNlbGVjdGVkLmluY2x1ZGVzKGYuZnVsbFBhdGgpXG4gICAgICApO1xuICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLmZpbGVzLmZpbHRlcihmID0+XG4gICAgICAgIHRoaXMuY2hlY2tlZEl0ZW1zLnNlbGVjdGVkLmluY2x1ZGVzKGYuZnVsbFBhdGgpXG4gICAgICApO1xuICAgICAgY29uc3QgY2hlY2tlZEZpbGVzID0gWy4uLmZvbGRlcnMsIC4uLmZpbGVzXTtcbiAgICAgIHRoaXMuY2hlY2tlZENoYW5nZWQuZW1pdChjaGVja2VkRmlsZXMpO1xuICAgIH0pO1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtLmNoYW5nZWQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3QgW3NlbGVjdGVkRmlsZVBhdGhdID0gdGhpcy5zZWxlY3RlZEl0ZW0uc2VsZWN0ZWQ7XG4gICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlZC5lbWl0KHNlbGVjdGVkRmlsZVBhdGgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95ZWQubmV4dCgpO1xuICB9XG5cbiAgZ2V0IGFyZUFsbEZvbGRlcnNDaGVja2VkKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGN1cnJlbnRTZWxlY3Rpb24gPSB0aGlzLmNoZWNrZWRJdGVtcy5zZWxlY3RlZDtcbiAgICBjb25zdCBoYXNBbGxGb2xkZXJzU2VsZWN0ZWQgPSB0aGlzLmZvbGRlcnMuZXZlcnkoZiA9PlxuICAgICAgY3VycmVudFNlbGVjdGlvbi5pbmNsdWRlcyhmLmZ1bGxQYXRoKVxuICAgICk7XG4gICAgcmV0dXJuIGhhc0FsbEZvbGRlcnNTZWxlY3RlZDtcbiAgfVxuXG4gIGdldCBhcmVBbGxGaWxlc0NoZWNrZWQoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgY3VycmVudFNlbGVjdGlvbiA9IHRoaXMuY2hlY2tlZEl0ZW1zLnNlbGVjdGVkO1xuICAgIGNvbnN0IGhhc0FsbEZpbGVzU2VsZWN0ZWQgPSB0aGlzLmZpbGVzLmV2ZXJ5KGYgPT5cbiAgICAgIGN1cnJlbnRTZWxlY3Rpb24uaW5jbHVkZXMoZi5mdWxsUGF0aClcbiAgICApO1xuICAgIHJldHVybiBoYXNBbGxGaWxlc1NlbGVjdGVkO1xuICB9XG5cbiAgb25DaGVja0FsbEZvbGRlcnMoKSB7XG4gICAgdGhpcy5jaGVja2VkSXRlbXMuc2VsZWN0KC4uLnRoaXMuZm9sZGVycy5tYXAoZiA9PiBmLmZ1bGxQYXRoKSk7XG4gIH1cbiAgb25VbkNoZWNrQWxsRm9sZGVycygpIHtcbiAgICB0aGlzLmNoZWNrZWRJdGVtcy5kZXNlbGVjdCguLi50aGlzLmZvbGRlcnMubWFwKGYgPT4gZi5mdWxsUGF0aCkpO1xuICB9XG4gIG9uQ2hlY2tBbGxGaWxlcygpIHtcbiAgICB0aGlzLmNoZWNrZWRJdGVtcy5zZWxlY3QoLi4udGhpcy5maWxlcy5tYXAoZiA9PiBmLmZ1bGxQYXRoKSk7XG4gIH1cbiAgb25VbkNoZWNrQWxsRmlsZXMoKSB7XG4gICAgdGhpcy5jaGVja2VkSXRlbXMuZGVzZWxlY3QoLi4udGhpcy5maWxlcy5tYXAoZiA9PiBmLmZ1bGxQYXRoKSk7XG4gIH1cbn1cbiJdfQ==
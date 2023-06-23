/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { LoggerService } from '../../services/logging/logger.service';
import { NotificationService } from '../../services/pure/notification.service';
/**
 * @record
 */
export function UploadDialogInterface() { }
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
export function UploadDialogResponseInterface() { }
function UploadDialogResponseInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    UploadDialogResponseInterface.prototype.uploaded;
}
export class AppDialogUploadFilesComponent {
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
    { type: Component, args: [{
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
            }] }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXVwbG9hZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvU2hpdmFuZy9QaSBTb2Z0d2FyZS9maWxlLW1hbmFnZXIvbmd4LWZpbGVtYW5hZ2VyL3Byb2plY3RzL25neC1maWxlbWFuYWdlci1jbGllbnQtZmlyZWJhc2Uvc3JjLyIsInNvdXJjZXMiOlsibGliL3VpL2RpYWxvZ3MvZGlhbG9nLXVwbG9hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyRC9FLE1BQU0sT0FBTyw2QkFBNkI7Ozs7Ozs7SUFReEMsWUFDVSxRQUNBLGVBQ0QsV0FDeUIsSUFBMkI7UUFIbkQsV0FBTSxHQUFOLE1BQU07UUFDTixrQkFBYSxHQUFiLGFBQWE7UUFDZCxjQUFTLEdBQVQsU0FBUztRQUNnQixTQUFJLEdBQUosSUFBSSxDQUF1QjtRQVg3RCxvQkFBZSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVuQyx3QkFBbUIsRUFBRSxDQUFDOzJCQUdSLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQztRQVE5QyxJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDaEMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztTQUNwQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ2hDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxRQUFRO1FBQ04sdUJBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBOEIsQ0FBQztRQUMvRCx1QkFBTSxRQUFRLEdBQWtDO1lBQzlDLFFBQVEsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FDdkMsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ2hDOzs7O0lBRUQsUUFBUTtRQUNOLHVCQUFNLFFBQVEsR0FBa0M7WUFDOUMsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDaEM7OztZQXJGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWdDVDt5QkFFQzs7Ozs7OztLQU9DO2FBR0o7Ozs7WUE1RFEsYUFBYTtZQUViLG1CQUFtQjtZQUxuQixZQUFZOzRDQTRFaEIsTUFBTSxTQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2dnaW5nL2xvZ2dlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1GaWxlc0NvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9maWxlLXVwbG9hZC9mb3JtLWZpbGUtZmlyZWJhc2UvZm9ybS1maWxlLWZpcmViYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHVyZS9ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtQXJyYXlGaWxlT2JqZWN0IH0gZnJvbSAnLi4vZmlsZS11cGxvYWQvZm9ybS1maWxlLWZpcmViYXNlL0Zvcm1BcnJheUZpbGVPYmplY3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVwbG9hZERpYWxvZ0ludGVyZmFjZSB7XG4gIGN1cnJlbnREaXJlY3Rvcnk6IHN0cmluZztcbiAgZmlyZWJhc2VDb25maWc6IHt9O1xuICBidWNrZXROYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBsb2FkRGlhbG9nUmVzcG9uc2VJbnRlcmZhY2Uge1xuICB1cGxvYWRlZDogc3RyaW5nW107XG59XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxiYXNlLWRpYWxvZ1xuICAgICAgW2hlYWRlcl09XCJoZWFkZXJUZW1wbGF0ZVwiXG4gICAgICBbYm9keV09XCJib2R5VGVtcGxhdGVcIlxuICAgICAgW2FjdGlvbnNdPVwiYWN0aW9uc1RlbXBsYXRlXCJcbiAgICA+XG4gICAgICA8bmctdGVtcGxhdGUgI2hlYWRlclRlbXBsYXRlPlxuICAgICAgICA8aDI+VXBsb2FkIEZpbGVzPC9oMj5cbiAgICAgICAgPGg1PlRvIEZvbGRlcjoge3sgY3VycmVudERpcmVjdG9yeSB9fTwvaDU+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPG5nLXRlbXBsYXRlICNib2R5VGVtcGxhdGU+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIj5cbiAgICAgICAgICA8Zm9ybS1maWxlLWZpcmViYXNlXG4gICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZmlsZXNDb250cm9sXCJcbiAgICAgICAgICAgIFtjb25maWddPVwiY29uZmlnXCJcbiAgICAgICAgICAgICh1cGxvYWRTdGF0dXNDaGFuZ2VkKT1cImlzVXBsb2FkaW5nLm5leHQoJGV2ZW50KVwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDwvZm9ybS1maWxlLWZpcmViYXNlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctdGVtcGxhdGUgI2FjdGlvbnNUZW1wbGF0ZT5cbiAgICAgICAgPGJ0bnMtY2FuY2VsLW9rXG4gICAgICAgICAgb2tJY29uPVwiZG9uZVwiXG4gICAgICAgICAgb2tMYWJlbD1cIkZpbmlzaFwiXG4gICAgICAgICAgKGNsaWNrZWRDYW5jZWwpPVwib25DYW5jZWwoKVwiXG4gICAgICAgICAgKGNsaWNrZWRPayk9XCJvblN1Ym1pdCgpXCJcbiAgICAgICAgICBbb2tEaXNhYmxlZF09XCJpc1VwbG9hZGluZyB8IGFzeW5jXCJcbiAgICAgICAgPlxuICAgICAgICA8L2J0bnMtY2FuY2VsLW9rPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Jhc2UtZGlhbG9nPlxuICAgIDxkaXYgI2hpZGRlbj48L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgLmR6LWltYWdlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5kei1kZXRhaWxzID4gaW1nIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICBgXG4gIF0sXG4gIHN0eWxlVXJsczogWycuLi9zaGFyZWQtdXRpbGl0eS1zdHlsZXMuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFwcERpYWxvZ1VwbG9hZEZpbGVzQ29tcG9uZW50IHtcbiAgZmlsZXNDb250cm9sID0gbmV3IEZvcm1Db250cm9sKFtdKTtcblxuICBjdXJyZW50RGlyZWN0b3J5ID0gJyc7XG5cbiAgY29uZmlnOiBGb3JtRmlsZXNDb25maWd1cmF0aW9uO1xuICBpc1VwbG9hZGluZyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBub3RpZmljYXRpb25zOiBOb3RpZmljYXRpb25TZXJ2aWNlLFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBcHBEaWFsb2dVcGxvYWRGaWxlc0NvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBVcGxvYWREaWFsb2dJbnRlcmZhY2VcbiAgKSB7XG4gICAgdGhpcy5jb25maWcgPSB7XG4gICAgICBkaXJlY3Rvcnk6IGRhdGEuY3VycmVudERpcmVjdG9yeSxcbiAgICAgIGJ1Y2tldG5hbWU6IGRhdGEuYnVja2V0TmFtZSxcbiAgICAgIGZpcmViYXNlQ29uZmlnOiBkYXRhLmZpcmViYXNlQ29uZmlnXG4gICAgfTtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdpbml0aWFsaXppbmc6Jywge1xuICAgICAgY3VycmVudERpcmVjdG9yeTogdGhpcy5jdXJyZW50RGlyZWN0b3J5LFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5maWxlc0NvbnRyb2wudmFsdWUgYXMgRm9ybUFycmF5RmlsZU9iamVjdFtdO1xuICAgIGNvbnN0IHJlc3BvbnNlOiBVcGxvYWREaWFsb2dSZXNwb25zZUludGVyZmFjZSA9IHtcbiAgICAgIHVwbG9hZGVkOiBmaWxlcy5tYXAoZiA9PiBmLnZhbHVlLm5hbWUpXG4gICAgfTtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZShyZXNwb25zZSk7XG4gIH1cblxuICBvbkNhbmNlbCgpIHtcbiAgICBjb25zdCByZXNwb25zZTogVXBsb2FkRGlhbG9nUmVzcG9uc2VJbnRlcmZhY2UgPSB7XG4gICAgICB1cGxvYWRlZDogW11cbiAgICB9O1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHJlc3BvbnNlKTtcbiAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
export class AppDialogConfirmationComponent {
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
    { type: Component, args: [{
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
            }] }
];
/** @nocollapse */
AppDialogConfirmationComponent.ctorParameters = () => [
    { type: MatDialogRef }
];
function AppDialogConfirmationComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppDialogConfirmationComponent.prototype.dialogRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvU2hpdmFuZy9QaSBTb2Z0d2FyZS9maWxlLW1hbmFnZXIvbmd4LWZpbGVtYW5hZ2VyL3Byb2plY3RzL25neC1maWxlbWFuYWdlci1jbGllbnQtZmlyZWJhc2Uvc3JjLyIsInNvdXJjZXMiOlsibGliL3VpL2RpYWxvZ3MvZGlhbG9nLWNvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBOEJ4RCxNQUFNLE9BQU8sOEJBQThCOzs7O0lBQ3pDLFlBQW1CLFNBQXVEO1FBQXZELGNBQVMsR0FBVCxTQUFTLENBQThDO0tBQUk7Ozs7SUFFOUUsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzVCOzs7O0lBQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzdCOzs7WUFwQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JUOzthQUVGOzs7O1lBN0JRLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYFxuICAgIDxiYXNlLWRpYWxvZ1xuICAgICAgW2hlYWRlcl09XCJoZWFkZXJUZW1wbGF0ZVwiXG4gICAgICBbYm9keV09XCJib2R5VGVtcGxhdGVcIlxuICAgICAgW2FjdGlvbnNdPVwiYWN0aW9uc1RlbXBsYXRlXCJcbiAgICA+XG4gICAgICA8bmctdGVtcGxhdGUgI2hlYWRlclRlbXBsYXRlPlxuICAgICAgICA8aDI+U2V0IFBlcm1pc3Npb25zPC9oMj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctdGVtcGxhdGUgI2JvZHlUZW1wbGF0ZT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD5Xb3VsZCB5b3UgbGlrZSB0byBzZXQgcGVybWlzc2lvbnMgZm9yIHRoaXMgZm9sZGVyPzwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPG5nLXRlbXBsYXRlICNhY3Rpb25zVGVtcGxhdGU+XG4gICAgICAgIDxidG5zLWNhbmNlbC1va1xuICAgICAgICAgIG9rSWNvbj1cImRvbmVcIlxuICAgICAgICAgIG9rTGFiZWw9XCJZZXNcIlxuICAgICAgICAgIChjbGlja2VkQ2FuY2VsKT1cIm9uQ2FuY2VsKClcIlxuICAgICAgICAgIChjbGlja2VkT2spPVwib25TdWJtaXQoKVwiXG4gICAgICAgID5cbiAgICAgICAgPC9idG5zLWNhbmNlbC1vaz5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9iYXNlLWRpYWxvZz5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4uL3NoYXJlZC11dGlsaXR5LXN0eWxlcy5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEFwcERpYWxvZ0NvbmZpcm1hdGlvbkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBcHBEaWFsb2dDb25maXJtYXRpb25Db21wb25lbnQ+KSB7fVxuXG4gIG9uU3VibWl0KCkge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRydWUpO1xuICB9XG4gIG9uQ2FuY2VsKCkge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKGZhbHNlKTtcbiAgfVxufVxuIl19
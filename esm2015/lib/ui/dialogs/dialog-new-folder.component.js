/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
export class AppDialogNewFolderComponent {
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
    { type: Component, args: [{
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
            }] }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLW5ldy1mb2xkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL1NoaXZhbmcvUGkgU29mdHdhcmUvZmlsZS1tYW5hZ2VyL25neC1maWxlbWFuYWdlci9wcm9qZWN0cy9uZ3gtZmlsZW1hbmFnZXItY2xpZW50LWZpcmViYXNlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi91aS9kaWFsb2dzL2RpYWxvZy1uZXctZm9sZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBcUM3QyxNQUFNLE9BQU8sMkJBQTJCOzs7O0lBR3RDLFlBQW1CLFNBQW9EO1FBQXBELGNBQVMsR0FBVCxTQUFTLENBQTJDO1FBRnZFLGtCQUFhLElBQUksV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBRWdDOzs7O0lBRTNFLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzdDOzs7O0lBQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDeEI7OztZQTdDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBK0JUOzthQUVGOzs7O1lBckNRLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGJhc2UtZGlhbG9nXG4gICAgICBbaGVhZGVyXT1cImhlYWRlclRlbXBsYXRlXCJcbiAgICAgIFtib2R5XT1cImJvZHlUZW1wbGF0ZVwiXG4gICAgICBbYWN0aW9uc109XCJhY3Rpb25zVGVtcGxhdGVcIlxuICAgID5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjaGVhZGVyVGVtcGxhdGU+XG4gICAgICAgIDxoMj5DcmVhdGUgRm9sZGVyPC9oMj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctdGVtcGxhdGUgI2JvZHlUZW1wbGF0ZT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOZXcgRm9sZGVyIE5hbWVcIlxuICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZm9sZGVyTmFtZVwiXG4gICAgICAgICAgICAgIChrZXl1cC5lbnRlcik9XCJvblN1Ym1pdCgpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPG5nLXRlbXBsYXRlICNhY3Rpb25zVGVtcGxhdGU+XG4gICAgICAgIDxidG5zLWNhbmNlbC1va1xuICAgICAgICAgIG9rSWNvbj1cImRvbmVcIlxuICAgICAgICAgIG9rTGFiZWw9XCJDcmVhdGUgRm9sZGVyXCJcbiAgICAgICAgICAoY2xpY2tlZENhbmNlbCk9XCJvbkNhbmNlbCgpXCJcbiAgICAgICAgICAoY2xpY2tlZE9rKT1cIm9uU3VibWl0KClcIlxuICAgICAgICA+XG4gICAgICAgIDwvYnRucy1jYW5jZWwtb2s+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvYmFzZS1kaWFsb2c+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuLi9zaGFyZWQtdXRpbGl0eS1zdHlsZXMuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFwcERpYWxvZ05ld0ZvbGRlckNvbXBvbmVudCB7XG4gIGZvbGRlck5hbWUgPSBuZXcgRm9ybUNvbnRyb2woJ05ldyBmb2xkZXInKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8QXBwRGlhbG9nTmV3Rm9sZGVyQ29tcG9uZW50Pikge31cblxuICBvblN1Ym1pdCgpIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLmZvbGRlck5hbWUudmFsdWUpO1xuICB9XG4gIG9uQ2FuY2VsKCkge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==
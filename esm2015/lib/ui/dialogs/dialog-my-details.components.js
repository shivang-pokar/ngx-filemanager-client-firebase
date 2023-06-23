/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
export class AppDialogMyDetailsComponent {
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
    { type: Component, args: [{
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
            }] }
];
/** @nocollapse */
AppDialogMyDetailsComponent.ctorParameters = () => [
    { type: MatDialogRef }
];
function AppDialogMyDetailsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppDialogMyDetailsComponent.prototype.dialogRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLW15LWRldGFpbHMuY29tcG9uZW50cy5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9TaGl2YW5nL1BpIFNvZnR3YXJlL2ZpbGUtbWFuYWdlci9uZ3gtZmlsZW1hbmFnZXIvcHJvamVjdHMvbmd4LWZpbGVtYW5hZ2VyLWNsaWVudC1maXJlYmFzZS9zcmMvIiwic291cmNlcyI6WyJsaWIvdWkvZGlhbG9ncy9kaWFsb2ctbXktZGV0YWlscy5jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQThCeEQsTUFBTSxPQUFPLDJCQUEyQjs7OztJQUV0QyxZQUFtQixTQUFvRDtRQUFwRCxjQUFTLEdBQVQsU0FBUyxDQUEyQztLQUFJOzs7O0lBRTNFLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ3hCOzs7O0lBQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDeEI7OztZQXJDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3QlQ7O2FBRUY7Ozs7WUE3QlEsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGJhc2UtZGlhbG9nXG4gICAgICBbaGVhZGVyXT1cImhlYWRlclRlbXBsYXRlXCJcbiAgICAgIFtib2R5XT1cImJvZHlUZW1wbGF0ZVwiXG4gICAgICBbYWN0aW9uc109XCJhY3Rpb25zVGVtcGxhdGVcIlxuICAgID5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjaGVhZGVyVGVtcGxhdGU+XG4gICAgICAgIDxoMj5NeSBEZXRhaWxzPC9oMj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctdGVtcGxhdGUgI2JvZHlUZW1wbGF0ZT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBUaGUgZm9sbG93aW5nIGRldGFpbHMgd2VyZVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctdGVtcGxhdGUgI2FjdGlvbnNUZW1wbGF0ZT5cbiAgICAgICAgPGJ0bnMtY2FuY2VsLW9rXG4gICAgICAgICAgb2tJY29uPVwiZG9uZVwiXG4gICAgICAgICAgb2tMYWJlbD1cIkNyZWF0ZSBGb2xkZXJcIlxuICAgICAgICAgIChjbGlja2VkQ2FuY2VsKT1cIm9uQ2FuY2VsKClcIlxuICAgICAgICAgIChjbGlja2VkT2spPVwib25TdWJtaXQoKVwiXG4gICAgICAgID5cbiAgICAgICAgPC9idG5zLWNhbmNlbC1vaz5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9iYXNlLWRpYWxvZz5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4uL3NoYXJlZC11dGlsaXR5LXN0eWxlcy5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXBwRGlhbG9nTXlEZXRhaWxzQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8QXBwRGlhbG9nTXlEZXRhaWxzQ29tcG9uZW50Pikge31cblxuICBvblN1Ym1pdCgpIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG4gIG9uQ2FuY2VsKCkge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==
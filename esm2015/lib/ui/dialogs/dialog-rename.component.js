/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import path from 'path-browserify';
/**
 * @record
 */
export function RenameDialogInterface() { }
function RenameDialogInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    RenameDialogInterface.prototype.currentPath;
}
export class AppDialogRenameComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.renamedItem = new FormControl();
        const /** @type {?} */ name = path.basename(data.currentPath);
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
        const /** @type {?} */ directoryPath = path.dirname(this.data.currentPath);
        const /** @type {?} */ newItemName = this.renamedItem.value;
        if (this.IsDir) {
            return path.join(directoryPath, newItemName, '/');
        }
        return path.join(directoryPath, newItemName);
    }
    /**
     * @return {?}
     */
    get IsDir() {
        return this.data.currentPath.endsWith('/');
    }
}
AppDialogRenameComponent.decorators = [
    { type: Component, args: [{
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
            }] }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXJlbmFtZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvU2hpdmFuZy9QaSBTb2Z0d2FyZS9maWxlLW1hbmFnZXIvbmd4LWZpbGVtYW5hZ2VyL3Byb2plY3RzL25neC1maWxlbWFuYWdlci1jbGllbnQtZmlyZWJhc2Uvc3JjLyIsInNvdXJjZXMiOlsibGliL3VpL2RpYWxvZ3MvZGlhbG9nLXJlbmFtZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sSUFBSSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7QUEwQ25DLE1BQU0sT0FBTyx3QkFBd0I7Ozs7O0lBR25DLFlBQ1MsV0FDeUIsSUFBMkI7UUFEcEQsY0FBUyxHQUFULFNBQVM7UUFDZ0IsU0FBSSxHQUFKLElBQUksQ0FBdUI7UUFKN0QsbUJBQWMsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQU05Qix1QkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakM7Ozs7SUFFRCxRQUFRO1FBQ04sdUJBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7S0FDdkM7Ozs7SUFDRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELElBQUksT0FBTztRQUNULHVCQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUQsdUJBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBQzNDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztLQUM5Qzs7OztJQUNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzVDOzs7WUFqRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQ1Q7O2FBRUY7Ozs7WUEzQ1EsWUFBWTs0Q0FpRGhCLE1BQU0sU0FBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aC1icm93c2VyaWZ5JztcblxuZXhwb3J0IGludGVyZmFjZSBSZW5hbWVEaWFsb2dJbnRlcmZhY2Uge1xuICBjdXJyZW50UGF0aDogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8YmFzZS1kaWFsb2dcbiAgICAgIFtoZWFkZXJdPVwiaGVhZGVyVGVtcGxhdGVcIlxuICAgICAgW2JvZHldPVwiYm9keVRlbXBsYXRlXCJcbiAgICAgIFthY3Rpb25zXT1cImFjdGlvbnNUZW1wbGF0ZVwiXG4gICAgPlxuICAgICAgPG5nLXRlbXBsYXRlICNoZWFkZXJUZW1wbGF0ZT5cbiAgICAgICAgPGgyPlJlbmFtZSBJdGVtPC9oMj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctdGVtcGxhdGUgI2JvZHlUZW1wbGF0ZT5cbiAgICAgICAgPGg1IGNsYXNzPVwicDUgbTBcIj5PbGQgUGF0aDoge3sgZGF0YS5jdXJyZW50UGF0aCB9fTwvaDU+XG4gICAgICAgIDxoNSBjbGFzcz1cInA1IG0wXCI+TmV3IFBhdGg6IHt7IG5ld1BhdGggfX08L2g1PlxuXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5ldyBOYW1lXCJcbiAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJyZW5hbWVkSXRlbVwiXG4gICAgICAgICAgICAoa2V5dXAuZW50ZXIpPVwib25TdWJtaXQoKVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctdGVtcGxhdGUgI2FjdGlvbnNUZW1wbGF0ZT5cbiAgICAgICAgPGJ0bnMtY2FuY2VsLW9rXG4gICAgICAgICAgb2tJY29uPVwiZG9uZVwiXG4gICAgICAgICAgb2tMYWJlbD1cIlJlbmFtZSBJdGVtXCJcbiAgICAgICAgICAoY2xpY2tlZENhbmNlbCk9XCJvbkNhbmNlbCgpXCJcbiAgICAgICAgICAoY2xpY2tlZE9rKT1cIm9uU3VibWl0KClcIlxuICAgICAgICA+XG4gICAgICAgIDwvYnRucy1jYW5jZWwtb2s+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvYmFzZS1kaWFsb2c+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuLi9zaGFyZWQtdXRpbGl0eS1zdHlsZXMuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFwcERpYWxvZ1JlbmFtZUNvbXBvbmVudCB7XG4gIHJlbmFtZWRJdGVtID0gbmV3IEZvcm1Db250cm9sKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFwcERpYWxvZ1JlbmFtZUNvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBSZW5hbWVEaWFsb2dJbnRlcmZhY2VcbiAgKSB7XG4gICAgY29uc3QgbmFtZSA9IHBhdGguYmFzZW5hbWUoZGF0YS5jdXJyZW50UGF0aCk7XG4gICAgdGhpcy5yZW5hbWVkSXRlbS5zZXRWYWx1ZShuYW1lKTtcbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGNvbnN0IHJlbmFtZWRGdWxsUGF0aCA9IHRoaXMubmV3UGF0aDtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZShyZW5hbWVkRnVsbFBhdGgpO1xuICB9XG4gIG9uQ2FuY2VsKCkge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cblxuICBnZXQgbmV3UGF0aCgpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlQYXRoID0gcGF0aC5kaXJuYW1lKHRoaXMuZGF0YS5jdXJyZW50UGF0aCk7XG4gICAgY29uc3QgbmV3SXRlbU5hbWUgPSB0aGlzLnJlbmFtZWRJdGVtLnZhbHVlO1xuICAgIGlmICh0aGlzLklzRGlyKSB7XG4gICAgICByZXR1cm4gcGF0aC5qb2luKGRpcmVjdG9yeVBhdGgsIG5ld0l0ZW1OYW1lLCAnLycpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aC5qb2luKGRpcmVjdG9yeVBhdGgsIG5ld0l0ZW1OYW1lKTtcbiAgfVxuICBnZXQgSXNEaXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5jdXJyZW50UGF0aC5lbmRzV2l0aCgnLycpO1xuICB9XG59XG4iXX0=
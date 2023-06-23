/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { LoggerService } from '../../services/logging/logger.service';
/**
 * @record
 */
export function PermissionsDialogInterface() { }
function PermissionsDialogInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    PermissionsDialogInterface.prototype.files;
    /** @type {?} */
    PermissionsDialogInterface.prototype.config;
}
/**
 * @record
 */
export function PermissionsDialogResponseInterface() { }
function PermissionsDialogResponseInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    PermissionsDialogResponseInterface.prototype.role;
    /** @type {?} */
    PermissionsDialogResponseInterface.prototype.entity;
    /** @type {?} */
    PermissionsDialogResponseInterface.prototype.files;
}
export class AppDialogPermissionsSetComponent {
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
            }] }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXBlcm1pc3Npb25zLXNldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvU2hpdmFuZy9QaSBTb2Z0d2FyZS9maWxlLW1hbmFnZXIvbmd4LWZpbGVtYW5hZ2VyL3Byb2plY3RzL25neC1maWxlbWFuYWdlci1jbGllbnQtZmlyZWJhc2Uvc3JjLyIsInNvdXJjZXMiOlsibGliL3VpL2RpYWxvZ3MvZGlhbG9nLXBlcm1pc3Npb25zLXNldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFNM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThGdEUsTUFBTSxPQUFPLGdDQUFnQzs7Ozs7O0lBYzNDLFlBQ1UsUUFDRCxXQUN5QixJQUFnQztRQUZ4RCxXQUFNLEdBQU4sTUFBTTtRQUNQLGNBQVMsR0FBVCxTQUFTO1FBQ2dCLFNBQUksR0FBSixJQUFJLENBQTRCO1FBZmxFLG1CQUFjLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzJCQUNHLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7UUFFeEUseUJBQW9CLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lDQUNILENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQztRQUMzRCxxQkFBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUtsQyxpQkFBWSxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBT3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4Qix1QkFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQzlCOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDdkI7Ozs7SUFFRCxJQUFJLGtCQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztLQUNuRTs7OztJQUVELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDO0tBQ2hEOzs7O0lBRUQsUUFBUTtRQUNOLHVCQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQWdCLENBQUM7UUFDekQsdUJBQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUM7UUFDaEMsdUJBQU0sUUFBUSxHQUF1QztZQUNuRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLO1lBQzVCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztTQUN2QixDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ2hDOzs7O0lBQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDeEI7OztZQXBJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4RVQ7O2FBRUY7Ozs7WUE3RlEsYUFBYTtZQVJiLFlBQVk7NENBdUhoQixNQUFNLFNBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgRmlsZU1hbmFnZXJDb25maWcsXG4gIE5hbWVVaWRcbn0gZnJvbSAnLi4vLi4vY29uZmlndXJhdGlvbi9jbGllbnQtY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBDb3JlVHlwZXMgfSBmcm9tICcuLi8uLi8uLi9jb3JlLXR5cGVzJztcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2dnaW5nL2xvZ2dlci5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uc0RpYWxvZ0ludGVyZmFjZSB7XG4gIGZpbGVzOiBDb3JlVHlwZXMuUmVzRmlsZVtdO1xuICBjb25maWc6IEZpbGVNYW5hZ2VyQ29uZmlnO1xufVxuZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uc0RpYWxvZ1Jlc3BvbnNlSW50ZXJmYWNlIHtcbiAgcm9sZTogQ29yZVR5cGVzLlBlcm1pc3Npb25zUm9sZTtcbiAgZW50aXR5OiBDb3JlVHlwZXMuRmlsZVBlcm1pc3Npb25FbnRpdHk7XG4gIGZpbGVzOiBDb3JlVHlwZXMuUmVzRmlsZVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8YmFzZS1kaWFsb2dcbiAgICAgIFtoZWFkZXJdPVwiaGVhZGVyVGVtcGxhdGVcIlxuICAgICAgW2JvZHldPVwiYm9keVRlbXBsYXRlXCJcbiAgICAgIFthY3Rpb25zXT1cImFjdGlvbnNUZW1wbGF0ZVwiXG4gICAgPlxuICAgICAgPG5nLXRlbXBsYXRlICNoZWFkZXJUZW1wbGF0ZT5cbiAgICAgICAgPGgyPlNldCBQZXJtaXNzaW9uczwvaDI+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPG5nLXRlbXBsYXRlICNib2R5VGVtcGxhdGU+XG4gICAgICAgIDxoNT5TZWxlY3RlZCBJdGVtczwvaDU+XG4gICAgICAgIDxvbD5cbiAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGZpbGUgb2YgaXRlbXNcIj5cbiAgICAgICAgICAgIHt7IGZpbGUubmFtZSB9fVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvb2w+XG5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZnVsbC13aWR0aFwiPlxuICAgICAgICAgIDxtYXQtc2VsZWN0XG4gICAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImVudGl0eVR5cGVDb250cm9sXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG1hdC1vcHRpb25cbiAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBlbnRpdHlUeXBlT3B0aW9uc1wiXG4gICAgICAgICAgICAgIFt2YWx1ZV09XCJvcHRpb25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyBvcHRpb24gfX1cbiAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZnVsbC13aWR0aFwiICpuZ0lmPVwiSGFzU2VsZWN0ZWRVc2VyXCI+XG4gICAgICAgICAgPG1hdC1zZWxlY3RcbiAgICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZW50aXR5Q29udHJvbFwiXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiRW50aXR5Q29udHJvbExhYmVsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZW50aXR5IG9mICR1c2VycyB8IGFzeW5jXCIgW3ZhbHVlXT1cImVudGl0eVwiPlxuICAgICAgICAgICAgICB7eyBlbnRpdHkubmFtZSB9fVxuICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmdWxsLXdpZHRoXCIgKm5nSWY9XCIhSGFzU2VsZWN0ZWRVc2VyXCI+XG4gICAgICAgICAgPG1hdC1zZWxlY3RcbiAgICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZW50aXR5Q29udHJvbFwiXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiRW50aXR5Q29udHJvbExhYmVsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZW50aXR5IG9mICRncm91cHMgfCBhc3luY1wiIFt2YWx1ZV09XCJlbnRpdHlcIj5cbiAgICAgICAgICAgICAge3sgZW50aXR5Lm5hbWUgfX1cbiAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZnVsbC13aWR0aFwiPlxuICAgICAgICAgIDxtYXQtc2VsZWN0XG4gICAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cInJvbGVDb250cm9sXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGVybWlzc2lvbnNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygcm9sZU9wdGlvbnNcIiBbdmFsdWVdPVwib3B0aW9uXCI+XG4gICAgICAgICAgICAgIHt7IG9wdGlvbiB9fVxuICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctdGVtcGxhdGUgI2FjdGlvbnNUZW1wbGF0ZT5cbiAgICAgICAgPGJ0bnMtY2FuY2VsLW9rXG4gICAgICAgICAgb2tJY29uPVwiZG9uZVwiXG4gICAgICAgICAgb2tMYWJlbD1cIlNldCBQZXJtaXNzaW9uc1wiXG4gICAgICAgICAgKGNsaWNrZWRDYW5jZWwpPVwib25DYW5jZWwoKVwiXG4gICAgICAgICAgKGNsaWNrZWRPayk9XCJvblN1Ym1pdCgpXCJcbiAgICAgICAgPlxuICAgICAgICA8L2J0bnMtY2FuY2VsLW9rPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Jhc2UtZGlhbG9nPlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi4vc2hhcmVkLXV0aWxpdHktc3R5bGVzLnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBEaWFsb2dQZXJtaXNzaW9uc1NldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGl0ZW1zOiBDb3JlVHlwZXMuUmVzRmlsZVtdO1xuICByb2xlQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnUkVBREVSJyk7XG4gIHJvbGVPcHRpb25zOiBDb3JlVHlwZXMuUGVybWlzc2lvbnNSb2xlW10gPSBbJ09XTkVSJywgJ1dSSVRFUicsICdSRUFERVInXTtcblxuICBlbnRpdHlUeXBlQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnZ3JvdXAnKTtcbiAgZW50aXR5VHlwZU9wdGlvbnM6ICgndXNlcicgfCAnZ3JvdXAnKVtdID0gWyd1c2VyJywgJ2dyb3VwJ107XG4gIGVudGl0eUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcblxuICAkdXNlcnM6IE9ic2VydmFibGU8TmFtZVVpZFtdPjtcbiAgJGdyb3VwczogT2JzZXJ2YWJsZTxOYW1lVWlkW10+O1xuXG4gIGRlc3Ryb3llZCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UsXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFwcERpYWxvZ1Blcm1pc3Npb25zU2V0Q29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IFBlcm1pc3Npb25zRGlhbG9nSW50ZXJmYWNlXG4gICkge1xuICAgIHRoaXMuaXRlbXMgPSBkYXRhLmZpbGVzO1xuICAgIGNvbnN0IGNvbmZpZyA9IGRhdGEuY29uZmlnO1xuICAgIHRoaXMuJHVzZXJzID0gY29uZmlnLnVzZXJzO1xuICAgIHRoaXMuJGdyb3VwcyA9IGNvbmZpZy5ncm91cHM7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3llZC5uZXh0KCk7XG4gIH1cblxuICBnZXQgRW50aXR5Q29udHJvbExhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmVudGl0eVR5cGVDb250cm9sLnZhbHVlID09PSAndXNlcicgPyAnVXNlcicgOiAnR3JvdXAnO1xuICB9XG5cbiAgZ2V0IEhhc1NlbGVjdGVkVXNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRpdHlUeXBlQ29udHJvbC52YWx1ZSA9PT0gJ3VzZXInO1xuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgY29uc3QgY2hvb3NlblZhbHVlID0gdGhpcy5lbnRpdHlDb250cm9sLnZhbHVlIGFzIE5hbWVVaWQ7XG4gICAgY29uc3QgZW50aXR5ID0gY2hvb3NlblZhbHVlLnVpZDtcbiAgICBjb25zdCByZXNwb25zZTogUGVybWlzc2lvbnNEaWFsb2dSZXNwb25zZUludGVyZmFjZSA9IHtcbiAgICAgIHJvbGU6IHRoaXMucm9sZUNvbnRyb2wudmFsdWUsXG4gICAgICBlbnRpdHk6IGVudGl0eSxcbiAgICAgIGZpbGVzOiB0aGlzLmRhdGEuZmlsZXNcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyLmluZm8oJ29uU3VibWl0JywgeyBlbnRpdHksIGNob29zZW5WYWx1ZSwgcmVzcG9uc2UgfSk7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UocmVzcG9uc2UpO1xuICB9XG4gIG9uQ2FuY2VsKCkge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==
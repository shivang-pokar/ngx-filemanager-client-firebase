/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Subject, combineLatest } from 'rxjs';
import { LoggerService } from '../../services/logging/logger.service';
import { map, tap } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
/**
 * @record
 */
export function PermissionsObjectDialogInterface() { }
function PermissionsObjectDialogInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    PermissionsObjectDialogInterface.prototype.files;
    /** @type {?} */
    PermissionsObjectDialogInterface.prototype.config;
}
/**
 * @record
 */
export function PermissionsObjectDialogResponseInterface() { }
function PermissionsObjectDialogResponseInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    PermissionsObjectDialogResponseInterface.prototype.permissionsObj;
    /** @type {?} */
    PermissionsObjectDialogResponseInterface.prototype.files;
}
export class AppDialogPermissionsSetObjectComponent {
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
            id: uuidv4(),
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
            }] }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXBlcm1pc3Npb25zLXNldG9iamVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvU2hpdmFuZy9QaSBTb2Z0d2FyZS9maWxlLW1hbmFnZXIvbmd4LWZpbGVtYW5hZ2VyL3Byb2plY3RzL25neC1maWxlbWFuYWdlci1jbGllbnQtZmlyZWJhc2Uvc3JjLyIsInNvdXJjZXMiOlsibGliL3VpL2RpYWxvZ3MvZGlhbG9nLXBlcm1pc3Npb25zLXNldG9iamVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBYyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBTTFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFDLE9BQU8sRUFBRSxFQUFFLElBQUksTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErRnBDLE1BQU0sT0FBTyxzQ0FBc0M7Ozs7OztJQWtCakQsWUFDVSxRQUNELFdBQ3lCLElBQXNDO1FBRjlELFdBQU0sR0FBTixNQUFNO1FBQ1AsY0FBUyxHQUFULFNBQVM7UUFDZ0IsU0FBSSxHQUFKLElBQUksQ0FBa0M7UUFsQnhFLHFCQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDOzZCQUNnQjtZQUNoRCxZQUFZO1lBQ1osTUFBTTtZQUNOLFFBQVE7U0FDVDtRQUVELHlCQUFvQixJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4Qyx5QkFB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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgRmlsZU1hbmFnZXJDb25maWcsXG4gIE5hbWVVaWQsXG59IGZyb20gJy4uLy4uL2NvbmZpZ3VyYXRpb24vY2xpZW50LWNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgQ29yZVR5cGVzIH0gZnJvbSAnLi4vLi4vLi4vY29yZS10eXBlcyc7XG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9nZ2luZy9sb2dnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBUYWcgfSBmcm9tICcuLi90YWdzLWNvbnRyb2wvdGFncy1jb250cm9sLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbnNPYmplY3REaWFsb2dJbnRlcmZhY2Uge1xuICBmaWxlczogQ29yZVR5cGVzLlJlc0ZpbGVbXTtcbiAgY29uZmlnOiBGaWxlTWFuYWdlckNvbmZpZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbnNPYmplY3REaWFsb2dSZXNwb25zZUludGVyZmFjZSB7XG4gIHBlcm1pc3Npb25zT2JqOiBDb3JlVHlwZXMuRmlsZVBlcm1pc3Npb25zT2JqZWN0O1xuICBmaWxlczogQ29yZVR5cGVzLlJlc0ZpbGVbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGJhc2UtZGlhbG9nXG4gICAgICBbaGVhZGVyXT1cImhlYWRlclRlbXBsYXRlXCJcbiAgICAgIFtib2R5XT1cImJvZHlUZW1wbGF0ZVwiXG4gICAgICBbYWN0aW9uc109XCJhY3Rpb25zVGVtcGxhdGVcIlxuICAgID5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjaGVhZGVyVGVtcGxhdGU+XG4gICAgICAgIDxoMj5TZXQgUGVybWlzc2lvbnM8L2gyPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjYm9keVRlbXBsYXRlPlxuICAgICAgICA8aDUgY2xhc3M9XCJteS01XCI+U2VsZWN0ZWQgSXRlbXM8L2g1PlxuICAgICAgICA8bWF0LWNoaXAtbGlzdCBjbGFzcz1cIm1iLTVcIj5cbiAgICAgICAgICA8bWF0LWNoaXAgKm5nRm9yPVwibGV0IGZpbGUgb2YgaXRlbXNcIj5cbiAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cImZpbGUudHlwZSA9PT0gJ2ZpbGUnXCI+ZGVzY3JpcHRpb248L21hdC1pY29uPlxuICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiZmlsZS50eXBlICE9PSAnZmlsZSdcIj5mb2xkZXI8L21hdC1pY29uPlxuICAgICAgICAgICAge3sgZmlsZS5uYW1lIH19XG4gICAgICAgICAgPC9tYXQtY2hpcD5cbiAgICAgICAgPC9tYXQtY2hpcC1saXN0PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmdWxsLXdpZHRoXCI+XG4gICAgICAgICAgPGg1IGNsYXNzPVwibXktNVwiPldobyBjYW4gc2VlIHRoaXM8L2g1PlxuICAgICAgICAgIDxhcHAtY29udHJvbC10YWctbXVsdGlwbGVcbiAgICAgICAgICAgIGNsYXNzPVwiZnVsbC13aWR0aCAtbXQtMTVcIlxuICAgICAgICAgICAgW2NvbnRyb2xdPVwiYWxsUmVhZGVyc0NvbnRyb2xcIlxuICAgICAgICAgICAgW3NlbGVjdENob2ljZXMkXT1cIiRhbGxFbnRpdGllc1wiXG4gICAgICAgICAgICBbYWxsb3dDdXN0b21dPVwiZmFsc2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L2FwcC1jb250cm9sLXRhZy1tdWx0aXBsZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiAqbmdJZj1cImNvbmZpZz8uc2hvd1dyaXRlcnNcIj5cbiAgICAgICAgICA8aDUgY2xhc3M9XCJteS01XCI+V2hvIGNhbiBlZGl0IHRoaXM8L2g1PlxuICAgICAgICAgIDxhcHAtY29udHJvbC10YWctbXVsdGlwbGVcbiAgICAgICAgICAgIGNsYXNzPVwiZnVsbC13aWR0aCAtbXQtMTVcIlxuICAgICAgICAgICAgW2NvbnRyb2xdPVwiYWxsV3JpdGVyc0NvbnRyb2xcIlxuICAgICAgICAgICAgW3NlbGVjdENob2ljZXMkXT1cIiRhbGxFbnRpdGllc1wiXG4gICAgICAgICAgICBbYWxsb3dDdXN0b21dPVwiZmFsc2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L2FwcC1jb250cm9sLXRhZy1tdWx0aXBsZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiAqbmdJZj1cImNvbmZpZz8uc2hvd090aGVyc1wiPlxuICAgICAgICAgIDxoNSBjbGFzcz1cIm15LTVcIj5FdmVyeW9uZSBlbHNlIGNhbjwvaDU+XG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZnVsbC13aWR0aFwiPlxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgbWF0SW5wdXQgW2Zvcm1Db250cm9sXT1cIm90aGVyc0NvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPG1hdC1vcHRpb25cbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgcGVybWlzc2lvbiBvZiBvdGhlcnNPcHRpb25zXCJcbiAgICAgICAgICAgICAgICBbdmFsdWVdPVwicGVybWlzc2lvblwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyBwZXJtaXNzaW9uIH19XG4gICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjYWN0aW9uc1RlbXBsYXRlPlxuICAgICAgICA8YnRucy1jYW5jZWwtb2tcbiAgICAgICAgICBva0ljb249XCJkb25lXCJcbiAgICAgICAgICBva0xhYmVsPVwiU2V0IFBlcm1pc3Npb25zXCJcbiAgICAgICAgICAoY2xpY2tlZENhbmNlbCk9XCJvbkNhbmNlbCgpXCJcbiAgICAgICAgICAoY2xpY2tlZE9rKT1cIm9uU3VibWl0KClcIlxuICAgICAgICA+XG4gICAgICAgIDwvYnRucy1jYW5jZWwtb2s+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvYmFzZS1kaWFsb2c+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuLi9zaGFyZWQtdXRpbGl0eS1zdHlsZXMuc2NzcyddLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAubXktNSB7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG4gICAgICAubWItNSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgIH1cbiAgICAgIC4tbXQtMTUge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBEaWFsb2dQZXJtaXNzaW9uc1NldE9iamVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGl0ZW1zOiBDb3JlVHlwZXMuUmVzRmlsZVtdO1xuXG4gIG90aGVyc0NvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgb3RoZXJzT3B0aW9uczogQ29yZVR5cGVzLkZpbGVQZXJtaXNzaW9uT3RoZXJzW10gPSBbXG4gICAgJ3JlYWQvd3JpdGUnLFxuICAgICdyZWFkJyxcbiAgICAnaGlkZGVuJyxcbiAgXTtcblxuICBhbGxSZWFkZXJzQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChbXSk7XG4gIGFsbFdyaXRlcnNDb250cm9sID0gbmV3IEZvcm1Db250cm9sKFtdKTtcblxuICAkYWxsRW50aXRpZXM6IE9ic2VydmFibGU8VGFnW10+O1xuXG4gIGRlc3Ryb3llZCA9IG5ldyBTdWJqZWN0KCk7XG4gIGNvbmZpZzogRmlsZU1hbmFnZXJDb25maWc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UsXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFwcERpYWxvZ1Blcm1pc3Npb25zU2V0T2JqZWN0Q29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IFBlcm1pc3Npb25zT2JqZWN0RGlhbG9nSW50ZXJmYWNlXG4gICkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oJ0luaXRpYWxpemluZyBzZXRvYmplY3QgZGlhbG9nJywgeyBkYXRhIH0pO1xuICAgIHRoaXMuaXRlbXMgPSBkYXRhLmZpbGVzO1xuICAgIHRoaXMuY29uZmlnID0gZGF0YS5jb25maWc7XG4gICAgY29uc3QgdXNlcnMkID0gdGhpcy5jb25maWcudXNlcnM7XG4gICAgY29uc3QgZ3JvdXBzJCA9IHRoaXMuY29uZmlnLmdyb3VwcztcbiAgICB0aGlzLiRhbGxFbnRpdGllcyA9IGNvbWJpbmVMYXRlc3QoW2dyb3VwcyQsIHVzZXJzJF0pLnBpcGUoXG4gICAgICB0YXAoKGFsbEVudGl0aWVzKSA9PiB0aGlzLmxvZ2dlci5pbmZvKCdhbGxFbnRpdGllcycsIHsgYWxsRW50aXRpZXMgfSkpLFxuICAgICAgbWFwKChhcnIpID0+IHtcbiAgICAgICAgbGV0IHRlbXBFbnRpdGllczogTmFtZVVpZFtdID0gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVpZDogJycsXG4gICAgICAgICAgICBuYW1lOiAnR3JvdXBzOiAnLFxuICAgICAgICAgICAgaXNEaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgICAgICB0ZW1wRW50aXRpZXMgPSB0ZW1wRW50aXRpZXMuY29uY2F0KGFyclswXSk7XG4gICAgICAgIHRlbXBFbnRpdGllcy5wdXNoKHtcbiAgICAgICAgICB1aWQ6ICcnLFxuICAgICAgICAgIG5hbWU6ICdVc2VyczogJyxcbiAgICAgICAgICBpc0Rpc2FibGVkOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRlbXBFbnRpdGllcy5jb25jYXQoYXJyWzFdKTtcbiAgICAgIH0pLFxuICAgICAgbWFwKChhcnIpID0+XG4gICAgICAgIGFyci5tYXAoXG4gICAgICAgICAgKG4pID0+XG4gICAgICAgICAgICAoe1xuICAgICAgICAgICAgICBpZDogbi51aWQsXG4gICAgICAgICAgICAgIG5hbWU6IG4ubmFtZSxcbiAgICAgICAgICAgICAgaXNEaXNhYmxlZDogISFuLmlzRGlzYWJsZWQsXG4gICAgICAgICAgICB9IGFzIFRhZylcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gICAgdGhpcy4kYWxsRW50aXRpZXMuc3Vic2NyaWJlKChhbGxFbnRpdGllcykgPT5cbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oJ2FsbEVudGl0aWVzJywgeyBhbGxFbnRpdGllcyB9KVxuICAgICk7XG4gICAgdGhpcy5pbml0UGVybWlzc2lvbnMoZGF0YS5maWxlcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3llZC5uZXh0KCk7XG4gIH1cblxuICBpbml0UGVybWlzc2lvbnMoZmlsZXM6IENvcmVUeXBlcy5SZXNGaWxlW10pIHtcbiAgICBjb25zdCBhbGxQZXJtaXNzaW9ucyA9IGZpbGVzLm1hcCgoZikgPT4gZi5wZXJtaXNzaW9ucyk7XG4gICAgY29uc3Qgb3RoZXJzVmFsID0gYWxsUGVybWlzc2lvbnNcbiAgICAgIC5tYXAoKHApID0+IHAub3RoZXJzKVxuICAgICAgLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgICAgIGlmIChhY2MgPT09ICctJykge1xuICAgICAgICAgIHJldHVybiBjdXJyO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0aWxsU2FtZSA9IGFjYyA9PT0gY3VycjtcbiAgICAgICAgaWYgKHN0aWxsU2FtZSkge1xuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9LCAnLScpO1xuICAgIGlmIChvdGhlcnNWYWwpIHtcbiAgICAgIHRoaXMub3RoZXJzQ29udHJvbC5zZXRWYWx1ZShvdGhlcnNWYWwpO1xuICAgIH1cblxuICAgIGNvbnN0IHVuaXF1ZVdyaXRlcnMgPSB0aGlzLmdldFVuaXF1ZVRhZ3MoXG4gICAgICBhbGxQZXJtaXNzaW9ucy5tYXAoKHApID0+IHAud3JpdGVycylcbiAgICApO1xuICAgIHRoaXMuYWxsV3JpdGVyc0NvbnRyb2wuc2V0VmFsdWUodW5pcXVlV3JpdGVycyk7XG5cbiAgICBjb25zdCB1bmlxdWVSZWFkZXJzID0gdGhpcy5nZXRVbmlxdWVUYWdzKFxuICAgICAgYWxsUGVybWlzc2lvbnMubWFwKChwKSA9PiBwLnJlYWRlcnMpXG4gICAgKTtcbiAgICB0aGlzLmFsbFJlYWRlcnNDb250cm9sLnNldFZhbHVlKHVuaXF1ZVJlYWRlcnMpO1xuXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnc2V0IHBlcm1pc3Npb25zJywge1xuICAgICAgb3RoZXJzVmFsLFxuICAgICAgdW5pcXVlV3JpdGVycyxcbiAgICAgIHVuaXF1ZVJlYWRlcnMsXG4gICAgfSk7XG4gIH1cblxuICBnZXRVbmlxdWVUYWdzKGlucHV0RW50aXRpZXM6IHN0cmluZ1tdW10pOiBUYWdbXSB7XG4gICAgY29uc3QgYWxsSW5wdXRFbnRpdGllcyA9IGlucHV0RW50aXRpZXMucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcbiAgICAgIHJldHVybiBhY2MuY29uY2F0KGN1cnIpO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBhbGxFbnRpdGllc1VuaXF1ZSA9IEFycmF5LmZyb20obmV3IFNldChhbGxJbnB1dEVudGl0aWVzKSk7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nczJUYWdzKGFsbEVudGl0aWVzVW5pcXVlKTtcbiAgfVxuXG4gIHN0cmluZ3MyVGFncyhpbnB1dEFycjogc3RyaW5nW10pOiBUYWdbXSB7XG4gICAgcmV0dXJuIGlucHV0QXJyLm1hcChcbiAgICAgICh2YWwpID0+XG4gICAgICAgICh7XG4gICAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICAgIG5hbWU6IHZhbCxcbiAgICAgICAgfSBhcyBUYWcpXG4gICAgKTtcbiAgfVxuICB0YWdzMlN0cmluZ3MoaW5wdXRBcnI6IFRhZ1tdKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBpbnB1dEFyci5tYXAoKHZhbCkgPT4gdmFsLm5hbWUpO1xuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgY29uc3QgbmV3UGVybWlzc2lvbnNPYmo6IENvcmVUeXBlcy5GaWxlUGVybWlzc2lvbnNPYmplY3QgPSB7XG4gICAgICBvdGhlcnM6IHRoaXMub3RoZXJzQ29udHJvbC52YWx1ZSxcbiAgICAgIHJlYWRlcnM6IHRoaXMudGFnczJTdHJpbmdzKHRoaXMuYWxsUmVhZGVyc0NvbnRyb2wudmFsdWUpLFxuICAgICAgd3JpdGVyczogdGhpcy50YWdzMlN0cmluZ3ModGhpcy5hbGxXcml0ZXJzQ29udHJvbC52YWx1ZSksXG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZTogUGVybWlzc2lvbnNPYmplY3REaWFsb2dSZXNwb25zZUludGVyZmFjZSA9IHtcbiAgICAgIHBlcm1pc3Npb25zT2JqOiBuZXdQZXJtaXNzaW9uc09iaixcbiAgICAgIGZpbGVzOiB0aGlzLmRhdGEuZmlsZXMsXG4gICAgfTtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdvblN1Ym1pdCcsIHsgbmV3UGVybWlzc2lvbnNPYmosIHJlc3BvbnNlIH0pO1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHJlc3BvbnNlKTtcbiAgfVxuICBvbkNhbmNlbCgpIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG4iXX0=
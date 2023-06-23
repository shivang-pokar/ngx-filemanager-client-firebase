import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Observable, Subject, combineLatest } from 'rxjs';
import {
  FileManagerConfig,
  NameUid,
} from '../../configuration/client-configuration';
import { CoreTypes } from '../../../core-types';
import { LoggerService } from '../../services/logging/logger.service';
import { map, tap } from 'rxjs/operators';

import { v4 as uuidv4 } from 'uuid';
import { Tag } from '../tags-control/tags-control.component';

export interface PermissionsObjectDialogInterface {
  files: CoreTypes.ResFile[];
  config: FileManagerConfig;
}
export interface PermissionsObjectDialogResponseInterface {
  permissionsObj: CoreTypes.FilePermissionsObject;
  files: CoreTypes.ResFile[];
}

@Component({
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
  styleUrls: ['../shared-utility-styles.scss'],
  styles: [
    `
      .my-5 {
        margin: 5px 0;
      }
      .mb-5 {
        margin-bottom: 5px;
      }
      .-mt-15 {
        margin-top: -15px;
      }
    `,
  ],
})
export class AppDialogPermissionsSetObjectComponent implements OnDestroy {
  items: CoreTypes.ResFile[];

  othersControl = new FormControl();
  othersOptions: CoreTypes.FilePermissionOthers[] = [
    'read/write',
    'read',
    'hidden',
  ];

  allReadersControl = new FormControl([]);
  allWritersControl = new FormControl([]);

  $allEntities: Observable<Tag[]>;

  destroyed = new Subject();
  config: FileManagerConfig;

  constructor(
    private logger: LoggerService,
    public dialogRef: MatDialogRef<AppDialogPermissionsSetObjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PermissionsObjectDialogInterface
  ) {
    this.logger.info('Initializing setobject dialog', { data });
    this.items = data.files;
    this.config = data.config;
    const users$ = this.config.users;
    const groups$ = this.config.groups;
    this.$allEntities = combineLatest([groups$, users$]).pipe(
      tap((allEntities) => this.logger.info('allEntities', { allEntities })),
      map((arr) => {
        let tempEntities: NameUid[] = [
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
      }),
      map((arr) =>
        arr.map(
          (n) =>
            ({
              id: n.uid,
              name: n.name,
              isDisabled: !!n.isDisabled,
            } as Tag)
        )
      )
    );
    this.$allEntities.subscribe((allEntities) =>
      this.logger.info('allEntities', { allEntities })
    );
    this.initPermissions(data.files);
  }

  ngOnDestroy() {
    this.destroyed.next();
  }

  initPermissions(files: CoreTypes.ResFile[]) {
    const allPermissions = files.map((f) => f.permissions);
    const othersVal = allPermissions
      .map((p) => p.others)
      .reduce((acc, curr) => {
        if (acc === '-') {
          return curr;
        }
        const stillSame = acc === curr;
        if (stillSame) {
          return acc;
        }
        return null;
      }, '-');
    if (othersVal) {
      this.othersControl.setValue(othersVal);
    }

    const uniqueWriters = this.getUniqueTags(
      allPermissions.map((p) => p.writers)
    );
    this.allWritersControl.setValue(uniqueWriters);

    const uniqueReaders = this.getUniqueTags(
      allPermissions.map((p) => p.readers)
    );
    this.allReadersControl.setValue(uniqueReaders);

    this.logger.info('set permissions', {
      othersVal,
      uniqueWriters,
      uniqueReaders,
    });
  }

  getUniqueTags(inputEntities: string[][]): Tag[] {
    const allInputEntities = inputEntities.reduce((acc, curr) => {
      return acc.concat(curr);
    }, []);
    const allEntitiesUnique = Array.from(new Set(allInputEntities));
    return this.strings2Tags(allEntitiesUnique);
  }

  strings2Tags(inputArr: string[]): Tag[] {
    return inputArr.map(
      (val) =>
        ({
          id: uuidv4(),
          name: val,
        } as Tag)
    );
  }
  tags2Strings(inputArr: Tag[]): string[] {
    return inputArr.map((val) => val.name);
  }

  onSubmit() {
    const newPermissionsObj: CoreTypes.FilePermissionsObject = {
      others: this.othersControl.value,
      readers: this.tags2Strings(this.allReadersControl.value),
      writers: this.tags2Strings(this.allWritersControl.value),
    };
    const response: PermissionsObjectDialogResponseInterface = {
      permissionsObj: newPermissionsObj,
      files: this.data.files,
    };
    this.logger.info('onSubmit', { newPermissionsObj, response });
    this.dialogRef.close(response);
  }
  onCancel() {
    this.dialogRef.close();
  }
}

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
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
  styleUrls: ['../shared-utility-styles.scss']
})
export class AppDialogNewFolderComponent {
  folderName = new FormControl('New folder');

  constructor(public dialogRef: MatDialogRef<AppDialogNewFolderComponent>) {}

  onSubmit() {
    this.dialogRef.close(this.folderName.value);
  }
  onCancel() {
    this.dialogRef.close();
  }
}

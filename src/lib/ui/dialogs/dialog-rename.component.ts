import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import path from 'path-browserify';

export interface RenameDialogInterface {
  currentPath: string;
}

@Component({
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
  styleUrls: ['../shared-utility-styles.scss']
})
export class AppDialogRenameComponent {
  renamedItem = new FormControl();

  constructor(
    public dialogRef: MatDialogRef<AppDialogRenameComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RenameDialogInterface
  ) {
    const name = path.basename(data.currentPath);
    this.renamedItem.setValue(name);
  }

  onSubmit() {
    const renamedFullPath = this.newPath;
    this.dialogRef.close(renamedFullPath);
  }
  onCancel() {
    this.dialogRef.close();
  }

  get newPath() {
    const directoryPath = path.dirname(this.data.currentPath);
    const newItemName = this.renamedItem.value;
    if (this.IsDir) {
      return path.join(directoryPath, newItemName, '/');
    }
    return path.join(directoryPath, newItemName);
  }
  get IsDir() {
    return this.data.currentPath.endsWith('/');
  }
}

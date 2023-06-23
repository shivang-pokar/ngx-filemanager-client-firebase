import { NgModule } from '@angular/core';
import { BaseDialogComponent } from './base-dialog.component';
import { AppDialogRenameComponent } from './dialog-rename.component';
import { AppDialogNewFolderComponent } from './dialog-new-folder.component';
import { AppDialogPermissionsSetComponent } from './dialog-permissions-set.component';
import { AppDialogPermissionsSetObjectComponent } from './dialog-permissions-setobject.component';
import { AppDialogCopyComponent } from './dialog-copy-or-move.component';
import { AppDialogUploadFilesComponent } from './dialog-upload.component';
import { AppDialogMyDetailsComponent } from './dialog-my-details.components';
import { CommonModule } from '@angular/common';

import { AppBtnsCancelOkComponent } from './btns-cancel-ok.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileTableMiniModule } from '../file-table-mini/file-table-mini.module';
import { FormFileFirebaseModule } from '../file-upload/file-upload.module';
import { TagsControlModule } from '../tags-control/tags-control.module';
import { AppDialogConfirmationComponent } from './dialog-confirmation.component';

import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

const entryComponents = [
  BaseDialogComponent,
  AppDialogRenameComponent,
  AppDialogNewFolderComponent,
  AppDialogPermissionsSetComponent,
  AppDialogPermissionsSetObjectComponent,
  AppDialogCopyComponent,
  AppDialogUploadFilesComponent,
  AppDialogMyDetailsComponent,
  AppDialogConfirmationComponent
];

const declarations = [...entryComponents, AppBtnsCancelOkComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormFileFirebaseModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    FileTableMiniModule,
    TagsControlModule
  ],
  exports: [...entryComponents],
  entryComponents: [...entryComponents],
  declarations: [...declarations],
  providers: []
})
export class NgxFilemanagerClientDialogsModule {}

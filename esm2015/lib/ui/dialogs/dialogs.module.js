/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
const /** @type {?} */ entryComponents = [
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
const /** @type {?} */ declarations = [...entryComponents, AppBtnsCancelOkComponent];
export class NgxFilemanagerClientDialogsModule {
}
NgxFilemanagerClientDialogsModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9ncy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvU2hpdmFuZy9QaSBTb2Z0d2FyZS9maWxlLW1hbmFnZXIvbmd4LWZpbGVtYW5hZ2VyL3Byb2plY3RzL25neC1maWxlbWFuYWdlci1jbGllbnQtZmlyZWJhc2Uvc3JjLyIsInNvdXJjZXMiOlsibGliL3VpL2RpYWxvZ3MvZGlhbG9ncy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEYsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDekUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVqRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsdUJBQU0sZUFBZSxHQUFHO0lBQ3RCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLGdDQUFnQztJQUNoQyxzQ0FBc0M7SUFDdEMsc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IsOEJBQThCO0NBQy9CLENBQUM7QUFFRix1QkFBTSxZQUFZLEdBQUcsQ0FBQyxHQUFHLGVBQWUsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0FBd0JwRSxNQUFNLE9BQU8saUNBQWlDOzs7WUF0QjdDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUN0QixjQUFjO29CQUNkLGVBQWU7b0JBQ2Ysa0JBQWtCO29CQUNsQixlQUFlO29CQUNmLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsbUJBQW1CO29CQUNuQixpQkFBaUI7aUJBQ2xCO2dCQUNELE9BQU8sRUFBRSxDQUFDLEdBQUcsZUFBZSxDQUFDO2dCQUM3QixlQUFlLEVBQUUsQ0FBQyxHQUFHLGVBQWUsQ0FBQztnQkFDckMsWUFBWSxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUM7Z0JBQy9CLFNBQVMsRUFBRSxFQUFFO2FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vYmFzZS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcERpYWxvZ1JlbmFtZUNvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nLXJlbmFtZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwRGlhbG9nTmV3Rm9sZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctbmV3LWZvbGRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwRGlhbG9nUGVybWlzc2lvbnNTZXRDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy1wZXJtaXNzaW9ucy1zZXQuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcERpYWxvZ1Blcm1pc3Npb25zU2V0T2JqZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctcGVybWlzc2lvbnMtc2V0b2JqZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBEaWFsb2dDb3B5Q29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctY29weS1vci1tb3ZlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBEaWFsb2dVcGxvYWRGaWxlc0NvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nLXVwbG9hZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwRGlhbG9nTXlEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctbXktZGV0YWlscy5jb21wb25lbnRzJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEFwcEJ0bnNDYW5jZWxPa0NvbXBvbmVudCB9IGZyb20gJy4vYnRucy1jYW5jZWwtb2suY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRmlsZVRhYmxlTWluaU1vZHVsZSB9IGZyb20gJy4uL2ZpbGUtdGFibGUtbWluaS9maWxlLXRhYmxlLW1pbmkubW9kdWxlJztcbmltcG9ydCB7IEZvcm1GaWxlRmlyZWJhc2VNb2R1bGUgfSBmcm9tICcuLi9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5tb2R1bGUnO1xuaW1wb3J0IHsgVGFnc0NvbnRyb2xNb2R1bGUgfSBmcm9tICcuLi90YWdzLWNvbnRyb2wvdGFncy1jb250cm9sLm1vZHVsZSc7XG5pbXBvcnQgeyBBcHBEaWFsb2dDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy1jb25maXJtYXRpb24uY29tcG9uZW50JztcblxuaW1wb3J0IHsgTWF0Q2hpcHNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuXG5jb25zdCBlbnRyeUNvbXBvbmVudHMgPSBbXG4gIEJhc2VEaWFsb2dDb21wb25lbnQsXG4gIEFwcERpYWxvZ1JlbmFtZUNvbXBvbmVudCxcbiAgQXBwRGlhbG9nTmV3Rm9sZGVyQ29tcG9uZW50LFxuICBBcHBEaWFsb2dQZXJtaXNzaW9uc1NldENvbXBvbmVudCxcbiAgQXBwRGlhbG9nUGVybWlzc2lvbnNTZXRPYmplY3RDb21wb25lbnQsXG4gIEFwcERpYWxvZ0NvcHlDb21wb25lbnQsXG4gIEFwcERpYWxvZ1VwbG9hZEZpbGVzQ29tcG9uZW50LFxuICBBcHBEaWFsb2dNeURldGFpbHNDb21wb25lbnQsXG4gIEFwcERpYWxvZ0NvbmZpcm1hdGlvbkNvbXBvbmVudFxuXTtcblxuY29uc3QgZGVjbGFyYXRpb25zID0gWy4uLmVudHJ5Q29tcG9uZW50cywgQXBwQnRuc0NhbmNlbE9rQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1GaWxlRmlyZWJhc2VNb2R1bGUsXG4gICAgTWF0Q2hpcHNNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBGaWxlVGFibGVNaW5pTW9kdWxlLFxuICAgIFRhZ3NDb250cm9sTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFsuLi5lbnRyeUNvbXBvbmVudHNdLFxuICBlbnRyeUNvbXBvbmVudHM6IFsuLi5lbnRyeUNvbXBvbmVudHNdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5kZWNsYXJhdGlvbnNdLFxuICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5neEZpbGVtYW5hZ2VyQ2xpZW50RGlhbG9nc01vZHVsZSB7fVxuIl19
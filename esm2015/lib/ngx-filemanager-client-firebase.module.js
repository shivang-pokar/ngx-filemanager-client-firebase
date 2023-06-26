/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule, PlatformLocation } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { getBaseHref } from './getBaseHref';
import { LibMainFileManagerComponent } from './ui/main-file-manager/main-file-manager.component';
import { AppBreadCrumbsComponent } from './ui/bread-crumbs/bread-crumbs.component';
import { AppBulkActionsComponent } from './ui/actions-toolbars/bulk-actions.component';
import { AppMainActionsComponent } from './ui/actions-toolbars/main-actions.component';
import { FileDetailsComponent } from './ui/file-details/file-details.component';
import { FormFileFirebaseModule } from './ui/file-upload/file-upload.module';
import { FilemanagerStatusService } from './services/state/status.service';
import { NotificationService } from './services/pure/notification.service';
import { LoggerService } from './services/logging/logger.service';
import { ConsoleLoggerService } from './services/logging/console-logger.service';
import { ServerFilesystemProviderService } from './services/pure/server-filesystem.service';
import { IconUrlResolverService } from './services/pure/icon-url-resolver.service';
import { NgxFilemanagerClientDialogsModule } from './ui/dialogs/dialogs.module';
import { FileSizeModule } from './ui/file-size/file-size.module';
import { AppFileTableModule } from './ui/file-table/file-table.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
const /** @type {?} */ declarations = [
    LibMainFileManagerComponent,
    AppBreadCrumbsComponent,
    AppBulkActionsComponent,
    AppMainActionsComponent,
    FileDetailsComponent,
];
const ɵ0 = getBaseHref;
export class NgxFilemanagerClientFirebaseModule {
}
NgxFilemanagerClientFirebaseModule.decorators = [
    { type: NgModule, args: [{
                declarations: declarations,
                imports: [
                    CommonModule,
                    FormsModule,
                    HttpClientModule,
                    ReactiveFormsModule,
                    FileSizeModule,
                    AppFileTableModule,
                    FormFileFirebaseModule,
                    NgxFilemanagerClientDialogsModule,
                    MatAutocompleteModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatCheckboxModule,
                    MatChipsModule,
                    MatCardModule,
                    MatDialogModule,
                    MatFormFieldModule,
                    MatIconModule,
                    MatInputModule,
                    MatMenuModule,
                    MatPaginatorModule,
                    MatProgressBarModule,
                    MatProgressSpinnerModule,
                    MatSelectModule,
                    MatSidenavModule,
                    MatSnackBarModule,
                    MatSortModule,
                    MatTableModule,
                    MatTabsModule,
                    MatToolbarModule,
                    MatTooltipModule,
                    MatExpansionModule
                ],
                exports: [LibMainFileManagerComponent],
                providers: [
                    ServerFilesystemProviderService,
                    FilemanagerStatusService,
                    NotificationService,
                    {
                        provide: APP_BASE_HREF,
                        useFactory: ɵ0,
                        deps: [PlatformLocation]
                    },
                    { provide: LoggerService, useClass: ConsoleLoggerService },
                    IconUrlResolverService
                ]
            },] }
];
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZpbGVtYW5hZ2VyLWNsaWVudC1maXJlYmFzZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvU2hpdmFuZy9QaSBTb2Z0d2FyZS9maWxlLW1hbmFnZXIvbmd4LWZpbGVtYW5hZ2VyL3Byb2plY3RzL25neC1maWxlbWFuYWdlci1jbGllbnQtZmlyZWJhc2Uvc3JjLyIsInNvdXJjZXMiOlsibGliL25neC1maWxlbWFuYWdlci1jbGllbnQtZmlyZWJhc2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDakcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGFBQWEsRUFB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QkFBaUI7b0JBQ2pCLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO29CQUNoQixrQkFBa0I7aUJBQ25CO2dCQUNELE9BQU8sRUFBRSxDQUFDLDJCQUEyQixDQUFDO2dCQUN0QyxTQUFTLEVBQUU7b0JBQ1QsK0JBQStCO29CQUMvQix3QkFBd0I7b0JBQ3hCLG1CQUFtQjtvQkFDbkI7d0JBQ0UsT0FBTyxFQUFFLGFBQWE7d0JBQ3RCLFVBQVUsSUFBYTt3QkFDdkIsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7cUJBQ3pCO29CQUNELEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUU7b0JBQzFELHNCQUFzQjtpQkFDdkI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBUFBfQkFTRV9IUkVGLCBDb21tb25Nb2R1bGUsIFBsYXRmb3JtTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IGdldEJhc2VIcmVmIH0gZnJvbSAnLi9nZXRCYXNlSHJlZic7XG5pbXBvcnQgeyBMaWJNYWluRmlsZU1hbmFnZXJDb21wb25lbnQgfSBmcm9tICcuL3VpL21haW4tZmlsZS1tYW5hZ2VyL21haW4tZmlsZS1tYW5hZ2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBCcmVhZENydW1ic0NvbXBvbmVudCB9IGZyb20gJy4vdWkvYnJlYWQtY3J1bWJzL2JyZWFkLWNydW1icy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwQnVsa0FjdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL3VpL2FjdGlvbnMtdG9vbGJhcnMvYnVsay1hY3Rpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBNYWluQWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vdWkvYWN0aW9ucy10b29sYmFycy9tYWluLWFjdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbGVEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi91aS9maWxlLWRldGFpbHMvZmlsZS1kZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtRmlsZUZpcmViYXNlTW9kdWxlIH0gZnJvbSAnLi91aS9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5tb2R1bGUnO1xuaW1wb3J0IHsgRmlsZW1hbmFnZXJTdGF0dXNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zdGF0ZS9zdGF0dXMuc2VydmljZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wdXJlL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2xvZ2dpbmcvbG9nZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uc29sZUxvZ2dlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2xvZ2dpbmcvY29uc29sZS1sb2dnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTZXJ2ZXJGaWxlc3lzdGVtUHJvdmlkZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wdXJlL3NlcnZlci1maWxlc3lzdGVtLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWNvblVybFJlc29sdmVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcHVyZS9pY29uLXVybC1yZXNvbHZlci5zZXJ2aWNlJztcbmltcG9ydCB7IE5neEZpbGVtYW5hZ2VyQ2xpZW50RGlhbG9nc01vZHVsZSB9IGZyb20gJy4vdWkvZGlhbG9ncy9kaWFsb2dzLm1vZHVsZSc7XG5pbXBvcnQgeyBGaWxlU2l6ZU1vZHVsZSB9IGZyb20gJy4vdWkvZmlsZS1zaXplL2ZpbGUtc2l6ZS5tb2R1bGUnO1xuaW1wb3J0IHsgQXBwRmlsZVRhYmxlTW9kdWxlIH0gZnJvbSAnLi91aS9maWxlLXRhYmxlL2ZpbGUtdGFibGUubW9kdWxlJztcblxuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRCdXR0b25Ub2dnbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24tdG9nZ2xlJztcbmltcG9ydCB7IE1hdENoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHsgTWF0Q2hpcHNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcbmltcG9ydCB7IE1hdFBhZ2luYXRvck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcbmltcG9ydCB7IE1hdFNlbGVjdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQgeyBNYXRTaWRlbmF2TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5pbXBvcnQgeyBNYXRTbmFja0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQgeyBNYXRTb3J0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5pbXBvcnQgeyBNYXRUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7IE1hdFRhYnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJzJztcbmltcG9ydCB7IE1hdFRvb2xiYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sYmFyJztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7IE1hdEV4cGFuc2lvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2V4cGFuc2lvbic7XG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcbiAgTGliTWFpbkZpbGVNYW5hZ2VyQ29tcG9uZW50LFxuICBBcHBCcmVhZENydW1ic0NvbXBvbmVudCxcbiAgQXBwQnVsa0FjdGlvbnNDb21wb25lbnQsXG4gIEFwcE1haW5BY3Rpb25zQ29tcG9uZW50LFxuICBGaWxlRGV0YWlsc0NvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogZGVjbGFyYXRpb25zLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGaWxlU2l6ZU1vZHVsZSxcblxuICAgIEFwcEZpbGVUYWJsZU1vZHVsZSxcbiAgICBGb3JtRmlsZUZpcmViYXNlTW9kdWxlLFxuICAgIE5neEZpbGVtYW5hZ2VyQ2xpZW50RGlhbG9nc01vZHVsZSxcblxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdENoaXBzTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIE1hdFRhYnNNb2R1bGUsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTGliTWFpbkZpbGVNYW5hZ2VyQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU2VydmVyRmlsZXN5c3RlbVByb3ZpZGVyU2VydmljZSxcbiAgICBGaWxlbWFuYWdlclN0YXR1c1NlcnZpY2UsXG4gICAgTm90aWZpY2F0aW9uU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLFxuICAgICAgdXNlRmFjdG9yeTogZ2V0QmFzZUhyZWYsXG4gICAgICBkZXBzOiBbUGxhdGZvcm1Mb2NhdGlvbl1cbiAgICB9LFxuICAgIHsgcHJvdmlkZTogTG9nZ2VyU2VydmljZSwgdXNlQ2xhc3M6IENvbnNvbGVMb2dnZXJTZXJ2aWNlIH0sXG4gICAgSWNvblVybFJlc29sdmVyU2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEZpbGVtYW5hZ2VyQ2xpZW50RmlyZWJhc2VNb2R1bGUgeyB9XG4iXX0=
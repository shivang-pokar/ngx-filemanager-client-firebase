/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule, PlatformLocation } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { Interceptor } from './interceptor';
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
                    IconUrlResolverService,
                    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
                ]
            },] }
];
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZpbGVtYW5hZ2VyLWNsaWVudC1maXJlYmFzZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvU2hpdmFuZy9QaSBTb2Z0d2FyZS9maWxlLW1hbmFnZXIvbmd4LWZpbGVtYW5hZ2VyL3Byb2plY3RzL25neC1maWxlbWFuYWdlci1jbGllbnQtZmlyZWJhc2Uvc3JjLyIsInNvdXJjZXMiOlsibGliL25neC1maWxlbWFuYWdlci1jbGllbnQtZmlyZWJhc2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDakcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxF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QkFBb0I7b0JBQ3BCLHdCQUF3QjtvQkFDeEIsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtvQkFDakIsYUFBYTtvQkFDYixjQUFjO29CQUNkLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQixnQkFBZ0I7b0JBQ2hCLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsMkJBQTJCLENBQUM7Z0JBQ3RDLFNBQVMsRUFBRTtvQkFDVCwrQkFBK0I7b0JBQy9CLHdCQUF3QjtvQkFDeEIsbUJBQW1CO29CQUNuQjt3QkFDRSxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsVUFBVSxJQUFhO3dCQUN2QixJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztxQkFDekI7b0JBQ0QsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRTtvQkFDMUQsc0JBQXNCO29CQUN0QixFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7aUJBQ25FO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQVBQX0JBU0VfSFJFRiwgQ29tbW9uTW9kdWxlLCBQbGF0Zm9ybUxvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgZ2V0QmFzZUhyZWYgfSBmcm9tICcuL2dldEJhc2VIcmVmJztcbmltcG9ydCB7IExpYk1haW5GaWxlTWFuYWdlckNvbXBvbmVudCB9IGZyb20gJy4vdWkvbWFpbi1maWxlLW1hbmFnZXIvbWFpbi1maWxlLW1hbmFnZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcEJyZWFkQ3J1bWJzQ29tcG9uZW50IH0gZnJvbSAnLi91aS9icmVhZC1jcnVtYnMvYnJlYWQtY3J1bWJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBCdWxrQWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vdWkvYWN0aW9ucy10b29sYmFycy9idWxrLWFjdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcE1haW5BY3Rpb25zQ29tcG9uZW50IH0gZnJvbSAnLi91aS9hY3Rpb25zLXRvb2xiYXJzL21haW4tYWN0aW9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsZURldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL3VpL2ZpbGUtZGV0YWlscy9maWxlLWRldGFpbHMuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1GaWxlRmlyZWJhc2VNb2R1bGUgfSBmcm9tICcuL3VpL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLm1vZHVsZSc7XG5pbXBvcnQgeyBGaWxlbWFuYWdlclN0YXR1c1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3N0YXRlL3N0YXR1cy5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3B1cmUvbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbG9nZ2luZy9sb2dnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb25zb2xlTG9nZ2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbG9nZ2luZy9jb25zb2xlLWxvZ2dlci5zZXJ2aWNlJztcbmltcG9ydCB7IFNlcnZlckZpbGVzeXN0ZW1Qcm92aWRlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3B1cmUvc2VydmVyLWZpbGVzeXN0ZW0uc2VydmljZSc7XG5pbXBvcnQgeyBJY29uVXJsUmVzb2x2ZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wdXJlL2ljb24tdXJsLXJlc29sdmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmd4RmlsZW1hbmFnZXJDbGllbnREaWFsb2dzTW9kdWxlIH0gZnJvbSAnLi91aS9kaWFsb2dzL2RpYWxvZ3MubW9kdWxlJztcbmltcG9ydCB7IEZpbGVTaXplTW9kdWxlIH0gZnJvbSAnLi91aS9maWxlLXNpemUvZmlsZS1zaXplLm1vZHVsZSc7XG5pbXBvcnQgeyBBcHBGaWxlVGFibGVNb2R1bGUgfSBmcm9tICcuL3VpL2ZpbGUtdGFibGUvZmlsZS10YWJsZS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBNYXRBdXRvY29tcGxldGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbi10b2dnbGUnO1xuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQgeyBNYXRDaGlwc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcbmltcG9ydCB7IE1hdENhcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7IE1hdFByb2dyZXNzQmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyJztcbmltcG9ydCB7IE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXInO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IE1hdFNpZGVuYXZNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcbmltcG9ydCB7IE1hdFNuYWNrQmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7IE1hdFNvcnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgTWF0VGFic01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMnO1xuaW1wb3J0IHsgTWF0VG9vbGJhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2xiYXInO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHsgTWF0RXhwYW5zaW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZXhwYW5zaW9uJztcbmltcG9ydCB7IEludGVyY2VwdG9yIH0gZnJvbSAnLi9pbnRlcmNlcHRvcic7XG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcbiAgTGliTWFpbkZpbGVNYW5hZ2VyQ29tcG9uZW50LFxuICBBcHBCcmVhZENydW1ic0NvbXBvbmVudCxcbiAgQXBwQnVsa0FjdGlvbnNDb21wb25lbnQsXG4gIEFwcE1haW5BY3Rpb25zQ29tcG9uZW50LFxuICBGaWxlRGV0YWlsc0NvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogZGVjbGFyYXRpb25zLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGaWxlU2l6ZU1vZHVsZSxcblxuICAgIEFwcEZpbGVUYWJsZU1vZHVsZSxcbiAgICBGb3JtRmlsZUZpcmViYXNlTW9kdWxlLFxuICAgIE5neEZpbGVtYW5hZ2VyQ2xpZW50RGlhbG9nc01vZHVsZSxcblxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdENoaXBzTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIE1hdFRhYnNNb2R1bGUsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTGliTWFpbkZpbGVNYW5hZ2VyQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU2VydmVyRmlsZXN5c3RlbVByb3ZpZGVyU2VydmljZSxcbiAgICBGaWxlbWFuYWdlclN0YXR1c1NlcnZpY2UsXG4gICAgTm90aWZpY2F0aW9uU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLFxuICAgICAgdXNlRmFjdG9yeTogZ2V0QmFzZUhyZWYsXG4gICAgICBkZXBzOiBbUGxhdGZvcm1Mb2NhdGlvbl1cbiAgICB9LFxuICAgIHsgcHJvdmlkZTogTG9nZ2VyU2VydmljZSwgdXNlQ2xhc3M6IENvbnNvbGVMb2dnZXJTZXJ2aWNlIH0sXG4gICAgSWNvblVybFJlc29sdmVyU2VydmljZSxcbiAgICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RmlsZW1hbmFnZXJDbGllbnRGaXJlYmFzZU1vZHVsZSB7IH1cbiJdfQ==
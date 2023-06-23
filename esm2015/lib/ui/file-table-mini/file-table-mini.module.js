/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { AppFileTableMiniFolderBrowserComponent } from './file-table-mini-folder-browser.component';
import { AppActionsMiniBrowserComponent } from './actions-mini-browser.component';
import { CommonModule } from '@angular/common';
import { FileSizeModule } from '../file-size/file-size.module';
import { AppFileTableModule } from '../file-table/file-table.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
export class FileTableMiniModule {
}
FileTableMiniModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FileSizeModule,
                    MatButtonModule,
                    MatIconModule,
                    AppFileTableModule,
                    MatToolbarModule
                ],
                exports: [AppFileTableMiniFolderBrowserComponent],
                declarations: [
                    AppFileTableMiniFolderBrowserComponent,
                    AppActionsMiniBrowserComponent
                ],
                providers: []
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS10YWJsZS1taW5pLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9TaGl2YW5nL1BpIFNvZnR3YXJlL2ZpbGUtbWFuYWdlci9uZ3gtZmlsZW1hbmFnZXIvcHJvamVjdHMvbmd4LWZpbGVtYW5hZ2VyLWNsaWVudC1maXJlYmFzZS9zcmMvIiwic291cmNlcyI6WyJsaWIvdWkvZmlsZS10YWJsZS1taW5pL2ZpbGUtdGFibGUtbWluaS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDcEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUvRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBa0I3RCxNQUFNLE9BQU8sbUJBQW1COzs7WUFoQi9CLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixjQUFjO29CQUNkLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixrQkFBa0I7b0JBQ2xCLGdCQUFnQjtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsc0NBQXNDLENBQUM7Z0JBQ2pELFlBQVksRUFBRTtvQkFDWixzQ0FBc0M7b0JBQ3RDLDhCQUE4QjtpQkFDL0I7Z0JBQ0QsU0FBUyxFQUFFLEVBQUU7YUFDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBGaWxlVGFibGVNaW5pRm9sZGVyQnJvd3NlckNvbXBvbmVudCB9IGZyb20gJy4vZmlsZS10YWJsZS1taW5pLWZvbGRlci1icm93c2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBBY3Rpb25zTWluaUJyb3dzZXJDb21wb25lbnQgfSBmcm9tICcuL2FjdGlvbnMtbWluaS1icm93c2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRmlsZVNpemVNb2R1bGUgfSBmcm9tICcuLi9maWxlLXNpemUvZmlsZS1zaXplLm1vZHVsZSc7XG5cbmltcG9ydCB7IEFwcEZpbGVUYWJsZU1vZHVsZSB9IGZyb20gJy4uL2ZpbGUtdGFibGUvZmlsZS10YWJsZS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0VG9vbGJhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2xiYXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZpbGVTaXplTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIEFwcEZpbGVUYWJsZU1vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtBcHBGaWxlVGFibGVNaW5pRm9sZGVyQnJvd3NlckNvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcEZpbGVUYWJsZU1pbmlGb2xkZXJCcm93c2VyQ29tcG9uZW50LFxuICAgIEFwcEFjdGlvbnNNaW5pQnJvd3NlckNvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVUYWJsZU1pbmlNb2R1bGUge31cbiJdfQ==
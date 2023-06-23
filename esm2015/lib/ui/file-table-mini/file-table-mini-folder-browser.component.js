/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { __awaiter } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { LoggerService } from '../../services/logging/logger.service';
import { ActionHandlersService } from '../main-file-manager/action-handlers.service';
import { ClientFileSystemService } from '../../services/pure/client-filesystem.service';
import { OptimisticFilesystemService } from '../../services/pure/optimistic-filesystem.service';
import { takeUntil } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
export class AppFileTableMiniFolderBrowserComponent {
    /**
     * @param {?} logger
     */
    constructor(logger) {
        this.logger = logger;
        this.selectedItem = new SelectionModel(false);
        this.enterDirectory = new EventEmitter();
        this.selectedDirectory = new EventEmitter();
        this.destroyed = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.selectedItem.changed.pipe(takeUntil(this.destroyed)).subscribe(() => {
                const /** @type {?} */ selectedDir = this.selectedItem.selected[0];
                this.selectedDirectory.emit(selectedDir);
            });
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed.next();
    }
    /**
     * @param {?} folderPath
     * @return {?}
     */
    onEnterFolder(folderPath) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info('onEnterFolder', { folderPath });
            this.enterDirectory.emit(folderPath);
            this.selectedDirectory.emit(folderPath);
        });
    }
}
AppFileTableMiniFolderBrowserComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'app-file-table-mini-folder-browser',
                template: `
    <div class="full-width mini-browser-height">
      <actions-mini-browser [mainActions]="mainActions"> </actions-mini-browser>
      <h4 class="p5 m0 color-grey">Folders</h4>
      <div class="flex-col bg-white">
        <card-folder
          *ngFor="let folder of folders"
          [folder]="folder"
          [selectedItem]="selectedItem"
          (enterFolder)="onEnterFolder($event)"
        >
        </card-folder>
      </div>
    </div>
  `,
                providers: [
                    ActionHandlersService,
                    ClientFileSystemService,
                    OptimisticFilesystemService
                ],
                styles: [`
      .mini-browser-height {
        min-height: 400px;
        max-height: 80vh;
      }
      .bg-white {
        background-color: #fff;
      }
    `, "h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
            }] }
];
/** @nocollapse */
AppFileTableMiniFolderBrowserComponent.ctorParameters = () => [
    { type: LoggerService }
];
AppFileTableMiniFolderBrowserComponent.propDecorators = {
    folders: [{ type: Input }],
    mainActions: [{ type: Input }],
    enterDirectory: [{ type: Output }],
    selectedDirectory: [{ type: Output }]
};
function AppFileTableMiniFolderBrowserComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppFileTableMiniFolderBrowserComponent.prototype.selectedItem;
    /** @type {?} */
    AppFileTableMiniFolderBrowserComponent.prototype.folders;
    /** @type {?} */
    AppFileTableMiniFolderBrowserComponent.prototype.mainActions;
    /** @type {?} */
    AppFileTableMiniFolderBrowserComponent.prototype.enterDirectory;
    /** @type {?} */
    AppFileTableMiniFolderBrowserComponent.prototype.selectedDirectory;
    /** @type {?} */
    AppFileTableMiniFolderBrowserComponent.prototype.destroyed;
    /** @type {?} */
    AppFileTableMiniFolderBrowserComponent.prototype.logger;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS10YWJsZS1taW5pLWZvbGRlci1icm93c2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9TaGl2YW5nL1BpIFNvZnR3YXJlL2ZpbGUtbWFuYWdlci9uZ3gtZmlsZW1hbmFnZXIvcHJvamVjdHMvbmd4LWZpbGVtYW5hZ2VyLWNsaWVudC1maXJlYmFzZS9zcmMvIiwic291cmNlcyI6WyJsaWIvdWkvZmlsZS10YWJsZS1taW5pL2ZpbGUtdGFibGUtbWluaS1mb2xkZXItYnJvd3Nlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUdiLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUF1QzFELE1BQU0sT0FBTyxzQ0FBc0M7Ozs7SUFlakQsWUFBb0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTs0QkFiMUIsSUFBSSxjQUFjLENBQVMsS0FBSyxDQUFDOzhCQU8vQixJQUFJLFlBQVksRUFBVTtpQ0FFdkIsSUFBSSxZQUFZLEVBQVU7UUFFOUMsaUJBQVksSUFBSSxPQUFPLEVBQUUsQ0FBQztLQUVtQjs7OztJQUV2QyxRQUFROztZQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDdkUsdUJBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzFDLENBQUMsQ0FBQzs7S0FDSjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3ZCOzs7OztJQUVLLGFBQWEsQ0FBQyxVQUFrQjs7WUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOztLQUN6Qzs7O1lBcEVGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLG9DQUFvQztnQkFDOUMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7OztHQWNUO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxxQkFBcUI7b0JBQ3JCLHVCQUF1QjtvQkFDdkIsMkJBQTJCO2lCQUM1Qjt5QkFFQzs7Ozs7Ozs7S0FRQzthQUdKOzs7O1lBM0NRLGFBQWE7OztzQkFnRG5CLEtBQUs7MEJBRUwsS0FBSzs2QkFFTCxNQUFNO2dDQUVOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3JlVHlwZXMgfSBmcm9tICcuLi8uLi8uLi9jb3JlLXR5cGVzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2dnaW5nL2xvZ2dlci5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGlvbkhhbmRsZXJzU2VydmljZSB9IGZyb20gJy4uL21haW4tZmlsZS1tYW5hZ2VyL2FjdGlvbi1oYW5kbGVycy5zZXJ2aWNlJztcbmltcG9ydCB7IENsaWVudEZpbGVTeXN0ZW1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHVyZS9jbGllbnQtZmlsZXN5c3RlbS5zZXJ2aWNlJztcbmltcG9ydCB7IE9wdGltaXN0aWNGaWxlc3lzdGVtU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3B1cmUvb3B0aW1pc3RpYy1maWxlc3lzdGVtLnNlcnZpY2UnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWwgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgTWFpbkFjdGlvbkRlZmluaXRpb24gfSBmcm9tICcuLi9hY3Rpb25zLXRvb2xiYXJzL01haW5BY3Rpb25EZWZpbml0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdhcHAtZmlsZS10YWJsZS1taW5pLWZvbGRlci1icm93c2VyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZnVsbC13aWR0aCBtaW5pLWJyb3dzZXItaGVpZ2h0XCI+XG4gICAgICA8YWN0aW9ucy1taW5pLWJyb3dzZXIgW21haW5BY3Rpb25zXT1cIm1haW5BY3Rpb25zXCI+IDwvYWN0aW9ucy1taW5pLWJyb3dzZXI+XG4gICAgICA8aDQgY2xhc3M9XCJwNSBtMCBjb2xvci1ncmV5XCI+Rm9sZGVyczwvaDQ+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleC1jb2wgYmctd2hpdGVcIj5cbiAgICAgICAgPGNhcmQtZm9sZGVyXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGZvbGRlciBvZiBmb2xkZXJzXCJcbiAgICAgICAgICBbZm9sZGVyXT1cImZvbGRlclwiXG4gICAgICAgICAgW3NlbGVjdGVkSXRlbV09XCJzZWxlY3RlZEl0ZW1cIlxuICAgICAgICAgIChlbnRlckZvbGRlcik9XCJvbkVudGVyRm9sZGVyKCRldmVudClcIlxuICAgICAgICA+XG4gICAgICAgIDwvY2FyZC1mb2xkZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQWN0aW9uSGFuZGxlcnNTZXJ2aWNlLFxuICAgIENsaWVudEZpbGVTeXN0ZW1TZXJ2aWNlLFxuICAgIE9wdGltaXN0aWNGaWxlc3lzdGVtU2VydmljZVxuICBdLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAubWluaS1icm93c2VyLWhlaWdodCB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICAgICAgfVxuICAgICAgLmJnLXdoaXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICBgXG4gIF0sXG4gIHN0eWxlVXJsczogWycuLi9zaGFyZWQtdXRpbGl0eS1zdHlsZXMuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFwcEZpbGVUYWJsZU1pbmlGb2xkZXJCcm93c2VyQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzZWxlY3RlZEl0ZW0gPSBuZXcgU2VsZWN0aW9uTW9kZWw8c3RyaW5nPihmYWxzZSk7XG5cbiAgQElucHV0KClcbiAgZm9sZGVyczogQ29yZVR5cGVzLlJlc0ZpbGVbXTtcbiAgQElucHV0KClcbiAgbWFpbkFjdGlvbnM6IE1haW5BY3Rpb25EZWZpbml0aW9uW107XG4gIEBPdXRwdXQoKVxuICBlbnRlckRpcmVjdG9yeSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KClcbiAgc2VsZWN0ZWREaXJlY3RvcnkgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBkZXN0cm95ZWQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlKSB7fVxuXG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtLmNoYW5nZWQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ZWREaXIgPSB0aGlzLnNlbGVjdGVkSXRlbS5zZWxlY3RlZFswXTtcbiAgICAgIHRoaXMuc2VsZWN0ZWREaXJlY3RvcnkuZW1pdChzZWxlY3RlZERpcik7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3llZC5uZXh0KCk7XG4gIH1cblxuICBhc3luYyBvbkVudGVyRm9sZGVyKGZvbGRlclBhdGg6IHN0cmluZykge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oJ29uRW50ZXJGb2xkZXInLCB7IGZvbGRlclBhdGggfSk7XG4gICAgdGhpcy5lbnRlckRpcmVjdG9yeS5lbWl0KGZvbGRlclBhdGgpO1xuICAgIHRoaXMuc2VsZWN0ZWREaXJlY3RvcnkuZW1pdChmb2xkZXJQYXRoKTtcbiAgfVxufVxuIl19
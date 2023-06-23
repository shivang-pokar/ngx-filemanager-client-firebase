/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { crumbFactory } from './crumb-factory';
import { LoggerService } from '../../services/logging/logger.service';
export class AppBreadCrumbsComponent {
    /**
     * @param {?} logger
     */
    constructor(logger) {
        this.logger = logger;
        this.clickedCrumb = new EventEmitter();
    }
    /**
     * @param {?} newPath
     * @return {?}
     */
    set currentPath(newPath) {
        this._currentPath = newPath;
        this.makeCrumbs(newPath);
    }
    /**
     * @param {?} newConfig
     * @return {?}
     */
    set config(newConfig) {
        this._config = newConfig;
        this.makeCrumbs(this._currentPath);
    }
    /**
     * @param {?} newPath
     * @return {?}
     */
    makeCrumbs(newPath) {
        if (!this._config) {
            return;
        }
        const /** @type {?} */ virtualRoot = this._config.virtualRoot;
        this.crumbs = crumbFactory.MakeCrumbs(virtualRoot, newPath || virtualRoot);
        this.logger.info('makeCrumbs', {
            crumbs: this.crumbs,
            virtualRoot,
            newPath
        });
    }
    /**
     * @param {?} crumb
     * @return {?}
     */
    onClickCrumb(crumb) {
        this.logger.info('onClickCrumb', { crumb });
        this.clickedCrumb.emit(crumb.path);
    }
}
AppBreadCrumbsComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'bread-crumbs',
                template: `
    <div class="flex-row align-center">
      <div
        class="flex-row align-center"
        *ngFor="let crumb of crumbs; let first = first; let last = last"
      >
        <div class="divider" *ngIf="!first">
          >
        </div>
        <button
          #myButton
          class="crumb"
          mat-raised-button
          color="secondary"
          [disabled]="last"
          (click)="onClickCrumb(crumb); myButton.disabled = true"
        >
          <mat-icon *ngIf="crumb.icon">{{ crumb.icon }}</mat-icon>
          {{ crumb.label }}
        </button>
      </div>
    </div>
  `,
                styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
            }] }
];
/** @nocollapse */
AppBreadCrumbsComponent.ctorParameters = () => [
    { type: LoggerService }
];
AppBreadCrumbsComponent.propDecorators = {
    clickedCrumb: [{ type: Output }],
    currentPath: [{ type: Input }],
    config: [{ type: Input }]
};
function AppBreadCrumbsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppBreadCrumbsComponent.prototype.crumbs;
    /** @type {?} */
    AppBreadCrumbsComponent.prototype.clickedCrumb;
    /** @type {?} */
    AppBreadCrumbsComponent.prototype._currentPath;
    /** @type {?} */
    AppBreadCrumbsComponent.prototype._config;
    /** @type {?} */
    AppBreadCrumbsComponent.prototype.logger;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWQtY3J1bWJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9TaGl2YW5nL1BpIFNvZnR3YXJlL2ZpbGUtbWFuYWdlci9uZ3gtZmlsZW1hbmFnZXIvcHJvamVjdHMvbmd4LWZpbGVtYW5hZ2VyLWNsaWVudC1maXJlYmFzZS9zcmMvIiwic291cmNlcyI6WyJsaWIvdWkvYnJlYWQtY3J1bWJzL2JyZWFkLWNydW1icy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBYyxNQUFNLGlCQUFpQixDQUFDO0FBRTNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQThCdEUsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQW1CbEMsWUFBb0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTs0QkFmMUIsSUFBSSxZQUFZLEVBQVU7S0FlSTs7Ozs7SUFaN0MsSUFDSSxXQUFXLENBQUMsT0FBTztRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzFCOzs7OztJQUVELElBQ0ksTUFBTSxDQUFDLFNBQVM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDcEM7Ozs7O0lBSU8sVUFBVSxDQUFDLE9BQWU7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBQ0QsdUJBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxJQUFJLFdBQVcsQ0FBQyxDQUFDO1FBRTNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsV0FBVztZQUNYLE9BQU87U0FDUixDQUFDLENBQUM7Ozs7OztJQUdMLFlBQVksQ0FBQyxLQUFpQjtRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNwQzs7O1lBbEVGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCVDs7YUFFRjs7OztZQTdCUSxhQUFhOzs7MkJBaUNuQixNQUFNOzBCQUlOLEtBQUs7cUJBTUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjcnVtYkZhY3RvcnksIEJyZWFkQ3J1bWIgfSBmcm9tICcuL2NydW1iLWZhY3RvcnknO1xuaW1wb3J0IHsgRmlsZU1hbmFnZXJDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWd1cmF0aW9uL2NsaWVudC1jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2dnaW5nL2xvZ2dlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdicmVhZC1jcnVtYnMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJmbGV4LXJvdyBhbGlnbi1jZW50ZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJmbGV4LXJvdyBhbGlnbi1jZW50ZXJcIlxuICAgICAgICAqbmdGb3I9XCJsZXQgY3J1bWIgb2YgY3J1bWJzOyBsZXQgZmlyc3QgPSBmaXJzdDsgbGV0IGxhc3QgPSBsYXN0XCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRpdmlkZXJcIiAqbmdJZj1cIiFmaXJzdFwiPlxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAjbXlCdXR0b25cbiAgICAgICAgICBjbGFzcz1cImNydW1iXCJcbiAgICAgICAgICBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwibGFzdFwiXG4gICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2tDcnVtYihjcnVtYik7IG15QnV0dG9uLmRpc2FibGVkID0gdHJ1ZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJjcnVtYi5pY29uXCI+e3sgY3J1bWIuaWNvbiB9fTwvbWF0LWljb24+XG4gICAgICAgICAge3sgY3J1bWIubGFiZWwgfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4uL3NoYXJlZC11dGlsaXR5LXN0eWxlcy5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXBwQnJlYWRDcnVtYnNDb21wb25lbnQge1xuICBjcnVtYnM6IEJyZWFkQ3J1bWJbXTtcblxuICBAT3V0cHV0KClcbiAgY2xpY2tlZENydW1iID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgX2N1cnJlbnRQYXRoOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBjdXJyZW50UGF0aChuZXdQYXRoKSB7XG4gICAgdGhpcy5fY3VycmVudFBhdGggPSBuZXdQYXRoO1xuICAgIHRoaXMubWFrZUNydW1icyhuZXdQYXRoKTtcbiAgfVxuICBfY29uZmlnOiBGaWxlTWFuYWdlckNvbmZpZztcbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyhuZXdDb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPSBuZXdDb25maWc7XG4gICAgdGhpcy5tYWtlQ3J1bWJzKHRoaXMuX2N1cnJlbnRQYXRoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlKSB7fVxuXG4gIHByaXZhdGUgbWFrZUNydW1icyhuZXdQYXRoOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB2aXJ0dWFsUm9vdCA9IHRoaXMuX2NvbmZpZy52aXJ0dWFsUm9vdDtcbiAgICB0aGlzLmNydW1icyA9IGNydW1iRmFjdG9yeS5NYWtlQ3J1bWJzKHZpcnR1YWxSb290LCBuZXdQYXRoIHx8IHZpcnR1YWxSb290KTtcblxuICAgIHRoaXMubG9nZ2VyLmluZm8oJ21ha2VDcnVtYnMnLCB7XG4gICAgICBjcnVtYnM6IHRoaXMuY3J1bWJzLFxuICAgICAgdmlydHVhbFJvb3QsXG4gICAgICBuZXdQYXRoXG4gICAgfSk7XG4gIH1cblxuICBvbkNsaWNrQ3J1bWIoY3J1bWI6IEJyZWFkQ3J1bWIpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdvbkNsaWNrQ3J1bWInLCB7IGNydW1iIH0pO1xuICAgIHRoaXMuY2xpY2tlZENydW1iLmVtaXQoY3J1bWIucGF0aCk7XG4gIH1cbn1cbiJdfQ==
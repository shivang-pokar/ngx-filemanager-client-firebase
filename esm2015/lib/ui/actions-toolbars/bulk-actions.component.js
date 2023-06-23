/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { __awaiter } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
export class AppBulkActionsComponent {
    constructor() {
        this.clearSelected = new EventEmitter();
    }
    /**
     * @param {?} action
     * @param {?} selected
     * @return {?}
     */
    executeAction(action, selected) {
        return __awaiter(this, void 0, void 0, function* () {
            yield action.onClick(selected);
            this.clearSelected.emit();
        });
    }
}
AppBulkActionsComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'bulk-actions',
                template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row class="top-toolbar">
        <span class="top-toolbar-label">
          Bulk Actions
        </span>
      </mat-toolbar-row>
      <mat-toolbar-row class="action-toolbar scroll-x">
        <div class="flex-row" *ngIf="bulkSelected$ | async as selected">
          <div *ngFor="let action of bulkActions">
            <button
              class="mr-10 flex-row align-center"
              mat-raised-button
              [disabled]="action.$disabled | async"
              [color]="action.color"
              (click)="executeAction(action, selected)"
            >
              <mat-icon>{{ action.icon }}</mat-icon>
              {{ action.label }}
            </button>
          </div>
        </div>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
                styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
            }] }
];
AppBulkActionsComponent.propDecorators = {
    bulkActions: [{ type: Input }],
    bulkSelected$: [{ type: Input }],
    clearSelected: [{ type: Output }]
};
function AppBulkActionsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppBulkActionsComponent.prototype.bulkActions;
    /** @type {?} */
    AppBulkActionsComponent.prototype.bulkSelected$;
    /** @type {?} */
    AppBulkActionsComponent.prototype.clearSelected;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVsay1hY3Rpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9TaGl2YW5nL1BpIFNvZnR3YXJlL2ZpbGUtbWFuYWdlci9uZ3gtZmlsZW1hbmFnZXIvcHJvamVjdHMvbmd4LWZpbGVtYW5hZ2VyLWNsaWVudC1maXJlYmFzZS9zcmMvIiwic291cmNlcyI6WyJsaWIvdWkvYWN0aW9ucy10b29sYmFycy9idWxrLWFjdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd2RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBZ0NsQyxNQUFNLE9BQU8sdUJBQXVCOzs2QkFNbEIsSUFBSSxZQUFZLEVBQVE7Ozs7Ozs7SUFFbEMsYUFBYSxDQUNqQixNQUE0QixFQUM1QixRQUE2Qjs7WUFFN0IsTUFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7O0tBQzNCOzs7WUE1Q0YsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3QlQ7O2FBRUY7OzswQkFFRSxLQUFLOzRCQUVMLEtBQUs7NEJBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdWxrQWN0aW9uRGVmaW5pdGlvbiB9IGZyb20gJy4vQnVsa0FjdGlvbkRlZmluaXRpb24nO1xuaW1wb3J0IHsgQ29yZVR5cGVzIH0gZnJvbSAnLi4vLi4vLi4vY29yZS10eXBlcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnYnVsay1hY3Rpb25zJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bWF0LXRvb2xiYXIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICA8bWF0LXRvb2xiYXItcm93IGNsYXNzPVwidG9wLXRvb2xiYXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b3AtdG9vbGJhci1sYWJlbFwiPlxuICAgICAgICAgIEJ1bGsgQWN0aW9uc1xuICAgICAgICA8L3NwYW4+XG4gICAgICA8L21hdC10b29sYmFyLXJvdz5cbiAgICAgIDxtYXQtdG9vbGJhci1yb3cgY2xhc3M9XCJhY3Rpb24tdG9vbGJhciBzY3JvbGwteFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1yb3dcIiAqbmdJZj1cImJ1bGtTZWxlY3RlZCQgfCBhc3luYyBhcyBzZWxlY3RlZFwiPlxuICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGFjdGlvbiBvZiBidWxrQWN0aW9uc1wiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzcz1cIm1yLTEwIGZsZXgtcm93IGFsaWduLWNlbnRlclwiXG4gICAgICAgICAgICAgIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJhY3Rpb24uJGRpc2FibGVkIHwgYXN5bmNcIlxuICAgICAgICAgICAgICBbY29sb3JdPVwiYWN0aW9uLmNvbG9yXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImV4ZWN1dGVBY3Rpb24oYWN0aW9uLCBzZWxlY3RlZClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bWF0LWljb24+e3sgYWN0aW9uLmljb24gfX08L21hdC1pY29uPlxuICAgICAgICAgICAgICB7eyBhY3Rpb24ubGFiZWwgfX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWF0LXRvb2xiYXItcm93PlxuICAgIDwvbWF0LXRvb2xiYXI+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuLi9zaGFyZWQtdXRpbGl0eS1zdHlsZXMuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFwcEJ1bGtBY3Rpb25zQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgYnVsa0FjdGlvbnM6IEJ1bGtBY3Rpb25EZWZpbml0aW9uW107XG4gIEBJbnB1dCgpXG4gIGJ1bGtTZWxlY3RlZCQ6IE9ic2VydmFibGU8Q29yZVR5cGVzLlJlc0ZpbGVbXT47XG4gIEBPdXRwdXQoKVxuICBjbGVhclNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGFzeW5jIGV4ZWN1dGVBY3Rpb24oXG4gICAgYWN0aW9uOiBCdWxrQWN0aW9uRGVmaW5pdGlvbixcbiAgICBzZWxlY3RlZDogQ29yZVR5cGVzLlJlc0ZpbGVbXVxuICApIHtcbiAgICBhd2FpdCBhY3Rpb24ub25DbGljayhzZWxlY3RlZCk7XG4gICAgdGhpcy5jbGVhclNlbGVjdGVkLmVtaXQoKTtcbiAgfVxufVxuIl19
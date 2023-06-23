/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class AppBtnsCancelOkComponent {
    constructor() {
        this.clickedOk = new EventEmitter();
        this.clickedCancel = new EventEmitter();
    }
}
AppBtnsCancelOkComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'btns-cancel-ok',
                template: `
    <div class="full-width text-center">
      <button mat-raised-button (click)="clickedCancel.emit()">
        <mat-icon>clear</mat-icon>
        Cancel
      </button>
      <button
        mat-raised-button
        color="primary"
        (click)="clickedOk.emit()"
        [disabled]="okDisabled"
      >
        <mat-icon>{{ okIcon }}</mat-icon>
        {{ okLabel }}
      </button>
    </div>
  `,
                styles: [`
      button {
        margin: 5px;
      }
    `]
            }] }
];
AppBtnsCancelOkComponent.propDecorators = {
    okDisabled: [{ type: Input }],
    okIcon: [{ type: Input }],
    okLabel: [{ type: Input }],
    clickedOk: [{ type: Output }],
    clickedCancel: [{ type: Output }]
};
function AppBtnsCancelOkComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppBtnsCancelOkComponent.prototype.okDisabled;
    /** @type {?} */
    AppBtnsCancelOkComponent.prototype.okIcon;
    /** @type {?} */
    AppBtnsCancelOkComponent.prototype.okLabel;
    /** @type {?} */
    AppBtnsCancelOkComponent.prototype.clickedOk;
    /** @type {?} */
    AppBtnsCancelOkComponent.prototype.clickedCancel;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnRucy1jYW5jZWwtb2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL1NoaXZhbmcvUGkgU29mdHdhcmUvZmlsZS1tYW5hZ2VyL25neC1maWxlbWFuYWdlci9wcm9qZWN0cy9uZ3gtZmlsZW1hbmFnZXItY2xpZW50LWZpcmViYXNlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi91aS9kaWFsb2dzL2J0bnMtY2FuY2VsLW9rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQThCdkUsTUFBTSxPQUFPLHdCQUF3Qjs7eUJBUXZCLElBQUksWUFBWSxFQUFROzZCQUVwQixJQUFJLFlBQVksRUFBUTs7OztZQXRDekMsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQlQ7eUJBRUM7Ozs7S0FJQzthQUVKOzs7eUJBRUUsS0FBSztxQkFFTCxLQUFLO3NCQUVMLEtBQUs7d0JBRUwsTUFBTTs0QkFFTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdidG5zLWNhbmNlbC1vaycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImZ1bGwtd2lkdGggdGV4dC1jZW50ZXJcIj5cbiAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImNsaWNrZWRDYW5jZWwuZW1pdCgpXCI+XG4gICAgICAgIDxtYXQtaWNvbj5jbGVhcjwvbWF0LWljb24+XG4gICAgICAgIENhbmNlbFxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIChjbGljayk9XCJjbGlja2VkT2suZW1pdCgpXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cIm9rRGlzYWJsZWRcIlxuICAgICAgPlxuICAgICAgICA8bWF0LWljb24+e3sgb2tJY29uIH19PC9tYXQtaWNvbj5cbiAgICAgICAge3sgb2tMYWJlbCB9fVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBCdG5zQ2FuY2VsT2tDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBva0Rpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBva0ljb246IHN0cmluZztcbiAgQElucHV0KClcbiAgb2tMYWJlbDogc3RyaW5nO1xuICBAT3V0cHV0KClcbiAgY2xpY2tlZE9rID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KClcbiAgY2xpY2tlZENhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbn1cbiJdfQ==
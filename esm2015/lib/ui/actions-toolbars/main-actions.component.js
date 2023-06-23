/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class AppMainActionsComponent {
}
AppMainActionsComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'main-actions',
                template: `
    <mat-toolbar>
      <mat-toolbar-row class="top-toolbar">
        <span class="top-toolbar-label">
          Folder Actions
        </span>
      </mat-toolbar-row>
      <mat-toolbar-row class="action-toolbar scroll-x">
        <div *ngFor="let action of mainActions">
          <button
            class="mr-10 has-pointer"
            mat-raised-button
            [color]="action.color"
            (click)="action.onClick(action)"
            [disabled]="action.$disabled | async"
          >
            <mat-icon inline="true">{{ action.icon }}</mat-icon>
            {{ action.label }}
          </button>
        </div>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
                styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}", `
      .top-toolbar-label {
        color: #8a8a8a;
      }
    `]
            }] }
];
AppMainActionsComponent.propDecorators = {
    mainActions: [{ type: Input }]
};
function AppMainActionsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppMainActionsComponent.prototype.mainActions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1hY3Rpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9TaGl2YW5nL1BpIFNvZnR3YXJlL2ZpbGUtbWFuYWdlci9uZ3gtZmlsZW1hbmFnZXIvcHJvamVjdHMvbmd4LWZpbGVtYW5hZ2VyLWNsaWVudC1maXJlYmFzZS9zcmMvIiwic291cmNlcyI6WyJsaWIvdWkvYWN0aW9ucy10b29sYmFycy9tYWluLWFjdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXNDakQsTUFBTSxPQUFPLHVCQUF1Qjs7O1lBbkNuQyxTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQlQ7Z3hDQUdDOzs7O0tBSUM7YUFFSjs7OzBCQUVFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYWluQWN0aW9uRGVmaW5pdGlvbiB9IGZyb20gJy4vTWFpbkFjdGlvbkRlZmluaXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ21haW4tYWN0aW9ucycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG1hdC10b29sYmFyPlxuICAgICAgPG1hdC10b29sYmFyLXJvdyBjbGFzcz1cInRvcC10b29sYmFyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidG9wLXRvb2xiYXItbGFiZWxcIj5cbiAgICAgICAgICBGb2xkZXIgQWN0aW9uc1xuICAgICAgICA8L3NwYW4+XG4gICAgICA8L21hdC10b29sYmFyLXJvdz5cbiAgICAgIDxtYXQtdG9vbGJhci1yb3cgY2xhc3M9XCJhY3Rpb24tdG9vbGJhciBzY3JvbGwteFwiPlxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBhY3Rpb24gb2YgbWFpbkFjdGlvbnNcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cIm1yLTEwIGhhcy1wb2ludGVyXCJcbiAgICAgICAgICAgIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgICAgICBbY29sb3JdPVwiYWN0aW9uLmNvbG9yXCJcbiAgICAgICAgICAgIChjbGljayk9XCJhY3Rpb24ub25DbGljayhhY3Rpb24pXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJhY3Rpb24uJGRpc2FibGVkIHwgYXN5bmNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxtYXQtaWNvbiBpbmxpbmU9XCJ0cnVlXCI+e3sgYWN0aW9uLmljb24gfX08L21hdC1pY29uPlxuICAgICAgICAgICAge3sgYWN0aW9uLmxhYmVsIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYXQtdG9vbGJhci1yb3c+XG4gICAgPC9tYXQtdG9vbGJhcj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4uL3NoYXJlZC11dGlsaXR5LXN0eWxlcy5zY3NzJ10sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC50b3AtdG9vbGJhci1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAjOGE4YThhO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNYWluQWN0aW9uc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIG1haW5BY3Rpb25zOiBNYWluQWN0aW9uRGVmaW5pdGlvbltdO1xufVxuIl19
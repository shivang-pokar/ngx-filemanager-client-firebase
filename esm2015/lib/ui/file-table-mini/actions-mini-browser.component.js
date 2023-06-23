/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class AppActionsMiniBrowserComponent {
}
AppActionsMiniBrowserComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'actions-mini-browser',
                template: `
    <mat-toolbar color="primary" *ngIf="this.mainActions">
      <mat-toolbar-row class="top-toolbar">
        <span class="top-toolbar-label">
          Actions
        </span>
      </mat-toolbar-row>
      <mat-toolbar-row class="action-toolbar scroll-x">
        <div *ngFor="let action of mainActions">
          <button
            class="action has-pointer"
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
                styles: [`
      button.action {
        margin-right: 10px;
      }
    `, "h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
            }] }
];
AppActionsMiniBrowserComponent.propDecorators = {
    mainActions: [{ type: Input }]
};
function AppActionsMiniBrowserComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppActionsMiniBrowserComponent.prototype.mainActions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy1taW5pLWJyb3dzZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL1NoaXZhbmcvUGkgU29mdHdhcmUvZmlsZS1tYW5hZ2VyL25neC1maWxlbWFuYWdlci9wcm9qZWN0cy9uZ3gtZmlsZW1hbmFnZXItY2xpZW50LWZpcmViYXNlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi91aS9maWxlLXRhYmxlLW1pbmkvYWN0aW9ucy1taW5pLWJyb3dzZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXNDakQsTUFBTSxPQUFPLDhCQUE4Qjs7O1lBbkMxQyxTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCVDt5QkFFQzs7OztLQUlDO2FBR0o7OzswQkFFRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFpbkFjdGlvbkRlZmluaXRpb24gfSBmcm9tICcuLi9hY3Rpb25zLXRvb2xiYXJzL01haW5BY3Rpb25EZWZpbml0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdhY3Rpb25zLW1pbmktYnJvd3NlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG1hdC10b29sYmFyIGNvbG9yPVwicHJpbWFyeVwiICpuZ0lmPVwidGhpcy5tYWluQWN0aW9uc1wiPlxuICAgICAgPG1hdC10b29sYmFyLXJvdyBjbGFzcz1cInRvcC10b29sYmFyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidG9wLXRvb2xiYXItbGFiZWxcIj5cbiAgICAgICAgICBBY3Rpb25zXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvbWF0LXRvb2xiYXItcm93PlxuICAgICAgPG1hdC10b29sYmFyLXJvdyBjbGFzcz1cImFjdGlvbi10b29sYmFyIHNjcm9sbC14XCI+XG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGFjdGlvbiBvZiBtYWluQWN0aW9uc1wiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwiYWN0aW9uIGhhcy1wb2ludGVyXCJcbiAgICAgICAgICAgIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgICAgICBbY29sb3JdPVwiYWN0aW9uLmNvbG9yXCJcbiAgICAgICAgICAgIChjbGljayk9XCJhY3Rpb24ub25DbGljayhhY3Rpb24pXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJhY3Rpb24uJGRpc2FibGVkIHwgYXN5bmNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxtYXQtaWNvbiBpbmxpbmU9XCJ0cnVlXCI+e3sgYWN0aW9uLmljb24gfX08L21hdC1pY29uPlxuICAgICAgICAgICAge3sgYWN0aW9uLmxhYmVsIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYXQtdG9vbGJhci1yb3c+XG4gICAgPC9tYXQtdG9vbGJhcj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgYnV0dG9uLmFjdGlvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIH1cbiAgICBgXG4gIF0sXG4gIHN0eWxlVXJsczogWycuLi9zaGFyZWQtdXRpbGl0eS1zdHlsZXMuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFwcEFjdGlvbnNNaW5pQnJvd3NlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIG1haW5BY3Rpb25zOiBNYWluQWN0aW9uRGVmaW5pdGlvbltdO1xufVxuIl19
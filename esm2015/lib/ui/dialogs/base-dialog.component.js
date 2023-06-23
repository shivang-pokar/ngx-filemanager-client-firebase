/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class BaseDialogComponent {
}
BaseDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'base-dialog',
                template: `
    <div class="dialog-wrapper">
      <div class="header sans-serif flex-col align-center">
        <ng-container *ngTemplateOutlet="header"> </ng-container>
      </div>
      <div class="body sans-serif flex-col align-center">
        <ng-container *ngTemplateOutlet="body"> </ng-container>
      </div>
      <div class="actions sans-serif flex-col align-center">
        <ng-container *ngTemplateOutlet="actions"> </ng-container>
      </div>
    </div>
  `,
                styles: [`
      .dialog-wrapper {
        max-height: 80vh;
        min-width: 400px;
      }
      .header {
      }
      .body {
        overflow-y: auto;
        max-height: 60vh;
      }
      .actions {
        max-height: 200px;
      }
    `, "h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
            }] }
];
BaseDialogComponent.propDecorators = {
    header: [{ type: Input }],
    body: [{ type: Input }],
    actions: [{ type: Input }]
};
function BaseDialogComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    BaseDialogComponent.prototype.header;
    /** @type {?} */
    BaseDialogComponent.prototype.body;
    /** @type {?} */
    BaseDialogComponent.prototype.actions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL1NoaXZhbmcvUGkgU29mdHdhcmUvZmlsZS1tYW5hZ2VyL25neC1maWxlbWFuYWdlci9wcm9qZWN0cy9uZ3gtZmlsZW1hbmFnZXItY2xpZW50LWZpcmViYXNlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi91aS9kaWFsb2dzL2Jhc2UtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFxQ2pELE1BQU0sT0FBTyxtQkFBbUI7OztZQWxDL0IsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztHQVlUO3lCQUVDOzs7Ozs7Ozs7Ozs7OztLQWNDO2FBR0o7OztxQkFFRSxLQUFLO21CQUVMLEtBQUs7c0JBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYXNlLWRpYWxvZycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImRpYWxvZy13cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyIHNhbnMtc2VyaWYgZmxleC1jb2wgYWxpZ24tY2VudGVyXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJoZWFkZXJcIj4gPC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJib2R5IHNhbnMtc2VyaWYgZmxleC1jb2wgYWxpZ24tY2VudGVyXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJib2R5XCI+IDwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9ucyBzYW5zLXNlcmlmIGZsZXgtY29sIGFsaWduLWNlbnRlclwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiYWN0aW9uc1wiPiA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuZGlhbG9nLXdyYXBwZXIge1xuICAgICAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgICAgfVxuICAgICAgLmhlYWRlciB7XG4gICAgICB9XG4gICAgICAuYm9keSB7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIG1heC1oZWlnaHQ6IDYwdmg7XG4gICAgICB9XG4gICAgICAuYWN0aW9ucyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgfVxuICAgIGBcbiAgXSxcbiAgc3R5bGVVcmxzOiBbJy4uL3NoYXJlZC11dGlsaXR5LXN0eWxlcy5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQmFzZURpYWxvZ0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGhlYWRlcjogYW55O1xuICBASW5wdXQoKVxuICBib2R5OiBhbnk7XG4gIEBJbnB1dCgpXG4gIGFjdGlvbnM6IGFueTtcbn1cbiJdfQ==
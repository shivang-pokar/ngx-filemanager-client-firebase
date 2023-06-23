/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
export class CardFileComponent {
    /**
     * @return {?}
     */
    get isChecked() {
        return this.checkedItems.isSelected(this.file.fullPath);
    }
    /**
     * @return {?}
     */
    get isSelected() {
        return this.selectedItem.isSelected(this.file.fullPath);
    }
    /**
     * @return {?}
     */
    onSelect() {
        this.selectedItem.select(this.file.fullPath);
    }
    /**
     * @return {?}
     */
    onCheck() {
        this.checkedItems.select(this.file.fullPath);
    }
    /**
     * @return {?}
     */
    onUnCheck() {
        this.checkedItems.deselect(this.file.fullPath);
    }
}
CardFileComponent.decorators = [
    { type: Component, args: [{
                selector: 'card-file',
                template: `
    <div
      class="flex-row p5 space-between bg-grey-hover rounded"
      matTooltip="Click For Details"
      [class.bg-grey-light]="isChecked"
      [class.bg-grey-dark]="isSelected"
      (click)="onSelect()"
    >
      <div class="flex-row align-center">
        <mat-icon
          *ngIf="!isChecked"
          class="color-white color-grey-hover"
          (click)="onCheck()"
          >check_box_outline_blank</mat-icon
        >
        <mat-icon
          *ngIf="isChecked"
          class="color-black color-grey-hover"
          (click)="onUnCheck()"
          >check_box_outline</mat-icon
        >
        <img class="mr-10" width="30" [src]="file['icon']" />
        <div>
          <h5 class="m0 mb-5 has-ellipsis">{{ file.name }}</h5>
          <small class="m0 color-grey">{{ file.size | fileSize }}</small>
        </div>
      </div>
      <div class="flex-row align-center">
        <button
          mat-icon-button
          [matMenuTriggerFor]="menu"
          aria-label="Example icon-button with a menu"
        >
          <mat-icon>more_vert</mat-icon>
        </button>
      </div>
    </div>
    <mat-menu #menu="matMenu">
      <button
        mat-menu-item
        *ngFor="let action of actions"
        (click)="action.onClick(file)"
      >
        <mat-icon [color]="action.color">{{ action.icon }}</mat-icon>
        <span>{{ action.label }}</span>
      </button>
    </mat-menu>
  `,
                styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}", ``]
            }] }
];
CardFileComponent.propDecorators = {
    file: [{ type: Input }],
    actions: [{ type: Input }],
    checkedItems: [{ type: Input }],
    selectedItem: [{ type: Input }]
};
function CardFileComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CardFileComponent.prototype.file;
    /** @type {?} */
    CardFileComponent.prototype.actions;
    /** @type {?} */
    CardFileComponent.prototype.checkedItems;
    /** @type {?} */
    CardFileComponent.prototype.selectedItem;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9TaGl2YW5nL1BpIFNvZnR3YXJlL2ZpbGUtbWFuYWdlci9uZ3gtZmlsZW1hbmFnZXIvcHJvamVjdHMvbmd4LWZpbGVtYW5hZ2VyLWNsaWVudC1maXJlYmFzZS9zcmMvIiwic291cmNlcyI6WyJsaWIvdWkvZmlsZS10YWJsZS9jYXJkLWZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUF5RDFELE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFDNUIsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3pEOzs7O0lBQ0QsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3pEOzs7O0lBV0QsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDOUM7Ozs7SUFDRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUM5Qzs7OztJQUNELFNBQVM7UUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ2hEOzs7WUE5RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBK0NUO2d4Q0FFUSxFQUFFO2FBQ1o7OzttQkFTRSxLQUFLO3NCQUVMLEtBQUs7MkJBRUwsS0FBSzsyQkFFTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWwgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgQ29yZVR5cGVzIH0gZnJvbSAnLi4vLi4vLi4vY29yZS10eXBlcyc7XG5pbXBvcnQgeyBGaWxlQWN0aW9uRGVmaW5pdGlvbiB9IGZyb20gJy4vRmlsZUFjdGlvbkRlZmluaXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYXJkLWZpbGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiZmxleC1yb3cgcDUgc3BhY2UtYmV0d2VlbiBiZy1ncmV5LWhvdmVyIHJvdW5kZWRcIlxuICAgICAgbWF0VG9vbHRpcD1cIkNsaWNrIEZvciBEZXRhaWxzXCJcbiAgICAgIFtjbGFzcy5iZy1ncmV5LWxpZ2h0XT1cImlzQ2hlY2tlZFwiXG4gICAgICBbY2xhc3MuYmctZ3JleS1kYXJrXT1cImlzU2VsZWN0ZWRcIlxuICAgICAgKGNsaWNrKT1cIm9uU2VsZWN0KClcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LXJvdyBhbGlnbi1jZW50ZXJcIj5cbiAgICAgICAgPG1hdC1pY29uXG4gICAgICAgICAgKm5nSWY9XCIhaXNDaGVja2VkXCJcbiAgICAgICAgICBjbGFzcz1cImNvbG9yLXdoaXRlIGNvbG9yLWdyZXktaG92ZXJcIlxuICAgICAgICAgIChjbGljayk9XCJvbkNoZWNrKClcIlxuICAgICAgICAgID5jaGVja19ib3hfb3V0bGluZV9ibGFuazwvbWF0LWljb25cbiAgICAgICAgPlxuICAgICAgICA8bWF0LWljb25cbiAgICAgICAgICAqbmdJZj1cImlzQ2hlY2tlZFwiXG4gICAgICAgICAgY2xhc3M9XCJjb2xvci1ibGFjayBjb2xvci1ncmV5LWhvdmVyXCJcbiAgICAgICAgICAoY2xpY2spPVwib25VbkNoZWNrKClcIlxuICAgICAgICAgID5jaGVja19ib3hfb3V0bGluZTwvbWF0LWljb25cbiAgICAgICAgPlxuICAgICAgICA8aW1nIGNsYXNzPVwibXItMTBcIiB3aWR0aD1cIjMwXCIgW3NyY109XCJmaWxlWydpY29uJ11cIiAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoNSBjbGFzcz1cIm0wIG1iLTUgaGFzLWVsbGlwc2lzXCI+e3sgZmlsZS5uYW1lIH19PC9oNT5cbiAgICAgICAgICA8c21hbGwgY2xhc3M9XCJtMCBjb2xvci1ncmV5XCI+e3sgZmlsZS5zaXplIHwgZmlsZVNpemUgfX08L3NtYWxsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXgtcm93IGFsaWduLWNlbnRlclwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICAgICAgW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggYSBtZW51XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxtYXQtaWNvbj5tb3JlX3ZlcnQ8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxtYXQtbWVudSAjbWVudT1cIm1hdE1lbnVcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgbWF0LW1lbnUtaXRlbVxuICAgICAgICAqbmdGb3I9XCJsZXQgYWN0aW9uIG9mIGFjdGlvbnNcIlxuICAgICAgICAoY2xpY2spPVwiYWN0aW9uLm9uQ2xpY2soZmlsZSlcIlxuICAgICAgPlxuICAgICAgICA8bWF0LWljb24gW2NvbG9yXT1cImFjdGlvbi5jb2xvclwiPnt7IGFjdGlvbi5pY29uIH19PC9tYXQtaWNvbj5cbiAgICAgICAgPHNwYW4+e3sgYWN0aW9uLmxhYmVsIH19PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9tYXQtbWVudT5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4uL3NoYXJlZC11dGlsaXR5LXN0eWxlcy5zY3NzJ10sXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkRmlsZUNvbXBvbmVudCB7XG4gIGdldCBpc0NoZWNrZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tlZEl0ZW1zLmlzU2VsZWN0ZWQodGhpcy5maWxlLmZ1bGxQYXRoKTtcbiAgfVxuICBnZXQgaXNTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW0uaXNTZWxlY3RlZCh0aGlzLmZpbGUuZnVsbFBhdGgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZmlsZTogQ29yZVR5cGVzLlJlc0ZpbGU7XG4gIEBJbnB1dCgpXG4gIGFjdGlvbnM6IEZpbGVBY3Rpb25EZWZpbml0aW9uW107XG4gIEBJbnB1dCgpXG4gIGNoZWNrZWRJdGVtczogU2VsZWN0aW9uTW9kZWw8c3RyaW5nPjtcbiAgQElucHV0KClcbiAgc2VsZWN0ZWRJdGVtOiBTZWxlY3Rpb25Nb2RlbDxzdHJpbmc+O1xuXG4gIG9uU2VsZWN0KCkge1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtLnNlbGVjdCh0aGlzLmZpbGUuZnVsbFBhdGgpO1xuICB9XG4gIG9uQ2hlY2soKSB7XG4gICAgdGhpcy5jaGVja2VkSXRlbXMuc2VsZWN0KHRoaXMuZmlsZS5mdWxsUGF0aCk7XG4gIH1cbiAgb25VbkNoZWNrKCkge1xuICAgIHRoaXMuY2hlY2tlZEl0ZW1zLmRlc2VsZWN0KHRoaXMuZmlsZS5mdWxsUGF0aCk7XG4gIH1cbn1cbiJdfQ==
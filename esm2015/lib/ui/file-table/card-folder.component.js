/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
export class CardFolderComponent {
    constructor() {
        this.enterFolder = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get isChecked() {
        if (!this.checkedItems) {
            return;
        }
        return this.checkedItems.isSelected(this.folder.fullPath);
    }
    /**
     * @return {?}
     */
    get isSelected() {
        return this.selectedItem.isSelected(this.folder.fullPath);
    }
    /**
     * @return {?}
     */
    onSelect() {
        this.selectedItem.select(this.folder.fullPath);
    }
    /**
     * @return {?}
     */
    onCheck() {
        this.checkedItems.select(this.folder.fullPath);
    }
    /**
     * @return {?}
     */
    onUnCheck() {
        this.checkedItems.deselect(this.folder.fullPath);
    }
    /**
     * @return {?}
     */
    onDoubleClick() {
        console.log('onDoubleClick!');
        this.enterFolder.emit(this.folder.fullPath);
    }
    /**
     * @param {?} folder
     * @return {?}
     */
    getFolderSize(folder) {
        if (folder.metaData) {
            let /** @type {?} */ path = this.config.folderSizePath;
            return path.split('.').reduce(function (p, prop) { return p[prop]; }, folder);
        }
        return folder.size;
    }
}
CardFolderComponent.decorators = [
    { type: Component, args: [{
                selector: 'card-folder',
                template: `
    <div
      class="flex-row p5 space-between bg-grey-hover rounded"
      matTooltip="Click For Details"
      [class.bg-grey-light]="isChecked"
      [class.bg-grey-dark]="isSelected"
      (click)="onSelect()"
      (dblclick)="onDoubleClick()"
    >
      <div class="flex-row align-center">
        <div *ngIf="checkedItems">
          <mat-icon
            *ngIf="!isChecked"
            class="has-pointer color-white color-grey-hover"
            (click)="onCheck()"
            >check_box_outline_blank</mat-icon
          >
          <mat-icon
            *ngIf="isChecked"
            class="has-pointer color-black color-grey-hover"
            (click)="onUnCheck()"
            >check_box_outline</mat-icon
          >
        </div>
        <img class="mr-10" width="30" [src]="folder['icon']" />
        <div>
          <h5 class="m0 mb-5 has-ellipsis">{{ folder.name }}</h5>
          <small *ngIf="config && config.folderSizePath" class="m0 color-grey">{{ getFolderSize(folder) | fileSize }}</small>
        </div>
      </div>
      <button
        *ngIf="actions"
        mat-icon-button
        [matMenuTriggerFor]="menu"
        aria-label="Example icon-button with a menu"
      >
        <mat-icon>more_vert</mat-icon>
      </button>
    </div>
    <mat-menu #menu="matMenu">
      <button
        mat-menu-item
        *ngFor="let action of actions"
        (click)="action.onClick(folder)"
      >
        <mat-icon [color]="action.color">{{ action.icon }}</mat-icon>
        <span>{{ action.label }}</span>
      </button>
    </mat-menu>
  `,
                styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}", ``]
            }] }
];
CardFolderComponent.propDecorators = {
    folder: [{ type: Input }],
    actions: [{ type: Input }],
    checkedItems: [{ type: Input }],
    selectedItem: [{ type: Input }],
    config: [{ type: Input }],
    enterFolder: [{ type: Output }]
};
function CardFolderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CardFolderComponent.prototype.folder;
    /** @type {?} */
    CardFolderComponent.prototype.actions;
    /** @type {?} */
    CardFolderComponent.prototype.checkedItems;
    /** @type {?} */
    CardFolderComponent.prototype.selectedItem;
    /** @type {?} */
    CardFolderComponent.prototype.config;
    /** @type {?} */
    CardFolderComponent.prototype.enterFolder;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1mb2xkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL1NoaXZhbmcvUGkgU29mdHdhcmUvZmlsZS1tYW5hZ2VyL25neC1maWxlbWFuYWdlci9wcm9qZWN0cy9uZ3gtZmlsZW1hbmFnZXItY2xpZW50LWZpcmViYXNlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi91aS9maWxlLXRhYmxlL2NhcmQtZm9sZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUE0RDFELE1BQU0sT0FBTyxtQkFBbUI7OzJCQXFCaEIsSUFBSSxZQUFZLEVBQVU7Ozs7O0lBcEJ4QyxJQUFJLFNBQVM7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixPQUFPO1NBQ1I7UUFDRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDM0Q7Ozs7SUFDRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDM0Q7Ozs7SUFjRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNoRDs7OztJQUNELE9BQU87UUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ2hEOzs7O0lBQ0QsU0FBUztRQUNQLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDbEQ7Ozs7SUFDRCxhQUFhO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDN0M7Ozs7O0lBRUQsYUFBYSxDQUFDLE1BQXlCO1FBQ3JDLElBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNsQixxQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUE7WUFDckMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFTLENBQUMsRUFBQyxJQUFJLElBQUksT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUEsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzVFO1FBQ0QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFBO0tBQ25COzs7WUFsR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpRFQ7Z3hDQUVRLEVBQUU7YUFDWjs7O3FCQVdFLEtBQUs7c0JBRUwsS0FBSzsyQkFFTCxLQUFLOzJCQUVMLEtBQUs7cUJBRUwsS0FBSzswQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7IENvcmVUeXBlcyB9IGZyb20gJy4uLy4uLy4uL2NvcmUtdHlwZXMnO1xuaW1wb3J0IHsgRmlsZUFjdGlvbkRlZmluaXRpb24gfSBmcm9tICcuL0ZpbGVBY3Rpb25EZWZpbml0aW9uJztcbmltcG9ydCB7IEZpbGVNYW5hZ2VyQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlndXJhdGlvbi9jbGllbnQtY29uZmlndXJhdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NhcmQtZm9sZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImZsZXgtcm93IHA1IHNwYWNlLWJldHdlZW4gYmctZ3JleS1ob3ZlciByb3VuZGVkXCJcbiAgICAgIG1hdFRvb2x0aXA9XCJDbGljayBGb3IgRGV0YWlsc1wiXG4gICAgICBbY2xhc3MuYmctZ3JleS1saWdodF09XCJpc0NoZWNrZWRcIlxuICAgICAgW2NsYXNzLmJnLWdyZXktZGFya109XCJpc1NlbGVjdGVkXCJcbiAgICAgIChjbGljayk9XCJvblNlbGVjdCgpXCJcbiAgICAgIChkYmxjbGljayk9XCJvbkRvdWJsZUNsaWNrKClcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LXJvdyBhbGlnbi1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiAqbmdJZj1cImNoZWNrZWRJdGVtc1wiPlxuICAgICAgICAgIDxtYXQtaWNvblxuICAgICAgICAgICAgKm5nSWY9XCIhaXNDaGVja2VkXCJcbiAgICAgICAgICAgIGNsYXNzPVwiaGFzLXBvaW50ZXIgY29sb3Itd2hpdGUgY29sb3ItZ3JleS1ob3ZlclwiXG4gICAgICAgICAgICAoY2xpY2spPVwib25DaGVjaygpXCJcbiAgICAgICAgICAgID5jaGVja19ib3hfb3V0bGluZV9ibGFuazwvbWF0LWljb25cbiAgICAgICAgICA+XG4gICAgICAgICAgPG1hdC1pY29uXG4gICAgICAgICAgICAqbmdJZj1cImlzQ2hlY2tlZFwiXG4gICAgICAgICAgICBjbGFzcz1cImhhcy1wb2ludGVyIGNvbG9yLWJsYWNrIGNvbG9yLWdyZXktaG92ZXJcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uVW5DaGVjaygpXCJcbiAgICAgICAgICAgID5jaGVja19ib3hfb3V0bGluZTwvbWF0LWljb25cbiAgICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW1nIGNsYXNzPVwibXItMTBcIiB3aWR0aD1cIjMwXCIgW3NyY109XCJmb2xkZXJbJ2ljb24nXVwiIC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGg1IGNsYXNzPVwibTAgbWItNSBoYXMtZWxsaXBzaXNcIj57eyBmb2xkZXIubmFtZSB9fTwvaDU+XG4gICAgICAgICAgPHNtYWxsICpuZ0lmPVwiY29uZmlnICYmIGNvbmZpZy5mb2xkZXJTaXplUGF0aFwiIGNsYXNzPVwibTAgY29sb3ItZ3JleVwiPnt7IGdldEZvbGRlclNpemUoZm9sZGVyKSB8IGZpbGVTaXplIH19PC9zbWFsbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgKm5nSWY9XCJhY3Rpb25zXCJcbiAgICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICAgIFttYXRNZW51VHJpZ2dlckZvcl09XCJtZW51XCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBhIG1lbnVcIlxuICAgICAgPlxuICAgICAgICA8bWF0LWljb24+bW9yZV92ZXJ0PC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxtYXQtbWVudSAjbWVudT1cIm1hdE1lbnVcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgbWF0LW1lbnUtaXRlbVxuICAgICAgICAqbmdGb3I9XCJsZXQgYWN0aW9uIG9mIGFjdGlvbnNcIlxuICAgICAgICAoY2xpY2spPVwiYWN0aW9uLm9uQ2xpY2soZm9sZGVyKVwiXG4gICAgICA+XG4gICAgICAgIDxtYXQtaWNvbiBbY29sb3JdPVwiYWN0aW9uLmNvbG9yXCI+e3sgYWN0aW9uLmljb24gfX08L21hdC1pY29uPlxuICAgICAgICA8c3Bhbj57eyBhY3Rpb24ubGFiZWwgfX08L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L21hdC1tZW51PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi4vc2hhcmVkLXV0aWxpdHktc3R5bGVzLnNjc3MnXSxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIENhcmRGb2xkZXJDb21wb25lbnQge1xuICBnZXQgaXNDaGVja2VkKCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5jaGVja2VkSXRlbXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tlZEl0ZW1zLmlzU2VsZWN0ZWQodGhpcy5mb2xkZXIuZnVsbFBhdGgpO1xuICB9XG4gIGdldCBpc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbS5pc1NlbGVjdGVkKHRoaXMuZm9sZGVyLmZ1bGxQYXRoKTtcbiAgfVxuICBASW5wdXQoKVxuICBmb2xkZXI6IENvcmVUeXBlcy5SZXNGaWxlO1xuICBASW5wdXQoKVxuICBhY3Rpb25zOiBGaWxlQWN0aW9uRGVmaW5pdGlvbltdO1xuICBASW5wdXQoKVxuICBjaGVja2VkSXRlbXM6IFNlbGVjdGlvbk1vZGVsPHN0cmluZz47XG4gIEBJbnB1dCgpXG4gIHNlbGVjdGVkSXRlbTogU2VsZWN0aW9uTW9kZWw8c3RyaW5nPjtcbiAgQElucHV0KClcbiAgY29uZmlnOiBGaWxlTWFuYWdlckNvbmZpZztcbiAgQE91dHB1dCgpXG4gIGVudGVyRm9sZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgb25TZWxlY3QoKSB7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0uc2VsZWN0KHRoaXMuZm9sZGVyLmZ1bGxQYXRoKTtcbiAgfVxuICBvbkNoZWNrKCkge1xuICAgIHRoaXMuY2hlY2tlZEl0ZW1zLnNlbGVjdCh0aGlzLmZvbGRlci5mdWxsUGF0aCk7XG4gIH1cbiAgb25VbkNoZWNrKCkge1xuICAgIHRoaXMuY2hlY2tlZEl0ZW1zLmRlc2VsZWN0KHRoaXMuZm9sZGVyLmZ1bGxQYXRoKTtcbiAgfVxuICBvbkRvdWJsZUNsaWNrKCkge1xuICAgIGNvbnNvbGUubG9nKCdvbkRvdWJsZUNsaWNrIScpO1xuICAgIHRoaXMuZW50ZXJGb2xkZXIuZW1pdCh0aGlzLmZvbGRlci5mdWxsUGF0aCk7XG4gIH1cblxuICBnZXRGb2xkZXJTaXplKGZvbGRlcjogQ29yZVR5cGVzLlJlc0ZpbGUpIHtcbiAgICBpZihmb2xkZXIubWV0YURhdGEpIHtcbiAgICAgIGxldCBwYXRoID0gdGhpcy5jb25maWcuZm9sZGVyU2l6ZVBhdGhcbiAgICAgIHJldHVybiBwYXRoLnNwbGl0KCcuJykucmVkdWNlKGZ1bmN0aW9uKHAscHJvcCkgeyByZXR1cm4gcFtwcm9wXSB9LCBmb2xkZXIpO1xuICAgIH1cbiAgICByZXR1cm4gZm9sZGVyLnNpemVcbiAgfVxufVxuIl19
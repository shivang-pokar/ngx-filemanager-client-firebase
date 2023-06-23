/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { EventEmitter, Component, Input, Output } from '@angular/core';
export class FormFileUploadedFileListComponent {
    constructor() {
        this.uploadedFiles = [];
        this.clickRemoveTag = new EventEmitter();
    }
    /**
     * @param {?} file
     * @return {?}
     */
    getProgress(file) {
        const /** @type {?} */ isDone = this.isDone(file);
        if (isDone) {
            return 100;
        }
        if (file && file.value && file.value.props) {
            const /** @type {?} */ p = file.value.props.progress;
            return p * 0.95; // 95% until download completed
        }
        return 100;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    isDone(file) {
        if (file && file.value && file.value.props) {
            const /** @type {?} */ c = file.value.props.completed;
            return c;
        }
        return false;
    }
}
FormFileUploadedFileListComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-uploaded-files-list',
                template: `
    <p *ngIf="uploadedFiles?.length">Uploaded files:</p>
    <div>
      <div *ngFor="let file of uploadedFiles">
        <div class="full-width flex-h">
          <mat-icon id="i-done" *ngIf="!disabled && isDone(file)"
            >done</mat-icon
          >
          <img class="file-icon" image [src]="file['fileicon']" />
          <a class="full-width flex-h has-ellipsis" [href]="file.id" target="_blank">
            <span class="has-ellipsis">{{ file.value.name }}</span>
            <mat-icon class="i-open">open_in_new</mat-icon>
            <img
              *ngIf="file['imageurl']"
              class="file-thumb"
              image
              [src]="file['imageurl']"
            />
          </a>
          <mat-icon
            *ngIf="!disabled"
            class="has-pointer"
            (click)="this.clickRemoveTag.emit(file)"
            >cancel</mat-icon
          >
        </div>
        <div class="full-width">
          <mat-progress-bar
            class="progress"
            mode="determinate"
            [value]="getProgress(file)"
          ></mat-progress-bar>
        </div>
      </div>
    </div>
  `,
                styles: [`
      .full-width {
        width: 100%;
      }
      .flex-h {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .has-pointer {
        cursor: pointer;
      }
      .file-link {
        display: flex;
        align-items: center;
      }
      .file-thumb,
      .file-icon {
        margin: 0px 10px;
        height: 30px;
      }
      .file-thumb {
        background-color: #ddd;
      }
      .i-open {
        font-size: 1em;
      }
      .has-ellipsis {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    `]
            }] }
];
FormFileUploadedFileListComponent.propDecorators = {
    disabled: [{ type: Input }],
    uploadedFiles: [{ type: Input }],
    clickRemoveTag: [{ type: Output }]
};
function FormFileUploadedFileListComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    FormFileUploadedFileListComponent.prototype.disabled;
    /** @type {?} */
    FormFileUploadedFileListComponent.prototype.uploadedFiles;
    /** @type {?} */
    FormFileUploadedFileListComponent.prototype.clickRemoveTag;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWxlLXVwbG9hZGVyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL1NoaXZhbmcvUGkgU29mdHdhcmUvZmlsZS1tYW5hZ2VyL25neC1maWxlbWFuYWdlci9wcm9qZWN0cy9uZ3gtZmlsZW1hbmFnZXItY2xpZW50LWZpcmViYXNlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi91aS9maWxlLXVwbG9hZC9mb3JtLWZpbGUtZmlyZWJhc2UvZm9ybS1maWxlLXVwbG9hZGVyLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBNkV2RSxNQUFNLE9BQU8saUNBQWlDOzs2QkFJTCxFQUFFOzhCQUV4QixJQUFJLFlBQVksRUFBdUI7Ozs7OztJQUV4RCxXQUFXLENBQUMsSUFBeUI7UUFDbkMsdUJBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxNQUFNLEVBQUU7WUFDVixPQUFPLEdBQUcsQ0FBQztTQUNaO1FBQ0QsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRTtZQUMxQyx1QkFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQztTQUNqQjtRQUNELE9BQU8sR0FBRyxDQUFDO0tBQ1o7Ozs7O0lBRUQsTUFBTSxDQUFDLElBQXlCO1FBQzlCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDMUMsdUJBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUNyQyxPQUFPLENBQUMsQ0FBQztTQUNWO1FBQ0QsT0FBTyxLQUFLLENBQUM7S0FDZDs7O1lBcEdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUNUO3lCQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWdDQzthQUVKOzs7dUJBRUUsS0FBSzs0QkFFTCxLQUFLOzZCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUFycmF5RmlsZU9iamVjdCB9IGZyb20gJy4vRm9ybUFycmF5RmlsZU9iamVjdCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11cGxvYWRlZC1maWxlcy1saXN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cCAqbmdJZj1cInVwbG9hZGVkRmlsZXM/Lmxlbmd0aFwiPlVwbG9hZGVkIGZpbGVzOjwvcD5cbiAgICA8ZGl2PlxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZmlsZSBvZiB1cGxvYWRlZEZpbGVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmdWxsLXdpZHRoIGZsZXgtaFwiPlxuICAgICAgICAgIDxtYXQtaWNvbiBpZD1cImktZG9uZVwiICpuZ0lmPVwiIWRpc2FibGVkICYmIGlzRG9uZShmaWxlKVwiXG4gICAgICAgICAgICA+ZG9uZTwvbWF0LWljb25cbiAgICAgICAgICA+XG4gICAgICAgICAgPGltZyBjbGFzcz1cImZpbGUtaWNvblwiIGltYWdlIFtzcmNdPVwiZmlsZVsnZmlsZWljb24nXVwiIC8+XG4gICAgICAgICAgPGEgY2xhc3M9XCJmdWxsLXdpZHRoIGZsZXgtaCBoYXMtZWxsaXBzaXNcIiBbaHJlZl09XCJmaWxlLmlkXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhhcy1lbGxpcHNpc1wiPnt7IGZpbGUudmFsdWUubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cImktb3BlblwiPm9wZW5faW5fbmV3PC9tYXQtaWNvbj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgKm5nSWY9XCJmaWxlWydpbWFnZXVybCddXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmaWxlLXRodW1iXCJcbiAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgW3NyY109XCJmaWxlWydpbWFnZXVybCddXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxtYXQtaWNvblxuICAgICAgICAgICAgKm5nSWY9XCIhZGlzYWJsZWRcIlxuICAgICAgICAgICAgY2xhc3M9XCJoYXMtcG9pbnRlclwiXG4gICAgICAgICAgICAoY2xpY2spPVwidGhpcy5jbGlja1JlbW92ZVRhZy5lbWl0KGZpbGUpXCJcbiAgICAgICAgICAgID5jYW5jZWw8L21hdC1pY29uXG4gICAgICAgICAgPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZ1bGwtd2lkdGhcIj5cbiAgICAgICAgICA8bWF0LXByb2dyZXNzLWJhclxuICAgICAgICAgICAgY2xhc3M9XCJwcm9ncmVzc1wiXG4gICAgICAgICAgICBtb2RlPVwiZGV0ZXJtaW5hdGVcIlxuICAgICAgICAgICAgW3ZhbHVlXT1cImdldFByb2dyZXNzKGZpbGUpXCJcbiAgICAgICAgICA+PC9tYXQtcHJvZ3Jlc3MtYmFyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuZnVsbC13aWR0aCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLmZsZXgtaCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuaGFzLXBvaW50ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICAuZmlsZS1saW5rIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5maWxlLXRodW1iLFxuICAgICAgLmZpbGUtaWNvbiB7XG4gICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIH1cbiAgICAgIC5maWxlLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICAgIH1cbiAgICAgIC5pLW9wZW4ge1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgIH1cbiAgICAgIC5oYXMtZWxsaXBzaXMge1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpbGVVcGxvYWRlZEZpbGVMaXN0Q29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHVwbG9hZGVkRmlsZXM6IEZvcm1BcnJheUZpbGVPYmplY3RbXSA9IFtdO1xuICBAT3V0cHV0KClcbiAgY2xpY2tSZW1vdmVUYWcgPSBuZXcgRXZlbnRFbWl0dGVyPEZvcm1BcnJheUZpbGVPYmplY3Q+KCk7XG5cbiAgZ2V0UHJvZ3Jlc3MoZmlsZTogRm9ybUFycmF5RmlsZU9iamVjdCkge1xuICAgIGNvbnN0IGlzRG9uZSA9IHRoaXMuaXNEb25lKGZpbGUpO1xuICAgIGlmIChpc0RvbmUpIHtcbiAgICAgIHJldHVybiAxMDA7XG4gICAgfVxuICAgIGlmIChmaWxlICYmIGZpbGUudmFsdWUgJiYgZmlsZS52YWx1ZS5wcm9wcykge1xuICAgICAgY29uc3QgcCA9IGZpbGUudmFsdWUucHJvcHMucHJvZ3Jlc3M7XG4gICAgICByZXR1cm4gcCAqIDAuOTU7IC8vIDk1JSB1bnRpbCBkb3dubG9hZCBjb21wbGV0ZWRcbiAgICB9XG4gICAgcmV0dXJuIDEwMDtcbiAgfVxuXG4gIGlzRG9uZShmaWxlOiBGb3JtQXJyYXlGaWxlT2JqZWN0KTogYm9vbGVhbiB7XG4gICAgaWYgKGZpbGUgJiYgZmlsZS52YWx1ZSAmJiBmaWxlLnZhbHVlLnByb3BzKSB7XG4gICAgICBjb25zdCBjID0gZmlsZS52YWx1ZS5wcm9wcy5jb21wbGV0ZWQ7XG4gICAgICByZXR1cm4gYztcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=
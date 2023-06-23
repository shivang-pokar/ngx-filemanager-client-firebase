/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild, } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import { v4 as uuidv1 } from 'uuid';
import { MatAutocomplete, } from '@angular/material/autocomplete';
/**
 * @record
 */
export function Tag() { }
function Tag_tsickle_Closure_declarations() {
    /** @type {?} */
    Tag.prototype.id;
    /** @type {?} */
    Tag.prototype.name;
    /** @type {?|undefined} */
    Tag.prototype.isDisabled;
}
export class AppControlTagMultipleComponent {
    constructor() {
        // Tag defaults
        this.visible = true;
        this.selectable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.removableTags = true;
        this.allowCustom = true;
        this.selectChoices$ = new Observable();
    }
    /**
     * @param {?} val
     * @param {?} name
     * @return {?}
     */
    checkExists(val, name) {
        if (val == null) {
            throw new Error(name + ' has not been defined');
        }
    }
    /**
     * @return {?}
     */
    hasRed() {
        const /** @type {?} */ isDirty = this.control.dirty;
        const /** @type {?} */ notValid = this.control.invalid;
        return isDirty && notValid;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.checkExists(this.control, 'this.group');
        this.checkExists(this.selectChoices$, 'this.selectChoices');
        this.selectInitial = this.control.value;
        this.autoCompleteObscureName = uuidv1();
        this.selectChoices$ = this.selectChoices$.pipe(take(1));
        this.controlAutocomplete = new FormControl([], Validators.minLength(1));
        // When selectChoices resolves (once)
        this.selectChoices$.subscribe((selectChoicesArr) => {
            // set the tags filtering pipe
            this.filteredTags = this.controlAutocomplete.valueChanges.pipe(startWith(null), map((keyboardInput) => {
                console.log({ keyboardInput }, { selectChoicesArr });
                // Filter based on the input value
                if (!keyboardInput) {
                    return selectChoicesArr;
                }
                return selectChoicesArr.filter((tag) => {
                    if (!tag) {
                        return false;
                    }
                    const /** @type {?} */ val = tag.name + '';
                    if (!val.includes(keyboardInput)) {
                        return false;
                    }
                    return true;
                });
            }));
        });
        // Add the initial values if they're passed in
        this.controlAutocomplete.setValue(this.selectInitial);
        this.control.markAsUntouched();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @param {?} event
     * @return {?}
     */
    add(event) {
        if (!this.allowCustom) {
            return;
        }
        if (!this.matAutocomplete.isOpen) {
            const /** @type {?} */ input = event.input;
            const /** @type {?} */ value = event.value;
            // Add our Tag
            if ((value || '').trim()) {
                const /** @type {?} */ newTagId = uuidv1();
                const /** @type {?} */ val = value.trim();
                const /** @type {?} */ newTag = {
                    id: newTagId,
                    name: val,
                };
                this.control.value.push(newTag);
            }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.updateFormValue();
        }
    }
    /**
     * @param {?} removeTag
     * @return {?}
     */
    removeTag(removeTag) {
        const /** @type {?} */ index = this.control.value.findIndex((t) => t.id === removeTag.id);
        if (index >= 0) {
            this.control.value.splice(index, 1);
        }
        this.updateFormValue();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    selectedTag(event) {
        console.log(event);
        const /** @type {?} */ newVal = event.option.value;
        let /** @type {?} */ canPush = true;
        this.control.value.forEach((item) => {
            canPush = item.id !== newVal.id && canPush;
        });
        if (canPush)
            this.control.value.push(newVal);
        this.tagInput.nativeElement.value = '';
        this.tagInput.nativeElement.blur();
        this.updateFormValue();
    }
    /**
     * @return {?}
     */
    updateFormValue() {
        this.controlAutocomplete.reset();
        this.control.setValue(this.control.value); // Required to trigger value changes
        this.control.markAsDirty();
    }
    /**
     * @param {?} tag
     * @return {?}
     */
    getLowerCase(tag) {
        if (!tag || !tag.name) {
            return null;
        }
        const /** @type {?} */ val = tag.name + '';
        return val.toLowerCase();
    }
}
AppControlTagMultipleComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'app-control-tag-multiple',
                template: `
    <mat-form-field class="full-width" [class.formInvalid]="hasRed()">
      <mat-chip-list #chipList [disabled]="!removableTags" [multiple]="true">
        <mat-chip
          *ngFor="let tag of selectInitial"
          [selectable]="selectable"
          [removable]="removableTags"
          (removed)="removeTag(tag)"
        >
          {{ getLowerCase(tag) }}
          <mat-icon matChipRemove *ngIf="removableTags">cancel</mat-icon>
        </mat-chip>
        <input
          #tagInput
          [placeholder]="placeholder"
          [formControl]="controlAutocomplete"
          [matAutocomplete]="auto"
          [matChipInputFor]="chipList"
          [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
          [matChipInputAddOnBlur]="addOnBlur"
          (matChipInputTokenEnd)="add($event)"
          [name]="autoCompleteObscureName"
        />
      </mat-chip-list>
      <mat-icon
        matTooltip="Add many tags here, you can manage all your tags using the tag list editor in the settings menu"
        class="tag-icon"
        matSuffix
        matBadge="∞"
        >local_offer</mat-icon
      >
      <mat-autocomplete
        #auto="matAutocomplete"
        (optionSelected)="selectedTag($event)"
      >
        <mat-option
          *ngFor="let tag of filteredTags | async"
          [value]="tag"
          [disabled]="tag['isDisabled']"
        >
          {{ tag.name }}
        </mat-option>
      </mat-autocomplete>
    </mat-form-field>
  `,
                styles: [`
      .full-width {
        width: 100%;
      }
      .tag-icon {
        color: grey;
        right: 15px;
      }
      .formInvalid {
        background-color: #ff4f4f30 !important;
      }
      .mat-badge-active {
        font-size: 18px;
      }
      mat-icon span {
        background-color: transparent;
        right: 1px !important;
        top: 1px !important;
        color: white;
      }
    `]
            }] }
];
AppControlTagMultipleComponent.propDecorators = {
    tagInput: [{ type: ViewChild, args: ['tagInput', { static: false },] }],
    matAutocomplete: [{ type: ViewChild, args: ['auto', { static: false },] }],
    placeholder: [{ type: Input }],
    displayLowerCase: [{ type: Input }],
    control: [{ type: Input }],
    removableTags: [{ type: Input }],
    allowCustom: [{ type: Input }],
    selectChoices$: [{ type: Input }]
};
function AppControlTagMultipleComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.controlAutocomplete;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.visible;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.selectable;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.addOnBlur;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.separatorKeysCodes;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.filteredTags;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.tagInput;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.matAutocomplete;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.selectInitial;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.placeholder;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.displayLowerCase;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.control;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.removableTags;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.allowCustom;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.selectChoices$;
    /** @type {?} */
    AppControlTagMultipleComponent.prototype.autoCompleteObscureName;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFncy1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9TaGl2YW5nL1BpIFNvZnR3YXJlL2ZpbGUtbWFuYWdlci9uZ3gtZmlsZW1hbmFnZXIvcHJvamVjdHMvbmd4LWZpbGVtYW5hZ2VyLWNsaWVudC1maXJlYmFzZS9zcmMvIiwic291cmNlcyI6WyJsaWIvdWkvdGFncy1jb250cm9sL3RhZ3MtY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEQsT0FBTyxFQUFFLEVBQUUsSUFBSSxNQUFNLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFcEMsT0FBTyxFQUNMLGVBQWUsR0FFaEIsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWlGeEMsTUFBTSxPQUFPLDhCQUE4Qjs7O1FBS3pDLGVBQVUsSUFBSSxDQUFDO1FBQ2Ysa0JBQWEsSUFBSSxDQUFDO1FBQ2xCLGlCQUFZLElBQUksQ0FBQztrQ0FDYyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7UUFhN0MscUJBQXlCLElBQUksQ0FBQztRQUM5QixtQkFBdUIsSUFBSSxDQUFDOzhCQUNpQixJQUFJLFVBQVUsRUFBRTs7Ozs7OztJQUk3RCxXQUFXLENBQUMsR0FBRyxFQUFFLElBQUk7UUFDbkIsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lB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LEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDeEI7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUM1Qjs7Ozs7SUFFRCxZQUFZLENBQUMsR0FBRztRQUNkLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCx1QkFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDMUIsT0FBTyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDMUI7OztZQXRORixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0Q1Q7eUJBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBb0JDO2FBRUo7Ozt1QkFZRSxTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs4QkFFdkMsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7MEJBS25DLEtBQUs7K0JBQ0wsS0FBSztzQkFDTCxLQUFLOzRCQUNMLEtBQUs7MEJBQ0wsS0FBSzs2QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ09NTUEsIEVOVEVSIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjEgfSBmcm9tICd1dWlkJztcblxuaW1wb3J0IHtcbiAgTWF0QXV0b2NvbXBsZXRlLFxuICBNYXRBdXRvY29tcGxldGVTZWxlY3RlZEV2ZW50LFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUnO1xuaW1wb3J0IHsgTWF0Q2hpcElucHV0RXZlbnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFnIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBpc0Rpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdhcHAtY29udHJvbC10YWctbXVsdGlwbGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZ1bGwtd2lkdGhcIiBbY2xhc3MuZm9ybUludmFsaWRdPVwiaGFzUmVkKClcIj5cbiAgICAgIDxtYXQtY2hpcC1saXN0ICNjaGlwTGlzdCBbZGlzYWJsZWRdPVwiIXJlbW92YWJsZVRhZ3NcIiBbbXVsdGlwbGVdPVwidHJ1ZVwiPlxuICAgICAgICA8bWF0LWNoaXBcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgdGFnIG9mIHNlbGVjdEluaXRpYWxcIlxuICAgICAgICAgIFtzZWxlY3RhYmxlXT1cInNlbGVjdGFibGVcIlxuICAgICAgICAgIFtyZW1vdmFibGVdPVwicmVtb3ZhYmxlVGFnc1wiXG4gICAgICAgICAgKHJlbW92ZWQpPVwicmVtb3ZlVGFnKHRhZylcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgZ2V0TG93ZXJDYXNlKHRhZykgfX1cbiAgICAgICAgICA8bWF0LWljb24gbWF0Q2hpcFJlbW92ZSAqbmdJZj1cInJlbW92YWJsZVRhZ3NcIj5jYW5jZWw8L21hdC1pY29uPlxuICAgICAgICA8L21hdC1jaGlwPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAjdGFnSW5wdXRcbiAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sQXV0b2NvbXBsZXRlXCJcbiAgICAgICAgICBbbWF0QXV0b2NvbXBsZXRlXT1cImF1dG9cIlxuICAgICAgICAgIFttYXRDaGlwSW5wdXRGb3JdPVwiY2hpcExpc3RcIlxuICAgICAgICAgIFttYXRDaGlwSW5wdXRTZXBhcmF0b3JLZXlDb2Rlc109XCJzZXBhcmF0b3JLZXlzQ29kZXNcIlxuICAgICAgICAgIFttYXRDaGlwSW5wdXRBZGRPbkJsdXJdPVwiYWRkT25CbHVyXCJcbiAgICAgICAgICAobWF0Q2hpcElucHV0VG9rZW5FbmQpPVwiYWRkKCRldmVudClcIlxuICAgICAgICAgIFtuYW1lXT1cImF1dG9Db21wbGV0ZU9ic2N1cmVOYW1lXCJcbiAgICAgICAgLz5cbiAgICAgIDwvbWF0LWNoaXAtbGlzdD5cbiAgICAgIDxtYXQtaWNvblxuICAgICAgICBtYXRUb29sdGlwPVwiQWRkIG1hbnkgdGFncyBoZXJlLCB5b3UgY2FuIG1hbmFnZSBhbGwgeW91ciB0YWdzIHVzaW5nIHRoZSB0YWcgbGlzdCBlZGl0b3IgaW4gdGhlIHNldHRpbmdzIG1lbnVcIlxuICAgICAgICBjbGFzcz1cInRhZy1pY29uXCJcbiAgICAgICAgbWF0U3VmZml4XG4gICAgICAgIG1hdEJhZGdlPVwi4oieXCJcbiAgICAgICAgPmxvY2FsX29mZmVyPC9tYXQtaWNvblxuICAgICAgPlxuICAgICAgPG1hdC1hdXRvY29tcGxldGVcbiAgICAgICAgI2F1dG89XCJtYXRBdXRvY29tcGxldGVcIlxuICAgICAgICAob3B0aW9uU2VsZWN0ZWQpPVwic2VsZWN0ZWRUYWcoJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICAgIDxtYXQtb3B0aW9uXG4gICAgICAgICAgKm5nRm9yPVwibGV0IHRhZyBvZiBmaWx0ZXJlZFRhZ3MgfCBhc3luY1wiXG4gICAgICAgICAgW3ZhbHVlXT1cInRhZ1wiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cInRhZ1snaXNEaXNhYmxlZCddXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IHRhZy5uYW1lIH19XG4gICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgIDwvbWF0LWF1dG9jb21wbGV0ZT5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuZnVsbC13aWR0aCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLnRhZy1pY29uIHtcbiAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgfVxuICAgICAgLmZvcm1JbnZhbGlkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNGY0ZjMwICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAubWF0LWJhZGdlLWFjdGl2ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICAgIG1hdC1pY29uIHNwYW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgcmlnaHQ6IDFweCAhaW1wb3J0YW50O1xuICAgICAgICB0b3A6IDFweCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29udHJvbFRhZ011bHRpcGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvLyBBdXRvY29tcGxldGUgRm9ybUdyb3VwXG4gIGNvbnRyb2xBdXRvY29tcGxldGU6IEZvcm1Db250cm9sO1xuXG4gIC8vIFRhZyBkZWZhdWx0c1xuICB2aXNpYmxlID0gdHJ1ZTtcbiAgc2VsZWN0YWJsZSA9IHRydWU7XG4gIGFkZE9uQmx1ciA9IHRydWU7XG4gIHNlcGFyYXRvcktleXNDb2RlczogbnVtYmVyW10gPSBbRU5URVIsIENPTU1BXTtcblxuICBmaWx0ZXJlZFRhZ3M6IE9ic2VydmFibGU8VGFnW10+O1xuICBAVmlld0NoaWxkKCd0YWdJbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICB0YWdJbnB1dDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnYXV0bycsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBtYXRBdXRvY29tcGxldGU6IE1hdEF1dG9jb21wbGV0ZTtcbiAgc2VsZWN0SW5pdGlhbDogVGFnW107XG5cbiAgLy8gVmFyaWFibGVzIFBhc3NlZCBpbnRvIHRoaXMgY29tcG9uZW50XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc3BsYXlMb3dlckNhc2U6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNvbnRyb2w6IEZvcm1Db250cm9sO1xuICBASW5wdXQoKSByZW1vdmFibGVUYWdzID0gdHJ1ZTtcbiAgQElucHV0KCkgYWxsb3dDdXN0b20gPSB0cnVlO1xuICBASW5wdXQoKSBzZWxlY3RDaG9pY2VzJDogT2JzZXJ2YWJsZTxUYWdbXT4gPSBuZXcgT2JzZXJ2YWJsZSgpO1xuXG4gIGF1dG9Db21wbGV0ZU9ic2N1cmVOYW1lOiBzdHJpbmc7IC8vIHRvIHByZXZlbnQgYXV0b2NvbXBsZXRlIGZyb20gcmVhbGlzaW5nIHRoZSBmaWVsZCBuYW1lXG5cbiAgY2hlY2tFeGlzdHModmFsLCBuYW1lKSB7XG4gICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobmFtZSArICcgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbiAgICB9XG4gIH1cblxuICBoYXNSZWQoKSB7XG4gICAgY29uc3QgaXNEaXJ0eSA9IHRoaXMuY29udHJvbC5kaXJ0eTtcbiAgICBjb25zdCBub3RWYWxpZCA9IHRoaXMuY29udHJvbC5pbnZhbGlkO1xuICAgIHJldHVybiBpc0RpcnR5ICYmIG5vdFZhbGlkO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jaGVja0V4aXN0cyh0aGlzLmNvbnRyb2wsICd0aGlzLmdyb3VwJyk7XG4gICAgdGhpcy5jaGVja0V4aXN0cyh0aGlzLnNlbGVjdENob2ljZXMkLCAndGhpcy5zZWxlY3RDaG9pY2VzJyk7XG4gICAgdGhpcy5zZWxlY3RJbml0aWFsID0gdGhpcy5jb250cm9sLnZhbHVlO1xuXG4gICAgdGhpcy5hdXRvQ29tcGxldGVPYnNjdXJlTmFtZSA9IHV1aWR2MSgpO1xuXG4gICAgdGhpcy5zZWxlY3RDaG9pY2VzJCA9IHRoaXMuc2VsZWN0Q2hvaWNlcyQucGlwZSh0YWtlKDEpKTtcbiAgICB0aGlzLmNvbnRyb2xBdXRvY29tcGxldGUgPSBuZXcgRm9ybUNvbnRyb2woW10sIFZhbGlkYXRvcnMubWluTGVuZ3RoKDEpKTtcbiAgICAvLyBXaGVuIHNlbGVjdENob2ljZXMgcmVzb2x2ZXMgKG9uY2UpXG4gICAgdGhpcy5zZWxlY3RDaG9pY2VzJC5zdWJzY3JpYmUoKHNlbGVjdENob2ljZXNBcnIpID0+IHtcbiAgICAgIC8vIHNldCB0aGUgdGFncyBmaWx0ZXJpbmcgcGlwZVxuICAgICAgdGhpcy5maWx0ZXJlZFRhZ3MgPSB0aGlzLmNvbnRyb2xBdXRvY29tcGxldGUudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aChudWxsKSxcbiAgICAgICAgbWFwKChrZXlib2FyZElucHV0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyh7IGtleWJvYXJkSW5wdXQgfSwgeyBzZWxlY3RDaG9pY2VzQXJyIH0pO1xuICAgICAgICAgIC8vIEZpbHRlciBiYXNlZCBvbiB0aGUgaW5wdXQgdmFsdWVcbiAgICAgICAgICBpZiAoIWtleWJvYXJkSW5wdXQpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RDaG9pY2VzQXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc2VsZWN0Q2hvaWNlc0Fyci5maWx0ZXIoKHRhZykgPT4ge1xuICAgICAgICAgICAgaWYgKCF0YWcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdmFsID0gdGFnLm5hbWUgKyAnJztcbiAgICAgICAgICAgIGlmICghdmFsLmluY2x1ZGVzKGtleWJvYXJkSW5wdXQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIC8vIEFkZCB0aGUgaW5pdGlhbCB2YWx1ZXMgaWYgdGhleSdyZSBwYXNzZWQgaW5cbiAgICB0aGlzLmNvbnRyb2xBdXRvY29tcGxldGUuc2V0VmFsdWUodGhpcy5zZWxlY3RJbml0aWFsKTtcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHt9XG5cbiAgLy8gQWxsb3cgY3VzdG9tIHRhZ3MsIGlmIHRoZSBzZWxlY3Rpb24gYm94IGlzIG5vdCBvcGVuXG4gIGFkZChldmVudDogTWF0Q2hpcElucHV0RXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYWxsb3dDdXN0b20pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm1hdEF1dG9jb21wbGV0ZS5pc09wZW4pIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuaW5wdXQ7XG4gICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnZhbHVlO1xuXG4gICAgICAvLyBBZGQgb3VyIFRhZ1xuICAgICAgaWYgKCh2YWx1ZSB8fCAnJykudHJpbSgpKSB7XG4gICAgICAgIGNvbnN0IG5ld1RhZ0lkID0gdXVpZHYxKCk7XG4gICAgICAgIGNvbnN0IHZhbCA9IHZhbHVlLnRyaW0oKTtcbiAgICAgICAgY29uc3QgbmV3VGFnOiBUYWcgPSB7XG4gICAgICAgICAgaWQ6IG5ld1RhZ0lkLFxuICAgICAgICAgIG5hbWU6IHZhbCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb250cm9sLnZhbHVlLnB1c2gobmV3VGFnKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVzZXQgdGhlIGlucHV0IHZhbHVlXG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlRm9ybVZhbHVlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlVGFnKHJlbW92ZVRhZzogVGFnKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmNvbnRyb2wudmFsdWUuZmluZEluZGV4KCh0KSA9PiB0LmlkID09PSByZW1vdmVUYWcuaWQpO1xuXG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuY29udHJvbC52YWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUZvcm1WYWx1ZSgpO1xuICB9XG5cbiAgc2VsZWN0ZWRUYWcoZXZlbnQ6IE1hdEF1dG9jb21wbGV0ZVNlbGVjdGVkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgY29uc3QgbmV3VmFsID0gZXZlbnQub3B0aW9uLnZhbHVlO1xuICAgIGxldCBjYW5QdXNoID0gdHJ1ZTtcbiAgICB0aGlzLmNvbnRyb2wudmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY2FuUHVzaCA9IGl0ZW0uaWQgIT09IG5ld1ZhbC5pZCAmJiBjYW5QdXNoO1xuICAgIH0pO1xuICAgIGlmIChjYW5QdXNoKSB0aGlzLmNvbnRyb2wudmFsdWUucHVzaChuZXdWYWwpO1xuICAgIHRoaXMudGFnSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIHRoaXMudGFnSW5wdXQubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgdGhpcy51cGRhdGVGb3JtVmFsdWUoKTtcbiAgfVxuXG4gIHVwZGF0ZUZvcm1WYWx1ZSgpIHtcbiAgICB0aGlzLmNvbnRyb2xBdXRvY29tcGxldGUucmVzZXQoKTtcbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodGhpcy5jb250cm9sLnZhbHVlKTsgLy8gUmVxdWlyZWQgdG8gdHJpZ2dlciB2YWx1ZSBjaGFuZ2VzXG4gICAgdGhpcy5jb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gIH1cblxuICBnZXRMb3dlckNhc2UodGFnKSB7XG4gICAgaWYgKCF0YWcgfHwgIXRhZy5uYW1lKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgdmFsID0gdGFnLm5hbWUgKyAnJztcbiAgICByZXR1cm4gdmFsLnRvTG93ZXJDYXNlKCk7XG4gIH1cbn1cbiJdfQ==
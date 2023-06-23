/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { Input, Directive } from '@angular/core';
import { takeUntil, auditTime } from 'rxjs/operators';
import { ConvertToTitleCase } from '../../../utils/case-helper';
import { v4 as uuidv4 } from 'uuid';
/**
 * @template T
 */
export class FormBase {
    constructor() {
        this.internalControl = new FormControl();
        this._destroyed = new Subject();
        this.disabled = false;
        this.propagateOnChange = () => { };
        this.onTouched = () => { };
        // Garrentee that init and destroy are called
        // even if ngOnInit() or ngOnDestroy() are overriden
        const /** @type {?} */ originalOnDestroy = this.ngOnDestroy;
        this.ngOnDestroy = () => {
            this.destroy();
            originalOnDestroy.apply(this);
        };
        const /** @type {?} */ originalOnInit = this.ngOnInit;
        this.ngOnInit = () => {
            this.init();
            originalOnInit.apply(this);
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @return {?}
     */
    init() {
        this._destroyed.next();
        this.autoCompleteObscureName = uuidv4();
        this.internalControl.valueChanges
            .pipe(takeUntil(this._destroyed))
            .pipe(auditTime(100))
            .subscribe(() => {
            this._value = this.internalControl.value;
            this.onChange(this._value);
            this.onTouched();
            // console.log('form-base-class: valueChanges', {val: this._value});
        });
        if (!this.placeholder) {
            const /** @type {?} */ nameParsed = ConvertToTitleCase(this.formControlName + '');
            this.placeholder = nameParsed;
        }
    }
    /**
     * @return {?}
     */
    destroy() {
        this._destroyed.next();
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set value(val) {
        this._value = val;
        this.internalControl.setValue(val);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateOnChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        setTimeout(() => {
            if (isDisabled) {
                this.internalControl.disable();
            }
            else {
                this.internalControl.enable();
            }
        });
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        const /** @type {?} */ errors = c.errors;
        const /** @type {?} */ value = c.value;
        // console.log('form-base-class: validate()', { errors, value });
        this.internalControl.setValidators(c.validator);
        return !this.validationError
            ? null
            : {
                validationError: {
                    valid: false
                }
            };
    }
    /**
     * @param {?} inputValue
     * @return {?}
     */
    onChange(inputValue) {
        this.validationError = this.CheckValueIsValid();
        if (this.validationError) {
            this.propagateOnChange(this.value);
        }
        else {
            this.propagateOnChange(inputValue);
        }
    }
    /**
     * @return {?}
     */
    CheckValueIsValid() {
        return null;
    }
}
FormBase.decorators = [
    { type: Directive }
];
/** @nocollapse */
FormBase.ctorParameters = () => [];
FormBase.propDecorators = {
    formControlName: [{ type: Input }],
    placeholder: [{ type: Input }]
};
function FormBase_tsickle_Closure_declarations() {
    /** @type {?} */
    FormBase.prototype.internalControl;
    /** @type {?} */
    FormBase.prototype.autoCompleteObscureName;
    /** @type {?} */
    FormBase.prototype._destroyed;
    /** @type {?} */
    FormBase.prototype.disabled;
    /** @type {?} */
    FormBase.prototype.validationError;
    /** @type {?} */
    FormBase.prototype._value;
    /** @type {?} */
    FormBase.prototype.formControlName;
    /** @type {?} */
    FormBase.prototype.placeholder;
    /** @type {?} */
    FormBase.prototype.propagateOnChange;
    /** @type {?} */
    FormBase.prototype.onTouched;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1iYXNlLWNsYXNzLmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL1NoaXZhbmcvUGkgU29mdHdhcmUvZmlsZS1tYW5hZ2VyL25neC1maWxlbWFuYWdlci9wcm9qZWN0cy9uZ3gtZmlsZW1hbmFnZXItY2xpZW50LWZpcmViYXNlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi91aS9maWxlLXVwbG9hZC9mb3JtLWZpbGUtZmlyZWJhc2UvZm9ybS1iYXNlLWNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXdCLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFxQixLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFDLEVBQUUsSUFBSSxNQUFNLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFHbkMsTUFBTSxPQUFPLFFBQVE7SUFnQm5COytCQWQrQixJQUFJLFdBQVcsRUFBRTtRQUVoRCxrQkFBYSxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRTNCLGdCQUFXLEtBQUssQ0FBQztpQ0FpRVEsR0FBRyxFQUFFLElBQUc7eUJBS2hCLEdBQUcsRUFBRSxJQUFHOzs7UUF6RHZCLHVCQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CLENBQUM7UUFDRix1QkFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FB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LENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDTCxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDcEM7Ozs7O0lBR0gsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUM7S0FDYjs7O1lBdEhGLFNBQVM7Ozs7OzhCQVlQLEtBQUs7MEJBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQsIElucHV0LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbCwgYXVkaXRUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29udmVydFRvVGl0bGVDYXNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2FzZS1oZWxwZXInO1xuaW1wb3J0IHt2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgY2xhc3MgRm9ybUJhc2U8VD5cbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB7XG4gIGludGVybmFsQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgYXV0b0NvbXBsZXRlT2JzY3VyZU5hbWU6IHN0cmluZztcbiAgX2Rlc3Ryb3llZCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgdmFsaWRhdGlvbkVycm9yOiBzdHJpbmc7XG5cbiAgX3ZhbHVlOiBUO1xuXG4gIEBJbnB1dCgpXG4gIGZvcm1Db250cm9sTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIEdhcnJlbnRlZSB0aGF0IGluaXQgYW5kIGRlc3Ryb3kgYXJlIGNhbGxlZFxuICAgIC8vIGV2ZW4gaWYgbmdPbkluaXQoKSBvciBuZ09uRGVzdHJveSgpIGFyZSBvdmVycmlkZW5cbiAgICBjb25zdCBvcmlnaW5hbE9uRGVzdHJveSA9IHRoaXMubmdPbkRlc3Ryb3k7XG4gICAgdGhpcy5uZ09uRGVzdHJveSA9ICgpID0+IHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgb3JpZ2luYWxPbkRlc3Ryb3kuYXBwbHkodGhpcyk7XG4gICAgfTtcbiAgICBjb25zdCBvcmlnaW5hbE9uSW5pdCA9IHRoaXMubmdPbkluaXQ7XG4gICAgdGhpcy5uZ09uSW5pdCA9ICgpID0+IHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgb3JpZ2luYWxPbkluaXQuYXBwbHkodGhpcyk7XG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge31cblxuICBuZ09uRGVzdHJveSgpIHt9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuYXV0b0NvbXBsZXRlT2JzY3VyZU5hbWUgPSB1dWlkdjQoKTtcbiAgICB0aGlzLmludGVybmFsQ29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKVxuICAgICAgLnBpcGUoYXVkaXRUaW1lKDEwMCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLmludGVybmFsQ29udHJvbC52YWx1ZTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdmb3JtLWJhc2UtY2xhc3M6IHZhbHVlQ2hhbmdlcycsIHt2YWw6IHRoaXMuX3ZhbHVlfSk7XG4gICAgICB9KTtcblxuICAgIGlmICghdGhpcy5wbGFjZWhvbGRlcikge1xuICAgICAgY29uc3QgbmFtZVBhcnNlZCA9IENvbnZlcnRUb1RpdGxlQ2FzZSh0aGlzLmZvcm1Db250cm9sTmFtZSArICcnKTtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSBuYW1lUGFyc2VkO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQoKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWw7XG4gICAgdGhpcy5pbnRlcm5hbENvbnRyb2wuc2V0VmFsdWUodmFsKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHByb3BhZ2F0ZU9uQ2hhbmdlOiBhbnkgPSAoKSA9PiB7fTtcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVPbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgb25Ub3VjaGVkOiBhbnkgPSAoKSA9PiB7fTtcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmludGVybmFsQ29udHJvbC5kaXNhYmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmludGVybmFsQ29udHJvbC5lbmFibGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB2YWxpZGF0ZShjOiBGb3JtQ29udHJvbCkge1xuICAgIGNvbnN0IGVycm9ycyA9IGMuZXJyb3JzO1xuICAgIGNvbnN0IHZhbHVlID0gYy52YWx1ZTtcbiAgICAvLyBjb25zb2xlLmxvZygnZm9ybS1iYXNlLWNsYXNzOiB2YWxpZGF0ZSgpJywgeyBlcnJvcnMsIHZhbHVlIH0pO1xuICAgIHRoaXMuaW50ZXJuYWxDb250cm9sLnNldFZhbGlkYXRvcnMoYy52YWxpZGF0b3IpO1xuICAgIHJldHVybiAhdGhpcy52YWxpZGF0aW9uRXJyb3JcbiAgICAgID8gbnVsbFxuICAgICAgOiB7XG4gICAgICAgICAgdmFsaWRhdGlvbkVycm9yOiB7XG4gICAgICAgICAgICB2YWxpZDogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gIH1cblxuICBwcml2YXRlIG9uQ2hhbmdlKGlucHV0VmFsdWUpIHtcbiAgICB0aGlzLnZhbGlkYXRpb25FcnJvciA9IHRoaXMuQ2hlY2tWYWx1ZUlzVmFsaWQoKTtcbiAgICBpZiAodGhpcy52YWxpZGF0aW9uRXJyb3IpIHtcbiAgICAgIHRoaXMucHJvcGFnYXRlT25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcGFnYXRlT25DaGFuZ2UoaW5wdXRWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgQ2hlY2tWYWx1ZUlzVmFsaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIl19
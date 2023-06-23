import { ControlValueAccessor, FormControl, Validator } from '@angular/forms';
import { Subject } from 'rxjs';
import { OnDestroy, OnInit } from '@angular/core';
export declare class FormBase<T> implements OnInit, OnDestroy, ControlValueAccessor, Validator {
    internalControl: FormControl;
    autoCompleteObscureName: string;
    _destroyed: Subject<unknown>;
    disabled: boolean;
    validationError: string;
    _value: T;
    formControlName: string;
    placeholder: string;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    init(): void;
    destroy(): void;
    get value(): T;
    set value(val: T);
    writeValue(value: any): void;
    propagateOnChange: any;
    registerOnChange(fn: any): void;
    onTouched: any;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    validate(c: FormControl): {
        validationError: {
            valid: boolean;
        };
    };
    private onChange;
    CheckValueIsValid(): string;
}

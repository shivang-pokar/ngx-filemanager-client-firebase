import { ElementRef, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
export interface Tag {
    id: string;
    name: string;
    isDisabled?: boolean;
}
export declare class AppControlTagMultipleComponent implements OnInit, OnDestroy {
    controlAutocomplete: FormControl;
    visible: boolean;
    selectable: boolean;
    addOnBlur: boolean;
    separatorKeysCodes: number[];
    filteredTags: Observable<Tag[]>;
    tagInput: ElementRef<HTMLInputElement>;
    matAutocomplete: MatAutocomplete;
    selectInitial: Tag[];
    placeholder: string;
    displayLowerCase: boolean;
    control: FormControl;
    removableTags: boolean;
    allowCustom: boolean;
    selectChoices$: Observable<Tag[]>;
    autoCompleteObscureName: string;
    checkExists(val: any, name: any): void;
    hasRed(): boolean;
    ngOnInit(): void;
    ngOnDestroy(): void;
    add(event: MatChipInputEvent): void;
    removeTag(removeTag: Tag): void;
    selectedTag(event: MatAutocompleteSelectedEvent): void;
    updateFormValue(): void;
    getLowerCase(tag: any): string;
}

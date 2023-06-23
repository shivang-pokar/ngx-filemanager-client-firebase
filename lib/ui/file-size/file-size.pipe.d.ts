import { PipeTransform } from '@angular/core';
export declare class FileSizePipe implements PipeTransform {
    private units;
    transform(bytesInput: any, precision?: number): string;
}

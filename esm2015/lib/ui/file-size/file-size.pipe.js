/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
export class FileSizePipe {
    constructor() {
        this.units = [
            'bytes',
            'KB',
            'MB',
            'GB',
            'TB',
            'PB'
        ];
    }
    /**
     * @param {?} bytesInput
     * @param {?=} precision
     * @return {?}
     */
    transform(bytesInput, precision = 0) {
        let /** @type {?} */ bytes = +bytesInput;
        if (!isFinite(bytes)) {
            return '?';
        }
        let /** @type {?} */ unit = 0;
        while (bytes >= 1024) {
            bytes /= 1024;
            unit++;
        }
        return bytes.toFixed(+precision) + ' ' + this.units[unit];
    }
}
FileSizePipe.decorators = [
    { type: Pipe, args: [{ name: 'fileSize' },] }
];
function FileSizePipe_tsickle_Closure_declarations() {
    /** @type {?} */
    FileSizePipe.prototype.units;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zaXplLnBpcGUuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvU2hpdmFuZy9QaSBTb2Z0d2FyZS9maWxlLW1hbmFnZXIvbmd4LWZpbGVtYW5hZ2VyL3Byb2plY3RzL25neC1maWxlbWFuYWdlci1jbGllbnQtZmlyZWJhc2Uvc3JjLyIsInNvdXJjZXMiOlsibGliL3VpL2ZpbGUtc2l6ZS9maWxlLXNpemUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFZcEQsTUFBTSxPQUFPLFlBQVk7O3FCQUVQO1lBQ2QsT0FBTztZQUNQLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1NBQ0w7Ozs7Ozs7SUFFRCxTQUFTLENBQUMsVUFBVSxFQUFFLFlBQW9CLENBQUM7UUFDekMscUJBQUksS0FBSyxHQUFHLENBQUMsVUFBVSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUUsS0FBSyxDQUFFLEVBQUU7WUFDdEIsT0FBTyxHQUFHLENBQUM7U0FDWjtRQUNELHFCQUFJLElBQUksR0FBRyxDQUFDLENBQUM7UUFDYixPQUFRLEtBQUssSUFBSSxJQUFJLEVBQUc7WUFDdEIsS0FBSyxJQUFJLElBQUksQ0FBQztZQUNkLElBQUksRUFBRyxDQUFDO1NBQ1Q7UUFFRCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUUsQ0FBRSxTQUFTLENBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUUsQ0FBQztLQUNoRTs7O1lBeEJGLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qXG4gKiBDb252ZXJ0IGJ5dGVzIGludG8gbGFyZ2VzdCBwb3NzaWJsZSB1bml0LlxuICogVGFrZXMgYW4gcHJlY2lzaW9uIGFyZ3VtZW50IHRoYXQgZGVmYXVsdHMgdG8gMi5cbiAqIFVzYWdlOlxuICogICBieXRlcyB8IGZpbGVTaXplOnByZWNpc2lvblxuICogRXhhbXBsZTpcbiAqICAge3sgMTAyNCB8ICBmaWxlU2l6ZX19XG4gKiAgIGZvcm1hdHMgdG86IDEgS0JcbiovXG5AUGlwZSh7bmFtZTogJ2ZpbGVTaXplJ30pXG5leHBvcnQgY2xhc3MgRmlsZVNpemVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgcHJpdmF0ZSB1bml0cyA9IFtcbiAgICAnYnl0ZXMnLFxuICAgICdLQicsXG4gICAgJ01CJyxcbiAgICAnR0InLFxuICAgICdUQicsXG4gICAgJ1BCJ1xuICBdO1xuXG4gIHRyYW5zZm9ybShieXRlc0lucHV0LCBwcmVjaXNpb246IG51bWJlciA9IDAgKTogc3RyaW5nIHtcbiAgICBsZXQgYnl0ZXMgPSArYnl0ZXNJbnB1dDtcbiAgICBpZiAoIWlzRmluaXRlKCBieXRlcyApKSB7XG4gICAgICByZXR1cm4gJz8nO1xuICAgIH1cbiAgICBsZXQgdW5pdCA9IDA7XG4gICAgd2hpbGUgKCBieXRlcyA+PSAxMDI0ICkge1xuICAgICAgYnl0ZXMgLz0gMTAyNDtcbiAgICAgIHVuaXQgKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ5dGVzLnRvRml4ZWQoICsgcHJlY2lzaW9uICkgKyAnICcgKyB0aGlzLnVuaXRzWyB1bml0IF07XG4gIH1cbn1cbiJdfQ==
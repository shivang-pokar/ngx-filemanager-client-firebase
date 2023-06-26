/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { __awaiter } from "tslib";
import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { Subject, timer } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { getFileIcon, isFileImage } from './file-icon.helper';
import { FormBase } from './form-base-class';
import { TrimSlashes } from '../../../utils/path-helpers';
import { NotificationService } from '../../../services/pure/notification.service';
/**
 * @record
 */
export function FormFilesConfiguration() { }
function FormFilesConfiguration_tsickle_Closure_declarations() {
    /** @type {?} */
    FormFilesConfiguration.prototype.directory;
    /** @type {?|undefined} */
    FormFilesConfiguration.prototype.bucketname;
    /** @type {?} */
    FormFilesConfiguration.prototype.firebaseConfig;
    /** @type {?|undefined} */
    FormFilesConfiguration.prototype.maxFiles;
    /** @type {?|undefined} */
    FormFilesConfiguration.prototype.imageCompressionQuality;
    /** @type {?|undefined} */
    FormFilesConfiguration.prototype.imageCompressionMaxSize;
    /** @type {?|undefined} */
    FormFilesConfiguration.prototype.acceptedFiles;
}
export class FormFileFirebaseComponent extends FormBase {
    /**
     * @param {?} ns
     */
    constructor(ns) {
        super();
        this.ns = ns;
        this.placeholder = 'upload here';
        this.config = {};
        // tslint:disable-next-line: no-output-on-prefix
        this.uploadStatusChanged = new EventEmitter();
        this.destroyed = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        let /** @type {?} */ app;
        if (firebase.default.apps.length) {
            app = firebase.default.apps[0];
        }
        else {
            app = firebase.default.initializeApp(this.config.firebaseConfig);
        }
        this.storage = app.storage(this.currentBucketName());
        timer(0, 1000)
            .pipe(takeUntil(this.destroyed))
            .subscribe(() => {
            this.checkAllUploadsAreDone();
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed.next();
    }
    /**
     * @return {?}
     */
    checkAllUploadsAreDone() {
        const /** @type {?} */ allFiles = this.value;
        const /** @type {?} */ completeArray = allFiles
            .filter(f => !!f)
            .filter(f => !!f.value)
            .filter(f => !!f.value.props)
            .map(f => f.value.props.completed);
        const /** @type {?} */ haveAllFilesComplete = completeArray.reduce((previous, currentComplete) => previous && currentComplete, true);
        const /** @type {?} */ isStillUploading = !haveAllFilesComplete;
        this.uploadStatusChanged.emit(isStillUploading);
    }
    /**
     * @return {?}
     */
    get isMultiple() {
        return this.config && this.config.maxFiles !== 1;
    }
    /**
     * @return {?}
     */
    get maxReached() {
        return (this.config &&
            this.config.maxFiles &&
            this.value &&
            this.config.maxFiles === this.value.length);
    }
    /**
     * @return {?}
     */
    currentBucketName() {
        return (this.config.bucketname ||
            // tslint:disable-next-line: no-string-literal
            this.config.firebaseConfig['storageBucket']);
    }
    /**
     * @param {?} fileObject
     * @return {?}
     */
    clickRemoveTag(fileObject) {
        return __awaiter(this, void 0, void 0, function* () {
            this.ensureValueIsArray();
            this.value = this.value.filter(f => f.id !== fileObject.id);
            if (fileObject.bucket_path) {
                try {
                    yield this.storage.refFromURL(fileObject.bucket_path).delete();
                    console.log('form-files: clickRemoveTag() file deleted from storage', {
                        fileObject
                    });
                }
                catch (/** @type {?} */ error) {
                    console.log('form-files: clickRemoveTag() problem deleting file', error);
                }
            }
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFileChange(event) {
        if (event.target.files && event.target.files.length) {
            const /** @type {?} */ filesList = event.target.files;
            const /** @type {?} */ fileArray = Array.from(filesList);
            fileArray.map((file) => this.beginUploadTask(file));
        }
    }
    /**
     * @param {?} file
     * @return {?}
     */
    beginUploadTask(file) {
        return __awaiter(this, void 0, void 0, function* () {
            const /** @type {?} */ bucketPath = 'gs://' + this.currentBucketName();
            const /** @type {?} */ uniqueFileName = file.name;
            const /** @type {?} */ originalFileName = file.name;
            const /** @type {?} */ dir = this.config.directory;
            const /** @type {?} */ dirPath = `${TrimSlashes(bucketPath)}/${TrimSlashes(dir)}`;
            const /** @type {?} */ fullPath = `${TrimSlashes(dirPath)}/${uniqueFileName}`;
            console.log('beginUploadTask()', { fileData: file, bucketPath, fullPath });
            let /** @type {?} */ fileParsed;
            if (file.type === 'image/*') {
                fileParsed = yield this.parseAndCompress(file);
            }
            else {
                fileParsed = file;
            }
            yield this.addFile(uniqueFileName, originalFileName, fullPath);
            const /** @type {?} */ uploadTask = this.storage.refFromURL(fullPath).put(fileParsed);
            uploadTask.on(firebase.default.storage.TaskEvent.STATE_CHANGED, {
                next: snap => this.onNext(snap, fullPath),
                error: error => this.onError(error),
                complete: () => this.onComplete(fullPath, uniqueFileName, originalFileName)
            });
            this.destroyed.pipe(take(1)).subscribe(() => {
                uploadTask.cancel();
            });
        });
    }
    /**
     * @param {?} file
     * @return {?}
     */
    parseAndCompress(file) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.config.imageCompressionMaxSize &&
                !this.config.imageCompressionQuality) {
                return file;
            }
            const /** @type {?} */ maxWidth = this.config.imageCompressionMaxSize || 1800;
            const /** @type {?} */ maxQuality = this.config.imageCompressionQuality || 0.6;
            const /** @type {?} */ dataURL = yield blobToDataURL(file);
            const /** @type {?} */ newDataURL = yield downscaleImage(dataURL, maxWidth, maxQuality, 'image/jpeg');
            const /** @type {?} */ oldKb = this.getFileSizeKiloBytes(dataURL);
            const /** @type {?} */ newKb = this.getFileSizeKiloBytes(newDataURL);
            const /** @type {?} */ fileNew = dataURItoBlob(newDataURL);
            console.log(`app-tags-files.component: optimized image...
  --> old=${oldKb} kb
  --> new=${newKb} kb`);
            return fileNew;
        });
    }
    /**
     * @param {?} dataURL
     * @return {?}
     */
    getFileSizeKiloBytes(dataURL) {
        const /** @type {?} */ head = 'data:image/*;base64,';
        const /** @type {?} */ fileSizeBytes = Math.round(((dataURL.length - head.length) * 3) / 4);
        const /** @type {?} */ fileSizeKiloBytes = (fileSizeBytes / 1024).toFixed(0);
        return fileSizeKiloBytes;
    }
    /**
     * @param {?} snapshot
     * @param {?} fullPath
     * @return {?}
     */
    onNext(snapshot, fullPath) {
        return __awaiter(this, void 0, void 0, function* () {
            this.ensureValueIsArray();
            switch (snapshot.state) {
                case firebase.default.storage.TaskState.RUNNING: // or 'running'
                    // or 'running'
                    const /** @type {?} */ file = this.value.find(f => f.bucket_path === fullPath);
                    const /** @type {?} */ progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is running', {
                        file,
                        fullPath,
                        progress,
                        snapshot
                    });
                    file.value.props.progress = progress;
                    break;
            }
        });
    }
    /**
     * @param {?} error
     * @return {?}
     */
    onError(error) {
        this.ns.notify('storage/unauthorized', 'Error Uploading');
        console.error('onError(error)', { error }, error);
    }
    /**
     * @param {?} fullPath
     * @param {?} uniqueFileName
     * @param {?} originalFileName
     * @return {?}
     */
    onComplete(fullPath, uniqueFileName, originalFileName) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('onComplete()', {});
            const /** @type {?} */ ref = this.storage.refFromURL(fullPath);
            const /** @type {?} */ url = yield ref.getDownloadURL();
            const /** @type {?} */ isImage = isFileImage(originalFileName);
            this.ensureValueIsArray();
            const /** @type {?} */ file = this.value.find(f => f.id === uniqueFileName);
            file.id = url;
            if (isImage) {
                file.imageurl = url;
            }
            file.value.props.completed = true;
            this.writeValue(this.value);
        });
    }
    /**
     * @param {?} uniqueFileName
     * @param {?} originalFileName
     * @param {?} fullPath
     * @return {?}
     */
    addFile(uniqueFileName, originalFileName, fullPath) {
        const /** @type {?} */ fileIcon = getFileIcon(originalFileName);
        const /** @type {?} */ newFile = {
            id: uniqueFileName,
            fileicon: fileIcon,
            imageurl: null,
            bucket_path: fullPath,
            value: {
                name: originalFileName,
                props: {
                    thumb: null,
                    fileicon: fileIcon,
                    progress: 0,
                    completed: false
                }
            }
        };
        this.ensureValueIsArray();
        this.value.push(newFile);
    }
    /**
     * @return {?}
     */
    ensureValueIsArray() {
        if (!Array.isArray(this.value)) {
            this.writeValue([]);
        }
    }
}
FormFileFirebaseComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'form-file-firebase',
                template: `
    <div>
      <label class="custom-file-upload">
        <input
          *ngIf="isMultiple"
          class="hidden"
          type="file"
          multiple
          [disabled]="disabled || maxReached"
          (change)="onFileChange($event)"
        />
        <input
          *ngIf="!isMultiple"
          class="hidden"
          type="file"
          [disabled]="disabled || maxReached"
          (change)="onFileChange($event)"
        />
        {{ placeholder }}
        <div class="max-files" *ngIf="maxReached && !disabled">
          Max Uploaded - Limit of {{ config.maxFiles }} file(s) reached. Remove
          files to change uploads
        </div>
      </label>
      <app-uploaded-files-list
        [disabled]="disabled"
        [uploadedFiles]="this.value"
        (clickRemoveTag)="this.clickRemoveTag($event)"
      >
      </app-uploaded-files-list>
    </div>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => FormFileFirebaseComponent),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => FormFileFirebaseComponent),
                        multi: true
                    }
                ],
                styles: [`
      .custom-file-upload {
        border: 4px dashed #ccc;
        display: inline-block;
        padding: 35px 0px;
        cursor: pointer;
        width: calc(100% - 8px);
        text-align: center;
        font-size: 1.5em;
        color: #777;
      }
      .hidden {
        display: none;
      }
      .max-files {
        font-size: 0.9em;
        color: orange;
        font-style: italic;
      }
    `]
            }] }
];
/** @nocollapse */
FormFileFirebaseComponent.ctorParameters = () => [
    { type: NotificationService }
];
FormFileFirebaseComponent.propDecorators = {
    placeholder: [{ type: Input }],
    config: [{ type: Input }],
    uploadStatusChanged: [{ type: Output }]
};
function FormFileFirebaseComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    FormFileFirebaseComponent.prototype.placeholder;
    /** @type {?} */
    FormFileFirebaseComponent.prototype.config;
    /** @type {?} */
    FormFileFirebaseComponent.prototype.uploadStatusChanged;
    /** @type {?} */
    FormFileFirebaseComponent.prototype.destroyed;
    /** @type {?} */
    FormFileFirebaseComponent.prototype.storage;
    /** @type {?} */
    FormFileFirebaseComponent.prototype.ns;
}
/**
 * @param {?} blob
 * @return {?}
 */
function blobToDataURL(blob) {
    return __awaiter(this, void 0, void 0, function* () {
        const /** @type {?} */ reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.onload = function (e) {
                resolve(e.target.result);
            };
            reader.onerror = function (error) {
                reject(error);
            };
            reader.readAsDataURL(blob);
        });
    });
}
/**
 * @param {?} dataURI
 * @return {?}
 */
export function dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    const /** @type {?} */ byteString = atob(dataURI.split(',')[1]);
    // separate out the mime component
    const /** @type {?} */ mimeString = dataURI
        .split(',')[0]
        .split(':')[1]
        .split(';')[0];
    // write the bytes of the string to an ArrayBuffer
    const /** @type {?} */ ab = new ArrayBuffer(byteString.length);
    // create a view into the buffer
    const /** @type {?} */ ia = new Uint8Array(ab);
    // set the bytes of the buffer to the correct values
    for (let /** @type {?} */ i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    // write the ArrayBuffer to a blob, and you're done
    const /** @type {?} */ blob = new Blob([ab], { type: mimeString });
    return blob;
}
/**
 * @param {?} dataUrl
 * @param {?} newWidth
 * @param {?} imageQuality
 * @param {?} imageType
 * @param {?=} debug
 * @return {?}
 */
function downscaleImage(dataUrl, newWidth, imageQuality, imageType, debug) {
    return __awaiter(this, void 0, void 0, function* () {
        // Provide default values
        imageType = imageType || 'image/jpeg';
        imageQuality = imageQuality || 0.7;
        // Create a temporary image so that we can compute the height of the downscaled image.
        const /** @type {?} */ image = new Image();
        image.src = dataUrl;
        yield new Promise(resolve => {
            image.onload = () => {
                resolve('');
            };
        });
        const /** @type {?} */ oldWidth = image.width;
        const /** @type {?} */ oldHeight = image.height;
        const /** @type {?} */ newHeight = Math.floor((oldHeight / oldWidth) * newWidth);
        // Create a temporary canvas to draw the downscaled image on.
        const /** @type {?} */ canvas = document.createElement('canvas');
        canvas.width = newWidth;
        canvas.height = newHeight;
        // Draw the downscaled image on the canvas and return the new data URL.
        const /** @type {?} */ ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, newWidth, newHeight);
        const /** @type {?} */ newDataUrl = canvas.toDataURL(imageType, imageQuality);
        if (debug) {
            console.log('quill.imageCompressor: downscaling image...', {
                args: {
                    dataUrl,
                    newWidth,
                    imageType,
                    imageQuality
                },
                image,
                oldWidth,
                oldHeight,
                newHeight,
                canvas,
                ctx,
                newDataUrl
            });
        }
        return newDataUrl;
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWxlLWZpcmViYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9TaGl2YW5nL1BpIFNvZnR3YXJlL2ZpbGUtbWFuYWdlci9uZ3gtZmlsZW1hbmFnZXIvcHJvamVjdHMvbmd4LWZpbGVtYW5hZ2VyLWNsaWVudC1maXJlYmFzZS9zcmMvIiwic291cmNlcyI6WyJsaWIvdWkvZmlsZS11cGxvYWQvZm9ybS1maWxlLWZpcmViYXNlL2Zvcm0tZmlsZS1maXJlYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFHVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxLQUFLLFFBQVEsTUFBTSxjQUFjLENBQUM7QUFDekMsT0FBTyxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0ZsRixNQUFNLE9BQU8seUJBQTBCLFNBQVEsUUFBK0I7Ozs7SUFhNUUsWUFBbUIsRUFBdUI7UUFDeEMsS0FBSyxFQUFFLENBQUM7UUFEUyxPQUFFLEdBQUYsRUFBRSxDQUFxQjtRQVgxQyxtQkFD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QUNELE9BQU8sVUFBVSxDQUFDOztDQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgZm9yd2FyZFJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBOR19WQUxJREFUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9ybUFycmF5RmlsZU9iamVjdCB9IGZyb20gJy4vRm9ybUFycmF5RmlsZU9iamVjdCc7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcbmltcG9ydCB7IFN1YmplY3QsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBnZXRGaWxlSWNvbiwgaXNGaWxlSW1hZ2UgfSBmcm9tICcuL2ZpbGUtaWNvbi5oZWxwZXInO1xuaW1wb3J0IHsgRm9ybUJhc2UgfSBmcm9tICcuL2Zvcm0tYmFzZS1jbGFzcyc7XG5pbXBvcnQgeyBUcmltU2xhc2hlcyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3BhdGgtaGVscGVycyc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcHVyZS9ub3RpZmljYXRpb24uc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybUZpbGVzQ29uZmlndXJhdGlvbiB7XG4gIGRpcmVjdG9yeTogc3RyaW5nO1xuICBidWNrZXRuYW1lPzogc3RyaW5nO1xuICBmaXJlYmFzZUNvbmZpZzoge307XG4gIG1heEZpbGVzPzogbnVtYmVyO1xuICBpbWFnZUNvbXByZXNzaW9uUXVhbGl0eT86IG51bWJlcjtcbiAgaW1hZ2VDb21wcmVzc2lvbk1heFNpemU/OiBudW1iZXI7XG4gIGFjY2VwdGVkRmlsZXM/OiAnaW1hZ2UvKixhcHBsaWNhdGlvbi8qJyB8ICdpbWFnZS8qJztcbn1cblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZm9ybS1maWxlLWZpcmViYXNlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWZpbGUtdXBsb2FkXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICpuZ0lmPVwiaXNNdWx0aXBsZVwiXG4gICAgICAgICAgY2xhc3M9XCJoaWRkZW5cIlxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZCB8fCBtYXhSZWFjaGVkXCJcbiAgICAgICAgICAoY2hhbmdlKT1cIm9uRmlsZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgKm5nSWY9XCIhaXNNdWx0aXBsZVwiXG4gICAgICAgICAgY2xhc3M9XCJoaWRkZW5cIlxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgbWF4UmVhY2hlZFwiXG4gICAgICAgICAgKGNoYW5nZSk9XCJvbkZpbGVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIC8+XG4gICAgICAgIHt7IHBsYWNlaG9sZGVyIH19XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYXgtZmlsZXNcIiAqbmdJZj1cIm1heFJlYWNoZWQgJiYgIWRpc2FibGVkXCI+XG4gICAgICAgICAgTWF4IFVwbG9hZGVkIC0gTGltaXQgb2Yge3sgY29uZmlnLm1heEZpbGVzIH19IGZpbGUocykgcmVhY2hlZC4gUmVtb3ZlXG4gICAgICAgICAgZmlsZXMgdG8gY2hhbmdlIHVwbG9hZHNcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGFwcC11cGxvYWRlZC1maWxlcy1saXN0XG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFt1cGxvYWRlZEZpbGVzXT1cInRoaXMudmFsdWVcIlxuICAgICAgICAoY2xpY2tSZW1vdmVUYWcpPVwidGhpcy5jbGlja1JlbW92ZVRhZygkZXZlbnQpXCJcbiAgICAgID5cbiAgICAgIDwvYXBwLXVwbG9hZGVkLWZpbGVzLWxpc3Q+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5jdXN0b20tZmlsZS11cGxvYWQge1xuICAgICAgICBib3JkZXI6IDRweCBkYXNoZWQgI2NjYztcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAzNXB4IDBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gOHB4KTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICBjb2xvcjogIzc3NztcbiAgICAgIH1cbiAgICAgIC5oaWRkZW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgLm1heC1maWxlcyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIH1cbiAgICBgXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRm9ybUZpbGVGaXJlYmFzZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEZvcm1GaWxlRmlyZWJhc2VDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpbGVGaXJlYmFzZUNvbXBvbmVudCBleHRlbmRzIEZvcm1CYXNlPEZvcm1BcnJheUZpbGVPYmplY3RbXT5cbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpXG4gIHBsYWNlaG9sZGVyID0gJ3VwbG9hZCBoZXJlJztcbiAgQElucHV0KClcbiAgY29uZmlnOiBGb3JtRmlsZXNDb25maWd1cmF0aW9uID0ge30gYXMgYW55O1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgpXG4gIHVwbG9hZFN0YXR1c0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgZGVzdHJveWVkID0gbmV3IFN1YmplY3QoKTtcbiAgc3RvcmFnZTogZmlyZWJhc2Uuc3RvcmFnZS5TdG9yYWdlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuczogTm90aWZpY2F0aW9uU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgYXBwO1xuICAgIGlmIChmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xuICAgICAgYXBwID0gZmlyZWJhc2UuYXBwc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBwID0gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcCh0aGlzLmNvbmZpZy5maXJlYmFzZUNvbmZpZyk7XG4gICAgfVxuICAgIHRoaXMuc3RvcmFnZSA9IGFwcC5zdG9yYWdlKHRoaXMuY3VycmVudEJ1Y2tldE5hbWUoKSk7XG4gICAgdGltZXIoMCwgMTAwMClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jaGVja0FsbFVwbG9hZHNBcmVEb25lKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveWVkLm5leHQoKTtcbiAgfVxuXG4gIGNoZWNrQWxsVXBsb2Fkc0FyZURvbmUoKSB7XG4gICAgY29uc3QgYWxsRmlsZXMgPSB0aGlzLnZhbHVlO1xuICAgIGNvbnN0IGNvbXBsZXRlQXJyYXkgPSBhbGxGaWxlc1xuICAgICAgLmZpbHRlcihmID0+ICEhZilcbiAgICAgIC5maWx0ZXIoZiA9PiAhIWYudmFsdWUpXG4gICAgICAuZmlsdGVyKGYgPT4gISFmLnZhbHVlLnByb3BzKVxuICAgICAgLm1hcChmID0+IGYudmFsdWUucHJvcHMuY29tcGxldGVkKTtcblxuICAgIGNvbnN0IGhhdmVBbGxGaWxlc0NvbXBsZXRlID0gY29tcGxldGVBcnJheS5yZWR1Y2UoXG4gICAgICAocHJldmlvdXMsIGN1cnJlbnRDb21wbGV0ZSkgPT4gcHJldmlvdXMgJiYgY3VycmVudENvbXBsZXRlLFxuICAgICAgdHJ1ZVxuICAgICk7XG4gICAgY29uc3QgaXNTdGlsbFVwbG9hZGluZyA9ICFoYXZlQWxsRmlsZXNDb21wbGV0ZTtcbiAgICB0aGlzLnVwbG9hZFN0YXR1c0NoYW5nZWQuZW1pdChpc1N0aWxsVXBsb2FkaW5nKTtcbiAgfVxuXG4gIGdldCBpc011bHRpcGxlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5tYXhGaWxlcyAhPT0gMTtcbiAgfVxuXG4gIGdldCBtYXhSZWFjaGVkKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmNvbmZpZyAmJlxuICAgICAgdGhpcy5jb25maWcubWF4RmlsZXMgJiZcbiAgICAgIHRoaXMudmFsdWUgJiZcbiAgICAgIHRoaXMuY29uZmlnLm1heEZpbGVzID09PSB0aGlzLnZhbHVlLmxlbmd0aFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGN1cnJlbnRCdWNrZXROYW1lKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmNvbmZpZy5idWNrZXRuYW1lIHx8XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXN0cmluZy1saXRlcmFsXG4gICAgICB0aGlzLmNvbmZpZy5maXJlYmFzZUNvbmZpZ1snc3RvcmFnZUJ1Y2tldCddXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGNsaWNrUmVtb3ZlVGFnKGZpbGVPYmplY3Q6IEZvcm1BcnJheUZpbGVPYmplY3QpIHtcbiAgICB0aGlzLmVuc3VyZVZhbHVlSXNBcnJheSgpO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLmZpbHRlcihmID0+IGYuaWQgIT09IGZpbGVPYmplY3QuaWQpO1xuICAgIGlmIChmaWxlT2JqZWN0LmJ1Y2tldF9wYXRoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLnN0b3JhZ2UucmVmRnJvbVVSTChmaWxlT2JqZWN0LmJ1Y2tldF9wYXRoKS5kZWxldGUoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2Zvcm0tZmlsZXM6IGNsaWNrUmVtb3ZlVGFnKCkgZmlsZSBkZWxldGVkIGZyb20gc3RvcmFnZScsIHtcbiAgICAgICAgICBmaWxlT2JqZWN0XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgJ2Zvcm0tZmlsZXM6IGNsaWNrUmVtb3ZlVGFnKCkgcHJvYmxlbSBkZWxldGluZyBmaWxlJyxcbiAgICAgICAgICBlcnJvclxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uRmlsZUNoYW5nZShldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQuZmlsZXMgJiYgZXZlbnQudGFyZ2V0LmZpbGVzLmxlbmd0aCkge1xuICAgICAgY29uc3QgZmlsZXNMaXN0ID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xuICAgICAgY29uc3QgZmlsZUFycmF5ID0gQXJyYXkuZnJvbShmaWxlc0xpc3QpO1xuICAgICAgZmlsZUFycmF5Lm1hcCgoZmlsZTogRmlsZSkgPT4gdGhpcy5iZWdpblVwbG9hZFRhc2soZmlsZSkpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGJlZ2luVXBsb2FkVGFzayhmaWxlOiBGaWxlKSB7XG4gICAgY29uc3QgYnVja2V0UGF0aCA9ICdnczovLycgKyB0aGlzLmN1cnJlbnRCdWNrZXROYW1lKCk7XG4gICAgY29uc3QgdW5pcXVlRmlsZU5hbWUgPSBmaWxlLm5hbWU7XG4gICAgY29uc3Qgb3JpZ2luYWxGaWxlTmFtZSA9IGZpbGUubmFtZTtcbiAgICBjb25zdCBkaXIgPSB0aGlzLmNvbmZpZy5kaXJlY3Rvcnk7XG4gICAgY29uc3QgZGlyUGF0aCA9IGAke1RyaW1TbGFzaGVzKGJ1Y2tldFBhdGgpfS8ke1RyaW1TbGFzaGVzKGRpcil9YDtcbiAgICBjb25zdCBmdWxsUGF0aCA9IGAke1RyaW1TbGFzaGVzKGRpclBhdGgpfS8ke3VuaXF1ZUZpbGVOYW1lfWA7XG4gICAgY29uc29sZS5sb2coJ2JlZ2luVXBsb2FkVGFzaygpJywgeyBmaWxlRGF0YTogZmlsZSwgYnVja2V0UGF0aCwgZnVsbFBhdGggfSk7XG4gICAgbGV0IGZpbGVQYXJzZWQ7XG4gICAgaWYgKGZpbGUudHlwZSA9PT0gJ2ltYWdlLyonKSB7XG4gICAgICBmaWxlUGFyc2VkID0gYXdhaXQgdGhpcy5wYXJzZUFuZENvbXByZXNzKGZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWxlUGFyc2VkID0gZmlsZTtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5hZGRGaWxlKHVuaXF1ZUZpbGVOYW1lLCBvcmlnaW5hbEZpbGVOYW1lLCBmdWxsUGF0aCk7XG4gICAgY29uc3QgdXBsb2FkVGFzayA9IHRoaXMuc3RvcmFnZS5yZWZGcm9tVVJMKGZ1bGxQYXRoKS5wdXQoZmlsZVBhcnNlZCk7XG4gICAgdXBsb2FkVGFzay5vbihmaXJlYmFzZS5zdG9yYWdlLlRhc2tFdmVudC5TVEFURV9DSEFOR0VELCB7XG4gICAgICBuZXh0OiBzbmFwID0+IHRoaXMub25OZXh0KHNuYXAsIGZ1bGxQYXRoKSxcbiAgICAgIGVycm9yOiBlcnJvciA9PiB0aGlzLm9uRXJyb3IoZXJyb3IpLFxuICAgICAgY29tcGxldGU6ICgpID0+XG4gICAgICAgIHRoaXMub25Db21wbGV0ZShmdWxsUGF0aCwgdW5pcXVlRmlsZU5hbWUsIG9yaWdpbmFsRmlsZU5hbWUpXG4gICAgfSk7XG5cbiAgICB0aGlzLmRlc3Ryb3llZC5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB1cGxvYWRUYXNrLmNhbmNlbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgcGFyc2VBbmRDb21wcmVzcyhmaWxlKSB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuY29uZmlnLmltYWdlQ29tcHJlc3Npb25NYXhTaXplICYmXG4gICAgICAhdGhpcy5jb25maWcuaW1hZ2VDb21wcmVzc2lvblF1YWxpdHlcbiAgICApIHtcbiAgICAgIHJldHVybiBmaWxlO1xuICAgIH1cbiAgICBjb25zdCBtYXhXaWR0aCA9IHRoaXMuY29uZmlnLmltYWdlQ29tcHJlc3Npb25NYXhTaXplIHx8IDE4MDA7XG4gICAgY29uc3QgbWF4UXVhbGl0eSA9IHRoaXMuY29uZmlnLmltYWdlQ29tcHJlc3Npb25RdWFsaXR5IHx8IDAuNjtcbiAgICBjb25zdCBkYXRhVVJMID0gYXdhaXQgYmxvYlRvRGF0YVVSTChmaWxlKTtcbiAgICBjb25zdCBuZXdEYXRhVVJMID0gYXdhaXQgZG93bnNjYWxlSW1hZ2UoXG4gICAgICBkYXRhVVJMLFxuICAgICAgbWF4V2lkdGgsXG4gICAgICBtYXhRdWFsaXR5LFxuICAgICAgJ2ltYWdlL2pwZWcnXG4gICAgKTtcbiAgICBjb25zdCBvbGRLYiA9IHRoaXMuZ2V0RmlsZVNpemVLaWxvQnl0ZXMoZGF0YVVSTCk7XG4gICAgY29uc3QgbmV3S2IgPSB0aGlzLmdldEZpbGVTaXplS2lsb0J5dGVzKG5ld0RhdGFVUkwpO1xuICAgIGNvbnN0IGZpbGVOZXcgPSBkYXRhVVJJdG9CbG9iKG5ld0RhdGFVUkwpIGFzIEZpbGU7XG4gICAgY29uc29sZS5sb2coYGFwcC10YWdzLWZpbGVzLmNvbXBvbmVudDogb3B0aW1pemVkIGltYWdlLi4uXG4gIC0tPiBvbGQ9JHtvbGRLYn0ga2JcbiAgLS0+IG5ldz0ke25ld0tifSBrYmApO1xuICAgIHJldHVybiBmaWxlTmV3O1xuICB9XG5cbiAgZ2V0RmlsZVNpemVLaWxvQnl0ZXMoZGF0YVVSTCkge1xuICAgIGNvbnN0IGhlYWQgPSAnZGF0YTppbWFnZS8qO2Jhc2U2NCwnO1xuICAgIGNvbnN0IGZpbGVTaXplQnl0ZXMgPSBNYXRoLnJvdW5kKCgoZGF0YVVSTC5sZW5ndGggLSBoZWFkLmxlbmd0aCkgKiAzKSAvIDQpO1xuICAgIGNvbnN0IGZpbGVTaXplS2lsb0J5dGVzID0gKGZpbGVTaXplQnl0ZXMgLyAxMDI0KS50b0ZpeGVkKDApO1xuICAgIHJldHVybiBmaWxlU2l6ZUtpbG9CeXRlcztcbiAgfVxuXG4gIGFzeW5jIG9uTmV4dChcbiAgICBzbmFwc2hvdDogZmlyZWJhc2Uuc3RvcmFnZS5VcGxvYWRUYXNrU25hcHNob3QsXG4gICAgZnVsbFBhdGg6IHN0cmluZ1xuICApIHtcbiAgICB0aGlzLmVuc3VyZVZhbHVlSXNBcnJheSgpO1xuICAgIHN3aXRjaCAoc25hcHNob3Quc3RhdGUpIHtcbiAgICAgIGNhc2UgZmlyZWJhc2Uuc3RvcmFnZS5UYXNrU3RhdGUuUlVOTklORzogLy8gb3IgJ3J1bm5pbmcnXG4gICAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLnZhbHVlLmZpbmQoZiA9PiBmLmJ1Y2tldF9wYXRoID09PSBmdWxsUGF0aCk7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID1cbiAgICAgICAgICAoc25hcHNob3QuYnl0ZXNUcmFuc2ZlcnJlZCAvIHNuYXBzaG90LnRvdGFsQnl0ZXMpICogMTAwO1xuICAgICAgICBjb25zb2xlLmxvZygnVXBsb2FkIGlzIHJ1bm5pbmcnLCB7XG4gICAgICAgICAgZmlsZSxcbiAgICAgICAgICBmdWxsUGF0aCxcbiAgICAgICAgICBwcm9ncmVzcyxcbiAgICAgICAgICBzbmFwc2hvdFxuICAgICAgICB9KTtcbiAgICAgICAgZmlsZS52YWx1ZS5wcm9wcy5wcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBvbkVycm9yKGVycm9yKSB7XG4gICAgdGhpcy5ucy5ub3RpZnkoJ3N0b3JhZ2UvdW5hdXRob3JpemVkJywgJ0Vycm9yIFVwbG9hZGluZycpO1xuICAgIGNvbnNvbGUuZXJyb3IoJ29uRXJyb3IoZXJyb3IpJywgeyBlcnJvciB9LCBlcnJvcik7XG4gIH1cblxuICBhc3luYyBvbkNvbXBsZXRlKGZ1bGxQYXRoLCB1bmlxdWVGaWxlTmFtZSwgb3JpZ2luYWxGaWxlTmFtZSkge1xuICAgIGNvbnNvbGUubG9nKCdvbkNvbXBsZXRlKCknLCB7fSk7XG4gICAgY29uc3QgcmVmID0gdGhpcy5zdG9yYWdlLnJlZkZyb21VUkwoZnVsbFBhdGgpO1xuICAgIGNvbnN0IHVybCA9IGF3YWl0IHJlZi5nZXREb3dubG9hZFVSTCgpO1xuICAgIGNvbnN0IGlzSW1hZ2UgPSBpc0ZpbGVJbWFnZShvcmlnaW5hbEZpbGVOYW1lKTtcblxuICAgIHRoaXMuZW5zdXJlVmFsdWVJc0FycmF5KCk7XG4gICAgY29uc3QgZmlsZSA9IHRoaXMudmFsdWUuZmluZChmID0+IGYuaWQgPT09IHVuaXF1ZUZpbGVOYW1lKTtcbiAgICBmaWxlLmlkID0gdXJsO1xuICAgIGlmIChpc0ltYWdlKSB7XG4gICAgICBmaWxlLmltYWdldXJsID0gdXJsO1xuICAgIH1cbiAgICBmaWxlLnZhbHVlLnByb3BzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgdGhpcy53cml0ZVZhbHVlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgYWRkRmlsZSh1bmlxdWVGaWxlTmFtZTogc3RyaW5nLCBvcmlnaW5hbEZpbGVOYW1lOiBzdHJpbmcsIGZ1bGxQYXRoOiBzdHJpbmcpIHtcbiAgICBjb25zdCBmaWxlSWNvbiA9IGdldEZpbGVJY29uKG9yaWdpbmFsRmlsZU5hbWUpO1xuICAgIGNvbnN0IG5ld0ZpbGU6IEZvcm1BcnJheUZpbGVPYmplY3QgPSB7XG4gICAgICBpZDogdW5pcXVlRmlsZU5hbWUsXG4gICAgICBmaWxlaWNvbjogZmlsZUljb24sXG4gICAgICBpbWFnZXVybDogbnVsbCxcbiAgICAgIGJ1Y2tldF9wYXRoOiBmdWxsUGF0aCxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIG5hbWU6IG9yaWdpbmFsRmlsZU5hbWUsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgdGh1bWI6IG51bGwsXG4gICAgICAgICAgZmlsZWljb246IGZpbGVJY29uLFxuICAgICAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5lbnN1cmVWYWx1ZUlzQXJyYXkoKTtcbiAgICB0aGlzLnZhbHVlLnB1c2gobmV3RmlsZSk7XG4gIH1cblxuICBlbnN1cmVWYWx1ZUlzQXJyYXkoKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpKSB7XG4gICAgICB0aGlzLndyaXRlVmFsdWUoW10pO1xuICAgIH1cbiAgfVxufVxuXG4vLyAqKmJsb2IgdG8gZGF0YVVSTCoqXG5hc3luYyBmdW5jdGlvbiBibG9iVG9EYXRhVVJMKGJsb2IpOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGU6IGFueSkge1xuICAgICAgcmVzb2x2ZShlLnRhcmdldC5yZXN1bHQgYXMgc3RyaW5nKTtcbiAgICB9O1xuICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oZXJyb3I6IGFueSkge1xuICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICB9O1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICB9KTtcbn1cblxuLy8gRGF0YXVybCB0byBibG9iXG5leHBvcnQgZnVuY3Rpb24gZGF0YVVSSXRvQmxvYihkYXRhVVJJKSB7XG4gIC8vIGNvbnZlcnQgYmFzZTY0IHRvIHJhdyBiaW5hcnkgZGF0YSBoZWxkIGluIGEgc3RyaW5nXG4gIC8vIGRvZXNuJ3QgaGFuZGxlIFVSTEVuY29kZWQgRGF0YVVSSXMgLSBzZWUgU08gYW5zd2VyICM2ODUwMjc2IGZvciBjb2RlIHRoYXQgZG9lcyB0aGlzXG4gIGNvbnN0IGJ5dGVTdHJpbmcgPSBhdG9iKGRhdGFVUkkuc3BsaXQoJywnKVsxXSk7XG5cbiAgLy8gc2VwYXJhdGUgb3V0IHRoZSBtaW1lIGNvbXBvbmVudFxuICBjb25zdCBtaW1lU3RyaW5nID0gZGF0YVVSSVxuICAgIC5zcGxpdCgnLCcpWzBdXG4gICAgLnNwbGl0KCc6JylbMV1cbiAgICAuc3BsaXQoJzsnKVswXTtcblxuICAvLyB3cml0ZSB0aGUgYnl0ZXMgb2YgdGhlIHN0cmluZyB0byBhbiBBcnJheUJ1ZmZlclxuICBjb25zdCBhYiA9IG5ldyBBcnJheUJ1ZmZlcihieXRlU3RyaW5nLmxlbmd0aCk7XG5cbiAgLy8gY3JlYXRlIGEgdmlldyBpbnRvIHRoZSBidWZmZXJcbiAgY29uc3QgaWEgPSBuZXcgVWludDhBcnJheShhYik7XG5cbiAgLy8gc2V0IHRoZSBieXRlcyBvZiB0aGUgYnVmZmVyIHRvIHRoZSBjb3JyZWN0IHZhbHVlc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5dGVTdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICBpYVtpXSA9IGJ5dGVTdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgfVxuXG4gIC8vIHdyaXRlIHRoZSBBcnJheUJ1ZmZlciB0byBhIGJsb2IsIGFuZCB5b3UncmUgZG9uZVxuICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2FiXSwgeyB0eXBlOiBtaW1lU3RyaW5nIH0pO1xuICByZXR1cm4gYmxvYjtcbn1cblxuLy8gVGFrZSBhbiBpbWFnZSBVUkwsIGRvd25zY2FsZSBpdCB0byB0aGUgZ2l2ZW4gd2lkdGgsIGFuZCByZXR1cm4gYSBuZXcgaW1hZ2UgVVJMLlxuYXN5bmMgZnVuY3Rpb24gZG93bnNjYWxlSW1hZ2UoXG4gIGRhdGFVcmw6IHN0cmluZyxcbiAgbmV3V2lkdGg6IG51bWJlcixcbiAgaW1hZ2VRdWFsaXR5OiBudW1iZXIsXG4gIGltYWdlVHlwZTogc3RyaW5nLFxuICBkZWJ1Zz86IGJvb2xlYW5cbikge1xuICAvLyBQcm92aWRlIGRlZmF1bHQgdmFsdWVzXG4gIGltYWdlVHlwZSA9IGltYWdlVHlwZSB8fCAnaW1hZ2UvanBlZyc7XG4gIGltYWdlUXVhbGl0eSA9IGltYWdlUXVhbGl0eSB8fCAwLjc7XG5cbiAgLy8gQ3JlYXRlIGEgdGVtcG9yYXJ5IGltYWdlIHNvIHRoYXQgd2UgY2FuIGNvbXB1dGUgdGhlIGhlaWdodCBvZiB0aGUgZG93bnNjYWxlZCBpbWFnZS5cbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2Uuc3JjID0gZGF0YVVybDtcbiAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH07XG4gIH0pO1xuICBjb25zdCBvbGRXaWR0aCA9IGltYWdlLndpZHRoO1xuICBjb25zdCBvbGRIZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XG4gIGNvbnN0IG5ld0hlaWdodCA9IE1hdGguZmxvb3IoKG9sZEhlaWdodCAvIG9sZFdpZHRoKSAqIG5ld1dpZHRoKTtcblxuICAvLyBDcmVhdGUgYSB0ZW1wb3JhcnkgY2FudmFzIHRvIGRyYXcgdGhlIGRvd25zY2FsZWQgaW1hZ2Ugb24uXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjYW52YXMud2lkdGggPSBuZXdXaWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IG5ld0hlaWdodDtcblxuICAvLyBEcmF3IHRoZSBkb3duc2NhbGVkIGltYWdlIG9uIHRoZSBjYW52YXMgYW5kIHJldHVybiB0aGUgbmV3IGRhdGEgVVJMLlxuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgbmV3V2lkdGgsIG5ld0hlaWdodCk7XG4gIGNvbnN0IG5ld0RhdGFVcmwgPSBjYW52YXMudG9EYXRhVVJMKGltYWdlVHlwZSwgaW1hZ2VRdWFsaXR5KTtcbiAgaWYgKGRlYnVnKSB7XG4gICAgY29uc29sZS5sb2coJ3F1aWxsLmltYWdlQ29tcHJlc3NvcjogZG93bnNjYWxpbmcgaW1hZ2UuLi4nLCB7XG4gICAgICBhcmdzOiB7XG4gICAgICAgIGRhdGFVcmwsXG4gICAgICAgIG5ld1dpZHRoLFxuICAgICAgICBpbWFnZVR5cGUsXG4gICAgICAgIGltYWdlUXVhbGl0eVxuICAgICAgfSxcbiAgICAgIGltYWdlLFxuICAgICAgb2xkV2lkdGgsXG4gICAgICBvbGRIZWlnaHQsXG4gICAgICBuZXdIZWlnaHQsXG4gICAgICBjYW52YXMsXG4gICAgICBjdHgsXG4gICAgICBuZXdEYXRhVXJsXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIG5ld0RhdGFVcmw7XG59XG4iXX0=
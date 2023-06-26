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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWxlLWZpcmViYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9TaGl2YW5nL1BpIFNvZnR3YXJlL2ZpbGUtbWFuYWdlci9uZ3gtZmlsZW1hbmFnZXIvcHJvamVjdHMvbmd4LWZpbGVtYW5hZ2VyLWNsaWVudC1maXJlYmFzZS9zcmMvIiwic291cmNlcyI6WyJsaWIvdWkvZmlsZS11cGxvYWQvZm9ybS1maWxlLWZpcmViYXNlL2Zvcm0tZmlsZS1maXJlYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFHVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxLQUFLLFFBQVEsTUFBTSxjQUFjLENBQUM7QUFDekMsT0FBTyxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0ZsRixNQUFNLE9BQU8seUJBQTBCLFNBQVEsUUFBK0I7Ozs7SUFhNUUsWUFBbUIsRUFBdUI7UUFDeEMsS0FBSyxFQUFFLENBQUM7UUFEUyxPQUFFLEdBQUYsRUFBRSxDQUFxQjtRQVgxQyxtQkFDYyxhQUFhLENBQUM7c0JBRUssRUFBUzs7bUNBR3BCLElBQUksWUFBWSxFQUFXO1FBRWpELGlCQUFZLElBQUksT0FBTyxFQUFFLENBQUM7S0FLekI7Ozs7SUFFRCxRQUFRO1FBQ04scUJBQUksR0FBRyxDQUFDO1FBQ1IsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO2FBQU07WUFDTCxHQUFHLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNsRTtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO2FBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0IsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQy9CLENBQUMsQ0FBQztLQUNOOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDdkI7Ozs7SUFFRCxzQkFBc0I7UUFDcEIsdUJBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDNUIsdUJBQU0sYUFBYSxHQUFHLFFBQVE7YUFDM0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDNUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFckMsdUJBQU0sb0JBQW9CLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FDL0MsQ0FBQyxRQUFRLEVBQUUsZUFBZSxFQUFFLEVBQUUsQ0FBQyxRQUFRLElBQUksZUFBZSxFQUMxRCxJQUFJLENBQ0wsQ0FBQztRQUNGLHVCQUFNLGdCQUFnQixHQUFHLENBQUMsb0JBQW9CLENBQUM7UUFDL0MsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0tBQ2pEOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQztLQUNsRDs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sQ0FDTCxJQUFJLENBQUMsTUFBTTtZQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUNwQixJQUFJLENBQUMsS0FBSztZQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUMzQyxDQUFDO0tBQ0g7Ozs7SUFFTyxpQkFBaUI7UUFDdkIsT0FBTyxDQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVTs7WUFFdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQzVDLENBQUM7Ozs7OztJQUdFLGNBQWMsQ0FBQyxVQUErQjs7WUFDbEQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzVELElBQUksVUFBVSxDQUFDLFdBQVcsRUFBRTtnQkFDMUIsSUFBSTtvQkFDRixNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3REFBd0QsRUFBRTt3QkFDcEUsVUFBVTtxQkFDWCxDQUFDLENBQUM7aUJBQ0o7Z0JBQUMsd0JBQU8sS0FBSyxFQUFFO29CQUNkLE9BQU8sQ0FBQyxHQUFHLENBQ1Qsb0RBQW9ELEVBQ3BELEtBQUssQ0FDTixDQUFDO2lCQUNIO2FBQ0Y7O0tBQ0Y7Ozs7O0lBRUQsWUFBWSxDQUFDLEtBQUs7UUFDaEIsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDbkQsdUJBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3JDLHVCQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3hDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUMzRDtLQUNGOzs7OztJQUVLLGVBQWUsQ0FBQyxJQUFVOztZQUM5Qix1QkFBTSxVQUFVLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3RELHVCQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2pDLHVCQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDbkMsdUJBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ2xDLHVCQUFNLE9BQU8sR0FBRyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNqRSx1QkFBTSxRQUFRLEdBQUcsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksY0FBYyxFQUFFLENBQUM7WUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDM0UscUJBQUksVUFBVSxDQUFDO1lBQ2YsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtnQkFDM0IsVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2hEO2lCQUFNO2dCQUNMLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDbkI7WUFDRCxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQy9ELHVCQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDckUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFO2dCQUM5RCxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUM7Z0JBQ3pDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNuQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixDQUFDO2FBQzlELENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQzFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNyQixDQUFDLENBQUM7O0tBQ0o7Ozs7O0lBRUssZ0JBQWdCLENBQUMsSUFBSTs7WUFDekIsSUFDRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCO2dCQUNwQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEVBQ3BDO2dCQUNBLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCx1QkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsSUFBSSxJQUFJLENBQUM7WUFDN0QsdUJBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLElBQUksR0FBRyxDQUFDO1lBQzlELHVCQUFNLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQyx1QkFBTSxVQUFVLEdBQUcsTUFBTSxjQUFjLENBQ3JDLE9BQU8sRUFDUCxRQUFRLEVBQ1IsVUFBVSxFQUNWLFlBQVksQ0FDYixDQUFDO1lBQ0YsdUJBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqRCx1QkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3BELHVCQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFTLENBQUM7WUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUNKLEtBQUs7WUFDTCxLQUFLLEtBQUssQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sT0FBTyxDQUFDOztLQUNoQjs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxPQUFPO1FBQzFCLHVCQUFNLElBQUksR0FBRyxzQkFBc0IsQ0FBQztRQUNwQyx1QkFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0UsdUJBQU0saUJBQWlCLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELE9BQU8saUJBQWlCLENBQUM7S0FDMUI7Ozs7OztJQUVLLE1BQU0sQ0FDVixRQUFxRCxFQUNyRCxRQUFnQjs7WUFFaEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsUUFBUSxRQUFRLENBQUMsS0FBSyxFQUFFO2dCQUN0QixLQUFLLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsZUFBZTs7b0JBQzlELHVCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEtBQUssUUFBUSxDQUFDLENBQUM7b0JBQzlELHVCQUFNLFFBQVEsR0FDWixDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxDQUFDO29CQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFO3dCQUMvQixJQUFJO3dCQUNKLFFBQVE7d0JBQ1IsUUFBUTt3QkFDUixRQUFRO3FCQUNULENBQUMsQ0FBQztvQkFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO29CQUNyQyxNQUFNO2FBQ1Q7O0tBQ0Y7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQUs7UUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQzFELE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNuRDs7Ozs7OztJQUVLLFVBQVUsQ0FBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLGdCQUFnQjs7WUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDaEMsdUJBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLHVCQUFNLEdBQUcsR0FBRyxNQUFNLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2Qyx1QkFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFOUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsdUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxjQUFjLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQztZQUNkLElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO2FBQ3JCO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7S0FDN0I7Ozs7Ozs7SUFFRCxPQUFPLENBQUMsY0FBc0IsRUFBRSxnQkFBd0IsRUFBRSxRQUFnQjtRQUN4RSx1QkFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDL0MsdUJBQU0sT0FBTyxHQUF3QjtZQUNuQyxFQUFFLEVBQUUsY0FBYztZQUNsQixRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsSUFBSTtZQUNkLFdBQVcsRUFBRSxRQUFRO1lBQ3JCLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixLQUFLLEVBQUU7b0JBQ0wsS0FBSyxFQUFFLElBQUk7b0JBQ1gsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFFBQVEsRUFBRSxDQUFDO29CQUNYLFNBQVMsRUFBRSxLQUFLO2lCQUNqQjthQUNGO1NBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzFCOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3JCO0tBQ0Y7OztZQXhTRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQStCVDtnQkF1QkQsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMseUJBQXlCLENBQUM7d0JBQ3hELEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxhQUFhO3dCQUN0QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUN4RCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjt5QkFoQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FtQkM7YUFjSjs7OztZQWpGUSxtQkFBbUI7OzswQkFvRnpCLEtBQUs7cUJBRUwsS0FBSztrQ0FHTCxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStOVCxTQUFlLGFBQWEsQ0FBQyxJQUFJOztRQUMvQix1QkFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUNoQyxPQUFPLElBQUksT0FBTyxDQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzdDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFNO2dCQUM5QixPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFnQixDQUFDLENBQUM7YUFDcEMsQ0FBQztZQUNGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxLQUFVO2dCQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDZixDQUFDO1lBQ0YsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QixDQUFDLENBQUM7O0NBQ0o7Ozs7O0FBR0QsTUFBTSxVQUFVLGFBQWEsQ0FBQyxPQUFPOzs7SUFHbkMsdUJBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBRy9DLHVCQUFNLFVBQVUsR0FBRyxPQUFPO1NBQ3ZCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDYixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUdqQix1QkFBTSxFQUFFLEdBQUcsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztJQUc5Qyx1QkFBTSxFQUFFLEdBQUcsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7O0lBRzlCLEtBQUsscUJBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMxQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNsQzs7SUFHRCx1QkFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELE9BQU8sSUFBSSxDQUFDO0NBQ2I7Ozs7Ozs7OztBQUdELFNBQWUsY0FBYyxDQUMzQixPQUFlLEVBQ2YsUUFBZ0IsRUFDaEIsWUFBb0IsRUFDcEIsU0FBaUIsRUFDakIsS0FBZTs7O1FBR2YsU0FBUyxHQUFHLFNBQVMsSUFBSSxZQUFZLENBQUM7UUFDdEMsWUFBWSxHQUFHLFlBQVksSUFBSSxHQUFHLENBQUM7O1FBR25DLHVCQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzFCLEtBQUssQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQ3BCLE1BQU0sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDMUIsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7Z0JBQ2xCLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNiLENBQUM7U0FDSCxDQUFDLENBQUM7UUFDSCx1QkFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUM3Qix1QkFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMvQix1QkFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQzs7UUFHaEUsdUJBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDeEIsTUFBTSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7O1FBRzFCLHVCQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELHVCQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUM3RCxJQUFJLEtBQUssRUFBRTtZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsNkNBQTZDLEVBQUU7Z0JBQ3pELElBQUksRUFBRTtvQkFDSixPQUFPO29CQUNQLFFBQVE7b0JBQ1IsU0FBUztvQkFDVCxZQUFZO2lCQUNiO2dCQUNELEtBQUs7Z0JBQ0wsUUFBUTtnQkFDUixTQUFTO2dCQUNULFNBQVM7Z0JBQ1QsTUFBTTtnQkFDTixHQUFHO2dCQUNILFVBQVU7YUFDWCxDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sVUFBVSxDQUFDOztDQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgZm9yd2FyZFJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBOR19WQUxJREFUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9ybUFycmF5RmlsZU9iamVjdCB9IGZyb20gJy4vRm9ybUFycmF5RmlsZU9iamVjdCc7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcbmltcG9ydCB7IFN1YmplY3QsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBnZXRGaWxlSWNvbiwgaXNGaWxlSW1hZ2UgfSBmcm9tICcuL2ZpbGUtaWNvbi5oZWxwZXInO1xuaW1wb3J0IHsgRm9ybUJhc2UgfSBmcm9tICcuL2Zvcm0tYmFzZS1jbGFzcyc7XG5pbXBvcnQgeyBUcmltU2xhc2hlcyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3BhdGgtaGVscGVycyc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcHVyZS9ub3RpZmljYXRpb24uc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybUZpbGVzQ29uZmlndXJhdGlvbiB7XG4gIGRpcmVjdG9yeTogc3RyaW5nO1xuICBidWNrZXRuYW1lPzogc3RyaW5nO1xuICBmaXJlYmFzZUNvbmZpZzoge307XG4gIG1heEZpbGVzPzogbnVtYmVyO1xuICBpbWFnZUNvbXByZXNzaW9uUXVhbGl0eT86IG51bWJlcjtcbiAgaW1hZ2VDb21wcmVzc2lvbk1heFNpemU/OiBudW1iZXI7XG4gIGFjY2VwdGVkRmlsZXM/OiAnaW1hZ2UvKixhcHBsaWNhdGlvbi8qJyB8ICdpbWFnZS8qJztcbn1cblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZm9ybS1maWxlLWZpcmViYXNlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWZpbGUtdXBsb2FkXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICpuZ0lmPVwiaXNNdWx0aXBsZVwiXG4gICAgICAgICAgY2xhc3M9XCJoaWRkZW5cIlxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZCB8fCBtYXhSZWFjaGVkXCJcbiAgICAgICAgICAoY2hhbmdlKT1cIm9uRmlsZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgKm5nSWY9XCIhaXNNdWx0aXBsZVwiXG4gICAgICAgICAgY2xhc3M9XCJoaWRkZW5cIlxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgbWF4UmVhY2hlZFwiXG4gICAgICAgICAgKGNoYW5nZSk9XCJvbkZpbGVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIC8+XG4gICAgICAgIHt7IHBsYWNlaG9sZGVyIH19XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYXgtZmlsZXNcIiAqbmdJZj1cIm1heFJlYWNoZWQgJiYgIWRpc2FibGVkXCI+XG4gICAgICAgICAgTWF4IFVwbG9hZGVkIC0gTGltaXQgb2Yge3sgY29uZmlnLm1heEZpbGVzIH19IGZpbGUocykgcmVhY2hlZC4gUmVtb3ZlXG4gICAgICAgICAgZmlsZXMgdG8gY2hhbmdlIHVwbG9hZHNcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGFwcC11cGxvYWRlZC1maWxlcy1saXN0XG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFt1cGxvYWRlZEZpbGVzXT1cInRoaXMudmFsdWVcIlxuICAgICAgICAoY2xpY2tSZW1vdmVUYWcpPVwidGhpcy5jbGlja1JlbW92ZVRhZygkZXZlbnQpXCJcbiAgICAgID5cbiAgICAgIDwvYXBwLXVwbG9hZGVkLWZpbGVzLWxpc3Q+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5jdXN0b20tZmlsZS11cGxvYWQge1xuICAgICAgICBib3JkZXI6IDRweCBkYXNoZWQgI2NjYztcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAzNXB4IDBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gOHB4KTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICBjb2xvcjogIzc3NztcbiAgICAgIH1cbiAgICAgIC5oaWRkZW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgLm1heC1maWxlcyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIH1cbiAgICBgXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRm9ybUZpbGVGaXJlYmFzZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEZvcm1GaWxlRmlyZWJhc2VDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpbGVGaXJlYmFzZUNvbXBvbmVudCBleHRlbmRzIEZvcm1CYXNlPEZvcm1BcnJheUZpbGVPYmplY3RbXT5cbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpXG4gIHBsYWNlaG9sZGVyID0gJ3VwbG9hZCBoZXJlJztcbiAgQElucHV0KClcbiAgY29uZmlnOiBGb3JtRmlsZXNDb25maWd1cmF0aW9uID0ge30gYXMgYW55O1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgpXG4gIHVwbG9hZFN0YXR1c0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgZGVzdHJveWVkID0gbmV3IFN1YmplY3QoKTtcbiAgc3RvcmFnZTogZmlyZWJhc2UuZGVmYXVsdC5zdG9yYWdlLlN0b3JhZ2U7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5zOiBOb3RpZmljYXRpb25TZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBhcHA7XG4gICAgaWYgKGZpcmViYXNlLmRlZmF1bHQuYXBwcy5sZW5ndGgpIHtcbiAgICAgIGFwcCA9IGZpcmViYXNlLmRlZmF1bHQuYXBwc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBwID0gZmlyZWJhc2UuZGVmYXVsdC5pbml0aWFsaXplQXBwKHRoaXMuY29uZmlnLmZpcmViYXNlQ29uZmlnKTtcbiAgICB9XG4gICAgdGhpcy5zdG9yYWdlID0gYXBwLnN0b3JhZ2UodGhpcy5jdXJyZW50QnVja2V0TmFtZSgpKTtcbiAgICB0aW1lcigwLCAxMDAwKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNoZWNrQWxsVXBsb2Fkc0FyZURvbmUoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95ZWQubmV4dCgpO1xuICB9XG5cbiAgY2hlY2tBbGxVcGxvYWRzQXJlRG9uZSgpIHtcbiAgICBjb25zdCBhbGxGaWxlcyA9IHRoaXMudmFsdWU7XG4gICAgY29uc3QgY29tcGxldGVBcnJheSA9IGFsbEZpbGVzXG4gICAgICAuZmlsdGVyKGYgPT4gISFmKVxuICAgICAgLmZpbHRlcihmID0+ICEhZi52YWx1ZSlcbiAgICAgIC5maWx0ZXIoZiA9PiAhIWYudmFsdWUucHJvcHMpXG4gICAgICAubWFwKGYgPT4gZi52YWx1ZS5wcm9wcy5jb21wbGV0ZWQpO1xuXG4gICAgY29uc3QgaGF2ZUFsbEZpbGVzQ29tcGxldGUgPSBjb21wbGV0ZUFycmF5LnJlZHVjZShcbiAgICAgIChwcmV2aW91cywgY3VycmVudENvbXBsZXRlKSA9PiBwcmV2aW91cyAmJiBjdXJyZW50Q29tcGxldGUsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICBjb25zdCBpc1N0aWxsVXBsb2FkaW5nID0gIWhhdmVBbGxGaWxlc0NvbXBsZXRlO1xuICAgIHRoaXMudXBsb2FkU3RhdHVzQ2hhbmdlZC5lbWl0KGlzU3RpbGxVcGxvYWRpbmcpO1xuICB9XG5cbiAgZ2V0IGlzTXVsdGlwbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLm1heEZpbGVzICE9PSAxO1xuICB9XG5cbiAgZ2V0IG1heFJlYWNoZWQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuY29uZmlnICYmXG4gICAgICB0aGlzLmNvbmZpZy5tYXhGaWxlcyAmJlxuICAgICAgdGhpcy52YWx1ZSAmJlxuICAgICAgdGhpcy5jb25maWcubWF4RmlsZXMgPT09IHRoaXMudmFsdWUubGVuZ3RoXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY3VycmVudEJ1Y2tldE5hbWUoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuY29uZmlnLmJ1Y2tldG5hbWUgfHxcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc3RyaW5nLWxpdGVyYWxcbiAgICAgIHRoaXMuY29uZmlnLmZpcmViYXNlQ29uZmlnWydzdG9yYWdlQnVja2V0J11cbiAgICApO1xuICB9XG5cbiAgYXN5bmMgY2xpY2tSZW1vdmVUYWcoZmlsZU9iamVjdDogRm9ybUFycmF5RmlsZU9iamVjdCkge1xuICAgIHRoaXMuZW5zdXJlVmFsdWVJc0FycmF5KCk7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuZmlsdGVyKGYgPT4gZi5pZCAhPT0gZmlsZU9iamVjdC5pZCk7XG4gICAgaWYgKGZpbGVPYmplY3QuYnVja2V0X3BhdGgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZS5yZWZGcm9tVVJMKGZpbGVPYmplY3QuYnVja2V0X3BhdGgpLmRlbGV0ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZygnZm9ybS1maWxlczogY2xpY2tSZW1vdmVUYWcoKSBmaWxlIGRlbGV0ZWQgZnJvbSBzdG9yYWdlJywge1xuICAgICAgICAgIGZpbGVPYmplY3RcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAnZm9ybS1maWxlczogY2xpY2tSZW1vdmVUYWcoKSBwcm9ibGVtIGRlbGV0aW5nIGZpbGUnLFxuICAgICAgICAgIGVycm9yXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25GaWxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5maWxlcyAmJiBldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBmaWxlc0xpc3QgPSBldmVudC50YXJnZXQuZmlsZXM7XG4gICAgICBjb25zdCBmaWxlQXJyYXkgPSBBcnJheS5mcm9tKGZpbGVzTGlzdCk7XG4gICAgICBmaWxlQXJyYXkubWFwKChmaWxlOiBGaWxlKSA9PiB0aGlzLmJlZ2luVXBsb2FkVGFzayhmaWxlKSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgYmVnaW5VcGxvYWRUYXNrKGZpbGU6IEZpbGUpIHtcbiAgICBjb25zdCBidWNrZXRQYXRoID0gJ2dzOi8vJyArIHRoaXMuY3VycmVudEJ1Y2tldE5hbWUoKTtcbiAgICBjb25zdCB1bmlxdWVGaWxlTmFtZSA9IGZpbGUubmFtZTtcbiAgICBjb25zdCBvcmlnaW5hbEZpbGVOYW1lID0gZmlsZS5uYW1lO1xuICAgIGNvbnN0IGRpciA9IHRoaXMuY29uZmlnLmRpcmVjdG9yeTtcbiAgICBjb25zdCBkaXJQYXRoID0gYCR7VHJpbVNsYXNoZXMoYnVja2V0UGF0aCl9LyR7VHJpbVNsYXNoZXMoZGlyKX1gO1xuICAgIGNvbnN0IGZ1bGxQYXRoID0gYCR7VHJpbVNsYXNoZXMoZGlyUGF0aCl9LyR7dW5pcXVlRmlsZU5hbWV9YDtcbiAgICBjb25zb2xlLmxvZygnYmVnaW5VcGxvYWRUYXNrKCknLCB7IGZpbGVEYXRhOiBmaWxlLCBidWNrZXRQYXRoLCBmdWxsUGF0aCB9KTtcbiAgICBsZXQgZmlsZVBhcnNlZDtcbiAgICBpZiAoZmlsZS50eXBlID09PSAnaW1hZ2UvKicpIHtcbiAgICAgIGZpbGVQYXJzZWQgPSBhd2FpdCB0aGlzLnBhcnNlQW5kQ29tcHJlc3MoZmlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbGVQYXJzZWQgPSBmaWxlO1xuICAgIH1cbiAgICBhd2FpdCB0aGlzLmFkZEZpbGUodW5pcXVlRmlsZU5hbWUsIG9yaWdpbmFsRmlsZU5hbWUsIGZ1bGxQYXRoKTtcbiAgICBjb25zdCB1cGxvYWRUYXNrID0gdGhpcy5zdG9yYWdlLnJlZkZyb21VUkwoZnVsbFBhdGgpLnB1dChmaWxlUGFyc2VkKTtcbiAgICB1cGxvYWRUYXNrLm9uKGZpcmViYXNlLmRlZmF1bHQuc3RvcmFnZS5UYXNrRXZlbnQuU1RBVEVfQ0hBTkdFRCwge1xuICAgICAgbmV4dDogc25hcCA9PiB0aGlzLm9uTmV4dChzbmFwLCBmdWxsUGF0aCksXG4gICAgICBlcnJvcjogZXJyb3IgPT4gdGhpcy5vbkVycm9yKGVycm9yKSxcbiAgICAgIGNvbXBsZXRlOiAoKSA9PlxuICAgICAgICB0aGlzLm9uQ29tcGxldGUoZnVsbFBhdGgsIHVuaXF1ZUZpbGVOYW1lLCBvcmlnaW5hbEZpbGVOYW1lKVxuICAgIH0pO1xuXG4gICAgdGhpcy5kZXN0cm95ZWQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdXBsb2FkVGFzay5jYW5jZWwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHBhcnNlQW5kQ29tcHJlc3MoZmlsZSkge1xuICAgIGlmIChcbiAgICAgICF0aGlzLmNvbmZpZy5pbWFnZUNvbXByZXNzaW9uTWF4U2l6ZSAmJlxuICAgICAgIXRoaXMuY29uZmlnLmltYWdlQ29tcHJlc3Npb25RdWFsaXR5XG4gICAgKSB7XG4gICAgICByZXR1cm4gZmlsZTtcbiAgICB9XG4gICAgY29uc3QgbWF4V2lkdGggPSB0aGlzLmNvbmZpZy5pbWFnZUNvbXByZXNzaW9uTWF4U2l6ZSB8fCAxODAwO1xuICAgIGNvbnN0IG1heFF1YWxpdHkgPSB0aGlzLmNvbmZpZy5pbWFnZUNvbXByZXNzaW9uUXVhbGl0eSB8fCAwLjY7XG4gICAgY29uc3QgZGF0YVVSTCA9IGF3YWl0IGJsb2JUb0RhdGFVUkwoZmlsZSk7XG4gICAgY29uc3QgbmV3RGF0YVVSTCA9IGF3YWl0IGRvd25zY2FsZUltYWdlKFxuICAgICAgZGF0YVVSTCxcbiAgICAgIG1heFdpZHRoLFxuICAgICAgbWF4UXVhbGl0eSxcbiAgICAgICdpbWFnZS9qcGVnJ1xuICAgICk7XG4gICAgY29uc3Qgb2xkS2IgPSB0aGlzLmdldEZpbGVTaXplS2lsb0J5dGVzKGRhdGFVUkwpO1xuICAgIGNvbnN0IG5ld0tiID0gdGhpcy5nZXRGaWxlU2l6ZUtpbG9CeXRlcyhuZXdEYXRhVVJMKTtcbiAgICBjb25zdCBmaWxlTmV3ID0gZGF0YVVSSXRvQmxvYihuZXdEYXRhVVJMKSBhcyBGaWxlO1xuICAgIGNvbnNvbGUubG9nKGBhcHAtdGFncy1maWxlcy5jb21wb25lbnQ6IG9wdGltaXplZCBpbWFnZS4uLlxuICAtLT4gb2xkPSR7b2xkS2J9IGtiXG4gIC0tPiBuZXc9JHtuZXdLYn0ga2JgKTtcbiAgICByZXR1cm4gZmlsZU5ldztcbiAgfVxuXG4gIGdldEZpbGVTaXplS2lsb0J5dGVzKGRhdGFVUkwpIHtcbiAgICBjb25zdCBoZWFkID0gJ2RhdGE6aW1hZ2UvKjtiYXNlNjQsJztcbiAgICBjb25zdCBmaWxlU2l6ZUJ5dGVzID0gTWF0aC5yb3VuZCgoKGRhdGFVUkwubGVuZ3RoIC0gaGVhZC5sZW5ndGgpICogMykgLyA0KTtcbiAgICBjb25zdCBmaWxlU2l6ZUtpbG9CeXRlcyA9IChmaWxlU2l6ZUJ5dGVzIC8gMTAyNCkudG9GaXhlZCgwKTtcbiAgICByZXR1cm4gZmlsZVNpemVLaWxvQnl0ZXM7XG4gIH1cblxuICBhc3luYyBvbk5leHQoXG4gICAgc25hcHNob3Q6IGZpcmViYXNlLmRlZmF1bHQuc3RvcmFnZS5VcGxvYWRUYXNrU25hcHNob3QsXG4gICAgZnVsbFBhdGg6IHN0cmluZ1xuICApIHtcbiAgICB0aGlzLmVuc3VyZVZhbHVlSXNBcnJheSgpO1xuICAgIHN3aXRjaCAoc25hcHNob3Quc3RhdGUpIHtcbiAgICAgIGNhc2UgZmlyZWJhc2UuZGVmYXVsdC5zdG9yYWdlLlRhc2tTdGF0ZS5SVU5OSU5HOiAvLyBvciAncnVubmluZydcbiAgICAgICAgY29uc3QgZmlsZSA9IHRoaXMudmFsdWUuZmluZChmID0+IGYuYnVja2V0X3BhdGggPT09IGZ1bGxQYXRoKTtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPVxuICAgICAgICAgIChzbmFwc2hvdC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcHNob3QudG90YWxCeXRlcykgKiAxMDA7XG4gICAgICAgIGNvbnNvbGUubG9nKCdVcGxvYWQgaXMgcnVubmluZycsIHtcbiAgICAgICAgICBmaWxlLFxuICAgICAgICAgIGZ1bGxQYXRoLFxuICAgICAgICAgIHByb2dyZXNzLFxuICAgICAgICAgIHNuYXBzaG90XG4gICAgICAgIH0pO1xuICAgICAgICBmaWxlLnZhbHVlLnByb3BzLnByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIG9uRXJyb3IoZXJyb3IpIHtcbiAgICB0aGlzLm5zLm5vdGlmeSgnc3RvcmFnZS91bmF1dGhvcml6ZWQnLCAnRXJyb3IgVXBsb2FkaW5nJyk7XG4gICAgY29uc29sZS5lcnJvcignb25FcnJvcihlcnJvciknLCB7IGVycm9yIH0sIGVycm9yKTtcbiAgfVxuXG4gIGFzeW5jIG9uQ29tcGxldGUoZnVsbFBhdGgsIHVuaXF1ZUZpbGVOYW1lLCBvcmlnaW5hbEZpbGVOYW1lKSB7XG4gICAgY29uc29sZS5sb2coJ29uQ29tcGxldGUoKScsIHt9KTtcbiAgICBjb25zdCByZWYgPSB0aGlzLnN0b3JhZ2UucmVmRnJvbVVSTChmdWxsUGF0aCk7XG4gICAgY29uc3QgdXJsID0gYXdhaXQgcmVmLmdldERvd25sb2FkVVJMKCk7XG4gICAgY29uc3QgaXNJbWFnZSA9IGlzRmlsZUltYWdlKG9yaWdpbmFsRmlsZU5hbWUpO1xuXG4gICAgdGhpcy5lbnN1cmVWYWx1ZUlzQXJyYXkoKTtcbiAgICBjb25zdCBmaWxlID0gdGhpcy52YWx1ZS5maW5kKGYgPT4gZi5pZCA9PT0gdW5pcXVlRmlsZU5hbWUpO1xuICAgIGZpbGUuaWQgPSB1cmw7XG4gICAgaWYgKGlzSW1hZ2UpIHtcbiAgICAgIGZpbGUuaW1hZ2V1cmwgPSB1cmw7XG4gICAgfVxuICAgIGZpbGUudmFsdWUucHJvcHMuY29tcGxldGVkID0gdHJ1ZTtcbiAgICB0aGlzLndyaXRlVmFsdWUodGhpcy52YWx1ZSk7XG4gIH1cblxuICBhZGRGaWxlKHVuaXF1ZUZpbGVOYW1lOiBzdHJpbmcsIG9yaWdpbmFsRmlsZU5hbWU6IHN0cmluZywgZnVsbFBhdGg6IHN0cmluZykge1xuICAgIGNvbnN0IGZpbGVJY29uID0gZ2V0RmlsZUljb24ob3JpZ2luYWxGaWxlTmFtZSk7XG4gICAgY29uc3QgbmV3RmlsZTogRm9ybUFycmF5RmlsZU9iamVjdCA9IHtcbiAgICAgIGlkOiB1bmlxdWVGaWxlTmFtZSxcbiAgICAgIGZpbGVpY29uOiBmaWxlSWNvbixcbiAgICAgIGltYWdldXJsOiBudWxsLFxuICAgICAgYnVja2V0X3BhdGg6IGZ1bGxQYXRoLFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgbmFtZTogb3JpZ2luYWxGaWxlTmFtZSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICB0aHVtYjogbnVsbCxcbiAgICAgICAgICBmaWxlaWNvbjogZmlsZUljb24sXG4gICAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmVuc3VyZVZhbHVlSXNBcnJheSgpO1xuICAgIHRoaXMudmFsdWUucHVzaChuZXdGaWxlKTtcbiAgfVxuXG4gIGVuc3VyZVZhbHVlSXNBcnJheSgpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgIHRoaXMud3JpdGVWYWx1ZShbXSk7XG4gICAgfVxuICB9XG59XG5cbi8vICoqYmxvYiB0byBkYXRhVVJMKipcbmFzeW5jIGZ1bmN0aW9uIGJsb2JUb0RhdGFVUkwoYmxvYik6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGU6IGFueSkge1xuICAgICAgcmVzb2x2ZShlLnRhcmdldC5yZXN1bHQgYXMgc3RyaW5nKTtcbiAgICB9O1xuICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yOiBhbnkpIHtcbiAgICAgIHJlamVjdChlcnJvcik7XG4gICAgfTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgfSk7XG59XG5cbi8vIERhdGF1cmwgdG8gYmxvYlxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFVUkl0b0Jsb2IoZGF0YVVSSSkge1xuICAvLyBjb252ZXJ0IGJhc2U2NCB0byByYXcgYmluYXJ5IGRhdGEgaGVsZCBpbiBhIHN0cmluZ1xuICAvLyBkb2Vzbid0IGhhbmRsZSBVUkxFbmNvZGVkIERhdGFVUklzIC0gc2VlIFNPIGFuc3dlciAjNjg1MDI3NiBmb3IgY29kZSB0aGF0IGRvZXMgdGhpc1xuICBjb25zdCBieXRlU3RyaW5nID0gYXRvYihkYXRhVVJJLnNwbGl0KCcsJylbMV0pO1xuXG4gIC8vIHNlcGFyYXRlIG91dCB0aGUgbWltZSBjb21wb25lbnRcbiAgY29uc3QgbWltZVN0cmluZyA9IGRhdGFVUklcbiAgICAuc3BsaXQoJywnKVswXVxuICAgIC5zcGxpdCgnOicpWzFdXG4gICAgLnNwbGl0KCc7JylbMF07XG5cbiAgLy8gd3JpdGUgdGhlIGJ5dGVzIG9mIHRoZSBzdHJpbmcgdG8gYW4gQXJyYXlCdWZmZXJcbiAgY29uc3QgYWIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZVN0cmluZy5sZW5ndGgpO1xuXG4gIC8vIGNyZWF0ZSBhIHZpZXcgaW50byB0aGUgYnVmZmVyXG4gIGNvbnN0IGlhID0gbmV3IFVpbnQ4QXJyYXkoYWIpO1xuXG4gIC8vIHNldCB0aGUgYnl0ZXMgb2YgdGhlIGJ1ZmZlciB0byB0aGUgY29ycmVjdCB2YWx1ZXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBieXRlU3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgaWFbaV0gPSBieXRlU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gIH1cblxuICAvLyB3cml0ZSB0aGUgQXJyYXlCdWZmZXIgdG8gYSBibG9iLCBhbmQgeW91J3JlIGRvbmVcbiAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFthYl0sIHsgdHlwZTogbWltZVN0cmluZyB9KTtcbiAgcmV0dXJuIGJsb2I7XG59XG5cbi8vIFRha2UgYW4gaW1hZ2UgVVJMLCBkb3duc2NhbGUgaXQgdG8gdGhlIGdpdmVuIHdpZHRoLCBhbmQgcmV0dXJuIGEgbmV3IGltYWdlIFVSTC5cbmFzeW5jIGZ1bmN0aW9uIGRvd25zY2FsZUltYWdlKFxuICBkYXRhVXJsOiBzdHJpbmcsXG4gIG5ld1dpZHRoOiBudW1iZXIsXG4gIGltYWdlUXVhbGl0eTogbnVtYmVyLFxuICBpbWFnZVR5cGU6IHN0cmluZyxcbiAgZGVidWc/OiBib29sZWFuXG4pIHtcbiAgLy8gUHJvdmlkZSBkZWZhdWx0IHZhbHVlc1xuICBpbWFnZVR5cGUgPSBpbWFnZVR5cGUgfHwgJ2ltYWdlL2pwZWcnO1xuICBpbWFnZVF1YWxpdHkgPSBpbWFnZVF1YWxpdHkgfHwgMC43O1xuXG4gIC8vIENyZWF0ZSBhIHRlbXBvcmFyeSBpbWFnZSBzbyB0aGF0IHdlIGNhbiBjb21wdXRlIHRoZSBoZWlnaHQgb2YgdGhlIGRvd25zY2FsZWQgaW1hZ2UuXG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gIGltYWdlLnNyYyA9IGRhdGFVcmw7XG4gIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoJycpO1xuICAgIH07XG4gIH0pO1xuICBjb25zdCBvbGRXaWR0aCA9IGltYWdlLndpZHRoO1xuICBjb25zdCBvbGRIZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XG4gIGNvbnN0IG5ld0hlaWdodCA9IE1hdGguZmxvb3IoKG9sZEhlaWdodCAvIG9sZFdpZHRoKSAqIG5ld1dpZHRoKTtcblxuICAvLyBDcmVhdGUgYSB0ZW1wb3JhcnkgY2FudmFzIHRvIGRyYXcgdGhlIGRvd25zY2FsZWQgaW1hZ2Ugb24uXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjYW52YXMud2lkdGggPSBuZXdXaWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IG5ld0hlaWdodDtcblxuICAvLyBEcmF3IHRoZSBkb3duc2NhbGVkIGltYWdlIG9uIHRoZSBjYW52YXMgYW5kIHJldHVybiB0aGUgbmV3IGRhdGEgVVJMLlxuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgbmV3V2lkdGgsIG5ld0hlaWdodCk7XG4gIGNvbnN0IG5ld0RhdGFVcmwgPSBjYW52YXMudG9EYXRhVVJMKGltYWdlVHlwZSwgaW1hZ2VRdWFsaXR5KTtcbiAgaWYgKGRlYnVnKSB7XG4gICAgY29uc29sZS5sb2coJ3F1aWxsLmltYWdlQ29tcHJlc3NvcjogZG93bnNjYWxpbmcgaW1hZ2UuLi4nLCB7XG4gICAgICBhcmdzOiB7XG4gICAgICAgIGRhdGFVcmwsXG4gICAgICAgIG5ld1dpZHRoLFxuICAgICAgICBpbWFnZVR5cGUsXG4gICAgICAgIGltYWdlUXVhbGl0eVxuICAgICAgfSxcbiAgICAgIGltYWdlLFxuICAgICAgb2xkV2lkdGgsXG4gICAgICBvbGRIZWlnaHQsXG4gICAgICBuZXdIZWlnaHQsXG4gICAgICBjYW52YXMsXG4gICAgICBjdHgsXG4gICAgICBuZXdEYXRhVXJsXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIG5ld0RhdGFVcmw7XG59XG4iXX0=
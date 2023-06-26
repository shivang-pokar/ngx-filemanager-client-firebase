import { OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { FormArrayFileObject } from './FormArrayFileObject';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { Subject } from 'rxjs';
import { FormBase } from './form-base-class';
import { NotificationService } from '../../../services/pure/notification.service';
export interface FormFilesConfiguration {
    directory: string;
    bucketname?: string;
    firebaseConfig: {};
    maxFiles?: number;
    imageCompressionQuality?: number;
    imageCompressionMaxSize?: number;
    acceptedFiles?: 'image/*,application/*' | 'image/*';
}
export declare class FormFileFirebaseComponent extends FormBase<FormArrayFileObject[]> implements OnInit, OnDestroy {
    ns: NotificationService;
    placeholder: string;
    config: FormFilesConfiguration;
    uploadStatusChanged: EventEmitter<boolean>;
    destroyed: Subject<unknown>;
    storage: firebase.storage.Storage;
    constructor(ns: NotificationService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    checkAllUploadsAreDone(): void;
    get isMultiple(): boolean;
    get maxReached(): boolean;
    private currentBucketName;
    clickRemoveTag(fileObject: FormArrayFileObject): Promise<void>;
    onFileChange(event: any): void;
    beginUploadTask(file: File): Promise<void>;
    parseAndCompress(file: any): Promise<any>;
    getFileSizeKiloBytes(dataURL: any): string;
    onNext(snapshot: firebase.storage.UploadTaskSnapshot, fullPath: string): Promise<void>;
    onError(error: any): void;
    onComplete(fullPath: any, uniqueFileName: any, originalFileName: any): Promise<void>;
    addFile(uniqueFileName: string, originalFileName: string, fullPath: string): void;
    ensureValueIsArray(): void;
}
export declare function dataURItoBlob(dataURI: any): Blob;

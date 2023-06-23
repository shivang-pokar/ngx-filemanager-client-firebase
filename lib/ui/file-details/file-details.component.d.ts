import { EventEmitter } from '@angular/core';
import { FileSystemProvider, CoreTypes } from '../../../core-types';
import { LoggerService } from '../../services/logging/logger.service';
import { FileManagerConfig } from '../../configuration/client-configuration';
import { FileDetailActionDefinition } from './FileDetailActionDefinition';
export declare class FileDetailsComponent {
    private logger;
    imageUrl: string;
    _file: CoreTypes.ResFile;
    set file(newFile: CoreTypes.ResFile);
    get file(): CoreTypes.ResFile;
    fileSystem: FileSystemProvider;
    config: FileManagerConfig;
    actions: FileDetailActionDefinition[];
    clickedDownload: EventEmitter<CoreTypes.ResFile>;
    others: string;
    writers: CoreTypes.FilePermissionEntity[];
    readers: CoreTypes.FilePermissionEntity[];
    isFile: boolean;
    isImage: boolean;
    constructor(logger: LoggerService);
    getFileType(fileName: string): string;
    get hasInput(): boolean;
    setImageUrl(): Promise<void>;
    setPermissions(): void;
    getFolderSize(folder: CoreTypes.ResFile): any;
}

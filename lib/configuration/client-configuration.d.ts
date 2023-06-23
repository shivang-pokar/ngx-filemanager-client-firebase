import { Observable } from 'rxjs';
export interface NameUid {
    name: string;
    uid: string;
    isDisabled?: boolean;
}
export interface FileManagerConfig {
    virtualRoot: string;
    bucketName: string;
    firebaseConfig: {};
    disableLogging?: boolean;
    initialPath?: string;
    isAdmin?: boolean;
    users?: Observable<NameUid[]>;
    groups?: Observable<NameUid[]>;
    me?: Observable<NameUid>;
    showWriters?: boolean;
    showOthers?: boolean;
    enableSearch?: boolean;
    folderSizePath?: string;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
export function ClientFileSystem() { }
function ClientFileSystem_tsickle_Closure_declarations() {
    /** @type {?} */
    ClientFileSystem.prototype.$currentFiles;
    /** @type {?} */
    ClientFileSystem.prototype.$currentPath;
    /** @type {?} */
    ClientFileSystem.prototype.$selectedFile;
    /** @type {?} */
    ClientFileSystem.prototype.OnList;
    /** @type {?} */
    ClientFileSystem.prototype.OnCreateFolder;
    /** @type {?} */
    ClientFileSystem.prototype.OnCopy;
    /** @type {?} */
    ClientFileSystem.prototype.OnMove;
    /** @type {?} */
    ClientFileSystem.prototype.OnRename;
    /** @type {?} */
    ClientFileSystem.prototype.OnEdit;
    /** @type {?} */
    ClientFileSystem.prototype.OnGetcontent;
    /** @type {?} */
    ClientFileSystem.prototype.OnSetPermissions;
    /** @type {?} */
    ClientFileSystem.prototype.OnMoveMultiple;
    /** @type {?} */
    ClientFileSystem.prototype.OnCopyMultiple;
    /** @type {?} */
    ClientFileSystem.prototype.OnSetPermissionsMultiple;
    /** @type {?} */
    ClientFileSystem.prototype.OnSetPermissionsObjectMultiple;
    /** @type {?} */
    ClientFileSystem.prototype.OnRemove;
    /** @type {?} */
    ClientFileSystem.prototype.UpdateList;
    /** @type {?} */
    ClientFileSystem.prototype.CloneProvider;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LWZpbGVzeXN0ZW0uaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL1NoaXZhbmcvUGkgU29mdHdhcmUvZmlsZS1tYW5hZ2VyL25neC1maWxlbWFuYWdlci9wcm9qZWN0cy9uZ3gtZmlsZW1hbmFnZXItY2xpZW50LWZpcmViYXNlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9wdXJlL2NsaWVudC1maWxlc3lzdGVtLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZVR5cGVzIH0gZnJvbSAnLi4vLi4vLi4vY29yZS10eXBlcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xpZW50RmlsZVN5c3RlbSB7XG4gICRjdXJyZW50RmlsZXM6IE9ic2VydmFibGU8Q29yZVR5cGVzLlJlc0ZpbGVbXT47XG4gICRjdXJyZW50UGF0aDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAkc2VsZWN0ZWRGaWxlOiBPYnNlcnZhYmxlPENvcmVUeXBlcy5SZXNGaWxlPjtcblxuICAvLyBBY3Rpb25zXG4gIE9uTGlzdChwYXRoOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuICBPbkNyZWF0ZUZvbGRlcihuZXdQYXRoOiBzdHJpbmcsIGRpc2FibGVOb0Nsb2JiZXI/OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbiAgLy8gRmlsZS9EaXJlY3RvcnkgQWN0aW9uc1xuICBPbkNvcHkoc2luZ2xlRmlsZU5hbWU6IHN0cmluZywgbmV3UGF0aDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcbiAgT25Nb3ZlKGl0ZW06IHN0cmluZywgbmV3UGF0aDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcbiAgT25SZW5hbWUoaXRlbTogc3RyaW5nLCBuZXdJdGVtUGF0aDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcbiAgT25FZGl0KGl0ZW06IHN0cmluZywgY29udGVudDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcbiAgT25HZXRjb250ZW50KGl0ZW06IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG4gIE9uU2V0UGVybWlzc2lvbnMoXG4gICAgaXRlbTogc3RyaW5nLFxuICAgIHJvbGU6IENvcmVUeXBlcy5QZXJtaXNzaW9uc1JvbGUsXG4gICAgZW50aXR5OiBDb3JlVHlwZXMuRmlsZVBlcm1pc3Npb25FbnRpdHksXG4gICAgcmVjdXJzaXZlPzogYm9vbGVhblxuICApOiBQcm9taXNlPHZvaWQ+O1xuICAvLyBGaWxlL0RpcmVjdG9yeSBCdWxrIEFjdGlvbnNcbiAgT25Nb3ZlTXVsdGlwbGUoaXRlbXM6IHN0cmluZ1tdLCBuZXdQYXRoOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuICBPbkNvcHlNdWx0aXBsZShpdGVtczogc3RyaW5nW10sIG5ld1BhdGg6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG4gIE9uU2V0UGVybWlzc2lvbnNNdWx0aXBsZShcbiAgICBpdGVtczogc3RyaW5nW10sXG4gICAgcm9sZTogQ29yZVR5cGVzLlBlcm1pc3Npb25zUm9sZSxcbiAgICBlbnRpdHk6IENvcmVUeXBlcy5GaWxlUGVybWlzc2lvbkVudGl0eSxcbiAgICByZWN1cnNpdmU/OiBib29sZWFuXG4gICk6IFByb21pc2U8dm9pZD47XG4gIE9uU2V0UGVybWlzc2lvbnNPYmplY3RNdWx0aXBsZShcbiAgICBpdGVtczogc3RyaW5nW10sXG4gICAgcGVybWlzc2lvbnNPYmo6IENvcmVUeXBlcy5GaWxlUGVybWlzc2lvbnNPYmplY3QsXG4gICAgcmVjdXJzaXZlPzogYm9vbGVhblxuICApOiBQcm9taXNlPHZvaWQ+O1xuICBPblJlbW92ZShpdGVtczogc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+O1xuICAvLyBBY3Rpb25zXG4gIFVwZGF0ZUxpc3QocmVzOiBDb3JlVHlwZXMuUmVzQm9keUxpc3QsIGRpcmVjdG9yeVBhdGg6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cbiAgQ2xvbmVQcm92aWRlcigpOiBDbGllbnRGaWxlU3lzdGVtO1xufVxuIl19
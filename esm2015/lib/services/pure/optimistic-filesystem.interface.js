/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
export function OptimisticFilesystem() { }
function OptimisticFilesystem_tsickle_Closure_declarations() {
    /** @type {?} */
    OptimisticFilesystem.prototype.HandleList;
    /** @type {?} */
    OptimisticFilesystem.prototype.HandleCreateFolder;
    /** @type {?} */
    OptimisticFilesystem.prototype.HandleCopy;
    /** @type {?} */
    OptimisticFilesystem.prototype.HandleMove;
    /** @type {?} */
    OptimisticFilesystem.prototype.HandleRename;
    /** @type {?} */
    OptimisticFilesystem.prototype.HandleEdit;
    /** @type {?} */
    OptimisticFilesystem.prototype.HandleGetcontent;
    /** @type {?} */
    OptimisticFilesystem.prototype.HandleSetPermissions;
    /** @type {?} */
    OptimisticFilesystem.prototype.HandleMoveMultiple;
    /** @type {?} */
    OptimisticFilesystem.prototype.HandleCopyMultiple;
    /** @type {?} */
    OptimisticFilesystem.prototype.HandleSetPermissionsMultiple;
    /** @type {?} */
    OptimisticFilesystem.prototype.HandleSetPermissionsObjectMultiple;
    /** @type {?} */
    OptimisticFilesystem.prototype.HandleRemove;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW1pc3RpYy1maWxlc3lzdGVtLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9TaGl2YW5nL1BpIFNvZnR3YXJlL2ZpbGUtbWFuYWdlci9uZ3gtZmlsZW1hbmFnZXIvcHJvamVjdHMvbmd4LWZpbGVtYW5hZ2VyLWNsaWVudC1maXJlYmFzZS9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcHVyZS9vcHRpbWlzdGljLWZpbGVzeXN0ZW0uaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3JlVHlwZXMgfSBmcm9tICcuLi8uLi8uLi9jb3JlLXR5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBPcHRpbWlzdGljRmlsZXN5c3RlbSB7XG4gIC8vIEFjdGlvbnNcbiAgSGFuZGxlTGlzdChwYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT47XG4gIEhhbmRsZUNyZWF0ZUZvbGRlcihuZXdQYXRoOiBzdHJpbmcsIGRpc2FibGVOb0Nsb2JiZXI/OiBib29sZWFuKTogUHJvbWlzZTxhbnk+O1xuICAvLyBGaWxlL0RpcmVjdG9yeSBBY3Rpb25zXG4gIEhhbmRsZUNvcHkoc2luZ2xlRmlsZU5hbWU6IHN0cmluZywgbmV3UGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+O1xuICBIYW5kbGVNb3ZlKGl0ZW06IHN0cmluZywgbmV3UGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+O1xuICBIYW5kbGVSZW5hbWUoaXRlbTogc3RyaW5nLCBuZXdJdGVtUGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+O1xuICBIYW5kbGVFZGl0KGl0ZW06IHN0cmluZywgY29udGVudDogc3RyaW5nKTogUHJvbWlzZTxhbnk+O1xuICBIYW5kbGVHZXRjb250ZW50KGl0ZW06IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPjtcbiAgSGFuZGxlU2V0UGVybWlzc2lvbnMoXG4gICAgaXRlbTogc3RyaW5nLFxuICAgIHJvbGU6IENvcmVUeXBlcy5QZXJtaXNzaW9uc1JvbGUsXG4gICAgZW50aXR5OiBDb3JlVHlwZXMuRmlsZVBlcm1pc3Npb25FbnRpdHksXG4gICAgcmVjdXJzaXZlPzogYm9vbGVhblxuICApOiBQcm9taXNlPGFueT47XG4gIC8vIEZpbGUvRGlyZWN0b3J5IEJ1bGsgQWN0aW9uc1xuICBIYW5kbGVNb3ZlTXVsdGlwbGUoaXRlbXM6IHN0cmluZ1tdLCBuZXdQYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT47XG4gIEhhbmRsZUNvcHlNdWx0aXBsZShpdGVtczogc3RyaW5nW10sIG5ld1BhdGg6IHN0cmluZyk6IFByb21pc2U8YW55PjtcbiAgSGFuZGxlU2V0UGVybWlzc2lvbnNNdWx0aXBsZShcbiAgICBpdGVtczogc3RyaW5nW10sXG4gICAgcm9sZTogQ29yZVR5cGVzLlBlcm1pc3Npb25zUm9sZSxcbiAgICBlbnRpdHk6IENvcmVUeXBlcy5GaWxlUGVybWlzc2lvbkVudGl0eSxcbiAgICByZWN1cnNpdmU/OiBib29sZWFuXG4gICk6IFByb21pc2U8YW55PjtcbiAgSGFuZGxlU2V0UGVybWlzc2lvbnNPYmplY3RNdWx0aXBsZShcbiAgICBpdGVtczogc3RyaW5nW10sXG4gICAgcGVybWlzc2lvbnNPYmo6IENvcmVUeXBlcy5GaWxlUGVybWlzc2lvbnNPYmplY3QsXG4gICAgcmVjdXJzaXZlPzogYm9vbGVhblxuICApOiBQcm9taXNlPHZvaWQ+O1xuICBIYW5kbGVSZW1vdmUoaXRlbXM6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+O1xufVxuIl19
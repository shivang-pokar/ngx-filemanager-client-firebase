/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} fieldName
 * @param {?=} direction
 * @return {?}
 */
export function sortObjectArrayCase(fieldName, direction) {
    return (a, b) => {
        const /** @type {?} */ val_a = (a[fieldName] + '').toLowerCase();
        const /** @type {?} */ val_b = (b[fieldName] + '').toLowerCase();
        if (val_a < val_b) {
            return direction === 'desc' ? 1 : -1;
        }
        if (val_a > val_b) {
            return direction === 'desc' ? -1 : 1;
        }
        return 0;
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1oZWxwZXJzLmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL1NoaXZhbmcvUGkgU29mdHdhcmUvZmlsZS1tYW5hZ2VyL25neC1maWxlbWFuYWdlci9wcm9qZWN0cy9uZ3gtZmlsZW1hbmFnZXItY2xpZW50LWZpcmViYXNlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9zb3J0LWhlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsTUFBTSxVQUFVLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxTQUEwQjtJQUN2RSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2QsdUJBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hELHVCQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoRCxJQUFJLEtBQUssR0FBRyxLQUFLLEVBQUU7WUFDakIsT0FBTyxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxLQUFLLEdBQUcsS0FBSyxFQUFFO1lBQ2pCLE9BQU8sU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QztRQUNELE9BQU8sQ0FBQyxDQUFDO0tBQ1YsQ0FBQztDQUNIIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNvcnRPYmplY3RBcnJheUNhc2UoZmllbGROYW1lLCBkaXJlY3Rpb24/OiAnYXNjJyB8ICdkZXNjJykge1xuICByZXR1cm4gKGEsIGIpID0+IHtcbiAgICBjb25zdCB2YWxfYSA9IChhW2ZpZWxkTmFtZV0gKyAnJykudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCB2YWxfYiA9IChiW2ZpZWxkTmFtZV0gKyAnJykudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAodmFsX2EgPCB2YWxfYikge1xuICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gJ2Rlc2MnID8gMSA6IC0xO1xuICAgIH1cbiAgICBpZiAodmFsX2EgPiB2YWxfYikge1xuICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gJ2Rlc2MnID8gLTEgOiAxO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfTtcbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} inputPath
 * @return {?}
 */
export function HasPrefixSlash(inputPath) {
    if (!inputPath || !inputPath.length) {
        return false;
    }
    const /** @type {?} */ hasPrefix = inputPath.startsWith('/');
    return hasPrefix;
}
/**
 * @param {?} inputPath
 * @return {?}
 */
export function TrimSlashes(inputPath) {
    return inputPath.replace(/^\/+|\/+$/g, '');
}
/**
 * @param {?} inputPath
 * @return {?}
 */
export function HasTrailingSlash(inputPath) {
    if (!inputPath || !inputPath.length) {
        return false;
    }
    const /** @type {?} */ hasPrefix = inputPath.endsWith('/');
    return hasPrefix;
}
/**
 * @param {?} inputPath
 * @return {?}
 */
export function EnsurePrefixSlash(inputPath) {
    const /** @type {?} */ hasPrefix = HasPrefixSlash(inputPath);
    const /** @type {?} */ pathParsed = hasPrefix ? inputPath : '/' + inputPath;
    return pathParsed;
}
/**
 * @param {?} inputPath
 * @return {?}
 */
export function EnsureTrailingSlash(inputPath) {
    const /** @type {?} */ hasTrailing = HasTrailingSlash(inputPath);
    const /** @type {?} */ pathParsed = hasTrailing ? inputPath : inputPath + '/';
    return pathParsed;
}
/**
 * @param {?} inputPath
 * @return {?}
 */
export function EnsureAbsoluteDirectory(inputPath) {
    const /** @type {?} */ pathParsed = EnsureTrailingSlash(EnsurePrefixSlash(inputPath));
    return pathParsed;
}
/**
 * @param {?} inputPath
 * @return {?}
 */
export function EnsureNoTrailingSlash(inputPath) {
    const /** @type {?} */ hasTrailing = HasTrailingSlash(inputPath);
    const /** @type {?} */ pathParsed = hasTrailing ? inputPath.slice(0, -1) : inputPath;
    return pathParsed;
}
/**
 * @param {?} inputPath
 * @return {?}
 */
export function Add2ToPath(inputPath) {
    const /** @type {?} */ dotSegments = inputPath.split('.');
    const /** @type {?} */ extension = dotSegments.pop();
    const /** @type {?} */ fileName = dotSegments.join('.') + ' (2)' + '.' + extension;
    return fileName;
}
/**
 * @param {?} inputPath
 * @return {?}
 */
export function Add2ToPathDir(inputPath) {
    const /** @type {?} */ pathWithoutSlash = EnsureNoTrailingSlash(inputPath);
    const /** @type {?} */ pathWith2 = pathWithoutSlash + ' (2)';
    const /** @type {?} */ newDirName = EnsureTrailingSlash(pathWith2);
    return newDirName;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC1oZWxwZXJzLmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL1NoaXZhbmcvUGkgU29mdHdhcmUvZmlsZS1tYW5hZ2VyL25neC1maWxlbWFuYWdlci9wcm9qZWN0cy9uZ3gtZmlsZW1hbmFnZXItY2xpZW50LWZpcmViYXNlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9wYXRoLWhlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNLFVBQVUsY0FBYyxDQUFDLFNBQWlCO0lBQzlDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1FBQ25DLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCx1QkFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QyxPQUFPLFNBQVMsQ0FBQztDQUNsQjs7Ozs7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFDLFNBQWlCO0lBQzNDLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7Q0FDNUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUFDLFNBQWlCO0lBQ2hELElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1FBQ25DLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCx1QkFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQyxPQUFPLFNBQVMsQ0FBQztDQUNsQjs7Ozs7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsU0FBaUI7SUFDakQsdUJBQU0sU0FBUyxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1Qyx1QkFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7SUFDM0QsT0FBTyxVQUFVLENBQUM7Q0FDbkI7Ozs7O0FBRUQsTUFBTSxVQUFVLG1CQUFtQixDQUFDLFNBQWlCO0lBQ25ELHVCQUFNLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRCx1QkFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFDN0QsT0FBTyxVQUFVLENBQUM7Q0FDbkI7Ozs7O0FBRUQsTUFBTSxVQUFVLHVCQUF1QixDQUFDLFNBQWlCO0lBQ3ZELHVCQUFNLFVBQVUsR0FBRyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLE9BQU8sVUFBVSxDQUFDO0NBQ25COzs7OztBQUVELE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxTQUFpQjtJQUNyRCx1QkFBTSxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEQsdUJBQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3BFLE9BQU8sVUFBVSxDQUFDO0NBQ25COzs7OztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsU0FBaUI7SUFDMUMsdUJBQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsdUJBQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNwQyx1QkFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQztJQUNsRSxPQUFPLFFBQVEsQ0FBQztDQUNqQjs7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFDLFNBQWlCO0lBQzdDLHVCQUFNLGdCQUFnQixHQUFHLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFELHVCQUFNLFNBQVMsR0FBRyxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7SUFDNUMsdUJBQU0sVUFBVSxHQUFJLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELE9BQU8sVUFBVSxDQUFDO0NBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIEhhc1ByZWZpeFNsYXNoKGlucHV0UGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICghaW5wdXRQYXRoIHx8ICFpbnB1dFBhdGgubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGhhc1ByZWZpeCA9IGlucHV0UGF0aC5zdGFydHNXaXRoKCcvJyk7XG4gIHJldHVybiBoYXNQcmVmaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUcmltU2xhc2hlcyhpbnB1dFBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBpbnB1dFBhdGgucmVwbGFjZSgvXlxcLyt8XFwvKyQvZywgJycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSGFzVHJhaWxpbmdTbGFzaChpbnB1dFBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAoIWlucHV0UGF0aCB8fCAhaW5wdXRQYXRoLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBoYXNQcmVmaXggPSBpbnB1dFBhdGguZW5kc1dpdGgoJy8nKTtcbiAgcmV0dXJuIGhhc1ByZWZpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVuc3VyZVByZWZpeFNsYXNoKGlucHV0UGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgaGFzUHJlZml4ID0gSGFzUHJlZml4U2xhc2goaW5wdXRQYXRoKTtcbiAgY29uc3QgcGF0aFBhcnNlZCA9IGhhc1ByZWZpeCA/IGlucHV0UGF0aCA6ICcvJyArIGlucHV0UGF0aDtcbiAgcmV0dXJuIHBhdGhQYXJzZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFbnN1cmVUcmFpbGluZ1NsYXNoKGlucHV0UGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgaGFzVHJhaWxpbmcgPSBIYXNUcmFpbGluZ1NsYXNoKGlucHV0UGF0aCk7XG4gIGNvbnN0IHBhdGhQYXJzZWQgPSBoYXNUcmFpbGluZyA/IGlucHV0UGF0aCA6IGlucHV0UGF0aCArICcvJztcbiAgcmV0dXJuIHBhdGhQYXJzZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFbnN1cmVBYnNvbHV0ZURpcmVjdG9yeShpbnB1dFBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHBhdGhQYXJzZWQgPSBFbnN1cmVUcmFpbGluZ1NsYXNoKEVuc3VyZVByZWZpeFNsYXNoKGlucHV0UGF0aCkpO1xuICByZXR1cm4gcGF0aFBhcnNlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVuc3VyZU5vVHJhaWxpbmdTbGFzaChpbnB1dFBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGhhc1RyYWlsaW5nID0gSGFzVHJhaWxpbmdTbGFzaChpbnB1dFBhdGgpO1xuICBjb25zdCBwYXRoUGFyc2VkID0gaGFzVHJhaWxpbmcgPyBpbnB1dFBhdGguc2xpY2UoMCwgLTEpIDogaW5wdXRQYXRoO1xuICByZXR1cm4gcGF0aFBhcnNlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFkZDJUb1BhdGgoaW5wdXRQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBkb3RTZWdtZW50cyA9IGlucHV0UGF0aC5zcGxpdCgnLicpO1xuICBjb25zdCBleHRlbnNpb24gPSBkb3RTZWdtZW50cy5wb3AoKTtcbiAgY29uc3QgZmlsZU5hbWUgPSBkb3RTZWdtZW50cy5qb2luKCcuJykgKyAnICgyKScgKyAnLicgKyBleHRlbnNpb247XG4gIHJldHVybiBmaWxlTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFkZDJUb1BhdGhEaXIoaW5wdXRQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBwYXRoV2l0aG91dFNsYXNoID0gRW5zdXJlTm9UcmFpbGluZ1NsYXNoKGlucHV0UGF0aCk7XG4gIGNvbnN0IHBhdGhXaXRoMiA9IHBhdGhXaXRob3V0U2xhc2ggKyAnICgyKSc7XG4gIGNvbnN0IG5ld0Rpck5hbWUgPSAgRW5zdXJlVHJhaWxpbmdTbGFzaChwYXRoV2l0aDIpO1xuICByZXR1cm4gbmV3RGlyTmFtZTtcbn1cbiJdfQ==
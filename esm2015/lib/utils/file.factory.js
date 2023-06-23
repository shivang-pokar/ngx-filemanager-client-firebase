/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import path from 'path-browserify';
/**
 * @param {?} name
 * @param {?} fullPath
 * @return {?}
 */
export function MakeClientDirectory(name, fullPath) {
    return {
        name: name,
        fullPath: fullPath,
        rightsFirebase: [],
        permissions: {},
        size: null,
        date: new Date().toISOString(),
        type: 'dir'
    };
}
/**
 * @param {?} fullPath
 * @return {?}
 */
export function MakeClientFile(fullPath) {
    const /** @type {?} */ fileName = path.basename(fullPath);
    return {
        name: fileName,
        fullPath: fullPath,
        rightsFirebase: [],
        permissions: {},
        size: null,
        date: new Date().toISOString(),
        type: 'file'
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL1NoaXZhbmcvUGkgU29mdHdhcmUvZmlsZS1tYW5hZ2VyL25neC1maWxlbWFuYWdlci9wcm9qZWN0cy9uZ3gtZmlsZW1hbmFnZXItY2xpZW50LWZpcmViYXNlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9maWxlLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sSUFBSSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7QUFHbkMsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxJQUFZLEVBQ1osUUFBZ0I7SUFFaEIsT0FBTztRQUNMLElBQUksRUFBRSxJQUFJO1FBQ1YsUUFBUSxFQUFFLFFBQVE7UUFDbEIsY0FBYyxFQUFFLEVBQUU7UUFDbEIsV0FBVyxFQUFFLEVBQVM7UUFDdEIsSUFBSSxFQUFFLElBQUk7UUFDVixJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7UUFDOUIsSUFBSSxFQUFFLEtBQUs7S0FDWixDQUFDO0NBQ0g7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FDNUIsUUFBZ0I7SUFFaEIsdUJBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekMsT0FBTztRQUNMLElBQUksRUFBRSxRQUFRO1FBQ2QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsY0FBYyxFQUFFLEVBQUU7UUFDbEIsV0FBVyxFQUFFLEVBQVM7UUFDdEIsSUFBSSxFQUFFLElBQUk7UUFDVixJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7UUFDOUIsSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDO0NBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3JlVHlwZXMgfSBmcm9tICcuLi8uLi9jb3JlLXR5cGVzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgtYnJvd3NlcmlmeSc7XG5cbi8vIHRlbXBvcmFyeSBkaXJlY3RvcnkgZm9yIHRoZSBjbGllbnQgd2hpbGUgaXQgcmVmcmVzaGVzXG5leHBvcnQgZnVuY3Rpb24gTWFrZUNsaWVudERpcmVjdG9yeShcbiAgbmFtZTogc3RyaW5nLFxuICBmdWxsUGF0aDogc3RyaW5nXG4pOiBDb3JlVHlwZXMuUmVzRmlsZSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBmdWxsUGF0aDogZnVsbFBhdGgsXG4gICAgcmlnaHRzRmlyZWJhc2U6IFtdLFxuICAgIHBlcm1pc3Npb25zOiB7fSBhcyBhbnksXG4gICAgc2l6ZTogbnVsbCxcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgdHlwZTogJ2RpcidcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1ha2VDbGllbnRGaWxlKFxuICBmdWxsUGF0aDogc3RyaW5nXG4pOiBDb3JlVHlwZXMuUmVzRmlsZSB7XG4gIGNvbnN0IGZpbGVOYW1lID0gcGF0aC5iYXNlbmFtZShmdWxsUGF0aCk7XG4gIHJldHVybiB7XG4gICAgbmFtZTogZmlsZU5hbWUsXG4gICAgZnVsbFBhdGg6IGZ1bGxQYXRoLFxuICAgIHJpZ2h0c0ZpcmViYXNlOiBbXSxcbiAgICBwZXJtaXNzaW9uczoge30gYXMgYW55LFxuICAgIHNpemU6IG51bGwsXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgIHR5cGU6ICdmaWxlJ1xuICB9O1xufVxuIl19
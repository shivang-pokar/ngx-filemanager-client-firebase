/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as path from 'path-browserify';
import { EnsureAbsoluteDirectory } from '../../utils/path-helpers';
/**
 * @record
 */
export function BreadCrumb() { }
function BreadCrumb_tsickle_Closure_declarations() {
    /** @type {?} */
    BreadCrumb.prototype.label;
    /** @type {?|undefined} */
    BreadCrumb.prototype.path;
    /** @type {?|undefined} */
    BreadCrumb.prototype.icon;
    /** @type {?|undefined} */
    BreadCrumb.prototype.virtualPath;
}
/**
 * @param {?} virtualRoot
 * @return {?}
 */
function MakeRootCrumb(virtualRoot) {
    return {
        label: '',
        icon: 'home',
        path: virtualRoot,
        virtualPath: '/'
    };
}
/**
 * @param {?} virtualRoot
 * @return {?}
 */
function MakeWarningCrumb(virtualRoot) {
    return {
        label: '',
        icon: 'mood_bad',
        path: virtualRoot,
        virtualPath: virtualRoot
    };
}
const /** @type {?} */ MakeCrumbs = (virtualRoot, absolutePath) => {
    const /** @type {?} */ virtualRootParsed = EnsureAbsoluteDirectory(virtualRoot);
    const /** @type {?} */ absolutePathParsed = EnsureAbsoluteDirectory(absolutePath);
    if (absolutePathParsed.indexOf(virtualRootParsed) !== 0) {
        console.warn('Absolute path is not within the virtualRoot', { virtualRoot, absolutePath });
        return [MakeWarningCrumb(virtualRootParsed)];
    }
    if (absolutePathParsed === virtualRootParsed) {
        return [MakeRootCrumb(virtualRootParsed)];
    }
    const /** @type {?} */ relativeVirtualRoot = absolutePathParsed.slice(virtualRootParsed.length);
    const /** @type {?} */ crumbs = [];
    relativeVirtualRoot
        .split('/')
        .filter(p => !!p)
        .reduce((currentPath, curr) => {
        const /** @type {?} */ dirname = path.basename(currentPath);
        const /** @type {?} */ crumb = {
            label: dirname,
            path: EnsureAbsoluteDirectory(virtualRootParsed + currentPath),
            virtualPath: EnsureAbsoluteDirectory(currentPath)
        };
        crumbs.unshift(crumb);
        const /** @type {?} */ parentPath = path.dirname(currentPath);
        return parentPath;
    }, relativeVirtualRoot);
    crumbs.unshift(MakeRootCrumb(virtualRootParsed));
    return crumbs;
};
const ɵ0 = MakeCrumbs;
export const /** @type {?} */ crumbFactory = {
    MakeCrumbs: MakeCrumbs
};
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J1bWItZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9TaGl2YW5nL1BpIFNvZnR3YXJlL2ZpbGUtbWFuYWdlci9uZ3gtZmlsZW1hbmFnZXIvcHJvamVjdHMvbmd4LWZpbGVtYW5hZ2VyLWNsaWVudC1maXJlYmFzZS9zcmMvIiwic291cmNlcyI6WyJsaWIvdWkvYnJlYWQtY3J1bWJzL2NydW1iLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxJQUFJLE1BQU0saUJBQWlCLENBQUM7QUFDeEMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTbkUsU0FBUyxhQUFhLENBQUMsV0FBVztJQUNoQyxPQUFPO1FBQ0wsS0FBSyxFQUFFLEVBQUU7UUFDVCxJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxXQUFXO1FBQ2pCLFdBQVcsRUFBRSxHQUFHO0tBQ2pCLENBQUM7Q0FDSDs7Ozs7QUFFRCxTQUFTLGdCQUFnQixDQUFDLFdBQVc7SUFDbkMsT0FBTztRQUNMLEtBQUssRUFBRSxFQUFFO1FBQ1QsSUFBSSxFQUFFLFVBQVU7UUFDaEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsV0FBVyxFQUFFLFdBQVc7S0FDekIsQ0FBQztDQUNIO0FBRUQsdUJBQU0sVUFBVSxHQUFHLENBQUMsV0FBbUIsRUFBRSxZQUFvQixFQUFFLEVBQUU7SUFDL0QsdUJBQU0saUJBQWlCLEdBQUcsdUJBQXVCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0QsdUJBQU0sa0JBQWtCLEdBQUcsdUJBQXVCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakUsSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdkQsT0FBTyxDQUFDLElBQUksQ0FBQyw2Q0FBNkMsRUFBRSxFQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUMsQ0FBQyxDQUFDO1FBQ3pGLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7S0FDOUM7SUFFRCxJQUFJLGtCQUFrQixLQUFLLGlCQUFpQixFQUFFO1FBQzVDLE9BQU8sQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0tBQzNDO0lBRUQsdUJBQU0sbUJBQW1CLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUNsRCxpQkFBaUIsQ0FBQyxNQUFNLENBQ3pCLENBQUM7SUFDRix1QkFBTSxNQUFNLEdBQWlCLEVBQUUsQ0FBQztJQUNoQyxtQkFBbUI7U0FDaEIsS0FBSyxDQUFDLEdBQUcsQ0FBQztTQUNWLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEIsTUFBTSxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFFO1FBQzVCLHVCQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNDLHVCQUFNLEtBQUssR0FBRztZQUNaLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLHVCQUF1QixDQUFDLGlCQUFpQixHQUFHLFdBQVcsQ0FBQztZQUM5RCxXQUFXLEVBQUUsdUJBQXVCLENBQUMsV0FBVyxDQUFDO1NBQ2xELENBQUM7UUFDRixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLHVCQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sVUFBVSxDQUFDO0tBQ25CLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUUxQixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDakQsT0FBTyxNQUFNLENBQUM7Q0FDZixDQUFDOztBQUVGLE1BQU0sQ0FBQyx1QkFBTSxZQUFZLEdBQUc7SUFDMUIsVUFBVSxFQUFFLFVBQVU7Q0FDdkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aC1icm93c2VyaWZ5JztcbmltcG9ydCB7IEVuc3VyZUFic29sdXRlRGlyZWN0b3J5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcGF0aC1oZWxwZXJzJztcblxuZXhwb3J0IGludGVyZmFjZSBCcmVhZENydW1iIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgcGF0aD86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgdmlydHVhbFBhdGg/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIE1ha2VSb290Q3J1bWIodmlydHVhbFJvb3QpOiBCcmVhZENydW1iIHtcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJycsXG4gICAgaWNvbjogJ2hvbWUnLFxuICAgIHBhdGg6IHZpcnR1YWxSb290LFxuICAgIHZpcnR1YWxQYXRoOiAnLydcbiAgfTtcbn1cblxuZnVuY3Rpb24gTWFrZVdhcm5pbmdDcnVtYih2aXJ0dWFsUm9vdCk6IEJyZWFkQ3J1bWIge1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiAnJyxcbiAgICBpY29uOiAnbW9vZF9iYWQnLFxuICAgIHBhdGg6IHZpcnR1YWxSb290LFxuICAgIHZpcnR1YWxQYXRoOiB2aXJ0dWFsUm9vdFxuICB9O1xufVxuXG5jb25zdCBNYWtlQ3J1bWJzID0gKHZpcnR1YWxSb290OiBzdHJpbmcsIGFic29sdXRlUGF0aDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHZpcnR1YWxSb290UGFyc2VkID0gRW5zdXJlQWJzb2x1dGVEaXJlY3RvcnkodmlydHVhbFJvb3QpO1xuICBjb25zdCBhYnNvbHV0ZVBhdGhQYXJzZWQgPSBFbnN1cmVBYnNvbHV0ZURpcmVjdG9yeShhYnNvbHV0ZVBhdGgpO1xuICBpZiAoYWJzb2x1dGVQYXRoUGFyc2VkLmluZGV4T2YodmlydHVhbFJvb3RQYXJzZWQpICE9PSAwKSB7XG4gICAgY29uc29sZS53YXJuKCdBYnNvbHV0ZSBwYXRoIGlzIG5vdCB3aXRoaW4gdGhlIHZpcnR1YWxSb290Jywge3ZpcnR1YWxSb290LCBhYnNvbHV0ZVBhdGh9KTtcbiAgICByZXR1cm4gW01ha2VXYXJuaW5nQ3J1bWIodmlydHVhbFJvb3RQYXJzZWQpXTtcbiAgfVxuXG4gIGlmIChhYnNvbHV0ZVBhdGhQYXJzZWQgPT09IHZpcnR1YWxSb290UGFyc2VkKSB7XG4gICAgcmV0dXJuIFtNYWtlUm9vdENydW1iKHZpcnR1YWxSb290UGFyc2VkKV07XG4gIH1cblxuICBjb25zdCByZWxhdGl2ZVZpcnR1YWxSb290ID0gYWJzb2x1dGVQYXRoUGFyc2VkLnNsaWNlKFxuICAgIHZpcnR1YWxSb290UGFyc2VkLmxlbmd0aFxuICApO1xuICBjb25zdCBjcnVtYnM6IEJyZWFkQ3J1bWJbXSA9IFtdO1xuICByZWxhdGl2ZVZpcnR1YWxSb290XG4gICAgLnNwbGl0KCcvJylcbiAgICAuZmlsdGVyKHAgPT4gISFwKVxuICAgIC5yZWR1Y2UoKGN1cnJlbnRQYXRoLCBjdXJyKSA9PiB7XG4gICAgICBjb25zdCBkaXJuYW1lID0gcGF0aC5iYXNlbmFtZShjdXJyZW50UGF0aCk7XG4gICAgICBjb25zdCBjcnVtYiA9IHtcbiAgICAgICAgbGFiZWw6IGRpcm5hbWUsXG4gICAgICAgIHBhdGg6IEVuc3VyZUFic29sdXRlRGlyZWN0b3J5KHZpcnR1YWxSb290UGFyc2VkICsgY3VycmVudFBhdGgpLFxuICAgICAgICB2aXJ0dWFsUGF0aDogRW5zdXJlQWJzb2x1dGVEaXJlY3RvcnkoY3VycmVudFBhdGgpXG4gICAgICB9O1xuICAgICAgY3J1bWJzLnVuc2hpZnQoY3J1bWIpO1xuICAgICAgY29uc3QgcGFyZW50UGF0aCA9IHBhdGguZGlybmFtZShjdXJyZW50UGF0aCk7XG4gICAgICByZXR1cm4gcGFyZW50UGF0aDtcbiAgICB9LCByZWxhdGl2ZVZpcnR1YWxSb290KTtcblxuICBjcnVtYnMudW5zaGlmdChNYWtlUm9vdENydW1iKHZpcnR1YWxSb290UGFyc2VkKSk7XG4gIHJldHVybiBjcnVtYnM7XG59O1xuXG5leHBvcnQgY29uc3QgY3J1bWJGYWN0b3J5ID0ge1xuICBNYWtlQ3J1bWJzOiBNYWtlQ3J1bWJzXG59O1xuIl19
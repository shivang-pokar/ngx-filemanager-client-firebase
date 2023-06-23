/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} input
 * @return {?}
 */
export function ConvertToTitleCase(input) {
    const /** @type {?} */ capitalsWithSpaces = input.replace(/([A-Z])/g, ' $1').trim();
    const /** @type {?} */ underscoresToSpaces = capitalsWithSpaces.replace(/_/g, ' ');
    return underscoresToSpaces
        .split(' ')
        .map(p => p.charAt(0).toUpperCase() + p.substr(1).toLowerCase())
        .join(' ');
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzZS1oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvU2hpdmFuZy9QaSBTb2Z0d2FyZS9maWxlLW1hbmFnZXIvbmd4LWZpbGVtYW5hZ2VyL3Byb2plY3RzL25neC1maWxlbWFuYWdlci1jbGllbnQtZmlyZWJhc2Uvc3JjLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2Nhc2UtaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsTUFBTSxVQUFVLGtCQUFrQixDQUFDLEtBQWE7SUFDOUMsdUJBQU0sa0JBQWtCLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkUsdUJBQU0sbUJBQW1CLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNsRSxPQUFPLG1CQUFtQjtTQUN2QixLQUFLLENBQUMsR0FBRyxDQUFDO1NBQ1YsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQy9ELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNkIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIENvbnZlcnRUb1RpdGxlQ2FzZShpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgY2FwaXRhbHNXaXRoU3BhY2VzID0gaW5wdXQucmVwbGFjZSgvKFtBLVpdKS9nLCAnICQxJykudHJpbSgpO1xuICBjb25zdCB1bmRlcnNjb3Jlc1RvU3BhY2VzID0gY2FwaXRhbHNXaXRoU3BhY2VzLnJlcGxhY2UoL18vZywgJyAnKTtcbiAgcmV0dXJuIHVuZGVyc2NvcmVzVG9TcGFjZXNcbiAgICAuc3BsaXQoJyAnKVxuICAgIC5tYXAocCA9PiBwLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKSlcbiAgICAuam9pbignICcpO1xufVxuIl19
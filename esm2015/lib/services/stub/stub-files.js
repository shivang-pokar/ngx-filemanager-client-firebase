/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as path from 'path-browserify';
import { EnsureNoTrailingSlash, EnsureTrailingSlash } from '../../utils/path-helpers';
/**
 * @param {?} itemPath
 * @return {?}
 */
export function MakeItem2(itemPath) {
    return {
        name: path.basename(itemPath),
        fullPath: itemPath,
        rightsFirebase: [],
        permissions: {
            others: 'read/write',
            readers: ['Example Reader'],
            writers: ['Example Writer', 'Managers']
        },
        size: '111',
        date: new Date().toISOString(),
        type: itemPath.endsWith('/') ? 'dir' : 'file'
    };
}
/**
 * @param {?} itemPath
 * @return {?}
 */
export function MakeFile(itemPath) {
    const /** @type {?} */ filePath = EnsureNoTrailingSlash(itemPath);
    return MakeItem2(filePath);
}
/**
 * @param {?} itemPath
 * @return {?}
 */
export function MakeDir(itemPath) {
    const /** @type {?} */ dirPath = EnsureTrailingSlash(itemPath);
    return MakeItem2(dirPath);
}
export const /** @type {?} */ stubFiles = [
    MakeFile('/image1.png'),
    MakeFile('/image2.jpeg'),
    MakeFile('/subfile.txt'),
    MakeFile('/subfile.mp3'),
    MakeFile('/subfile.mp4'),
    MakeFile('/tables.csv'),
    MakeFile('/time.docx'),
    MakeDir('/emptyFolder/'),
    MakeDir('/subfolder/'),
    MakeFile('/subfolder/file.txt'),
    MakeFile('/subfolder/file.png'),
    MakeDir('/subfolder/xsub1/'),
    MakeDir('/subfolder/ysub1/'),
    MakeDir('/subfolder/2sub1/'),
    MakeDir('/subfolder/1sub1/'),
    MakeDir('/subfolder/sub1/'),
    MakeFile('/subfolder/sub1/file.txt'),
    MakeDir('/subfolder/sub1/sub1/'),
    MakeFile('/subfolder/sub1/sub11/file.txt'),
    MakeDir('/subfolder/sub1/sub11/sub111/'),
    MakeFile('/subfolder/sub1/sub11/sub111/file.txt'),
    MakeDir('/subfolder/sub1/sub12/'),
    MakeFile('/subfolder/sub1/sub12/file.txt'),
    MakeDir('/subfolder/sub1/sub12/sub112/'),
    MakeFile('/subfolder/sub1/sub12/sub112/file.txt'),
    MakeDir('/subfolder/sub2/'),
    MakeFile('/subfolder/sub2/file.txt'),
    MakeDir('/subfolder/sub2/sub21/'),
    MakeFile('/subfolder/sub2/sub21/file.txt'),
    MakeDir('/subfolder/sub2/sub21/sub211/'),
    MakeFile('/subfolder/sub2/sub21/sub211/file.txt'),
    MakeDir('/subfolder/sub2/sub22/'),
    MakeFile('/subfolder/sub2/sub22/file.txt'),
    MakeDir('/subfolder/sub2/sub22/sub221/'),
    MakeFile('/subfolder/sub2/sub22/sub221/file.txt')
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1Yi1maWxlcy5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9TaGl2YW5nL1BpIFNvZnR3YXJlL2ZpbGUtbWFuYWdlci9uZ3gtZmlsZW1hbmFnZXIvcHJvamVjdHMvbmd4LWZpbGVtYW5hZ2VyLWNsaWVudC1maXJlYmFzZS9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3R1Yi9zdHViLWZpbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssSUFBSSxNQUFNLGlCQUFpQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQUV0RixNQUFNLFVBQVUsU0FBUyxDQUFDLFFBQWdCO0lBQ3hDLE9BQU87UUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDN0IsUUFBUSxFQUFFLFFBQVE7UUFDbEIsY0FBYyxFQUFFLEVBQUU7UUFDbEIsV0FBVyxFQUFFO1lBQ1gsTUFBTSxFQUFFLFlBQVk7WUFDcEIsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7WUFDM0IsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxFQUFFLEtBQUs7UUFDWCxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7UUFDOUIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTTtLQUM5QyxDQUFDO0NBQ0g7Ozs7O0FBRUQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxRQUFnQjtJQUN2Qyx1QkFBTSxRQUFRLEdBQUcscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakQsT0FBTyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7Q0FDNUI7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FBQyxRQUFnQjtJQUN0Qyx1QkFBTSxPQUFPLEdBQUcsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7Q0FDM0I7QUFFRCxNQUFNLENBQUMsdUJBQU0sU0FBUyxHQUFHO0lBQ3ZCLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFDdkIsUUFBUSxDQUFDLGNBQWMsQ0FBQztJQUN4QixRQUFRLENBQUMsY0FBYyxDQUFDO0lBQ3hCLFFBQVEsQ0FBQyxjQUFjLENBQUM7SUFDeEIsUUFBUSxDQUFDLGNBQWMsQ0FBQztJQUN4QixRQUFRLENBQUMsYUFBYSxDQUFDO0lBQ3ZCLFFBQVEsQ0FBQyxZQUFZLENBQUM7SUFDdEIsT0FBTyxDQUFDLGVBQWUsQ0FBQztJQUN4QixPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ3RCLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQztJQUMvQixRQUFRLENBQUMscUJBQXFCLENBQUM7SUFFL0IsT0FBTyxDQUFDLG1CQUFtQixDQUFDO0lBQzVCLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztJQUM1QixPQUFPLENBQUMsbUJBQW1CLENBQUM7SUFDNUIsT0FBTyxDQUFDLG1CQUFtQixDQUFDO0lBQzVCLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztJQUMzQixRQUFRLENBQUMsMEJBQTBCLENBQUM7SUFDcEMsT0FBTyxDQUFDLHVCQUF1QixDQUFDO0lBQ2hDLFFBQVEsQ0FBQyxnQ0FBZ0MsQ0FBQztJQUMxQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDeEMsUUFBUSxDQUFDLHVDQUF1QyxDQUFDO0lBQ2pELE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQztJQUNqQyxRQUFRLENBQUMsZ0NBQWdDLENBQUM7SUFDMUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBQ3hDLFFBQVEsQ0FBQyx1Q0FBdUMsQ0FBQztJQUVqRCxPQUFPLENBQUMsa0JBQWtCLENBQUM7SUFDM0IsUUFBUSxDQUFDLDBCQUEwQixDQUFDO0lBQ3BDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQztJQUNqQyxRQUFRLENBQUMsZ0NBQWdDLENBQUM7SUFDMUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBQ3hDLFFBQVEsQ0FBQyx1Q0FBdUMsQ0FBQztJQUNqRCxPQUFPLENBQUMsd0JBQXdCLENBQUM7SUFDakMsUUFBUSxDQUFDLGdDQUFnQyxDQUFDO0lBQzFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUN4QyxRQUFRLENBQUMsdUNBQXVDLENBQUM7Q0FDbEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aC1icm93c2VyaWZ5JztcbmltcG9ydCB7IENvcmVUeXBlcyB9IGZyb20gJy4uLy4uLy4uL2NvcmUtdHlwZXMnO1xuaW1wb3J0IHsgRW5zdXJlTm9UcmFpbGluZ1NsYXNoLCBFbnN1cmVUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGF0aC1oZWxwZXJzJztcblxuZXhwb3J0IGZ1bmN0aW9uIE1ha2VJdGVtMihpdGVtUGF0aDogc3RyaW5nKTogQ29yZVR5cGVzLlJlc0ZpbGUge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IHBhdGguYmFzZW5hbWUoaXRlbVBhdGgpLFxuICAgIGZ1bGxQYXRoOiBpdGVtUGF0aCxcbiAgICByaWdodHNGaXJlYmFzZTogW10sXG4gICAgcGVybWlzc2lvbnM6IHtcbiAgICAgIG90aGVyczogJ3JlYWQvd3JpdGUnLFxuICAgICAgcmVhZGVyczogWydFeGFtcGxlIFJlYWRlciddLFxuICAgICAgd3JpdGVyczogWydFeGFtcGxlIFdyaXRlcicsICdNYW5hZ2VycyddXG4gICAgfSxcbiAgICBzaXplOiAnMTExJyxcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgdHlwZTogaXRlbVBhdGguZW5kc1dpdGgoJy8nKSA/ICdkaXInIDogJ2ZpbGUnXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNYWtlRmlsZShpdGVtUGF0aDogc3RyaW5nKTogQ29yZVR5cGVzLlJlc0ZpbGUge1xuICBjb25zdCBmaWxlUGF0aCA9IEVuc3VyZU5vVHJhaWxpbmdTbGFzaChpdGVtUGF0aCk7XG4gIHJldHVybiBNYWtlSXRlbTIoZmlsZVBhdGgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTWFrZURpcihpdGVtUGF0aDogc3RyaW5nKTogQ29yZVR5cGVzLlJlc0ZpbGUge1xuICBjb25zdCBkaXJQYXRoID0gRW5zdXJlVHJhaWxpbmdTbGFzaChpdGVtUGF0aCk7XG4gIHJldHVybiBNYWtlSXRlbTIoZGlyUGF0aCk7XG59XG5cbmV4cG9ydCBjb25zdCBzdHViRmlsZXMgPSBbXG4gIE1ha2VGaWxlKCcvaW1hZ2UxLnBuZycpLFxuICBNYWtlRmlsZSgnL2ltYWdlMi5qcGVnJyksXG4gIE1ha2VGaWxlKCcvc3ViZmlsZS50eHQnKSxcbiAgTWFrZUZpbGUoJy9zdWJmaWxlLm1wMycpLFxuICBNYWtlRmlsZSgnL3N1YmZpbGUubXA0JyksXG4gIE1ha2VGaWxlKCcvdGFibGVzLmNzdicpLFxuICBNYWtlRmlsZSgnL3RpbWUuZG9jeCcpLFxuICBNYWtlRGlyKCcvZW1wdHlGb2xkZXIvJyksXG4gIE1ha2VEaXIoJy9zdWJmb2xkZXIvJyksXG4gIE1ha2VGaWxlKCcvc3ViZm9sZGVyL2ZpbGUudHh0JyksXG4gIE1ha2VGaWxlKCcvc3ViZm9sZGVyL2ZpbGUucG5nJyksXG5cbiAgTWFrZURpcignL3N1YmZvbGRlci94c3ViMS8nKSxcbiAgTWFrZURpcignL3N1YmZvbGRlci95c3ViMS8nKSxcbiAgTWFrZURpcignL3N1YmZvbGRlci8yc3ViMS8nKSxcbiAgTWFrZURpcignL3N1YmZvbGRlci8xc3ViMS8nKSxcbiAgTWFrZURpcignL3N1YmZvbGRlci9zdWIxLycpLFxuICBNYWtlRmlsZSgnL3N1YmZvbGRlci9zdWIxL2ZpbGUudHh0JyksXG4gIE1ha2VEaXIoJy9zdWJmb2xkZXIvc3ViMS9zdWIxLycpLFxuICBNYWtlRmlsZSgnL3N1YmZvbGRlci9zdWIxL3N1YjExL2ZpbGUudHh0JyksXG4gIE1ha2VEaXIoJy9zdWJmb2xkZXIvc3ViMS9zdWIxMS9zdWIxMTEvJyksXG4gIE1ha2VGaWxlKCcvc3ViZm9sZGVyL3N1YjEvc3ViMTEvc3ViMTExL2ZpbGUudHh0JyksXG4gIE1ha2VEaXIoJy9zdWJmb2xkZXIvc3ViMS9zdWIxMi8nKSxcbiAgTWFrZUZpbGUoJy9zdWJmb2xkZXIvc3ViMS9zdWIxMi9maWxlLnR4dCcpLFxuICBNYWtlRGlyKCcvc3ViZm9sZGVyL3N1YjEvc3ViMTIvc3ViMTEyLycpLFxuICBNYWtlRmlsZSgnL3N1YmZvbGRlci9zdWIxL3N1YjEyL3N1YjExMi9maWxlLnR4dCcpLFxuXG4gIE1ha2VEaXIoJy9zdWJmb2xkZXIvc3ViMi8nKSxcbiAgTWFrZUZpbGUoJy9zdWJmb2xkZXIvc3ViMi9maWxlLnR4dCcpLFxuICBNYWtlRGlyKCcvc3ViZm9sZGVyL3N1YjIvc3ViMjEvJyksXG4gIE1ha2VGaWxlKCcvc3ViZm9sZGVyL3N1YjIvc3ViMjEvZmlsZS50eHQnKSxcbiAgTWFrZURpcignL3N1YmZvbGRlci9zdWIyL3N1YjIxL3N1YjIxMS8nKSxcbiAgTWFrZUZpbGUoJy9zdWJmb2xkZXIvc3ViMi9zdWIyMS9zdWIyMTEvZmlsZS50eHQnKSxcbiAgTWFrZURpcignL3N1YmZvbGRlci9zdWIyL3N1YjIyLycpLFxuICBNYWtlRmlsZSgnL3N1YmZvbGRlci9zdWIyL3N1YjIyL2ZpbGUudHh0JyksXG4gIE1ha2VEaXIoJy9zdWJmb2xkZXIvc3ViMi9zdWIyMi9zdWIyMjEvJyksXG4gIE1ha2VGaWxlKCcvc3ViZm9sZGVyL3N1YjIvc3ViMjIvc3ViMjIxL2ZpbGUudHh0Jylcbl07XG4iXX0=
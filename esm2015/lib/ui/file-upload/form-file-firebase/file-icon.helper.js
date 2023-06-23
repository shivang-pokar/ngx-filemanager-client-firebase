/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
export function FileIcon() { }
function FileIcon_tsickle_Closure_declarations() {
    /**
     * Name of the icon, e.g. 'javascript'
     * @type {?}
     */
    FileIcon.prototype.name;
    /**
     * Define the file extensions that should use this icon.
     * E.g. ['js']
     * @type {?|undefined}
     */
    FileIcon.prototype.fileExtensions;
    /**
     * Define if there are some static file names that should apply this icon.
     * E.g. ['sample.js']
     * @type {?|undefined}
     */
    FileIcon.prototype.fileNames;
    /**
     * Define if there is a light icon available.
     * @type {?|undefined}
     */
    FileIcon.prototype.light;
    /**
     * Define if there is a high contrast icon available.
     * @type {?|undefined}
     */
    FileIcon.prototype.highContrast;
    /**
     * Define if the icon should be disabled.
     * @type {?|undefined}
     */
    FileIcon.prototype.disabled;
}
/**
 * @record
 */
export function FolderTheme() { }
function FolderTheme_tsickle_Closure_declarations() {
    /**
     * Name of the theme
     * @type {?}
     */
    FolderTheme.prototype.name;
    /**
     * Define the default icon for folders in a theme.
     * @type {?}
     */
    FolderTheme.prototype.defaultIcon;
    /**
     * Icon for root folders.
     * @type {?|undefined}
     */
    FolderTheme.prototype.rootFolder;
    /**
     * Defines folder icons for specific folder names.
     * @type {?|undefined}
     */
    FolderTheme.prototype.icons;
}
/**
 * @record
 */
export function FolderIcon() { }
function FolderIcon_tsickle_Closure_declarations() {
    /**
     * Name of the icon, e.g. 'src'
     * @type {?}
     */
    FolderIcon.prototype.name;
    /**
     * Define the folder names that should apply the icon.
     * E.g. ['src', 'source']
     * @type {?}
     */
    FolderIcon.prototype.folderNames;
    /**
     * Define if there is a light icon available.
     * @type {?|undefined}
     */
    FolderIcon.prototype.light;
    /**
     * Define if there is a high contrast icon available.
     * @type {?|undefined}
     */
    FolderIcon.prototype.highContrast;
    /**
     * Define if the icon should be disabled.
     * @type {?|undefined}
     */
    FolderIcon.prototype.disabled;
}
/**
 * @record
 */
export function DefaultIcon() { }
function DefaultIcon_tsickle_Closure_declarations() {
    /**
     * Name of the icon, e.g. 'src'
     * @type {?}
     */
    DefaultIcon.prototype.name;
    /**
     * Define if there is a light icon available.
     * @type {?|undefined}
     */
    DefaultIcon.prototype.light;
    /**
     * Define if there is a high contrast icon available.
     * @type {?|undefined}
     */
    DefaultIcon.prototype.highContrast;
}
export class FileIcons {
}
function FileIcons_tsickle_Closure_declarations() {
    /**
     * Define the default icon for files.
     * @type {?}
     */
    FileIcons.prototype.defaultIcon;
    /**
     * Defines all folder icons.
     * @type {?}
     */
    FileIcons.prototype.icons;
}
export const /** @type {?} */ fileIcons = {
    defaultIcon: { name: 'file' },
    icons: [
        { name: 'word', fileExtensions: ['doc', 'docx', 'rtf'] },
        { name: 'pdf', fileExtensions: ['pdf'] },
        { name: 'table', fileExtensions: ['xlsx', 'xls', 'csv', 'tsv'] },
        {
            name: 'html',
            fileExtensions: ['html', 'htm', 'xhtml', 'html_vm', 'asp']
        },
        {
            name: 'markdown',
            fileExtensions: ['md', 'markdown', 'rst']
        },
        { name: 'yaml', fileExtensions: ['yaml', 'YAML-tmLanguage', 'yml'] },
        {
            name: 'xml',
            fileExtensions: [
                'xml',
                'plist',
                'xsd',
                'dtd',
                'xsl',
                'xslt',
                'resx',
                'iml',
                'xquery',
                'tmLanguage',
                'manifest',
                'project'
            ],
            fileNames: ['.htaccess']
        },
        {
            name: 'image',
            fileExtensions: [
                'png',
                'jpeg',
                'jpg',
                'gif',
                'svg',
                'ico',
                'tif',
                'tiff',
                'psd',
                'psb',
                'ami',
                'apx',
                'bmp',
                'bpg',
                'brk',
                'cur',
                'dds',
                'dng',
                'exr',
                'fpx',
                'gbr',
                'img',
                'jbig2',
                'jb2',
                'jng',
                'jxr',
                'pbm',
                'pgf',
                'pic',
                'raw',
                'webp',
                'eps'
            ]
        },
        { name: 'tex', fileExtensions: ['tex', 'cls', 'sty'] },
        {
            name: 'powerpoint',
            fileExtensions: [
                'pptx',
                'ppt',
                'pptm',
                'potx',
                'potm',
                'ppsx',
                'ppsm',
                'pps',
                'ppam',
                'ppa'
            ]
        },
        {
            name: 'video',
            fileExtensions: [
                'webm',
                'mkv',
                'flv',
                'vob',
                'ogv',
                'ogg',
                'gifv',
                'avi',
                'mov',
                'qt',
                'wmv',
                'yuv',
                'rm',
                'rmvb',
                'mp4',
                'm4v',
                'mpg',
                'mp2',
                'mpeg',
                'mpe',
                'mpv',
                'm2v'
            ]
        },
        { name: 'audio', fileExtensions: ['mp3', 'flac', 'm4a', 'wma', 'aiff'] },
        { name: 'document', fileExtensions: ['txt'] }
    ]
};
export const /** @type {?} */ getFileIconName = (filename) => {
    filename = filename.toLowerCase();
    if (!filename || !filename.includes('.')) {
        return fileIcons.defaultIcon.name;
    }
    const /** @type {?} */ ext = getFileExtension(filename);
    const /** @type {?} */ matchesExt = fileIcons.icons.filter(x => !!x.fileExtensions && !!x.fileExtensions.filter(y => y === ext).length);
    const /** @type {?} */ matchesFilename = fileIcons.icons.filter(x => !!x.fileNames && !!x.fileNames.filter(y => y === filename).length);
    if (!!matchesFilename.length) {
        return matchesFilename[0].name;
    }
    else if (!!matchesExt.length) {
        return matchesExt[0].name;
    }
    return fileIcons.defaultIcon.name;
};
export const /** @type {?} */ isFileImage = (filename) => getFileIconName(filename) === 'image';
export const /** @type {?} */ getFileExtension = (filename) => filename.split('.').pop();
export const /** @type {?} */ getFileName = (filename) => filename.split('.').slice(-2, -1)[0];
export const /** @type {?} */ getFileIcon = (filename) => {
    return '/assets/fileicons/' + getFileIconName(filename) + '.svg';
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pY29uLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9TaGl2YW5nL1BpIFNvZnR3YXJlL2ZpbGUtbWFuYWdlci9uZ3gtZmlsZW1hbmFnZXIvcHJvamVjdHMvbmd4LWZpbGVtYW5hZ2VyLWNsaWVudC1maXJlYmFzZS9zcmMvIiwic291cmNlcyI6WyJsaWIvdWkvZmlsZS11cGxvYWQvZm9ybS1maWxlLWZpcmViYXNlL2ZpbGUtaWNvbi5oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFHQSxNQUFNLE9BQU8sU0FBUztDQVVyQjs7Ozs7Ozs7Ozs7OztBQUVELE1BQU0sQ0FBQyx1QkFBTSxTQUFTLEdBQWM7SUFDbEMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUM3QixLQUFLLEVBQUU7UUFDTCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRTtRQUN4RCxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDeEMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQ2hFO1lBQ0UsSUFBSSxFQUFFLE1BQU07WUFDWixjQUFjLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDO1NBQzNEO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsVUFBVTtZQUNoQixjQUFjLEVBQUUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxF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QUFNLFdBQVcsR0FBRyxDQUFDLFFBQWdCLEVBQUUsRUFBRTtJQUM5QyxPQUFPLG9CQUFvQixHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7Q0FDbEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgRmlsZUljb24ge1xuICAvKipcbiAgICogTmFtZSBvZiB0aGUgaWNvbiwgZS5nLiAnamF2YXNjcmlwdCdcbiAgICovXG4gIG5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogRGVmaW5lIHRoZSBmaWxlIGV4dGVuc2lvbnMgdGhhdCBzaG91bGQgdXNlIHRoaXMgaWNvbi5cbiAgICogRS5nLiBbJ2pzJ11cbiAgICovXG4gIGZpbGVFeHRlbnNpb25zPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIERlZmluZSBpZiB0aGVyZSBhcmUgc29tZSBzdGF0aWMgZmlsZSBuYW1lcyB0aGF0IHNob3VsZCBhcHBseSB0aGlzIGljb24uXG4gICAqIEUuZy4gWydzYW1wbGUuanMnXVxuICAgKi9cbiAgZmlsZU5hbWVzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIERlZmluZSBpZiB0aGVyZSBpcyBhIGxpZ2h0IGljb24gYXZhaWxhYmxlLlxuICAgKi9cbiAgbGlnaHQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEZWZpbmUgaWYgdGhlcmUgaXMgYSBoaWdoIGNvbnRyYXN0IGljb24gYXZhaWxhYmxlLlxuICAgKi9cbiAgaGlnaENvbnRyYXN0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGVmaW5lIGlmIHRoZSBpY29uIHNob3VsZCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2xkZXJUaGVtZSB7XG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSB0aGVtZVxuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZWZpbmUgdGhlIGRlZmF1bHQgaWNvbiBmb3IgZm9sZGVycyBpbiBhIHRoZW1lLlxuICAgKi9cbiAgZGVmYXVsdEljb246IERlZmF1bHRJY29uO1xuXG4gIC8qKlxuICAgKiBJY29uIGZvciByb290IGZvbGRlcnMuXG4gICAqL1xuICByb290Rm9sZGVyPzogRGVmYXVsdEljb247XG5cbiAgLyoqXG4gICAqIERlZmluZXMgZm9sZGVyIGljb25zIGZvciBzcGVjaWZpYyBmb2xkZXIgbmFtZXMuXG4gICAqL1xuICBpY29ucz86IEZvbGRlckljb25bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2xkZXJJY29uIHtcbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIGljb24sIGUuZy4gJ3NyYydcbiAgICovXG4gIG5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogRGVmaW5lIHRoZSBmb2xkZXIgbmFtZXMgdGhhdCBzaG91bGQgYXBwbHkgdGhlIGljb24uXG4gICAqIEUuZy4gWydzcmMnLCAnc291cmNlJ11cbiAgICovXG4gIGZvbGRlck5hbWVzOiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogRGVmaW5lIGlmIHRoZXJlIGlzIGEgbGlnaHQgaWNvbiBhdmFpbGFibGUuXG4gICAqL1xuICBsaWdodD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERlZmluZSBpZiB0aGVyZSBpcyBhIGhpZ2ggY29udHJhc3QgaWNvbiBhdmFpbGFibGUuXG4gICAqL1xuICBoaWdoQ29udHJhc3Q/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEZWZpbmUgaWYgdGhlIGljb24gc2hvdWxkIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlZmF1bHRJY29uIHtcbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIGljb24sIGUuZy4gJ3NyYydcbiAgICovXG4gIG5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogRGVmaW5lIGlmIHRoZXJlIGlzIGEgbGlnaHQgaWNvbiBhdmFpbGFibGUuXG4gICAqL1xuICBsaWdodD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERlZmluZSBpZiB0aGVyZSBpcyBhIGhpZ2ggY29udHJhc3QgaWNvbiBhdmFpbGFibGUuXG4gICAqL1xuICBoaWdoQ29udHJhc3Q/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgRmlsZUljb25zIHtcbiAgLyoqXG4gICAqIERlZmluZSB0aGUgZGVmYXVsdCBpY29uIGZvciBmaWxlcy5cbiAgICovXG4gIGRlZmF1bHRJY29uOiBEZWZhdWx0SWNvbjtcblxuICAvKipcbiAgICogRGVmaW5lcyBhbGwgZm9sZGVyIGljb25zLlxuICAgKi9cbiAgaWNvbnM/OiBGaWxlSWNvbltdO1xufVxuXG5leHBvcnQgY29uc3QgZmlsZUljb25zOiBGaWxlSWNvbnMgPSB7XG4gIGRlZmF1bHRJY29uOiB7IG5hbWU6ICdmaWxlJyB9LFxuICBpY29uczogW1xuICAgIHsgbmFtZTogJ3dvcmQnLCBmaWxlRXh0ZW5zaW9uczogWydkb2MnLCAnZG9jeCcsICdydGYnXSB9LFxuICAgIHsgbmFtZTogJ3BkZicsIGZpbGVFeHRlbnNpb25zOiBbJ3BkZiddIH0sXG4gICAgeyBuYW1lOiAndGFibGUnLCBmaWxlRXh0ZW5zaW9uczogWyd4bHN4JywgJ3hscycsICdjc3YnLCAndHN2J10gfSxcbiAgICB7XG4gICAgICBuYW1lOiAnaHRtbCcsXG4gICAgICBmaWxlRXh0ZW5zaW9uczogWydodG1sJywgJ2h0bScsICd4aHRtbCcsICdodG1sX3ZtJywgJ2FzcCddXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnbWFya2Rvd24nLFxuICAgICAgZmlsZUV4dGVuc2lvbnM6IFsnbWQnLCAnbWFya2Rvd24nLCAncnN0J11cbiAgICB9LFxuICAgIHsgbmFtZTogJ3lhbWwnLCBmaWxlRXh0ZW5zaW9uczogWyd5YW1sJywgJ1lBTUwtdG1MYW5ndWFnZScsICd5bWwnXSB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICd4bWwnLFxuICAgICAgZmlsZUV4dGVuc2lvbnM6IFtcbiAgICAgICAgJ3htbCcsXG4gICAgICAgICdwbGlzdCcsXG4gICAgICAgICd4c2QnLFxuICAgICAgICAnZHRkJyxcbiAgICAgICAgJ3hzbCcsXG4gICAgICAgICd4c2x0JyxcbiAgICAgICAgJ3Jlc3gnLFxuICAgICAgICAnaW1sJyxcbiAgICAgICAgJ3hxdWVyeScsXG4gICAgICAgICd0bUxhbmd1YWdlJyxcbiAgICAgICAgJ21hbmlmZXN0JyxcbiAgICAgICAgJ3Byb2plY3QnXG4gICAgICBdLFxuICAgICAgZmlsZU5hbWVzOiBbJy5odGFjY2VzcyddXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnaW1hZ2UnLFxuICAgICAgZmlsZUV4dGVuc2lvbnM6IFtcbiAgICAgICAgJ3BuZycsXG4gICAgICAgICdqcGVnJyxcbiAgICAgICAgJ2pwZycsXG4gICAgICAgICdnaWYnLFxuICAgICAgICAnc3ZnJyxcbiAgICAgICAgJ2ljbycsXG4gICAgICAgICd0aWYnLFxuICAgICAgICAndGlmZicsXG4gICAgICAgICdwc2QnLFxuICAgICAgICAncHNiJyxcbiAgICAgICAgJ2FtaScsXG4gICAgICAgICdhcHgnLFxuICAgICAgICAnYm1wJyxcbiAgICAgICAgJ2JwZycsXG4gICAgICAgICdicmsnLFxuICAgICAgICAnY3VyJyxcbiAgICAgICAgJ2RkcycsXG4gICAgICAgICdkbmcnLFxuICAgICAgICAnZXhyJyxcbiAgICAgICAgJ2ZweCcsXG4gICAgICAgICdnYnInLFxuICAgICAgICAnaW1nJyxcbiAgICAgICAgJ2piaWcyJyxcbiAgICAgICAgJ2piMicsXG4gICAgICAgICdqbmcnLFxuICAgICAgICAnanhyJyxcbiAgICAgICAgJ3BibScsXG4gICAgICAgICdwZ2YnLFxuICAgICAgICAncGljJyxcbiAgICAgICAgJ3JhdycsXG4gICAgICAgICd3ZWJwJyxcbiAgICAgICAgJ2VwcydcbiAgICAgIF1cbiAgICB9LFxuICAgIHsgbmFtZTogJ3RleCcsIGZpbGVFeHRlbnNpb25zOiBbJ3RleCcsICdjbHMnLCAnc3R5J10gfSxcbiAgICB7XG4gICAgICBuYW1lOiAncG93ZXJwb2ludCcsXG4gICAgICBmaWxlRXh0ZW5zaW9uczogW1xuICAgICAgICAncHB0eCcsXG4gICAgICAgICdwcHQnLFxuICAgICAgICAncHB0bScsXG4gICAgICAgICdwb3R4JyxcbiAgICAgICAgJ3BvdG0nLFxuICAgICAgICAncHBzeCcsXG4gICAgICAgICdwcHNtJyxcbiAgICAgICAgJ3BwcycsXG4gICAgICAgICdwcGFtJyxcbiAgICAgICAgJ3BwYSdcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICd2aWRlbycsXG4gICAgICBmaWxlRXh0ZW5zaW9uczogW1xuICAgICAgICAnd2VibScsXG4gICAgICAgICdta3YnLFxuICAgICAgICAnZmx2JyxcbiAgICAgICAgJ3ZvYicsXG4gICAgICAgICdvZ3YnLFxuICAgICAgICAnb2dnJyxcbiAgICAgICAgJ2dpZnYnLFxuICAgICAgICAnYXZpJyxcbiAgICAgICAgJ21vdicsXG4gICAgICAgICdxdCcsXG4gICAgICAgICd3bXYnLFxuICAgICAgICAneXV2JyxcbiAgICAgICAgJ3JtJyxcbiAgICAgICAgJ3JtdmInLFxuICAgICAgICAnbXA0JyxcbiAgICAgICAgJ200dicsXG4gICAgICAgICdtcGcnLFxuICAgICAgICAnbXAyJyxcbiAgICAgICAgJ21wZWcnLFxuICAgICAgICAnbXBlJyxcbiAgICAgICAgJ21wdicsXG4gICAgICAgICdtMnYnXG4gICAgICBdXG4gICAgfSxcbiAgICB7IG5hbWU6ICdhdWRpbycsIGZpbGVFeHRlbnNpb25zOiBbJ21wMycsICdmbGFjJywgJ200YScsICd3bWEnLCAnYWlmZiddIH0sXG4gICAgeyBuYW1lOiAnZG9jdW1lbnQnLCBmaWxlRXh0ZW5zaW9uczogWyd0eHQnXSB9XG4gIF1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRGaWxlSWNvbk5hbWUgPSAoZmlsZW5hbWU6IHN0cmluZykgPT4ge1xuICBmaWxlbmFtZSA9IGZpbGVuYW1lLnRvTG93ZXJDYXNlKCk7XG4gIGlmICghZmlsZW5hbWUgfHwgIWZpbGVuYW1lLmluY2x1ZGVzKCcuJykpIHtcbiAgICByZXR1cm4gZmlsZUljb25zLmRlZmF1bHRJY29uLm5hbWU7XG4gIH1cbiAgY29uc3QgZXh0ID0gZ2V0RmlsZUV4dGVuc2lvbihmaWxlbmFtZSk7XG4gIGNvbnN0IG1hdGNoZXNFeHQgPSBmaWxlSWNvbnMuaWNvbnMuZmlsdGVyKFxuICAgIHggPT4gISF4LmZpbGVFeHRlbnNpb25zICYmICEheC5maWxlRXh0ZW5zaW9ucy5maWx0ZXIoeSA9PiB5ID09PSBleHQpLmxlbmd0aFxuICApO1xuICBjb25zdCBtYXRjaGVzRmlsZW5hbWUgPSBmaWxlSWNvbnMuaWNvbnMuZmlsdGVyKFxuICAgIHggPT4gISF4LmZpbGVOYW1lcyAmJiAhIXguZmlsZU5hbWVzLmZpbHRlcih5ID0+IHkgPT09IGZpbGVuYW1lKS5sZW5ndGhcbiAgKTtcbiAgaWYgKCEhbWF0Y2hlc0ZpbGVuYW1lLmxlbmd0aCkge1xuICAgIHJldHVybiBtYXRjaGVzRmlsZW5hbWVbMF0ubmFtZTtcbiAgfSBlbHNlIGlmICghIW1hdGNoZXNFeHQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNFeHRbMF0ubmFtZTtcbiAgfVxuXG4gIHJldHVybiBmaWxlSWNvbnMuZGVmYXVsdEljb24ubmFtZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0ZpbGVJbWFnZSA9IChmaWxlbmFtZTogc3RyaW5nKSA9PlxuICBnZXRGaWxlSWNvbk5hbWUoZmlsZW5hbWUpID09PSAnaW1hZ2UnO1xuXG5leHBvcnQgY29uc3QgZ2V0RmlsZUV4dGVuc2lvbiA9IChmaWxlbmFtZTogc3RyaW5nKSA9PiBmaWxlbmFtZS5zcGxpdCgnLicpLnBvcCgpO1xuXG5leHBvcnQgY29uc3QgZ2V0RmlsZU5hbWUgPSAoZmlsZW5hbWU6IHN0cmluZykgPT5cbiAgZmlsZW5hbWUuc3BsaXQoJy4nKS5zbGljZSgtMiwgLTEpWzBdO1xuXG5leHBvcnQgY29uc3QgZ2V0RmlsZUljb24gPSAoZmlsZW5hbWU6IHN0cmluZykgPT4ge1xuICByZXR1cm4gJy9hc3NldHMvZmlsZWljb25zLycgKyBnZXRGaWxlSWNvbk5hbWUoZmlsZW5hbWUpICsgJy5zdmcnO1xufTtcbiJdfQ==
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
const /** @type {?} */ folderIcons = [
    {
        name: 'specific',
        defaultIcon: { name: 'folder-aws' },
        rootFolder: { name: 'folder-root' },
        icons: [
            { name: 'folder-src', folderNames: ['src', 'source', 'sources'] },
            { name: 'folder-dist', folderNames: ['dist', 'out', 'build', 'release'] },
            {
                name: 'folder-css',
                folderNames: ['css', 'stylesheet', 'stylesheets', 'style', 'styles']
            },
            { name: 'folder-sass', folderNames: ['sass', '_sass', 'scss', '_scss'] },
            {
                name: 'folder-images',
                folderNames: [
                    'images',
                    'image',
                    'img',
                    'icons',
                    'icon',
                    'ico',
                    'screenshot',
                    'screenshots'
                ]
            },
            { name: 'folder-scripts', folderNames: ['script', 'scripts'] },
            { name: 'folder-node', folderNames: ['node_modules'] },
            {
                name: 'folder-javascript',
                folderNames: ['js', 'javascript', 'javascripts']
            },
            { name: 'folder-font', folderNames: ['font', 'fonts'] },
            { name: 'folder-bower', folderNames: ['bower_components'] },
            {
                name: 'folder-test',
                folderNames: [
                    'test',
                    'tests',
                    'testing',
                    '__tests__',
                    '__snapshots__',
                    '__mocks__',
                    '__test__',
                    'spec',
                    'specs'
                ]
            },
            {
                name: 'folder-jinja',
                folderNames: ['jinja', 'jinja2', 'j2'],
                light: true
            },
            { name: 'folder-markdown', folderNames: ['markdown', 'md'] },
            { name: 'folder-php', folderNames: ['php'] },
            { name: 'folder-phpmailer', folderNames: ['phpmailer'] },
            { name: 'folder-sublime', folderNames: ['sublime'] },
            {
                name: 'folder-docs',
                folderNames: ['doc', 'docs', 'documents', 'documentation']
            },
            {
                name: 'folder-git',
                folderNames: ['.git', 'submodules', '.submodules']
            },
            { name: 'folder-github', folderNames: ['.github'] },
            { name: 'folder-gitlab', folderNames: ['.gitlab'] },
            { name: 'folder-vscode', folderNames: ['.vscode', '.vscode-test'] },
            {
                name: 'folder-views',
                folderNames: [
                    'view',
                    'views',
                    'screen',
                    'screens',
                    'page',
                    'pages',
                    'html'
                ]
            },
            { name: 'folder-vue', folderNames: ['vue'] },
            { name: 'folder-expo', folderNames: ['.expo'] },
            {
                name: 'folder-config',
                folderNames: [
                    'config',
                    'configs',
                    'configuration',
                    'configurations',
                    'settings',
                    'META-INF'
                ]
            },
            {
                name: 'folder-i18n',
                folderNames: [
                    'i18n',
                    'internationalization',
                    'lang',
                    'language',
                    'languages',
                    'locale',
                    'locales',
                    'localization',
                    'translation',
                    'translations'
                ]
            },
            { name: 'folder-components', folderNames: ['components'] },
            { name: 'folder-aurelia', folderNames: ['aurelia_project'] },
            {
                name: 'folder-resource',
                folderNames: [
                    'resource',
                    'resources',
                    'res',
                    'asset',
                    'assets',
                    'static'
                ]
            },
            {
                name: 'folder-lib',
                folderNames: ['lib', 'libs', 'library', 'libraries']
            },
            {
                name: 'folder-theme',
                folderNames: ['themes', 'theme', 'color', 'colors', 'design', 'designs']
            },
            { name: 'folder-webpack', folderNames: ['webpack'] },
            { name: 'folder-global', folderNames: ['global'] },
            { name: 'folder-public', folderNames: ['public', 'wwwroot'] },
            {
                name: 'folder-include',
                folderNames: ['include', 'includes', '_includes']
            },
            { name: 'folder-docker', folderNames: ['docker', '.docker'] },
            { name: 'folder-ngrx-effects', folderNames: ['effects'] },
            { name: 'folder-ngrx-state', folderNames: ['states', 'state'] },
            { name: 'folder-ngrx-reducer', folderNames: ['reducers', 'reducer'] },
            { name: 'folder-ngrx-actions', folderNames: ['actions'] },
            { name: 'folder-ngrx-entities', folderNames: ['entities'] },
            { name: 'folder-redux-reducer', folderNames: ['reducers', 'reducer'] },
            { name: 'folder-redux-actions', folderNames: ['actions'] },
            { name: 'folder-redux-store', folderNames: ['store'] },
            { name: 'folder-react-components', folderNames: ['components'] },
            {
                name: 'folder-database',
                folderNames: ['db', 'database', 'sql', 'data', '_data']
            },
            { name: 'folder-log', folderNames: ['log', 'logs'] },
            {
                name: 'folder-temp',
                folderNames: [
                    'temp',
                    '.temp',
                    'tmp',
                    '.tmp',
                    'cached',
                    'cache',
                    '.cache'
                ]
            },
            { name: 'folder-aws', folderNames: ['aws', '.aws'] },
            { name: 'folder-audio', folderNames: ['audio', 'audios', 'music'] },
            {
                name: 'folder-video',
                folderNames: ['video', 'videos', 'movie', 'movies']
            },
            { name: 'folder-kubernetes', folderNames: ['kubernetes', 'k8s'] },
            { name: 'folder-import', folderNames: ['import', 'imports', 'imported'] },
            { name: 'folder-export', folderNames: ['export', 'exports', 'exported'] },
            { name: 'folder-wakatime', folderNames: ['wakatime'] },
            { name: 'folder-circleci', folderNames: ['.circleci'] },
            { name: 'folder-wordpress', folderNames: ['wp-content'] },
            { name: 'folder-gradle', folderNames: ['gradle', '.gradle'] },
            { name: 'folder-coverage', folderNames: ['coverage', '.nyc-output'] },
            {
                name: 'folder-class',
                folderNames: ['class', 'classes', 'model', 'models']
            },
            {
                name: 'folder-other',
                folderNames: ['other', 'others', 'misc', 'miscellaneous']
            },
            { name: 'folder-typescript', folderNames: ['typescript', 'ts'] },
            { name: 'folder-routes', folderNames: ['routes'] },
            { name: 'folder-ci', folderNames: ['.ci', 'ci'] },
            {
                name: 'folder-benchmark',
                folderNames: [
                    'benchmark',
                    'benchmarks',
                    'performance',
                    'measure',
                    'measures',
                    'measurement'
                ]
            },
            {
                name: 'folder-messages',
                folderNames: [
                    'messages',
                    'forum',
                    'chat',
                    'chats',
                    'conversation',
                    'conversations'
                ]
            },
            { name: 'folder-less', folderNames: ['less'] },
            { name: 'folder-python', folderNames: ['python', '__pycache__'] },
            { name: 'folder-debug', folderNames: ['debug', 'debugging'] },
            { name: 'folder-fastlane', folderNames: ['fastlane'] },
            {
                name: 'folder-plugin',
                folderNames: [
                    'plugin',
                    'plugins',
                    '_plugins',
                    'extension',
                    'extensions',
                    'addon',
                    'addons'
                ]
            },
            {
                name: 'folder-controller',
                folderNames: ['controller', 'controllers', 'service', 'services']
            },
            { name: 'folder-ansible', folderNames: ['ansible'] },
            { name: 'folder-server', folderNames: ['server', 'servers', 'backend'] },
            { name: 'folder-client', folderNames: ['client', 'clients', 'frontend'] },
            { name: 'folder-tasks', folderNames: ['tasks', 'tickets'] },
            { name: 'folder-android', folderNames: ['android'] },
            { name: 'folder-ios', folderNames: ['ios'] },
            { name: 'folder-upload', folderNames: ['uploads', 'upload'] },
            { name: 'folder-download', folderNames: ['downloads', 'download'] },
            { name: 'folder-tools', folderNames: ['tools'] },
            { name: 'folder-helper', folderNames: ['helpers', 'helper'] }
        ]
    },
    {
        name: 'classic',
        defaultIcon: { name: 'folder' },
        rootFolder: { name: 'folder-root' }
    },
    { name: 'none', defaultIcon: { name: '' } }
];
const /** @type {?} */ getFileIconName = (input) => {
    if (!input || !input.includes('.')) {
        return fileIcons.defaultIcon.name;
    }
    const /** @type {?} */ filename = input.toLowerCase();
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
const ɵ0 = getFileIconName;
const /** @type {?} */ isFileImage = (filename) => getFileIconName(filename) === 'image';
const ɵ1 = isFileImage;
const /** @type {?} */ getFileExtension = (filename) => filename.split('.').pop();
const ɵ2 = getFileExtension;
const /** @type {?} */ getFileName = (filename) => {
    const /** @type {?} */ slashSegments = filename.split('/');
    const /** @type {?} */ filenameWithExt = slashSegments.pop();
    const /** @type {?} */ dotSegments = filenameWithExt.split('.');
    if (dotSegments.length < 2) {
        return filenameWithExt;
    }
    dotSegments.pop();
    return dotSegments.join('.');
};
const ɵ3 = getFileName;
const /** @type {?} */ getFolderIconName = (filename) => {
    return 'folder-other';
    filename = filename.toLowerCase();
    const /** @type {?} */ matches = folderIcons[0].icons.filter(x => !!x.folderNames && !!x.folderNames.filter(y => y === filename).length);
    if (!!matches.length) {
        return matches[0].name;
    }
    return folderIcons[0].defaultIcon.name;
};
const ɵ4 = getFolderIconName;
export const /** @type {?} */ guesser = {
    isFileImage,
    getFileExtension,
    getFileName,
    getFolderIconName,
    getFileIconName,
};
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pY29uLWd1ZXNzZXIuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvU2hpdmFuZy9QaSBTb2Z0d2FyZS9maWxlLW1hbmFnZXIvbmd4LWZpbGVtYW5hZ2VyL3Byb2plY3RzL25neC1maWxlbWFuYWdlci1jbGllbnQtZmlyZWJhc2Uvc3JjLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2ZpbGUtaWNvbi1ndWVzc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxR0EsTUFBTSxPQUFPLFNBQVM7Q0FVckI7Ozs7Ozs7Ozs7Ozs7QUFFRCxNQUFNLENBQUMsdUJBQU0sU0FBUyxHQUFjO0lBQ2xDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDN0IsS0FBSyxFQUFFO1FBQ0wsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDeEQsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3hDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRTtRQUNoRTtZQUNFLElBQUksRUFBRSxNQUFNO1lBQ1osY0FBYyxFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQztTQUMzRDtRQUNEO1lBQ0UsSUFBSSxFQUFFLFVBQVU7WUFDaEIsY0FBYyxFQUFFLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUM7U0FDMUM7UUFDRCxF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QUFDO0lBQ3RCLFFBQVEsR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsdUJBQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQzNFLENBQUM7SUFDRixJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1FBQ3BCLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztLQUN4QjtJQUVELE9BQU8sV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7Q0FDeEMsQ0FBQzs7QUFFRixNQUFNLENBQUMsdUJBQU0sT0FBTyxHQUFHO0lBQ3JCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0NBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIEZpbGVJY29uIHtcbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIGljb24sIGUuZy4gJ2phdmFzY3JpcHQnXG4gICAqL1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlZmluZSB0aGUgZmlsZSBleHRlbnNpb25zIHRoYXQgc2hvdWxkIHVzZSB0aGlzIGljb24uXG4gICAqIEUuZy4gWydqcyddXG4gICAqL1xuICBmaWxlRXh0ZW5zaW9ucz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBEZWZpbmUgaWYgdGhlcmUgYXJlIHNvbWUgc3RhdGljIGZpbGUgbmFtZXMgdGhhdCBzaG91bGQgYXBwbHkgdGhpcyBpY29uLlxuICAgKiBFLmcuIFsnc2FtcGxlLmpzJ11cbiAgICovXG4gIGZpbGVOYW1lcz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBEZWZpbmUgaWYgdGhlcmUgaXMgYSBsaWdodCBpY29uIGF2YWlsYWJsZS5cbiAgICovXG4gIGxpZ2h0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGVmaW5lIGlmIHRoZXJlIGlzIGEgaGlnaCBjb250cmFzdCBpY29uIGF2YWlsYWJsZS5cbiAgICovXG4gIGhpZ2hDb250cmFzdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERlZmluZSBpZiB0aGUgaWNvbiBzaG91bGQgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9sZGVyVGhlbWUge1xuICAvKipcbiAgICogTmFtZSBvZiB0aGUgdGhlbWVcbiAgICovXG4gIG5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogRGVmaW5lIHRoZSBkZWZhdWx0IGljb24gZm9yIGZvbGRlcnMgaW4gYSB0aGVtZS5cbiAgICovXG4gIGRlZmF1bHRJY29uOiBEZWZhdWx0SWNvbjtcblxuICAvKipcbiAgICogSWNvbiBmb3Igcm9vdCBmb2xkZXJzLlxuICAgKi9cbiAgcm9vdEZvbGRlcj86IERlZmF1bHRJY29uO1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIGZvbGRlciBpY29ucyBmb3Igc3BlY2lmaWMgZm9sZGVyIG5hbWVzLlxuICAgKi9cbiAgaWNvbnM/OiBGb2xkZXJJY29uW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9sZGVySWNvbiB7XG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBpY29uLCBlLmcuICdzcmMnXG4gICAqL1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlZmluZSB0aGUgZm9sZGVyIG5hbWVzIHRoYXQgc2hvdWxkIGFwcGx5IHRoZSBpY29uLlxuICAgKiBFLmcuIFsnc3JjJywgJ3NvdXJjZSddXG4gICAqL1xuICBmb2xkZXJOYW1lczogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIERlZmluZSBpZiB0aGVyZSBpcyBhIGxpZ2h0IGljb24gYXZhaWxhYmxlLlxuICAgKi9cbiAgbGlnaHQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEZWZpbmUgaWYgdGhlcmUgaXMgYSBoaWdoIGNvbnRyYXN0IGljb24gYXZhaWxhYmxlLlxuICAgKi9cbiAgaGlnaENvbnRyYXN0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGVmaW5lIGlmIHRoZSBpY29uIHNob3VsZCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0SWNvbiB7XG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBpY29uLCBlLmcuICdzcmMnXG4gICAqL1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlZmluZSBpZiB0aGVyZSBpcyBhIGxpZ2h0IGljb24gYXZhaWxhYmxlLlxuICAgKi9cbiAgbGlnaHQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEZWZpbmUgaWYgdGhlcmUgaXMgYSBoaWdoIGNvbnRyYXN0IGljb24gYXZhaWxhYmxlLlxuICAgKi9cbiAgaGlnaENvbnRyYXN0PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVJY29ucyB7XG4gIC8qKlxuICAgKiBEZWZpbmUgdGhlIGRlZmF1bHQgaWNvbiBmb3IgZmlsZXMuXG4gICAqL1xuICBkZWZhdWx0SWNvbjogRGVmYXVsdEljb247XG5cbiAgLyoqXG4gICAqIERlZmluZXMgYWxsIGZvbGRlciBpY29ucy5cbiAgICovXG4gIGljb25zPzogRmlsZUljb25bXTtcbn1cblxuZXhwb3J0IGNvbnN0IGZpbGVJY29uczogRmlsZUljb25zID0ge1xuICBkZWZhdWx0SWNvbjogeyBuYW1lOiAnZmlsZScgfSxcbiAgaWNvbnM6IFtcbiAgICB7IG5hbWU6ICd3b3JkJywgZmlsZUV4dGVuc2lvbnM6IFsnZG9jJywgJ2RvY3gnLCAncnRmJ10gfSxcbiAgICB7IG5hbWU6ICdwZGYnLCBmaWxlRXh0ZW5zaW9uczogWydwZGYnXSB9LFxuICAgIHsgbmFtZTogJ3RhYmxlJywgZmlsZUV4dGVuc2lvbnM6IFsneGxzeCcsICd4bHMnLCAnY3N2JywgJ3RzdiddIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2h0bWwnLFxuICAgICAgZmlsZUV4dGVuc2lvbnM6IFsnaHRtbCcsICdodG0nLCAneGh0bWwnLCAnaHRtbF92bScsICdhc3AnXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ21hcmtkb3duJyxcbiAgICAgIGZpbGVFeHRlbnNpb25zOiBbJ21kJywgJ21hcmtkb3duJywgJ3JzdCddXG4gICAgfSxcbiAgICB7IG5hbWU6ICd5YW1sJywgZmlsZUV4dGVuc2lvbnM6IFsneWFtbCcsICdZQU1MLXRtTGFuZ3VhZ2UnLCAneW1sJ10gfSxcbiAgICB7XG4gICAgICBuYW1lOiAneG1sJyxcbiAgICAgIGZpbGVFeHRlbnNpb25zOiBbXG4gICAgICAgICd4bWwnLFxuICAgICAgICAncGxpc3QnLFxuICAgICAgICAneHNkJyxcbiAgICAgICAgJ2R0ZCcsXG4gICAgICAgICd4c2wnLFxuICAgICAgICAneHNsdCcsXG4gICAgICAgICdyZXN4JyxcbiAgICAgICAgJ2ltbCcsXG4gICAgICAgICd4cXVlcnknLFxuICAgICAgICAndG1MYW5ndWFnZScsXG4gICAgICAgICdtYW5pZmVzdCcsXG4gICAgICAgICdwcm9qZWN0J1xuICAgICAgXSxcbiAgICAgIGZpbGVOYW1lczogWycuaHRhY2Nlc3MnXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2ltYWdlJyxcbiAgICAgIGZpbGVFeHRlbnNpb25zOiBbXG4gICAgICAgICdwbmcnLFxuICAgICAgICAnanBlZycsXG4gICAgICAgICdqcGcnLFxuICAgICAgICAnZ2lmJyxcbiAgICAgICAgJ3N2ZycsXG4gICAgICAgICdpY28nLFxuICAgICAgICAndGlmJyxcbiAgICAgICAgJ3RpZmYnLFxuICAgICAgICAncHNkJyxcbiAgICAgICAgJ3BzYicsXG4gICAgICAgICdhbWknLFxuICAgICAgICAnYXB4JyxcbiAgICAgICAgJ2JtcCcsXG4gICAgICAgICdicGcnLFxuICAgICAgICAnYnJrJyxcbiAgICAgICAgJ2N1cicsXG4gICAgICAgICdkZHMnLFxuICAgICAgICAnZG5nJyxcbiAgICAgICAgJ2V4cicsXG4gICAgICAgICdmcHgnLFxuICAgICAgICAnZ2JyJyxcbiAgICAgICAgJ2ltZycsXG4gICAgICAgICdqYmlnMicsXG4gICAgICAgICdqYjInLFxuICAgICAgICAnam5nJyxcbiAgICAgICAgJ2p4cicsXG4gICAgICAgICdwYm0nLFxuICAgICAgICAncGdmJyxcbiAgICAgICAgJ3BpYycsXG4gICAgICAgICdyYXcnLFxuICAgICAgICAnd2VicCcsXG4gICAgICAgICdlcHMnXG4gICAgICBdXG4gICAgfSxcbiAgICB7IG5hbWU6ICd0ZXgnLCBmaWxlRXh0ZW5zaW9uczogWyd0ZXgnLCAnY2xzJywgJ3N0eSddIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3Bvd2VycG9pbnQnLFxuICAgICAgZmlsZUV4dGVuc2lvbnM6IFtcbiAgICAgICAgJ3BwdHgnLFxuICAgICAgICAncHB0JyxcbiAgICAgICAgJ3BwdG0nLFxuICAgICAgICAncG90eCcsXG4gICAgICAgICdwb3RtJyxcbiAgICAgICAgJ3Bwc3gnLFxuICAgICAgICAncHBzbScsXG4gICAgICAgICdwcHMnLFxuICAgICAgICAncHBhbScsXG4gICAgICAgICdwcGEnXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAndmlkZW8nLFxuICAgICAgZmlsZUV4dGVuc2lvbnM6IFtcbiAgICAgICAgJ3dlYm0nLFxuICAgICAgICAnbWt2JyxcbiAgICAgICAgJ2ZsdicsXG4gICAgICAgICd2b2InLFxuICAgICAgICAnb2d2JyxcbiAgICAgICAgJ29nZycsXG4gICAgICAgICdnaWZ2JyxcbiAgICAgICAgJ2F2aScsXG4gICAgICAgICdtb3YnLFxuICAgICAgICAncXQnLFxuICAgICAgICAnd212JyxcbiAgICAgICAgJ3l1dicsXG4gICAgICAgICdybScsXG4gICAgICAgICdybXZiJyxcbiAgICAgICAgJ21wNCcsXG4gICAgICAgICdtNHYnLFxuICAgICAgICAnbXBnJyxcbiAgICAgICAgJ21wMicsXG4gICAgICAgICdtcGVnJyxcbiAgICAgICAgJ21wZScsXG4gICAgICAgICdtcHYnLFxuICAgICAgICAnbTJ2J1xuICAgICAgXVxuICAgIH0sXG4gICAgeyBuYW1lOiAnYXVkaW8nLCBmaWxlRXh0ZW5zaW9uczogWydtcDMnLCAnZmxhYycsICdtNGEnLCAnd21hJywgJ2FpZmYnXSB9LFxuICAgIHsgbmFtZTogJ2RvY3VtZW50JywgZmlsZUV4dGVuc2lvbnM6IFsndHh0J10gfVxuICBdXG59O1xuXG5jb25zdCBmb2xkZXJJY29uczogRm9sZGVyVGhlbWVbXSA9IFtcbiAge1xuICAgIG5hbWU6ICdzcGVjaWZpYycsXG4gICAgZGVmYXVsdEljb246IHsgbmFtZTogJ2ZvbGRlci1hd3MnIH0sXG4gICAgcm9vdEZvbGRlcjogeyBuYW1lOiAnZm9sZGVyLXJvb3QnIH0sXG4gICAgaWNvbnM6IFtcbiAgICAgIHsgbmFtZTogJ2ZvbGRlci1zcmMnLCBmb2xkZXJOYW1lczogWydzcmMnLCAnc291cmNlJywgJ3NvdXJjZXMnXSB9LFxuICAgICAgeyBuYW1lOiAnZm9sZGVyLWRpc3QnLCBmb2xkZXJOYW1lczogWydkaXN0JywgJ291dCcsICdidWlsZCcsICdyZWxlYXNlJ10gfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2ZvbGRlci1jc3MnLFxuICAgICAgICBmb2xkZXJOYW1lczogWydjc3MnLCAnc3R5bGVzaGVldCcsICdzdHlsZXNoZWV0cycsICdzdHlsZScsICdzdHlsZXMnXVxuICAgICAgfSxcbiAgICAgIHsgbmFtZTogJ2ZvbGRlci1zYXNzJywgZm9sZGVyTmFtZXM6IFsnc2FzcycsICdfc2FzcycsICdzY3NzJywgJ19zY3NzJ10gfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2ZvbGRlci1pbWFnZXMnLFxuICAgICAgICBmb2xkZXJOYW1lczogW1xuICAgICAgICAgICdpbWFnZXMnLFxuICAgICAgICAgICdpbWFnZScsXG4gICAgICAgICAgJ2ltZycsXG4gICAgICAgICAgJ2ljb25zJyxcbiAgICAgICAgICAnaWNvbicsXG4gICAgICAgICAgJ2ljbycsXG4gICAgICAgICAgJ3NjcmVlbnNob3QnLFxuICAgICAgICAgICdzY3JlZW5zaG90cydcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHsgbmFtZTogJ2ZvbGRlci1zY3JpcHRzJywgZm9sZGVyTmFtZXM6IFsnc2NyaXB0JywgJ3NjcmlwdHMnXSB9LFxuICAgICAgeyBuYW1lOiAnZm9sZGVyLW5vZGUnLCBmb2xkZXJOYW1lczogWydub2RlX21vZHVsZXMnXSB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnZm9sZGVyLWphdmFzY3JpcHQnLFxuICAgICAgICBmb2xkZXJOYW1lczogWydqcycsICdqYXZhc2NyaXB0JywgJ2phdmFzY3JpcHRzJ11cbiAgICAgIH0sXG4gICAgICB7IG5hbWU6ICdmb2xkZXItZm9udCcsIGZvbGRlck5hbWVzOiBbJ2ZvbnQnLCAnZm9udHMnXSB9LFxuICAgICAgeyBuYW1lOiAnZm9sZGVyLWJvd2VyJywgZm9sZGVyTmFtZXM6IFsnYm93ZXJfY29tcG9uZW50cyddIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdmb2xkZXItdGVzdCcsXG4gICAgICAgIGZvbGRlck5hbWVzOiBbXG4gICAgICAgICAgJ3Rlc3QnLFxuICAgICAgICAgICd0ZXN0cycsXG4gICAgICAgICAgJ3Rlc3RpbmcnLFxuICAgICAgICAgICdfX3Rlc3RzX18nLFxuICAgICAgICAgICdfX3NuYXBzaG90c19fJyxcbiAgICAgICAgICAnX19tb2Nrc19fJyxcbiAgICAgICAgICAnX190ZXN0X18nLFxuICAgICAgICAgICdzcGVjJyxcbiAgICAgICAgICAnc3BlY3MnXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdmb2xkZXItamluamEnLFxuICAgICAgICBmb2xkZXJOYW1lczogWydqaW5qYScsICdqaW5qYTInLCAnajInXSxcbiAgICAgICAgbGlnaHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7IG5hbWU6ICdmb2xkZXItbWFya2Rvd24nLCBmb2xkZXJOYW1lczogWydtYXJrZG93bicsICdtZCddIH0sXG4gICAgICB7IG5hbWU6ICdmb2xkZXItcGhwJywgZm9sZGVyTmFtZXM6IFsncGhwJ10gfSxcbiAgICAgIHsgbmFtZTogJ2ZvbGRlci1waHBtYWlsZXInLCBmb2xkZXJOYW1lczogWydwaHBtYWlsZXInXSB9LFxuICAgICAgeyBuYW1lOiAnZm9sZGVyLXN1YmxpbWUnLCBmb2xkZXJOYW1lczogWydzdWJsaW1lJ10gfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2ZvbGRlci1kb2NzJyxcbiAgICAgICAgZm9sZGVyTmFtZXM6IFsnZG9jJywgJ2RvY3MnLCAnZG9jdW1lbnRzJywgJ2RvY3VtZW50YXRpb24nXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2ZvbGRlci1naXQnLFxuICAgICAgICBmb2xkZXJOYW1lczogWycuZ2l0JywgJ3N1Ym1vZHVsZXMnLCAnLnN1Ym1vZHVsZXMnXVxuICAgICAgfSxcbiAgICAgIHsgbmFtZTogJ2ZvbGRlci1naXRodWInLCBmb2xkZXJOYW1lczogWycuZ2l0aHViJ10gfSxcbiAgICAgIHsgbmFtZTogJ2ZvbGRlci1naXRsYWInLCBmb2xkZXJOYW1lczogWycuZ2l0bGFiJ10gfSxcbiAgICAgIHsgbmFtZTogJ2ZvbGRlci12c2NvZGUnLCBmb2xkZXJOYW1lczogWycudnNjb2RlJywgJy52c2NvZGUtdGVzdCddIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdmb2xkZXItdmlld3MnLFxuICAgICAgICBmb2xkZXJOYW1lczogW1xuICAgICAgICAgICd2aWV3JyxcbiAgICAgICAgICAndmlld3MnLFxuICAgICAgICAgICdzY3JlZW4nLFxuICAgICAgICAgICdzY3JlZW5zJyxcbiAgICAgICAgICAncGFnZScsXG4gICAgICAgICAgJ3BhZ2VzJyxcbiAgICAgICAgICAnaHRtbCdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHsgbmFtZTogJ2ZvbGRlci12dWUnLCBmb2xkZXJOYW1lczogWyd2dWUnXSB9LFxuICAgICAgeyBuYW1lOiAnZm9sZGVyLWV4cG8nLCBmb2xkZXJOYW1lczogWycuZXhwbyddIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdmb2xkZXItY29uZmlnJyxcbiAgICAgICAgZm9sZGVyTmFtZXM6IFtcbiAgICAgICAgICAnY29uZmlnJyxcbiAgICAgICAgICAnY29uZmlncycsXG4gICAgICAgICAgJ2NvbmZpZ3VyYXRpb24nLFxuICAgICAgICAgICdjb25maWd1cmF0aW9ucycsXG4gICAgICAgICAgJ3NldHRpbmdzJyxcbiAgICAgICAgICAnTUVUQS1JTkYnXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdmb2xkZXItaTE4bicsXG4gICAgICAgIGZvbGRlck5hbWVzOiBbXG4gICAgICAgICAgJ2kxOG4nLFxuICAgICAgICAgICdpbnRlcm5hdGlvbmFsaXphdGlvbicsXG4gICAgICAgICAgJ2xhbmcnLFxuICAgICAgICAgICdsYW5ndWFnZScsXG4gICAgICAgICAgJ2xhbmd1YWdlcycsXG4gICAgICAgICAgJ2xvY2FsZScsXG4gICAgICAgICAgJ2xvY2FsZXMnLFxuICAgICAgICAgICdsb2NhbGl6YXRpb24nLFxuICAgICAgICAgICd0cmFuc2xhdGlvbicsXG4gICAgICAgICAgJ3RyYW5zbGF0aW9ucydcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHsgbmFtZTogJ2ZvbGRlci1jb21wb25lbnRzJywgZm9sZGVyTmFtZXM6IFsnY29tcG9uZW50cyddIH0sXG4gICAgICB7IG5hbWU6ICdmb2xkZXItYXVyZWxpYScsIGZvbGRlck5hbWVzOiBbJ2F1cmVsaWFfcHJvamVjdCddIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdmb2xkZXItcmVzb3VyY2UnLFxuICAgICAgICBmb2xkZXJOYW1lczogW1xuICAgICAgICAgICdyZXNvdXJjZScsXG4gICAgICAgICAgJ3Jlc291cmNlcycsXG4gICAgICAgICAgJ3JlcycsXG4gICAgICAgICAgJ2Fzc2V0JyxcbiAgICAgICAgICAnYXNzZXRzJyxcbiAgICAgICAgICAnc3RhdGljJ1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnZm9sZGVyLWxpYicsXG4gICAgICAgIGZvbGRlck5hbWVzOiBbJ2xpYicsICdsaWJzJywgJ2xpYnJhcnknLCAnbGlicmFyaWVzJ11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdmb2xkZXItdGhlbWUnLFxuICAgICAgICBmb2xkZXJOYW1lczogWyd0aGVtZXMnLCAndGhlbWUnLCAnY29sb3InLCAnY29sb3JzJywgJ2Rlc2lnbicsICdkZXNpZ25zJ11cbiAgICAgIH0sXG4gICAgICB7IG5hbWU6ICdmb2xkZXItd2VicGFjaycsIGZvbGRlck5hbWVzOiBbJ3dlYnBhY2snXSB9LFxuICAgICAgeyBuYW1lOiAnZm9sZGVyLWdsb2JhbCcsIGZvbGRlck5hbWVzOiBbJ2dsb2JhbCddIH0sXG4gICAgICB7IG5hbWU6ICdmb2xkZXItcHVibGljJywgZm9sZGVyTmFtZXM6IFsncHVibGljJywgJ3d3d3Jvb3QnXSB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnZm9sZGVyLWluY2x1ZGUnLFxuICAgICAgICBmb2xkZXJOYW1lczogWydpbmNsdWRlJywgJ2luY2x1ZGVzJywgJ19pbmNsdWRlcyddXG4gICAgICB9LFxuICAgICAgeyBuYW1lOiAnZm9sZGVyLWRvY2tlcicsIGZvbGRlck5hbWVzOiBbJ2RvY2tlcicsICcuZG9ja2VyJ10gfSxcbiAgICAgIHsgbmFtZTogJ2ZvbGRlci1uZ3J4LWVmZmVjdHMnLCBmb2xkZXJOYW1lczogWydlZmZlY3RzJ10gfSxcbiAgICAgIHsgbmFtZTogJ2ZvbGRlci1uZ3J4LXN0YXRlJywgZm9sZGVyTmFtZXM6IFsnc3RhdGVzJywgJ3N0YXRlJ10gfSxcbiAgICAgIHsgbmFtZTogJ2ZvbGRlci1uZ3J4LXJlZHVjZXInLCBmb2xkZXJOYW1lczogWydyZWR1Y2VycycsICdyZWR1Y2VyJ10gfSxcbiAgICAgIHsgbmFtZTogJ2ZvbGRlci1uZ3J4LWFjdGlvbnMnLCBmb2xkZXJOYW1lczogWydhY3Rpb25zJ10gfSxcbiAgICAgIHsgbmFtZTogJ2ZvbGRlci1uZ3J4LWVudGl0aWVzJywgZm9sZGVyTmFtZXM6IFsnZW50aXRpZXMnXSB9LFxuICAgICAgeyBuYW1lOiAnZm9sZGVyLXJlZHV4LXJlZHVjZXInLCBmb2xkZXJOYW1lczogWydyZWR1Y2VycycsICdyZWR1Y2VyJ10gfSxcbiAgICAgIHsgbmFtZTogJ2ZvbGRlci1yZWR1eC1hY3Rpb25zJywgZm9sZGVyTmFtZXM6IFsnYWN0aW9ucyddIH0sXG4gICAgICB7IG5hbWU6ICdmb2xkZXItcmVkdXgtc3RvcmUnLCBmb2xkZXJOYW1lczogWydzdG9yZSddIH0sXG4gICAgICB7IG5hbWU6ICdmb2xkZXItcmVhY3QtY29tcG9uZW50cycsIGZvbGRlck5hbWVzOiBbJ2NvbXBvbmVudHMnXSB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnZm9sZGVyLWRhdGFiYXNlJyxcbiAgICAgICAgZm9sZGVyTmFtZXM6IFsnZGInLCAnZGF0YWJhc2UnLCAnc3FsJywgJ2RhdGEnLCAnX2RhdGEnXVxuICAgICAgfSxcbiAgICAgIHsgbmFtZTogJ2ZvbGRlci1sb2cnLCBmb2xkZXJOYW1lczogWydsb2cnLCAnbG9ncyddIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdmb2xkZXItdGVtcCcsXG4gICAgICAgIGZvbGRlck5hbWVzOiBbXG4gICAgICAgICAgJ3RlbXAnLFxuICAgICAgICAgICcudGVtcCcsXG4gICAgICAgICAgJ3RtcCcsXG4gICAgICAgICAgJy50bXAnLFxuICAgICAgICAgICdjYWNoZWQnLFxuICAgICAgICAgICdjYWNoZScsXG4gICAgICAgICAgJy5jYWNoZSdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHsgbmFtZTogJ2ZvbGRlci1hd3MnLCBmb2xkZXJOYW1lczogWydhd3MnLCAnLmF3cyddIH0sXG4gICAgICB7IG5hbWU6ICdmb2xkZXItYXVkaW8nLCBmb2xkZXJOYW1lczogWydhdWRpbycsICdhdWRpb3MnLCAnbXVzaWMnXSB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnZm9sZGVyLXZpZGVvJyxcbiAgICAgICAgZm9sZGVyTmFtZXM6IFsndmlkZW8nLCAndmlkZW9zJywgJ21vdmllJywgJ21vdmllcyddXG4gICAgICB9LFxuICAgICAgeyBuYW1lOiAnZm9sZGVyLWt1YmVybmV0ZXMnLCBmb2xkZXJOYW1lczogWydrdWJlcm5ldGVzJywgJ2s4cyddIH0sXG4gICAgICB7IG5hbWU6ICdmb2xkZXItaW1wb3J0JywgZm9sZGVyTmFtZXM6IFsnaW1wb3J0JywgJ2ltcG9ydHMnLCAnaW1wb3J0ZWQnXSB9LFxuICAgICAgeyBuYW1lOiAnZm9sZGVyLWV4cG9ydCcsIGZvbGRlck5hbWVzOiBbJ2V4cG9ydCcsICdleHBvcnRzJywgJ2V4cG9ydGVkJ10gfSxcbiAgICAgIHsgbmFtZTogJ2ZvbGRlci13YWthdGltZScsIGZvbGRlck5hbWVzOiBbJ3dha2F0aW1lJ10gfSxcbiAgICAgIHsgbmFtZTogJ2ZvbGRlci1jaXJjbGVjaScsIGZvbGRlck5hbWVzOiBbJy5jaXJjbGVjaSddIH0sXG4gICAgICB7IG5hbWU6ICdmb2xkZXItd29yZHByZXNzJywgZm9sZGVyTmFtZXM6IFsnd3AtY29udGVudCddIH0sXG4gICAgICB7IG5hbWU6ICdmb2xkZXItZ3JhZGxlJywgZm9sZGVyTmFtZXM6IFsnZ3JhZGxlJywgJy5ncmFkbGUnXSB9LFxuICAgICAgeyBuYW1lOiAnZm9sZGVyLWNvdmVyYWdlJywgZm9sZGVyTmFtZXM6IFsnY292ZXJhZ2UnLCAnLm55Yy1vdXRwdXQnXSB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnZm9sZGVyLWNsYXNzJyxcbiAgICAgICAgZm9sZGVyTmFtZXM6IFsnY2xhc3MnLCAnY2xhc3NlcycsICdtb2RlbCcsICdtb2RlbHMnXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2ZvbGRlci1vdGhlcicsXG4gICAgICAgIGZvbGRlck5hbWVzOiBbJ290aGVyJywgJ290aGVycycsICdtaXNjJywgJ21pc2NlbGxhbmVvdXMnXVxuICAgICAgfSxcbiAgICAgIHsgbmFtZTogJ2ZvbGRlci10eXBlc2NyaXB0JywgZm9sZGVyTmFtZXM6IFsndHlwZXNjcmlwdCcsICd0cyddIH0sXG4gICAgICB7IG5hbWU6ICdmb2xkZXItcm91dGVzJywgZm9sZGVyTmFtZXM6IFsncm91dGVzJ10gfSxcbiAgICAgIHsgbmFtZTogJ2ZvbGRlci1jaScsIGZvbGRlck5hbWVzOiBbJy5jaScsICdjaSddIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdmb2xkZXItYmVuY2htYXJrJyxcbiAgICAgICAgZm9sZGVyTmFtZXM6IFtcbiAgICAgICAgICAnYmVuY2htYXJrJyxcbiAgICAgICAgICAnYmVuY2htYXJrcycsXG4gICAgICAgICAgJ3BlcmZvcm1hbmNlJyxcbiAgICAgICAgICAnbWVhc3VyZScsXG4gICAgICAgICAgJ21lYXN1cmVzJyxcbiAgICAgICAgICAnbWVhc3VyZW1lbnQnXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdmb2xkZXItbWVzc2FnZXMnLFxuICAgICAgICBmb2xkZXJOYW1lczogW1xuICAgICAgICAgICdtZXNzYWdlcycsXG4gICAgICAgICAgJ2ZvcnVtJyxcbiAgICAgICAgICAnY2hhdCcsXG4gICAgICAgICAgJ2NoYXRzJyxcbiAgICAgICAgICAnY29udmVyc2F0aW9uJyxcbiAgICAgICAgICAnY29udmVyc2F0aW9ucydcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHsgbmFtZTogJ2ZvbGRlci1sZXNzJywgZm9sZGVyTmFtZXM6IFsnbGVzcyddIH0sXG4gICAgICB7IG5hbWU6ICdmb2xkZXItcHl0aG9uJywgZm9sZGVyTmFtZXM6IFsncHl0aG9uJywgJ19fcHljYWNoZV9fJ10gfSxcbiAgICAgIHsgbmFtZTogJ2ZvbGRlci1kZWJ1ZycsIGZvbGRlck5hbWVzOiBbJ2RlYnVnJywgJ2RlYnVnZ2luZyddIH0sXG4gICAgICB7IG5hbWU6ICdmb2xkZXItZmFzdGxhbmUnLCBmb2xkZXJOYW1lczogWydmYXN0bGFuZSddIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdmb2xkZXItcGx1Z2luJyxcbiAgICAgICAgZm9sZGVyTmFtZXM6IFtcbiAgICAgICAgICAncGx1Z2luJyxcbiAgICAgICAgICAncGx1Z2lucycsXG4gICAgICAgICAgJ19wbHVnaW5zJyxcbiAgICAgICAgICAnZXh0ZW5zaW9uJyxcbiAgICAgICAgICAnZXh0ZW5zaW9ucycsXG4gICAgICAgICAgJ2FkZG9uJyxcbiAgICAgICAgICAnYWRkb25zJ1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnZm9sZGVyLWNvbnRyb2xsZXInLFxuICAgICAgICBmb2xkZXJOYW1lczogWydjb250cm9sbGVyJywgJ2NvbnRyb2xsZXJzJywgJ3NlcnZpY2UnLCAnc2VydmljZXMnXVxuICAgICAgfSxcbiAgICAgIHsgbmFtZTogJ2ZvbGRlci1hbnNpYmxlJywgZm9sZGVyTmFtZXM6IFsnYW5zaWJsZSddIH0sXG4gICAgICB7IG5hbWU6ICdmb2xkZXItc2VydmVyJywgZm9sZGVyTmFtZXM6IFsnc2VydmVyJywgJ3NlcnZlcnMnLCAnYmFja2VuZCddIH0sXG4gICAgICB7IG5hbWU6ICdmb2xkZXItY2xpZW50JywgZm9sZGVyTmFtZXM6IFsnY2xpZW50JywgJ2NsaWVudHMnLCAnZnJvbnRlbmQnXSB9LFxuICAgICAgeyBuYW1lOiAnZm9sZGVyLXRhc2tzJywgZm9sZGVyTmFtZXM6IFsndGFza3MnLCAndGlja2V0cyddIH0sXG4gICAgICB7IG5hbWU6ICdmb2xkZXItYW5kcm9pZCcsIGZvbGRlck5hbWVzOiBbJ2FuZHJvaWQnXSB9LFxuICAgICAgeyBuYW1lOiAnZm9sZGVyLWlvcycsIGZvbGRlck5hbWVzOiBbJ2lvcyddIH0sXG4gICAgICB7IG5hbWU6ICdmb2xkZXItdXBsb2FkJywgZm9sZGVyTmFtZXM6IFsndXBsb2FkcycsICd1cGxvYWQnXSB9LFxuICAgICAgeyBuYW1lOiAnZm9sZGVyLWRvd25sb2FkJywgZm9sZGVyTmFtZXM6IFsnZG93bmxvYWRzJywgJ2Rvd25sb2FkJ10gfSxcbiAgICAgIHsgbmFtZTogJ2ZvbGRlci10b29scycsIGZvbGRlck5hbWVzOiBbJ3Rvb2xzJ10gfSxcbiAgICAgIHsgbmFtZTogJ2ZvbGRlci1oZWxwZXInLCBmb2xkZXJOYW1lczogWydoZWxwZXJzJywgJ2hlbHBlciddIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnY2xhc3NpYycsXG4gICAgZGVmYXVsdEljb246IHsgbmFtZTogJ2ZvbGRlcicgfSxcbiAgICByb290Rm9sZGVyOiB7IG5hbWU6ICdmb2xkZXItcm9vdCcgfVxuICB9LFxuICB7IG5hbWU6ICdub25lJywgZGVmYXVsdEljb246IHsgbmFtZTogJycgfSB9XG5dO1xuXG5jb25zdCBnZXRGaWxlSWNvbk5hbWUgPSAoaW5wdXQ6IHN0cmluZykgPT4ge1xuICBpZiAoIWlucHV0IHx8ICFpbnB1dC5pbmNsdWRlcygnLicpKSB7XG4gICAgcmV0dXJuIGZpbGVJY29ucy5kZWZhdWx0SWNvbi5uYW1lO1xuICB9XG4gIGNvbnN0IGZpbGVuYW1lID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgZXh0ID0gZ2V0RmlsZUV4dGVuc2lvbihmaWxlbmFtZSk7XG5cbiAgY29uc3QgbWF0Y2hlc0V4dCA9IGZpbGVJY29ucy5pY29ucy5maWx0ZXIoXG4gICAgeCA9PiAhIXguZmlsZUV4dGVuc2lvbnMgJiYgISF4LmZpbGVFeHRlbnNpb25zLmZpbHRlcih5ID0+IHkgPT09IGV4dCkubGVuZ3RoXG4gICk7XG4gIGNvbnN0IG1hdGNoZXNGaWxlbmFtZSA9IGZpbGVJY29ucy5pY29ucy5maWx0ZXIoXG4gICAgeCA9PiAhIXguZmlsZU5hbWVzICYmICEheC5maWxlTmFtZXMuZmlsdGVyKHkgPT4geSA9PT0gZmlsZW5hbWUpLmxlbmd0aFxuICApO1xuICBpZiAoISFtYXRjaGVzRmlsZW5hbWUubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNGaWxlbmFtZVswXS5uYW1lO1xuICB9IGVsc2UgaWYgKCEhbWF0Y2hlc0V4dC5sZW5ndGgpIHtcbiAgICByZXR1cm4gbWF0Y2hlc0V4dFswXS5uYW1lO1xuICB9XG5cbiAgcmV0dXJuIGZpbGVJY29ucy5kZWZhdWx0SWNvbi5uYW1lO1xufTtcblxuY29uc3QgaXNGaWxlSW1hZ2UgPSAoZmlsZW5hbWU6IHN0cmluZykgPT4gZ2V0RmlsZUljb25OYW1lKGZpbGVuYW1lKSA9PT0gJ2ltYWdlJztcblxuY29uc3QgZ2V0RmlsZUV4dGVuc2lvbiA9IChmaWxlbmFtZTogc3RyaW5nKSA9PiBmaWxlbmFtZS5zcGxpdCgnLicpLnBvcCgpO1xuXG5jb25zdCBnZXRGaWxlTmFtZSA9IChmaWxlbmFtZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHNsYXNoU2VnbWVudHMgPSBmaWxlbmFtZS5zcGxpdCgnLycpO1xuICBjb25zdCBmaWxlbmFtZVdpdGhFeHQgPSBzbGFzaFNlZ21lbnRzLnBvcCgpO1xuICBjb25zdCBkb3RTZWdtZW50cyA9IGZpbGVuYW1lV2l0aEV4dC5zcGxpdCgnLicpO1xuICBpZiAoZG90U2VnbWVudHMubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBmaWxlbmFtZVdpdGhFeHQ7XG4gIH1cbiAgZG90U2VnbWVudHMucG9wKCk7XG4gIHJldHVybiBkb3RTZWdtZW50cy5qb2luKCcuJyk7XG59O1xuXG5jb25zdCBnZXRGb2xkZXJJY29uTmFtZSA9IChmaWxlbmFtZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiAnZm9sZGVyLW90aGVyJztcbiAgZmlsZW5hbWUgPSBmaWxlbmFtZS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBtYXRjaGVzID0gZm9sZGVySWNvbnNbMF0uaWNvbnMuZmlsdGVyKFxuICAgIHggPT4gISF4LmZvbGRlck5hbWVzICYmICEheC5mb2xkZXJOYW1lcy5maWx0ZXIoeSA9PiB5ID09PSBmaWxlbmFtZSkubGVuZ3RoXG4gICk7XG4gIGlmICghIW1hdGNoZXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNbMF0ubmFtZTtcbiAgfVxuXG4gIHJldHVybiBmb2xkZXJJY29uc1swXS5kZWZhdWx0SWNvbi5uYW1lO1xufTtcblxuZXhwb3J0IGNvbnN0IGd1ZXNzZXIgPSB7XG4gIGlzRmlsZUltYWdlLFxuICBnZXRGaWxlRXh0ZW5zaW9uLFxuICBnZXRGaWxlTmFtZSxcbiAgZ2V0Rm9sZGVySWNvbk5hbWUsXG4gIGdldEZpbGVJY29uTmFtZSxcbn07XG4iXX0=
export interface FileIcon {
    /**
     * Name of the icon, e.g. 'javascript'
     */
    name: string;
    /**
     * Define the file extensions that should use this icon.
     * E.g. ['js']
     */
    fileExtensions?: string[];
    /**
     * Define if there are some static file names that should apply this icon.
     * E.g. ['sample.js']
     */
    fileNames?: string[];
    /**
     * Define if there is a light icon available.
     */
    light?: boolean;
    /**
     * Define if there is a high contrast icon available.
     */
    highContrast?: boolean;
    /**
     * Define if the icon should be disabled.
     */
    disabled?: boolean;
}
export interface FolderTheme {
    /**
     * Name of the theme
     */
    name: string;
    /**
     * Define the default icon for folders in a theme.
     */
    defaultIcon: DefaultIcon;
    /**
     * Icon for root folders.
     */
    rootFolder?: DefaultIcon;
    /**
     * Defines folder icons for specific folder names.
     */
    icons?: FolderIcon[];
}
export interface FolderIcon {
    /**
     * Name of the icon, e.g. 'src'
     */
    name: string;
    /**
     * Define the folder names that should apply the icon.
     * E.g. ['src', 'source']
     */
    folderNames: string[];
    /**
     * Define if there is a light icon available.
     */
    light?: boolean;
    /**
     * Define if there is a high contrast icon available.
     */
    highContrast?: boolean;
    /**
     * Define if the icon should be disabled.
     */
    disabled?: boolean;
}
export interface DefaultIcon {
    /**
     * Name of the icon, e.g. 'src'
     */
    name: string;
    /**
     * Define if there is a light icon available.
     */
    light?: boolean;
    /**
     * Define if there is a high contrast icon available.
     */
    highContrast?: boolean;
}
export declare class FileIcons {
    /**
     * Define the default icon for files.
     */
    defaultIcon: DefaultIcon;
    /**
     * Defines all folder icons.
     */
    icons?: FileIcon[];
}
export declare const fileIcons: FileIcons;
export declare const guesser: {
    isFileImage: (filename: string) => boolean;
    getFileExtension: (filename: string) => string;
    getFileName: (filename: string) => string;
    getFolderIconName: (filename: string) => string;
    getFileIconName: (input: string) => string;
};

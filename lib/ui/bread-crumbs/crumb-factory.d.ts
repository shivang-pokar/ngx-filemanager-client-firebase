export interface BreadCrumb {
    label: string;
    path?: string;
    icon?: string;
    virtualPath?: string;
}
export declare const crumbFactory: {
    MakeCrumbs: (virtualRoot: string, absolutePath: string) => BreadCrumb[];
};

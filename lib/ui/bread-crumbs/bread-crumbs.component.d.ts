import { EventEmitter } from '@angular/core';
import { BreadCrumb } from './crumb-factory';
import { FileManagerConfig } from '../../configuration/client-configuration';
import { LoggerService } from '../../services/logging/logger.service';
export declare class AppBreadCrumbsComponent {
    private logger;
    crumbs: BreadCrumb[];
    clickedCrumb: EventEmitter<string>;
    _currentPath: string;
    set currentPath(newPath: any);
    _config: FileManagerConfig;
    set config(newConfig: any);
    constructor(logger: LoggerService);
    private makeCrumbs;
    onClickCrumb(crumb: BreadCrumb): void;
}

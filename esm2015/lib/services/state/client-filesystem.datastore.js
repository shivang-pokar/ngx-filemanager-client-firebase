/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ClientCache } from './client-filesystem.cache';
import { BehaviorSubject } from 'rxjs';
import { EnsurePrefixSlash } from '../../utils/path-helpers';
import { ConsoleLoggerService } from '../logging/console-logger.service';
export class ClientFileSystemDataStore {
    constructor() {
        this.cache = new ClientCache();
        this._$currentFiles = new BehaviorSubject([]);
        this._$currentPath = new BehaviorSubject(null);
        this._$selectedFile = new BehaviorSubject(null);
        this.logger = new ConsoleLoggerService();
    }
    /**
     * @param {?} cache
     * @return {?}
     */
    SetCache(cache) {
        this.cache = cache;
    }
    /**
     * @return {?}
     */
    get $currentFiles() {
        return this._$currentFiles;
    }
    /**
     * @return {?}
     */
    get $currentPath() {
        return this._$currentPath;
    }
    /**
     * @return {?}
     */
    get $selectedFile() {
        return this._$selectedFile;
    }
    /**
     * @return {?}
     */
    CurrentPath() {
        return this._$currentPath.value;
    }
    /**
     * @return {?}
     */
    CurrentFiles() {
        return this._$currentFiles.value;
    }
    /**
     * @param {?} directoryPath
     * @return {?}
     */
    GetCached(directoryPath) {
        return this.cache.GetCached(directoryPath);
    }
    /**
     * @param {?} files
     * @param {?} directoryPath
     * @return {?}
     */
    SetDirectoryFiles(files, directoryPath) {
        this.cache.SetCached(directoryPath, files);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    SetPath(path) {
        const /** @type {?} */ pathParsed = EnsurePrefixSlash(path);
        this.logger.info('datastore.SetPath', { path, pathParsed });
        const /** @type {?} */ cachedFiles = this.cache.GetCached(pathParsed);
        this._$currentPath.next(pathParsed);
        this._$currentFiles.next(cachedFiles);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    SelectFile(item) {
        this._$selectedFile.next(item);
    }
    /**
     * @param {?} fullPath
     * @param {?} cwd
     * @return {?}
     */
    exists(fullPath, cwd) {
        const /** @type {?} */ filesInDir = this.cache.GetCached(cwd);
        const /** @type {?} */ exists = filesInDir.find(f => f.fullPath === fullPath);
        return !!exists;
    }
    /**
     * @return {?}
     */
    CloneStore() {
        const /** @type {?} */ newStore = new ClientFileSystemDataStore();
        newStore.SetPath(this.CurrentPath());
        newStore.SetDirectoryFiles(this._$currentFiles.getValue(), this.CurrentPath());
        newStore.SetCache(this.cache);
        return newStore;
    }
}
function ClientFileSystemDataStore_tsickle_Closure_declarations() {
    /** @type {?} */
    ClientFileSystemDataStore.prototype.cache;
    /** @type {?} */
    ClientFileSystemDataStore.prototype._$currentFiles;
    /** @type {?} */
    ClientFileSystemDataStore.prototype._$currentPath;
    /** @type {?} */
    ClientFileSystemDataStore.prototype._$selectedFile;
    /** @type {?} */
    ClientFileSystemDataStore.prototype.logger;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LWZpbGVzeXN0ZW0uZGF0YXN0b3JlLmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL1NoaXZhbmcvUGkgU29mdHdhcmUvZmlsZS1tYW5hZ2VyL25neC1maWxlbWFuYWdlci9wcm9qZWN0cy9uZ3gtZmlsZW1hbmFnZXItY2xpZW50LWZpcmViYXNlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zdGF0ZS9jbGllbnQtZmlsZXN5c3RlbS5kYXRhc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzdELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXpFLE1BQU0sT0FBTyx5QkFBeUI7O3FCQUNwQixJQUFJLFdBQVcsRUFBRTs4QkFFUixJQUFJLGVBQWUsQ0FBc0IsRUFBRSxDQUFDOzZCQUM3QyxJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUM7OEJBQ2hDLElBQUksZUFBZSxDQUFvQixJQUFJLENBQUM7c0JBRXBELElBQUksb0JBQW9CLEVBQUU7Ozs7OztJQUVwQyxRQUFRLENBQUMsS0FBa0I7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Ozs7O1FBR1YsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7Ozs7O1FBRWxCLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDOzs7OztRQUVqQixhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQzs7Ozs7SUFHdEIsV0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDOzs7OztJQUUzQixZQUFZO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7Ozs7OztJQUU1QixTQUFTLENBQUMsYUFBcUI7UUFDcEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7Ozs7OztJQUV0QyxpQkFBaUIsQ0FBQyxLQUEwQixFQUFFLGFBQXFCO1FBQ3hFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQzs7Ozs7O0lBRXRDLE9BQU8sQ0FBQyxJQUFZO1FBQ3pCLHVCQUFNLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzVELHVCQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzs7Ozs7O0lBRXhDLFVBQVUsQ0FBQyxJQUF1QjtRQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNoQzs7Ozs7O0lBQ0QsTUFBTSxDQUFDLFFBQWdCLEVBQUUsR0FBVztRQUNsQyx1QkFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsdUJBQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFDO1FBQzdELE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQztLQUNqQjs7OztJQUVELFVBQVU7UUFDUix1QkFBTSxRQUFRLEdBQUcsSUFBSSx5QkFBeUIsRUFBRSxDQUFDO1FBQ2pELFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDckMsUUFBUSxDQUFDLGlCQUFpQixDQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxFQUM5QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQ25CLENBQUM7UUFDRixRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixPQUFPLFFBQVEsQ0FBQztLQUNqQjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZVR5cGVzIH0gZnJvbSAnLi4vLi4vLi4vY29yZS10eXBlcyc7XG5pbXBvcnQgeyBDbGllbnRDYWNoZSB9IGZyb20gJy4vY2xpZW50LWZpbGVzeXN0ZW0uY2FjaGUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBFbnN1cmVQcmVmaXhTbGFzaCB9IGZyb20gJy4uLy4uL3V0aWxzL3BhdGgtaGVscGVycyc7XG5pbXBvcnQgeyBDb25zb2xlTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL2xvZ2dpbmcvY29uc29sZS1sb2dnZXIuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBDbGllbnRGaWxlU3lzdGVtRGF0YVN0b3JlIHtcbiAgcHJpdmF0ZSBjYWNoZSA9IG5ldyBDbGllbnRDYWNoZSgpO1xuXG4gIHByaXZhdGUgXyRjdXJyZW50RmlsZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENvcmVUeXBlcy5SZXNGaWxlW10+KFtdKTtcbiAgcHJpdmF0ZSBfJGN1cnJlbnRQYXRoID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xuICBwcml2YXRlIF8kc2VsZWN0ZWRGaWxlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDb3JlVHlwZXMuUmVzRmlsZT4obnVsbCk7XG5cbiAgcHJpdmF0ZSBsb2dnZXIgPSBuZXcgQ29uc29sZUxvZ2dlclNlcnZpY2UoKTtcblxuICBwdWJsaWMgU2V0Q2FjaGUoY2FjaGU6IENsaWVudENhY2hlKSB7XG4gICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xuICB9XG5cbiAgcHVibGljIGdldCAkY3VycmVudEZpbGVzKCk6IE9ic2VydmFibGU8Q29yZVR5cGVzLlJlc0ZpbGVbXT4ge1xuICAgIHJldHVybiB0aGlzLl8kY3VycmVudEZpbGVzO1xuICB9XG4gIHB1YmxpYyBnZXQgJGN1cnJlbnRQYXRoKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuXyRjdXJyZW50UGF0aDtcbiAgfVxuICBwdWJsaWMgZ2V0ICRzZWxlY3RlZEZpbGUoKTogT2JzZXJ2YWJsZTxDb3JlVHlwZXMuUmVzRmlsZT4ge1xuICAgIHJldHVybiB0aGlzLl8kc2VsZWN0ZWRGaWxlO1xuICB9XG5cbiAgcHVibGljIEN1cnJlbnRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLl8kY3VycmVudFBhdGgudmFsdWU7XG4gIH1cbiAgcHVibGljIEN1cnJlbnRGaWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fJGN1cnJlbnRGaWxlcy52YWx1ZTtcbiAgfVxuICBwdWJsaWMgR2V0Q2FjaGVkKGRpcmVjdG9yeVBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmNhY2hlLkdldENhY2hlZChkaXJlY3RvcnlQYXRoKTtcbiAgfVxuICBwdWJsaWMgU2V0RGlyZWN0b3J5RmlsZXMoZmlsZXM6IENvcmVUeXBlcy5SZXNGaWxlW10sIGRpcmVjdG9yeVBhdGg6IHN0cmluZykge1xuICAgIHRoaXMuY2FjaGUuU2V0Q2FjaGVkKGRpcmVjdG9yeVBhdGgsIGZpbGVzKTtcbiAgfVxuICBwdWJsaWMgU2V0UGF0aChwYXRoOiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXRoUGFyc2VkID0gRW5zdXJlUHJlZml4U2xhc2gocGF0aCk7XG4gICAgdGhpcy5sb2dnZXIuaW5mbygnZGF0YXN0b3JlLlNldFBhdGgnLCB7IHBhdGgsIHBhdGhQYXJzZWQgfSk7XG4gICAgY29uc3QgY2FjaGVkRmlsZXMgPSB0aGlzLmNhY2hlLkdldENhY2hlZChwYXRoUGFyc2VkKTtcbiAgICB0aGlzLl8kY3VycmVudFBhdGgubmV4dChwYXRoUGFyc2VkKTtcbiAgICB0aGlzLl8kY3VycmVudEZpbGVzLm5leHQoY2FjaGVkRmlsZXMpO1xuICB9XG4gIFNlbGVjdEZpbGUoaXRlbTogQ29yZVR5cGVzLlJlc0ZpbGUpIHtcbiAgICB0aGlzLl8kc2VsZWN0ZWRGaWxlLm5leHQoaXRlbSk7XG4gIH1cbiAgZXhpc3RzKGZ1bGxQYXRoOiBzdHJpbmcsIGN3ZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZmlsZXNJbkRpciA9IHRoaXMuY2FjaGUuR2V0Q2FjaGVkKGN3ZCk7XG4gICAgY29uc3QgZXhpc3RzID0gZmlsZXNJbkRpci5maW5kKGYgPT4gZi5mdWxsUGF0aCA9PT0gZnVsbFBhdGgpO1xuICAgIHJldHVybiAhIWV4aXN0cztcbiAgfVxuXG4gIENsb25lU3RvcmUoKTogQ2xpZW50RmlsZVN5c3RlbURhdGFTdG9yZSB7XG4gICAgY29uc3QgbmV3U3RvcmUgPSBuZXcgQ2xpZW50RmlsZVN5c3RlbURhdGFTdG9yZSgpO1xuICAgIG5ld1N0b3JlLlNldFBhdGgodGhpcy5DdXJyZW50UGF0aCgpKTtcbiAgICBuZXdTdG9yZS5TZXREaXJlY3RvcnlGaWxlcyhcbiAgICAgIHRoaXMuXyRjdXJyZW50RmlsZXMuZ2V0VmFsdWUoKSxcbiAgICAgIHRoaXMuQ3VycmVudFBhdGgoKVxuICAgICk7XG4gICAgbmV3U3RvcmUuU2V0Q2FjaGUodGhpcy5jYWNoZSk7XG4gICAgcmV0dXJuIG5ld1N0b3JlO1xuICB9XG59XG4iXX0=
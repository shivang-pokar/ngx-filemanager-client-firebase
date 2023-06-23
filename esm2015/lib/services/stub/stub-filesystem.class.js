/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { __awaiter } from "tslib";
import path from 'path-browserify';
import { ConsoleLoggerService } from '../logging/console-logger.service';
import { EnsureTrailingSlash, Add2ToPathDir, Add2ToPath, EnsureNoTrailingSlash } from '../../utils/path-helpers';
import { stubFiles, MakeDir, MakeFile } from './stub-files';
export class FileSystemStub {
    constructor() {
        this.fakeDelayMs = 1000;
        this.logger = new ConsoleLoggerService();
        this.files = stubFiles;
    }
    /**
     * @param {?} newDelay
     * @return {?}
     */
    setFakeDelay(newDelay) {
        this.fakeDelayMs = newDelay;
    }
    /**
     * @return {?}
     */
    fakeDelay() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                }, this.fakeDelayMs);
            });
        });
    }
    /**
     * @param {?} items
     * @param {?} isMatch
     * @return {?}
     */
    selectMatches(items, isMatch) {
        const /** @type {?} */ itemsSet = new Set(items);
        if (isMatch) {
            return this.files.filter(f => itemsSet.has(f.fullPath));
        }
        else {
            return this.files.filter(f => !itemsSet.has(f.fullPath));
        }
    }
    /**
     * @param {?} dirPath
     * @param {?} filePath
     * @return {?}
     */
    isInDirectory(dirPath, filePath) {
        try {
            const /** @type {?} */ relative = path.relative(dirPath, filePath);
            const /** @type {?} */ isSubdir = relative && !relative.startsWith('..') && !relative.includes('/');
            return isSubdir;
        }
        catch (/** @type {?} */ error) {
            this.logger.warn('isInDirectory error', { dirPath, filePath, error });
            return false;
        }
    }
    /**
     * @param {?} inputPath
     * @return {?}
     */
    List(inputPath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            const /** @type {?} */ folderPath = this.ensurePrefixSlash(this.ensureTrailingSlash(inputPath));
            const /** @type {?} */ matches = this.files.filter(k => this.isInDirectory(folderPath, k.fullPath));
            this.logger.info('List', { folderPath, files: this.files, matches });
            return {
                result: matches
            };
        });
    }
    /**
     * @param {?} item
     * @param {?} newItemPath
     * @return {?}
     */
    Rename(item, newItemPath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            const /** @type {?} */ baseName = path.basename(newItemPath);
            this.selectMatches([item], true).map(match => {
                match.name = baseName;
                match.fullPath = newItemPath;
            });
            return null;
        });
    }
    /**
     * @param {?} item
     * @param {?} newPath
     * @return {?}
     */
    Move(item, newPath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            this.selectMatches([item], true).map(match => {
                match.fullPath = newPath;
            });
            return null;
        });
    }
    /**
     * @param {?} singleFileName
     * @param {?} newPath
     * @return {?}
     */
    Copy(singleFileName, newPath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            this.selectMatches([singleFileName], true).map(match => {
                const /** @type {?} */ copy = Object.assign({}, match);
                copy.fullPath = newPath;
                this.files.push(copy);
            });
            return null;
        });
    }
    /**
     * @param {?} item
     * @param {?} content
     * @return {?}
     */
    Edit(item, content) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            this.selectMatches([item], true).map(match => {
                match['content'] = content;
            });
            return null;
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    Getcontent(item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            const /** @type {?} */ matches = this.selectMatches([item], true);
            return [...matches].pop()['content'];
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    GetSingle(item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            const /** @type {?} */ matches = this.selectMatches([item], true);
            const /** @type {?} */ file = [...matches].pop();
            return {
                result: {
                    file,
                    url: file.downloadUrl,
                    success: true
                }
            };
        });
    }
    /**
     * @param {?} newPath
     * @param {?=} disableNoClobber
     * @return {?}
     */
    CreateFolder(newPath, disableNoClobber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            if (disableNoClobber) {
                const /** @type {?} */ directoryPath = EnsureTrailingSlash(newPath);
                this.files.push(MakeDir(directoryPath));
            }
            else {
                this.recursivelyTryToCreateFolder(newPath);
            }
            return null;
        });
    }
    /**
     * @param {?} newPath
     * @return {?}
     */
    recursivelyTryToCreateFolder(newPath) {
        const /** @type {?} */ directoryPath = EnsureTrailingSlash(newPath);
        const /** @type {?} */ exists = !!this.selectMatches([directoryPath], true).length;
        if (!exists) {
            this.files.push(MakeDir(directoryPath));
            return;
        }
        const /** @type {?} */ newPathWith2 = Add2ToPathDir(directoryPath);
        return this.recursivelyTryToCreateFolder(newPathWith2);
    }
    /**
     * @param {?} item
     * @param {?} role
     * @param {?} entity
     * @param {?=} recursive
     * @return {?}
     */
    SetPermissions(item, role, entity, recursive) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.SetPermissionsMultiple([item], role, entity, recursive);
        });
    }
    /**
     * @param {?} items
     * @param {?} newPath
     * @return {?}
     */
    CopyMultiple(items, newPath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            this.selectMatches(items, true).map(f => {
                const /** @type {?} */ copy = Object.assign({}, f);
                copy.fullPath = path.join(newPath, f.name);
                this.files.push(copy);
            });
            return null;
        });
    }
    /**
     * @param {?} items
     * @param {?} newPath
     * @return {?}
     */
    MoveMultiple(items, newPath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            this.selectMatches(items, true).map(f => {
                f.fullPath = path.join(newPath, f.name);
            });
            return null;
        });
    }
    /**
     * @param {?} items
     * @param {?} role
     * @param {?} entity
     * @param {?=} recursive
     * @return {?}
     */
    SetPermissionsMultiple(items, role, entity, recursive) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            this.logger.info('file-system-stub: SetPermissionsMultiple', {
                items,
                files: this.files
            });
            return this.recursivelySetPermissions(items, role, entity, recursive);
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    Upload(item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            this.recursivelyTryToAddFile(item);
            return null;
        });
    }
    /**
     * @param {?} filePath
     * @return {?}
     */
    recursivelyTryToAddFile(filePath) {
        const /** @type {?} */ parsedFilePath = EnsureNoTrailingSlash(filePath);
        const /** @type {?} */ exists = !!this.selectMatches([parsedFilePath], true).length;
        if (!exists) {
            this.files.push(MakeFile(parsedFilePath));
            return;
        }
        const /** @type {?} */ newPathWith2 = Add2ToPath(parsedFilePath);
        return this.recursivelyTryToAddFile(newPathWith2);
    }
    /**
     * @param {?} items
     * @param {?} role
     * @param {?} entity
     * @param {?=} recursive
     * @return {?}
     */
    recursivelySetPermissions(items, role, entity, recursive) {
        const /** @type {?} */ matches = this.selectMatches(items, true);
        matches.map(item => {
            this.setSinglePermission(item, role, entity);
            const /** @type {?} */ isFolder = item.type === 'dir';
            if (recursive && isFolder) {
                this.recursivelySetPermissions([item.fullPath], role, entity, recursive);
            }
        });
        return null;
    }
    /**
     * @param {?} item
     * @param {?} role
     * @param {?} entity
     * @return {?}
     */
    setSinglePermission(item, role, entity) {
        let /** @type {?} */ list;
        if (role === 'READER') {
            list = item.permissions.readers;
        }
        if (role === 'WRITER') {
            list = item.permissions.writers;
        }
        const /** @type {?} */ inListAlready = list.includes(entity);
        if (!inListAlready) {
            list.push(entity);
        }
    }
    /**
     * @param {?} items
     * @param {?} permissionsObj
     * @param {?=} recursive
     * @return {?}
     */
    SetPermissionsObjectMultiple(items, permissionsObj, recursive) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            const /** @type {?} */ matches = this.selectMatches(items, true);
            this.logger.info('file-system-stub: SetPermissionsMultiple', {
                items,
                matches,
                permissionsObj
            });
            this.recursivelySetPermissionsObjects(items, permissionsObj, recursive);
            return null;
        });
    }
    /**
     * @param {?} items
     * @param {?} permissionsObj
     * @param {?=} recursive
     * @return {?}
     */
    recursivelySetPermissionsObjects(items, permissionsObj, recursive) {
        const /** @type {?} */ matches = this.selectMatches(items, true);
        matches.map(item => {
            item.permissions = permissionsObj;
            const /** @type {?} */ isFolder = item.type === 'dir';
            if (recursive && isFolder) {
                this.recursivelySetPermissionsObjects([item.fullPath], permissionsObj, recursive);
            }
        });
        return null;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    Remove(items) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fakeDelay();
            const /** @type {?} */ itemsSet = new Set(items);
            const /** @type {?} */ itemsNotDeleted = this.files.filter(f => !itemsSet.has(f.fullPath));
            this.files = itemsNotDeleted;
            return null;
        });
    }
    /**
     * @return {?}
     */
    CloneProvider() {
        return new FileSystemStub();
    }
    /**
     * @param {?} inputPath
     * @return {?}
     */
    ensureTrailingSlash(inputPath) {
        const /** @type {?} */ hasTrailing = inputPath.slice(-1) === '/';
        if (hasTrailing) {
            return inputPath;
        }
        return inputPath + '/';
    }
    /**
     * @param {?} inputPath
     * @return {?}
     */
    ensurePrefixSlash(inputPath) {
        const /** @type {?} */ hasPrefix = inputPath.slice(0, 1) === '/';
        if (hasPrefix) {
            return inputPath;
        }
        return '/' + inputPath;
    }
    /**
     * @param {?} currentPath
     * @return {?}
     */
    GetUploadApiUrl(currentPath) {
        return 'https://httpbin.org/post';
    }
    /**
     * @param {?} file
     * @return {?}
     */
    CreateDownloadLink(file) {
        return __awaiter(this, void 0, void 0, function* () {
            return 'https://upload.wikimedia.org/wikipedia/commons/8/85/Exponential_Function_%28Abs_Imag_Part_at_Infinity%29_Density.png';
        });
    }
}
function FileSystemStub_tsickle_Closure_declarations() {
    /** @type {?} */
    FileSystemStub.prototype.fakeDelayMs;
    /** @type {?} */
    FileSystemStub.prototype.logger;
    /** @type {?} */
    FileSystemStub.prototype.files;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1Yi1maWxlc3lzdGVtLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL1NoaXZhbmcvUGkgU29mdHdhcmUvZmlsZS1tYW5hZ2VyL25neC1maWxlbWFuYWdlci9wcm9qZWN0cy9uZ3gtZmlsZW1hbmFnZXItY2xpZW50LWZpcmViYXNlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zdHViL3N0dWItZmlsZXN5c3RlbS5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sSUFBSSxNQUFNLGlCQUFpQixDQUFDO0FBRW5DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3pFLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsYUFBYSxFQUNiLFVBQVUsRUFDVixxQkFBcUIsRUFDdEIsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFNUQsTUFBTSxPQUFPLGNBQWM7OzJCQUNILElBQUk7UUFDMUIsY0FBUyxJQUFJLG9CQUFvQixFQUFFLENBQUM7cUJBRVAsU0FBUzs7Ozs7O0lBRS9CLFlBQVksQ0FBQyxRQUFnQjtRQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQzs7Ozs7SUFHaEIsU0FBUzs7WUFDckIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDckMsVUFBVSxDQUFDLEdBQUcsRUFBRTtvQkFDZCxPQUFPLEVBQUUsQ0FBQztpQkFDWCxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUN0QixDQUFDLENBQUM7Ozs7Ozs7O0lBRUcsYUFBYSxDQUFDLEtBQWUsRUFBRSxPQUFnQjtRQUNyRCx1QkFBTSxRQUFRLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFP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LEtBQUssR0FBRyxDQUFDO1FBQ2hELElBQUksU0FBUyxFQUFFO1lBQ2IsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxPQUFPLEdBQUcsR0FBRyxTQUFTLENBQUM7Ozs7OztJQUd6QixlQUFlLENBQUMsV0FBbUI7UUFDakMsT0FBTywwQkFBMEIsQ0FBQztLQUNuQzs7Ozs7SUFFSyxrQkFBa0IsQ0FBQyxJQUF1Qjs7WUFDOUMsT0FBTyxzSEFBc0gsQ0FBQzs7S0FDL0g7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgtYnJvd3NlcmlmeSc7XG5pbXBvcnQgeyBDb3JlVHlwZXMsIEZpbGVTeXN0ZW1Qcm92aWRlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUtdHlwZXMnO1xuaW1wb3J0IHsgQ29uc29sZUxvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi9sb2dnaW5nL2NvbnNvbGUtbG9nZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgRW5zdXJlVHJhaWxpbmdTbGFzaCxcbiAgQWRkMlRvUGF0aERpcixcbiAgQWRkMlRvUGF0aCxcbiAgRW5zdXJlTm9UcmFpbGluZ1NsYXNoXG59IGZyb20gJy4uLy4uL3V0aWxzL3BhdGgtaGVscGVycyc7XG5pbXBvcnQgeyBzdHViRmlsZXMsIE1ha2VEaXIsIE1ha2VGaWxlIH0gZnJvbSAnLi9zdHViLWZpbGVzJztcblxuZXhwb3J0IGNsYXNzIEZpbGVTeXN0ZW1TdHViIGltcGxlbWVudHMgRmlsZVN5c3RlbVByb3ZpZGVyIHtcbiAgcHJpdmF0ZSBmYWtlRGVsYXlNcyA9IDEwMDA7XG4gIGxvZ2dlciA9IG5ldyBDb25zb2xlTG9nZ2VyU2VydmljZSgpO1xuXG4gIGZpbGVzOiBDb3JlVHlwZXMuUmVzRmlsZVtdID0gc3R1YkZpbGVzO1xuXG4gIHB1YmxpYyBzZXRGYWtlRGVsYXkobmV3RGVsYXk6IG51bWJlcikge1xuICAgIHRoaXMuZmFrZURlbGF5TXMgPSBuZXdEZWxheTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZmFrZURlbGF5KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSwgdGhpcy5mYWtlRGVsYXlNcyk7XG4gICAgfSk7XG4gIH1cbiAgcHJpdmF0ZSBzZWxlY3RNYXRjaGVzKGl0ZW1zOiBzdHJpbmdbXSwgaXNNYXRjaDogYm9vbGVhbikge1xuICAgIGNvbnN0IGl0ZW1zU2V0ID0gbmV3IFNldChpdGVtcyk7XG4gICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbGVzLmZpbHRlcihmID0+IGl0ZW1zU2V0LmhhcyhmLmZ1bGxQYXRoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbGVzLmZpbHRlcihmID0+ICFpdGVtc1NldC5oYXMoZi5mdWxsUGF0aCkpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIGlzSW5EaXJlY3RvcnkoZGlyUGF0aCwgZmlsZVBhdGgpOiBib29sZWFuIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVsYXRpdmUgPSBwYXRoLnJlbGF0aXZlKGRpclBhdGgsIGZpbGVQYXRoKTtcbiAgICAgIGNvbnN0IGlzU3ViZGlyID1cbiAgICAgICAgcmVsYXRpdmUgJiYgIXJlbGF0aXZlLnN0YXJ0c1dpdGgoJy4uJykgJiYgIXJlbGF0aXZlLmluY2x1ZGVzKCcvJyk7XG4gICAgICByZXR1cm4gaXNTdWJkaXI7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMubG9nZ2VyLndhcm4oJ2lzSW5EaXJlY3RvcnkgZXJyb3InLCB7IGRpclBhdGgsIGZpbGVQYXRoLCBlcnJvciB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBMaXN0KGlucHV0UGF0aDogc3RyaW5nKTogUHJvbWlzZTxDb3JlVHlwZXMuUmVzQm9keUxpc3Q+IHtcbiAgICBhd2FpdCB0aGlzLmZha2VEZWxheSgpO1xuICAgIGNvbnN0IGZvbGRlclBhdGggPSB0aGlzLmVuc3VyZVByZWZpeFNsYXNoKFxuICAgICAgdGhpcy5lbnN1cmVUcmFpbGluZ1NsYXNoKGlucHV0UGF0aClcbiAgICApO1xuICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLmZpbGVzLmZpbHRlcihrID0+XG4gICAgICB0aGlzLmlzSW5EaXJlY3RvcnkoZm9sZGVyUGF0aCwgay5mdWxsUGF0aClcbiAgICApO1xuICAgIHRoaXMubG9nZ2VyLmluZm8oJ0xpc3QnLCB7IGZvbGRlclBhdGgsIGZpbGVzOiB0aGlzLmZpbGVzLCBtYXRjaGVzIH0pO1xuICAgIHJldHVybiB7XG4gICAgICByZXN1bHQ6IG1hdGNoZXNcbiAgICB9O1xuICB9XG4gIGFzeW5jIFJlbmFtZShcbiAgICBpdGVtOiBzdHJpbmcsXG4gICAgbmV3SXRlbVBhdGg6IHN0cmluZ1xuICApOiBQcm9taXNlPENvcmVUeXBlcy5SZXNCb2R5UmVuYW1lPiB7XG4gICAgYXdhaXQgdGhpcy5mYWtlRGVsYXkoKTtcbiAgICBjb25zdCBiYXNlTmFtZSA9IHBhdGguYmFzZW5hbWUobmV3SXRlbVBhdGgpO1xuICAgIHRoaXMuc2VsZWN0TWF0Y2hlcyhbaXRlbV0sIHRydWUpLm1hcChtYXRjaCA9PiB7XG4gICAgICBtYXRjaC5uYW1lID0gYmFzZU5hbWU7XG4gICAgICBtYXRjaC5mdWxsUGF0aCA9IG5ld0l0ZW1QYXRoO1xuICAgIH0pO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGFzeW5jIE1vdmUoaXRlbTogc3RyaW5nLCBuZXdQYXRoOiBzdHJpbmcpOiBQcm9taXNlPENvcmVUeXBlcy5SZXNCb2R5TW92ZT4ge1xuICAgIGF3YWl0IHRoaXMuZmFrZURlbGF5KCk7XG4gICAgdGhpcy5zZWxlY3RNYXRjaGVzKFtpdGVtXSwgdHJ1ZSkubWFwKG1hdGNoID0+IHtcbiAgICAgIG1hdGNoLmZ1bGxQYXRoID0gbmV3UGF0aDtcbiAgICB9KTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBhc3luYyBDb3B5KFxuICAgIHNpbmdsZUZpbGVOYW1lOiBzdHJpbmcsXG4gICAgbmV3UGF0aDogc3RyaW5nXG4gICk6IFByb21pc2U8Q29yZVR5cGVzLlJlc0JvZHlDb3B5PiB7XG4gICAgYXdhaXQgdGhpcy5mYWtlRGVsYXkoKTtcbiAgICB0aGlzLnNlbGVjdE1hdGNoZXMoW3NpbmdsZUZpbGVOYW1lXSwgdHJ1ZSkubWFwKG1hdGNoID0+IHtcbiAgICAgIGNvbnN0IGNvcHkgPSB7IC4uLm1hdGNoIH07XG4gICAgICBjb3B5LmZ1bGxQYXRoID0gbmV3UGF0aDtcbiAgICAgIHRoaXMuZmlsZXMucHVzaChjb3B5KTtcbiAgICB9KTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBhc3luYyBFZGl0KGl0ZW06IHN0cmluZywgY29udGVudDogc3RyaW5nKTogUHJvbWlzZTxDb3JlVHlwZXMuUmVzQm9keUVkaXQ+IHtcbiAgICBhd2FpdCB0aGlzLmZha2VEZWxheSgpO1xuICAgIHRoaXMuc2VsZWN0TWF0Y2hlcyhbaXRlbV0sIHRydWUpLm1hcChtYXRjaCA9PiB7XG4gICAgICBtYXRjaFsnY29udGVudCddID0gY29udGVudDtcbiAgICB9KTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBhc3luYyBHZXRjb250ZW50KGl0ZW06IHN0cmluZyk6IFByb21pc2U8Q29yZVR5cGVzLlJlc0JvZHlHZXRDb250ZW50PiB7XG4gICAgYXdhaXQgdGhpcy5mYWtlRGVsYXkoKTtcbiAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5zZWxlY3RNYXRjaGVzKFtpdGVtXSwgdHJ1ZSk7XG4gICAgcmV0dXJuIFsuLi5tYXRjaGVzXS5wb3AoKVsnY29udGVudCddO1xuICB9XG4gIGFzeW5jIEdldFNpbmdsZShpdGVtOiBzdHJpbmcpOiBQcm9taXNlPENvcmVUeXBlcy5SZXNCb2R5R2V0U2luZ2xlPiB7XG4gICAgYXdhaXQgdGhpcy5mYWtlRGVsYXkoKTtcbiAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5zZWxlY3RNYXRjaGVzKFtpdGVtXSwgdHJ1ZSk7XG4gICAgY29uc3QgZmlsZSA9IFsuLi5tYXRjaGVzXS5wb3AoKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0OiB7XG4gICAgICAgIGZpbGUsXG4gICAgICAgIHVybDogZmlsZS5kb3dubG9hZFVybCxcbiAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgfVxuICAgIH07XG4gIH1cbiAgYXN5bmMgQ3JlYXRlRm9sZGVyKG5ld1BhdGg6IHN0cmluZywgZGlzYWJsZU5vQ2xvYmJlcj86IGJvb2xlYW4pOiBQcm9taXNlPENvcmVUeXBlcy5SZXNCb2R5Q3JlYXRlRm9sZGVyPiB7XG4gICAgYXdhaXQgdGhpcy5mYWtlRGVsYXkoKTtcbiAgICBpZiAoZGlzYWJsZU5vQ2xvYmJlciApIHtcbiAgICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBFbnN1cmVUcmFpbGluZ1NsYXNoKG5ld1BhdGgpO1xuICAgICAgdGhpcy5maWxlcy5wdXNoKE1ha2VEaXIoZGlyZWN0b3J5UGF0aCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlY3Vyc2l2ZWx5VHJ5VG9DcmVhdGVGb2xkZXIobmV3UGF0aCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHByaXZhdGUgcmVjdXJzaXZlbHlUcnlUb0NyZWF0ZUZvbGRlcihuZXdQYXRoOiBzdHJpbmcpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlQYXRoID0gRW5zdXJlVHJhaWxpbmdTbGFzaChuZXdQYXRoKTtcbiAgICBjb25zdCBleGlzdHMgPSAhIXRoaXMuc2VsZWN0TWF0Y2hlcyhbZGlyZWN0b3J5UGF0aF0sIHRydWUpLmxlbmd0aDtcbiAgICBpZiAoIWV4aXN0cykge1xuICAgICAgdGhpcy5maWxlcy5wdXNoKE1ha2VEaXIoZGlyZWN0b3J5UGF0aCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBuZXdQYXRoV2l0aDIgPSBBZGQyVG9QYXRoRGlyKGRpcmVjdG9yeVBhdGgpO1xuICAgIHJldHVybiB0aGlzLnJlY3Vyc2l2ZWx5VHJ5VG9DcmVhdGVGb2xkZXIobmV3UGF0aFdpdGgyKTtcbiAgfVxuICBhc3luYyBTZXRQZXJtaXNzaW9ucyhcbiAgICBpdGVtOiBzdHJpbmcsXG4gICAgcm9sZTogQ29yZVR5cGVzLlBlcm1pc3Npb25zUm9sZSxcbiAgICBlbnRpdHk6IENvcmVUeXBlcy5GaWxlUGVybWlzc2lvbkVudGl0eSxcbiAgICByZWN1cnNpdmU/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29yZVR5cGVzLlJlc0JvZHlTZXRQZXJtaXNzaW9ucz4ge1xuICAgIHJldHVybiB0aGlzLlNldFBlcm1pc3Npb25zTXVsdGlwbGUoW2l0ZW1dLCByb2xlLCBlbnRpdHksIHJlY3Vyc2l2ZSk7XG4gIH1cbiAgYXN5bmMgQ29weU11bHRpcGxlKFxuICAgIGl0ZW1zOiBzdHJpbmdbXSxcbiAgICBuZXdQYXRoOiBzdHJpbmdcbiAgKTogUHJvbWlzZTxDb3JlVHlwZXMuUmVzQm9keUNvcHk+IHtcbiAgICBhd2FpdCB0aGlzLmZha2VEZWxheSgpO1xuICAgIHRoaXMuc2VsZWN0TWF0Y2hlcyhpdGVtcywgdHJ1ZSkubWFwKGYgPT4ge1xuICAgICAgY29uc3QgY29weSA9IHsgLi4uZiB9O1xuICAgICAgY29weS5mdWxsUGF0aCA9IHBhdGguam9pbihuZXdQYXRoLCBmLm5hbWUpO1xuICAgICAgdGhpcy5maWxlcy5wdXNoKGNvcHkpO1xuICAgIH0pO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGFzeW5jIE1vdmVNdWx0aXBsZShcbiAgICBpdGVtczogc3RyaW5nW10sXG4gICAgbmV3UGF0aDogc3RyaW5nXG4gICk6IFByb21pc2U8Q29yZVR5cGVzLlJlc0JvZHlNb3ZlPiB7XG4gICAgYXdhaXQgdGhpcy5mYWtlRGVsYXkoKTtcbiAgICB0aGlzLnNlbGVjdE1hdGNoZXMoaXRlbXMsIHRydWUpLm1hcChmID0+IHtcbiAgICAgIGYuZnVsbFBhdGggPSBwYXRoLmpvaW4obmV3UGF0aCwgZi5uYW1lKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBhc3luYyBTZXRQZXJtaXNzaW9uc011bHRpcGxlKFxuICAgIGl0ZW1zOiBzdHJpbmdbXSxcbiAgICByb2xlOiBDb3JlVHlwZXMuUGVybWlzc2lvbnNSb2xlLFxuICAgIGVudGl0eTogQ29yZVR5cGVzLkZpbGVQZXJtaXNzaW9uRW50aXR5LFxuICAgIHJlY3Vyc2l2ZT86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb3JlVHlwZXMuUmVzQm9keVNldFBlcm1pc3Npb25zPiB7XG4gICAgYXdhaXQgdGhpcy5mYWtlRGVsYXkoKTtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdmaWxlLXN5c3RlbS1zdHViOiBTZXRQZXJtaXNzaW9uc011bHRpcGxlJywge1xuICAgICAgaXRlbXMsXG4gICAgICBmaWxlczogdGhpcy5maWxlc1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnJlY3Vyc2l2ZWx5U2V0UGVybWlzc2lvbnMoaXRlbXMsIHJvbGUsIGVudGl0eSwgcmVjdXJzaXZlKTtcbiAgfVxuICBhc3luYyBVcGxvYWQoaXRlbTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgYXdhaXQgdGhpcy5mYWtlRGVsYXkoKTtcbiAgICB0aGlzLnJlY3Vyc2l2ZWx5VHJ5VG9BZGRGaWxlKGl0ZW0pO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHByaXZhdGUgcmVjdXJzaXZlbHlUcnlUb0FkZEZpbGUoZmlsZVBhdGg6IHN0cmluZykge1xuICAgIGNvbnN0IHBhcnNlZEZpbGVQYXRoID0gRW5zdXJlTm9UcmFpbGluZ1NsYXNoKGZpbGVQYXRoKTtcbiAgICBjb25zdCBleGlzdHMgPSAhIXRoaXMuc2VsZWN0TWF0Y2hlcyhbcGFyc2VkRmlsZVBhdGhdLCB0cnVlKS5sZW5ndGg7XG4gICAgaWYgKCFleGlzdHMpIHtcbiAgICAgIHRoaXMuZmlsZXMucHVzaChNYWtlRmlsZShwYXJzZWRGaWxlUGF0aCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBuZXdQYXRoV2l0aDIgPSBBZGQyVG9QYXRoKHBhcnNlZEZpbGVQYXRoKTtcbiAgICByZXR1cm4gdGhpcy5yZWN1cnNpdmVseVRyeVRvQWRkRmlsZShuZXdQYXRoV2l0aDIpO1xuICB9XG4gIHJlY3Vyc2l2ZWx5U2V0UGVybWlzc2lvbnMoXG4gICAgaXRlbXM6IHN0cmluZ1tdLFxuICAgIHJvbGU6IENvcmVUeXBlcy5QZXJtaXNzaW9uc1JvbGUsXG4gICAgZW50aXR5OiBDb3JlVHlwZXMuRmlsZVBlcm1pc3Npb25FbnRpdHksXG4gICAgcmVjdXJzaXZlPzogYm9vbGVhblxuICApIHtcbiAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5zZWxlY3RNYXRjaGVzKGl0ZW1zLCB0cnVlKTtcbiAgICBtYXRjaGVzLm1hcChpdGVtID0+IHtcbiAgICAgIHRoaXMuc2V0U2luZ2xlUGVybWlzc2lvbihpdGVtLCByb2xlLCBlbnRpdHkpO1xuICAgICAgY29uc3QgaXNGb2xkZXIgPSBpdGVtLnR5cGUgPT09ICdkaXInO1xuICAgICAgaWYgKHJlY3Vyc2l2ZSAmJiBpc0ZvbGRlcikge1xuICAgICAgICB0aGlzLnJlY3Vyc2l2ZWx5U2V0UGVybWlzc2lvbnMoXG4gICAgICAgICAgW2l0ZW0uZnVsbFBhdGhdLFxuICAgICAgICAgIHJvbGUsXG4gICAgICAgICAgZW50aXR5LFxuICAgICAgICAgIHJlY3Vyc2l2ZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHByaXZhdGUgc2V0U2luZ2xlUGVybWlzc2lvbihcbiAgICBpdGVtOiBDb3JlVHlwZXMuUmVzRmlsZSxcbiAgICByb2xlOiBDb3JlVHlwZXMuUGVybWlzc2lvbnNSb2xlLFxuICAgIGVudGl0eTogQ29yZVR5cGVzLkZpbGVQZXJtaXNzaW9uRW50aXR5XG4gICkge1xuICAgIGxldCBsaXN0OiBzdHJpbmdbXTtcbiAgICBpZiAocm9sZSA9PT0gJ1JFQURFUicpIHtcbiAgICAgIGxpc3QgPSBpdGVtLnBlcm1pc3Npb25zLnJlYWRlcnM7XG4gICAgfVxuICAgIGlmIChyb2xlID09PSAnV1JJVEVSJykge1xuICAgICAgbGlzdCA9IGl0ZW0ucGVybWlzc2lvbnMud3JpdGVycztcbiAgICB9XG4gICAgY29uc3QgaW5MaXN0QWxyZWFkeSA9IGxpc3QuaW5jbHVkZXMoZW50aXR5KTtcbiAgICBpZiAoIWluTGlzdEFscmVhZHkpIHtcbiAgICAgIGxpc3QucHVzaChlbnRpdHkpO1xuICAgIH1cbiAgfVxuICBhc3luYyBTZXRQZXJtaXNzaW9uc09iamVjdE11bHRpcGxlKFxuICAgIGl0ZW1zOiBzdHJpbmdbXSxcbiAgICBwZXJtaXNzaW9uc09iajogQ29yZVR5cGVzLkZpbGVQZXJtaXNzaW9uc09iamVjdCxcbiAgICByZWN1cnNpdmU/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29yZVR5cGVzLlJlc0JvZHlTZXRQZXJtaXNzaW9ucz4ge1xuICAgIGF3YWl0IHRoaXMuZmFrZURlbGF5KCk7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHRoaXMuc2VsZWN0TWF0Y2hlcyhpdGVtcywgdHJ1ZSk7XG4gICAgdGhpcy5sb2dnZXIuaW5mbygnZmlsZS1zeXN0ZW0tc3R1YjogU2V0UGVybWlzc2lvbnNNdWx0aXBsZScsIHtcbiAgICAgIGl0ZW1zLFxuICAgICAgbWF0Y2hlcyxcbiAgICAgIHBlcm1pc3Npb25zT2JqXG4gICAgfSk7XG4gICAgdGhpcy5yZWN1cnNpdmVseVNldFBlcm1pc3Npb25zT2JqZWN0cyhpdGVtcywgcGVybWlzc2lvbnNPYmosIHJlY3Vyc2l2ZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmVjdXJzaXZlbHlTZXRQZXJtaXNzaW9uc09iamVjdHMoXG4gICAgaXRlbXM6IHN0cmluZ1tdLFxuICAgIHBlcm1pc3Npb25zT2JqOiBDb3JlVHlwZXMuRmlsZVBlcm1pc3Npb25zT2JqZWN0LFxuICAgIHJlY3Vyc2l2ZT86IGJvb2xlYW5cbiAgKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHRoaXMuc2VsZWN0TWF0Y2hlcyhpdGVtcywgdHJ1ZSk7XG4gICAgbWF0Y2hlcy5tYXAoaXRlbSA9PiB7XG4gICAgICBpdGVtLnBlcm1pc3Npb25zID0gcGVybWlzc2lvbnNPYmo7XG4gICAgICBjb25zdCBpc0ZvbGRlciA9IGl0ZW0udHlwZSA9PT0gJ2Rpcic7XG4gICAgICBpZiAocmVjdXJzaXZlICYmIGlzRm9sZGVyKSB7XG4gICAgICAgIHRoaXMucmVjdXJzaXZlbHlTZXRQZXJtaXNzaW9uc09iamVjdHMoXG4gICAgICAgICAgW2l0ZW0uZnVsbFBhdGhdLFxuICAgICAgICAgIHBlcm1pc3Npb25zT2JqLFxuICAgICAgICAgIHJlY3Vyc2l2ZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgYXN5bmMgUmVtb3ZlKGl0ZW1zOiBzdHJpbmdbXSk6IFByb21pc2U8Q29yZVR5cGVzLlJlc0JvZHlSZW1vdmU+IHtcbiAgICBhd2FpdCB0aGlzLmZha2VEZWxheSgpO1xuICAgIGNvbnN0IGl0ZW1zU2V0ID0gbmV3IFNldChpdGVtcyk7XG4gICAgY29uc3QgaXRlbXNOb3REZWxldGVkID0gdGhpcy5maWxlcy5maWx0ZXIoZiA9PiAhaXRlbXNTZXQuaGFzKGYuZnVsbFBhdGgpKTtcbiAgICB0aGlzLmZpbGVzID0gaXRlbXNOb3REZWxldGVkO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgQ2xvbmVQcm92aWRlcigpOiBGaWxlU3lzdGVtUHJvdmlkZXIge1xuICAgIHJldHVybiBuZXcgRmlsZVN5c3RlbVN0dWIoKTtcbiAgfVxuXG4gIHByaXZhdGUgZW5zdXJlVHJhaWxpbmdTbGFzaChpbnB1dFBhdGg6IHN0cmluZykge1xuICAgIGNvbnN0IGhhc1RyYWlsaW5nID0gaW5wdXRQYXRoLnNsaWNlKC0xKSA9PT0gJy8nO1xuICAgIGlmIChoYXNUcmFpbGluZykge1xuICAgICAgcmV0dXJuIGlucHV0UGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIGlucHV0UGF0aCArICcvJztcbiAgfVxuICBwcml2YXRlIGVuc3VyZVByZWZpeFNsYXNoKGlucHV0UGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3QgaGFzUHJlZml4ID0gaW5wdXRQYXRoLnNsaWNlKDAsIDEpID09PSAnLyc7XG4gICAgaWYgKGhhc1ByZWZpeCkge1xuICAgICAgcmV0dXJuIGlucHV0UGF0aDtcbiAgICB9XG4gICAgcmV0dXJuICcvJyArIGlucHV0UGF0aDtcbiAgfVxuXG4gIEdldFVwbG9hZEFwaVVybChjdXJyZW50UGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2h0dHBzOi8vaHR0cGJpbi5vcmcvcG9zdCc7XG4gIH1cblxuICBhc3luYyBDcmVhdGVEb3dubG9hZExpbmsoZmlsZTogQ29yZVR5cGVzLlJlc0ZpbGUpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy84Lzg1L0V4cG9uZW50aWFsX0Z1bmN0aW9uXyUyOEFic19JbWFnX1BhcnRfYXRfSW5maW5pdHklMjlfRGVuc2l0eS5wbmcnO1xuICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { EnsureTrailingSlash } from '../../utils/path-helpers';
import { ConsoleLoggerService } from '../logging/console-logger.service';
export class ClientCache {
    constructor() {
        this.logger = new ConsoleLoggerService();
        this.cachedFolders = {};
        this.cacheLimit = 20;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    GetCached(input) {
        const /** @type {?} */ directoryPath = EnsureTrailingSlash(input);
        return this.cachedFolders[directoryPath] || [];
    }
    /**
     * @param {?} input
     * @param {?} newFolderFiles
     * @return {?}
     */
    SetCached(input, newFolderFiles) {
        const /** @type {?} */ directoryPath = EnsureTrailingSlash(input);
        const /** @type {?} */ oldFolders = this.GetCached(directoryPath);
        this.logger.info('SetCached()', {
            from: oldFolders.length,
            to: newFolderFiles.length
        });
        if (this.cachedCount > this.cacheLimit) {
            this.removeRandomFolderPath();
        }
        this.cachedFolders[directoryPath] = newFolderFiles;
    }
    /**
     * @return {?}
     */
    get cachedCount() {
        return Object.keys(this.cachedFolders).length;
    }
    /**
     * @return {?}
     */
    removeRandomFolderPath() {
        const /** @type {?} */ randomIndex = Math.floor(Math.random() * this.cachedCount);
        const /** @type {?} */ randomKey = Object.keys(this.cachedFolders)[randomIndex];
        delete this.cachedFolders[randomKey];
    }
}
function ClientCache_tsickle_Closure_declarations() {
    /** @type {?} */
    ClientCache.prototype.logger;
    /** @type {?} */
    ClientCache.prototype.cachedFolders;
    /** @type {?} */
    ClientCache.prototype.cacheLimit;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LWZpbGVzeXN0ZW0uY2FjaGUuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvU2hpdmFuZy9QaSBTb2Z0d2FyZS9maWxlLW1hbmFnZXIvbmd4LWZpbGVtYW5hZ2VyL3Byb2plY3RzL25neC1maWxlbWFuYWdlci1jbGllbnQtZmlyZWJhc2Uvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3N0YXRlL2NsaWVudC1maWxlc3lzdGVtLmNhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUV6RSxNQUFNLE9BQU8sV0FBVzs7c0JBQ0wsSUFBSSxvQkFBb0IsRUFBRTs2QkFJdkMsRUFBRTswQkFDZSxFQUFFOzs7Ozs7SUFFaEIsU0FBUyxDQUFDLEtBQWE7UUFDNUIsdUJBQU0sYUFBYSxHQUFHLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7Ozs7SUFFMUMsU0FBUyxDQUFDLEtBQWEsRUFBRSxjQUFtQztRQUNqRSx1QkFBTSxhQUFhLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsdUJBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzlCLElBQUksRUFBRSxVQUFVLENBQUMsTUFBTTtZQUN2QixFQUFFLEVBQUUsY0FBYyxDQUFDLE1BQU07U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDdEMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDL0I7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxHQUFHLGNBQWMsQ0FBQzs7Ozs7UUFHekMsV0FBVztRQUNyQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7Ozs7SUFFeEMsc0JBQXNCO1FBQzVCLHVCQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakUsdUJBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9ELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7Q0FFeEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3JlVHlwZXMgfSBmcm9tICcuLi8uLi8uLi9jb3JlLXR5cGVzJztcbmltcG9ydCB7IEVuc3VyZVRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi91dGlscy9wYXRoLWhlbHBlcnMnO1xuaW1wb3J0IHsgQ29uc29sZUxvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi9sb2dnaW5nL2NvbnNvbGUtbG9nZ2VyLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgQ2xpZW50Q2FjaGUge1xuICBwcml2YXRlIGxvZ2dlciA9IG5ldyBDb25zb2xlTG9nZ2VyU2VydmljZSgpO1xuXG4gIHByaXZhdGUgY2FjaGVkRm9sZGVyczoge1xuICAgIFtmb2xkZXJQYXRoOiBzdHJpbmddOiBDb3JlVHlwZXMuUmVzRmlsZVtdO1xuICB9ID0ge307XG4gIHByaXZhdGUgY2FjaGVMaW1pdCA9IDIwO1xuXG4gIHB1YmxpYyBHZXRDYWNoZWQoaW5wdXQ6IHN0cmluZykge1xuICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBFbnN1cmVUcmFpbGluZ1NsYXNoKGlucHV0KTtcbiAgICByZXR1cm4gdGhpcy5jYWNoZWRGb2xkZXJzW2RpcmVjdG9yeVBhdGhdIHx8IFtdO1xuICB9XG4gIHB1YmxpYyBTZXRDYWNoZWQoaW5wdXQ6IHN0cmluZywgbmV3Rm9sZGVyRmlsZXM6IENvcmVUeXBlcy5SZXNGaWxlW10pIHtcbiAgICBjb25zdCBkaXJlY3RvcnlQYXRoID0gRW5zdXJlVHJhaWxpbmdTbGFzaChpbnB1dCk7XG4gICAgY29uc3Qgb2xkRm9sZGVycyA9IHRoaXMuR2V0Q2FjaGVkKGRpcmVjdG9yeVBhdGgpO1xuICAgIHRoaXMubG9nZ2VyLmluZm8oJ1NldENhY2hlZCgpJywge1xuICAgICAgZnJvbTogb2xkRm9sZGVycy5sZW5ndGgsXG4gICAgICB0bzogbmV3Rm9sZGVyRmlsZXMubGVuZ3RoXG4gICAgfSk7XG4gICAgaWYgKHRoaXMuY2FjaGVkQ291bnQgPiB0aGlzLmNhY2hlTGltaXQpIHtcbiAgICAgIHRoaXMucmVtb3ZlUmFuZG9tRm9sZGVyUGF0aCgpO1xuICAgIH1cbiAgICB0aGlzLmNhY2hlZEZvbGRlcnNbZGlyZWN0b3J5UGF0aF0gPSBuZXdGb2xkZXJGaWxlcztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGNhY2hlZENvdW50KCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmNhY2hlZEZvbGRlcnMpLmxlbmd0aDtcbiAgfVxuICBwcml2YXRlIHJlbW92ZVJhbmRvbUZvbGRlclBhdGgoKSB7XG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNhY2hlZENvdW50KTtcbiAgICBjb25zdCByYW5kb21LZXkgPSBPYmplY3Qua2V5cyh0aGlzLmNhY2hlZEZvbGRlcnMpW3JhbmRvbUluZGV4XTtcbiAgICBkZWxldGUgdGhpcy5jYWNoZWRGb2xkZXJzW3JhbmRvbUtleV07XG4gIH1cbn1cbiJdfQ==
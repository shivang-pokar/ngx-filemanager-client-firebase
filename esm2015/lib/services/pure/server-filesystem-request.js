/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { __awaiter } from "tslib";
import { take } from 'rxjs/operators';
export class FileSystemRequestBuilder {
    /**
     * @param {?} http
     * @param {?} url
     * @param {?} logger
     * @param {?} LOG_ID
     */
    constructor(http, url, logger, LOG_ID) {
        this.http = http;
        this.url = url;
        this.logger = logger;
        this.LOG_ID = LOG_ID;
        this.options = {
            headers: {}
        };
    }
    /**
     * @param {?} body
     * @return {?}
     */
    AddBody(body) {
        this.body = Object.assign(Object.assign({}, this.body), body);
        return this;
    }
    /**
     * @template T
     * @param {?} body
     * @return {?}
     */
    PatchBody(body) {
        const /** @type {?} */ partBody = body;
        this.body = Object.assign(Object.assign({}, this.body), partBody);
        return this;
    }
    /**
     * @param {?} headers
     * @return {?}
     */
    PatchHeaders(headers) {
        this.options.headers = Object.assign(Object.assign({}, this.options.headers), headers);
        return this;
    }
    /**
     * @return {?}
     */
    MakeJson() {
        this.options['responseType'] = 'json';
        this.options.headers['Content-Type'] = 'application/json';
    }
    /**
     * @return {?}
     */
    makeRequestKey() {
        const /** @type {?} */ key = this.url + JSON.stringify(this.body || {});
        return key;
    }
    /**
     * @return {?}
     */
    POST() {
        return __awaiter(this, void 0, void 0, function* () {
            const /** @type {?} */ key = this.makeRequestKey();
            try {
                this.logger.info(this.LOG_ID + ' FileSystemRequestBuilder', {
                    url: this.url,
                    body: this.body,
                    options: this.options
                });
                const /** @type {?} */ response = yield this.http
                    .post(this.url, this.body, this.options)
                    .pipe(take(1))
                    .toPromise();
                return response;
            }
            catch (/** @type {?} */ apiErrorResponse) {
                console.error('API Post Error', { apiErrorResponse });
                if (apiErrorResponse.error && apiErrorResponse.error.errorDetail) {
                    const /** @type {?} */ detail = apiErrorResponse.error.errorDetail;
                    throw new Error('API Response: ' + detail);
                }
                throw new Error('API request failed, status:' + apiErrorResponse.statusText);
            }
        });
    }
}
function FileSystemRequestBuilder_tsickle_Closure_declarations() {
    /** @type {?} */
    FileSystemRequestBuilder.prototype.options;
    /** @type {?} */
    FileSystemRequestBuilder.prototype.body;
    /** @type {?} */
    FileSystemRequestBuilder.prototype.http;
    /** @type {?} */
    FileSystemRequestBuilder.prototype.url;
    /** @type {?} */
    FileSystemRequestBuilder.prototype.logger;
    /** @type {?} */
    FileSystemRequestBuilder.prototype.LOG_ID;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLWZpbGVzeXN0ZW0tcmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9TaGl2YW5nL1BpIFNvZnR3YXJlL2ZpbGUtbWFuYWdlci9uZ3gtZmlsZW1hbmFnZXIvcHJvamVjdHMvbmd4LWZpbGVtYW5hZ2VyLWNsaWVudC1maXJlYmFzZS9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcHVyZS9zZXJ2ZXItZmlsZXN5c3RlbS1yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3RDLE1BQU0sT0FBTyx3QkFBd0I7Ozs7Ozs7SUFLbkMsWUFDVSxNQUNBLEtBQ0EsUUFDQTtRQUhBLFNBQUksR0FBSixJQUFJO1FBQ0osUUFBRyxHQUFILEdBQUc7UUFDSCxXQUFNLEdBQU4sTUFBTTtRQUNOLFdBQU0sR0FBTixNQUFNO3VCQVJFO1lBQ2hCLE9BQU8sRUFBRSxFQUFFO1NBQ1o7S0FPRzs7Ozs7SUFDSixPQUFPLENBQUMsSUFBSTtRQUNWLElBQUksQ0FBQyxJQUFJLG1DQUNKLElBQUksQ0FBQyxJQUFJLEdBQ1QsSUFBSSxDQUNSLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQztLQUNiOzs7Ozs7SUFDRCxTQUFTLENBQUksSUFBZ0I7UUFDM0IsdUJBQU0sUUFBUSxHQUFHLElBQVcsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxtQ0FDSixJQUFJLENBQUMsSUFBSSxHQUNULFFBQVEsQ0FDWixDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7SUFDRCxZQUFZLENBQUMsT0FBVztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sbUNBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQ3BCLE9BQU8sQ0FDWCxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUM7S0FDYjs7OztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxrQkFBa0IsQ0FBQztLQUMzRDs7OztJQUNPLGNBQWM7UUFDcEIsdUJBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sR0FBRyxDQUFDOzs7OztJQUdQLElBQUk7O1lBQ1IsdUJBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNsQyxJQUFJO2dCQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsMkJBQTJCLEVBQUU7b0JBQzFELEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztvQkFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2lCQUN0QixDQUFDLENBQUM7Z0JBQ0gsdUJBQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUk7cUJBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztxQkFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDYixTQUFTLEVBQUUsQ0FBQztnQkFDZixPQUFPLFFBQWUsQ0FBQzthQUN4QjtZQUFDLHdCQUFPLGdCQUFnQixFQUFFO2dCQUN6QixPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLGdCQUFnQixDQUFDLEtBQUssSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO29CQUNoRSx1QkFBTSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztvQkFDbEQsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsQ0FBQztpQkFDNUM7Z0JBQ0QsTUFBTSxJQUFJLEtBQUssQ0FDYiw2QkFBNkIsR0FBRyxnQkFBZ0IsQ0FBQyxVQUFVLENBQzVELENBQUM7YUFDSDs7S0FDRjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbG9nZ2luZy9sb2dnZXIuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBGaWxlU3lzdGVtUmVxdWVzdEJ1aWxkZXIge1xuICBwcml2YXRlIG9wdGlvbnMgPSB7XG4gICAgaGVhZGVyczoge31cbiAgfTtcbiAgcHJpdmF0ZSBib2R5OiB7fTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgdXJsOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBMT0dfSUQ6IHN0cmluZ1xuICApIHt9XG4gIEFkZEJvZHkoYm9keSkge1xuICAgIHRoaXMuYm9keSA9IHtcbiAgICAgIC4uLnRoaXMuYm9keSxcbiAgICAgIC4uLmJvZHlcbiAgICB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIFBhdGNoQm9keTxUPihib2R5OiBQYXJ0aWFsPFQ+KSB7XG4gICAgY29uc3QgcGFydEJvZHkgPSBib2R5IGFzIGFueTtcbiAgICB0aGlzLmJvZHkgPSB7XG4gICAgICAuLi50aGlzLmJvZHksXG4gICAgICAuLi5wYXJ0Qm9keVxuICAgIH07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgUGF0Y2hIZWFkZXJzKGhlYWRlcnM6IHt9KSB7XG4gICAgdGhpcy5vcHRpb25zLmhlYWRlcnMgPSB7XG4gICAgICAuLi50aGlzLm9wdGlvbnMuaGVhZGVycyxcbiAgICAgIC4uLmhlYWRlcnNcbiAgICB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIE1ha2VKc29uKCkge1xuICAgIHRoaXMub3B0aW9uc1sncmVzcG9uc2VUeXBlJ10gPSAnanNvbic7XG4gICAgdGhpcy5vcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICB9XG4gIHByaXZhdGUgbWFrZVJlcXVlc3RLZXkoKSB7XG4gICAgY29uc3Qga2V5ID0gdGhpcy51cmwgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmJvZHkgfHwge30pO1xuICAgIHJldHVybiBrZXk7XG4gIH1cblxuICBhc3luYyBQT1NUKCkge1xuICAgIGNvbnN0IGtleSA9IHRoaXMubWFrZVJlcXVlc3RLZXkoKTtcbiAgICB0cnkge1xuICAgICAgdGhpcy5sb2dnZXIuaW5mbyh0aGlzLkxPR19JRCArICcgRmlsZVN5c3RlbVJlcXVlc3RCdWlsZGVyJywge1xuICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICBib2R5OiB0aGlzLmJvZHksXG4gICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9uc1xuICAgICAgfSk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cFxuICAgICAgICAucG9zdCh0aGlzLnVybCwgdGhpcy5ib2R5LCB0aGlzLm9wdGlvbnMpXG4gICAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAgIC50b1Byb21pc2UoKTtcbiAgICAgIHJldHVybiByZXNwb25zZSBhcyBhbnk7XG4gICAgfSBjYXRjaCAoYXBpRXJyb3JSZXNwb25zZSkge1xuICAgICAgY29uc29sZS5lcnJvcignQVBJIFBvc3QgRXJyb3InLCB7IGFwaUVycm9yUmVzcG9uc2UgfSk7XG4gICAgICBpZiAoYXBpRXJyb3JSZXNwb25zZS5lcnJvciAmJiBhcGlFcnJvclJlc3BvbnNlLmVycm9yLmVycm9yRGV0YWlsKSB7XG4gICAgICAgIGNvbnN0IGRldGFpbCA9IGFwaUVycm9yUmVzcG9uc2UuZXJyb3IuZXJyb3JEZXRhaWw7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQVBJIFJlc3BvbnNlOiAnICsgZGV0YWlsKTtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0FQSSByZXF1ZXN0IGZhaWxlZCwgc3RhdHVzOicgKyBhcGlFcnJvclJlc3BvbnNlLnN0YXR1c1RleHRcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=
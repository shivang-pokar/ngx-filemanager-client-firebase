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
                this.options.headers = {
                    Authorization: window.localStorage.getItem('token')
                };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLWZpbGVzeXN0ZW0tcmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9TaGl2YW5nL1BpIFNvZnR3YXJlL2ZpbGUtbWFuYWdlci9uZ3gtZmlsZW1hbmFnZXIvcHJvamVjdHMvbmd4LWZpbGVtYW5hZ2VyLWNsaWVudC1maXJlYmFzZS9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcHVyZS9zZXJ2ZXItZmlsZXN5c3RlbS1yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3RDLE1BQU0sT0FBTyx3QkFBd0I7Ozs7Ozs7SUFLbkMsWUFDVSxNQUNBLEtBQ0EsUUFDQTtRQUhBLFNBQUksR0FBSixJQUFJO1FBQ0osUUFBRyxHQUFILEdBQUc7UUFDSCxXQUFNLEdBQU4sTUFBTTtRQUNOLFdBQU0sR0FBTixNQUFNO3VCQVJFO1lBQ2hCLE9BQU8sRUFBRSxFQUFFO1NBQ1o7S0FPSTs7Ozs7SUFDTCxPQUFPLENBQUMsSUFBSTtRQUNWLElBQUksQ0FBQyxJQUFJLG1DQUNKLElBQUksQ0FBQyxJQUFJLEdBQ1QsSUFBSSxDQUNSLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQztLQUNiOzs7Ozs7SUFDRCxTQUFTLENBQUksSUFBZ0I7UUFDM0IsdUJBQU0sUUFBUSxHQUFHLElBQVcsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxtQ0FDSixJQUFJLENBQUMsSUFBSSxHQUNULFFBQVEsQ0FDWixDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7SUFDRCxZQUFZLENBQUMsT0FBVztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sbUNBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQ3BCLE9BQU8sQ0FDWCxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUM7S0FDYjs7OztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxrQkFBa0IsQ0FBQztLQUMzRDs7OztJQUNPLGNBQWM7UUFDcEIsdUJBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sR0FBRyxDQUFDOzs7OztJQUdQLElBQUk7O1lBQ1IsdUJBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNsQyxJQUFJO2dCQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsMkJBQTJCLEVBQUU7b0JBQzFELEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztvQkFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2lCQUN0QixDQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUc7b0JBQ3JCLGFBQWEsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7aUJBQ3BELENBQUE7Z0JBRUQsdUJBQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUk7cUJBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztxQkFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDYixTQUFTLEVBQUUsQ0FBQztnQkFDZixPQUFPLFFBQWUsQ0FBQzthQUN4QjtZQUFDLHdCQUFPLGdCQUFnQixFQUFFO2dCQUN6QixPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLGdCQUFnQixDQUFDLEtBQUssSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO29CQUNoRSx1QkFBTSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztvQkFDbEQsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsQ0FBQztpQkFDNUM7Z0JBQ0QsTUFBTSxJQUFJLEtBQUssQ0FDYiw2QkFBNkIsR0FBRyxnQkFBZ0IsQ0FBQyxVQUFVLENBQzVELENBQUM7YUFDSDs7S0FDRjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbG9nZ2luZy9sb2dnZXIuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBGaWxlU3lzdGVtUmVxdWVzdEJ1aWxkZXIge1xuICBwcml2YXRlIG9wdGlvbnMgPSB7XG4gICAgaGVhZGVyczoge31cbiAgfTtcbiAgcHJpdmF0ZSBib2R5OiB7fTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgdXJsOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBMT0dfSUQ6IHN0cmluZ1xuICApIHsgfVxuICBBZGRCb2R5KGJvZHkpIHtcbiAgICB0aGlzLmJvZHkgPSB7XG4gICAgICAuLi50aGlzLmJvZHksXG4gICAgICAuLi5ib2R5XG4gICAgfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBQYXRjaEJvZHk8VD4oYm9keTogUGFydGlhbDxUPikge1xuICAgIGNvbnN0IHBhcnRCb2R5ID0gYm9keSBhcyBhbnk7XG4gICAgdGhpcy5ib2R5ID0ge1xuICAgICAgLi4udGhpcy5ib2R5LFxuICAgICAgLi4ucGFydEJvZHlcbiAgICB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIFBhdGNoSGVhZGVycyhoZWFkZXJzOiB7fSkge1xuICAgIHRoaXMub3B0aW9ucy5oZWFkZXJzID0ge1xuICAgICAgLi4udGhpcy5vcHRpb25zLmhlYWRlcnMsXG4gICAgICAuLi5oZWFkZXJzXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBNYWtlSnNvbigpIHtcbiAgICB0aGlzLm9wdGlvbnNbJ3Jlc3BvbnNlVHlwZSddID0gJ2pzb24nO1xuICAgIHRoaXMub3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgfVxuICBwcml2YXRlIG1ha2VSZXF1ZXN0S2V5KCkge1xuICAgIGNvbnN0IGtleSA9IHRoaXMudXJsICsgSlNPTi5zdHJpbmdpZnkodGhpcy5ib2R5IHx8IHt9KTtcbiAgICByZXR1cm4ga2V5O1xuICB9XG5cbiAgYXN5bmMgUE9TVCgpIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLm1ha2VSZXF1ZXN0S2V5KCk7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8odGhpcy5MT0dfSUQgKyAnIEZpbGVTeXN0ZW1SZXF1ZXN0QnVpbGRlcicsIHtcbiAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgYm9keTogdGhpcy5ib2R5LFxuICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnNcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLm9wdGlvbnMuaGVhZGVycyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwXG4gICAgICAgIC5wb3N0KHRoaXMudXJsLCB0aGlzLmJvZHksIHRoaXMub3B0aW9ucylcbiAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgLnRvUHJvbWlzZSgpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlIGFzIGFueTtcbiAgICB9IGNhdGNoIChhcGlFcnJvclJlc3BvbnNlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdBUEkgUG9zdCBFcnJvcicsIHsgYXBpRXJyb3JSZXNwb25zZSB9KTtcbiAgICAgIGlmIChhcGlFcnJvclJlc3BvbnNlLmVycm9yICYmIGFwaUVycm9yUmVzcG9uc2UuZXJyb3IuZXJyb3JEZXRhaWwpIHtcbiAgICAgICAgY29uc3QgZGV0YWlsID0gYXBpRXJyb3JSZXNwb25zZS5lcnJvci5lcnJvckRldGFpbDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBUEkgUmVzcG9uc2U6ICcgKyBkZXRhaWwpO1xuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnQVBJIHJlcXVlc3QgZmFpbGVkLCBzdGF0dXM6JyArIGFwaUVycm9yUmVzcG9uc2Uuc3RhdHVzVGV4dFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
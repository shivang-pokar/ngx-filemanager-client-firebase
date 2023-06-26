(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/common/http'), require('rxjs/operators'), require('rxjs'), require('path-browserify'), require('@angular/material/dialog'), require('uuid'), require('@angular/material/snack-bar'), require('firebase/app'), require('firebase/storage'), require('@angular/material/progress-bar'), require('@angular/material/input'), require('@angular/material/icon'), require('@angular/cdk/collections'), require('@angular/material/button'), require('@angular/material/tooltip'), require('@angular/material/menu'), require('@angular/material/toolbar'), require('@angular/cdk/keycodes'), require('@angular/material/chips'), require('@angular/material/autocomplete'), require('@angular/material/form-field'), require('@angular/material/select'), require('@angular/material/card'), require('@angular/material/button-toggle'), require('@angular/material/checkbox'), require('@angular/material/paginator'), require('@angular/material/progress-spinner'), require('@angular/material/sidenav'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/material/tabs'), require('@angular/material/expansion')) :
    typeof define === 'function' && define.amd ? define('ngx-filemanager-client-firebase', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/common/http', 'rxjs/operators', 'rxjs', 'path-browserify', '@angular/material/dialog', 'uuid', '@angular/material/snack-bar', 'firebase/app', 'firebase/storage', '@angular/material/progress-bar', '@angular/material/input', '@angular/material/icon', '@angular/cdk/collections', '@angular/material/button', '@angular/material/tooltip', '@angular/material/menu', '@angular/material/toolbar', '@angular/cdk/keycodes', '@angular/material/chips', '@angular/material/autocomplete', '@angular/material/form-field', '@angular/material/select', '@angular/material/card', '@angular/material/button-toggle', '@angular/material/checkbox', '@angular/material/paginator', '@angular/material/progress-spinner', '@angular/material/sidenav', '@angular/material/sort', '@angular/material/table', '@angular/material/tabs', '@angular/material/expansion'], factory) :
    (global = global || self, factory(global['ngx-filemanager-client-firebase'] = {}, global.ng.core, global.ng.common, global.ng.forms, global.ng.common.http, global.rxjs.operators, global.rxjs, global.path, global.ng.material.dialog, global.uuid, global.ng.material.snackBar, global.firebase, null, global.ng.material.progressBar, global.ng.material.input, global.ng.material.icon, global.ng.cdk.collections, global.ng.material.button, global.ng.material.tooltip, global.ng.material.menu, global.ng.material.toolbar, global.ng.cdk.keycodes, global.ng.material.chips, global.ng.material.autocomplete, global.ng.material.formField, global.ng.material.select, global.ng.material.card, global.ng.material.buttonToggle, global.ng.material.checkbox, global.ng.material.paginator, global.ng.material.progressSpinner, global.ng.material.sidenav, global.ng.material.sort, global.ng.material.table, global.ng.material.tabs, global.ng.material.expansion));
}(this, (function (exports, i0, common, forms, http, operators, rxjs, path, dialog, uuid, snackBar, firebase, storage, progressBar, input, icon, collections, button, tooltip, menu, toolbar, keycodes, chips, autocomplete, formField, select, card, buttonToggle, checkbox, paginator, progressSpinner, sidenav, sort, table, tabs, expansion) { 'use strict';

    var path__default = 'default' in path ? path['default'] : path;
    var firebase__default = 'default' in firebase ? firebase['default'] : firebase;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} platformLocation
     * @return {?}
     */
    function getBaseHref(platformLocation) {
        return platformLocation.getBaseHrefFromDOM();
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __createBinding(o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    }
    function __exportStar(m, exports) {
        for (var p in m)
            if (p !== "default" && !exports.hasOwnProperty(p))
                exports[p] = m[p];
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    result[k] = mod[k];
        result.default = mod;
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     */
    var Logger = /** @class */ (function () {
        function Logger() {
        }
        return Logger;
    }());
    function Logger_tsickle_Closure_declarations() {
        /** @type {?} */
        Logger.prototype.info;
        /** @type {?} */
        Logger.prototype.warn;
        /** @type {?} */
        Logger.prototype.error;
    }
    var LoggerService = /** @class */ (function () {
        function LoggerService() {
        }
        return LoggerService;
    }());
    LoggerService.decorators = [
        { type: i0.Injectable }
    ];
    function LoggerService_tsickle_Closure_declarations() {
        /** @type {?} */
        LoggerService.prototype.info;
        /** @type {?} */
        LoggerService.prototype.warn;
        /** @type {?} */
        LoggerService.prototype.error;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @record
     */
    function RenameDialogInterface() { }
    function RenameDialogInterface_tsickle_Closure_declarations() {
        /** @type {?} */
        RenameDialogInterface.prototype.currentPath;
    }
    var AppDialogRenameComponent = /** @class */ (function () {
        /**
         * @param {?} dialogRef
         * @param {?} data
         */
        function AppDialogRenameComponent(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
            this.renamedItem = new forms.FormControl();
            var /** @type {?} */ name = path__default.basename(data.currentPath);
            this.renamedItem.setValue(name);
        }
        /**
         * @return {?}
         */
        AppDialogRenameComponent.prototype.onSubmit = function () {
            var /** @type {?} */ renamedFullPath = this.newPath;
            this.dialogRef.close(renamedFullPath);
        };
        /**
         * @return {?}
         */
        AppDialogRenameComponent.prototype.onCancel = function () {
            this.dialogRef.close();
        };
        Object.defineProperty(AppDialogRenameComponent.prototype, "newPath", {
            /**
             * @return {?}
             */
            get: function () {
                var /** @type {?} */ directoryPath = path__default.dirname(this.data.currentPath);
                var /** @type {?} */ newItemName = this.renamedItem.value;
                if (this.IsDir) {
                    return path__default.join(directoryPath, newItemName, '/');
                }
                return path__default.join(directoryPath, newItemName);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppDialogRenameComponent.prototype, "IsDir", {
            /**
             * @return {?}
             */
            get: function () {
                return this.data.currentPath.endsWith('/');
            },
            enumerable: false,
            configurable: true
        });
        return AppDialogRenameComponent;
    }());
    AppDialogRenameComponent.decorators = [
        { type: i0.Component, args: [{
                    template: "\n    <base-dialog\n      [header]=\"headerTemplate\"\n      [body]=\"bodyTemplate\"\n      [actions]=\"actionsTemplate\"\n    >\n      <ng-template #headerTemplate>\n        <h2>Rename Item</h2>\n      </ng-template>\n      <ng-template #bodyTemplate>\n        <h5 class=\"p5 m0\">Old Path: {{ data.currentPath }}</h5>\n        <h5 class=\"p5 m0\">New Path: {{ newPath }}</h5>\n\n        <mat-form-field>\n          <input\n            matInput\n            placeholder=\"New Name\"\n            [formControl]=\"renamedItem\"\n            (keyup.enter)=\"onSubmit()\"\n          />\n        </mat-form-field>\n      </ng-template>\n      <ng-template #actionsTemplate>\n        <btns-cancel-ok\n          okIcon=\"done\"\n          okLabel=\"Rename Item\"\n          (clickedCancel)=\"onCancel()\"\n          (clickedOk)=\"onSubmit()\"\n        >\n        </btns-cancel-ok>\n      </ng-template>\n    </base-dialog>\n  ",
                    styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
                }] }
    ];
    /** @nocollapse */
    AppDialogRenameComponent.ctorParameters = function () { return [
        { type: dialog.MatDialogRef },
        { type: undefined, decorators: [{ type: i0.Inject, args: [dialog.MAT_DIALOG_DATA,] }] }
    ]; };
    function AppDialogRenameComponent_tsickle_Closure_declarations() {
        /** @type {?} */
        AppDialogRenameComponent.prototype.renamedItem;
        /** @type {?} */
        AppDialogRenameComponent.prototype.dialogRef;
        /** @type {?} */
        AppDialogRenameComponent.prototype.data;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} inputPath
     * @return {?}
     */
    function HasPrefixSlash(inputPath) {
        if (!inputPath || !inputPath.length) {
            return false;
        }
        var /** @type {?} */ hasPrefix = inputPath.startsWith('/');
        return hasPrefix;
    }
    /**
     * @param {?} inputPath
     * @return {?}
     */
    function TrimSlashes(inputPath) {
        return inputPath.replace(/^\/+|\/+$/g, '');
    }
    /**
     * @param {?} inputPath
     * @return {?}
     */
    function HasTrailingSlash(inputPath) {
        if (!inputPath || !inputPath.length) {
            return false;
        }
        var /** @type {?} */ hasPrefix = inputPath.endsWith('/');
        return hasPrefix;
    }
    /**
     * @param {?} inputPath
     * @return {?}
     */
    function EnsurePrefixSlash(inputPath) {
        var /** @type {?} */ hasPrefix = HasPrefixSlash(inputPath);
        var /** @type {?} */ pathParsed = hasPrefix ? inputPath : '/' + inputPath;
        return pathParsed;
    }
    /**
     * @param {?} inputPath
     * @return {?}
     */
    function EnsureTrailingSlash(inputPath) {
        var /** @type {?} */ hasTrailing = HasTrailingSlash(inputPath);
        var /** @type {?} */ pathParsed = hasTrailing ? inputPath : inputPath + '/';
        return pathParsed;
    }
    /**
     * @param {?} inputPath
     * @return {?}
     */
    function EnsureAbsoluteDirectory(inputPath) {
        var /** @type {?} */ pathParsed = EnsureTrailingSlash(EnsurePrefixSlash(inputPath));
        return pathParsed;
    }
    /**
     * @param {?} inputPath
     * @return {?}
     */
    function EnsureNoTrailingSlash(inputPath) {
        var /** @type {?} */ hasTrailing = HasTrailingSlash(inputPath);
        var /** @type {?} */ pathParsed = hasTrailing ? inputPath.slice(0, -1) : inputPath;
        return pathParsed;
    }
    /**
     * @param {?} inputPath
     * @return {?}
     */
    function Add2ToPath(inputPath) {
        var /** @type {?} */ dotSegments = inputPath.split('.');
        var /** @type {?} */ extension = dotSegments.pop();
        var /** @type {?} */ fileName = dotSegments.join('.') + ' (2)' + '.' + extension;
        return fileName;
    }
    /**
     * @param {?} inputPath
     * @return {?}
     */
    function Add2ToPathDir(inputPath) {
        var /** @type {?} */ pathWithoutSlash = EnsureNoTrailingSlash(inputPath);
        var /** @type {?} */ pathWith2 = pathWithoutSlash + ' (2)';
        var /** @type {?} */ newDirName = EnsureTrailingSlash(pathWith2);
        return newDirName;
    }

    /**
     * @record
     */
    function CopyDialogInterface() { }
    function CopyDialogInterface_tsickle_Closure_declarations() {
        /** @type {?} */
        CopyDialogInterface.prototype.files;
        /** @type {?} */
        CopyDialogInterface.prototype.isCopy;
        /** @type {?} */
        CopyDialogInterface.prototype.actionHandler;
    }
    var AppDialogCopyComponent = /** @class */ (function () {
        /**
         * @param {?} logger
         * @param {?} dialogRef
         * @param {?} data
         */
        function AppDialogCopyComponent(logger, dialogRef, data) {
            this.logger = logger;
            this.dialogRef = dialogRef;
            this.data = data;
            this.destroyed = new rxjs.Subject();
            this.$copyPathChanged = new rxjs.BehaviorSubject(null);
            this.init().catch(function (e) { return console.error(e); });
        }
        /**
         * @return {?}
         */
        AppDialogCopyComponent.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, firstFile;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.logger.info('initializing dialog:', { data: this.data });
                            this.items = this.data.files;
                            if (this.data.isCopy) {
                                this.OkLabel = 'Copy';
                                this.OkIcon = 'content_copy';
                            }
                            else {
                                this.OkLabel = 'Move';
                                this.OkIcon = 'forward';
                            }
                            _a = this;
                            return [4 /*yield*/, this.data.actionHandler.CloneProvider()];
                        case 1:
                            _a.actionHandlers = _b.sent();
                            this.mainActions = [
                                {
                                    label: 'Home',
                                    icon: 'home',
                                    onClick: function () { return __awaiter(_this, void 0, void 0, function () {
                                        var rootPath;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    this.logger.info('Back clicked');
                                                    rootPath = this.actionHandlers.GetRootPath();
                                                    return [4 /*yield*/, this.actionHandlers.OnNavigateTo(rootPath)];
                                                case 1:
                                                    _a.sent();
                                                    this.onSelectedDirectory(rootPath);
                                                    return [2 /*return*/, this.onSelectedDirectory(rootPath)];
                                            }
                                        });
                                    }); },
                                    $disabled: rxjs.combineLatest([
                                        this.actionHandlers.$CurrentPathIsRoot,
                                        this.$copyPathChanged
                                    ]).pipe(operators.map(function (_a) {
                                        var _b = __read(_a, 2), isRoot = _b[0], copyTo = _b[1];
                                        return _this.DisableCopy;
                                    }))
                                },
                                {
                                    label: 'Back',
                                    icon: 'reply',
                                    onClick: function () { return __awaiter(_this, void 0, void 0, function () {
                                        var selectedDirectory;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    this.logger.info('Back clicked');
                                                    return [4 /*yield*/, this.actionHandlers.OnNavigateToParent()];
                                                case 1:
                                                    _a.sent();
                                                    return [4 /*yield*/, this.actionHandlers.GetCurrentPath()];
                                                case 2:
                                                    selectedDirectory = _a.sent();
                                                    return [2 /*return*/, this.onSelectedDirectory(selectedDirectory)];
                                            }
                                        });
                                    }); },
                                    $disabled: this.actionHandlers.$CurrentPathIsRoot
                                },
                                {
                                    label: 'New Folder',
                                    icon: 'create_new_folder',
                                    onClick: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                        return [2 /*return*/, this.actionHandlers.OnNewFolderInCurrentDirectory()];
                                    }); }); }
                                }
                            ];
                            this.actionHandlers.$FilesWithIcons
                                .pipe(operators.takeUntil(this.destroyed))
                                .subscribe(function (fileItems) {
                                _this.folders = fileItems.filter(function (f) { return f.type === 'dir'; });
                            });
                            firstFile = __spread(this.items).pop();
                            this.setSrcDirectory(firstFile.fullPath);
                            this.setCopyToPath(this.actionHandlers.GetRootPath());
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @return {?}
         */
        AppDialogCopyComponent.prototype.ngOnDestroy = function () {
            this.destroyed.next();
        };
        Object.defineProperty(AppDialogCopyComponent.prototype, "SelectedFolder", {
            /**
             * @return {?}
             */
            get: function () {
                return !!this.copyToPath;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppDialogCopyComponent.prototype, "SameAsSrcFolder", {
            /**
             * @return {?}
             */
            get: function () {
                return this.copyToPath === this.srcDirectory;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppDialogCopyComponent.prototype, "DisableCopy", {
            /**
             * @return {?}
             */
            get: function () {
                return !this.SelectedFolder || this.SameAsSrcFolder;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?} inputPath
         * @return {?}
         */
        AppDialogCopyComponent.prototype.setCopyToPath = function (inputPath) {
            var /** @type {?} */ dirPath = EnsureTrailingSlash(inputPath);
            this.copyToPath = dirPath;
            this.$copyPathChanged.next(dirPath);
            this.copyToPathRelative = this.actionHandlers.ConvertToRelativePath(dirPath);
            this.logger.info('setCopyToPath:', {
                inputPath: inputPath,
                copyToPath: this.copyToPath,
                copyToPathRelative: this.copyToPathRelative
            });
        };
        /**
         * @param {?} inputPath
         * @return {?}
         */
        AppDialogCopyComponent.prototype.setSrcDirectory = function (inputPath) {
            var /** @type {?} */ dirPath = EnsureTrailingSlash(path__default.dirname(inputPath));
            this.srcDirectory = dirPath;
            this.logger.info('setSrcDirectory:', {
                inputPath: inputPath,
                srcDirectory: this.srcDirectory
            });
        };
        /**
         * @param {?} directoryPath
         * @return {?}
         */
        AppDialogCopyComponent.prototype.onEnterDirectory = function (directoryPath) {
            this.logger.info('onEnterDirectory:', { directoryPath: directoryPath });
            this.setCopyToPath(directoryPath);
            return this.actionHandlers.OnNavigateTo(directoryPath);
        };
        /**
         * @param {?} directoryPath
         * @return {?}
         */
        AppDialogCopyComponent.prototype.onSelectedDirectory = function (directoryPath) {
            this.logger.info('onSelectedDirectory:', { directoryPath: directoryPath });
            this.setCopyToPath(directoryPath);
        };
        /**
         * @return {?}
         */
        AppDialogCopyComponent.prototype.onSubmit = function () {
            this.dialogRef.close(this.copyToPath);
        };
        /**
         * @return {?}
         */
        AppDialogCopyComponent.prototype.onCancel = function () {
            this.dialogRef.close();
        };
        return AppDialogCopyComponent;
    }());
    AppDialogCopyComponent.decorators = [
        { type: i0.Component, args: [{
                    template: "\n    <base-dialog\n      *ngIf=\"srcDirectory\"\n      [header]=\"headerTemplate\"\n      [body]=\"bodyTemplate\"\n      [actions]=\"actionsTemplate\"\n    >\n      <ng-template #headerTemplate>\n        <h2>{{ OkLabel }} Items</h2>\n      </ng-template>\n      <ng-template #bodyTemplate>\n        <h5 class=\"my-5\">Selected Items</h5>\n        <mat-chip-list class=\"mb-5\">\n          <mat-chip *ngFor=\"let file of items\">\n            <mat-icon *ngIf=\"file.type === 'file'\">description</mat-icon>\n            <mat-icon *ngIf=\"file.type !== 'file'\">folder</mat-icon>\n            {{ file.name }}\n          </mat-chip>\n        </mat-chip-list>\n        <h5 class=\"my-5\">Navigate to destination folder</h5>\n        <div class=\"full-width\">\n          <mat-card class=\"m-10 bg-grey\">\n            <app-file-table-mini-folder-browser\n              [folders]=\"folders\"\n              [mainActions]=\"mainActions\"\n              (enterDirectory)=\"onEnterDirectory($event)\"\n              (selectedDirectory)=\"onSelectedDirectory($event)\"\n            >\n            </app-file-table-mini-folder-browser>\n          </mat-card>\n        </div>\n      </ng-template>\n      <ng-template #actionsTemplate>\n        <h5 class=\"p5 m0\" *ngIf=\"!SelectedFolder\">No folder selected</h5>\n        <h5 class=\"p5 m0\" *ngIf=\"SameAsSrcFolder\">\n          Cannot copy to the same folder\n        </h5>\n        <h5 class=\"p5 m0\" *ngIf=\"!DisableCopy\">\n          Will copy Selected Items to:\n          <strong *ngIf=\"!copyToPathRelative\">/</strong>\n          <strong>{{ copyToPathRelative }}</strong>\n        </h5>\n        <btns-cancel-ok\n          [okIcon]=\"OkIcon\"\n          [okLabel]=\"OkLabel\"\n          [okDisabled]=\"DisableCopy\"\n          (clickedCancel)=\"onCancel()\"\n          (clickedOk)=\"onSubmit()\"\n        >\n        </btns-cancel-ok>\n      </ng-template>\n    </base-dialog>\n  ",
                    styles: ["\n      .bg-grey {\n        background-color: #eee;\n      }\n    ", "h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
                }] }
    ];
    /** @nocollapse */
    AppDialogCopyComponent.ctorParameters = function () { return [
        { type: LoggerService },
        { type: dialog.MatDialogRef },
        { type: undefined, decorators: [{ type: i0.Inject, args: [dialog.MAT_DIALOG_DATA,] }] }
    ]; };
    function AppDialogCopyComponent_tsickle_Closure_declarations() {
        /** @type {?} */
        AppDialogCopyComponent.prototype.copyToPathRelative;
        /** @type {?} */
        AppDialogCopyComponent.prototype.copyToPath;
        /** @type {?} */
        AppDialogCopyComponent.prototype.srcDirectory;
        /** @type {?} */
        AppDialogCopyComponent.prototype.items;
        /** @type {?} */
        AppDialogCopyComponent.prototype.actionHandlers;
        /** @type {?} */
        AppDialogCopyComponent.prototype.mainActions;
        /** @type {?} */
        AppDialogCopyComponent.prototype.folders;
        /** @type {?} */
        AppDialogCopyComponent.prototype.OkLabel;
        /** @type {?} */
        AppDialogCopyComponent.prototype.OkIcon;
        /** @type {?} */
        AppDialogCopyComponent.prototype.destroyed;
        /** @type {?} */
        AppDialogCopyComponent.prototype.$copyPathChanged;
        /** @type {?} */
        AppDialogCopyComponent.prototype.logger;
        /** @type {?} */
        AppDialogCopyComponent.prototype.dialogRef;
        /** @type {?} */
        AppDialogCopyComponent.prototype.data;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @record
     */
    function PermissionsObjectDialogInterface() { }
    function PermissionsObjectDialogInterface_tsickle_Closure_declarations() {
        /** @type {?} */
        PermissionsObjectDialogInterface.prototype.files;
        /** @type {?} */
        PermissionsObjectDialogInterface.prototype.config;
    }
    /**
     * @record
     */
    function PermissionsObjectDialogResponseInterface() { }
    function PermissionsObjectDialogResponseInterface_tsickle_Closure_declarations() {
        /** @type {?} */
        PermissionsObjectDialogResponseInterface.prototype.permissionsObj;
        /** @type {?} */
        PermissionsObjectDialogResponseInterface.prototype.files;
    }
    var AppDialogPermissionsSetObjectComponent = /** @class */ (function () {
        /**
         * @param {?} logger
         * @param {?} dialogRef
         * @param {?} data
         */
        function AppDialogPermissionsSetObjectComponent(logger, dialogRef, data) {
            var _this = this;
            this.logger = logger;
            this.dialogRef = dialogRef;
            this.data = data;
            this.othersControl = new forms.FormControl();
            this.othersOptions = [
                'read/write',
                'read',
                'hidden',
            ];
            this.allReadersControl = new forms.FormControl([]);
            this.allWritersControl = new forms.FormControl([]);
            this.destroyed = new rxjs.Subject();
            this.logger.info('Initializing setobject dialog', { data: data });
            this.items = data.files;
            this.config = data.config;
            var /** @type {?} */ users$ = this.config.users;
            var /** @type {?} */ groups$ = this.config.groups;
            this.$allEntities = rxjs.combineLatest([groups$, users$]).pipe(operators.tap(function (allEntities) { return _this.logger.info('allEntities', { allEntities: allEntities }); }), operators.map(function (arr) {
                var /** @type {?} */ tempEntities = [
                    {
                        uid: '',
                        name: 'Groups: ',
                        isDisabled: true,
                    },
                ];
                tempEntities = tempEntities.concat(arr[0]);
                tempEntities.push({
                    uid: '',
                    name: 'Users: ',
                    isDisabled: true,
                });
                return tempEntities.concat(arr[1]);
            }), operators.map(function (arr) { return arr.map(function (n) { return ({
                id: n.uid,
                name: n.name,
                isDisabled: !!n.isDisabled,
            }); }); }));
            this.$allEntities.subscribe(function (allEntities) { return _this.logger.info('allEntities', { allEntities: allEntities }); });
            this.initPermissions(data.files);
        }
        /**
         * @return {?}
         */
        AppDialogPermissionsSetObjectComponent.prototype.ngOnDestroy = function () {
            this.destroyed.next();
        };
        /**
         * @param {?} files
         * @return {?}
         */
        AppDialogPermissionsSetObjectComponent.prototype.initPermissions = function (files) {
            var /** @type {?} */ allPermissions = files.map(function (f) { return f.permissions; });
            var /** @type {?} */ othersVal = allPermissions
                .map(function (p) { return p.others; })
                .reduce(function (acc, curr) {
                if (acc === '-') {
                    return curr;
                }
                var /** @type {?} */ stillSame = acc === curr;
                if (stillSame) {
                    return acc;
                }
                return null;
            }, '-');
            if (othersVal) {
                this.othersControl.setValue(othersVal);
            }
            var /** @type {?} */ uniqueWriters = this.getUniqueTags(allPermissions.map(function (p) { return p.writers; }));
            this.allWritersControl.setValue(uniqueWriters);
            var /** @type {?} */ uniqueReaders = this.getUniqueTags(allPermissions.map(function (p) { return p.readers; }));
            this.allReadersControl.setValue(uniqueReaders);
            this.logger.info('set permissions', {
                othersVal: othersVal,
                uniqueWriters: uniqueWriters,
                uniqueReaders: uniqueReaders,
            });
        };
        /**
         * @param {?} inputEntities
         * @return {?}
         */
        AppDialogPermissionsSetObjectComponent.prototype.getUniqueTags = function (inputEntities) {
            var /** @type {?} */ allInputEntities = inputEntities.reduce(function (acc, curr) {
                return acc.concat(curr);
            }, []);
            var /** @type {?} */ allEntitiesUnique = Array.from(new Set(allInputEntities));
            return this.strings2Tags(allEntitiesUnique);
        };
        /**
         * @param {?} inputArr
         * @return {?}
         */
        AppDialogPermissionsSetObjectComponent.prototype.strings2Tags = function (inputArr) {
            return inputArr.map(function (val) { return ({
                id: uuid.v4(),
                name: val,
            }); });
        };
        /**
         * @param {?} inputArr
         * @return {?}
         */
        AppDialogPermissionsSetObjectComponent.prototype.tags2Strings = function (inputArr) {
            return inputArr.map(function (val) { return val.name; });
        };
        /**
         * @return {?}
         */
        AppDialogPermissionsSetObjectComponent.prototype.onSubmit = function () {
            var /** @type {?} */ newPermissionsObj = {
                others: this.othersControl.value,
                readers: this.tags2Strings(this.allReadersControl.value),
                writers: this.tags2Strings(this.allWritersControl.value),
            };
            var /** @type {?} */ response = {
                permissionsObj: newPermissionsObj,
                files: this.data.files,
            };
            this.logger.info('onSubmit', { newPermissionsObj: newPermissionsObj, response: response });
            this.dialogRef.close(response);
        };
        /**
         * @return {?}
         */
        AppDialogPermissionsSetObjectComponent.prototype.onCancel = function () {
            this.dialogRef.close();
        };
        return AppDialogPermissionsSetObjectComponent;
    }());
    AppDialogPermissionsSetObjectComponent.decorators = [
        { type: i0.Component, args: [{
                    template: "\n    <base-dialog\n      [header]=\"headerTemplate\"\n      [body]=\"bodyTemplate\"\n      [actions]=\"actionsTemplate\"\n    >\n      <ng-template #headerTemplate>\n        <h2>Set Permissions</h2>\n      </ng-template>\n      <ng-template #bodyTemplate>\n        <h5 class=\"my-5\">Selected Items</h5>\n        <mat-chip-list class=\"mb-5\">\n          <mat-chip *ngFor=\"let file of items\">\n            <mat-icon *ngIf=\"file.type === 'file'\">description</mat-icon>\n            <mat-icon *ngIf=\"file.type !== 'file'\">folder</mat-icon>\n            {{ file.name }}\n          </mat-chip>\n        </mat-chip-list>\n\n        <div class=\"full-width\">\n          <h5 class=\"my-5\">Who can see this</h5>\n          <app-control-tag-multiple\n            class=\"full-width -mt-15\"\n            [control]=\"allReadersControl\"\n            [selectChoices$]=\"$allEntities\"\n            [allowCustom]=\"false\"\n          >\n          </app-control-tag-multiple>\n        </div>\n\n        <div *ngIf=\"config?.showWriters\">\n          <h5 class=\"my-5\">Who can edit this</h5>\n          <app-control-tag-multiple\n            class=\"full-width -mt-15\"\n            [control]=\"allWritersControl\"\n            [selectChoices$]=\"$allEntities\"\n            [allowCustom]=\"false\"\n          >\n          </app-control-tag-multiple>\n        </div>\n\n        <div *ngIf=\"config?.showOthers\">\n          <h5 class=\"my-5\">Everyone else can</h5>\n          <mat-form-field class=\"full-width\">\n            <mat-select matInput [formControl]=\"othersControl\">\n              <mat-option\n                *ngFor=\"let permission of othersOptions\"\n                [value]=\"permission\"\n              >\n                {{ permission }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </ng-template>\n\n      <ng-template #actionsTemplate>\n        <btns-cancel-ok\n          okIcon=\"done\"\n          okLabel=\"Set Permissions\"\n          (clickedCancel)=\"onCancel()\"\n          (clickedOk)=\"onSubmit()\"\n        >\n        </btns-cancel-ok>\n      </ng-template>\n    </base-dialog>\n  ",
                    styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}", "\n      .my-5 {\n        margin: 5px 0;\n      }\n      .mb-5 {\n        margin-bottom: 5px;\n      }\n      .-mt-15 {\n        margin-top: -15px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    AppDialogPermissionsSetObjectComponent.ctorParameters = function () { return [
        { type: LoggerService },
        { type: dialog.MatDialogRef },
        { type: undefined, decorators: [{ type: i0.Inject, args: [dialog.MAT_DIALOG_DATA,] }] }
    ]; };
    function AppDialogPermissionsSetObjectComponent_tsickle_Closure_declarations() {
        /** @type {?} */
        AppDialogPermissionsSetObjectComponent.prototype.items;
        /** @type {?} */
        AppDialogPermissionsSetObjectComponent.prototype.othersControl;
        /** @type {?} */
        AppDialogPermissionsSetObjectComponent.prototype.othersOptions;
        /** @type {?} */
        AppDialogPermissionsSetObjectComponent.prototype.allReadersControl;
        /** @type {?} */
        AppDialogPermissionsSetObjectComponent.prototype.allWritersControl;
        /** @type {?} */
        AppDialogPermissionsSetObjectComponent.prototype.$allEntities;
        /** @type {?} */
        AppDialogPermissionsSetObjectComponent.prototype.destroyed;
        /** @type {?} */
        AppDialogPermissionsSetObjectComponent.prototype.config;
        /** @type {?} */
        AppDialogPermissionsSetObjectComponent.prototype.logger;
        /** @type {?} */
        AppDialogPermissionsSetObjectComponent.prototype.dialogRef;
        /** @type {?} */
        AppDialogPermissionsSetObjectComponent.prototype.data;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NotificationService = /** @class */ (function () {
        /**
         * @param {?} matSnackbar
         */
        function NotificationService(matSnackbar) {
            this.matSnackbar = matSnackbar;
        }
        /**
         * @param {?} msg
         * @param {?=} title
         * @return {?}
         */
        NotificationService.prototype.notify = function (msg, title) {
            return this.matSnackbar.open(msg, title, {
                duration: 4000,
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
            });
        };
        /**
         * @return {?}
         */
        NotificationService.prototype.notifyCancelled = function () {
            return this.notify('Cancelled Operation');
        };
        return NotificationService;
    }());
    NotificationService.decorators = [
        { type: i0.Injectable }
    ];
    /** @nocollapse */
    NotificationService.ctorParameters = function () { return [
        { type: snackBar.MatSnackBar }
    ]; };
    function NotificationService_tsickle_Closure_declarations() {
        /** @type {?} */
        NotificationService.prototype.matSnackbar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @record
     */
    function UploadDialogInterface() { }
    function UploadDialogInterface_tsickle_Closure_declarations() {
        /** @type {?} */
        UploadDialogInterface.prototype.currentDirectory;
        /** @type {?} */
        UploadDialogInterface.prototype.firebaseConfig;
        /** @type {?} */
        UploadDialogInterface.prototype.bucketName;
    }
    /**
     * @record
     */
    function UploadDialogResponseInterface() { }
    function UploadDialogResponseInterface_tsickle_Closure_declarations() {
        /** @type {?} */
        UploadDialogResponseInterface.prototype.uploaded;
    }
    var AppDialogUploadFilesComponent = /** @class */ (function () {
        /**
         * @param {?} logger
         * @param {?} notifications
         * @param {?} dialogRef
         * @param {?} data
         */
        function AppDialogUploadFilesComponent(logger, notifications, dialogRef, data) {
            this.logger = logger;
            this.notifications = notifications;
            this.dialogRef = dialogRef;
            this.data = data;
            this.filesControl = new forms.FormControl([]);
            this.currentDirectory = '';
            this.isUploading = new rxjs.BehaviorSubject(true);
            this.config = {
                directory: data.currentDirectory,
                bucketname: data.bucketName,
                firebaseConfig: data.firebaseConfig
            };
            this.logger.info('initializing:', {
                currentDirectory: this.currentDirectory,
                config: this.config,
                data: data
            });
        }
        /**
         * @return {?}
         */
        AppDialogUploadFilesComponent.prototype.onSubmit = function () {
            var /** @type {?} */ files = this.filesControl.value;
            var /** @type {?} */ response = {
                uploaded: files.map(function (f) { return f.value.name; })
            };
            this.dialogRef.close(response);
        };
        /**
         * @return {?}
         */
        AppDialogUploadFilesComponent.prototype.onCancel = function () {
            var /** @type {?} */ response = {
                uploaded: []
            };
            this.dialogRef.close(response);
        };
        return AppDialogUploadFilesComponent;
    }());
    AppDialogUploadFilesComponent.decorators = [
        { type: i0.Component, args: [{
                    template: "\n    <base-dialog\n      [header]=\"headerTemplate\"\n      [body]=\"bodyTemplate\"\n      [actions]=\"actionsTemplate\"\n    >\n      <ng-template #headerTemplate>\n        <h2>Upload Files</h2>\n        <h5>To Folder: {{ currentDirectory }}</h5>\n      </ng-template>\n      <ng-template #bodyTemplate>\n        <div style=\"width: 100%;\">\n          <form-file-firebase\n            [formControl]=\"filesControl\"\n            [config]=\"config\"\n            (uploadStatusChanged)=\"isUploading.next($event)\"\n          >\n          </form-file-firebase>\n        </div>\n      </ng-template>\n      <ng-template #actionsTemplate>\n        <btns-cancel-ok\n          okIcon=\"done\"\n          okLabel=\"Finish\"\n          (clickedCancel)=\"onCancel()\"\n          (clickedOk)=\"onSubmit()\"\n          [okDisabled]=\"isUploading | async\"\n        >\n        </btns-cancel-ok>\n      </ng-template>\n    </base-dialog>\n    <div #hidden></div>\n  ",
                    styles: ["\n      .dz-image {\n        display: none;\n      }\n      .dz-details > img {\n        display: none;\n      }\n    ", "h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
                }] }
    ];
    /** @nocollapse */
    AppDialogUploadFilesComponent.ctorParameters = function () { return [
        { type: LoggerService },
        { type: NotificationService },
        { type: dialog.MatDialogRef },
        { type: undefined, decorators: [{ type: i0.Inject, args: [dialog.MAT_DIALOG_DATA,] }] }
    ]; };
    function AppDialogUploadFilesComponent_tsickle_Closure_declarations() {
        /** @type {?} */
        AppDialogUploadFilesComponent.prototype.filesControl;
        /** @type {?} */
        AppDialogUploadFilesComponent.prototype.currentDirectory;
        /** @type {?} */
        AppDialogUploadFilesComponent.prototype.config;
        /** @type {?} */
        AppDialogUploadFilesComponent.prototype.isUploading;
        /** @type {?} */
        AppDialogUploadFilesComponent.prototype.logger;
        /** @type {?} */
        AppDialogUploadFilesComponent.prototype.notifications;
        /** @type {?} */
        AppDialogUploadFilesComponent.prototype.dialogRef;
        /** @type {?} */
        AppDialogUploadFilesComponent.prototype.data;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AppDialogNewFolderComponent = /** @class */ (function () {
        /**
         * @param {?} dialogRef
         */
        function AppDialogNewFolderComponent(dialogRef) {
            this.dialogRef = dialogRef;
            this.folderName = new forms.FormControl('New folder');
        }
        /**
         * @return {?}
         */
        AppDialogNewFolderComponent.prototype.onSubmit = function () {
            this.dialogRef.close(this.folderName.value);
        };
        /**
         * @return {?}
         */
        AppDialogNewFolderComponent.prototype.onCancel = function () {
            this.dialogRef.close();
        };
        return AppDialogNewFolderComponent;
    }());
    AppDialogNewFolderComponent.decorators = [
        { type: i0.Component, args: [{
                    template: "\n    <base-dialog\n      [header]=\"headerTemplate\"\n      [body]=\"bodyTemplate\"\n      [actions]=\"actionsTemplate\"\n    >\n      <ng-template #headerTemplate>\n        <h2>Create Folder</h2>\n      </ng-template>\n      <ng-template #bodyTemplate>\n        <div>\n          <mat-form-field>\n            <input\n              matInput\n              placeholder=\"New Folder Name\"\n              [formControl]=\"folderName\"\n              (keyup.enter)=\"onSubmit()\"\n            />\n          </mat-form-field>\n        </div>\n      </ng-template>\n      <ng-template #actionsTemplate>\n        <btns-cancel-ok\n          okIcon=\"done\"\n          okLabel=\"Create Folder\"\n          (clickedCancel)=\"onCancel()\"\n          (clickedOk)=\"onSubmit()\"\n        >\n        </btns-cancel-ok>\n      </ng-template>\n    </base-dialog>\n  ",
                    styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
                }] }
    ];
    /** @nocollapse */
    AppDialogNewFolderComponent.ctorParameters = function () { return [
        { type: dialog.MatDialogRef }
    ]; };
    function AppDialogNewFolderComponent_tsickle_Closure_declarations() {
        /** @type {?} */
        AppDialogNewFolderComponent.prototype.folderName;
        /** @type {?} */
        AppDialogNewFolderComponent.prototype.dialogRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ConsoleLoggerService = /** @class */ (function () {
        function ConsoleLoggerService() {
        }
        Object.defineProperty(ConsoleLoggerService.prototype, "info", {
            /**
             * @return {?}
             */
            get: function () {
                var /** @type {?} */ boundLogFn = console.log.bind(console, 'ngx-fm:: ');
                return boundLogFn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ConsoleLoggerService.prototype, "warn", {
            /**
             * @return {?}
             */
            get: function () {
                var /** @type {?} */ boundLogFn = console.warn.bind(console, 'ngx-fm:: ');
                return boundLogFn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ConsoleLoggerService.prototype, "error", {
            /**
             * @return {?}
             */
            get: function () {
                var /** @type {?} */ boundLogFn = console.error.bind(console, 'ngx-fm:: ');
                return boundLogFn;
            },
            enumerable: false,
            configurable: true
        });
        return ConsoleLoggerService;
    }());
    ConsoleLoggerService.decorators = [
        { type: i0.Injectable }
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ClientCache = /** @class */ (function () {
        function ClientCache() {
            this.logger = new ConsoleLoggerService();
            this.cachedFolders = {};
            this.cacheLimit = 20;
        }
        /**
         * @param {?} input
         * @return {?}
         */
        ClientCache.prototype.GetCached = function (input) {
            var /** @type {?} */ directoryPath = EnsureTrailingSlash(input);
            return this.cachedFolders[directoryPath] || [];
        };
        /**
         * @param {?} input
         * @param {?} newFolderFiles
         * @return {?}
         */
        ClientCache.prototype.SetCached = function (input, newFolderFiles) {
            var /** @type {?} */ directoryPath = EnsureTrailingSlash(input);
            var /** @type {?} */ oldFolders = this.GetCached(directoryPath);
            this.logger.info('SetCached()', {
                from: oldFolders.length,
                to: newFolderFiles.length
            });
            if (this.cachedCount > this.cacheLimit) {
                this.removeRandomFolderPath();
            }
            this.cachedFolders[directoryPath] = newFolderFiles;
        };
        Object.defineProperty(ClientCache.prototype, "cachedCount", {
            /**
             * @return {?}
             */
            get: function () {
                return Object.keys(this.cachedFolders).length;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        ClientCache.prototype.removeRandomFolderPath = function () {
            var /** @type {?} */ randomIndex = Math.floor(Math.random() * this.cachedCount);
            var /** @type {?} */ randomKey = Object.keys(this.cachedFolders)[randomIndex];
            delete this.cachedFolders[randomKey];
        };
        return ClientCache;
    }());
    function ClientCache_tsickle_Closure_declarations() {
        /** @type {?} */
        ClientCache.prototype.logger;
        /** @type {?} */
        ClientCache.prototype.cachedFolders;
        /** @type {?} */
        ClientCache.prototype.cacheLimit;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ClientFileSystemDataStore = /** @class */ (function () {
        function ClientFileSystemDataStore() {
            this.cache = new ClientCache();
            this._$currentFiles = new rxjs.BehaviorSubject([]);
            this._$currentPath = new rxjs.BehaviorSubject(null);
            this._$selectedFile = new rxjs.BehaviorSubject(null);
            this.logger = new ConsoleLoggerService();
        }
        /**
         * @param {?} cache
         * @return {?}
         */
        ClientFileSystemDataStore.prototype.SetCache = function (cache) {
            this.cache = cache;
        };
        Object.defineProperty(ClientFileSystemDataStore.prototype, "$currentFiles", {
            /**
             * @return {?}
             */
            get: function () {
                return this._$currentFiles;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ClientFileSystemDataStore.prototype, "$currentPath", {
            /**
             * @return {?}
             */
            get: function () {
                return this._$currentPath;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ClientFileSystemDataStore.prototype, "$selectedFile", {
            /**
             * @return {?}
             */
            get: function () {
                return this._$selectedFile;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        ClientFileSystemDataStore.prototype.CurrentPath = function () {
            return this._$currentPath.value;
        };
        /**
         * @return {?}
         */
        ClientFileSystemDataStore.prototype.CurrentFiles = function () {
            return this._$currentFiles.value;
        };
        /**
         * @param {?} directoryPath
         * @return {?}
         */
        ClientFileSystemDataStore.prototype.GetCached = function (directoryPath) {
            return this.cache.GetCached(directoryPath);
        };
        /**
         * @param {?} files
         * @param {?} directoryPath
         * @return {?}
         */
        ClientFileSystemDataStore.prototype.SetDirectoryFiles = function (files, directoryPath) {
            this.cache.SetCached(directoryPath, files);
        };
        /**
         * @param {?} path
         * @return {?}
         */
        ClientFileSystemDataStore.prototype.SetPath = function (path) {
            var /** @type {?} */ pathParsed = EnsurePrefixSlash(path);
            this.logger.info('datastore.SetPath', { path: path, pathParsed: pathParsed });
            var /** @type {?} */ cachedFiles = this.cache.GetCached(pathParsed);
            this._$currentPath.next(pathParsed);
            this._$currentFiles.next(cachedFiles);
        };
        /**
         * @param {?} item
         * @return {?}
         */
        ClientFileSystemDataStore.prototype.SelectFile = function (item) {
            this._$selectedFile.next(item);
        };
        /**
         * @param {?} fullPath
         * @param {?} cwd
         * @return {?}
         */
        ClientFileSystemDataStore.prototype.exists = function (fullPath, cwd) {
            var /** @type {?} */ filesInDir = this.cache.GetCached(cwd);
            var /** @type {?} */ exists = filesInDir.find(function (f) { return f.fullPath === fullPath; });
            return !!exists;
        };
        /**
         * @return {?}
         */
        ClientFileSystemDataStore.prototype.CloneStore = function () {
            var /** @type {?} */ newStore = new ClientFileSystemDataStore();
            newStore.SetPath(this.CurrentPath());
            newStore.SetDirectoryFiles(this._$currentFiles.getValue(), this.CurrentPath());
            newStore.SetCache(this.cache);
            return newStore;
        };
        return ClientFileSystemDataStore;
    }());
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @record
     */
    function FileIcon() { }
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
    function FolderTheme() { }
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
    function FolderIcon() { }
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
    function DefaultIcon() { }
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
    var FileIcons = /** @class */ (function () {
        function FileIcons() {
        }
        return FileIcons;
    }());
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
    var /** @type {?} */ fileIcons = {
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
    var /** @type {?} */ folderIcons = [
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
    var /** @type {?} */ getFileIconName = function (input) {
        if (!input || !input.includes('.')) {
            return fileIcons.defaultIcon.name;
        }
        var /** @type {?} */ filename = input.toLowerCase();
        var /** @type {?} */ ext = getFileExtension(filename);
        var /** @type {?} */ matchesExt = fileIcons.icons.filter(function (x) { return !!x.fileExtensions && !!x.fileExtensions.filter(function (y) { return y === ext; }).length; });
        var /** @type {?} */ matchesFilename = fileIcons.icons.filter(function (x) { return !!x.fileNames && !!x.fileNames.filter(function (y) { return y === filename; }).length; });
        if (!!matchesFilename.length) {
            return matchesFilename[0].name;
        }
        else if (!!matchesExt.length) {
            return matchesExt[0].name;
        }
        return fileIcons.defaultIcon.name;
    };
    var ɵ0 = getFileIconName;
    var /** @type {?} */ isFileImage = function (filename) { return getFileIconName(filename) === 'image'; };
    var ɵ1 = isFileImage;
    var /** @type {?} */ getFileExtension = function (filename) { return filename.split('.').pop(); };
    var ɵ2 = getFileExtension;
    var /** @type {?} */ getFileName = function (filename) {
        var /** @type {?} */ slashSegments = filename.split('/');
        var /** @type {?} */ filenameWithExt = slashSegments.pop();
        var /** @type {?} */ dotSegments = filenameWithExt.split('.');
        if (dotSegments.length < 2) {
            return filenameWithExt;
        }
        dotSegments.pop();
        return dotSegments.join('.');
    };
    var ɵ3 = getFileName;
    var /** @type {?} */ getFolderIconName = function (filename) {
        return 'folder-other';
        filename = filename.toLowerCase();
        var /** @type {?} */ matches = folderIcons[0].icons.filter(function (x) { return !!x.folderNames && !!x.folderNames.filter(function (y) { return y === filename; }).length; });
        if (!!matches.length) {
            return matches[0].name;
        }
        return folderIcons[0].defaultIcon.name;
    };
    var ɵ4 = getFolderIconName;
    var /** @type {?} */ guesser = {
        isFileImage: isFileImage,
        getFileExtension: getFileExtension,
        getFileName: getFileName,
        getFolderIconName: getFolderIconName,
        getFileIconName: getFileIconName,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var IconUrlResolverService = /** @class */ (function () {
        /**
         * @param {?} baseHref
         */
        function IconUrlResolverService(baseHref) {
            this.baseHref = baseHref;
            this.iconAssetDirectory = '/assets/fileicons/';
        }
        /**
         * @param {?} filename
         * @return {?}
         */
        IconUrlResolverService.prototype.getFileIconUrl = function (filename) {
            return path__default.join(this.baseHref, this.iconAssetDirectory, guesser.getFileIconName(filename) + '.svg');
        };
        /**
         * @param {?} filename
         * @return {?}
         */
        IconUrlResolverService.prototype.getFolderIconUrl = function (filename) {
            return path__default.join(this.baseHref, this.iconAssetDirectory, guesser.getFolderIconName(filename) + '.svg');
        };
        return IconUrlResolverService;
    }());
    IconUrlResolverService.decorators = [
        { type: i0.Injectable }
    ];
    /** @nocollapse */
    IconUrlResolverService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: i0.Inject, args: [common.APP_BASE_HREF,] }] }
    ]; };
    function IconUrlResolverService_tsickle_Closure_declarations() {
        /** @type {?} */
        IconUrlResolverService.prototype.iconAssetDirectory;
        /** @type {?} */
        IconUrlResolverService.prototype.baseHref;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} name
     * @param {?} fullPath
     * @return {?}
     */
    function MakeClientDirectory(name, fullPath) {
        return {
            name: name,
            fullPath: fullPath,
            rightsFirebase: [],
            permissions: {},
            size: null,
            date: new Date().toISOString(),
            type: 'dir'
        };
    }
    /**
     * @param {?} fullPath
     * @return {?}
     */
    function MakeClientFile(fullPath) {
        var /** @type {?} */ fileName = path__default.basename(fullPath);
        return {
            name: fileName,
            fullPath: fullPath,
            rightsFirebase: [],
            permissions: {},
            size: null,
            date: new Date().toISOString(),
            type: 'file'
        };
    }

    var ClientFileSystemService = /** @class */ (function () {
        /**
         * @param {?} logger
         * @param {?} iconResolver
         */
        function ClientFileSystemService(logger, iconResolver) {
            this.logger = logger;
            this.iconResolver = iconResolver;
            this.store = new ClientFileSystemDataStore();
            this.instanceCountIncr();
        }
        Object.defineProperty(ClientFileSystemService.prototype, "$currentFiles", {
            /**
             * @return {?}
             */
            get: function () {
                return this.store.$currentFiles;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ClientFileSystemService.prototype, "$currentPath", {
            /**
             * @return {?}
             */
            get: function () {
                return this.store.$currentPath;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ClientFileSystemService.prototype, "$selectedFile", {
            /**
             * @return {?}
             */
            get: function () {
                return this.store.$selectedFile;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        ClientFileSystemService.prototype.instanceCountIncr = function () {
            ClientFileSystemService.instanceCount++;
            this.logger.info('new instance created', { instances: this.instances });
        };
        /**
         * @return {?}
         */
        ClientFileSystemService.prototype.instanceCountDecr = function () {
            ClientFileSystemService.instanceCount--;
            this.logger.info('instance destroyed', { instances: this.instances });
        };
        Object.defineProperty(ClientFileSystemService.prototype, "instances", {
            /**
             * @return {?}
             */
            get: function () {
                return ClientFileSystemService.instanceCount;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        ClientFileSystemService.prototype.ngOnDestroy = function () {
            this.instanceCountDecr();
        };
        /**
         * @param {?} store
         * @return {?}
         */
        ClientFileSystemService.prototype.SetStore = function (store) {
            this.store = store;
        };
        /**
         * @param {?} folderPath
         * @return {?}
         */
        ClientFileSystemService.prototype.OnList = function (folderPath) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.logger.info('client.OnList', { folderPath: folderPath });
                    this.store.SetPath(folderPath);
                    return [2 /*return*/];
                });
            });
        };
        /**
         * @param {?} newPath
         * @param {?=} disableNoClobber
         * @return {?}
         */
        ClientFileSystemService.prototype.OnCreateFolder = function (newPath, disableNoClobber) {
            return __awaiter(this, void 0, void 0, function () {
                var cwd, cachedFiles, newDirPathNoClobber, folderName, newFolder;
                return __generator(this, function (_a) {
                    cwd = path.dirname(newPath);
                    cachedFiles = this.store.GetCached(cwd);
                    newDirPathNoClobber = this.getNextFreeFoldernameRecursively(newPath, cwd);
                    folderName = path.basename(newDirPathNoClobber);
                    newFolder = MakeClientDirectory(folderName, newDirPathNoClobber);
                    cachedFiles.unshift(newFolder);
                    this.store.SetDirectoryFiles(cachedFiles, cwd);
                    this.store.SetPath(cwd);
                    return [2 /*return*/];
                });
            });
        };
        /**
         * @param {?} uploadedFiles
         * @return {?}
         */
        ClientFileSystemService.prototype.OnUploadedFiles = function (uploadedFiles) {
            return __awaiter(this, void 0, void 0, function () {
                var cwd;
                var _this = this;
                return __generator(this, function (_a) {
                    if (!Array.isArray(uploadedFiles) || !uploadedFiles.length) {
                        return [2 /*return*/];
                    }
                    cwd = this.store.CurrentPath();
                    uploadedFiles.map(function (f) { return _this.recursivelyTryAddFile(cwd, f); });
                    return [2 /*return*/];
                });
            });
        };
        /**
         * @param {?} cwd
         * @param {?} newFilePath
         * @return {?}
         */
        ClientFileSystemService.prototype.recursivelyTryAddFile = function (cwd, newFilePath) {
            var /** @type {?} */ filePath = EnsureNoTrailingSlash(newFilePath);
            var /** @type {?} */ exists = this.store.exists(filePath, cwd);
            if (!exists) {
                var /** @type {?} */ newFile = MakeClientFile(newFilePath);
                var /** @type {?} */ oldFiles = this.store.GetCached(cwd);
                var /** @type {?} */ newFiles = __spread(oldFiles, [newFile]);
                this.store.SetDirectoryFiles(newFiles, cwd);
                return;
            }
            var /** @type {?} */ filePathWith2 = Add2ToPath(filePath);
            return this.recursivelyTryAddFile(cwd, filePathWith2);
        };
        /**
         * @param {?} singleFileName
         * @param {?} newPath
         * @return {?}
         */
        ClientFileSystemService.prototype.OnCopy = function (singleFileName, newPath) {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/];
            }); });
        };
        /**
         * @param {?} item
         * @param {?} newPath
         * @return {?}
         */
        ClientFileSystemService.prototype.OnMove = function (item, newPath) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.removeSingleFromList(item)];
                });
            });
        };
        /**
         * @param {?} item
         * @param {?} newItemPath
         * @return {?}
         */
        ClientFileSystemService.prototype.OnRename = function (item, newItemPath) {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/];
            }); });
        };
        /**
         * @param {?} item
         * @param {?} content
         * @return {?}
         */
        ClientFileSystemService.prototype.OnEdit = function (item, content) {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/];
            }); });
        };
        /**
         * @param {?} item
         * @return {?}
         */
        ClientFileSystemService.prototype.OnGetcontent = function (item) {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/];
            }); });
        };
        /**
         * @param {?} item
         * @param {?} role
         * @param {?} entity
         * @param {?=} recursive
         * @return {?}
         */
        ClientFileSystemService.prototype.OnSetPermissions = function (item, role, entity, recursive) {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/];
            }); });
        };
        /**
         * @param {?} items
         * @param {?} newPath
         * @return {?}
         */
        ClientFileSystemService.prototype.OnMoveMultiple = function (items, newPath) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.removeMultiple(items)];
                });
            });
        };
        /**
         * @param {?} items
         * @param {?} newPath
         * @return {?}
         */
        ClientFileSystemService.prototype.OnCopyMultiple = function (items, newPath) {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/];
            }); });
        };
        /**
         * @param {?} items
         * @param {?} role
         * @param {?} entity
         * @param {?=} recursive
         * @return {?}
         */
        ClientFileSystemService.prototype.OnSetPermissionsMultiple = function (items, role, entity, recursive) {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/];
            }); });
        };
        /**
         * @param {?} items
         * @param {?} permissionsObj
         * @param {?=} recursive
         * @return {?}
         */
        ClientFileSystemService.prototype.OnSetPermissionsObjectMultiple = function (items, permissionsObj, recursive) {
            return __awaiter(this, void 0, void 0, function () {
                var currentFile;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.$selectedFile.pipe(operators.take(1)).toPromise()];
                        case 1:
                            currentFile = _a.sent();
                            if (items.includes(currentFile.fullPath)) {
                                currentFile.permissions = permissionsObj;
                                this.store.SelectFile(currentFile);
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} items
         * @return {?}
         */
        ClientFileSystemService.prototype.OnRemove = function (items) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.removeMultiple(items)];
                });
            });
        };
        /**
         * @param {?} res
         * @param {?} directoryPath
         * @return {?}
         */
        ClientFileSystemService.prototype.UpdateList = function (res, directoryPath) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.store.SetDirectoryFiles(res.result, directoryPath);
                    return [2 /*return*/];
                });
            });
        };
        /**
         * @param {?} inputDir
         * @param {?} cwd
         * @return {?}
         */
        ClientFileSystemService.prototype.getNextFreeFoldernameRecursively = function (inputDir, cwd) {
            var /** @type {?} */ folderPath = EnsureTrailingSlash(inputDir);
            var /** @type {?} */ exists = this.store.exists(folderPath, cwd);
            if (!exists) {
                return inputDir;
            }
            var /** @type {?} */ nextPath = Add2ToPathDir(folderPath);
            return this.getNextFreeFoldernameRecursively(nextPath, cwd);
        };
        /**
         * @param {?} filePath
         * @return {?}
         */
        ClientFileSystemService.prototype.removeSingleFromList = function (filePath) {
            return __awaiter(this, void 0, void 0, function () {
                var directoryPath, currentFiles, itemName, cachedFilesWithout;
                return __generator(this, function (_a) {
                    directoryPath = path.dirname(filePath);
                    currentFiles = this.store.GetCached(filePath);
                    itemName = this.GetFileNameFromPath(filePath);
                    cachedFilesWithout = currentFiles.filter(function (f) { return f.name !== itemName; });
                    this.store.SetDirectoryFiles(cachedFilesWithout, directoryPath);
                    return [2 /*return*/];
                });
            });
        };
        /**
         * @param {?} inputPath
         * @return {?}
         */
        ClientFileSystemService.prototype.EnsureNoTrailingSlash = function (inputPath) {
            var /** @type {?} */ hasTrailing = inputPath.slice(-1) === '/';
            var /** @type {?} */ pathParsed = hasTrailing ? inputPath.slice(0, -1) : inputPath;
            return pathParsed;
        };
        /**
         * @param {?} inputPath
         * @return {?}
         */
        ClientFileSystemService.prototype.GetFileNameFromPath = function (inputPath) {
            var /** @type {?} */ safePath = inputPath || '';
            var /** @type {?} */ parsedPath = this.EnsureNoTrailingSlash(safePath);
            var /** @type {?} */ basename = parsedPath.split('/').pop();
            return basename;
        };
        /**
         * @param {?} filePaths
         * @return {?}
         */
        ClientFileSystemService.prototype.removeMultiple = function (filePaths) {
            return __awaiter(this, void 0, void 0, function () {
                var firstPath, directoryPath, removeSet, currentFiles, cachedFilesWithout;
                return __generator(this, function (_a) {
                    firstPath = filePaths[0];
                    if (!firstPath) {
                        return [2 /*return*/];
                    }
                    directoryPath = path.dirname(firstPath);
                    removeSet = new Set(filePaths.map(function (filePath) { return path.basename(filePath); }));
                    currentFiles = this.store.GetCached(directoryPath);
                    cachedFilesWithout = currentFiles.filter(function (f) { return !removeSet.has(f.name); });
                    this.store.SetDirectoryFiles(cachedFilesWithout, directoryPath);
                    this.store.SetPath(directoryPath);
                    return [2 /*return*/];
                });
            });
        };
        Object.defineProperty(ClientFileSystemService.prototype, "$FilesWithIcons", {
            /**
             * @return {?}
             */
            get: function () {
                var _this = this;
                return this.$currentFiles.pipe(operators.map(function (files) { return (files ? files : []); }), operators.map(function (files) { return files.map(function (file) { return _this.addIconPath(file); }); }), operators.map(function (files) { return files.map(function (file) {
                    return Object.assign({}, file);
                }); }));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ClientFileSystemService.prototype, "$NoParentFolder", {
            /**
             * @return {?}
             */
            get: function () {
                return this.$currentPath.pipe(operators.filter(function (p) { return !!p; }), operators.map(function (p) { return p.split('/').length < 2; }));
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?} item
         * @return {?}
         */
        ClientFileSystemService.prototype.onSelectItem = function (item) {
            this.store.SelectFile(item);
        };
        /**
         * @return {?}
         */
        ClientFileSystemService.prototype.CurrentFiles = function () {
            return this.store.CurrentFiles();
        };
        /**
         * @param {?} file
         * @return {?}
         */
        ClientFileSystemService.prototype.addIconPath = function (file) {
            if (file.type === 'file') {
                file['icon'] = this.iconResolver.getFileIconUrl(file.name);
            }
            else {
                file['icon'] = this.iconResolver.getFolderIconUrl(file.name);
            }
            return file;
        };
        /**
         * @return {?}
         */
        ClientFileSystemService.prototype.CloneProvider = function () {
            var /** @type {?} */ newClone = new ClientFileSystemService(this.logger, this.iconResolver);
            var /** @type {?} */ newStore = this.store.CloneStore();
            newClone.SetStore(newStore);
            return newClone;
        };
        return ClientFileSystemService;
    }());
    ClientFileSystemService.instanceCount = 0;
    ClientFileSystemService.decorators = [
        { type: i0.Injectable }
    ];
    /** @nocollapse */
    ClientFileSystemService.ctorParameters = function () { return [
        { type: LoggerService },
        { type: IconUrlResolverService }
    ]; };
    function ClientFileSystemService_tsickle_Closure_declarations() {
        /** @type {?} */
        ClientFileSystemService.instanceCount;
        /** @type {?} */
        ClientFileSystemService.prototype.store;
        /** @type {?} */
        ClientFileSystemService.prototype.logger;
        /** @type {?} */
        ClientFileSystemService.prototype.iconResolver;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FilemanagerStatusService = /** @class */ (function () {
        function FilemanagerStatusService() {
            this._ActiveRequestsMap = new rxjs.BehaviorSubject({});
        }
        Object.defineProperty(FilemanagerStatusService.prototype, "ActiveRequestsMap", {
            /**
             * @return {?}
             */
            get: function () {
                return this._ActiveRequestsMap;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?} key
         * @param {?} status
         * @param {?=} error
         * @return {?}
         */
        FilemanagerStatusService.prototype.UpdateStatus = function (key, status, error) {
            console.log('UpdateStatus()', { key: key, status: status, error: error });
            var /** @type {?} */ currentValue;
            currentValue = this._ActiveRequestsMap.value;
            if (!currentValue[key]) {
                currentValue[key] = {};
            }
            currentValue[key].status = status;
            currentValue[key].error = error;
            this._ActiveRequestsMap.next(currentValue);
        };
        return FilemanagerStatusService;
    }());
    FilemanagerStatusService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ FilemanagerStatusService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FilemanagerStatusService_Factory() { return new FilemanagerStatusService(); }, token: FilemanagerStatusService, providedIn: "root" });
    function FilemanagerStatusService_tsickle_Closure_declarations() {
        /** @type {?} */
        FilemanagerStatusService.prototype._ActiveRequestsMap;
    }
    /**
     * @record
     */
    function ActiveRequestsMap() { }
    function ActiveRequestsMap_tsickle_Closure_declarations() {
        /* TODO: handle strange member:
        [key: string]: {
            status?: RequestStatus;
            error?: string;
          };
        */
    }

    var OptimisticFilesystemService = /** @class */ (function () {
        /**
         * @param {?} logger
         * @param {?} notifications
         * @param {?} status
         */
        function OptimisticFilesystemService(logger, notifications, status) {
            this.logger = logger;
            this.notifications = notifications;
            this.status = status;
            this.refreshEmitter = new rxjs.Subject();
            this.destroyed = new rxjs.Subject();
            this.instanceCountIncr();
        }
        /**
         * @return {?}
         */
        OptimisticFilesystemService.prototype.instanceCountIncr = function () {
            OptimisticFilesystemService.instanceCount++;
            this.logger.info('new instance created', { instances: this.instances });
        };
        /**
         * @return {?}
         */
        OptimisticFilesystemService.prototype.instanceCountDecr = function () {
            OptimisticFilesystemService.instanceCount--;
            this.logger.info('instance destroyed', { instances: this.instances });
        };
        Object.defineProperty(OptimisticFilesystemService.prototype, "instances", {
            /**
             * @return {?}
             */
            get: function () {
                return OptimisticFilesystemService.instanceCount;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        OptimisticFilesystemService.prototype.ngOnDestroy = function () {
            this.instanceCountDecr();
        };
        Object.defineProperty(OptimisticFilesystemService.prototype, "$CurrentPath", {
            /**
             * @return {?}
             */
            get: function () {
                return this.clientFilesystem.$currentPath;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OptimisticFilesystemService.prototype, "$SelectedFile", {
            /**
             * @return {?}
             */
            get: function () {
                return this.clientFilesystem.$selectedFile;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OptimisticFilesystemService.prototype, "$FilesWithIcons", {
            /**
             * @return {?}
             */
            get: function () {
                return this.clientFilesystem.$FilesWithIcons;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?} serverFilesystem
         * @param {?} clientFilesystem
         * @return {?}
         */
        OptimisticFilesystemService.prototype.initialize = function (serverFilesystem, clientFilesystem) {
            var _this = this;
            this.logger.info('initializing...', { serverFilesystem: serverFilesystem, clientFilesystem: clientFilesystem });
            this.serverFilesystem = serverFilesystem;
            this.clientFilesystem = clientFilesystem;
            this.destroyed.next();
            this.refreshEmitter
                .pipe(operators.takeUntil(this.destroyed), operators.auditTime(800), operators.tap(function (currentPath) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.clientFilesystem.OnList(currentPath)];
                });
            }); }))
                .subscribe(function (currentPath) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.updateListFromServer(currentPath)];
                });
            }); });
        };
        /**
         * @param {?} error
         * @param {?} msg
         * @param {?} title
         * @return {?}
         */
        OptimisticFilesystemService.prototype.reportError = function (error, msg, title) {
            this.logger.error('optimistic-filesystem:', { error: error, title: title, msg: msg });
            this.notifications.notify(error.message, title);
        };
        /**
         * @param {?} directoryPath
         * @return {?}
         */
        OptimisticFilesystemService.prototype.updateListFromServer = function (directoryPath) {
            return __awaiter(this, void 0, void 0, function () {
                var apiResult, currentDirectory, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 6, , 7]);
                            this.status.UpdateStatus(directoryPath, 'SENDING');
                            this.logger.info('updateListFromServer', { directoryPath: directoryPath });
                            return [4 /*yield*/, this.serverFilesystem.List(directoryPath)];
                        case 1:
                            apiResult = _a.sent();
                            return [4 /*yield*/, this.clientFilesystem.UpdateList(apiResult, directoryPath)];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, this.$CurrentPath
                                    .pipe(operators.take(1))
                                    .toPromise()];
                        case 3:
                            currentDirectory = _a.sent();
                            if (!(currentDirectory === directoryPath)) return [3 /*break*/, 5];
                            return [4 /*yield*/, Promise.all([
                                    this.clientFilesystem.OnList(directoryPath),
                                    this.selectFirstInCurrentDirectory()
                                ])];
                        case 4:
                            _a.sent();
                            _a.label = 5;
                        case 5:
                            this.status.UpdateStatus(directoryPath, 'SUCCESS');
                            return [3 /*break*/, 7];
                        case 6:
                            error_1 = _a.sent();
                            this.reportError(error_1, 'Cannot get directory list', 'List Error');
                            this.status.UpdateStatus(directoryPath, 'FAILED', error_1);
                            return [3 /*break*/, 7];
                        case 7: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} directoryPath
         * @return {?}
         */
        OptimisticFilesystemService.prototype.HandleList = function (directoryPath) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.refreshEmitter.next(directoryPath);
                    return [2 /*return*/];
                });
            });
        };
        /**
         * @param {?} newPath
         * @param {?=} disableNoClobber
         * @return {?}
         */
        OptimisticFilesystemService.prototype.HandleCreateFolder = function (newPath, disableNoClobber) {
            return __awaiter(this, void 0, void 0, function () {
                var error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 4]);
                            this.status.UpdateStatus(newPath, 'SENDING');
                            this.logger.info('HandleCreateFolder', { newPath: newPath });
                            return [4 /*yield*/, Promise.all([
                                    this.clientFilesystem.OnCreateFolder(newPath, disableNoClobber),
                                    this.serverFilesystem.CreateFolder(newPath, disableNoClobber)
                                ])];
                        case 1:
                            _a.sent();
                            this.status.UpdateStatus(newPath, 'SUCCESS');
                            return [3 /*break*/, 4];
                        case 2:
                            error_2 = _a.sent();
                            this.reportError(error_2, 'Cannot create folder', 'Create Folder Error');
                            this.status.UpdateStatus(newPath, 'FAILED', error_2);
                            return [4 /*yield*/, this.clientFilesystem.OnRemove([newPath])];
                        case 3:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} uploadedFiles
         * @return {?}
         */
        OptimisticFilesystemService.prototype.HandleUpload = function (uploadedFiles) {
            return __awaiter(this, void 0, void 0, function () {
                var uploadAllPromise, blankPermissionsObj;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.status.UpdateStatus('HandleUpload', 'SENDING');
                            this.logger.info('HandleUpload', { uploadedFiles: uploadedFiles });
                            uploadAllPromise = uploadedFiles.map(function (f) { return _this.serverFilesystem.Upload(f); });
                            blankPermissionsObj = {
                                others: 'read/write',
                                readers: [],
                                writers: []
                            };
                            return [4 /*yield*/, Promise.all([
                                    this.serverFilesystem.SetPermissionsObjectMultiple(uploadedFiles, blankPermissionsObj, true),
                                    this.clientFilesystem.OnUploadedFiles(uploadedFiles),
                                    uploadAllPromise
                                ])];
                        case 1:
                            _a.sent();
                            this.status.UpdateStatus('HandleUpload', 'SUCCESS');
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} singleFileName
         * @param {?} newPath
         * @return {?}
         */
        OptimisticFilesystemService.prototype.HandleCopy = function (singleFileName, newPath) {
            return __awaiter(this, void 0, void 0, function () {
                var error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            this.status.UpdateStatus('HandleCopy' + singleFileName, 'SENDING');
                            this.logger.info('HandleCopy', { singleFileName: singleFileName, newPath: newPath });
                            return [4 /*yield*/, Promise.all([
                                    this.clientFilesystem.OnCopy(singleFileName, newPath),
                                    this.serverFilesystem.Copy(singleFileName, newPath)
                                ])];
                        case 1:
                            _a.sent();
                            this.status.UpdateStatus('HandleCopy' + singleFileName, 'SUCCESS');
                            return [3 /*break*/, 3];
                        case 2:
                            error_3 = _a.sent();
                            this.reportError(error_3, 'Cannot copy item', 'Copy Error');
                            this.status.UpdateStatus('HandleCopy' + singleFileName, 'FAILED', error_3);
                            return [2 /*return*/, this.clientFilesystem.OnRemove([newPath])];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} item
         * @param {?} newPath
         * @return {?}
         */
        OptimisticFilesystemService.prototype.HandleMove = function (item, newPath) {
            return __awaiter(this, void 0, void 0, function () {
                var error_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            this.status.UpdateStatus('HandleMove' + item, 'SENDING');
                            this.logger.info('HandleMove', { item: item, newPath: newPath });
                            return [4 /*yield*/, Promise.all([
                                    this.clientFilesystem.OnMove(item, newPath),
                                    this.serverFilesystem.Move(item, newPath)
                                ])];
                        case 1:
                            _a.sent();
                            this.status.UpdateStatus('HandleMove' + item, 'SUCCESS');
                            return [3 /*break*/, 3];
                        case 2:
                            error_4 = _a.sent();
                            this.reportError(error_4, 'Cannot move item', 'Move Error');
                            this.status.UpdateStatus('HandleMove' + item, 'FAILED');
                            return [2 /*return*/, this.clientFilesystem.OnRemove([newPath])];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} item
         * @param {?} newItemPath
         * @return {?}
         */
        OptimisticFilesystemService.prototype.HandleRename = function (item, newItemPath) {
            return __awaiter(this, void 0, void 0, function () {
                var error_5;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            this.status.UpdateStatus('HandleRename' + item, 'SENDING');
                            this.logger.info('HandleRename', { item: item, newItemPath: newItemPath });
                            return [4 /*yield*/, Promise.all([
                                    this.clientFilesystem.OnRename(item, newItemPath),
                                    this.serverFilesystem.Rename(item, newItemPath)
                                ])];
                        case 1:
                            _a.sent();
                            this.status.UpdateStatus('HandleRename' + item, 'SUCCESS');
                            return [3 /*break*/, 3];
                        case 2:
                            error_5 = _a.sent();
                            this.reportError(error_5, 'Cannot rename item', 'Rename Error');
                            this.status.UpdateStatus('HandleRename' + item, 'FAILED');
                            return [2 /*return*/, this.clientFilesystem.OnRename(newItemPath, item)];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} item
         * @param {?} content
         * @return {?}
         */
        OptimisticFilesystemService.prototype.HandleEdit = function (item, content) {
            return __awaiter(this, void 0, void 0, function () {
                var error_6;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            this.status.UpdateStatus('HandleEdit' + item, 'SENDING');
                            this.logger.info('HandleEdit', { item: item, content: content });
                            return [4 /*yield*/, Promise.all([
                                    this.clientFilesystem.OnEdit(item, content),
                                    this.serverFilesystem.Edit(item, content)
                                ])];
                        case 1:
                            _a.sent();
                            this.status.UpdateStatus('HandleEdit' + item, 'SUCCESS');
                            return [3 /*break*/, 3];
                        case 2:
                            error_6 = _a.sent();
                            this.reportError(error_6, 'Cannot edit item', 'Edit Error');
                            this.status.UpdateStatus('HandleEdit' + item, 'FAILED');
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} item
         * @return {?}
         */
        OptimisticFilesystemService.prototype.HandleGetcontent = function (item) {
            return __awaiter(this, void 0, void 0, function () {
                var response, error_7;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            this.status.UpdateStatus('HandleGetcontent' + item, 'SENDING');
                            this.logger.info('HandleGetcontent', { item: item });
                            return [4 /*yield*/, this.clientFilesystem.OnGetcontent(item)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.serverFilesystem.Getcontent(item)];
                        case 2:
                            response = _a.sent();
                            this.status.UpdateStatus('HandleGetcontent' + item, 'SUCCESS');
                            return [2 /*return*/, response.result];
                        case 3:
                            error_7 = _a.sent();
                            this.reportError(error_7, 'Cannot get item', 'Get Content Error');
                            this.status.UpdateStatus('HandleGetcontent' + item, 'FAILED');
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} item
         * @param {?} role
         * @param {?} entity
         * @param {?=} recursive
         * @return {?}
         */
        OptimisticFilesystemService.prototype.HandleSetPermissions = function (item, role, entity, recursive) {
            return __awaiter(this, void 0, void 0, function () {
                var error_8;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            this.status.UpdateStatus('HandleSetPermissions' + item, 'SENDING');
                            this.logger.info('HandleSetPermissions', {
                                item: item,
                                role: role,
                                entity: entity,
                                recursive: recursive
                            });
                            return [4 /*yield*/, Promise.all([
                                    this.clientFilesystem.OnSetPermissions(item, role, entity, recursive),
                                    this.serverFilesystem.SetPermissions(item, role, entity, recursive)
                                ])];
                        case 1:
                            _a.sent();
                            this.status.UpdateStatus('HandleSetPermissions' + item, 'SUCCESS');
                            return [3 /*break*/, 3];
                        case 2:
                            error_8 = _a.sent();
                            this.reportError(error_8, 'Cannot set permissions to item', 'Permissions Error');
                            this.status.UpdateStatus('HandleSetPermissions' + item, 'FAILED');
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} items
         * @param {?} newPath
         * @return {?}
         */
        OptimisticFilesystemService.prototype.HandleMoveMultiple = function (items, newPath) {
            return __awaiter(this, void 0, void 0, function () {
                var error_9;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            this.status.UpdateStatus('HandleMoveMultiple' + items, 'SENDING');
                            this.logger.info('HandleMoveMultiple', { items: items, newPath: newPath });
                            return [4 /*yield*/, Promise.all([
                                    this.clientFilesystem.OnMoveMultiple(items, newPath),
                                    this.serverFilesystem.MoveMultiple(items, newPath)
                                ])];
                        case 1:
                            _a.sent();
                            this.status.UpdateStatus('HandleMoveMultiple' + items, 'SUCCESS');
                            return [3 /*break*/, 3];
                        case 2:
                            error_9 = _a.sent();
                            this.reportError(error_9, 'Cannot move items', 'Move Error');
                            this.status.UpdateStatus('HandleMoveMultiple' + items, 'FAILED');
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} items
         * @param {?} newPath
         * @return {?}
         */
        OptimisticFilesystemService.prototype.HandleCopyMultiple = function (items, newPath) {
            return __awaiter(this, void 0, void 0, function () {
                var error_10;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            this.status.UpdateStatus('HandleCopyMultiple' + items, 'SENDING');
                            this.logger.info('HandleCopyMultiple', { items: items, newPath: newPath });
                            return [4 /*yield*/, Promise.all([
                                    this.clientFilesystem.OnCopyMultiple(items, newPath),
                                    this.serverFilesystem.CopyMultiple(items, newPath)
                                ])];
                        case 1:
                            _a.sent();
                            this.status.UpdateStatus('HandleCopyMultiple' + items, 'SUCCESS');
                            return [3 /*break*/, 3];
                        case 2:
                            error_10 = _a.sent();
                            this.reportError(error_10, 'Cannot copy items', 'Copy Error');
                            this.status.UpdateStatus('HandleCopyMultiple' + items, 'FAILED');
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} items
         * @param {?} role
         * @param {?} entity
         * @param {?=} recursive
         * @return {?}
         */
        OptimisticFilesystemService.prototype.HandleSetPermissionsMultiple = function (items, role, entity, recursive) {
            return __awaiter(this, void 0, void 0, function () {
                var error_11;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            this.status.UpdateStatus('HandleSetPermissionsMultiple' + items, 'SENDING');
                            this.logger.info('HandleSetPermissionsMultiple', {
                                items: items,
                                role: role,
                                entity: entity,
                                recursive: recursive
                            });
                            return [4 /*yield*/, Promise.all([
                                    this.clientFilesystem.OnSetPermissionsMultiple(items, role, entity, recursive),
                                    this.serverFilesystem.SetPermissionsMultiple(items, role, entity, recursive)
                                ])];
                        case 1:
                            _a.sent();
                            this.status.UpdateStatus('HandleSetPermissionsMultiple' + items, 'SUCCESS');
                            return [3 /*break*/, 3];
                        case 2:
                            error_11 = _a.sent();
                            this.reportError(error_11, 'Cannot set permissions to items', 'Permissions Error');
                            this.status.UpdateStatus('HandleSetPermissionsMultiple' + items, 'FAILED');
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} items
         * @param {?} permissionsObj
         * @param {?=} recursive
         * @return {?}
         */
        OptimisticFilesystemService.prototype.HandleSetPermissionsObjectMultiple = function (items, permissionsObj, recursive) {
            return __awaiter(this, void 0, void 0, function () {
                var error_12;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            this.status.UpdateStatus('HandleSetPermissionsObjectMultiple' + items, 'SENDING');
                            this.logger.info('HandleSetPermissionsMultiple', {
                                items: items,
                                permissionsObj: permissionsObj,
                                recursive: recursive
                            });
                            return [4 /*yield*/, Promise.all([
                                    this.clientFilesystem.OnSetPermissionsObjectMultiple(items, permissionsObj, recursive),
                                    this.serverFilesystem.SetPermissionsObjectMultiple(items, permissionsObj, recursive)
                                ])];
                        case 1:
                            _a.sent();
                            this.status.UpdateStatus('HandleSetPermissionsObjectMultiple' + items, 'SUCCESS');
                            return [3 /*break*/, 3];
                        case 2:
                            error_12 = _a.sent();
                            this.reportError(error_12, 'Cannot set permissions to items', 'Permissions Error');
                            this.status.UpdateStatus('HandleSetPermissionsObjectMultiple' + items, 'FAILED');
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} items
         * @return {?}
         */
        OptimisticFilesystemService.prototype.HandleRemove = function (items) {
            return __awaiter(this, void 0, void 0, function () {
                var error_13;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            this.status.UpdateStatus('HandleRemove' + items, 'SENDING');
                            this.logger.info('HandleRemove', { items: items });
                            return [4 /*yield*/, Promise.all([
                                    this.clientFilesystem.OnRemove(items),
                                    this.serverFilesystem.Remove(items)
                                ])];
                        case 1:
                            _a.sent();
                            this.status.UpdateStatus('HandleRemove' + items, 'SUCCESS');
                            return [3 /*break*/, 3];
                        case 2:
                            error_13 = _a.sent();
                            this.reportError(error_13, 'Cannot remove items', 'Remove Error');
                            this.status.UpdateStatus('HandleRemove' + items, 'FAILED');
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @return {?}
         */
        OptimisticFilesystemService.prototype.HandleNavigateUp = function () {
            return __awaiter(this, void 0, void 0, function () {
                var uuid$1, currentPath, parentPath, error_14;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            uuid$1 = uuid.v4();
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, , 5]);
                            this.status.UpdateStatus('HandleNavigateUp' + uuid$1, 'SENDING');
                            this.logger.info('HandleNavigateUp');
                            return [4 /*yield*/, this.$CurrentPath.pipe(operators.take(1)).toPromise()];
                        case 2:
                            currentPath = _a.sent();
                            parentPath = path__default.dirname(currentPath);
                            return [4 /*yield*/, this.HandleList(parentPath)];
                        case 3:
                            _a.sent();
                            this.status.UpdateStatus('HandleNavigateUp' + uuid$1, 'SUCCESS');
                            return [3 /*break*/, 5];
                        case 4:
                            error_14 = _a.sent();
                            this.reportError(error_14, 'Cannot navigate to parent directory', 'Navigate Error');
                            this.status.UpdateStatus('HandleNavigateUp' + uuid$1, 'FAILED');
                            throw new Error(error_14.message);
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} file
         * @return {?}
         */
        OptimisticFilesystemService.prototype.onSelectItem = function (file) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.clientFilesystem.onSelectItem(file);
                    return [2 /*return*/];
                });
            });
        };
        /**
         * @param {?} filePath
         * @return {?}
         */
        OptimisticFilesystemService.prototype.GetItemByName = function (filePath) {
            var /** @type {?} */ currentFiles = this.clientFilesystem.CurrentFiles();
            var /** @type {?} */ match = currentFiles.find(function (f) { return f.fullPath === filePath; });
            return match;
        };
        /**
         * @param {?} filePath
         * @return {?}
         */
        OptimisticFilesystemService.prototype.onSelectItemByName = function (filePath) {
            var /** @type {?} */ match = this.GetItemByName(filePath);
            this.clientFilesystem.onSelectItem(match);
        };
        /**
         * @return {?}
         */
        OptimisticFilesystemService.prototype.selectFirstInCurrentDirectory = function () {
            return __awaiter(this, void 0, void 0, function () {
                var currentFiles, firstSelected;
                return __generator(this, function (_a) {
                    currentFiles = this.clientFilesystem.CurrentFiles();
                    firstSelected = __spread(currentFiles).shift();
                    this.clientFilesystem.onSelectItem(firstSelected);
                    return [2 /*return*/];
                });
            });
        };
        /**
         * @return {?}
         */
        OptimisticFilesystemService.prototype.CloneProvider = function () {
            var /** @type {?} */ newClone = new OptimisticFilesystemService(this.logger, this.notifications, this.status);
            newClone.initialize(this.serverFilesystem.CloneProvider(), this.clientFilesystem.CloneProvider());
            return newClone;
        };
        return OptimisticFilesystemService;
    }());
    OptimisticFilesystemService.instanceCount = 0;
    OptimisticFilesystemService.decorators = [
        { type: i0.Injectable }
    ];
    /** @nocollapse */
    OptimisticFilesystemService.ctorParameters = function () { return [
        { type: LoggerService },
        { type: NotificationService },
        { type: FilemanagerStatusService }
    ]; };
    function OptimisticFilesystemService_tsickle_Closure_declarations() {
        /** @type {?} */
        OptimisticFilesystemService.instanceCount;
        /** @type {?} */
        OptimisticFilesystemService.prototype.serverFilesystem;
        /** @type {?} */
        OptimisticFilesystemService.prototype.clientFilesystem;
        /** @type {?} */
        OptimisticFilesystemService.prototype.refreshEmitter;
        /** @type {?} */
        OptimisticFilesystemService.prototype.destroyed;
        /** @type {?} */
        OptimisticFilesystemService.prototype.logger;
        /** @type {?} */
        OptimisticFilesystemService.prototype.notifications;
        /** @type {?} */
        OptimisticFilesystemService.prototype.status;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AppDialogConfirmationComponent = /** @class */ (function () {
        /**
         * @param {?} dialogRef
         */
        function AppDialogConfirmationComponent(dialogRef) {
            this.dialogRef = dialogRef;
        }
        /**
         * @return {?}
         */
        AppDialogConfirmationComponent.prototype.onSubmit = function () {
            this.dialogRef.close(true);
        };
        /**
         * @return {?}
         */
        AppDialogConfirmationComponent.prototype.onCancel = function () {
            this.dialogRef.close(false);
        };
        return AppDialogConfirmationComponent;
    }());
    AppDialogConfirmationComponent.decorators = [
        { type: i0.Component, args: [{
                    template: "\n    <base-dialog\n      [header]=\"headerTemplate\"\n      [body]=\"bodyTemplate\"\n      [actions]=\"actionsTemplate\"\n    >\n      <ng-template #headerTemplate>\n        <h2>Set Permissions</h2>\n      </ng-template>\n      <ng-template #bodyTemplate>\n        <div>\n          <p>Would you like to set permissions for this folder?</p>\n        </div>\n      </ng-template>\n      <ng-template #actionsTemplate>\n        <btns-cancel-ok\n          okIcon=\"done\"\n          okLabel=\"Yes\"\n          (clickedCancel)=\"onCancel()\"\n          (clickedOk)=\"onSubmit()\"\n        >\n        </btns-cancel-ok>\n      </ng-template>\n    </base-dialog>\n  ",
                    styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
                }] }
    ];
    /** @nocollapse */
    AppDialogConfirmationComponent.ctorParameters = function () { return [
        { type: dialog.MatDialogRef }
    ]; };
    function AppDialogConfirmationComponent_tsickle_Closure_declarations() {
        /** @type {?} */
        AppDialogConfirmationComponent.prototype.dialogRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} itemPath
     * @return {?}
     */
    function MakeItem2(itemPath) {
        return {
            name: path.basename(itemPath),
            fullPath: itemPath,
            rightsFirebase: [],
            permissions: {
                others: 'read/write',
                readers: ['Example Reader'],
                writers: ['Example Writer', 'Managers']
            },
            size: '111',
            date: new Date().toISOString(),
            type: itemPath.endsWith('/') ? 'dir' : 'file'
        };
    }
    /**
     * @param {?} itemPath
     * @return {?}
     */
    function MakeFile(itemPath) {
        var /** @type {?} */ filePath = EnsureNoTrailingSlash(itemPath);
        return MakeItem2(filePath);
    }
    /**
     * @param {?} itemPath
     * @return {?}
     */
    function MakeDir(itemPath) {
        var /** @type {?} */ dirPath = EnsureTrailingSlash(itemPath);
        return MakeItem2(dirPath);
    }
    var /** @type {?} */ stubFiles = [
        MakeFile('/image1.png'),
        MakeFile('/image2.jpeg'),
        MakeFile('/subfile.txt'),
        MakeFile('/subfile.mp3'),
        MakeFile('/subfile.mp4'),
        MakeFile('/tables.csv'),
        MakeFile('/time.docx'),
        MakeDir('/emptyFolder/'),
        MakeDir('/subfolder/'),
        MakeFile('/subfolder/file.txt'),
        MakeFile('/subfolder/file.png'),
        MakeDir('/subfolder/xsub1/'),
        MakeDir('/subfolder/ysub1/'),
        MakeDir('/subfolder/2sub1/'),
        MakeDir('/subfolder/1sub1/'),
        MakeDir('/subfolder/sub1/'),
        MakeFile('/subfolder/sub1/file.txt'),
        MakeDir('/subfolder/sub1/sub1/'),
        MakeFile('/subfolder/sub1/sub11/file.txt'),
        MakeDir('/subfolder/sub1/sub11/sub111/'),
        MakeFile('/subfolder/sub1/sub11/sub111/file.txt'),
        MakeDir('/subfolder/sub1/sub12/'),
        MakeFile('/subfolder/sub1/sub12/file.txt'),
        MakeDir('/subfolder/sub1/sub12/sub112/'),
        MakeFile('/subfolder/sub1/sub12/sub112/file.txt'),
        MakeDir('/subfolder/sub2/'),
        MakeFile('/subfolder/sub2/file.txt'),
        MakeDir('/subfolder/sub2/sub21/'),
        MakeFile('/subfolder/sub2/sub21/file.txt'),
        MakeDir('/subfolder/sub2/sub21/sub211/'),
        MakeFile('/subfolder/sub2/sub21/sub211/file.txt'),
        MakeDir('/subfolder/sub2/sub22/'),
        MakeFile('/subfolder/sub2/sub22/file.txt'),
        MakeDir('/subfolder/sub2/sub22/sub221/'),
        MakeFile('/subfolder/sub2/sub22/sub221/file.txt')
    ];

    var ActionHandlersService = /** @class */ (function () {
        /**
         * @param {?} clientFilesystem
         * @param {?} optimisticFs
         * @param {?} dialog
         * @param {?} logger
         * @param {?} notifications
         */
        function ActionHandlersService(clientFilesystem, optimisticFs, dialog, logger, notifications) {
            this.clientFilesystem = clientFilesystem;
            this.optimisticFs = optimisticFs;
            this.dialog = dialog;
            this.logger = logger;
            this.notifications = notifications;
        }
        Object.defineProperty(ActionHandlersService.prototype, "$CurrentPath", {
            /**
             * @return {?}
             */
            get: function () {
                return this.optimisticFs.$CurrentPath;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        ActionHandlersService.prototype.GetCurrentPath = function () {
            return __awaiter(this, void 0, void 0, function () {
                var current;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.$CurrentPath.pipe(operators.take(1)).toPromise()];
                        case 1:
                            current = _a.sent();
                            return [2 /*return*/, current || ''];
                    }
                });
            });
        };
        /**
         * @param {?} directoryPath
         * @return {?}
         */
        ActionHandlersService.prototype.ConvertToRelativePath = function (directoryPath) {
            var /** @type {?} */ rootLength = (this.config.virtualRoot || '').length;
            return (directoryPath || '').slice(rootLength);
        };
        /**
         * @return {?}
         */
        ActionHandlersService.prototype.GetRootPath = function () {
            return this.config.virtualRoot || '';
        };
        Object.defineProperty(ActionHandlersService.prototype, "$CurrentPathIsRoot", {
            /**
             * @return {?}
             */
            get: function () {
                var _this = this;
                return this.$CurrentPath.pipe(operators.map(function (p) { return p === _this.config.virtualRoot; }));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ActionHandlersService.prototype, "$SelectedFile", {
            /**
             * @return {?}
             */
            get: function () {
                return this.optimisticFs.$SelectedFile;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ActionHandlersService.prototype, "$FilesWithIcons", {
            /**
             * @return {?}
             */
            get: function () {
                return this.optimisticFs.$FilesWithIcons;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?} fileSystem
         * @param {?} config
         * @return {?}
         */
        ActionHandlersService.prototype.init = function (fileSystem, config) {
            return __awaiter(this, void 0, void 0, function () {
                var error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.config = config;
                            this.fileSystem = fileSystem;
                            this.logger.info('init()', { fileSystem: fileSystem, config: config });
                            this.optimisticFs.initialize(this.fileSystem, this.clientFilesystem);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.clientFilesystem.OnList(config.initialPath)];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            this.logger.error('init() OnNewFolderClobber: error', error_1, {
                                fileSystem: fileSystem,
                                config: config,
                            });
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} file
         * @return {?}
         */
        ActionHandlersService.prototype.OnRename = function (file) {
            return __awaiter(this, void 0, void 0, function () {
                var data, renamedPath, error_2;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            data = {
                                currentPath: file.fullPath,
                            };
                            this.logger.info('OnRename', { data: data });
                            return [4 /*yield*/, this.openDialog(AppDialogRenameComponent, data)];
                        case 1:
                            renamedPath = _a.sent();
                            if (!renamedPath) {
                                this.notifications.notifyCancelled();
                                return [2 /*return*/];
                            }
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 5, , 6]);
                            return [4 /*yield*/, this.optimisticFs.HandleRename(file.fullPath, renamedPath)];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, this.RefreshExplorer()];
                        case 4:
                            _a.sent();
                            setTimeout(function () {
                                _this.optimisticFs.onSelectItemByName(renamedPath);
                            }, 300);
                            return [3 /*break*/, 6];
                        case 5:
                            error_2 = _a.sent();
                            this.logger.error('OnRename', { error: error_2 });
                            this.notifications.notify(error_2.message, 'Rename Error');
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} files
         * @return {?}
         */
        ActionHandlersService.prototype.OnMoveMultiple = function (files) {
            return __awaiter(this, void 0, void 0, function () {
                var data, newFolderPath, filePaths, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            data = {
                                files: files,
                                isCopy: false,
                                actionHandler: this,
                            };
                            return [4 /*yield*/, this.openDialog(AppDialogCopyComponent, data)];
                        case 1:
                            newFolderPath = _a.sent();
                            if (!newFolderPath) {
                                this.notifications.notifyCancelled();
                                return [2 /*return*/];
                            }
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 5, , 6]);
                            filePaths = files.map(function (f) { return f.fullPath; });
                            return [4 /*yield*/, this.optimisticFs.HandleMoveMultiple(filePaths, newFolderPath)];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, this.RefreshExplorer()];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 6];
                        case 5:
                            error_3 = _a.sent();
                            this.logger.error('OnMoveMultiple', { error: error_3 });
                            this.notifications.notify(error_3.message, 'Move Error');
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} files
         * @return {?}
         */
        ActionHandlersService.prototype.OnCopyMultiple = function (files) {
            return __awaiter(this, void 0, void 0, function () {
                var data, newFolderPath, filePaths, error_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            data = {
                                files: files,
                                isCopy: true,
                                actionHandler: this,
                            };
                            return [4 /*yield*/, this.openDialog(AppDialogCopyComponent, data)];
                        case 1:
                            newFolderPath = _a.sent();
                            this.logger.info('OnCopyMultiple', { files: files, newFolderPath: newFolderPath });
                            if (!newFolderPath) {
                                this.notifications.notifyCancelled();
                                return [2 /*return*/];
                            }
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 5, , 6]);
                            filePaths = files.map(function (f) { return f.fullPath; });
                            return [4 /*yield*/, this.optimisticFs.HandleCopyMultiple(filePaths, newFolderPath)];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, this.RefreshExplorer()];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 6];
                        case 5:
                            error_4 = _a.sent();
                            this.logger.error('OnCopyMultiple', { error: error_4 });
                            this.notifications.notify(error_4.message, 'Copy Error');
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @return {?}
         */
        ActionHandlersService.prototype.checkCanAddPermissions = function () {
            if (!this.config.users) {
                throw new Error('The "config.users" property was not defined');
            }
            if (!this.config.groups) {
                throw new Error('The "config.groups" property was not defined');
            }
        };
        /**
         * @param {?} files
         * @return {?}
         */
        ActionHandlersService.prototype.OnSetPermissionsMultiple = function (files) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.OnSetPermissionsObjectMultiple(files)];
                });
            });
        };
        /**
         * @param {?} files
         * @return {?}
         */
        ActionHandlersService.prototype.OnSetPermissionsObjectMultiple = function (files) {
            return __awaiter(this, void 0, void 0, function () {
                var data, res, filePaths, error_5;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            data = {
                                files: files,
                                config: this.config,
                            };
                            try {
                                this.checkCanAddPermissions();
                            }
                            catch ( /** @type {?} */error) {
                                this.notifications.notify(error.message, 'Permissions Error');
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, this.openDialog(AppDialogPermissionsSetObjectComponent, data)];
                        case 1:
                            res = _a.sent();
                            if (!res) {
                                this.notifications.notifyCancelled();
                                return [2 /*return*/];
                            }
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 5, , 6]);
                            filePaths = files.map(function (f) { return f.fullPath; });
                            return [4 /*yield*/, this.optimisticFs.HandleSetPermissionsObjectMultiple(filePaths, res.permissionsObj, true)];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, this.RefreshExplorer()];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 6];
                        case 5:
                            error_5 = _a.sent();
                            this.logger.error('OnSetPermissionsMultiple', { error: error_5 });
                            this.notifications.notify(error_5.message, 'Permissions Error');
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} files
         * @return {?}
         */
        ActionHandlersService.prototype.OnDeleteMultiple = function (files) {
            return __awaiter(this, void 0, void 0, function () {
                var deletedPaths, error_6;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            deletedPaths = files.map(function (f) { return f.fullPath; });
                            this.logger.info('deleting files', { files: files, deletedPaths: deletedPaths });
                            return [4 /*yield*/, this.optimisticFs.HandleRemove(deletedPaths)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.RefreshExplorer()];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            error_6 = _a.sent();
                            this.logger.error('OnDeleteMultiple', { error: error_6 });
                            this.notifications.notify(error_6.message, 'Deletion Error');
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} folderPath
         * @return {?}
         */
        ActionHandlersService.prototype.OnNavigateTo = function (folderPath) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.logger.info('action-handlers.OnNavigateTo', { folderPath: folderPath });
                    return [2 /*return*/, this.optimisticFs.HandleList(folderPath)];
                });
            });
        };
        /**
         * @return {?}
         */
        ActionHandlersService.prototype.OnNavigateToParent = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.info('OnNavigateToParent');
                            return [4 /*yield*/, this.optimisticFs.HandleNavigateUp()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} itemPath
         * @return {?}
         */
        ActionHandlersService.prototype.OnSelectItemByPath = function (itemPath) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.optimisticFs.onSelectItemByName(itemPath);
                    return [2 /*return*/];
                });
            });
        };
        /**
         * @return {?}
         */
        ActionHandlersService.prototype.OnUploadFilesToCurrentDirectory = function () {
            return __awaiter(this, void 0, void 0, function () {
                var currentPath, data, res, filesToAdd;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.info('onClickUpload');
                            return [4 /*yield*/, this.GetCurrentPath()];
                        case 1:
                            currentPath = _a.sent();
                            data = {
                                currentDirectory: currentPath,
                                firebaseConfig: this.config.firebaseConfig,
                                bucketName: this.config.bucketName,
                            };
                            return [4 /*yield*/, this.openDialog(AppDialogUploadFilesComponent, data)];
                        case 2:
                            res = _a.sent();
                            if (!res) {
                                this.logger.info('onClickUpload canceled...');
                                return [2 /*return*/];
                            }
                            filesToAdd = res.uploaded.map(function (f) { return path__default.join(currentPath, f); });
                            return [4 /*yield*/, this.optimisticFs.HandleUpload(filesToAdd)];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, this.optimisticFs.HandleList(currentPath)];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @return {?}
         */
        ActionHandlersService.prototype.OnNewFolderInCurrentDirectory = function () {
            return __awaiter(this, void 0, void 0, function () {
                var newDirName, setPermissions, currentDirectory, newDirectoryPath, folder;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.info('onClickNewFolder');
                            return [4 /*yield*/, this.openDialog(AppDialogNewFolderComponent)];
                        case 1:
                            newDirName = _a.sent();
                            if (!newDirName) {
                                this.logger.info('onClickNewFolder   no folder created...');
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, this.OnNewFolder(newDirName)];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, this.openDialog(AppDialogConfirmationComponent)];
                        case 3:
                            setPermissions = _a.sent();
                            if (!setPermissions) return [3 /*break*/, 6];
                            return [4 /*yield*/, this.GetCurrentPath()];
                        case 4:
                            currentDirectory = _a.sent();
                            newDirectoryPath = path__default.join(currentDirectory, newDirName);
                            folder = MakeDir(newDirectoryPath);
                            return [4 /*yield*/, this.OnSetPermissionsMultiple([folder])];
                        case 5:
                            _a.sent();
                            _a.label = 6;
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} newDirName
         * @return {?}
         */
        ActionHandlersService.prototype.OnNewFolder = function (newDirName) {
            return __awaiter(this, void 0, void 0, function () {
                var currentDirectory, newDirectoryPath;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.GetCurrentPath()];
                        case 1:
                            currentDirectory = _a.sent();
                            newDirectoryPath = path__default.join(currentDirectory, newDirName);
                            return [4 /*yield*/, this.optimisticFs.HandleCreateFolder(newDirectoryPath)];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, this.optimisticFs.HandleList(currentDirectory)];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} newDirName
         * @return {?}
         */
        ActionHandlersService.prototype.OnNewFolderClobber = function (newDirName) {
            return __awaiter(this, void 0, void 0, function () {
                var currentDirectory, newDirectoryPath;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (newDirName === '/') {
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, this.GetCurrentPath()];
                        case 1:
                            currentDirectory = _a.sent();
                            newDirectoryPath = path__default.join(currentDirectory, newDirName);
                            return [4 /*yield*/, this.optimisticFs.HandleCreateFolder(newDirectoryPath, true)];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, this.optimisticFs.HandleList(currentDirectory)];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} file
         * @return {?}
         */
        ActionHandlersService.prototype.OnDownloadFile = function (file) {
            return __awaiter(this, void 0, void 0, function () {
                var res, newFile, currentDirectory;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fileSystem.GetSingle(file.fullPath)];
                        case 1:
                            res = _a.sent();
                            newFile = res.result.file;
                            return [4 /*yield*/, this.optimisticFs.onSelectItem(newFile)];
                        case 2:
                            _a.sent();
                            this.initiateDownload(file.name, res.result.url);
                            return [4 /*yield*/, this.GetCurrentPath()];
                        case 3:
                            currentDirectory = _a.sent();
                            return [4 /*yield*/, this.optimisticFs.HandleList(currentDirectory)];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} filename
         * @param {?} url
         * @return {?}
         */
        ActionHandlersService.prototype.initiateDownload = function (filename, url) {
            this.logger.info('initiateDownload...', { url: url });
            var /** @type {?} */ link = document.createElement('a');
            link.download = filename;
            link.target = '_blank';
            link.href = url;
            link.click();
        };
        /**
         * @return {?}
         */
        ActionHandlersService.prototype.RefreshExplorer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var currentPath;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.GetCurrentPath()];
                        case 1:
                            currentPath = _a.sent();
                            return [2 /*return*/, this.optimisticFs.HandleList(currentPath)];
                    }
                });
            });
        };
        /**
         * @param {?} comp
         * @param {?=} data
         * @return {?}
         */
        ActionHandlersService.prototype.openDialog = function (comp, data) {
            return __awaiter(this, void 0, void 0, function () {
                var ref, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ref = this.dialog.open(comp, {
                                width: '600px',
                                hasBackdrop: true,
                                disableClose: false,
                                data: data,
                            });
                            return [4 /*yield*/, ref.afterClosed().pipe(operators.take(1)).toPromise()];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        /**
         * @return {?}
         */
        ActionHandlersService.prototype.CloneProvider = function () {
            return __awaiter(this, void 0, void 0, function () {
                var cloned;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            cloned = new ActionHandlersService(this.clientFilesystem.CloneProvider(), this.optimisticFs.CloneProvider(), this.dialog, this.logger, this.notifications);
                            return [4 /*yield*/, cloned.init(this.fileSystem, this.config)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, cloned];
                    }
                });
            });
        };
        /**
         * @param {?} path
         * @return {?}
         */
        ActionHandlersService.prototype.ListCurrentPathItems = function (path) {
            return this.fileSystem.List(path);
        };
        return ActionHandlersService;
    }());
    ActionHandlersService.decorators = [
        { type: i0.Injectable }
    ];
    /** @nocollapse */
    ActionHandlersService.ctorParameters = function () { return [
        { type: ClientFileSystemService },
        { type: OptimisticFilesystemService },
        { type: dialog.MatDialog },
        { type: LoggerService },
        { type: NotificationService }
    ]; };
    function ActionHandlersService_tsickle_Closure_declarations() {
        /** @type {?} */
        ActionHandlersService.prototype.fileSystem;
        /** @type {?} */
        ActionHandlersService.prototype.config;
        /** @type {?} */
        ActionHandlersService.prototype.clientFilesystem;
        /** @type {?} */
        ActionHandlersService.prototype.optimisticFs;
        /** @type {?} */
        ActionHandlersService.prototype.dialog;
        /** @type {?} */
        ActionHandlersService.prototype.logger;
        /** @type {?} */
        ActionHandlersService.prototype.notifications;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} fieldName
     * @param {?=} direction
     * @return {?}
     */
    function sortObjectArrayCase(fieldName, direction) {
        return function (a, b) {
            var /** @type {?} */ val_a = (a[fieldName] + '').toLowerCase();
            var /** @type {?} */ val_b = (b[fieldName] + '').toLowerCase();
            if (val_a < val_b) {
                return direction === 'desc' ? 1 : -1;
            }
            if (val_a > val_b) {
                return direction === 'desc' ? -1 : 1;
            }
            return 0;
        };
    }

    var LibMainFileManagerComponent = /** @class */ (function () {
        /**
         * @param {?} actionHandlers
         * @param {?} logger
         * @param {?} status
         */
        function LibMainFileManagerComponent(actionHandlers, logger, status) {
            this.actionHandlers = actionHandlers;
            this.logger = logger;
            this.status = status;
            this.isFileDetailsOpen = true;
            this.$BulkSelected = new rxjs.BehaviorSubject([]);
            this.$triggerClearSelected = new rxjs.Subject();
            this.destroyed = new rxjs.Subject();
            this.enableSearch = false;
            this.searchKeyword = '';
            this.seachResultDocuments = [];
            this.seachResultFolders = [];
            this.documentsShow = 10;
            this.foldersShow = 10;
            this.isSearching = false;
            this.showSearchingSpinner = false;
            this.requestMap = this.status.ActiveRequestsMap;
            this.searchForm = new forms.FormGroup({
                searchKeyword: new forms.FormControl('', [forms.Validators.minLength(3)]),
            });
        }
        Object.defineProperty(LibMainFileManagerComponent.prototype, "$status", {
            /**
             * @return {?}
             */
            get: function () {
                return this.status.ActiveRequestsMap.pipe(operators.map(function (requests) {
                    return Object.keys(requests).map(function (k) { return requests[k].status; });
                }));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LibMainFileManagerComponent.prototype, "$hasSending", {
            /**
             * @return {?}
             */
            get: function () {
                return this.$status.pipe(operators.map(function (s) { return !!s.find(function (status) { return status === 'SENDING'; }); }));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LibMainFileManagerComponent.prototype, "$hasFailed", {
            /**
             * @return {?}
             */
            get: function () {
                return this.$status.pipe(operators.map(function (s) { return !!s.find(function (status) { return status === 'FAILED'; }); }));
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        LibMainFileManagerComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.fileSystem) {
                                throw new Error('<ngx-filemanager> must have input selector [fileSystem] set');
                            }
                            if (!this.config) {
                                throw new Error('<ngx-filemanager> must have input selector [config] set');
                            }
                            if (!this.config.virtualRoot) {
                                console.warn('<ngx-filemanager> warning config.virtualRoot not set, using bucket root "/"');
                                this.config.virtualRoot = '/';
                            }
                            if (this.config.virtualRoot.endsWith('/')) {
                                this.config.virtualRoot = this.config.virtualRoot.slice(0, -1);
                            }
                            if (!this.config.initialPath) {
                                console.warn('<ngx-filemanager> warning config.initialPath not set, using virtualRoot: ' +
                                    this.config.virtualRoot);
                                this.config.initialPath = this.config.virtualRoot;
                            }
                            return [4 /*yield*/, this.actionHandlers.init(this.fileSystem, this.config)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.actionHandlers.OnNavigateTo(this.config.virtualRoot)];
                        case 2:
                            _a.sent();
                            this.$CurrentPath = this.actionHandlers.$CurrentPath;
                            this.actionHandlers.$SelectedFile
                                .pipe(operators.takeUntil(this.destroyed), operators.tap(function (selectedFile) {
                                console.log('this.$SelectedFile.pipe', { selectedFile: selectedFile });
                                _this.SelectedFile = null;
                                setTimeout(function () {
                                    _this.SelectedFile = selectedFile;
                                });
                            }))
                                .subscribe();
                            this.makeConfig();
                            this.initLoaded = true;
                            this.enableSearch = !!this.config.enableSearch || false;
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @return {?}
         */
        LibMainFileManagerComponent.prototype.ngOnDestroy = function () {
            this.destroyed.next();
        };
        /**
         * @return {?}
         */
        LibMainFileManagerComponent.prototype.makeConfig = function () {
            var _this = this;
            this.fileActions = [
                {
                    label: 'Download',
                    icon: 'file_download',
                    onClick: function (file) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, this.actionHandlers.OnDownloadFile(file)];
                    }); }); }
                },
                {
                    label: 'Copy',
                    icon: 'content_copy',
                    onClick: function (file) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, this.actionHandlers.OnCopyMultiple([file])];
                    }); }); }
                },
                {
                    label: 'Move',
                    icon: 'forward',
                    onClick: function (file) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, this.actionHandlers.OnMoveMultiple([file])];
                    }); }); }
                },
                {
                    label: 'Rename',
                    icon: 'border_color',
                    onClick: function (file) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, this.actionHandlers.OnRename(file)];
                    }); }); }
                },
                {
                    label: 'Permissions',
                    icon: 'lock_outline',
                    onClick: function (file) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, this.actionHandlers.OnSetPermissionsMultiple([file])];
                    }); }); }
                },
                {
                    label: 'Delete',
                    icon: 'delete',
                    color: 'warn',
                    onClick: function (file) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, this.actionHandlers.OnDeleteMultiple([file])];
                    }); }); }
                }
            ];
            this.folderActions = [
                {
                    label: 'Copy',
                    icon: 'content_copy',
                    onClick: function (file) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, this.actionHandlers.OnCopyMultiple([file])];
                    }); }); }
                },
                {
                    label: 'Move',
                    icon: 'forward',
                    onClick: function (file) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, this.actionHandlers.OnMoveMultiple([file])];
                    }); }); }
                },
                {
                    label: 'Rename',
                    icon: 'border_color',
                    onClick: function (file) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, this.actionHandlers.OnRename(file)];
                    }); }); }
                },
                {
                    label: 'Permissions',
                    icon: 'lock_outline',
                    onClick: function (file) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, this.actionHandlers.OnSetPermissionsMultiple([file])];
                    }); }); }
                },
                {
                    label: 'Delete',
                    icon: 'delete',
                    color: 'warn',
                    onClick: function (file) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, this.actionHandlers.OnDeleteMultiple([file])];
                    }); }); }
                }
            ];
            this.bulkActions = [
                {
                    label: 'Cancel',
                    icon: 'clear',
                    onClick: function (item) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, this.ClearBulkSelected()];
                    }); }); }
                },
                {
                    label: 'Copy',
                    icon: 'content_copy',
                    onClick: function (items) { return _this.actionHandlers.OnCopyMultiple(__spread(items)); }
                },
                {
                    label: 'Move',
                    icon: 'forward',
                    onClick: function (items) { return _this.actionHandlers.OnMoveMultiple(items); }
                },
                {
                    label: 'Set Permissions',
                    icon: 'lock_outline',
                    onClick: function (items) { return _this.actionHandlers.OnSetPermissionsObjectMultiple(items); },
                    $disabled: rxjs.of(!this.config.isAdmin)
                },
                {
                    label: 'Delete',
                    icon: 'delete',
                    color: 'warn',
                    onClick: function (items) { return _this.actionHandlers.OnDeleteMultiple(items); },
                    $disabled: rxjs.of(!this.config.isAdmin)
                }
            ];
            this.mainActions = [
                {
                    label: 'Back Folder',
                    icon: 'reply',
                    onClick: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, this.actionHandlers.OnNavigateToParent()];
                    }); }); },
                    $disabled: this.actionHandlers.$CurrentPathIsRoot
                },
                {
                    label: 'Refresh',
                    icon: 'refresh',
                    onClick: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, this.actionHandlers.RefreshExplorer()];
                    }); }); }
                },
                {
                    label: 'Upload Files',
                    icon: 'file_upload',
                    onClick: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, this.actionHandlers.OnUploadFilesToCurrentDirectory()];
                    }); }); }
                },
                {
                    label: 'New Folder',
                    icon: 'create_new_folder',
                    onClick: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, this.actionHandlers.OnNewFolderInCurrentDirectory()];
                    }); }); }
                }
            ];
            this.fileDetailActions = [
                {
                    label: 'Download',
                    toolTip: 'Click to Download',
                    icon: 'file_download',
                    $disabled: this.actionHandlers.$SelectedFile.pipe(operators.map(function (f) { return !f || f.type !== 'file'; })),
                    onClick: function (file) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, this.actionHandlers.OnDownloadFile(file)];
                    }); }); }
                },
                {
                    label: 'Rename',
                    toolTip: 'Click to Rename',
                    icon: 'border_color',
                    $disabled: rxjs.of(!this.config.isAdmin),
                    onClick: function (file) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, this.actionHandlers.OnRename(file)];
                    }); }); }
                },
                {
                    label: 'Set Permissions',
                    toolTip: 'Click to Set Permissions',
                    icon: 'lock_outline',
                    $disabled: rxjs.of(!this.config.isAdmin),
                    onClick: function (file) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, this.actionHandlers.OnSetPermissionsObjectMultiple([file])];
                    }); }); }
                },
                {
                    label: 'Delete',
                    toolTip: 'Click to Delete',
                    icon: 'delete',
                    $disabled: rxjs.of(!this.config.isAdmin),
                    color: 'warn',
                    onClick: function (file) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, this.actionHandlers.OnDeleteMultiple([file])];
                    }); }); }
                }
            ];
            var /** @type {?} */ allFiles$ = new rxjs.BehaviorSubject([]);
            this.actionHandlers.$FilesWithIcons.subscribe(function (files) { return allFiles$.next(files); });
            this.folders$ = allFiles$.pipe(operators.tap(function (folders) { return console.log('folders', { folders: folders }); }), operators.map(function (items) { return items
                .filter(function (a) { return a.type === 'dir'; })
                .sort(sortObjectArrayCase('name', 'asc')); }));
            this.files$ = allFiles$.pipe(operators.tap(function (files) { return console.log('files', { files: files }); }), operators.map(function (items) { return items
                .filter(function (a) { return a.type === 'file'; })
                .sort(sortObjectArrayCase('name', 'asc')); }));
        };
        /**
         * @param {?} itemPath
         * @return {?}
         */
        LibMainFileManagerComponent.prototype.onEnterFolder = function (itemPath) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.logger.info('onSelectItemDoubleClick!', { itemPath: itemPath });
                    this.ClearBulkSelected();
                    return [2 /*return*/, this.actionHandlers.OnNavigateTo(itemPath)];
                });
            });
        };
        /**
         * @param {?} itemPath
         * @return {?}
         */
        LibMainFileManagerComponent.prototype.onSelectedFilePath = function (itemPath) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.logger.info('onSelectItem!', { itemPath: itemPath });
                    return [2 /*return*/, this.actionHandlers.OnSelectItemByPath(itemPath)];
                });
            });
        };
        /**
         * @param {?} file
         * @return {?}
         */
        LibMainFileManagerComponent.prototype.onDetailsClickDelete = function (file) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.actionHandlers.OnDeleteMultiple([file])];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} file
         * @return {?}
         */
        LibMainFileManagerComponent.prototype.onDetailsClickDownload = function (file) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.actionHandlers.OnDownloadFile(file)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} file
         * @return {?}
         */
        LibMainFileManagerComponent.prototype.onDetailsClickRename = function (file) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.actionHandlers.OnRename(file)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} file
         * @return {?}
         */
        LibMainFileManagerComponent.prototype.onDetailsClickSinglePermissions = function (file) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.actionHandlers.OnSetPermissionsMultiple([file])];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.actionHandlers.OnSelectItemByPath(file.fullPath)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} newPath
         * @return {?}
         */
        LibMainFileManagerComponent.prototype.onClickCrumb = function (newPath) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.ClearBulkSelected();
                    this.logger.info('onClickCrumb', { newPath: newPath });
                    return [2 /*return*/, this.actionHandlers.OnNavigateTo(newPath)];
                });
            });
        };
        /**
         * @return {?}
         */
        LibMainFileManagerComponent.prototype.ClearBulkSelected = function () {
            this.$triggerClearSelected.next();
            this.$BulkSelected.next([]);
        };
        /**
         * @param {?} keyword
         * @return {?}
         */
        LibMainFileManagerComponent.prototype.searchAllDocumentsAndFolders = function (keyword) {
            return __awaiter(this, void 0, void 0, function () {
                var startPath;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            keyword = keyword.toLocaleLowerCase().trim();
                            if (!this.searchForm.valid) {
                                return [2 /*return*/];
                            }
                            ;
                            return [4 /*yield*/, this.initCleanSearchResults()];
                        case 1:
                            _a.sent();
                            startPath = this.actionHandlers.GetRootPath();
                            this.isSearching = true;
                            this.showSearchingSpinner = true;
                            this.iterateCurrentDocumentAndFolders(startPath, keyword, 0);
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} currentPath
         * @param {?} keyword
         * @param {?} level
         * @return {?}
         */
        LibMainFileManagerComponent.prototype.iterateCurrentDocumentAndFolders = function (currentPath, keyword, level) {
            return __awaiter(this, void 0, void 0, function () {
                var currentVisiableDocuments;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (level > 100) {
                                this.isSearching = false;
                            }
                            if (this.showSearchingSpinner) {
                                this.showSearchingSpinner = (this.isSearching && this.seachResultDocuments.length === 0 && this.seachResultFolders.length === 0 && level < 3);
                            }
                            if (!this.isSearching) {
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, this.actionHandlers.ListCurrentPathItems(currentPath)];
                        case 1:
                            currentVisiableDocuments = (_a.sent()).result;
                            currentVisiableDocuments.forEach(function (item) {
                                console.log(item, 'item.type', item.type);
                                if (item.type === 'file') {
                                    if (_this.checkSearchKeywordRelative(item.name, keyword)) {
                                        _this.seachResultDocuments.push(item);
                                    }
                                }
                                else if (item.type === 'dir') {
                                    if (_this.checkSearchKeywordRelative(item.name, keyword)) {
                                        _this.seachResultFolders.push(item);
                                    }
                                    _this.iterateCurrentDocumentAndFolders(item.fullPath, keyword, level + 1);
                                }
                            });
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} targetName
         * @param {?} keyword
         * @return {?}
         */
        LibMainFileManagerComponent.prototype.checkSearchKeywordRelative = function (targetName, keyword) {
            return targetName.toLowerCase().includes(keyword);
        };
        /**
         * @return {?}
         */
        LibMainFileManagerComponent.prototype.initCleanSearchResults = function () {
            var _this = this;
            this.isSearching = false;
            this.showSearchingSpinner = false;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    _this.seachResultDocuments = [];
                    _this.seachResultFolders = [];
                    _this.foldersShow = 5;
                    _this.documentsShow = 5;
                    resolve();
                }, 10);
            });
        };
        /**
         * @param {?} item
         * @return {?}
         */
        LibMainFileManagerComponent.prototype.onSelectedSearchItem = function (item) {
            //this.initCleanSearchResults();
            if (item.type === 'file') {
                var /** @type {?} */ fileParentPath = item.fullPath.substring(0, item.fullPath.lastIndexOf('/'));
                this.onEnterFolder(fileParentPath);
            }
            else if (item.type === 'dir') {
                this.onEnterFolder(item.fullPath);
            }
        };
        return LibMainFileManagerComponent;
    }());
    LibMainFileManagerComponent.decorators = [
        { type: i0.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'ngx-filemanager',
                    template: "<div class=\"ngx-file-page-container\">\n  <mat-drawer-container>\n    <mat-drawer-content [class.loaded]=\"initLoaded\">\n      <div\n        class=\"bulk-actions-container\"\n        [class.hidden]=\"($BulkSelected | async).length < 1\"\n        *ngIf=\"initLoaded\"\n      >\n        <bulk-actions\n          [bulkActions]=\"this.bulkActions\"\n          [bulkSelected$]=\"this.$BulkSelected\"\n          (clearSelected)=\"this.ClearBulkSelected()\"\n        >\n        </bulk-actions>\n      </div>\n      <div class=\"folder-actions-container\">\n        <main-actions [mainActions]=\"this.mainActions\"> </main-actions>\n      </div>\n      <div class=\"flex-h space-between breadcrumb-container\">\n        <bread-crumbs\n          [currentPath]=\"$CurrentPath | async\"\n          (clickedCrumb)=\"this.onClickCrumb($event)\"\n          [config]=\"config\"\n        >\n        </bread-crumbs>\n        <div class=\"flex-h\">\n          <mat-progress-spinner\n            *ngIf=\"$hasSending | async\"\n            mode=\"indeterminate\"\n            [diameter]=\"40\"\n            color=\"primary\"\n          ></mat-progress-spinner>\n          <mat-progress-spinner\n            *ngIf=\"$hasFailed | async\"\n            mode=\"determinate\"\n            [diameter]=\"40\"\n            color=\"warn\"\n            [value]=\"100\"\n          ></mat-progress-spinner>\n          <div\n            class=\"mat-elevation-z8 expander-container has-pointer mat-table\"\n            (click)=\"isFileDetailsOpen = !isFileDetailsOpen\"\n          >\n            <mat-icon\n              matTooltip=\"View File Details\"\n              class=\"expander-icon\"\n              [class.drawer-out]=\"isFileDetailsOpen\"\n              [class.drawer-in]=\"!isFileDetailsOpen\"\n              >expand_more</mat-icon\n            >\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"enableSearch\">\n        <form (submit)=\"searchAllDocumentsAndFolders(searchKeyword)\" [formGroup]=\"searchForm\">\n          <mat-form-field class=\"w-full px-2\">\n            <input matInput [(ngModel)]=\"searchKeyword\" formControlName=\"searchKeyword\" placeholder=\"Search here\"/>\n          </mat-form-field>\n          <mat-progress-spinner\n              *ngIf=\"showSearchingSpinner\"\n              mode=\"determinate\"\n              [diameter]=\"40\"\n              color=\"warn\"\n              [value]=\"100\"\n            ></mat-progress-spinner>\n        </form>\n        <div *ngIf=\"!showSearchingSpinner&&isSearching&&seachResultDocuments.length===0&&seachResultFolders.length===0\">\n          <div class=\"card-container\">\n            <h4>Search results: </h4>\n            <mat-card >\n              <div class=\"document\">\n                <div class=\"title\">\n                  There are no site files/folders match your keyword.\n                </div>\n              </div>\n            </mat-card>\n          </div>\n        </div>\n        <div class=\"exp-panel\" *ngIf=\"seachResultDocuments.length>0\">\n          <mat-expansion-panel [expanded]=\"true\">\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Files:\n              </mat-panel-title>\n              <mat-panel-description>\n                They are results of search files.\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <mat-card (click)=\"onSelectedSearchItem(document)\" *ngFor=\"let document of seachResultDocuments|slice:0: documentsShow\">\n              <div class=\"document\">\n                <div class=\"title\">\n                  {{document.name}}\n                </div>\n                <div class=\"search-item\">\n                  <mat-icon class=\"icon-size-44 text-primary\">\n                      insert_drive_file\n                  </mat-icon>\n                  <span>{{ document.fullPath }}</span>\n              </div>\n              </div>\n            </mat-card>\n            <div class=\"text-right\">\n              <button \n                *ngIf=\"documentsShow < seachResultDocuments.length\"\n                (click)=\"documentsShow=documentsShow+10\"\n                mat-raised-button>Load more</button>\n              </div>\n          </mat-expansion-panel>\n        </div>\n        <div class=\"exp-panel\" *ngIf=\"seachResultFolders.length>0\">\n          <mat-expansion-panel [expanded]=\"true\">\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Folders:\n              </mat-panel-title>\n              <mat-panel-description>\n                They are results of search folders.\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <mat-card (click)=\"onSelectedSearchItem(folder)\" *ngFor=\"let folder of seachResultFolders|slice:0: foldersShow\">\n              <div class=\"document\">\n                <div class=\"title\">\n                  {{folder.name}}\n                </div>\n                <div class=\"search-item\">\n                  <mat-icon class=\"icon-size-44 text-primary\">\n                      folder\n                  </mat-icon>\n                  <span>{{ folder.fullPath }}</span>\n                </div>\n              </div>\n            </mat-card>\n            <div class=\"text-right\">\n              <button \n                *ngIf=\"foldersShow < seachResultFolders.length\"\n                (click)=\"foldersShow=foldersShow+10\"\n                mat-raised-button>Load more</button>\n            </div>\n          </mat-expansion-panel>\n        </div>\n      </div>\n      <app-file-table\n        *ngIf=\"folders$ && files$\"\n        [folders]=\"folders$ | async\"\n        [files]=\"files$ | async\"\n        [fileActions]=\"fileActions\"\n        [folderActions]=\"folderActions\"\n        [config]=\"config\"\n        [$triggerClearSelected]=\"$triggerClearSelected\"\n        (checkedChanged)=\"$BulkSelected.next($event)\"\n        (selectedChanged)=\"this.onSelectedFilePath($event)\"\n        (enterFolder)=\"this.onEnterFolder($event)\"\n      >\n      </app-file-table>\n    </mat-drawer-content>\n    <mat-drawer\n      #drawer\n      [(opened)]=\"isFileDetailsOpen\"\n      class=\"history-drawer\"\n      mode=\"side\"\n      position=\"end\"\n      opened\n    >\n      <ngx-filemanager-file-details\n        [actions]=\"fileDetailActions\"\n        [file]=\"SelectedFile\"\n        [fileSystem]=\"fileSystem\"\n        [config]=\"config\"\n        (clickedDownload)=\"this.onDetailsClickDownload($event)\"\n      >\n      </ngx-filemanager-file-details>\n    </mat-drawer>\n  </mat-drawer-container>\n</div>\n",
                    providers: [
                        ActionHandlersService,
                        ClientFileSystemService,
                        OptimisticFilesystemService
                    ],
                    styles: [".heading{font-family:sans-serif;margin-left:10px}mat-drawer{width:260px}mat-drawer-content{overflow:hidden}mat-drawer-content .loaded{overflow:auto}mat-drawer-container{width:100%}.ngx-file-page-container{display:flex;height:calc(100% - 65px)}.expander-container{align-items:center;cursor:pointer;display:flex;flex-direction:row-reverse;right:0;top:0;z-index:1}.expander-icon{font-size:2em;height:1em;transition:transform .5s;width:1em}.bulk-actions-container{height:80px;overflow:hidden;position:absolute;top:0;transition:top .7s;width:100%;z-index:2}.hidden{top:-90px}.drawer-out{transform:rotate(-90deg)}.drawer-in{transform:rotate(90deg)}.flex-h{align-items:center;display:flex;flex-direction:row}.space-between{justify-content:space-between}button.top{margin-left:10px}.breadcrumb-container{margin:2px 0}.document{cursor:pointer}.search-item{align-items:center;display:flex}", "h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
                }] }
    ];
    /** @nocollapse */
    LibMainFileManagerComponent.ctorParameters = function () { return [
        { type: ActionHandlersService },
        { type: LoggerService },
        { type: FilemanagerStatusService }
    ]; };
    LibMainFileManagerComponent.propDecorators = {
        fileSystem: [{ type: i0.Input }],
        config: [{ type: i0.Input }]
    };
    function LibMainFileManagerComponent_tsickle_Closure_declarations() {
        /** @type {?} */
        LibMainFileManagerComponent.prototype.fileSystem;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.config;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.isFileDetailsOpen;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.$BulkSelected;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.$triggerClearSelected;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.initLoaded;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.requestMap;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.$CurrentPath;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.SelectedFile;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.destroyed;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.folderActions;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.fileActions;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.bulkActions;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.mainActions;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.fileDetailActions;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.folders$;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.files$;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.enableSearch;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.searchForm;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.searchKeyword;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.seachResultDocuments;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.seachResultFolders;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.documentsShow;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.foldersShow;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.isSearching;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.showSearchingSpinner;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.actionHandlers;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.logger;
        /** @type {?} */
        LibMainFileManagerComponent.prototype.status;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @record
     */
    function BreadCrumb() { }
    function BreadCrumb_tsickle_Closure_declarations() {
        /** @type {?} */
        BreadCrumb.prototype.label;
        /** @type {?|undefined} */
        BreadCrumb.prototype.path;
        /** @type {?|undefined} */
        BreadCrumb.prototype.icon;
        /** @type {?|undefined} */
        BreadCrumb.prototype.virtualPath;
    }
    /**
     * @param {?} virtualRoot
     * @return {?}
     */
    function MakeRootCrumb(virtualRoot) {
        return {
            label: '',
            icon: 'home',
            path: virtualRoot,
            virtualPath: '/'
        };
    }
    /**
     * @param {?} virtualRoot
     * @return {?}
     */
    function MakeWarningCrumb(virtualRoot) {
        return {
            label: '',
            icon: 'mood_bad',
            path: virtualRoot,
            virtualPath: virtualRoot
        };
    }
    var /** @type {?} */ MakeCrumbs = function (virtualRoot, absolutePath) {
        var /** @type {?} */ virtualRootParsed = EnsureAbsoluteDirectory(virtualRoot);
        var /** @type {?} */ absolutePathParsed = EnsureAbsoluteDirectory(absolutePath);
        if (absolutePathParsed.indexOf(virtualRootParsed) !== 0) {
            console.warn('Absolute path is not within the virtualRoot', { virtualRoot: virtualRoot, absolutePath: absolutePath });
            return [MakeWarningCrumb(virtualRootParsed)];
        }
        if (absolutePathParsed === virtualRootParsed) {
            return [MakeRootCrumb(virtualRootParsed)];
        }
        var /** @type {?} */ relativeVirtualRoot = absolutePathParsed.slice(virtualRootParsed.length);
        var /** @type {?} */ crumbs = [];
        relativeVirtualRoot
            .split('/')
            .filter(function (p) { return !!p; })
            .reduce(function (currentPath, curr) {
            var /** @type {?} */ dirname = path.basename(currentPath);
            var /** @type {?} */ crumb = {
                label: dirname,
                path: EnsureAbsoluteDirectory(virtualRootParsed + currentPath),
                virtualPath: EnsureAbsoluteDirectory(currentPath)
            };
            crumbs.unshift(crumb);
            var /** @type {?} */ parentPath = path.dirname(currentPath);
            return parentPath;
        }, relativeVirtualRoot);
        crumbs.unshift(MakeRootCrumb(virtualRootParsed));
        return crumbs;
    };
    var ɵ0$1 = MakeCrumbs;
    var /** @type {?} */ crumbFactory = {
        MakeCrumbs: MakeCrumbs
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AppBreadCrumbsComponent = /** @class */ (function () {
        /**
         * @param {?} logger
         */
        function AppBreadCrumbsComponent(logger) {
            this.logger = logger;
            this.clickedCrumb = new i0.EventEmitter();
        }
        Object.defineProperty(AppBreadCrumbsComponent.prototype, "currentPath", {
            /**
             * @param {?} newPath
             * @return {?}
             */
            set: function (newPath) {
                this._currentPath = newPath;
                this.makeCrumbs(newPath);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppBreadCrumbsComponent.prototype, "config", {
            /**
             * @param {?} newConfig
             * @return {?}
             */
            set: function (newConfig) {
                this._config = newConfig;
                this.makeCrumbs(this._currentPath);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?} newPath
         * @return {?}
         */
        AppBreadCrumbsComponent.prototype.makeCrumbs = function (newPath) {
            if (!this._config) {
                return;
            }
            var /** @type {?} */ virtualRoot = this._config.virtualRoot;
            this.crumbs = crumbFactory.MakeCrumbs(virtualRoot, newPath || virtualRoot);
            this.logger.info('makeCrumbs', {
                crumbs: this.crumbs,
                virtualRoot: virtualRoot,
                newPath: newPath
            });
        };
        /**
         * @param {?} crumb
         * @return {?}
         */
        AppBreadCrumbsComponent.prototype.onClickCrumb = function (crumb) {
            this.logger.info('onClickCrumb', { crumb: crumb });
            this.clickedCrumb.emit(crumb.path);
        };
        return AppBreadCrumbsComponent;
    }());
    AppBreadCrumbsComponent.decorators = [
        { type: i0.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'bread-crumbs',
                    template: "\n    <div class=\"flex-row align-center\">\n      <div\n        class=\"flex-row align-center\"\n        *ngFor=\"let crumb of crumbs; let first = first; let last = last\"\n      >\n        <div class=\"divider\" *ngIf=\"!first\">\n          >\n        </div>\n        <button\n          #myButton\n          class=\"crumb\"\n          mat-raised-button\n          color=\"secondary\"\n          [disabled]=\"last\"\n          (click)=\"onClickCrumb(crumb); myButton.disabled = true\"\n        >\n          <mat-icon *ngIf=\"crumb.icon\">{{ crumb.icon }}</mat-icon>\n          {{ crumb.label }}\n        </button>\n      </div>\n    </div>\n  ",
                    styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
                }] }
    ];
    /** @nocollapse */
    AppBreadCrumbsComponent.ctorParameters = function () { return [
        { type: LoggerService }
    ]; };
    AppBreadCrumbsComponent.propDecorators = {
        clickedCrumb: [{ type: i0.Output }],
        currentPath: [{ type: i0.Input }],
        config: [{ type: i0.Input }]
    };
    function AppBreadCrumbsComponent_tsickle_Closure_declarations() {
        /** @type {?} */
        AppBreadCrumbsComponent.prototype.crumbs;
        /** @type {?} */
        AppBreadCrumbsComponent.prototype.clickedCrumb;
        /** @type {?} */
        AppBreadCrumbsComponent.prototype._currentPath;
        /** @type {?} */
        AppBreadCrumbsComponent.prototype._config;
        /** @type {?} */
        AppBreadCrumbsComponent.prototype.logger;
    }

    var AppBulkActionsComponent = /** @class */ (function () {
        function AppBulkActionsComponent() {
            this.clearSelected = new i0.EventEmitter();
        }
        /**
         * @param {?} action
         * @param {?} selected
         * @return {?}
         */
        AppBulkActionsComponent.prototype.executeAction = function (action, selected) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, action.onClick(selected)];
                        case 1:
                            _a.sent();
                            this.clearSelected.emit();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return AppBulkActionsComponent;
    }());
    AppBulkActionsComponent.decorators = [
        { type: i0.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'bulk-actions',
                    template: "\n    <mat-toolbar color=\"primary\">\n      <mat-toolbar-row class=\"top-toolbar\">\n        <span class=\"top-toolbar-label\">\n          Bulk Actions\n        </span>\n      </mat-toolbar-row>\n      <mat-toolbar-row class=\"action-toolbar scroll-x\">\n        <div class=\"flex-row\" *ngIf=\"bulkSelected$ | async as selected\">\n          <div *ngFor=\"let action of bulkActions\">\n            <button\n              class=\"mr-10 flex-row align-center\"\n              mat-raised-button\n              [disabled]=\"action.$disabled | async\"\n              [color]=\"action.color\"\n              (click)=\"executeAction(action, selected)\"\n            >\n              <mat-icon>{{ action.icon }}</mat-icon>\n              {{ action.label }}\n            </button>\n          </div>\n        </div>\n      </mat-toolbar-row>\n    </mat-toolbar>\n  ",
                    styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
                }] }
    ];
    AppBulkActionsComponent.propDecorators = {
        bulkActions: [{ type: i0.Input }],
        bulkSelected$: [{ type: i0.Input }],
        clearSelected: [{ type: i0.Output }]
    };
    function AppBulkActionsComponent_tsickle_Closure_declarations() {
        /** @type {?} */
        AppBulkActionsComponent.prototype.bulkActions;
        /** @type {?} */
        AppBulkActionsComponent.prototype.bulkSelected$;
        /** @type {?} */
        AppBulkActionsComponent.prototype.clearSelected;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AppMainActionsComponent = /** @class */ (function () {
        function AppMainActionsComponent() {
        }
        return AppMainActionsComponent;
    }());
    AppMainActionsComponent.decorators = [
        { type: i0.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'main-actions',
                    template: "\n    <mat-toolbar>\n      <mat-toolbar-row class=\"top-toolbar\">\n        <span class=\"top-toolbar-label\">\n          Folder Actions\n        </span>\n      </mat-toolbar-row>\n      <mat-toolbar-row class=\"action-toolbar scroll-x\">\n        <div *ngFor=\"let action of mainActions\">\n          <button\n            class=\"mr-10 has-pointer\"\n            mat-raised-button\n            [color]=\"action.color\"\n            (click)=\"action.onClick(action)\"\n            [disabled]=\"action.$disabled | async\"\n          >\n            <mat-icon inline=\"true\">{{ action.icon }}</mat-icon>\n            {{ action.label }}\n          </button>\n        </div>\n      </mat-toolbar-row>\n    </mat-toolbar>\n  ",
                    styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}", "\n      .top-toolbar-label {\n        color: #8a8a8a;\n      }\n    "]
                }] }
    ];
    AppMainActionsComponent.propDecorators = {
        mainActions: [{ type: i0.Input }]
    };
    function AppMainActionsComponent_tsickle_Closure_declarations() {
        /** @type {?} */
        AppMainActionsComponent.prototype.mainActions;
    }

    /**
     * @param {?} ms
     * @return {?}
     */
    function promiseDelay(ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
            });
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @record
     */
    function FileIcon$1() { }
    function FileIcon_tsickle_Closure_declarations$1() {
        /**
         * Name of the icon, e.g. 'javascript'
         * @type {?}
         */
        FileIcon$1.prototype.name;
        /**
         * Define the file extensions that should use this icon.
         * E.g. ['js']
         * @type {?|undefined}
         */
        FileIcon$1.prototype.fileExtensions;
        /**
         * Define if there are some static file names that should apply this icon.
         * E.g. ['sample.js']
         * @type {?|undefined}
         */
        FileIcon$1.prototype.fileNames;
        /**
         * Define if there is a light icon available.
         * @type {?|undefined}
         */
        FileIcon$1.prototype.light;
        /**
         * Define if there is a high contrast icon available.
         * @type {?|undefined}
         */
        FileIcon$1.prototype.highContrast;
        /**
         * Define if the icon should be disabled.
         * @type {?|undefined}
         */
        FileIcon$1.prototype.disabled;
    }
    /**
     * @record
     */
    function FolderTheme$1() { }
    function FolderTheme_tsickle_Closure_declarations$1() {
        /**
         * Name of the theme
         * @type {?}
         */
        FolderTheme$1.prototype.name;
        /**
         * Define the default icon for folders in a theme.
         * @type {?}
         */
        FolderTheme$1.prototype.defaultIcon;
        /**
         * Icon for root folders.
         * @type {?|undefined}
         */
        FolderTheme$1.prototype.rootFolder;
        /**
         * Defines folder icons for specific folder names.
         * @type {?|undefined}
         */
        FolderTheme$1.prototype.icons;
    }
    /**
     * @record
     */
    function FolderIcon$1() { }
    function FolderIcon_tsickle_Closure_declarations$1() {
        /**
         * Name of the icon, e.g. 'src'
         * @type {?}
         */
        FolderIcon$1.prototype.name;
        /**
         * Define the folder names that should apply the icon.
         * E.g. ['src', 'source']
         * @type {?}
         */
        FolderIcon$1.prototype.folderNames;
        /**
         * Define if there is a light icon available.
         * @type {?|undefined}
         */
        FolderIcon$1.prototype.light;
        /**
         * Define if there is a high contrast icon available.
         * @type {?|undefined}
         */
        FolderIcon$1.prototype.highContrast;
        /**
         * Define if the icon should be disabled.
         * @type {?|undefined}
         */
        FolderIcon$1.prototype.disabled;
    }
    /**
     * @record
     */
    function DefaultIcon$1() { }
    function DefaultIcon_tsickle_Closure_declarations$1() {
        /**
         * Name of the icon, e.g. 'src'
         * @type {?}
         */
        DefaultIcon$1.prototype.name;
        /**
         * Define if there is a light icon available.
         * @type {?|undefined}
         */
        DefaultIcon$1.prototype.light;
        /**
         * Define if there is a high contrast icon available.
         * @type {?|undefined}
         */
        DefaultIcon$1.prototype.highContrast;
    }
    var FileIcons$1 = /** @class */ (function () {
        function FileIcons() {
        }
        return FileIcons;
    }());
    function FileIcons_tsickle_Closure_declarations$1() {
        /**
         * Define the default icon for files.
         * @type {?}
         */
        FileIcons$1.prototype.defaultIcon;
        /**
         * Defines all folder icons.
         * @type {?}
         */
        FileIcons$1.prototype.icons;
    }
    var /** @type {?} */ fileIcons$1 = {
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
    var /** @type {?} */ getFileIconName$1 = function (filename) {
        filename = filename.toLowerCase();
        if (!filename || !filename.includes('.')) {
            return fileIcons$1.defaultIcon.name;
        }
        var /** @type {?} */ ext = getFileExtension$1(filename);
        var /** @type {?} */ matchesExt = fileIcons$1.icons.filter(function (x) { return !!x.fileExtensions && !!x.fileExtensions.filter(function (y) { return y === ext; }).length; });
        var /** @type {?} */ matchesFilename = fileIcons$1.icons.filter(function (x) { return !!x.fileNames && !!x.fileNames.filter(function (y) { return y === filename; }).length; });
        if (!!matchesFilename.length) {
            return matchesFilename[0].name;
        }
        else if (!!matchesExt.length) {
            return matchesExt[0].name;
        }
        return fileIcons$1.defaultIcon.name;
    };
    var /** @type {?} */ isFileImage$1 = function (filename) { return getFileIconName$1(filename) === 'image'; };
    var /** @type {?} */ getFileExtension$1 = function (filename) { return filename.split('.').pop(); };
    var /** @type {?} */ getFileName$1 = function (filename) { return filename.split('.').slice(-2, -1)[0]; };
    var /** @type {?} */ getFileIcon = function (filename) {
        return '/assets/fileicons/' + getFileIconName$1(filename) + '.svg';
    };

    var FileDetailsComponent = /** @class */ (function () {
        /**
         * @param {?} logger
         */
        function FileDetailsComponent(logger) {
            this.logger = logger;
            this.clickedDownload = new i0.EventEmitter();
        }
        Object.defineProperty(FileDetailsComponent.prototype, "file", {
            /**
             * @return {?}
             */
            get: function () {
                return this._file;
            },
            /**
             * @param {?} newFile
             * @return {?}
             */
            set: function (newFile) {
                this._file = newFile;
                if (!newFile) {
                    return;
                }
                this.logger.info('file-details: set file', { newFile: newFile });
                this.isFile = this.file.type === 'file';
                this.isImage = getFileIconName$1(this.file.name) === 'image';
                this.setImageUrl().catch(function (e) { return console.error(e); });
                this.setPermissions();
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?} fileName
         * @return {?}
         */
        FileDetailsComponent.prototype.getFileType = function (fileName) {
            return getFileIconName$1(fileName);
        };
        Object.defineProperty(FileDetailsComponent.prototype, "hasInput", {
            /**
             * @return {?}
             */
            get: function () {
                return !!this.file;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        FileDetailsComponent.prototype.setImageUrl = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, error_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.imageUrl = null;
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 4, , 5]);
                            return [4 /*yield*/, promiseDelay(300)];
                        case 2:
                            _b.sent();
                            if (!this.hasInput || !this.isFile) {
                                return [2 /*return*/];
                            }
                            _a = this;
                            return [4 /*yield*/, this.fileSystem.CreateDownloadLink(this.file)];
                        case 3:
                            _a.imageUrl = _b.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            error_1 = _b.sent();
                            this.logger.error('Error setting ImageUrl', { error: error_1 }, error_1);
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @return {?}
         */
        FileDetailsComponent.prototype.setPermissions = function () {
            if (!this._file || !this._file.permissions) {
                return;
            }
            try {
                var /** @type {?} */ permissions = this._file.permissions;
                this.readers = permissions.readers;
                this.writers = permissions.writers;
                this.others = permissions.others;
            }
            catch ( /** @type {?} */error) {
                this.logger.error('file-details: setPermissions', {
                    error: error,
                    file: this._file
                });
            }
        };
        /**
         * @param {?} folder
         * @return {?}
         */
        FileDetailsComponent.prototype.getFolderSize = function (folder) {
            if (folder.metaData) {
                var /** @type {?} */ path = this.config.folderSizePath;
                return path.split('.').reduce(function (p, prop) { return p[prop]; }, folder);
            }
            return folder.size;
        };
        return FileDetailsComponent;
    }());
    FileDetailsComponent.decorators = [
        { type: i0.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'ngx-filemanager-file-details',
                    template: "\n    <div class=\"details-container ml-5\">\n      <div *ngIf=\"!hasInput\" class=\"none-selected\">\n        <h2>No item selected ...</h2>\n      </div>\n      <div *ngIf=\"hasInput\">\n        <mat-toolbar color=\"primary\">\n          <mat-toolbar-row class=\"title-row\">\n            <h2 *ngIf=\"isFile\">File Details</h2>\n            <h2 *ngIf=\"!isFile\">Directory Details</h2>\n          </mat-toolbar-row>\n          <mat-toolbar-row class=\"action-row\" *ngFor=\"let action of actions\">\n            <button\n              mat-raised-button\n              [matTooltip]=\"action.toolTip\"\n              [color]=\"action.color\"\n              (click)=\"action.onClick(file)\"\n              [disabled]=\"action.$disabled | async\"\n            >\n              <mat-icon>{{ action.icon }}</mat-icon>\n              <span>{{ action.label }}</span>\n            </button>\n          </mat-toolbar-row>\n        </mat-toolbar>\n        <span class=\"flex-row space-between align-top mt-5\">\n          <div>\n            <h5>Name</h5>\n            <h6 class=\"filename\">{{ file.name }}</h6>\n          </div>\n        </span>\n        <h5 class=\"mt-5\">Size</h5>\n        <h6 *ngIf=\"isFile\">{{ file.size | fileSize }}</h6>\n        <h6 *ngIf=\"!isFile&&config.folderSizePath\">{{ getFolderSize(file) | fileSize }}</h6>\n        <h5 class=\"mt-5\">Date</h5>\n        <h6>{{ file.date | date: 'short' }}</h6>\n        <span class=\"flex-row space-between align-top mt-5\">\n          <div>\n            <h5>Permissions</h5>\n            <div class=\"mb-10\">\n              <div *ngIf=\"readers?.length\">\n                <h6>Who can see this</h6>\n                <mat-chip-list>\n                  <mat-chip *ngFor=\"let entity of readers\">\n                    <mat-icon>people</mat-icon>\n                    <span>{{ entity }}</span>\n                  </mat-chip>\n                </mat-chip-list>\n              </div>\n              <div *ngIf=\"config?.showWriters && writers?.length\">\n                <h6>Who can edit this</h6>\n                <mat-chip-list>\n                  <mat-chip *ngFor=\"let entity of writers\">\n                    <mat-icon>people</mat-icon>\n                    <span>{{ entity }}</span>\n                  </mat-chip>\n                </mat-chip-list>\n              </div>\n              <div *ngIf=\"config?.showOthers && others\">\n                <h6>Everyone else can</h6>\n                <mat-chip-list>\n                  <mat-chip>\n                    {{ others }}\n                  </mat-chip>\n                </mat-chip-list>\n              </div>\n            </div>\n          </div>\n        </span>\n        <h5 class=\"mt-5\">Full Path</h5>\n        <h6>{{ file.fullPath }}</h6>\n        <h5 class=\"mt-5\">Type</h5>\n        <h6 *ngIf=\"!isFile\">Directory</h6>\n        <h6 *ngIf=\"isFile\" class=\"capitalize \">\n          {{ getFileType(file.name) }}\n        </h6>\n        <div *ngIf=\"isFile\" class=\"flex-row space-between align-top mt-5\">\n          <div>\n            <h5>Download</h5>\n            <div *ngIf=\"isImage\" class=\"preview\">\n              <i>Image Preview</i>\n              <div\n                class=\"has-pointer\"\n                (click)=\"this.clickedDownload.emit(file)\"\n              >\n                <img *ngIf=\"imageUrl\" [src]=\"imageUrl\" />\n              </div>\n            </div>\n            <div *ngIf=\"!isImage\">\n              <h6 class=\"no-preview-text\">\n                No preview available\n              </h6>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
                    styles: ["\n      .filename {\n        padding-right: 10px;\n      }\n      .none-selected {\n        color: grey;\n        text-align: center;\n        width: 100%;\n        margin-top: 100px;\n      }\n      .mb-10 {\n        margin-bottom: 10px;\n      }\n      .mt-5 {\n        margin-top: 10px;\n      }\n      .ml-5 {\n        margin-left: 5px;\n      }\n      .no-preview-text {\n        color: grey;\n        font-decoration: italic;\n      }\n      h5 {\n        margin: 0px;\n        color: #616161;\n        font-weight: normal;\n      }\n      h6 {\n        margin: 0px;\n        font-size: 1em;\n        overflow-wrap: break-word;\n        font-weight: bold;\n        margin-bottom: 5px;\n        margin-top: 2px;\n      }\n      img {\n        max-width: 100%;\n        max-height: 400px;\n      }\n      .preview {\n        opacity: 1;\n        transition: opacity 1s;\n      }\n      .title-row {\n        height: 45px;\n        padding-left: 8px;\n      }\n      .action-row {\n        height: 45px;\n        padding-left: 8px;\n      }\n      .action-row:last-child {\n        height: 48px;\n        padding-bottom: 4px;\n      }\n    ", "h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
                }] }
    ];
    /** @nocollapse */
    FileDetailsComponent.ctorParameters = function () { return [
        { type: LoggerService }
    ]; };
    FileDetailsComponent.propDecorators = {
        file: [{ type: i0.Input }],
        fileSystem: [{ type: i0.Input }],
        config: [{ type: i0.Input }],
        actions: [{ type: i0.Input }],
        clickedDownload: [{ type: i0.Output }]
    };
    function FileDetailsComponent_tsickle_Closure_declarations() {
        /** @type {?} */
        FileDetailsComponent.prototype.imageUrl;
        /** @type {?} */
        FileDetailsComponent.prototype._file;
        /** @type {?} */
        FileDetailsComponent.prototype.fileSystem;
        /** @type {?} */
        FileDetailsComponent.prototype.config;
        /** @type {?} */
        FileDetailsComponent.prototype.actions;
        /** @type {?} */
        FileDetailsComponent.prototype.clickedDownload;
        /** @type {?} */
        FileDetailsComponent.prototype.others;
        /** @type {?} */
        FileDetailsComponent.prototype.writers;
        /** @type {?} */
        FileDetailsComponent.prototype.readers;
        /** @type {?} */
        FileDetailsComponent.prototype.isFile;
        /** @type {?} */
        FileDetailsComponent.prototype.isImage;
        /** @type {?} */
        FileDetailsComponent.prototype.logger;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} input
     * @return {?}
     */
    function ConvertToTitleCase(input) {
        var /** @type {?} */ capitalsWithSpaces = input.replace(/([A-Z])/g, ' $1').trim();
        var /** @type {?} */ underscoresToSpaces = capitalsWithSpaces.replace(/_/g, ' ');
        return underscoresToSpaces
            .split(' ')
            .map(function (p) { return p.charAt(0).toUpperCase() + p.substr(1).toLowerCase(); })
            .join(' ');
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     */
    var FormBase = /** @class */ (function () {
        function FormBase() {
            var _this = this;
            this.internalControl = new forms.FormControl();
            this._destroyed = new rxjs.Subject();
            this.disabled = false;
            this.propagateOnChange = function () { };
            this.onTouched = function () { };
            // Garrentee that init and destroy are called
            // even if ngOnInit() or ngOnDestroy() are overriden
            var /** @type {?} */ originalOnDestroy = this.ngOnDestroy;
            this.ngOnDestroy = function () {
                _this.destroy();
                originalOnDestroy.apply(_this);
            };
            var /** @type {?} */ originalOnInit = this.ngOnInit;
            this.ngOnInit = function () {
                _this.init();
                originalOnInit.apply(_this);
            };
        }
        /**
         * @return {?}
         */
        FormBase.prototype.ngOnInit = function () { };
        /**
         * @return {?}
         */
        FormBase.prototype.ngOnDestroy = function () { };
        /**
         * @return {?}
         */
        FormBase.prototype.init = function () {
            var _this = this;
            this._destroyed.next();
            this.autoCompleteObscureName = uuid.v4();
            this.internalControl.valueChanges
                .pipe(operators.takeUntil(this._destroyed))
                .pipe(operators.auditTime(100))
                .subscribe(function () {
                _this._value = _this.internalControl.value;
                _this.onChange(_this._value);
                _this.onTouched();
                // console.log('form-base-class: valueChanges', {val: this._value});
            });
            if (!this.placeholder) {
                var /** @type {?} */ nameParsed = ConvertToTitleCase(this.formControlName + '');
                this.placeholder = nameParsed;
            }
        };
        /**
         * @return {?}
         */
        FormBase.prototype.destroy = function () {
            this._destroyed.next();
        };
        Object.defineProperty(FormBase.prototype, "value", {
            /**
             * @return {?}
             */
            get: function () {
                return this._value;
            },
            /**
             * @param {?} val
             * @return {?}
             */
            set: function (val) {
                this._value = val;
                this.internalControl.setValue(val);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        FormBase.prototype.writeValue = function (value) {
            this.value = value;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        FormBase.prototype.registerOnChange = function (fn) {
            this.propagateOnChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        FormBase.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        FormBase.prototype.setDisabledState = function (isDisabled) {
            var _this = this;
            this.disabled = isDisabled;
            setTimeout(function () {
                if (isDisabled) {
                    _this.internalControl.disable();
                }
                else {
                    _this.internalControl.enable();
                }
            });
        };
        /**
         * @param {?} c
         * @return {?}
         */
        FormBase.prototype.validate = function (c) {
            var /** @type {?} */ errors = c.errors;
            var /** @type {?} */ value = c.value;
            // console.log('form-base-class: validate()', { errors, value });
            this.internalControl.setValidators(c.validator);
            return !this.validationError
                ? null
                : {
                    validationError: {
                        valid: false
                    }
                };
        };
        /**
         * @param {?} inputValue
         * @return {?}
         */
        FormBase.prototype.onChange = function (inputValue) {
            this.validationError = this.CheckValueIsValid();
            if (this.validationError) {
                this.propagateOnChange(this.value);
            }
            else {
                this.propagateOnChange(inputValue);
            }
        };
        /**
         * @return {?}
         */
        FormBase.prototype.CheckValueIsValid = function () {
            return null;
        };
        return FormBase;
    }());
    FormBase.decorators = [
        { type: i0.Directive }
    ];
    /** @nocollapse */
    FormBase.ctorParameters = function () { return []; };
    FormBase.propDecorators = {
        formControlName: [{ type: i0.Input }],
        placeholder: [{ type: i0.Input }]
    };
    function FormBase_tsickle_Closure_declarations() {
        /** @type {?} */
        FormBase.prototype.internalControl;
        /** @type {?} */
        FormBase.prototype.autoCompleteObscureName;
        /** @type {?} */
        FormBase.prototype._destroyed;
        /** @type {?} */
        FormBase.prototype.disabled;
        /** @type {?} */
        FormBase.prototype.validationError;
        /** @type {?} */
        FormBase.prototype._value;
        /** @type {?} */
        FormBase.prototype.formControlName;
        /** @type {?} */
        FormBase.prototype.placeholder;
        /** @type {?} */
        FormBase.prototype.propagateOnChange;
        /** @type {?} */
        FormBase.prototype.onTouched;
    }

    /**
     * @record
     */
    function FormFilesConfiguration() { }
    function FormFilesConfiguration_tsickle_Closure_declarations() {
        /** @type {?} */
        FormFilesConfiguration.prototype.directory;
        /** @type {?|undefined} */
        FormFilesConfiguration.prototype.bucketname;
        /** @type {?} */
        FormFilesConfiguration.prototype.firebaseConfig;
        /** @type {?|undefined} */
        FormFilesConfiguration.prototype.maxFiles;
        /** @type {?|undefined} */
        FormFilesConfiguration.prototype.imageCompressionQuality;
        /** @type {?|undefined} */
        FormFilesConfiguration.prototype.imageCompressionMaxSize;
        /** @type {?|undefined} */
        FormFilesConfiguration.prototype.acceptedFiles;
    }
    var FormFileFirebaseComponent = /** @class */ (function (_super) {
        __extends(FormFileFirebaseComponent, _super);
        /**
         * @param {?} ns
         */
        function FormFileFirebaseComponent(ns) {
            var _this = _super.call(this) || this;
            _this.ns = ns;
            _this.placeholder = 'upload here';
            _this.config = {};
            // tslint:disable-next-line: no-output-on-prefix
            _this.uploadStatusChanged = new i0.EventEmitter();
            _this.destroyed = new rxjs.Subject();
            return _this;
        }
        /**
         * @return {?}
         */
        FormFileFirebaseComponent.prototype.ngOnInit = function () {
            var _this = this;
            var /** @type {?} */ app;
            if (firebase__default.apps.length) {
                app = firebase__default.apps[0];
            }
            else {
                app = firebase__default.initializeApp(this.config.firebaseConfig);
            }
            this.storage = app.storage(this.currentBucketName());
            rxjs.timer(0, 1000)
                .pipe(operators.takeUntil(this.destroyed))
                .subscribe(function () {
                _this.checkAllUploadsAreDone();
            });
        };
        /**
         * @return {?}
         */
        FormFileFirebaseComponent.prototype.ngOnDestroy = function () {
            this.destroyed.next();
        };
        /**
         * @return {?}
         */
        FormFileFirebaseComponent.prototype.checkAllUploadsAreDone = function () {
            var /** @type {?} */ allFiles = this.value;
            var /** @type {?} */ completeArray = allFiles
                .filter(function (f) { return !!f; })
                .filter(function (f) { return !!f.value; })
                .filter(function (f) { return !!f.value.props; })
                .map(function (f) { return f.value.props.completed; });
            var /** @type {?} */ haveAllFilesComplete = completeArray.reduce(function (previous, currentComplete) { return previous && currentComplete; }, true);
            var /** @type {?} */ isStillUploading = !haveAllFilesComplete;
            this.uploadStatusChanged.emit(isStillUploading);
        };
        Object.defineProperty(FormFileFirebaseComponent.prototype, "isMultiple", {
            /**
             * @return {?}
             */
            get: function () {
                return this.config && this.config.maxFiles !== 1;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FormFileFirebaseComponent.prototype, "maxReached", {
            /**
             * @return {?}
             */
            get: function () {
                return (this.config &&
                    this.config.maxFiles &&
                    this.value &&
                    this.config.maxFiles === this.value.length);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        FormFileFirebaseComponent.prototype.currentBucketName = function () {
            return (this.config.bucketname ||
                // tslint:disable-next-line: no-string-literal
                this.config.firebaseConfig['storageBucket']);
        };
        /**
         * @param {?} fileObject
         * @return {?}
         */
        FormFileFirebaseComponent.prototype.clickRemoveTag = function (fileObject) {
            return __awaiter(this, void 0, void 0, function () {
                var error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.ensureValueIsArray();
                            this.value = this.value.filter(function (f) { return f.id !== fileObject.id; });
                            if (!fileObject.bucket_path) return [3 /*break*/, 4];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.storage.refFromURL(fileObject.bucket_path).delete()];
                        case 2:
                            _a.sent();
                            console.log('form-files: clickRemoveTag() file deleted from storage', {
                                fileObject: fileObject
                            });
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            console.log('form-files: clickRemoveTag() problem deleting file', error_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} event
         * @return {?}
         */
        FormFileFirebaseComponent.prototype.onFileChange = function (event) {
            var _this = this;
            if (event.target.files && event.target.files.length) {
                var /** @type {?} */ filesList = event.target.files;
                var /** @type {?} */ fileArray = Array.from(filesList);
                fileArray.map(function (file) { return _this.beginUploadTask(file); });
            }
        };
        /**
         * @param {?} file
         * @return {?}
         */
        FormFileFirebaseComponent.prototype.beginUploadTask = function (file) {
            return __awaiter(this, void 0, void 0, function () {
                var bucketPath, uniqueFileName, originalFileName, dir, dirPath, fullPath, fileParsed, uploadTask;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            bucketPath = 'gs://' + this.currentBucketName();
                            uniqueFileName = file.name;
                            originalFileName = file.name;
                            dir = this.config.directory;
                            dirPath = TrimSlashes(bucketPath) + "/" + TrimSlashes(dir);
                            fullPath = TrimSlashes(dirPath) + "/" + uniqueFileName;
                            console.log('beginUploadTask()', { fileData: file, bucketPath: bucketPath, fullPath: fullPath });
                            if (!(file.type === 'image/*')) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.parseAndCompress(file)];
                        case 1:
                            fileParsed = _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            fileParsed = file;
                            _a.label = 3;
                        case 3: return [4 /*yield*/, this.addFile(uniqueFileName, originalFileName, fullPath)];
                        case 4:
                            _a.sent();
                            uploadTask = this.storage.refFromURL(fullPath).put(fileParsed);
                            uploadTask.on(firebase__default.storage.TaskEvent.STATE_CHANGED, {
                                next: function (snap) { return _this.onNext(snap, fullPath); },
                                error: function (error) { return _this.onError(error); },
                                complete: function () { return _this.onComplete(fullPath, uniqueFileName, originalFileName); }
                            });
                            this.destroyed.pipe(operators.take(1)).subscribe(function () {
                                uploadTask.cancel();
                            });
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} file
         * @return {?}
         */
        FormFileFirebaseComponent.prototype.parseAndCompress = function (file) {
            return __awaiter(this, void 0, void 0, function () {
                var maxWidth, maxQuality, dataURL, newDataURL, oldKb, newKb, fileNew;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.config.imageCompressionMaxSize &&
                                !this.config.imageCompressionQuality) {
                                return [2 /*return*/, file];
                            }
                            maxWidth = this.config.imageCompressionMaxSize || 1800;
                            maxQuality = this.config.imageCompressionQuality || 0.6;
                            return [4 /*yield*/, blobToDataURL(file)];
                        case 1:
                            dataURL = _a.sent();
                            return [4 /*yield*/, downscaleImage(dataURL, maxWidth, maxQuality, 'image/jpeg')];
                        case 2:
                            newDataURL = _a.sent();
                            oldKb = this.getFileSizeKiloBytes(dataURL);
                            newKb = this.getFileSizeKiloBytes(newDataURL);
                            fileNew = dataURItoBlob(newDataURL);
                            console.log("app-tags-files.component: optimized image...\n  --> old=" + oldKb + " kb\n  --> new=" + newKb + " kb");
                            return [2 /*return*/, fileNew];
                    }
                });
            });
        };
        /**
         * @param {?} dataURL
         * @return {?}
         */
        FormFileFirebaseComponent.prototype.getFileSizeKiloBytes = function (dataURL) {
            var /** @type {?} */ head = 'data:image/*;base64,';
            var /** @type {?} */ fileSizeBytes = Math.round(((dataURL.length - head.length) * 3) / 4);
            var /** @type {?} */ fileSizeKiloBytes = (fileSizeBytes / 1024).toFixed(0);
            return fileSizeKiloBytes;
        };
        /**
         * @param {?} snapshot
         * @param {?} fullPath
         * @return {?}
         */
        FormFileFirebaseComponent.prototype.onNext = function (snapshot, fullPath) {
            return __awaiter(this, void 0, void 0, function () {
                var file, progress;
                return __generator(this, function (_a) {
                    this.ensureValueIsArray();
                    switch (snapshot.state) {
                        case firebase__default.storage.TaskState.RUNNING: // or 'running'
                            file = this.value.find(function (f) { return f.bucket_path === fullPath; });
                            progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            console.log('Upload is running', {
                                file: file,
                                fullPath: fullPath,
                                progress: progress,
                                snapshot: snapshot
                            });
                            file.value.props.progress = progress;
                            break;
                    }
                    return [2 /*return*/];
                });
            });
        };
        /**
         * @param {?} error
         * @return {?}
         */
        FormFileFirebaseComponent.prototype.onError = function (error) {
            this.ns.notify('storage/unauthorized', 'Error Uploading');
            console.error('onError(error)', { error: error }, error);
        };
        /**
         * @param {?} fullPath
         * @param {?} uniqueFileName
         * @param {?} originalFileName
         * @return {?}
         */
        FormFileFirebaseComponent.prototype.onComplete = function (fullPath, uniqueFileName, originalFileName) {
            return __awaiter(this, void 0, void 0, function () {
                var ref, url, isImage, file;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log('onComplete()', {});
                            ref = this.storage.refFromURL(fullPath);
                            return [4 /*yield*/, ref.getDownloadURL()];
                        case 1:
                            url = _a.sent();
                            isImage = isFileImage$1(originalFileName);
                            this.ensureValueIsArray();
                            file = this.value.find(function (f) { return f.id === uniqueFileName; });
                            file.id = url;
                            if (isImage) {
                                file.imageurl = url;
                            }
                            file.value.props.completed = true;
                            this.writeValue(this.value);
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} uniqueFileName
         * @param {?} originalFileName
         * @param {?} fullPath
         * @return {?}
         */
        FormFileFirebaseComponent.prototype.addFile = function (uniqueFileName, originalFileName, fullPath) {
            var /** @type {?} */ fileIcon = getFileIcon(originalFileName);
            var /** @type {?} */ newFile = {
                id: uniqueFileName,
                fileicon: fileIcon,
                imageurl: null,
                bucket_path: fullPath,
                value: {
                    name: originalFileName,
                    props: {
                        thumb: null,
                        fileicon: fileIcon,
                        progress: 0,
                        completed: false
                    }
                }
            };
            this.ensureValueIsArray();
            this.value.push(newFile);
        };
        /**
         * @return {?}
         */
        FormFileFirebaseComponent.prototype.ensureValueIsArray = function () {
            if (!Array.isArray(this.value)) {
                this.writeValue([]);
            }
        };
        return FormFileFirebaseComponent;
    }(FormBase));
    FormFileFirebaseComponent.decorators = [
        { type: i0.Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: 'form-file-firebase',
                    template: "\n    <div>\n      <label class=\"custom-file-upload\">\n        <input\n          *ngIf=\"isMultiple\"\n          class=\"hidden\"\n          type=\"file\"\n          multiple\n          [disabled]=\"disabled || maxReached\"\n          (change)=\"onFileChange($event)\"\n        />\n        <input\n          *ngIf=\"!isMultiple\"\n          class=\"hidden\"\n          type=\"file\"\n          [disabled]=\"disabled || maxReached\"\n          (change)=\"onFileChange($event)\"\n        />\n        {{ placeholder }}\n        <div class=\"max-files\" *ngIf=\"maxReached && !disabled\">\n          Max Uploaded - Limit of {{ config.maxFiles }} file(s) reached. Remove\n          files to change uploads\n        </div>\n      </label>\n      <app-uploaded-files-list\n        [disabled]=\"disabled\"\n        [uploadedFiles]=\"this.value\"\n        (clickRemoveTag)=\"this.clickRemoveTag($event)\"\n      >\n      </app-uploaded-files-list>\n    </div>\n  ",
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: i0.forwardRef(function () { return FormFileFirebaseComponent; }),
                            multi: true
                        },
                        {
                            provide: forms.NG_VALIDATORS,
                            useExisting: i0.forwardRef(function () { return FormFileFirebaseComponent; }),
                            multi: true
                        }
                    ],
                    styles: ["\n      .custom-file-upload {\n        border: 4px dashed #ccc;\n        display: inline-block;\n        padding: 35px 0px;\n        cursor: pointer;\n        width: calc(100% - 8px);\n        text-align: center;\n        font-size: 1.5em;\n        color: #777;\n      }\n      .hidden {\n        display: none;\n      }\n      .max-files {\n        font-size: 0.9em;\n        color: orange;\n        font-style: italic;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    FormFileFirebaseComponent.ctorParameters = function () { return [
        { type: NotificationService }
    ]; };
    FormFileFirebaseComponent.propDecorators = {
        placeholder: [{ type: i0.Input }],
        config: [{ type: i0.Input }],
        uploadStatusChanged: [{ type: i0.Output }]
    };
    function FormFileFirebaseComponent_tsickle_Closure_declarations() {
        /** @type {?} */
        FormFileFirebaseComponent.prototype.placeholder;
        /** @type {?} */
        FormFileFirebaseComponent.prototype.config;
        /** @type {?} */
        FormFileFirebaseComponent.prototype.uploadStatusChanged;
        /** @type {?} */
        FormFileFirebaseComponent.prototype.destroyed;
        /** @type {?} */
        FormFileFirebaseComponent.prototype.storage;
        /** @type {?} */
        FormFileFirebaseComponent.prototype.ns;
    }
    /**
     * @param {?} blob
     * @return {?}
     */
    function blobToDataURL(blob) {
        return __awaiter(this, void 0, void 0, function () {
            var reader;
            return __generator(this, function (_a) {
                reader = new FileReader();
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        reader.onload = function (e) {
                            resolve(e.target.result);
                        };
                        reader.onerror = function (error) {
                            reject(error);
                        };
                        reader.readAsDataURL(blob);
                    })];
            });
        });
    }
    /**
     * @param {?} dataURI
     * @return {?}
     */
    function dataURItoBlob(dataURI) {
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        var /** @type {?} */ byteString = atob(dataURI.split(',')[1]);
        // separate out the mime component
        var /** @type {?} */ mimeString = dataURI
            .split(',')[0]
            .split(':')[1]
            .split(';')[0];
        // write the bytes of the string to an ArrayBuffer
        var /** @type {?} */ ab = new ArrayBuffer(byteString.length);
        // create a view into the buffer
        var /** @type {?} */ ia = new Uint8Array(ab);
        // set the bytes of the buffer to the correct values
        for (var /** @type {?} */ i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        // write the ArrayBuffer to a blob, and you're done
        var /** @type {?} */ blob = new Blob([ab], { type: mimeString });
        return blob;
    }
    /**
     * @param {?} dataUrl
     * @param {?} newWidth
     * @param {?} imageQuality
     * @param {?} imageType
     * @param {?=} debug
     * @return {?}
     */
    function downscaleImage(dataUrl, newWidth, imageQuality, imageType, debug) {
        return __awaiter(this, void 0, void 0, function () {
            var image, oldWidth, oldHeight, newHeight, canvas, ctx, newDataUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Provide default values
                        imageType = imageType || 'image/jpeg';
                        imageQuality = imageQuality || 0.7;
                        image = new Image();
                        image.src = dataUrl;
                        return [4 /*yield*/, new Promise(function (resolve) {
                                image.onload = function () {
                                    resolve('');
                                };
                            })];
                    case 1:
                        _a.sent();
                        oldWidth = image.width;
                        oldHeight = image.height;
                        newHeight = Math.floor((oldHeight / oldWidth) * newWidth);
                        canvas = document.createElement('canvas');
                        canvas.width = newWidth;
                        canvas.height = newHeight;
                        ctx = canvas.getContext('2d');
                        ctx.drawImage(image, 0, 0, newWidth, newHeight);
                        newDataUrl = canvas.toDataURL(imageType, imageQuality);
                        if (debug) {
                            console.log('quill.imageCompressor: downscaling image...', {
                                args: {
                                    dataUrl: dataUrl,
                                    newWidth: newWidth,
                                    imageType: imageType,
                                    imageQuality: imageQuality
                                },
                                image: image,
                                oldWidth: oldWidth,
                                oldHeight: oldHeight,
                                newHeight: newHeight,
                                canvas: canvas,
                                ctx: ctx,
                                newDataUrl: newDataUrl
                            });
                        }
                        return [2 /*return*/, newDataUrl];
                }
            });
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FormFileUploadedFileListComponent = /** @class */ (function () {
        function FormFileUploadedFileListComponent() {
            this.uploadedFiles = [];
            this.clickRemoveTag = new i0.EventEmitter();
        }
        /**
         * @param {?} file
         * @return {?}
         */
        FormFileUploadedFileListComponent.prototype.getProgress = function (file) {
            var /** @type {?} */ isDone = this.isDone(file);
            if (isDone) {
                return 100;
            }
            if (file && file.value && file.value.props) {
                var /** @type {?} */ p = file.value.props.progress;
                return p * 0.95; // 95% until download completed
            }
            return 100;
        };
        /**
         * @param {?} file
         * @return {?}
         */
        FormFileUploadedFileListComponent.prototype.isDone = function (file) {
            if (file && file.value && file.value.props) {
                var /** @type {?} */ c = file.value.props.completed;
                return c;
            }
            return false;
        };
        return FormFileUploadedFileListComponent;
    }());
    FormFileUploadedFileListComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'app-uploaded-files-list',
                    template: "\n    <p *ngIf=\"uploadedFiles?.length\">Uploaded files:</p>\n    <div>\n      <div *ngFor=\"let file of uploadedFiles\">\n        <div class=\"full-width flex-h\">\n          <mat-icon id=\"i-done\" *ngIf=\"!disabled && isDone(file)\"\n            >done</mat-icon\n          >\n          <img class=\"file-icon\" image [src]=\"file['fileicon']\" />\n          <a class=\"full-width flex-h has-ellipsis\" [href]=\"file.id\" target=\"_blank\">\n            <span class=\"has-ellipsis\">{{ file.value.name }}</span>\n            <mat-icon class=\"i-open\">open_in_new</mat-icon>\n            <img\n              *ngIf=\"file['imageurl']\"\n              class=\"file-thumb\"\n              image\n              [src]=\"file['imageurl']\"\n            />\n          </a>\n          <mat-icon\n            *ngIf=\"!disabled\"\n            class=\"has-pointer\"\n            (click)=\"this.clickRemoveTag.emit(file)\"\n            >cancel</mat-icon\n          >\n        </div>\n        <div class=\"full-width\">\n          <mat-progress-bar\n            class=\"progress\"\n            mode=\"determinate\"\n            [value]=\"getProgress(file)\"\n          ></mat-progress-bar>\n        </div>\n      </div>\n    </div>\n  ",
                    styles: ["\n      .full-width {\n        width: 100%;\n      }\n      .flex-h {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n      }\n      .has-pointer {\n        cursor: pointer;\n      }\n      .file-link {\n        display: flex;\n        align-items: center;\n      }\n      .file-thumb,\n      .file-icon {\n        margin: 0px 10px;\n        height: 30px;\n      }\n      .file-thumb {\n        background-color: #ddd;\n      }\n      .i-open {\n        font-size: 1em;\n      }\n      .has-ellipsis {\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n      }\n    "]
                }] }
    ];
    FormFileUploadedFileListComponent.propDecorators = {
        disabled: [{ type: i0.Input }],
        uploadedFiles: [{ type: i0.Input }],
        clickRemoveTag: [{ type: i0.Output }]
    };
    function FormFileUploadedFileListComponent_tsickle_Closure_declarations() {
        /** @type {?} */
        FormFileUploadedFileListComponent.prototype.disabled;
        /** @type {?} */
        FormFileUploadedFileListComponent.prototype.uploadedFiles;
        /** @type {?} */
        FormFileUploadedFileListComponent.prototype.clickRemoveTag;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FormFileFirebaseModule = /** @class */ (function () {
        function FormFileFirebaseModule() {
        }
        return FormFileFirebaseModule;
    }());
    FormFileFirebaseModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        progressBar.MatProgressBarModule,
                        input.MatInputModule,
                        icon.MatIconModule
                    ],
                    exports: [FormFileFirebaseComponent],
                    declarations: [FormFileFirebaseComponent, FormFileUploadedFileListComponent],
                    providers: []
                },] }
    ];

    var FileSystemRequestBuilder = /** @class */ (function () {
        /**
         * @param {?} http
         * @param {?} url
         * @param {?} logger
         * @param {?} LOG_ID
         */
        function FileSystemRequestBuilder(http, url, logger, LOG_ID) {
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
        FileSystemRequestBuilder.prototype.AddBody = function (body) {
            this.body = Object.assign(Object.assign({}, this.body), body);
            return this;
        };
        /**
         * @template T
         * @param {?} body
         * @return {?}
         */
        FileSystemRequestBuilder.prototype.PatchBody = function (body) {
            var /** @type {?} */ partBody = body;
            this.body = Object.assign(Object.assign({}, this.body), partBody);
            return this;
        };
        /**
         * @param {?} headers
         * @return {?}
         */
        FileSystemRequestBuilder.prototype.PatchHeaders = function (headers) {
            this.options.headers = Object.assign(Object.assign({}, this.options.headers), headers);
            return this;
        };
        /**
         * @return {?}
         */
        FileSystemRequestBuilder.prototype.MakeJson = function () {
            this.options['responseType'] = 'json';
            this.options.headers['Content-Type'] = 'application/json';
        };
        /**
         * @return {?}
         */
        FileSystemRequestBuilder.prototype.makeRequestKey = function () {
            var /** @type {?} */ key = this.url + JSON.stringify(this.body || {});
            return key;
        };
        /**
         * @return {?}
         */
        FileSystemRequestBuilder.prototype.POST = function () {
            return __awaiter(this, void 0, void 0, function () {
                var key, response, apiErrorResponse_1, detail;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            key = this.makeRequestKey();
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            this.logger.info(this.LOG_ID + ' FileSystemRequestBuilder', {
                                url: this.url,
                                body: this.body,
                                options: this.options
                            });
                            return [4 /*yield*/, this.http
                                    .post(this.url, this.body, this.options)
                                    .pipe(operators.take(1))
                                    .toPromise()];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, response];
                        case 3:
                            apiErrorResponse_1 = _a.sent();
                            console.error('API Post Error', { apiErrorResponse: apiErrorResponse_1 });
                            if (apiErrorResponse_1.error && apiErrorResponse_1.error.errorDetail) {
                                detail = apiErrorResponse_1.error.errorDetail;
                                throw new Error('API Response: ' + detail);
                            }
                            throw new Error('API request failed, status:' + apiErrorResponse_1.statusText);
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        return FileSystemRequestBuilder;
    }());
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

    var ServerFilesystemProviderService = /** @class */ (function () {
        /**
         * @param {?} http
         * @param {?} logger
         */
        function ServerFilesystemProviderService(http, logger) {
            this.http = http;
            this.logger = logger;
            this.LOG_ID = Math.random().toString(32).slice(2, 10);
        }
        /**
         * @param {?} action
         * @return {?}
         */
        ServerFilesystemProviderService.prototype.makeAPIRequest = function (action) {
            this.logger.info('makeAPIRequest', { action: action, context: this });
            return new FileSystemRequestBuilder(this.http, this.apiEndpoint, this.logger, this.LOG_ID).AddBody({
                action: action,
                bucketname: this.bucketname,
                isAdmin: this.isAdmin,
            });
        };
        /**
         * @param {?} config
         * @return {?}
         */
        ServerFilesystemProviderService.prototype.Initialize = function (config) {
            this.bucketname = config.bucketname;
            this.isAdmin = config.isAdmin;
            this.apiEndpoint = EnsureNoTrailingSlash(config.apiEndpoint);
        };
        /**
         * @param {?} path
         * @return {?}
         */
        ServerFilesystemProviderService.prototype.List = function (path) {
            return this.makeAPIRequest('list')
                .PatchBody({
                path: path,
            }).PatchHeaders({
                Authorization: window.localStorage.getItem('token')
            })
                .POST();
        };
        /**
         * @param {?} newPath
         * @param {?=} disableNoClobber
         * @return {?}
         */
        ServerFilesystemProviderService.prototype.CreateFolder = function (newPath, disableNoClobber) {
            return this.makeAPIRequest('createFolder')
                .PatchBody({
                newPath: newPath,
            })
                .POST();
        };
        /**
         * @param {?} singleFileName
         * @param {?} newPath
         * @return {?}
         */
        ServerFilesystemProviderService.prototype.Copy = function (singleFileName, newPath) {
            return this.makeAPIRequest('copy')
                .PatchBody({
                singleFileName: singleFileName,
                newPath: newPath,
            })
                .POST();
        };
        /**
         * @param {?} item
         * @param {?} newPath
         * @return {?}
         */
        ServerFilesystemProviderService.prototype.Move = function (item, newPath) {
            return this.makeAPIRequest('move')
                .PatchBody({
                items: [item],
                newPath: newPath,
            })
                .POST();
        };
        /**
         * @param {?} item
         * @param {?} newItemPath
         * @return {?}
         */
        ServerFilesystemProviderService.prototype.Rename = function (item, newItemPath) {
            return this.makeAPIRequest('rename')
                .PatchBody({
                item: item,
                newItemPath: newItemPath,
            })
                .POST();
        };
        /**
         * @param {?} item
         * @param {?} content
         * @return {?}
         */
        ServerFilesystemProviderService.prototype.Edit = function (item, content) {
            return this.makeAPIRequest('edit')
                .PatchBody({
                item: item,
                content: content,
            })
                .POST();
        };
        /**
         * @param {?} item
         * @return {?}
         */
        ServerFilesystemProviderService.prototype.Getcontent = function (item) {
            return this.makeAPIRequest('getContent')
                .PatchBody({
                item: item,
            })
                .POST();
        };
        /**
         * @param {?} item
         * @param {?} role
         * @param {?} entity
         * @param {?=} recursive
         * @return {?}
         */
        ServerFilesystemProviderService.prototype.SetPermissions = function (item, role, entity, recursive) {
            return this.makeAPIRequest('changePermissions')
                .PatchBody({
                items: [item],
                role: role,
                entity: entity,
                recursive: recursive,
            })
                .POST();
        };
        /**
         * @param {?} items
         * @param {?} newPath
         * @return {?}
         */
        ServerFilesystemProviderService.prototype.MoveMultiple = function (items, newPath) {
            return this.makeAPIRequest('move')
                .PatchBody({
                items: items,
                newPath: newPath,
            })
                .POST();
        };
        /**
         * @param {?} items
         * @param {?} newPath
         * @return {?}
         */
        ServerFilesystemProviderService.prototype.CopyMultiple = function (items, newPath) {
            return this.makeAPIRequest('copy')
                .PatchBody({
                items: items,
                newPath: newPath,
            })
                .POST();
        };
        /**
         * @param {?} items
         * @param {?} role
         * @param {?} entity
         * @param {?=} recursive
         * @return {?}
         */
        ServerFilesystemProviderService.prototype.SetPermissionsMultiple = function (items, role, entity, recursive) {
            return this.makeAPIRequest('changePermissions')
                .PatchBody({
                items: items,
                role: role,
                entity: entity,
                recursive: recursive,
            })
                .POST();
        };
        /**
         * @param {?} items
         * @param {?} permissionsObj
         * @param {?=} recursive
         * @return {?}
         */
        ServerFilesystemProviderService.prototype.SetPermissionsObjectMultiple = function (items, permissionsObj, recursive) {
            return this.makeAPIRequest('changePermissionsObject')
                .PatchBody({
                items: items,
                permissionsObj: permissionsObj,
                recursive: recursive,
            })
                .POST();
        };
        /**
         * @param {?} items
         * @return {?}
         */
        ServerFilesystemProviderService.prototype.Remove = function (items) {
            return this.makeAPIRequest('remove')
                .PatchBody({
                items: items,
            })
                .POST();
        };
        /**
         * @param {?} item
         * @return {?}
         */
        ServerFilesystemProviderService.prototype.GetSingle = function (item) {
            return this.makeAPIRequest('getSingle')
                .PatchBody({
                item: item,
            })
                .POST();
        };
        /**
         * @param {?} currentPath
         * @return {?}
         */
        ServerFilesystemProviderService.prototype.GetUploadApiUrl = function (currentPath) {
            var /** @type {?} */ uploadApiEndpoint = this.apiEndpoint +
                '/upload?' +
                'bucketname=' +
                this.bucketname +
                '&directoryPath=' +
                currentPath;
            return uploadApiEndpoint;
        };
        /**
         * @return {?}
         */
        ServerFilesystemProviderService.prototype.CloneProvider = function () {
            return new ServerFilesystemProviderService(this.http, this.logger);
        };
        /**
         * @param {?} file
         * @return {?}
         */
        ServerFilesystemProviderService.prototype.CreateDownloadLink = function (file) {
            return __awaiter(this, void 0, void 0, function () {
                var response, url, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.makeAPIRequest('getSingle')
                                    .PatchBody({
                                    item: file.fullPath,
                                })
                                    .POST()];
                        case 1:
                            response = _a.sent();
                            url = response.result.url;
                            return [2 /*return*/, url];
                        case 2:
                            error_1 = _a.sent();
                            throw new Error(error_1.message);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} item
         * @return {?}
         */
        ServerFilesystemProviderService.prototype.Upload = function (item) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, null];
                });
            });
        };
        return ServerFilesystemProviderService;
    }());
    ServerFilesystemProviderService.decorators = [
        { type: i0.Injectable }
    ];
    /** @nocollapse */
    ServerFilesystemProviderService.ctorParameters = function () { return [
        { type: http.HttpClient },
        { type: LoggerService }
    ]; };
    function ServerFilesystemProviderService_tsickle_Closure_declarations() {
        /** @type {?} */
        ServerFilesystemProviderService.prototype.bucketname;
        /** @type {?} */
        ServerFilesystemProviderService.prototype.apiEndpoint;
        /** @type {?} */
        ServerFilesystemProviderService.prototype.isAdmin;
        /** @type {?} */
        ServerFilesystemProviderService.prototype.LOG_ID;
        /** @type {?} */
        ServerFilesystemProviderService.prototype.http;
        /** @type {?} */
        ServerFilesystemProviderService.prototype.logger;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BaseDialogComponent = /** @class */ (function () {
        function BaseDialogComponent() {
        }
        return BaseDialogComponent;
    }());
    BaseDialogComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'base-dialog',
                    template: "\n    <div class=\"dialog-wrapper\">\n      <div class=\"header sans-serif flex-col align-center\">\n        <ng-container *ngTemplateOutlet=\"header\"> </ng-container>\n      </div>\n      <div class=\"body sans-serif flex-col align-center\">\n        <ng-container *ngTemplateOutlet=\"body\"> </ng-container>\n      </div>\n      <div class=\"actions sans-serif flex-col align-center\">\n        <ng-container *ngTemplateOutlet=\"actions\"> </ng-container>\n      </div>\n    </div>\n  ",
                    styles: ["\n      .dialog-wrapper {\n        max-height: 80vh;\n        min-width: 400px;\n      }\n      .header {\n      }\n      .body {\n        overflow-y: auto;\n        max-height: 60vh;\n      }\n      .actions {\n        max-height: 200px;\n      }\n    ", "h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
                }] }
    ];
    BaseDialogComponent.propDecorators = {
        header: [{ type: i0.Input }],
        body: [{ type: i0.Input }],
        actions: [{ type: i0.Input }]
    };
    function BaseDialogComponent_tsickle_Closure_declarations() {
        /** @type {?} */
        BaseDialogComponent.prototype.header;
        /** @type {?} */
        BaseDialogComponent.prototype.body;
        /** @type {?} */
        BaseDialogComponent.prototype.actions;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @record
     */
    function PermissionsDialogInterface() { }
    function PermissionsDialogInterface_tsickle_Closure_declarations() {
        /** @type {?} */
        PermissionsDialogInterface.prototype.files;
        /** @type {?} */
        PermissionsDialogInterface.prototype.config;
    }
    /**
     * @record
     */
    function PermissionsDialogResponseInterface() { }
    function PermissionsDialogResponseInterface_tsickle_Closure_declarations() {
        /** @type {?} */
        PermissionsDialogResponseInterface.prototype.role;
        /** @type {?} */
        PermissionsDialogResponseInterface.prototype.entity;
        /** @type {?} */
        PermissionsDialogResponseInterface.prototype.files;
    }
    var AppDialogPermissionsSetComponent = /** @class */ (function () {
        /**
         * @param {?} logger
         * @param {?} dialogRef
         * @param {?} data
         */
        function AppDialogPermissionsSetComponent(logger, dialogRef, data) {
            this.logger = logger;
            this.dialogRef = dialogRef;
            this.data = data;
            this.roleControl = new forms.FormControl('READER');
            this.roleOptions = ['OWNER', 'WRITER', 'READER'];
            this.entityTypeControl = new forms.FormControl('group');
            this.entityTypeOptions = ['user', 'group'];
            this.entityControl = new forms.FormControl();
            this.destroyed = new rxjs.Subject();
            this.items = data.files;
            var /** @type {?} */ config = data.config;
            this.$users = config.users;
            this.$groups = config.groups;
        }
        /**
         * @return {?}
         */
        AppDialogPermissionsSetComponent.prototype.ngOnDestroy = function () {
            this.destroyed.next();
        };
        Object.defineProperty(AppDialogPermissionsSetComponent.prototype, "EntityControlLabel", {
            /**
             * @return {?}
             */
            get: function () {
                return this.entityTypeControl.value === 'user' ? 'User' : 'Group';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppDialogPermissionsSetComponent.prototype, "HasSelectedUser", {
            /**
             * @return {?}
             */
            get: function () {
                return this.entityTypeControl.value === 'user';
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        AppDialogPermissionsSetComponent.prototype.onSubmit = function () {
            var /** @type {?} */ choosenValue = this.entityControl.value;
            var /** @type {?} */ entity = choosenValue.uid;
            var /** @type {?} */ response = {
                role: this.roleControl.value,
                entity: entity,
                files: this.data.files
            };
            this.logger.info('onSubmit', { entity: entity, choosenValue: choosenValue, response: response });
            this.dialogRef.close(response);
        };
        /**
         * @return {?}
         */
        AppDialogPermissionsSetComponent.prototype.onCancel = function () {
            this.dialogRef.close();
        };
        return AppDialogPermissionsSetComponent;
    }());
    AppDialogPermissionsSetComponent.decorators = [
        { type: i0.Component, args: [{
                    template: "\n    <base-dialog\n      [header]=\"headerTemplate\"\n      [body]=\"bodyTemplate\"\n      [actions]=\"actionsTemplate\"\n    >\n      <ng-template #headerTemplate>\n        <h2>Set Permissions</h2>\n      </ng-template>\n      <ng-template #bodyTemplate>\n        <h5>Selected Items</h5>\n        <ol>\n          <li *ngFor=\"let file of items\">\n            {{ file.name }}\n          </li>\n        </ol>\n\n        <mat-form-field class=\"full-width\">\n          <mat-select\n            matInput\n            [formControl]=\"entityTypeControl\"\n            placeholder=\"Type\"\n          >\n            <mat-option\n              *ngFor=\"let option of entityTypeOptions\"\n              [value]=\"option\"\n            >\n              {{ option }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"full-width\" *ngIf=\"HasSelectedUser\">\n          <mat-select\n            matInput\n            [formControl]=\"entityControl\"\n            [placeholder]=\"EntityControlLabel\"\n          >\n            <mat-option *ngFor=\"let entity of $users | async\" [value]=\"entity\">\n              {{ entity.name }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"full-width\" *ngIf=\"!HasSelectedUser\">\n          <mat-select\n            matInput\n            [formControl]=\"entityControl\"\n            [placeholder]=\"EntityControlLabel\"\n          >\n            <mat-option *ngFor=\"let entity of $groups | async\" [value]=\"entity\">\n              {{ entity.name }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"full-width\">\n          <mat-select\n            matInput\n            [formControl]=\"roleControl\"\n            placeholder=\"Permissions\"\n          >\n            <mat-option *ngFor=\"let option of roleOptions\" [value]=\"option\">\n              {{ option }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </ng-template>\n      <ng-template #actionsTemplate>\n        <btns-cancel-ok\n          okIcon=\"done\"\n          okLabel=\"Set Permissions\"\n          (clickedCancel)=\"onCancel()\"\n          (clickedOk)=\"onSubmit()\"\n        >\n        </btns-cancel-ok>\n      </ng-template>\n    </base-dialog>\n  ",
                    styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
                }] }
    ];
    /** @nocollapse */
    AppDialogPermissionsSetComponent.ctorParameters = function () { return [
        { type: LoggerService },
        { type: dialog.MatDialogRef },
        { type: undefined, decorators: [{ type: i0.Inject, args: [dialog.MAT_DIALOG_DATA,] }] }
    ]; };
    function AppDialogPermissionsSetComponent_tsickle_Closure_declarations() {
        /** @type {?} */
        AppDialogPermissionsSetComponent.prototype.items;
        /** @type {?} */
        AppDialogPermissionsSetComponent.prototype.roleControl;
        /** @type {?} */
        AppDialogPermissionsSetComponent.prototype.roleOptions;
        /** @type {?} */
        AppDialogPermissionsSetComponent.prototype.entityTypeControl;
        /** @type {?} */
        AppDialogPermissionsSetComponent.prototype.entityTypeOptions;
        /** @type {?} */
        AppDialogPermissionsSetComponent.prototype.entityControl;
        /** @type {?} */
        AppDialogPermissionsSetComponent.prototype.$users;
        /** @type {?} */
        AppDialogPermissionsSetComponent.prototype.$groups;
        /** @type {?} */
        AppDialogPermissionsSetComponent.prototype.destroyed;
        /** @type {?} */
        AppDialogPermissionsSetComponent.prototype.logger;
        /** @type {?} */
        AppDialogPermissionsSetComponent.prototype.dialogRef;
        /** @type {?} */
        AppDialogPermissionsSetComponent.prototype.data;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AppDialogMyDetailsComponent = /** @class */ (function () {
        /**
         * @param {?} dialogRef
         */
        function AppDialogMyDetailsComponent(dialogRef) {
            this.dialogRef = dialogRef;
        }
        /**
         * @return {?}
         */
        AppDialogMyDetailsComponent.prototype.onSubmit = function () {
            this.dialogRef.close();
        };
        /**
         * @return {?}
         */
        AppDialogMyDetailsComponent.prototype.onCancel = function () {
            this.dialogRef.close();
        };
        return AppDialogMyDetailsComponent;
    }());
    AppDialogMyDetailsComponent.decorators = [
        { type: i0.Component, args: [{
                    template: "\n    <base-dialog\n      [header]=\"headerTemplate\"\n      [body]=\"bodyTemplate\"\n      [actions]=\"actionsTemplate\"\n    >\n      <ng-template #headerTemplate>\n        <h2>My Details</h2>\n      </ng-template>\n      <ng-template #bodyTemplate>\n        <div>\n          The following details were\n        </div>\n      </ng-template>\n      <ng-template #actionsTemplate>\n        <btns-cancel-ok\n          okIcon=\"done\"\n          okLabel=\"Create Folder\"\n          (clickedCancel)=\"onCancel()\"\n          (clickedOk)=\"onSubmit()\"\n        >\n        </btns-cancel-ok>\n      </ng-template>\n    </base-dialog>\n  ",
                    styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
                }] }
    ];
    /** @nocollapse */
    AppDialogMyDetailsComponent.ctorParameters = function () { return [
        { type: dialog.MatDialogRef }
    ]; };
    function AppDialogMyDetailsComponent_tsickle_Closure_declarations() {
        /** @type {?} */
        AppDialogMyDetailsComponent.prototype.dialogRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AppBtnsCancelOkComponent = /** @class */ (function () {
        function AppBtnsCancelOkComponent() {
            this.clickedOk = new i0.EventEmitter();
            this.clickedCancel = new i0.EventEmitter();
        }
        return AppBtnsCancelOkComponent;
    }());
    AppBtnsCancelOkComponent.decorators = [
        { type: i0.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'btns-cancel-ok',
                    template: "\n    <div class=\"full-width text-center\">\n      <button mat-raised-button (click)=\"clickedCancel.emit()\">\n        <mat-icon>clear</mat-icon>\n        Cancel\n      </button>\n      <button\n        mat-raised-button\n        color=\"primary\"\n        (click)=\"clickedOk.emit()\"\n        [disabled]=\"okDisabled\"\n      >\n        <mat-icon>{{ okIcon }}</mat-icon>\n        {{ okLabel }}\n      </button>\n    </div>\n  ",
                    styles: ["\n      button {\n        margin: 5px;\n      }\n    "]
                }] }
    ];
    AppBtnsCancelOkComponent.propDecorators = {
        okDisabled: [{ type: i0.Input }],
        okIcon: [{ type: i0.Input }],
        okLabel: [{ type: i0.Input }],
        clickedOk: [{ type: i0.Output }],
        clickedCancel: [{ type: i0.Output }]
    };
    function AppBtnsCancelOkComponent_tsickle_Closure_declarations() {
        /** @type {?} */
        AppBtnsCancelOkComponent.prototype.okDisabled;
        /** @type {?} */
        AppBtnsCancelOkComponent.prototype.okIcon;
        /** @type {?} */
        AppBtnsCancelOkComponent.prototype.okLabel;
        /** @type {?} */
        AppBtnsCancelOkComponent.prototype.clickedOk;
        /** @type {?} */
        AppBtnsCancelOkComponent.prototype.clickedCancel;
    }

    var AppFileTableMiniFolderBrowserComponent = /** @class */ (function () {
        /**
         * @param {?} logger
         */
        function AppFileTableMiniFolderBrowserComponent(logger) {
            this.logger = logger;
            this.selectedItem = new collections.SelectionModel(false);
            this.enterDirectory = new i0.EventEmitter();
            this.selectedDirectory = new i0.EventEmitter();
            this.destroyed = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        AppFileTableMiniFolderBrowserComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    this.selectedItem.changed.pipe(operators.takeUntil(this.destroyed)).subscribe(function () {
                        var /** @type {?} */ selectedDir = _this.selectedItem.selected[0];
                        _this.selectedDirectory.emit(selectedDir);
                    });
                    return [2 /*return*/];
                });
            });
        };
        /**
         * @return {?}
         */
        AppFileTableMiniFolderBrowserComponent.prototype.ngOnDestroy = function () {
            this.destroyed.next();
        };
        /**
         * @param {?} folderPath
         * @return {?}
         */
        AppFileTableMiniFolderBrowserComponent.prototype.onEnterFolder = function (folderPath) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.logger.info('onEnterFolder', { folderPath: folderPath });
                    this.enterDirectory.emit(folderPath);
                    this.selectedDirectory.emit(folderPath);
                    return [2 /*return*/];
                });
            });
        };
        return AppFileTableMiniFolderBrowserComponent;
    }());
    AppFileTableMiniFolderBrowserComponent.decorators = [
        { type: i0.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'app-file-table-mini-folder-browser',
                    template: "\n    <div class=\"full-width mini-browser-height\">\n      <actions-mini-browser [mainActions]=\"mainActions\"> </actions-mini-browser>\n      <h4 class=\"p5 m0 color-grey\">Folders</h4>\n      <div class=\"flex-col bg-white\">\n        <card-folder\n          *ngFor=\"let folder of folders\"\n          [folder]=\"folder\"\n          [selectedItem]=\"selectedItem\"\n          (enterFolder)=\"onEnterFolder($event)\"\n        >\n        </card-folder>\n      </div>\n    </div>\n  ",
                    providers: [
                        ActionHandlersService,
                        ClientFileSystemService,
                        OptimisticFilesystemService
                    ],
                    styles: ["\n      .mini-browser-height {\n        min-height: 400px;\n        max-height: 80vh;\n      }\n      .bg-white {\n        background-color: #fff;\n      }\n    ", "h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
                }] }
    ];
    /** @nocollapse */
    AppFileTableMiniFolderBrowserComponent.ctorParameters = function () { return [
        { type: LoggerService }
    ]; };
    AppFileTableMiniFolderBrowserComponent.propDecorators = {
        folders: [{ type: i0.Input }],
        mainActions: [{ type: i0.Input }],
        enterDirectory: [{ type: i0.Output }],
        selectedDirectory: [{ type: i0.Output }]
    };
    function AppFileTableMiniFolderBrowserComponent_tsickle_Closure_declarations() {
        /** @type {?} */
        AppFileTableMiniFolderBrowserComponent.prototype.selectedItem;
        /** @type {?} */
        AppFileTableMiniFolderBrowserComponent.prototype.folders;
        /** @type {?} */
        AppFileTableMiniFolderBrowserComponent.prototype.mainActions;
        /** @type {?} */
        AppFileTableMiniFolderBrowserComponent.prototype.enterDirectory;
        /** @type {?} */
        AppFileTableMiniFolderBrowserComponent.prototype.selectedDirectory;
        /** @type {?} */
        AppFileTableMiniFolderBrowserComponent.prototype.destroyed;
        /** @type {?} */
        AppFileTableMiniFolderBrowserComponent.prototype.logger;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AppActionsMiniBrowserComponent = /** @class */ (function () {
        function AppActionsMiniBrowserComponent() {
        }
        return AppActionsMiniBrowserComponent;
    }());
    AppActionsMiniBrowserComponent.decorators = [
        { type: i0.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'actions-mini-browser',
                    template: "\n    <mat-toolbar color=\"primary\" *ngIf=\"this.mainActions\">\n      <mat-toolbar-row class=\"top-toolbar\">\n        <span class=\"top-toolbar-label\">\n          Actions\n        </span>\n      </mat-toolbar-row>\n      <mat-toolbar-row class=\"action-toolbar scroll-x\">\n        <div *ngFor=\"let action of mainActions\">\n          <button\n            class=\"action has-pointer\"\n            mat-raised-button\n            [color]=\"action.color\"\n            (click)=\"action.onClick(action)\"\n            [disabled]=\"action.$disabled | async\"\n          >\n            <mat-icon inline=\"true\">{{ action.icon }}</mat-icon>\n            {{ action.label }}\n          </button>\n        </div>\n      </mat-toolbar-row>\n    </mat-toolbar>\n  ",
                    styles: ["\n      button.action {\n        margin-right: 10px;\n      }\n    ", "h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}"]
                }] }
    ];
    AppActionsMiniBrowserComponent.propDecorators = {
        mainActions: [{ type: i0.Input }]
    };
    function AppActionsMiniBrowserComponent_tsickle_Closure_declarations() {
        /** @type {?} */
        AppActionsMiniBrowserComponent.prototype.mainActions;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FileSizePipe = /** @class */ (function () {
        function FileSizePipe() {
            this.units = [
                'bytes',
                'KB',
                'MB',
                'GB',
                'TB',
                'PB'
            ];
        }
        /**
         * @param {?} bytesInput
         * @param {?=} precision
         * @return {?}
         */
        FileSizePipe.prototype.transform = function (bytesInput, precision) {
            if (precision === void 0) { precision = 0; }
            var /** @type {?} */ bytes = +bytesInput;
            if (!isFinite(bytes)) {
                return '?';
            }
            var /** @type {?} */ unit = 0;
            while (bytes >= 1024) {
                bytes /= 1024;
                unit++;
            }
            return bytes.toFixed(+precision) + ' ' + this.units[unit];
        };
        return FileSizePipe;
    }());
    FileSizePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'fileSize' },] }
    ];
    function FileSizePipe_tsickle_Closure_declarations() {
        /** @type {?} */
        FileSizePipe.prototype.units;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FileSizeModule = /** @class */ (function () {
        function FileSizeModule() {
        }
        return FileSizeModule;
    }());
    FileSizeModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule],
                    exports: [FileSizePipe],
                    declarations: [FileSizePipe],
                    providers: [],
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CardFileComponent = /** @class */ (function () {
        function CardFileComponent() {
        }
        Object.defineProperty(CardFileComponent.prototype, "isChecked", {
            /**
             * @return {?}
             */
            get: function () {
                return this.checkedItems.isSelected(this.file.fullPath);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CardFileComponent.prototype, "isSelected", {
            /**
             * @return {?}
             */
            get: function () {
                return this.selectedItem.isSelected(this.file.fullPath);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        CardFileComponent.prototype.onSelect = function () {
            this.selectedItem.select(this.file.fullPath);
        };
        /**
         * @return {?}
         */
        CardFileComponent.prototype.onCheck = function () {
            this.checkedItems.select(this.file.fullPath);
        };
        /**
         * @return {?}
         */
        CardFileComponent.prototype.onUnCheck = function () {
            this.checkedItems.deselect(this.file.fullPath);
        };
        return CardFileComponent;
    }());
    CardFileComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'card-file',
                    template: "\n    <div\n      class=\"flex-row p5 space-between bg-grey-hover rounded\"\n      matTooltip=\"Click For Details\"\n      [class.bg-grey-light]=\"isChecked\"\n      [class.bg-grey-dark]=\"isSelected\"\n      (click)=\"onSelect()\"\n    >\n      <div class=\"flex-row align-center\">\n        <mat-icon\n          *ngIf=\"!isChecked\"\n          class=\"color-white color-grey-hover\"\n          (click)=\"onCheck()\"\n          >check_box_outline_blank</mat-icon\n        >\n        <mat-icon\n          *ngIf=\"isChecked\"\n          class=\"color-black color-grey-hover\"\n          (click)=\"onUnCheck()\"\n          >check_box_outline</mat-icon\n        >\n        <img class=\"mr-10\" width=\"30\" [src]=\"file['icon']\" />\n        <div>\n          <h5 class=\"m0 mb-5 has-ellipsis\">{{ file.name }}</h5>\n          <small class=\"m0 color-grey\">{{ file.size | fileSize }}</small>\n        </div>\n      </div>\n      <div class=\"flex-row align-center\">\n        <button\n          mat-icon-button\n          [matMenuTriggerFor]=\"menu\"\n          aria-label=\"Example icon-button with a menu\"\n        >\n          <mat-icon>more_vert</mat-icon>\n        </button>\n      </div>\n    </div>\n    <mat-menu #menu=\"matMenu\">\n      <button\n        mat-menu-item\n        *ngFor=\"let action of actions\"\n        (click)=\"action.onClick(file)\"\n      >\n        <mat-icon [color]=\"action.color\">{{ action.icon }}</mat-icon>\n        <span>{{ action.label }}</span>\n      </button>\n    </mat-menu>\n  ",
                    styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}", ""]
                }] }
    ];
    CardFileComponent.propDecorators = {
        file: [{ type: i0.Input }],
        actions: [{ type: i0.Input }],
        checkedItems: [{ type: i0.Input }],
        selectedItem: [{ type: i0.Input }]
    };
    function CardFileComponent_tsickle_Closure_declarations() {
        /** @type {?} */
        CardFileComponent.prototype.file;
        /** @type {?} */
        CardFileComponent.prototype.actions;
        /** @type {?} */
        CardFileComponent.prototype.checkedItems;
        /** @type {?} */
        CardFileComponent.prototype.selectedItem;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CardFolderComponent = /** @class */ (function () {
        function CardFolderComponent() {
            this.enterFolder = new i0.EventEmitter();
        }
        Object.defineProperty(CardFolderComponent.prototype, "isChecked", {
            /**
             * @return {?}
             */
            get: function () {
                if (!this.checkedItems) {
                    return;
                }
                return this.checkedItems.isSelected(this.folder.fullPath);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CardFolderComponent.prototype, "isSelected", {
            /**
             * @return {?}
             */
            get: function () {
                return this.selectedItem.isSelected(this.folder.fullPath);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        CardFolderComponent.prototype.onSelect = function () {
            this.selectedItem.select(this.folder.fullPath);
        };
        /**
         * @return {?}
         */
        CardFolderComponent.prototype.onCheck = function () {
            this.checkedItems.select(this.folder.fullPath);
        };
        /**
         * @return {?}
         */
        CardFolderComponent.prototype.onUnCheck = function () {
            this.checkedItems.deselect(this.folder.fullPath);
        };
        /**
         * @return {?}
         */
        CardFolderComponent.prototype.onDoubleClick = function () {
            console.log('onDoubleClick!');
            this.enterFolder.emit(this.folder.fullPath);
        };
        /**
         * @param {?} folder
         * @return {?}
         */
        CardFolderComponent.prototype.getFolderSize = function (folder) {
            if (folder.metaData) {
                var /** @type {?} */ path = this.config.folderSizePath;
                return path.split('.').reduce(function (p, prop) { return p[prop]; }, folder);
            }
            return folder.size;
        };
        return CardFolderComponent;
    }());
    CardFolderComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'card-folder',
                    template: "\n    <div\n      class=\"flex-row p5 space-between bg-grey-hover rounded\"\n      matTooltip=\"Click For Details\"\n      [class.bg-grey-light]=\"isChecked\"\n      [class.bg-grey-dark]=\"isSelected\"\n      (click)=\"onSelect()\"\n      (dblclick)=\"onDoubleClick()\"\n    >\n      <div class=\"flex-row align-center\">\n        <div *ngIf=\"checkedItems\">\n          <mat-icon\n            *ngIf=\"!isChecked\"\n            class=\"has-pointer color-white color-grey-hover\"\n            (click)=\"onCheck()\"\n            >check_box_outline_blank</mat-icon\n          >\n          <mat-icon\n            *ngIf=\"isChecked\"\n            class=\"has-pointer color-black color-grey-hover\"\n            (click)=\"onUnCheck()\"\n            >check_box_outline</mat-icon\n          >\n        </div>\n        <img class=\"mr-10\" width=\"30\" [src]=\"folder['icon']\" />\n        <div>\n          <h5 class=\"m0 mb-5 has-ellipsis\">{{ folder.name }}</h5>\n          <small *ngIf=\"config && config.folderSizePath\" class=\"m0 color-grey\">{{ getFolderSize(folder) | fileSize }}</small>\n        </div>\n      </div>\n      <button\n        *ngIf=\"actions\"\n        mat-icon-button\n        [matMenuTriggerFor]=\"menu\"\n        aria-label=\"Example icon-button with a menu\"\n      >\n        <mat-icon>more_vert</mat-icon>\n      </button>\n    </div>\n    <mat-menu #menu=\"matMenu\">\n      <button\n        mat-menu-item\n        *ngFor=\"let action of actions\"\n        (click)=\"action.onClick(folder)\"\n      >\n        <mat-icon [color]=\"action.color\">{{ action.icon }}</mat-icon>\n        <span>{{ action.label }}</span>\n      </button>\n    </mat-menu>\n  ",
                    styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}", ""]
                }] }
    ];
    CardFolderComponent.propDecorators = {
        folder: [{ type: i0.Input }],
        actions: [{ type: i0.Input }],
        checkedItems: [{ type: i0.Input }],
        selectedItem: [{ type: i0.Input }],
        config: [{ type: i0.Input }],
        enterFolder: [{ type: i0.Output }]
    };
    function CardFolderComponent_tsickle_Closure_declarations() {
        /** @type {?} */
        CardFolderComponent.prototype.folder;
        /** @type {?} */
        CardFolderComponent.prototype.actions;
        /** @type {?} */
        CardFolderComponent.prototype.checkedItems;
        /** @type {?} */
        CardFolderComponent.prototype.selectedItem;
        /** @type {?} */
        CardFolderComponent.prototype.config;
        /** @type {?} */
        CardFolderComponent.prototype.enterFolder;
    }

    var AppFileTableComponent = /** @class */ (function () {
        function AppFileTableComponent() {
            this.checkedItems = new collections.SelectionModel(true);
            this.selectedItem = new collections.SelectionModel(false);
            this.clearSelected = new rxjs.Subject();
            this.checkedChanged = new i0.EventEmitter();
            this.selectedChanged = new i0.EventEmitter();
            this.enterFolder = new i0.EventEmitter();
            this.destroyed = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        AppFileTableComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.$triggerClearSelected
                .pipe(operators.takeUntil(this.destroyed))
                .subscribe(function () { return _this.checkedItems.clear(); });
            this.checkedItems.changed.pipe(operators.takeUntil(this.destroyed)).subscribe(function () {
                var /** @type {?} */ folders = _this.folders.filter(function (f) { return _this.checkedItems.selected.includes(f.fullPath); });
                var /** @type {?} */ files = _this.files.filter(function (f) { return _this.checkedItems.selected.includes(f.fullPath); });
                var /** @type {?} */ checkedFiles = __spread(folders, files);
                _this.checkedChanged.emit(checkedFiles);
            });
            this.selectedItem.changed.pipe(operators.takeUntil(this.destroyed)).subscribe(function () {
                var _a = __read(_this.selectedItem.selected, 1), selectedFilePath = _a[0];
                _this.selectedChanged.emit(selectedFilePath);
            });
        };
        /**
         * @return {?}
         */
        AppFileTableComponent.prototype.ngOnDestroy = function () {
            this.destroyed.next();
        };
        Object.defineProperty(AppFileTableComponent.prototype, "areAllFoldersChecked", {
            /**
             * @return {?}
             */
            get: function () {
                var /** @type {?} */ currentSelection = this.checkedItems.selected;
                var /** @type {?} */ hasAllFoldersSelected = this.folders.every(function (f) { return currentSelection.includes(f.fullPath); });
                return hasAllFoldersSelected;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppFileTableComponent.prototype, "areAllFilesChecked", {
            /**
             * @return {?}
             */
            get: function () {
                var /** @type {?} */ currentSelection = this.checkedItems.selected;
                var /** @type {?} */ hasAllFilesSelected = this.files.every(function (f) { return currentSelection.includes(f.fullPath); });
                return hasAllFilesSelected;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        AppFileTableComponent.prototype.onCheckAllFolders = function () {
            var _a;
            (_a = this.checkedItems).select.apply(_a, __spread(this.folders.map(function (f) { return f.fullPath; })));
        };
        /**
         * @return {?}
         */
        AppFileTableComponent.prototype.onUnCheckAllFolders = function () {
            var _a;
            (_a = this.checkedItems).deselect.apply(_a, __spread(this.folders.map(function (f) { return f.fullPath; })));
        };
        /**
         * @return {?}
         */
        AppFileTableComponent.prototype.onCheckAllFiles = function () {
            var _a;
            (_a = this.checkedItems).select.apply(_a, __spread(this.files.map(function (f) { return f.fullPath; })));
        };
        /**
         * @return {?}
         */
        AppFileTableComponent.prototype.onUnCheckAllFiles = function () {
            var _a;
            (_a = this.checkedItems).deselect.apply(_a, __spread(this.files.map(function (f) { return f.fullPath; })));
        };
        return AppFileTableComponent;
    }());
    AppFileTableComponent.decorators = [
        { type: i0.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'app-file-table',
                    template: "\n    <div class=\"files-viewer full-width\">\n      <div *ngIf=\"folders?.length\" class=\"flex-row align-center\">\n        <mat-icon\n          *ngIf=\"!areAllFoldersChecked\"\n          class=\"has-pointer color-white color-grey-hover\"\n          (click)=\"onCheckAllFolders()\"\n          >check_box_outline_blank</mat-icon\n        >\n        <mat-icon\n          *ngIf=\"areAllFoldersChecked\"\n          class=\"has-pointer color-black color-grey-hover\"\n          (click)=\"onUnCheckAllFolders()\"\n          >check_box_outline</mat-icon\n        >\n        <h4 class=\"p5 m0 color-grey\">Folders</h4>\n      </div>\n      <div class=\"flex-col\">\n        <card-folder\n          *ngFor=\"let folder of folders\"\n          [folder]=\"folder\"\n          [config]=\"config\"\n          [checkedItems]=\"checkedItems\"\n          [selectedItem]=\"selectedItem\"\n          [actions]=\"folderActions\"\n          (enterFolder)=\"enterFolder.emit($event)\"\n        >\n        </card-folder>\n      </div>\n      <div *ngIf=\"files?.length\" class=\"flex-row align-center\">\n        <mat-icon\n          *ngIf=\"!areAllFilesChecked\"\n          class=\"has-pointer color-white color-grey-hover\"\n          (click)=\"onCheckAllFiles()\"\n          >check_box_outline_blank</mat-icon\n        >\n        <mat-icon\n          *ngIf=\"areAllFilesChecked\"\n          class=\"has-pointer color-black color-grey-hover\"\n          (click)=\"onUnCheckAllFiles()\"\n          >check_box_outline</mat-icon\n        >\n        <h4 class=\"p5 m0 color-grey\">Files</h4>\n      </div>\n      <div class=\"flex-col\">\n        <card-file\n          *ngFor=\"let file of files\"\n          [file]=\"file\"\n          [checkedItems]=\"checkedItems\"\n          [selectedItem]=\"selectedItem\"\n          [actions]=\"fileActions\"\n        >\n        </card-file>\n      </div>\n      <div class=\"nothing-here\" *ngIf=\"!files?.length && !folders.length\">\n        <p>\n          No folders/files here\n        </p>\n      </div>\n    </div>\n  ",
                    styles: ["h1,h2,h3,h4,h5,h6,i,mat-chip,p,small,span{font-family:sans-serif}.is-red{background:red}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.align-center{align-items:center}.align-top{align-items:start}.align-bottom{align-items:end}.fit-content{width:-moz-fit-content;width:fit-content}.sans-serif{font-family:sans-serif}.has-pointer{cursor:pointer}.has-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.scroll-x{overflow-x:auto}.full-width{width:100%}.text-center{text-align:center}.space-between{justify-content:space-between}.break-word{overflow-wrap:break-word;word-break:break-all}.capitalize{text-transform:capitalize}.p5{padding:5px}.m0{margin:0}.mb-10{margin-bottom:10px}.mr-10{margin-right:10px}.m-10{margin:10px}.color-grey{color:#8c8c8c}.rounded{border-radius:5px}.bg-grey-light{background-color:rgba(95,95,95,.2)}.bg-grey-dark{background-color:rgba(50,50,50,.39)}.bg-grey-hover{transition:background-color .5s}.bg-grey-hover:hover{background-color:rgba(95,95,95,.336)}.color-white{color:#fff}.color-grey-hover{transition:color .5s}.color-grey-hover:hover{color:#444}.color-black{color:#000}.action-toolbar{height:55px}.top-toolbar-label{font-size:.8em;margin:0}.top-toolbar{height:20px;padding-top:3px}", "\n      .nothing-here {\n        padding: 20px;\n        padding-bottom: 100px;\n        font-size: 1.2em;\n        color: #777;\n      }\n      .files-viewer {\n        min-height: 500px;\n      }\n    "]
                }] }
    ];
    AppFileTableComponent.propDecorators = {
        $triggerClearSelected: [{ type: i0.Input }],
        fileActions: [{ type: i0.Input }],
        folderActions: [{ type: i0.Input }],
        files: [{ type: i0.Input }],
        folders: [{ type: i0.Input }],
        config: [{ type: i0.Input }],
        checkedChanged: [{ type: i0.Output }],
        selectedChanged: [{ type: i0.Output }],
        enterFolder: [{ type: i0.Output }]
    };
    function AppFileTableComponent_tsickle_Closure_declarations() {
        /** @type {?} */
        AppFileTableComponent.prototype.checkedItems;
        /** @type {?} */
        AppFileTableComponent.prototype.selectedItem;
        /** @type {?} */
        AppFileTableComponent.prototype.clearSelected;
        /** @type {?} */
        AppFileTableComponent.prototype.$triggerClearSelected;
        /** @type {?} */
        AppFileTableComponent.prototype.fileActions;
        /** @type {?} */
        AppFileTableComponent.prototype.folderActions;
        /** @type {?} */
        AppFileTableComponent.prototype.files;
        /** @type {?} */
        AppFileTableComponent.prototype.folders;
        /** @type {?} */
        AppFileTableComponent.prototype.config;
        /** @type {?} */
        AppFileTableComponent.prototype.checkedChanged;
        /** @type {?} */
        AppFileTableComponent.prototype.selectedChanged;
        /** @type {?} */
        AppFileTableComponent.prototype.enterFolder;
        /** @type {?} */
        AppFileTableComponent.prototype.destroyed;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AppFileTableModule = /** @class */ (function () {
        function AppFileTableModule() {
        }
        return AppFileTableModule;
    }());
    AppFileTableModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        FileSizeModule,
                        menu.MatMenuModule,
                        icon.MatIconModule,
                        button.MatButtonModule,
                        tooltip.MatTooltipModule
                    ],
                    exports: [AppFileTableComponent, CardFolderComponent],
                    declarations: [CardFileComponent, CardFolderComponent, AppFileTableComponent],
                    providers: []
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FileTableMiniModule = /** @class */ (function () {
        function FileTableMiniModule() {
        }
        return FileTableMiniModule;
    }());
    FileTableMiniModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        FileSizeModule,
                        button.MatButtonModule,
                        icon.MatIconModule,
                        AppFileTableModule,
                        toolbar.MatToolbarModule
                    ],
                    exports: [AppFileTableMiniFolderBrowserComponent],
                    declarations: [
                        AppFileTableMiniFolderBrowserComponent,
                        AppActionsMiniBrowserComponent
                    ],
                    providers: []
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @record
     */
    function Tag() { }
    function Tag_tsickle_Closure_declarations() {
        /** @type {?} */
        Tag.prototype.id;
        /** @type {?} */
        Tag.prototype.name;
        /** @type {?|undefined} */
        Tag.prototype.isDisabled;
    }
    var AppControlTagMultipleComponent = /** @class */ (function () {
        function AppControlTagMultipleComponent() {
            // Tag defaults
            this.visible = true;
            this.selectable = true;
            this.addOnBlur = true;
            this.separatorKeysCodes = [keycodes.ENTER, keycodes.COMMA];
            this.removableTags = true;
            this.allowCustom = true;
            this.selectChoices$ = new rxjs.Observable();
        }
        /**
         * @param {?} val
         * @param {?} name
         * @return {?}
         */
        AppControlTagMultipleComponent.prototype.checkExists = function (val, name) {
            if (val == null) {
                throw new Error(name + ' has not been defined');
            }
        };
        /**
         * @return {?}
         */
        AppControlTagMultipleComponent.prototype.hasRed = function () {
            var /** @type {?} */ isDirty = this.control.dirty;
            var /** @type {?} */ notValid = this.control.invalid;
            return isDirty && notValid;
        };
        /**
         * @return {?}
         */
        AppControlTagMultipleComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.checkExists(this.control, 'this.group');
            this.checkExists(this.selectChoices$, 'this.selectChoices');
            this.selectInitial = this.control.value;
            this.autoCompleteObscureName = uuid.v4();
            this.selectChoices$ = this.selectChoices$.pipe(operators.take(1));
            this.controlAutocomplete = new forms.FormControl([], forms.Validators.minLength(1));
            // When selectChoices resolves (once)
            this.selectChoices$.subscribe(function (selectChoicesArr) {
                // set the tags filtering pipe
                _this.filteredTags = _this.controlAutocomplete.valueChanges.pipe(operators.startWith(null), operators.map(function (keyboardInput) {
                    console.log({ keyboardInput: keyboardInput }, { selectChoicesArr: selectChoicesArr });
                    // Filter based on the input value
                    if (!keyboardInput) {
                        return selectChoicesArr;
                    }
                    return selectChoicesArr.filter(function (tag) {
                        if (!tag) {
                            return false;
                        }
                        var /** @type {?} */ val = tag.name + '';
                        if (!val.includes(keyboardInput)) {
                            return false;
                        }
                        return true;
                    });
                }));
            });
            // Add the initial values if they're passed in
            this.controlAutocomplete.setValue(this.selectInitial);
            this.control.markAsUntouched();
        };
        /**
         * @return {?}
         */
        AppControlTagMultipleComponent.prototype.ngOnDestroy = function () { };
        /**
         * @param {?} event
         * @return {?}
         */
        AppControlTagMultipleComponent.prototype.add = function (event) {
            if (!this.allowCustom) {
                return;
            }
            if (!this.matAutocomplete.isOpen) {
                var /** @type {?} */ input = event.input;
                var /** @type {?} */ value = event.value;
                // Add our Tag
                if ((value || '').trim()) {
                    var /** @type {?} */ newTagId = uuid.v4();
                    var /** @type {?} */ val = value.trim();
                    var /** @type {?} */ newTag = {
                        id: newTagId,
                        name: val,
                    };
                    this.control.value.push(newTag);
                }
                // Reset the input value
                if (input) {
                    input.value = '';
                }
                this.updateFormValue();
            }
        };
        /**
         * @param {?} removeTag
         * @return {?}
         */
        AppControlTagMultipleComponent.prototype.removeTag = function (removeTag) {
            var /** @type {?} */ index = this.control.value.findIndex(function (t) { return t.id === removeTag.id; });
            if (index >= 0) {
                this.control.value.splice(index, 1);
            }
            this.updateFormValue();
        };
        /**
         * @param {?} event
         * @return {?}
         */
        AppControlTagMultipleComponent.prototype.selectedTag = function (event) {
            console.log(event);
            var /** @type {?} */ newVal = event.option.value;
            var /** @type {?} */ canPush = true;
            this.control.value.forEach(function (item) {
                canPush = item.id !== newVal.id && canPush;
            });
            if (canPush)
                this.control.value.push(newVal);
            this.tagInput.nativeElement.value = '';
            this.tagInput.nativeElement.blur();
            this.updateFormValue();
        };
        /**
         * @return {?}
         */
        AppControlTagMultipleComponent.prototype.updateFormValue = function () {
            this.controlAutocomplete.reset();
            this.control.setValue(this.control.value); // Required to trigger value changes
            this.control.markAsDirty();
        };
        /**
         * @param {?} tag
         * @return {?}
         */
        AppControlTagMultipleComponent.prototype.getLowerCase = function (tag) {
            if (!tag || !tag.name) {
                return null;
            }
            var /** @type {?} */ val = tag.name + '';
            return val.toLowerCase();
        };
        return AppControlTagMultipleComponent;
    }());
    AppControlTagMultipleComponent.decorators = [
        { type: i0.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'app-control-tag-multiple',
                    template: "\n    <mat-form-field class=\"full-width\" [class.formInvalid]=\"hasRed()\">\n      <mat-chip-list #chipList [disabled]=\"!removableTags\" [multiple]=\"true\">\n        <mat-chip\n          *ngFor=\"let tag of selectInitial\"\n          [selectable]=\"selectable\"\n          [removable]=\"removableTags\"\n          (removed)=\"removeTag(tag)\"\n        >\n          {{ getLowerCase(tag) }}\n          <mat-icon matChipRemove *ngIf=\"removableTags\">cancel</mat-icon>\n        </mat-chip>\n        <input\n          #tagInput\n          [placeholder]=\"placeholder\"\n          [formControl]=\"controlAutocomplete\"\n          [matAutocomplete]=\"auto\"\n          [matChipInputFor]=\"chipList\"\n          [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n          [matChipInputAddOnBlur]=\"addOnBlur\"\n          (matChipInputTokenEnd)=\"add($event)\"\n          [name]=\"autoCompleteObscureName\"\n        />\n      </mat-chip-list>\n      <mat-icon\n        matTooltip=\"Add many tags here, you can manage all your tags using the tag list editor in the settings menu\"\n        class=\"tag-icon\"\n        matSuffix\n        matBadge=\"\u221E\"\n        >local_offer</mat-icon\n      >\n      <mat-autocomplete\n        #auto=\"matAutocomplete\"\n        (optionSelected)=\"selectedTag($event)\"\n      >\n        <mat-option\n          *ngFor=\"let tag of filteredTags | async\"\n          [value]=\"tag\"\n          [disabled]=\"tag['isDisabled']\"\n        >\n          {{ tag.name }}\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n  ",
                    styles: ["\n      .full-width {\n        width: 100%;\n      }\n      .tag-icon {\n        color: grey;\n        right: 15px;\n      }\n      .formInvalid {\n        background-color: #ff4f4f30 !important;\n      }\n      .mat-badge-active {\n        font-size: 18px;\n      }\n      mat-icon span {\n        background-color: transparent;\n        right: 1px !important;\n        top: 1px !important;\n        color: white;\n      }\n    "]
                }] }
    ];
    AppControlTagMultipleComponent.propDecorators = {
        tagInput: [{ type: i0.ViewChild, args: ['tagInput', { static: false },] }],
        matAutocomplete: [{ type: i0.ViewChild, args: ['auto', { static: false },] }],
        placeholder: [{ type: i0.Input }],
        displayLowerCase: [{ type: i0.Input }],
        control: [{ type: i0.Input }],
        removableTags: [{ type: i0.Input }],
        allowCustom: [{ type: i0.Input }],
        selectChoices$: [{ type: i0.Input }]
    };
    function AppControlTagMultipleComponent_tsickle_Closure_declarations() {
        /** @type {?} */
        AppControlTagMultipleComponent.prototype.controlAutocomplete;
        /** @type {?} */
        AppControlTagMultipleComponent.prototype.visible;
        /** @type {?} */
        AppControlTagMultipleComponent.prototype.selectable;
        /** @type {?} */
        AppControlTagMultipleComponent.prototype.addOnBlur;
        /** @type {?} */
        AppControlTagMultipleComponent.prototype.separatorKeysCodes;
        /** @type {?} */
        AppControlTagMultipleComponent.prototype.filteredTags;
        /** @type {?} */
        AppControlTagMultipleComponent.prototype.tagInput;
        /** @type {?} */
        AppControlTagMultipleComponent.prototype.matAutocomplete;
        /** @type {?} */
        AppControlTagMultipleComponent.prototype.selectInitial;
        /** @type {?} */
        AppControlTagMultipleComponent.prototype.placeholder;
        /** @type {?} */
        AppControlTagMultipleComponent.prototype.displayLowerCase;
        /** @type {?} */
        AppControlTagMultipleComponent.prototype.control;
        /** @type {?} */
        AppControlTagMultipleComponent.prototype.removableTags;
        /** @type {?} */
        AppControlTagMultipleComponent.prototype.allowCustom;
        /** @type {?} */
        AppControlTagMultipleComponent.prototype.selectChoices$;
        /** @type {?} */
        AppControlTagMultipleComponent.prototype.autoCompleteObscureName;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TagsControlModule = /** @class */ (function () {
        function TagsControlModule() {
        }
        return TagsControlModule;
    }());
    TagsControlModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        forms.ReactiveFormsModule,
                        forms.FormsModule,
                        chips.MatChipsModule,
                        autocomplete.MatAutocompleteModule,
                        icon.MatIconModule,
                        input.MatInputModule,
                        formField.MatFormFieldModule
                    ],
                    exports: [AppControlTagMultipleComponent],
                    declarations: [AppControlTagMultipleComponent],
                    providers: []
                },] }
    ];

    var /** @type {?} */ entryComponents = [
        BaseDialogComponent,
        AppDialogRenameComponent,
        AppDialogNewFolderComponent,
        AppDialogPermissionsSetComponent,
        AppDialogPermissionsSetObjectComponent,
        AppDialogCopyComponent,
        AppDialogUploadFilesComponent,
        AppDialogMyDetailsComponent,
        AppDialogConfirmationComponent
    ];
    var /** @type {?} */ declarations = __spread(entryComponents, [AppBtnsCancelOkComponent]);
    var NgxFilemanagerClientDialogsModule = /** @class */ (function () {
        function NgxFilemanagerClientDialogsModule() {
        }
        return NgxFilemanagerClientDialogsModule;
    }());
    NgxFilemanagerClientDialogsModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        FormFileFirebaseModule,
                        chips.MatChipsModule,
                        dialog.MatDialogModule,
                        formField.MatFormFieldModule,
                        button.MatButtonModule,
                        input.MatInputModule,
                        icon.MatIconModule,
                        select.MatSelectModule,
                        card.MatCardModule,
                        FileTableMiniModule,
                        TagsControlModule
                    ],
                    exports: __spread(entryComponents),
                    entryComponents: __spread(entryComponents),
                    declarations: __spread(declarations),
                    providers: []
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ declarations$1 = [
        LibMainFileManagerComponent,
        AppBreadCrumbsComponent,
        AppBulkActionsComponent,
        AppMainActionsComponent,
        FileDetailsComponent,
    ];
    var ɵ0$2 = getBaseHref;
    var NgxFilemanagerClientFirebaseModule = /** @class */ (function () {
        function NgxFilemanagerClientFirebaseModule() {
        }
        return NgxFilemanagerClientFirebaseModule;
    }());
    NgxFilemanagerClientFirebaseModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: declarations$1,
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        http.HttpClientModule,
                        forms.ReactiveFormsModule,
                        FileSizeModule,
                        AppFileTableModule,
                        FormFileFirebaseModule,
                        NgxFilemanagerClientDialogsModule,
                        autocomplete.MatAutocompleteModule,
                        button.MatButtonModule,
                        buttonToggle.MatButtonToggleModule,
                        checkbox.MatCheckboxModule,
                        chips.MatChipsModule,
                        card.MatCardModule,
                        dialog.MatDialogModule,
                        formField.MatFormFieldModule,
                        icon.MatIconModule,
                        input.MatInputModule,
                        menu.MatMenuModule,
                        paginator.MatPaginatorModule,
                        progressBar.MatProgressBarModule,
                        progressSpinner.MatProgressSpinnerModule,
                        select.MatSelectModule,
                        sidenav.MatSidenavModule,
                        snackBar.MatSnackBarModule,
                        sort.MatSortModule,
                        table.MatTableModule,
                        tabs.MatTabsModule,
                        toolbar.MatToolbarModule,
                        tooltip.MatTooltipModule,
                        expansion.MatExpansionModule
                    ],
                    exports: [LibMainFileManagerComponent],
                    providers: [
                        ServerFilesystemProviderService,
                        FilemanagerStatusService,
                        NotificationService,
                        {
                            provide: common.APP_BASE_HREF,
                            useFactory: ɵ0$2,
                            deps: [common.PlatformLocation]
                        },
                        { provide: LoggerService, useClass: ConsoleLoggerService },
                        IconUrlResolverService
                    ]
                },] }
    ];

    var FileSystemStub = /** @class */ (function () {
        function FileSystemStub() {
            this.fakeDelayMs = 1000;
            this.logger = new ConsoleLoggerService();
            this.files = stubFiles;
        }
        /**
         * @param {?} newDelay
         * @return {?}
         */
        FileSystemStub.prototype.setFakeDelay = function (newDelay) {
            this.fakeDelayMs = newDelay;
        };
        /**
         * @return {?}
         */
        FileSystemStub.prototype.fakeDelay = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            setTimeout(function () {
                                resolve();
                            }, _this.fakeDelayMs);
                        })];
                });
            });
        };
        /**
         * @param {?} items
         * @param {?} isMatch
         * @return {?}
         */
        FileSystemStub.prototype.selectMatches = function (items, isMatch) {
            var /** @type {?} */ itemsSet = new Set(items);
            if (isMatch) {
                return this.files.filter(function (f) { return itemsSet.has(f.fullPath); });
            }
            else {
                return this.files.filter(function (f) { return !itemsSet.has(f.fullPath); });
            }
        };
        /**
         * @param {?} dirPath
         * @param {?} filePath
         * @return {?}
         */
        FileSystemStub.prototype.isInDirectory = function (dirPath, filePath) {
            try {
                var /** @type {?} */ relative = path__default.relative(dirPath, filePath);
                var /** @type {?} */ isSubdir = relative && !relative.startsWith('..') && !relative.includes('/');
                return isSubdir;
            }
            catch ( /** @type {?} */error) {
                this.logger.warn('isInDirectory error', { dirPath: dirPath, filePath: filePath, error: error });
                return false;
            }
        };
        /**
         * @param {?} inputPath
         * @return {?}
         */
        FileSystemStub.prototype.List = function (inputPath) {
            return __awaiter(this, void 0, void 0, function () {
                var folderPath, matches;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fakeDelay()];
                        case 1:
                            _a.sent();
                            folderPath = this.ensurePrefixSlash(this.ensureTrailingSlash(inputPath));
                            matches = this.files.filter(function (k) { return _this.isInDirectory(folderPath, k.fullPath); });
                            this.logger.info('List', { folderPath: folderPath, files: this.files, matches: matches });
                            return [2 /*return*/, {
                                    result: matches
                                }];
                    }
                });
            });
        };
        /**
         * @param {?} item
         * @param {?} newItemPath
         * @return {?}
         */
        FileSystemStub.prototype.Rename = function (item, newItemPath) {
            return __awaiter(this, void 0, void 0, function () {
                var baseName;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fakeDelay()];
                        case 1:
                            _a.sent();
                            baseName = path__default.basename(newItemPath);
                            this.selectMatches([item], true).map(function (match) {
                                match.name = baseName;
                                match.fullPath = newItemPath;
                            });
                            return [2 /*return*/, null];
                    }
                });
            });
        };
        /**
         * @param {?} item
         * @param {?} newPath
         * @return {?}
         */
        FileSystemStub.prototype.Move = function (item, newPath) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fakeDelay()];
                        case 1:
                            _a.sent();
                            this.selectMatches([item], true).map(function (match) {
                                match.fullPath = newPath;
                            });
                            return [2 /*return*/, null];
                    }
                });
            });
        };
        /**
         * @param {?} singleFileName
         * @param {?} newPath
         * @return {?}
         */
        FileSystemStub.prototype.Copy = function (singleFileName, newPath) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fakeDelay()];
                        case 1:
                            _a.sent();
                            this.selectMatches([singleFileName], true).map(function (match) {
                                var /** @type {?} */ copy = Object.assign({}, match);
                                copy.fullPath = newPath;
                                _this.files.push(copy);
                            });
                            return [2 /*return*/, null];
                    }
                });
            });
        };
        /**
         * @param {?} item
         * @param {?} content
         * @return {?}
         */
        FileSystemStub.prototype.Edit = function (item, content) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fakeDelay()];
                        case 1:
                            _a.sent();
                            this.selectMatches([item], true).map(function (match) {
                                match['content'] = content;
                            });
                            return [2 /*return*/, null];
                    }
                });
            });
        };
        /**
         * @param {?} item
         * @return {?}
         */
        FileSystemStub.prototype.Getcontent = function (item) {
            return __awaiter(this, void 0, void 0, function () {
                var matches;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fakeDelay()];
                        case 1:
                            _a.sent();
                            matches = this.selectMatches([item], true);
                            return [2 /*return*/, __spread(matches).pop()['content']];
                    }
                });
            });
        };
        /**
         * @param {?} item
         * @return {?}
         */
        FileSystemStub.prototype.GetSingle = function (item) {
            return __awaiter(this, void 0, void 0, function () {
                var matches, file;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fakeDelay()];
                        case 1:
                            _a.sent();
                            matches = this.selectMatches([item], true);
                            file = __spread(matches).pop();
                            return [2 /*return*/, {
                                    result: {
                                        file: file,
                                        url: file.downloadUrl,
                                        success: true
                                    }
                                }];
                    }
                });
            });
        };
        /**
         * @param {?} newPath
         * @param {?=} disableNoClobber
         * @return {?}
         */
        FileSystemStub.prototype.CreateFolder = function (newPath, disableNoClobber) {
            return __awaiter(this, void 0, void 0, function () {
                var directoryPath;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fakeDelay()];
                        case 1:
                            _a.sent();
                            if (disableNoClobber) {
                                directoryPath = EnsureTrailingSlash(newPath);
                                this.files.push(MakeDir(directoryPath));
                            }
                            else {
                                this.recursivelyTryToCreateFolder(newPath);
                            }
                            return [2 /*return*/, null];
                    }
                });
            });
        };
        /**
         * @param {?} newPath
         * @return {?}
         */
        FileSystemStub.prototype.recursivelyTryToCreateFolder = function (newPath) {
            var /** @type {?} */ directoryPath = EnsureTrailingSlash(newPath);
            var /** @type {?} */ exists = !!this.selectMatches([directoryPath], true).length;
            if (!exists) {
                this.files.push(MakeDir(directoryPath));
                return;
            }
            var /** @type {?} */ newPathWith2 = Add2ToPathDir(directoryPath);
            return this.recursivelyTryToCreateFolder(newPathWith2);
        };
        /**
         * @param {?} item
         * @param {?} role
         * @param {?} entity
         * @param {?=} recursive
         * @return {?}
         */
        FileSystemStub.prototype.SetPermissions = function (item, role, entity, recursive) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.SetPermissionsMultiple([item], role, entity, recursive)];
                });
            });
        };
        /**
         * @param {?} items
         * @param {?} newPath
         * @return {?}
         */
        FileSystemStub.prototype.CopyMultiple = function (items, newPath) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fakeDelay()];
                        case 1:
                            _a.sent();
                            this.selectMatches(items, true).map(function (f) {
                                var /** @type {?} */ copy = Object.assign({}, f);
                                copy.fullPath = path__default.join(newPath, f.name);
                                _this.files.push(copy);
                            });
                            return [2 /*return*/, null];
                    }
                });
            });
        };
        /**
         * @param {?} items
         * @param {?} newPath
         * @return {?}
         */
        FileSystemStub.prototype.MoveMultiple = function (items, newPath) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fakeDelay()];
                        case 1:
                            _a.sent();
                            this.selectMatches(items, true).map(function (f) {
                                f.fullPath = path__default.join(newPath, f.name);
                            });
                            return [2 /*return*/, null];
                    }
                });
            });
        };
        /**
         * @param {?} items
         * @param {?} role
         * @param {?} entity
         * @param {?=} recursive
         * @return {?}
         */
        FileSystemStub.prototype.SetPermissionsMultiple = function (items, role, entity, recursive) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fakeDelay()];
                        case 1:
                            _a.sent();
                            this.logger.info('file-system-stub: SetPermissionsMultiple', {
                                items: items,
                                files: this.files
                            });
                            return [2 /*return*/, this.recursivelySetPermissions(items, role, entity, recursive)];
                    }
                });
            });
        };
        /**
         * @param {?} item
         * @return {?}
         */
        FileSystemStub.prototype.Upload = function (item) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fakeDelay()];
                        case 1:
                            _a.sent();
                            this.recursivelyTryToAddFile(item);
                            return [2 /*return*/, null];
                    }
                });
            });
        };
        /**
         * @param {?} filePath
         * @return {?}
         */
        FileSystemStub.prototype.recursivelyTryToAddFile = function (filePath) {
            var /** @type {?} */ parsedFilePath = EnsureNoTrailingSlash(filePath);
            var /** @type {?} */ exists = !!this.selectMatches([parsedFilePath], true).length;
            if (!exists) {
                this.files.push(MakeFile(parsedFilePath));
                return;
            }
            var /** @type {?} */ newPathWith2 = Add2ToPath(parsedFilePath);
            return this.recursivelyTryToAddFile(newPathWith2);
        };
        /**
         * @param {?} items
         * @param {?} role
         * @param {?} entity
         * @param {?=} recursive
         * @return {?}
         */
        FileSystemStub.prototype.recursivelySetPermissions = function (items, role, entity, recursive) {
            var _this = this;
            var /** @type {?} */ matches = this.selectMatches(items, true);
            matches.map(function (item) {
                _this.setSinglePermission(item, role, entity);
                var /** @type {?} */ isFolder = item.type === 'dir';
                if (recursive && isFolder) {
                    _this.recursivelySetPermissions([item.fullPath], role, entity, recursive);
                }
            });
            return null;
        };
        /**
         * @param {?} item
         * @param {?} role
         * @param {?} entity
         * @return {?}
         */
        FileSystemStub.prototype.setSinglePermission = function (item, role, entity) {
            var /** @type {?} */ list;
            if (role === 'READER') {
                list = item.permissions.readers;
            }
            if (role === 'WRITER') {
                list = item.permissions.writers;
            }
            var /** @type {?} */ inListAlready = list.includes(entity);
            if (!inListAlready) {
                list.push(entity);
            }
        };
        /**
         * @param {?} items
         * @param {?} permissionsObj
         * @param {?=} recursive
         * @return {?}
         */
        FileSystemStub.prototype.SetPermissionsObjectMultiple = function (items, permissionsObj, recursive) {
            return __awaiter(this, void 0, void 0, function () {
                var matches;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fakeDelay()];
                        case 1:
                            _a.sent();
                            matches = this.selectMatches(items, true);
                            this.logger.info('file-system-stub: SetPermissionsMultiple', {
                                items: items,
                                matches: matches,
                                permissionsObj: permissionsObj
                            });
                            this.recursivelySetPermissionsObjects(items, permissionsObj, recursive);
                            return [2 /*return*/, null];
                    }
                });
            });
        };
        /**
         * @param {?} items
         * @param {?} permissionsObj
         * @param {?=} recursive
         * @return {?}
         */
        FileSystemStub.prototype.recursivelySetPermissionsObjects = function (items, permissionsObj, recursive) {
            var _this = this;
            var /** @type {?} */ matches = this.selectMatches(items, true);
            matches.map(function (item) {
                item.permissions = permissionsObj;
                var /** @type {?} */ isFolder = item.type === 'dir';
                if (recursive && isFolder) {
                    _this.recursivelySetPermissionsObjects([item.fullPath], permissionsObj, recursive);
                }
            });
            return null;
        };
        /**
         * @param {?} items
         * @return {?}
         */
        FileSystemStub.prototype.Remove = function (items) {
            return __awaiter(this, void 0, void 0, function () {
                var itemsSet, itemsNotDeleted;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fakeDelay()];
                        case 1:
                            _a.sent();
                            itemsSet = new Set(items);
                            itemsNotDeleted = this.files.filter(function (f) { return !itemsSet.has(f.fullPath); });
                            this.files = itemsNotDeleted;
                            return [2 /*return*/, null];
                    }
                });
            });
        };
        /**
         * @return {?}
         */
        FileSystemStub.prototype.CloneProvider = function () {
            return new FileSystemStub();
        };
        /**
         * @param {?} inputPath
         * @return {?}
         */
        FileSystemStub.prototype.ensureTrailingSlash = function (inputPath) {
            var /** @type {?} */ hasTrailing = inputPath.slice(-1) === '/';
            if (hasTrailing) {
                return inputPath;
            }
            return inputPath + '/';
        };
        /**
         * @param {?} inputPath
         * @return {?}
         */
        FileSystemStub.prototype.ensurePrefixSlash = function (inputPath) {
            var /** @type {?} */ hasPrefix = inputPath.slice(0, 1) === '/';
            if (hasPrefix) {
                return inputPath;
            }
            return '/' + inputPath;
        };
        /**
         * @param {?} currentPath
         * @return {?}
         */
        FileSystemStub.prototype.GetUploadApiUrl = function (currentPath) {
            return 'https://httpbin.org/post';
        };
        /**
         * @param {?} file
         * @return {?}
         */
        FileSystemStub.prototype.CreateDownloadLink = function (file) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, 'https://upload.wikimedia.org/wikipedia/commons/8/85/Exponential_Function_%28Abs_Imag_Part_at_Infinity%29_Density.png'];
                });
            });
        };
        return FileSystemStub;
    }());
    function FileSystemStub_tsickle_Closure_declarations() {
        /** @type {?} */
        FileSystemStub.prototype.fakeDelayMs;
        /** @type {?} */
        FileSystemStub.prototype.logger;
        /** @type {?} */
        FileSystemStub.prototype.files;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.FileSystemStub = FileSystemStub;
    exports.NgxFilemanagerClientFirebaseModule = NgxFilemanagerClientFirebaseModule;
    exports.ServerFilesystemProviderService = ServerFilesystemProviderService;
    exports.ɵa = LibMainFileManagerComponent;
    exports.ɵb = ActionHandlersService;
    exports.ɵba = TagsControlModule;
    exports.ɵbb = AppControlTagMultipleComponent;
    exports.ɵbc = BaseDialogComponent;
    exports.ɵbd = AppDialogRenameComponent;
    exports.ɵbe = AppDialogNewFolderComponent;
    exports.ɵbf = AppDialogPermissionsSetComponent;
    exports.ɵbg = AppDialogPermissionsSetObjectComponent;
    exports.ɵbh = AppDialogCopyComponent;
    exports.ɵbi = AppDialogUploadFilesComponent;
    exports.ɵbj = AppDialogMyDetailsComponent;
    exports.ɵbk = AppDialogConfirmationComponent;
    exports.ɵbl = AppBtnsCancelOkComponent;
    exports.ɵbm = getBaseHref;
    exports.ɵbn = ConsoleLoggerService;
    exports.ɵc = ClientFileSystemService;
    exports.ɵd = LoggerService;
    exports.ɵe = IconUrlResolverService;
    exports.ɵf = OptimisticFilesystemService;
    exports.ɵg = NotificationService;
    exports.ɵh = FilemanagerStatusService;
    exports.ɵi = AppBreadCrumbsComponent;
    exports.ɵj = AppBulkActionsComponent;
    exports.ɵk = AppMainActionsComponent;
    exports.ɵl = FileDetailsComponent;
    exports.ɵm = FileSizeModule;
    exports.ɵn = FileSizePipe;
    exports.ɵo = AppFileTableModule;
    exports.ɵp = AppFileTableComponent;
    exports.ɵq = CardFolderComponent;
    exports.ɵr = CardFileComponent;
    exports.ɵs = FormFileFirebaseModule;
    exports.ɵt = FormFileFirebaseComponent;
    exports.ɵu = FormBase;
    exports.ɵv = FormFileUploadedFileListComponent;
    exports.ɵw = NgxFilemanagerClientDialogsModule;
    exports.ɵx = FileTableMiniModule;
    exports.ɵy = AppFileTableMiniFolderBrowserComponent;
    exports.ɵz = AppActionsMiniBrowserComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-filemanager-client-firebase.umd.js.map

webpackJsonp(["common"],{

/***/ "../../../../../src/app/pages/charts/components/echarts/charts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartsService = (function () {
    function ChartsService() {
        this.xAxisData = [];
        this.data1 = [];
        this.data2 = [];
        this.PieOption = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['Example1', 'Example2', 'Example3']
            },
            roseType: 'angle',
            series: [
                {
                    name: 'PieChart',
                    type: 'pie',
                    radius: [0, '50%'],
                    data: [
                        { value: 235, name: 'Example1' },
                        { value: 210, name: 'Example2' },
                        { value: 162, name: 'Example3' }
                    ]
                }
            ]
        };
        this.LineOption = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    smooth: true
                }]
        };
        this.BarOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 52, 200, 334, 390, 330, 220]
                }
            ]
        };
        this.AnimationBarOption = {
            legend: {
                data: ['Example data1', 'Example data2'],
                align: 'left'
            },
            /* toolbox: {
                // y: 'bottom',
                feature: {
                    magicType: {
                        type: ['stack', 'tiled']
                    },
                    dataView: {},
                    saveAsImage: {
                        pixelRatio: 2
                    }
                }
            }, */
            tooltip: {},
            xAxis: {
                data: this.xAxisData,
                silent: false,
                splitLine: {
                    show: false
                }
            },
            yAxis: {},
            series: [{
                    name: 'Example data1',
                    type: 'bar',
                    data: this.data1,
                    animationDelay: function (idx) {
                        return idx * 10;
                    }
                }, {
                    name: 'Example data2',
                    type: 'bar',
                    data: this.data2,
                    animationDelay: function (idx) {
                        return idx * 10 + 100;
                    }
                }],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        };
        for (var i = 0; i < 100; i++) {
            this.xAxisData.push('Type ' + i);
            this.data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
            this.data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
        }
    }
    ChartsService.prototype.getBarOption = function () {
        return this.BarOption;
    };
    ChartsService.prototype.getLineOption = function () {
        return this.LineOption;
    };
    ChartsService.prototype.getPieOption = function () {
        return this.PieOption;
    };
    ChartsService.prototype.getAnimationBarOption = function () {
        return this.AnimationBarOption;
    };
    return ChartsService;
}());
ChartsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ChartsService);

//# sourceMappingURL=charts.service.js.map

/***/ }),

/***/ "../../../../ngx-echarts/ngx-echarts.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxEchartsModule; });
/* unused harmony export NgxEchartsDirective */
/* unused harmony export NgxEchartsService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_empty__ = __webpack_require__("../../../../rxjs/add/observable/empty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);






var ChangeFilter = (function () {
    /**
     * @param {?} _changes
     */
    function ChangeFilter(_changes) {
        this._changes = _changes;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ChangeFilter.of = function (changes) {
        return new ChangeFilter(changes);
    };
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    ChangeFilter.prototype.notEmpty = function (key) {
        if (this._changes[key]) {
            var /** @type {?} */ value = this._changes[key].currentValue;
            if (value !== undefined && value !== null) {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(value);
            }
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].empty();
    };
    /**
     * @template T
     * @param {?} key
     * @return {?}
     */
    ChangeFilter.prototype.has = function (key) {
        if (this._changes[key]) {
            var /** @type {?} */ value = this._changes[key].currentValue;
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(value);
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].empty();
    };
    return ChangeFilter;
}());
var NgxEchartsDirective = (function () {
    /**
     * @param {?} el
     * @param {?} _ngZone
     */
    function NgxEchartsDirective(el, _ngZone) {
        this.el = el;
        this._ngZone = _ngZone;
        this.autoResize = true;
        this.loadingType = 'default';
        // chart events:
        this.chartInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.chartClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.chartDblClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.chartMouseDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.chartMouseUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.chartMouseOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.chartMouseOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.chartGlobalOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.chartContextMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.chartDataZoom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._chart = null;
        this.currentOffsetWidth = 0;
        this.currentOffsetHeight = 0;
        this.currentWindowWidth = null;
        this._resize$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
    }
    /**
     * @return {?}
     */
    NgxEchartsDirective.prototype.createChart = function () {
        var _this = this;
        this.currentWindowWidth = window.innerWidth;
        this.currentOffsetWidth = this.el.nativeElement.offsetWidth;
        this.currentOffsetHeight = this.el.nativeElement.offsetHeight;
        var /** @type {?} */ dom = this.el.nativeElement;
        if (window && window.getComputedStyle) {
            var /** @type {?} */ prop = window.getComputedStyle(dom, null).getPropertyValue('height');
            if ((!prop || prop === '0px') &&
                (!dom.style.height || dom.style.height === '0px')) {
                dom.style.height = '400px';
            }
        }
        return this._ngZone.runOutsideAngular(function () { return echarts.init(dom, _this.theme || undefined, _this.initOpts || undefined); });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxEchartsDirective.prototype.onWindowResize = function (event) {
        if (this.autoResize && event.target.innerWidth !== this.currentWindowWidth) {
            this.currentWindowWidth = event.target.innerWidth;
            this.currentOffsetWidth = this.el.nativeElement.offsetWidth;
            this.currentOffsetHeight = this.el.nativeElement.offsetHeight;
            this._resize$.next();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxEchartsDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var /** @type {?} */ filter = ChangeFilter.of(changes);
        filter.notEmpty('options').subscribe(function (opt) { return _this.onOptionsChange(opt); });
        filter.notEmpty('merge').subscribe(function (opt) { return _this.setOption(opt); });
        filter.has('loading').subscribe(function (v) { return _this.toggleLoading(!!v); });
    };
    /**
     * @return {?}
     */
    NgxEchartsDirective.prototype.ngOnDestroy = function () {
        if (this._resizeSub) {
            this._resizeSub.unsubscribe();
            this._resizeSub = null;
        }
        if (this._chart) {
            this._chart.dispose();
            this._chart = null;
        }
    };
    /**
     * @return {?}
     */
    NgxEchartsDirective.prototype.ngDoCheck = function () {
        // No heavy work in DoCheck!
        if (this._chart && this.autoResize) {
            var /** @type {?} */ offsetWidth = this.el.nativeElement.offsetWidth;
            var /** @type {?} */ offsetHeight = this.el.nativeElement.offsetHeight;
            if (this.currentOffsetWidth !== offsetWidth || this.currentOffsetHeight !== offsetHeight) {
                this.currentOffsetWidth = offsetWidth;
                this.currentOffsetHeight = offsetHeight;
                this._resize$.next();
            }
        }
    };
    /**
     * @param {?} opt
     * @return {?}
     */
    NgxEchartsDirective.prototype.onOptionsChange = function (opt) {
        var _this = this;
        if (opt) {
            if (!this._chart) {
                this._chart = this.createChart();
                // subscribe to _resize$ and debounced
                this._resizeSub = this._resize$.debounceTime(50).subscribe(function () {
                    if (_this._chart) {
                        _this._chart.resize();
                    }
                });
                // output echart instance:
                this.chartInit.emit(this._chart);
                // register events:
                this.registerEvents(this._chart);
            }
            this._chart.setOption(this.options, true);
            /**
             * Bugfix: Line chart is not animated on init
             * https://github.com/xieziyu/ngx-echarts/issues/102
             */
            // this._chart.resize();
        }
    };
    /**
     * @param {?} _chart
     * @return {?}
     */
    NgxEchartsDirective.prototype.registerEvents = function (_chart) {
        var _this = this;
        if (_chart) {
            // register mouse events:
            _chart.on('click', function (e) { return _this._ngZone.run(function () { return _this.chartClick.emit(e); }); });
            _chart.on('dblClick', function (e) { return _this._ngZone.run(function () { return _this.chartDblClick.emit(e); }); });
            _chart.on('mousedown', function (e) { return _this._ngZone.run(function () { return _this.chartMouseDown.emit(e); }); });
            _chart.on('mouseup', function (e) { return _this._ngZone.run(function () { return _this.chartMouseUp.emit(e); }); });
            _chart.on('mouseover', function (e) { return _this._ngZone.run(function () { return _this.chartMouseOver.emit(e); }); });
            _chart.on('mouseout', function (e) { return _this._ngZone.run(function () { return _this.chartMouseOut.emit(e); }); });
            _chart.on('globalout', function (e) { return _this._ngZone.run(function () { return _this.chartGlobalOut.emit(e); }); });
            _chart.on('contextmenu', function (e) { return _this._ngZone.run(function () { return _this.chartContextMenu.emit(e); }); });
            // other events;
            _chart.on('datazoom', function (e) { return _this._ngZone.run(function () { return _this.chartDataZoom.emit(e); }); });
        }
    };
    /**
     * @return {?}
     */
    NgxEchartsDirective.prototype.clear = function () {
        if (this._chart) {
            this._chart.clear();
        }
    };
    /**
     * @param {?} loading
     * @return {?}
     */
    NgxEchartsDirective.prototype.toggleLoading = function (loading) {
        if (this._chart) {
            loading ? this._chart.showLoading(this.loadingType, this.loadingOpts) : this._chart.hideLoading();
        }
    };
    /**
     * @param {?} option
     * @param {?=} opts
     * @return {?}
     */
    NgxEchartsDirective.prototype.setOption = function (option, opts) {
        if (this._chart) {
            this._chart.setOption(option, opts);
        }
    };
    return NgxEchartsDirective;
}());
NgxEchartsDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'echarts, [echarts]'
            },] },
];
/**
 * @nocollapse
 */
NgxEchartsDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
NgxEchartsDirective.propDecorators = {
    'options': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'theme': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'loading': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'initOpts': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'merge': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'autoResize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'loadingType': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'loadingOpts': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'chartInit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'chartClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'chartDblClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'chartMouseDown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'chartMouseUp': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'chartMouseOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'chartMouseOut': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'chartGlobalOut': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'chartContextMenu': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'chartDataZoom': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'onWindowResize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['window:resize', ['$event'],] },],
};
/**
 * Provide an wrapper for global echarts
 * ```typescript
 * export class AppComponent implements onInit {
 *   constructor(private nes: NgxEchartsService) {}
 *
 *   ngOnInit() {
 *     // const points = ...;
 *     // const rect = ...;
 *
 *     // Get native global echarts object, then call native function
 *     const echarts = this.nes.echarts;
 *     const points = echarts.graphic.clipPointsByRect(points, rect);
 *
 *     // Or call wrapper function directly:
 *     const points = this.nes.graphic.clipPointsByRect(points, rect);
 *   }
 * }
 * ```
 */
var NgxEchartsService = (function () {
    function NgxEchartsService() {
    }
    Object.defineProperty(NgxEchartsService.prototype, "echarts", {
        /**
         * Get global echarts object
         * @return {?}
         */
        get: function () {
            return echarts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxEchartsService.prototype, "graphic", {
        /**
         * Wrapper for echarts.graphic
         * @return {?}
         */
        get: function () {
            return this._checkEcharts() ? echarts.graphic : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxEchartsService.prototype, "init", {
        /**
         * Wrapper for echarts.init
         * @return {?}
         */
        get: function () {
            return this._checkEcharts() ? echarts.init : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxEchartsService.prototype, "connect", {
        /**
         * Wrapper for echarts.connect
         * @return {?}
         */
        get: function () {
            return this._checkEcharts() ? echarts.connect : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxEchartsService.prototype, "disconnect", {
        /**
         * Wrapper for echarts.disconnect
         * @return {?}
         */
        get: function () {
            return this._checkEcharts() ? echarts.disconnect : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxEchartsService.prototype, "dispose", {
        /**
         * Wrapper for echarts.dispose
         * @return {?}
         */
        get: function () {
            return this._checkEcharts() ? echarts.dispose : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxEchartsService.prototype, "getInstanceByDom", {
        /**
         * Wrapper for echarts.getInstanceByDom
         * @return {?}
         */
        get: function () {
            return this._checkEcharts() ? echarts.getInstanceByDom : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxEchartsService.prototype, "registerMap", {
        /**
         * Wrapper for echarts.registerMap
         * @return {?}
         */
        get: function () {
            return this._checkEcharts() ? echarts.registerMap : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxEchartsService.prototype, "getMap", {
        /**
         * Wrapper for echarts.getMap
         * @return {?}
         */
        get: function () {
            return this._checkEcharts() ? echarts.getMap : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxEchartsService.prototype, "registerTheme", {
        /**
         * Wrapper for echarts.registerTheme
         * @return {?}
         */
        get: function () {
            return this._checkEcharts() ? echarts.registerTheme : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxEchartsService.prototype._checkEcharts = function () {
        if (echarts) {
            return true;
        }
        else {
            console.error('[ngx-echarts] global ECharts not loaded');
            return false;
        }
    };
    return NgxEchartsService;
}());
NgxEchartsService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
NgxEchartsService.ctorParameters = function () { return []; };
var NgxEchartsModule = (function () {
    function NgxEchartsModule() {
    }
    return NgxEchartsModule;
}());
NgxEchartsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [
                    NgxEchartsDirective
                ],
                exports: [
                    NgxEchartsDirective
                ],
                providers: [
                    NgxEchartsService
                ]
            },] },
];
/**
 * @nocollapse
 */
NgxEchartsModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-echarts.es5.js.map


/***/ }),

/***/ "../../../../rxjs/Scheduler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * An execution context and a data structure to order tasks and schedule their
 * execution. Provides a notion of (potentially virtual) time, through the
 * `now()` getter method.
 *
 * Each unit of work in a Scheduler is called an {@link Action}.
 *
 * ```ts
 * class Scheduler {
 *   now(): number;
 *   schedule(work, delay?, state?): Subscription;
 * }
 * ```
 *
 * @class Scheduler
 */
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    /**
     * Schedules a function, `work`, for execution. May happen at some point in
     * the future, according to the `delay` parameter, if specified. May be passed
     * some context object, `state`, which will be passed to the `work` function.
     *
     * The given arguments will be processed an stored as an Action object in a
     * queue of actions.
     *
     * @param {function(state: ?T): ?Subscription} work A function representing a
     * task, or some unit of work to be executed by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler itself.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @return {Subscription} A subscription in order to be able to unsubscribe
     * the scheduled work.
     */
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = Date.now ? Date.now : function () { return +new Date(); };
    return Scheduler;
}());
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/empty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var empty_1 = __webpack_require__("../../../../rxjs/observable/empty.js");
Observable_1.Observable.empty = empty_1.empty;
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/of.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var of_1 = __webpack_require__("../../../../rxjs/observable/of.js");
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/debounceTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var debounceTime_1 = __webpack_require__("../../../../rxjs/operator/debounceTime.js");
Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ "../../../../rxjs/observable/empty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var EmptyObservable_1 = __webpack_require__("../../../../rxjs/observable/EmptyObservable.js");
exports.empty = EmptyObservable_1.EmptyObservable.create;
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "../../../../rxjs/operator/debounceTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var debounceTime_1 = __webpack_require__("../../../../rxjs/operators/debounceTime.js");
/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return debounceTime_1.debounceTime(dueTime, scheduler)(this);
}
exports.debounceTime = debounceTime;
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ "../../../../rxjs/operators/debounceTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return function (source) { return source.lift(new DebounceTimeOperator(dueTime, scheduler)); };
}
exports.debounceTime = debounceTime;
var DebounceTimeOperator = (function () {
    function DebounceTimeOperator(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DebounceTimeSubscriber = (function (_super) {
    __extends(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
        _super.call(this, destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    DebounceTimeSubscriber.prototype._next = function (value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function () {
        this.debouncedNext();
        this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function () {
        this.clearDebounce();
        if (this.hasValue) {
            this.destination.next(this.lastValue);
            this.lastValue = null;
            this.hasValue = false;
        }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function () {
        var debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    };
    return DebounceTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ "../../../../rxjs/scheduler/Action.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__("../../../../rxjs/Subscription.js");
/**
 * A unit of work to be executed in a {@link Scheduler}. An action is typically
 * created from within a Scheduler and an RxJS user does not need to concern
 * themselves about creating and manipulating an Action.
 *
 * ```ts
 * class Action<T> extends Subscription {
 *   new (scheduler: Scheduler, work: (state?: T) => void);
 *   schedule(state?: T, delay: number = 0): Subscription;
 * }
 * ```
 *
 * @class Action<T>
 */
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        _super.call(this);
    }
    /**
     * Schedules this action on its parent Scheduler for execution. May be passed
     * some context object, `state`. May happen at some point in the future,
     * according to the `delay` parameter, if specified.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler.
     * @return {void}
     */
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ "../../../../rxjs/scheduler/AsyncAction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root_1 = __webpack_require__("../../../../rxjs/util/root.js");
var Action_1 = __webpack_require__("../../../../rxjs/scheduler/Action.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.pending = false;
        this.work = work;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        // Always replace the current state with the new state.
        this.state = state;
        // Set the pending flag indicating that this action has been scheduled, or
        // has recursively rescheduled itself.
        this.pending = true;
        var id = this.id;
        var scheduler = this.scheduler;
        //
        // Important implementation note:
        //
        // Actions only execute once by default, unless rescheduled from within the
        // scheduled callback. This allows us to implement single and repeat
        // actions via the same code path, without adding API surface area, as well
        // as mimic traditional recursion but across asynchronous boundaries.
        //
        // However, JS runtimes and timers distinguish between intervals achieved by
        // serial `setTimeout` calls vs. a single `setInterval` call. An interval of
        // serial `setTimeout` calls can be individually delayed, which delays
        // scheduling the next `setTimeout`, and so on. `setInterval` attempts to
        // guarantee the interval callback will be invoked more precisely to the
        // interval period, regardless of load.
        //
        // Therefore, we use `setInterval` to schedule single and repeat actions.
        // If the action reschedules itself with the same delay, the interval is not
        // canceled. If the action doesn't reschedule, or reschedules with a
        // different delay, the interval will be canceled after scheduled callback
        // execution.
        //
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.delay = delay;
        // If this action has already an async Id, don't request a new one.
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return root_1.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If this action is rescheduled with the same delay time, don't clear the interval id.
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        // Otherwise, if the action's delay time is different from the current delay,
        // or the action has been rescheduled before it's executed, clear the interval id
        return root_1.root.clearInterval(id) && undefined || undefined;
    };
    /**
     * Immediately executes this action and the `work` it contains.
     * @return {any}
     */
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            // Dequeue if the action didn't reschedule itself. Don't call
            // unsubscribe(), because the action could reschedule later.
            // For example:
            // ```
            // scheduler.schedule(function doWork(counter) {
            //   /* ... I'm a busy worker bee ... */
            //   var originalAction = this;
            //   /* wait 100ms before rescheduling the action */
            //   setTimeout(function () {
            //     originalAction.schedule(counter + 1);
            //   }, 100);
            // }, 1000);
            // ```
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    /** @deprecated internal use only */ AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action_1.Action));
exports.AsyncAction = AsyncAction;
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ "../../../../rxjs/scheduler/AsyncScheduler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Scheduler_1 = __webpack_require__("../../../../rxjs/Scheduler.js");
var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler() {
        _super.apply(this, arguments);
        this.actions = [];
        /**
         * A flag to indicate whether the Scheduler is currently executing a batch of
         * queued actions.
         * @type {boolean}
         */
        this.active = false;
        /**
         * An internal ID used to track the latest asynchronous task such as those
         * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
         * others.
         * @type {any}
         */
        this.scheduled = undefined;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift()); // exhaust the scheduler queue
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ "../../../../rxjs/scheduler/async.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AsyncAction_1 = __webpack_require__("../../../../rxjs/scheduler/AsyncAction.js");
var AsyncScheduler_1 = __webpack_require__("../../../../rxjs/scheduler/AsyncScheduler.js");
/**
 *
 * Async Scheduler
 *
 * <span class="informal">Schedule task as if you used setTimeout(task, duration)</span>
 *
 * `async` scheduler schedules tasks asynchronously, by putting them on the JavaScript
 * event loop queue. It is best used to delay tasks in time or to schedule tasks repeating
 * in intervals.
 *
 * If you just want to "defer" task, that is to perform it right after currently
 * executing synchronous code ends (commonly achieved by `setTimeout(deferredTask, 0)`),
 * better choice will be the {@link asap} scheduler.
 *
 * @example <caption>Use async scheduler to delay task</caption>
 * const task = () => console.log('it works!');
 *
 * Rx.Scheduler.async.schedule(task, 2000);
 *
 * // After 2 seconds logs:
 * // "it works!"
 *
 *
 * @example <caption>Use async scheduler to repeat task in intervals</caption>
 * function task(state) {
 *   console.log(state);
 *   this.schedule(state + 1, 1000); // `this` references currently executing Action,
 *                                   // which we reschedule with new state and delay
 * }
 *
 * Rx.Scheduler.async.schedule(task, 3000, 0);
 *
 * // Logs:
 * // 0 after 3s
 * // 1 after 4s
 * // 2 after 5s
 * // 3 after 6s
 *
 * @static true
 * @name async
 * @owner Scheduler
 */
exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
//# sourceMappingURL=async.js.map

/***/ })

});
//# sourceMappingURL=common.chunk.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\r\n  background-color: #ccc;\r\n  height: 100%;\r\n}\r\n\r\n.background-title{\r\n  background-color: azure;\r\n  margin-bottom: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLXRpdGxle1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <router-outlet></router-outlet> --> \n\n<div >\n\n<div class=\"container background-title\"\nfxLayout\nfxLayout.xs=\"column\"\nfxLayoutAlign=\"center\"\n\nfxLayoutGap.xs=\"0\">\n\n<div fxFlex><app-login></app-login></div>\n\n</div>\n\n<div class=\"container background\" \nfxLayout\nfxLayout.xs=\"column\"\nfxLayoutAlign=\"center\"\nfxLayoutGap=\"40px\"\nfxLayoutGap.xs=\"0\" >\n<div fxFlex=\"40%\" >\n  <app-to-do-list></app-to-do-list>\n</div>\n<div  fxFlex>\n  <app-to-do-tasks></app-to-do-tasks>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todolist';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todo_to_do_item_to_do_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./todo//to-do-item/to-do-item.component */ "./src/app/todo/to-do-item/to-do-item.component.ts");
/* harmony import */ var _todo_to_do_list_to_do_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./todo/to-do-list/to-do-list.component */ "./src/app/todo/to-do-list/to-do-list.component.ts");
/* harmony import */ var _user_managment_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-managment/login/login.component */ "./src/app/user-managment/login/login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _core_material_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/material/material.module */ "./src/app/core/material/material.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_to_do_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/to-do.reducer */ "./src/app/store/to-do.reducer.ts");
/* harmony import */ var _store_to_do_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store/to-do.effects */ "./src/app/store/to-do.effects.ts");
/* harmony import */ var _todo_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./todo/new-task/new-task.component */ "./src/app/todo/new-task/new-task.component.ts");
/* harmony import */ var _core_pipes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/pipes */ "./src/app/core/pipes.ts");
/* harmony import */ var _todo_to_do_tasks_to_do_tasks_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./todo/to-do-tasks/to-do-tasks.component */ "./src/app/todo/to-do-tasks/to-do-tasks.component.ts");
/* harmony import */ var _todo_shared_editable_editable_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./todo/shared/editable/editable.component */ "./src/app/todo/shared/editable/editable.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _todo_to_do_item_to_do_item_component__WEBPACK_IMPORTED_MODULE_9__["ToDoItemComponent"],
                _todo_to_do_list_to_do_list_component__WEBPACK_IMPORTED_MODULE_10__["ToDoListComponent"],
                _user_managment_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _todo_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_17__["NewTaskComponent"],
                _core_pipes__WEBPACK_IMPORTED_MODULE_18__["NonCompletedPipe"],
                _todo_to_do_tasks_to_do_tasks_component__WEBPACK_IMPORTED_MODULE_19__["ToDoTasksComponent"],
                _todo_shared_editable_editable_component__WEBPACK_IMPORTED_MODULE_20__["EditableComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _core_material_material_module__WEBPACK_IMPORTED_MODULE_13__["CustomMaterialModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StoreModule"].forRoot({ user: _store_to_do_reducer__WEBPACK_IMPORTED_MODULE_15__["todoReducer"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([
                    _store_to_do_effects__WEBPACK_IMPORTED_MODULE_16__["TodoEffects"]
                ]),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/material/material.module.ts":
/*!**************************************************!*\
  !*** ./src/app/core/material/material.module.ts ***!
  \**************************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
            ]
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */


/***/ }),

/***/ "./src/app/core/pipes.ts":
/*!*******************************!*\
  !*** ./src/app/core/pipes.ts ***!
  \*******************************/
/*! exports provided: NonCompletedPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonCompletedPipe", function() { return NonCompletedPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NonCompletedPipe = /** @class */ (function () {
    function NonCompletedPipe() {
    }
    NonCompletedPipe.prototype.transform = function (allTasks, onlyNonCompleted) {
        return onlyNonCompleted ? allTasks.filter(function (task) { return task.status == 'Normal'; }) : allTasks;
    };
    NonCompletedPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'nonCompleted' })
    ], NonCompletedPipe);
    return NonCompletedPipe;
}());



/***/ }),

/***/ "./src/app/core/shared/HttpsHeaders.ts":
/*!*********************************************!*\
  !*** ./src/app/core/shared/HttpsHeaders.ts ***!
  \*********************************************/
/*! exports provided: CustomHttpOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHttpOptions", function() { return CustomHttpOptions; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");


var CustomHttpOptions = function () {
    return { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"](_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].httpsHeaders) };
};


/***/ }),

/***/ "./src/app/store/to-do.actions.ts":
/*!****************************************!*\
  !*** ./src/app/store/to-do.actions.ts ***!
  \****************************************/
/*! exports provided: ActionTypes, SetCurrentList, AddNewTask, AddNewList, LoadLists, RemoveTask, RemovAllDoneTask, EditTask, MarkAsDone, LoadTasks, UserLogin, UserLoginSuccess, Signup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCurrentList", function() { return SetCurrentList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewTask", function() { return AddNewTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewList", function() { return AddNewList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadLists", function() { return LoadLists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveTask", function() { return RemoveTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemovAllDoneTask", function() { return RemovAllDoneTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTask", function() { return EditTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkAsDone", function() { return MarkAsDone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTasks", function() { return LoadTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogin", function() { return UserLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginSuccess", function() { return UserLoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup", function() { return Signup; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["LOAD_TASKS"] = "[TODOLIST] LOAD_TASKS";
    ActionTypes["SET_CURRENT_LIST"] = "[TODOLIST] SET_CURRENT_LIST";
    ActionTypes["ADD_NEW_LIST"] = "[TODOLIST] ADD_NEW_LIST";
    ActionTypes["LOAD_LISTS"] = "[TODOLIST] LOAD_LISTS";
    ActionTypes["ADD_NEW_TASK"] = "[TODOLIST] ADD_NEW_TASK";
    ActionTypes["EditTask"] = "[TODOLIST] EditTask";
    ActionTypes["RemoveTask"] = "[TODOLIST] RemoveTask";
    ActionTypes["MarkAsDone"] = "[TODOLIST] MarkAsDone";
    ActionTypes["RemovAllDoneTask"] = "[TODOLIST] RemovAllDoneTask";
    ActionTypes["USER_LOGIN"] = "[USER] USER_LOGIN";
    ActionTypes["USER_LOGIN_SUCCESS"] = "[USER] USER_LOGIN_SUCCESS";
    ActionTypes["SIGNUP"] = "[USER] SIGNUP";
})(ActionTypes || (ActionTypes = {}));
var SetCurrentList = /** @class */ (function () {
    function SetCurrentList(payload) {
        this.payload = payload;
        this.type = ActionTypes.SET_CURRENT_LIST;
    }
    return SetCurrentList;
}());

var AddNewTask = /** @class */ (function () {
    function AddNewTask(payload) {
        this.payload = payload;
        this.type = ActionTypes.ADD_NEW_TASK;
    }
    return AddNewTask;
}());

var AddNewList = /** @class */ (function () {
    function AddNewList(payload) {
        this.payload = payload;
        this.type = ActionTypes.ADD_NEW_LIST;
    }
    return AddNewList;
}());

var LoadLists = /** @class */ (function () {
    function LoadLists(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_LISTS;
    }
    return LoadLists;
}());

var RemoveTask = /** @class */ (function () {
    function RemoveTask(payload) {
        this.payload = payload;
        this.type = ActionTypes.RemoveTask;
    }
    return RemoveTask;
}());

var RemovAllDoneTask = /** @class */ (function () {
    function RemovAllDoneTask(payload) {
        this.payload = payload;
        this.type = ActionTypes.RemovAllDoneTask;
    }
    return RemovAllDoneTask;
}());

var EditTask = /** @class */ (function () {
    function EditTask(payload) {
        this.payload = payload;
        this.type = ActionTypes.EditTask;
    }
    return EditTask;
}());

var MarkAsDone = /** @class */ (function () {
    function MarkAsDone(payload) {
        this.payload = payload;
        this.type = ActionTypes.MarkAsDone;
    }
    return MarkAsDone;
}());

var LoadTasks = /** @class */ (function () {
    function LoadTasks(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOAD_TASKS;
    }
    return LoadTasks;
}());

var UserLogin = /** @class */ (function () {
    function UserLogin(payload) {
        this.payload = payload;
        this.type = ActionTypes.USER_LOGIN;
    }
    return UserLogin;
}());

var UserLoginSuccess = /** @class */ (function () {
    function UserLoginSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.USER_LOGIN_SUCCESS;
    }
    return UserLoginSuccess;
}());

var Signup = /** @class */ (function () {
    function Signup(payload) {
        this.payload = payload;
        this.type = ActionTypes.SIGNUP;
    }
    return Signup;
}());



/***/ }),

/***/ "./src/app/store/to-do.effects.ts":
/*!****************************************!*\
  !*** ./src/app/store/to-do.effects.ts ***!
  \****************************************/
/*! exports provided: TodoEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoEffects", function() { return TodoEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _to_do_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./to-do.actions */ "./src/app/store/to-do.actions.ts");
/* harmony import */ var _user_managment_shared_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-managment/shared/user.service */ "./src/app/user-managment/shared/user.service.ts");
/* harmony import */ var _todo_shared_task_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../todo/shared/task.service */ "./src/app/todo/shared/task.service.ts");

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/withLatestFrom';






var TodoEffects = /** @class */ (function () {
    function TodoEffects(actions$, taskService, userService) {
        var _this = this;
        this.actions$ = actions$;
        this.taskService = taskService;
        this.userService = userService;
        this.setCurrentList$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_to_do_actions__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].SET_CURRENT_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (action) { return _this.taskService.getTasks(action.payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (tasks) { return new _to_do_actions__WEBPACK_IMPORTED_MODULE_4__["LoadTasks"]({ tasks: tasks }); })); }));
        this.userLogin$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_to_do_actions__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].USER_LOGIN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (action) { return _this.userService.login(action.payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return new _to_do_actions__WEBPACK_IMPORTED_MODULE_4__["UserLoginSuccess"](data); })); }));
        this.userLoginSuccess$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_to_do_actions__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].USER_LOGIN_SUCCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return new _to_do_actions__WEBPACK_IMPORTED_MODULE_4__["SetCurrentList"](data.payload.Lists[0]); }));
        this.signup$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_to_do_actions__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].SIGNUP), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (action) { return _this.userService.signup(action.payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return new _to_do_actions__WEBPACK_IMPORTED_MODULE_4__["UserLoginSuccess"](data); })); }));
        this.addList$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_to_do_actions__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].ADD_NEW_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (action) { return _this.userService.addList(action.payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return new _to_do_actions__WEBPACK_IMPORTED_MODULE_4__["UserLoginSuccess"](data); })); }));
        this.addTask$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_to_do_actions__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].ADD_NEW_TASK), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (action) {
            return _this.taskService.addTask(action.payload)
                .map(function (data) { return new _to_do_actions__WEBPACK_IMPORTED_MODULE_4__["SetCurrentList"](action.payload.list); });
        }));
        this.deleteTask$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_to_do_actions__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].RemoveTask), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (action) {
            return _this.taskService.removeTask(action.payload)
                .map(function (data) { return new _to_do_actions__WEBPACK_IMPORTED_MODULE_4__["SetCurrentList"](action.payload.list); });
        }));
        this.editTitleTask$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_to_do_actions__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].EditTask), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (action) {
            return _this.taskService.updateTask(action.payload)
                .map(function (data) { return new _to_do_actions__WEBPACK_IMPORTED_MODULE_4__["SetCurrentList"](action.payload.list); });
        }));
        this.deleteAlDoneTask$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_to_do_actions__WEBPACK_IMPORTED_MODULE_4__["ActionTypes"].RemovAllDoneTask), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (action) {
            return _this.taskService.removeManyTasks(action.payload)
                .map(function (data) { return new _to_do_actions__WEBPACK_IMPORTED_MODULE_4__["SetCurrentList"](action.payload.list); });
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TodoEffects.prototype, "setCurrentList$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TodoEffects.prototype, "userLogin$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TodoEffects.prototype, "userLoginSuccess$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TodoEffects.prototype, "signup$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TodoEffects.prototype, "addList$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TodoEffects.prototype, "addTask$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TodoEffects.prototype, "deleteTask$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TodoEffects.prototype, "editTitleTask$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TodoEffects.prototype, "deleteAlDoneTask$", void 0);
    TodoEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
            _todo_shared_task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"],
            _user_managment_shared_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], TodoEffects);
    return TodoEffects;
}());



/***/ }),

/***/ "./src/app/store/to-do.reducer.ts":
/*!****************************************!*\
  !*** ./src/app/store/to-do.reducer.ts ***!
  \****************************************/
/*! exports provided: initialState, todoReducer, getTodoList, currentListCounterSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoReducer", function() { return todoReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTodoList", function() { return getTodoList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentListCounterSelector", function() { return currentListCounterSelector; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _to_do_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-do.actions */ "./src/app/store/to-do.actions.ts");


var initialState = {
    user: null,
    list: null,
    counter: 0
};
function todoReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _to_do_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SET_CURRENT_LIST:
            // console.log('todoReducer SET_CURRENT_LIST ');
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { list: action.payload });
        case _to_do_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].USER_LOGIN_SUCCESS:
            console.log('todoReducer USER_LOGIN_SUCCESS:');
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { user: action.payload });
        case _to_do_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOAD_TASKS:
            // console.log('todoReducer LOAD_TASKS:' + JSON.stringify(action));
            return createLoadTasksState(state, action);
        default:
            return state;
    }
}
function createLoadTasksState(state, action) {
    var list = state.list;
    var user = state.user.Lists.filter(function (l) { return l.id === list.id; })[0].counter = action.payload.tasks.length;
    var userTasks = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, list, { tasks: action.payload.tasks, counter: action.payload.tasks.length, user: user });
    var newState = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { list: userTasks, counter: action.payload.tasks.length });
    return newState;
}
var getTodoList = function (state) { return state.user; };
function currentListCounterSelector(state) {
    return state.list.tasks.length;
}


/***/ }),

/***/ "./src/app/todo/models/List.ts":
/*!*************************************!*\
  !*** ./src/app/todo/models/List.ts ***!
  \*************************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
var List = /** @class */ (function () {
    function List(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return List;
}());



/***/ }),

/***/ "./src/app/todo/models/task.ts":
/*!*************************************!*\
  !*** ./src/app/todo/models/task.ts ***!
  \*************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/todo/new-task/new-task.component.css":
/*!******************************************************!*\
  !*** ./src/app/todo/new-task/new-task.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vbmV3LXRhc2svbmV3LXRhc2suY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/todo/new-task/new-task.component.html":
/*!*******************************************************!*\
  !*** ./src/app/todo/new-task/new-task.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<button mat-icon-button class=\"card-button\" (click)=\"toggleAdd()\" *ngIf=\"!addNewFlag\">\n    <mat-icon>add</mat-icon>\n  </button>\n\n  <app-editable [model]=\"task\" (doneEdit)=\"addTask($event)\"  *ngIf=\"addNewFlag\"></app-editable>\n\n\n"

/***/ }),

/***/ "./src/app/todo/new-task/new-task.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/todo/new-task/new-task.component.ts ***!
  \*****************************************************/
/*! exports provided: NewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskComponent", function() { return NewTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/task */ "./src/app/todo/models/task.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_to_do_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/to-do.actions */ "./src/app/store/to-do.actions.ts");
/* harmony import */ var _store_to_do_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/to-do.reducer */ "./src/app/store/to-do.reducer.ts");






var NewTaskComponent = /** @class */ (function () {
    function NewTaskComponent(store) {
        var _this = this;
        this.store = store;
        this.addNewFlag = false;
        this.store.select(_store_to_do_reducer__WEBPACK_IMPORTED_MODULE_5__["getTodoList"]).
            subscribe(function (state) {
            console.log('newlist ' + JSON.stringify(state));
            _this.list = state.list;
        });
    }
    NewTaskComponent.prototype.ngOnInit = function () {
    };
    NewTaskComponent.prototype.toggleAdd = function () {
        this.addNewFlag = true;
        this.task = new _models_task__WEBPACK_IMPORTED_MODULE_2__["Task"]();
    };
    NewTaskComponent.prototype.addTask = function () {
        console.log('addTask');
        this.store.dispatch(new _store_to_do_actions__WEBPACK_IMPORTED_MODULE_4__["AddNewTask"]({ list: this.list, title: this.task.title }));
        this.addNewFlag = false;
    };
    NewTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-task',
            template: __webpack_require__(/*! ./new-task.component.html */ "./src/app/todo/new-task/new-task.component.html"),
            styles: [__webpack_require__(/*! ./new-task.component.css */ "./src/app/todo/new-task/new-task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], NewTaskComponent);
    return NewTaskComponent;
}());



/***/ }),

/***/ "./src/app/todo/shared/editable/editable.component.css":
/*!*************************************************************!*\
  !*** ./src/app/todo/shared/editable/editable.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title-edit{\r\n  width: calc(100% - 40px);\r\n  min-width:180px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9zaGFyZWQvZWRpdGFibGUvZWRpdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdG9kby9zaGFyZWQvZWRpdGFibGUvZWRpdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZS1lZGl0e1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICBtaW4td2lkdGg6MTgwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/todo/shared/editable/editable.component.html":
/*!**************************************************************!*\
  !*** ./src/app/todo/shared/editable/editable.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<mat-form-field class=\"title-edit\" >\n  <input  autofocus matInput [(ngModel)]=\"model.title\" />\n</mat-form-field>\n\n\n\n<button\n  mat-icon-button\n  class=\"card-button\"\n  (click)=\"done()\"\n\n>\n  <mat-icon>done</mat-icon>\n</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/todo/shared/editable/editable.component.ts":
/*!************************************************************!*\
  !*** ./src/app/todo/shared/editable/editable.component.ts ***!
  \************************************************************/
/*! exports provided: EditableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableComponent", function() { return EditableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditableComponent = /** @class */ (function () {
    function EditableComponent() {
        this.doneEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    EditableComponent.prototype.ngOnInit = function () {
    };
    EditableComponent.prototype.done = function () {
        this.doneEdit.emit(this.model);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditableComponent.prototype, "model", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditableComponent.prototype, "doneEdit", void 0);
    EditableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editable',
            template: __webpack_require__(/*! ./editable.component.html */ "./src/app/todo/shared/editable/editable.component.html"),
            styles: [__webpack_require__(/*! ./editable.component.css */ "./src/app/todo/shared/editable/editable.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditableComponent);
    return EditableComponent;
}());



/***/ }),

/***/ "./src/app/todo/shared/task-status.enum.ts":
/*!*************************************************!*\
  !*** ./src/app/todo/shared/task-status.enum.ts ***!
  \*************************************************/
/*! exports provided: TaskStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskStatus", function() { return TaskStatus; });
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["NORMAL"] = "Normal";
    TaskStatus["DONE"] = "Done";
})(TaskStatus || (TaskStatus = {}));


/***/ }),

/***/ "./src/app/todo/shared/task.service.ts":
/*!*********************************************!*\
  !*** ./src/app/todo/shared/task.service.ts ***!
  \*********************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_task__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/task */ "./src/app/todo/models/task.ts");
/* harmony import */ var src_app_core_shared_HttpsHeaders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/shared/HttpsHeaders */ "./src/app/core/shared/HttpsHeaders.ts");









var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        this.httpOptions = Object(src_app_core_shared_HttpsHeaders__WEBPACK_IMPORTED_MODULE_8__["CustomHttpOptions"])();
    }
    TaskService.prototype.getTasks = function (list) {
        return this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/lists/" + list.id + "/tasks")
            .map(function (response) {
            var tasks = response['result'];
            return tasks.map(function (task) { return new _models_task__WEBPACK_IMPORTED_MODULE_7__["Task"]({ id: task._id, listId: task.listid, title: task.title, status: task.status }); });
        });
    };
    TaskService.prototype.addTask = function (payload) {
        var list = payload.list, title = payload.title;
        return this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/lists/" + list.id + "/tasks", { title: title }, this.httpOptions);
    };
    TaskService.prototype.removeTask = function (payload) {
        var id = payload.id, list = payload.list;
        return this.http
            .delete(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/lists/" + list.id + "/tasks/" + id, this.httpOptions);
    };
    TaskService.prototype.updateTask = function (payload) {
        var task = payload.task, list = payload.list;
        var editPayload = { title: task.title, status: task.status };
        return this.http
            .put(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/lists/" + list.id + "/tasks/" + task.id, editPayload, this.httpOptions);
    };
    TaskService.prototype.removeManyTasks = function (payload) {
        var Ids = payload.Ids, list = payload.list;
        var options = new Object({
            headers: this.httpOptions,
            body: Ids
        });
        return this.http
            .delete(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/lists/" + list.id + "/tasks", options);
    };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/todo/to-do-item/to-do-item.component.css":
/*!**********************************************************!*\
  !*** ./src/app/todo/to-do-item/to-do-item.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width{\r\n  width:100%;\r\n}\r\n\r\n\r\n.example-form {\r\n  min-width: 350px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.card-button{\r\n  float: right;\r\n}\r\n\r\n\r\n.item-card:not last-of-type\r\n{\r\n  margin-bottom: 5px;\r\n  min-width: 180px;\r\n}\r\n\r\n\r\n.done-cb{\r\n  width: calc( 100% - 80px );\r\n  display: inline-block;\r\n}\r\n\r\n\r\n.task-completed{\r\n  text-decoration: line-through;\r\n  color:grey;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90by1kby1pdGVtL3RvLWRvLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjs7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7OztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHFCQUFxQjtBQUN2Qjs7O0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvdG9kby90by1kby1pdGVtL3RvLWRvLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZ1bGwtd2lkdGh7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuXHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMzUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhcmQtYnV0dG9ue1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLml0ZW0tY2FyZDpub3QgbGFzdC1vZi10eXBlXHJcbntcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgbWluLXdpZHRoOiAxODBweDtcclxufVxyXG5cclxuLmRvbmUtY2J7XHJcbiAgd2lkdGg6IGNhbGMoIDEwMCUgLSA4MHB4ICk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi50YXNrLWNvbXBsZXRlZHtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICBjb2xvcjpncmV5O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/todo/to-do-item/to-do-item.component.html":
/*!***********************************************************!*\
  !*** ./src/app/todo/to-do-item/to-do-item.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"item-card\">\n  <mat-card-content>\n    <section>\n      <mat-checkbox *ngIf=\"!editable\" class=\"done-cb\" [checked]=\"isTaskCompleted(task)\" [disabled]=\"isTaskCompleted(task)\" (change)=\"markAsDone($event)\">\n        <span class=\"task-title\" [ngClass]=\"{'task-completed' :isTaskCompleted(task)}\">{{ task.title }}</span>\n      </mat-checkbox>\n\n      <app-editable [model]=\"task\" (doneEdit)=\"doneEditing($event)\" *ngIf=\"editable\"></app-editable>\n\n      <button mat-icon-button class=\"card-button\" (click)=\"delete()\" *ngIf=\"!editable\">\n          <mat-icon>delete</mat-icon>\n        </button>\n\n      <button mat-icon-button class=\"card-button\" (click)=\"edit()\"  *ngIf=\"!editable\">\n          <mat-icon>mode_edit</mat-icon>\n        </button>\n    </section>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/todo/to-do-item/to-do-item.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/todo/to-do-item/to-do-item.component.ts ***!
  \*********************************************************/
/*! exports provided: ToDoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoItemComponent", function() { return ToDoItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/task */ "./src/app/todo/models/task.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_to_do_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/to-do.actions */ "./src/app/store/to-do.actions.ts");
/* harmony import */ var _store_to_do_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/to-do.reducer */ "./src/app/store/to-do.reducer.ts");
/* harmony import */ var _shared_task_status_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/task-status.enum */ "./src/app/todo/shared/task-status.enum.ts");







var ToDoItemComponent = /** @class */ (function () {
    function ToDoItemComponent(store) {
        var _this = this;
        this.store = store;
        this.editable = false;
        store.select(_store_to_do_reducer__WEBPACK_IMPORTED_MODULE_5__["getTodoList"]).
            subscribe(function (d) { return _this.list$ = d.list; });
    }
    ToDoItemComponent.prototype.ngOnInit = function () {
    };
    ToDoItemComponent.prototype.delete = function () {
        this.store.dispatch(new _store_to_do_actions__WEBPACK_IMPORTED_MODULE_4__["RemoveTask"]({ id: this.task.id, list: this.list$ }));
    };
    ToDoItemComponent.prototype.markAsDone = function (e) {
        if (e.checked === true) {
            this.task.status = 'Done';
            this.store.dispatch(new _store_to_do_actions__WEBPACK_IMPORTED_MODULE_4__["EditTask"]({ task: this.task, list: this.list$ }));
        }
    };
    ToDoItemComponent.prototype.edit = function () {
        this.editable = true;
    };
    ToDoItemComponent.prototype.doneEditing = function (task) {
        this.store.dispatch(new _store_to_do_actions__WEBPACK_IMPORTED_MODULE_4__["EditTask"]({ task: this.task, list: this.list$ }));
        this.editable = false;
    };
    ToDoItemComponent.prototype.isTaskCompleted = function (task) {
        return task.status === _shared_task_status_enum__WEBPACK_IMPORTED_MODULE_6__["TaskStatus"].DONE;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_task__WEBPACK_IMPORTED_MODULE_2__["Task"])
    ], ToDoItemComponent.prototype, "task", void 0);
    ToDoItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-to-do-item',
            template: __webpack_require__(/*! ./to-do-item.component.html */ "./src/app/todo/to-do-item/to-do-item.component.html"),
            styles: [__webpack_require__(/*! ./to-do-item.component.css */ "./src/app/todo/to-do-item/to-do-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], ToDoItemComponent);
    return ToDoItemComponent;
}());



/***/ }),

/***/ "./src/app/todo/to-do-list/to-do-list.component.css":
/*!**********************************************************!*\
  !*** ./src/app/todo/to-do-list/to-do-list.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-title{\r\n  margin: 0 auto;\r\n  cursor: pointer;\r\n}\r\n\r\n.lists{\r\n  min-height: 20em;\r\n  padding: 20px 20px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90by1kby1saXN0L3RvLWRvLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG8tZG8tbGlzdC90by1kby1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC10aXRsZXtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5saXN0c3tcclxuICBtaW4taGVpZ2h0OiAyMGVtO1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweCAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/todo/to-do-list/to-do-list.component.html":
/*!***********************************************************!*\
  !*** ./src/app/todo/to-do-list/to-do-list.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lists\"  *ngIf=\"lists\">\n\n<h4 class=\"mat-h4\">\n   My ToDo lists:\n   <button mat-icon-button class=\"card-button\" (click)=\"toggleAdd()\" *ngIf=\"!addNewFlag\">\n    <mat-icon>add</mat-icon>\n  </button>\n\n  <app-editable [model]=\"newList\" (doneEdit)=\"addList($event)\"  *ngIf=\"addNewFlag\"></app-editable>\n\n</h4>\n<mat-toolbar>\n  <mat-toolbar-row *ngFor=\"let list of lists\"  (click)=\"onSelectList(list)\" >\n\n      <span class=\"inline-block list-title\">{{list.title}}</span>\n      <mat-chip-list class=\"inline-block \">\n          <mat-chip color=\"primary\" selected matTooltip=\"All!\" matTooltipPosition=\"right\">{{list.counter }}</mat-chip>\n      </mat-chip-list>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/todo/to-do-list/to-do-list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/todo/to-do-list/to-do-list.component.ts ***!
  \*********************************************************/
/*! exports provided: ToDoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoListComponent", function() { return ToDoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_to_do_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/to-do.actions */ "./src/app/store/to-do.actions.ts");
/* harmony import */ var _store_to_do_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/to-do.reducer */ "./src/app/store/to-do.reducer.ts");
/* harmony import */ var _models_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/List */ "./src/app/todo/models/List.ts");






var ToDoListComponent = /** @class */ (function () {
    function ToDoListComponent(store) {
        var _this = this;
        this.store = store;
        this.addNewFlag = false;
        store.select(_store_to_do_reducer__WEBPACK_IMPORTED_MODULE_4__["getTodoList"])
            .subscribe(function (data) {
            if (data.user) {
                _this.lists = data.user.Lists;
                _this.user = data.user;
            }
        });
    }
    ToDoListComponent.prototype.ngOnInit = function () { };
    ToDoListComponent.prototype.onSelectList = function (list) {
        this.store.dispatch(new _store_to_do_actions__WEBPACK_IMPORTED_MODULE_3__["SetCurrentList"](list));
    };
    ToDoListComponent.prototype.addList = function (list) {
        console.log('addList');
        this.store.dispatch(new _store_to_do_actions__WEBPACK_IMPORTED_MODULE_3__["AddNewList"]({ userId: this.user.id, title: list.title }));
        this.addNewFlag = false;
    };
    ToDoListComponent.prototype.toggleAdd = function () {
        this.newList = new _models_List__WEBPACK_IMPORTED_MODULE_5__["List"]();
        this.addNewFlag = true;
    };
    ToDoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-to-do-list',
            template: __webpack_require__(/*! ./to-do-list.component.html */ "./src/app/todo/to-do-list/to-do-list.component.html"),
            styles: [__webpack_require__(/*! ./to-do-list.component.css */ "./src/app/todo/to-do-list/to-do-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ToDoListComponent);
    return ToDoListComponent;
}());



/***/ }),

/***/ "./src/app/todo/to-do-tasks/to-do-tasks.component.css":
/*!************************************************************!*\
  !*** ./src/app/todo/to-do-tasks/to-do-tasks.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul{\r\n  list-style:none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.task-completed{\r\n  display: inline-block;\r\n  position: relative;\r\n  float: right;\r\n}\r\n\r\n.pseudo-link{\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n  color: blue;\r\n}\r\n\r\n.menu{\r\n  min-width:340px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90by1kby10YXNrcy90by1kby10YXNrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsV0FBVztBQUNiOztBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG8tZG8tdGFza3MvdG8tZG8tdGFza3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVse1xyXG4gIGxpc3Qtc3R5bGU6bm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnRhc2stY29tcGxldGVke1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ucHNldWRvLWxpbmt7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGNvbG9yOiBibHVlO1xyXG59XHJcbi5tZW51e1xyXG4gIG1pbi13aWR0aDozNDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/todo/to-do-tasks/to-do-tasks.component.html":
/*!*************************************************************!*\
  !*** ./src/app/todo/to-do-tasks/to-do-tasks.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  *ngIf=\"list\">\n\n  <div class=\"menu\">\n\n  {{list.title}}\n  <mat-chip-list class=\"inline-block\">\n      <mat-chip color=\"accent\" selected  matTooltip=\"Non completed!\" matTooltipPosition=\"right\">{{len}}</mat-chip>\n  </mat-chip-list>\n</div>\n<app-new-task></app-new-task>\n<mat-checkbox [checked]=\"onlyNonCompleted\" (change)=\"onlyNonCompleted=!onlyNonCompleted\">\n   Non conmpleted only\n  </mat-checkbox>\n<span class=\"task-completed\">\n  <a mat-button routerLink=\".\" (click)=\"removeCompleted()\">remove completed</a>\n</span>\n<mat-divider></mat-divider>\n\n<ul >\n    <li *ngFor=\"let task of tasks| nonCompleted: onlyNonCompleted  \">\n\n      <app-to-do-item [task]=\"task\"></app-to-do-item>\n    </li>\n</ul>\n\n</div>\n"

/***/ }),

/***/ "./src/app/todo/to-do-tasks/to-do-tasks.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/todo/to-do-tasks/to-do-tasks.component.ts ***!
  \***********************************************************/
/*! exports provided: ToDoTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoTasksComponent", function() { return ToDoTasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_task_status_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/task-status.enum */ "./src/app/todo/shared/task-status.enum.ts");
/* harmony import */ var _store_to_do_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/to-do.reducer */ "./src/app/store/to-do.reducer.ts");
/* harmony import */ var _store_to_do_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/to-do.actions */ "./src/app/store/to-do.actions.ts");






var ToDoTasksComponent = /** @class */ (function () {
    function ToDoTasksComponent(store) {
        var _this = this;
        this.store = store;
        this.onlyNonCompleted = false;
        store.select(_store_to_do_reducer__WEBPACK_IMPORTED_MODULE_4__["getTodoList"])
            .subscribe(function (d) {
            if (d.list) {
                _this.tasks = d.list.tasks;
                _this.list = d.list;
                if (_this.tasks) {
                    _this.len = (_this.tasks.filter(function (t) { return t.status === _shared_task_status_enum__WEBPACK_IMPORTED_MODULE_3__["TaskStatus"].NORMAL; })).length;
                }
            }
        });
    }
    ToDoTasksComponent.prototype.ngOnInit = function () {
    };
    ToDoTasksComponent.prototype.removeCompleted = function () {
        var taskToRemove = this.tasks.filter(function (t) { return t.status === _shared_task_status_enum__WEBPACK_IMPORTED_MODULE_3__["TaskStatus"].DONE; }).map(function (t) { return t.id; });
        this.store.dispatch(new _store_to_do_actions__WEBPACK_IMPORTED_MODULE_5__["RemovAllDoneTask"]({ list: this.list, Ids: taskToRemove }));
    };
    ToDoTasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-to-do-tasks',
            template: __webpack_require__(/*! ./to-do-tasks.component.html */ "./src/app/todo/to-do-tasks/to-do-tasks.component.html"),
            styles: [__webpack_require__(/*! ./to-do-tasks.component.css */ "./src/app/todo/to-do-tasks/to-do-tasks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ToDoTasksComponent);
    return ToDoTasksComponent;
}());



/***/ }),

/***/ "./src/app/user-managment/login/login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/user-managment/login/login.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-title{\r\n  height: 250px;\r\n  padding: 10%;\r\n}\r\n\r\np{\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1tYW5hZ21lbnQvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC91c2VyLW1hbmFnbWVudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItdGl0bGV7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBwYWRkaW5nOiAxMCU7XHJcbn1cclxuXHJcbnB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user-managment/login/login.component.html":
/*!***********************************************************!*\
  !*** ./src/app/user-managment/login/login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"user-title\">\n<form class=\"example-form\">\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Your name\" [(ngModel)]=\"username\" name=\"username\"/>\n    </mat-form-field>\n    <button mat-raised-button (click)=\"login()\" >Login</button>\n\n  </form>\n  <input matInput placeholder=\"Your name\" [(ngModel)]=\"newuser\" />\n  <a mat-button routerLink=\".\" (click)=\"signup()\">Signup</a>\n\n<div *ngIf=\"user\">\n  <p>Welcome back {{user.name}}</p>\n\n</div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/user-managment/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user-managment/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_to_do_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/to-do.actions */ "./src/app/store/to-do.actions.ts");
/* harmony import */ var _store_to_do_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/to-do.reducer */ "./src/app/store/to-do.reducer.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(store) {
        var _this = this;
        this.store = store;
        this.store.select(_store_to_do_reducer__WEBPACK_IMPORTED_MODULE_4__["getTodoList"]).
            subscribe(function (data) { return _this.user = data.user; });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        console.log('Login pressed');
        this.store.dispatch(new _store_to_do_actions__WEBPACK_IMPORTED_MODULE_3__["UserLogin"]({ name: this.username }));
    };
    LoginComponent.prototype.signup = function () {
        this.store.dispatch(new _store_to_do_actions__WEBPACK_IMPORTED_MODULE_3__["Signup"]({ name: this.newuser }));
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user-managment/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user-managment/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user-managment/models/user.ts":
/*!***********************************************!*\
  !*** ./src/app/user-managment/models/user.ts ***!
  \***********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return User;
}());



/***/ }),

/***/ "./src/app/user-managment/shared/user.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/user-managment/shared/user.service.ts ***!
  \*******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/user */ "./src/app/user-managment/models/user.ts");
/* harmony import */ var _todo_models_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../todo/models/List */ "./src/app/todo/models/List.ts");
/* harmony import */ var src_app_core_shared_HttpsHeaders__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/shared/HttpsHeaders */ "./src/app/core/shared/HttpsHeaders.ts");










var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.httpOptions = Object(src_app_core_shared_HttpsHeaders__WEBPACK_IMPORTED_MODULE_9__["CustomHttpOptions"])();
    }
    UserService.prototype.login = function (user) {
        var _this = this;
        var payload = { name: user.name };
        return this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/users/login", payload)
            .map(function (response) { return _this.buildUserData(response); });
    };
    UserService.prototype.signup = function (newuser) {
        var _this = this;
        var payload = { name: newuser.name };
        return this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/users/signup", payload)
            .map(function (response) { return _this.buildUserData(response); });
    };
    UserService.prototype.addList = function (payload) {
        var _this = this;
        var userId = payload.userId, title = payload.title;
        return this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/users/" + userId + "/lists", { title: title }, this.httpOptions)
            .map(function (response) { return _this.buildUserData(response); });
    };
    UserService.prototype.buildUserData = function (response) {
        var lists = response.result.lists
            .map(function (list) {
            return new _todo_models_List__WEBPACK_IMPORTED_MODULE_8__["List"]({ id: list._id, title: list.title, userId: list.userId, counter: list.counter });
        });
        return new _models_user__WEBPACK_IMPORTED_MODULE_7__["User"]({
            id: response.result.user._id,
            name: response.result.user.name,
            Lists: lists
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:4000',
    httpsHeaders: { 'Content-Type': 'application/json' }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Programing\LearningPrograming\intelEx\app\todolist\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
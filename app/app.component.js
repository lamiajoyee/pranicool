"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var about_component_1 = require('./about.component');
var main_component_1 = require('./main.component');
var gallery_component_1 = require('./gallery.component');
var prani_service_1 = require('./prani.service');
/// <reference path="/greensock.d.ts" />
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'praniCool-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [router_deprecated_1.ROUTER_PROVIDERS, prani_service_1.PraniService]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/about',
                name: 'About',
                component: about_component_1.AboutComponent
            },
            {
                path: '/main',
                name: 'Main',
                component: main_component_1.MainComponent,
                useAsDefault: true
            },
            {
                path: '/gallery',
                name: 'Gallery',
                component: gallery_component_1.GalleryComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
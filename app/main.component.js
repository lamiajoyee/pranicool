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
var prani_service_1 = require('./prani.service');
var mishiKalu_component_1 = require('./single-components/mishiKalu.component');
var biha_component_1 = require('./single-components/biha.component');
var pandua_component_1 = require('./single-components/pandua.component');
var morgan_component_1 = require('./single-components/morgan.component');
var hedgju_component_1 = require('./single-components/hedgju.component');
var pilu_component_1 = require('./single-components/pilu.component');
var rio_component_1 = require('./single-components/rio.component');
var ripu_component_1 = require('./single-components/ripu.component');
var sheepy_component_1 = require('./single-components/sheepy.component');
var timothy_component_1 = require('./single-components/timothy.component');
var timothyRoom_component_1 = require('./single-components/rooms/timothyRoom.component');
var bihaRoom_component_1 = require('./single-components/rooms/bihaRoom.component');
var piluRoom_component_1 = require('./single-components/rooms/piluRoom.component');
var sheepyRoom_component_1 = require('./single-components/rooms/sheepyRoom.component');
var MainComponent = (function () {
    function MainComponent(router, praniService) {
        this.router = router;
        this.praniService = praniService;
    }
    MainComponent.prototype.getPranis = function () {
        var _this = this;
        this.praniService.getPranis().then(function (pranis) { return _this.pranis = pranis; });
    };
    MainComponent.prototype.ngOnInit = function () {
        this.getPranis();
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'praniCool-main',
            templateUrl: 'app/main.component.html',
            styleUrls: ['app/main.component.css'],
            directives: [mishiKalu_component_1.MishiKaluComponent, timothy_component_1.TimothyComponent, timothyRoom_component_1.TimothyRoomComponent, sheepy_component_1.SheepyComponent, sheepyRoom_component_1.SheepyRoomComponent, ripu_component_1.RipuComponent, biha_component_1.BihaComponent, bihaRoom_component_1.BihaRoomComponent, pandua_component_1.PanduaComponent, morgan_component_1.MorganComponent, hedgju_component_1.HedgjuComponent, pilu_component_1.PiluComponent, piluRoom_component_1.PiluRoomComponent, rio_component_1.RioComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, prani_service_1.PraniService])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map
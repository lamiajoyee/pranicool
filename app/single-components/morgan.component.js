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
var MorganComponent = (function () {
    function MorganComponent(router, elementRef) {
        var _this = this;
        this.router = router;
        this.elementRef = elementRef;
        setInterval(function () { _this.myAction(); }, 1000 * 7);
    }
    MorganComponent.prototype.ngOnInit = function () {
        this.group = this.elementRef.nativeElement;
        this.earRight = this.group.querySelectorAll("#rightEar");
        this.earLeft = this.group.querySelectorAll("#leftEar");
        this.eyeRight = this.group.querySelectorAll("#rightEye");
        this.eyeLeft = this.group.querySelectorAll("#leftEye");
        this.smile = this.group.querySelectorAll("#smile");
        this.tongue = this.group.querySelectorAll("#tongue");
        this.mouthOpen = this.group.querySelectorAll("#openMouth");
        this.head = this.group.querySelectorAll("#head");
        this.crasht1 = new TimelineMax({
            paused: true
        });
        this.crasht1.to(this.smile, 0.4, { scaleY: 0.2, transformOrigin: "50% 100%" })
            .to(this.smile, 0.4, { scaleX: 0.2, transformOrigin: "50% 120%" })
            .to(this.smile, 0.2, { skewX: 180, transformOrigin: "50% 110%" });
        this.eyeAnimationLeft = new TimelineMax({
            paused: true
        });
        this.eyeAnimationLeft.to(this.eyeLeft, 0, { scaleY: 0.2, transformOrigin: "50% 50%" })
            .to(this.eyeLeft, 0, { scaleY: 0.2, transformOrigin: "50% 50%" })
            .to(this.eyeLeft, 0.2, { scaleY: 1, transformOrigin: "50% 50%" })
            .to(this.eyeLeft, 0, { scaleY: 1, transformOrigin: "50% 50%" });
        this.eyeAnimationRight = new TimelineMax({
            paused: true
        });
        this.eyeAnimationRight.to(this.eyeRight, 0, { scaleY: 0.2, transformOrigin: "50% 50%" })
            .to(this.eyeRight, 0, { scaleY: 0.2, transformOrigin: "50% 50%" })
            .to(this.eyeRight, 0.2, { scaleY: 1, transformOrigin: "50% 50%" })
            .to(this.eyeRight, 0, { scaleY: 1, transformOrigin: "50% 50%" });
        this.talkTalk = new TimelineMax({
            paused: true
        });
        this.talkTalk
            .to(this.mouthOpen, 0, { visibility: "visible" })
            .to(this.mouthOpen, 0.2, { scaleY: 0.9 })
            .to(this.mouthOpen, 0.2, { scaleY: 1 })
            .to(this.mouthOpen, 0.5, { scaleY: 0.9 })
            .to(this.mouthOpen, 0.1, { scaleY: 1 })
            .to(this.mouthOpen, 0.1, { opacity: 0 })
            .to(this.smile, 0.3, { opacity: 1 });
    };
    MorganComponent.prototype.myAction = function () {
        this.eyeAnimationLeft.restart();
        this.eyeAnimationLeft.play();
        this.eyeAnimationRight.restart();
        this.eyeAnimationRight.play();
    };
    MorganComponent = __decorate([
        core_1.Component({
            selector: 'morgan',
            templateUrl: 'app/svg/Morgan.svg'
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, core_1.ElementRef])
    ], MorganComponent);
    return MorganComponent;
}());
exports.MorganComponent = MorganComponent;
//# sourceMappingURL=morgan.component.js.map
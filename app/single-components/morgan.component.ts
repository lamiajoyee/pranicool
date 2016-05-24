import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'morgan',
  templateUrl: 'app/svg/Morgan.svg'
})

export class MorganComponent implements OnInit {
     
     group:any;
     earRight:any;
     earLeft:any;
     eyeRight:any;
     eyeLeft:any;
     smile:any;
     tongue:any;
     mouthOpen:any;
     head:any;
     crasht1:TimelineMax;
     eyeAnimationLeft:TimelineMax;
     eyeAnimationRight:TimelineMax;
     talkTalk:TimelineMax;
     
     constructor(private router: Router, private elementRef: ElementRef){
         setInterval(() => { this.myAction(); }, 1000*7 );
     }
       
        ngOnInit() {
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
            
            this.crasht1.to(this.smile, 0.4, { scaleY: 0.2, transformOrigin: "50% 100%"})
                .to(this.smile, 0.4, { scaleX: 0.2, transformOrigin: "50% 120%"})
                .to(this.smile, 0.2, { skewX: 180, transformOrigin: "50% 110%"});
              
              
            this.eyeAnimationLeft = new TimelineMax({
              paused: true
            });
            
            this.eyeAnimationLeft.to(this.eyeLeft, 0, { scaleY: 0.2, transformOrigin: "50% 50%"})
                  .to(this.eyeLeft, 0, { scaleY: 0.2, transformOrigin: "50% 50%"})
                  .to(this.eyeLeft, 0.2, { scaleY: 1, transformOrigin: "50% 50%"})
                  .to(this.eyeLeft, 0, { scaleY: 1, transformOrigin: "50% 50%"});
            
            
            this.eyeAnimationRight = new TimelineMax({
              paused: true
            });
            this.eyeAnimationRight.to(this.eyeRight, 0, { scaleY: 0.2, transformOrigin: "50% 50%"})
                  .to(this.eyeRight, 0, { scaleY: 0.2, transformOrigin: "50% 50%"})
                  .to(this.eyeRight, 0.2, { scaleY: 1, transformOrigin: "50% 50%"})
                  .to(this.eyeRight, 0, { scaleY: 1, transformOrigin: "50% 50%"})
                  
              
            this.talkTalk = new TimelineMax({
              paused: true
            });
            
            this.talkTalk
                .to(this.mouthOpen, 0, { visibility:"visible"})
                .to(this.mouthOpen, 0.2, { scaleY:0.9})
                .to(this.mouthOpen, 0.2, { scaleY:1})
              .to(this.mouthOpen, 0.5, { scaleY:0.9})
                .to(this.mouthOpen, 0.1, { scaleY:1})
              .to(this.mouthOpen, 0.1, { opacity:0})
              .to(this.smile, 0.3, { opacity:1});


            
          
            
        }
  
  myAction() {
                this.eyeAnimationLeft.restart();
                this.eyeAnimationLeft.play();
                this.eyeAnimationRight.restart();
                this.eyeAnimationRight.play();
            }
}



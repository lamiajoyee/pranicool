import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Prani } from './prani';
import { PraniService } from './prani.service';

import { MishiKaluComponent } from './single-components/mishiKalu.component';
import { BihaComponent } from './single-components/biha.component';
import { PanduaComponent } from './single-components/pandua.component';
import { MorganComponent } from './single-components/morgan.component';
import { HedgjuComponent } from './single-components/hedgju.component';
import { PiluComponent } from './single-components/pilu.component';
import { RioComponent } from './single-components/rio.component';
import { RipuComponent } from './single-components/ripu.component';
import { SheepyComponent } from './single-components/sheepy.component';
import { TimothyComponent } from './single-components/timothy.component';

import { TimothyRoomComponent } from './single-components/rooms/timothyRoom.component';
import { BihaRoomComponent } from './single-components/rooms/bihaRoom.component';
import { PiluRoomComponent } from './single-components/rooms/piluRoom.component';
import { SheepyRoomComponent } from './single-components/rooms/sheepyRoom.component';


@Component({
  selector: 'praniCool-main',
  templateUrl: 'app/main.component.html',
  styleUrls: ['app/main.component.css'],
  directives: [MishiKaluComponent, TimothyComponent, TimothyRoomComponent, SheepyComponent, SheepyRoomComponent, RipuComponent, BihaComponent, BihaRoomComponent, PanduaComponent, MorganComponent, HedgjuComponent, PiluComponent, PiluRoomComponent, RioComponent]
})

export class MainComponent implements OnInit {
    
  pranis: Prani[];

  constructor(
    private router: Router,
    private praniService: PraniService) {
  }

  getPranis() {
    this.praniService.getPranis().then(pranis => this.pranis = pranis);
  }

  ngOnInit() {
    this.getPranis();
  }

 
}


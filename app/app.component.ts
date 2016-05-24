import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { AboutComponent } from './about.component';
import { MainComponent } from './main.component';
import { GalleryComponent } from './gallery.component';
import { PraniService } from './prani.service';

/// <reference path="/greensock.d.ts" />

 
@Component({
  selector: 'praniCool-app',
  templateUrl: 'app/app.component.html',
  styleUrls:['app/app.component.css'],
  directives:[ROUTER_DIRECTIVES],
  providers:[ROUTER_PROVIDERS, PraniService]
})

@RouteConfig([
  {
    path: '/about',
    name: 'About',
    component:AboutComponent
  },
  {
    path: '/main',
    name: 'Main',
    component: MainComponent,
    useAsDefault: true
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: GalleryComponent
  }
])

export class AppComponent { }
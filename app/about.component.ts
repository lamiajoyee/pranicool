import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'praniCool-about',
  templateUrl: 'app/about.component.html',
  styleUrls: ['app/about.component.css']
})

export class AboutComponent{
     constructor(private router: Router){
  }


}


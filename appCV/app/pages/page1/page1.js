import {Page, NavController} from 'ionic-angular'

// Pages

import {Page2} from '../page2/page2';

@Page({
  template: `
    <ion-navbar *navbar>
      <ion-title  >Homi</ion-title>
    </ion-navbar>
    
   <ion-content class="has-header components-demo cards-bg">

<ion-card class="advanced-background" (click)="goTEST()">
  <img src="img/5.jpg"/>
  <p class="advanced-background-title">About me</p>

</ion-card >

<ion-card class="advanced-background">
  <img class="advanced-background-img" src="img/6.jpg"/>
  <p class="advanced-background-title">  <ion-icon ios="ios-code-working" md="md-code-working"></ion-icon> Projects    <ion-icon ios="ios-code-working" md="md-code-working"></ion-icon></p>
</ion-card>

</ion-content>
  `
})
export class Page1 {
  static get parameters() {
            return [[NavController]];
        }
        constructor(nav) {
            this.nav = nav;
             
        }

      goTEST() {
    this.nav.push(Page2)
  }
  

}

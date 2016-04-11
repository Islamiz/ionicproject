import {Page, NavController} from 'ionic-angular'
import {Page3} from '../page3/page3';
import {Page4} from '../page4/page4';
import {Page5} from '../page5/page5';
import {Page6} from '../page6/page6';


@Page({
  template: `
<ion-navbar *navbar>
  <ion-title>
    ... About me 
  </ion-title>
</ion-navbar>



<ion-content class="has-header components-demo cards-bg">




		<ion-card class="advanced-background" (click)="goTEST2()">
		  <img src="img/31.jpg"/>
		  <p class="advanced-background-title">Who Am I ?</p>

		</ion-card >





		<ion-card class="advanced-background" (click)="goExperiences()" >
		  <img class="advanced-background-img" src="img/skill.jpg"/>
		  <p class="advanced-background-title">	 Experiences</p>
		</ion-card>




		<ion-card class="advanced-background" (click)="goSKILL()">
		  <img src="img/Who.jpg"/>
		  <p class="advanced-background-title">Skill</p>
		</ion-card>



		<ion-card class="advanced-background" (click)="goHoobies()">
		  <img src="img/4.jpg"/>
		  <p class="advanced-background-title">Hobbies</p>
		</ion-card>



</ion-content>
`

})
export class Page2 {
static get parameters() {
            return [[NavController]];
        }
        constructor(nav) {
            this.nav = nav;
             
        }

      goTEST2() {
    this.nav.push(Page3)
  }
       goSKILL() {
    this.nav.push(Page4)
  }
  
         goExperiences() {
    this.nav.push(Page5)
  }
  
  
           goHoobies() {
    this.nav.push(Page6)
  }
  
}

import {Platform,Page,NavController,NavParams} from 'ionic-angular';

import {Page1} from '../page1/page1';

@Page({
 	template: `
	
<ion-navbar *navbar>
  <ion-title>
   Who am i 
  </ion-title>
</ion-navbar>

<ion-content class="has-header components-demo cards-bg">


<ion-slides pager>
 
 <ion-slide class="mee">
    <ion-row>
        <ion-col>
            <img src="img/me.png" />
        </ion-col>
    </ion-row>
	
    <ion-row>
      <h4><b>Name : </b><i>Islam Benzaied  </i></h4>&nbsp;&nbsp;&nbsp;&nbsp;
	    <h4><b>Age : </b><i>20 ans</i></h4>
		
    </ion-row>

	<ion-row>
      <h4 ><b>Phone Number : </b><i>06.68.76.26.39</i></h4>
    </ion-row>
	
    <ion-row>
      <h4 class="adress"><b>Address :</b><i>1 Squar du vars, Paris 75020 </i></h4>
    </ion-row>
	
	<ion-row>
      <h4 ><b>Email : </b><i>ben.zaiedislem75@gmail.com</i></h4>
    </ion-row>
	
	<ion-row>
      <h4 ><b>Language : </b><i>English, French, Arabic</i></h4>
    </ion-row>
	
  </ion-slide>
  
  
  
  
  
  
 <ion-slide class="me">
    <ion-row>
        <ion-col>
            <img src="img/pro.png" />
        </ion-col>
    </ion-row>
	
    <ion-row>
	
			 <h4> <h1> <b> I like programming </b> </h1>
			<i>But I must explain to you how all this mistaken idea of denouncing pleasure 
			and praising pain was born and I will give you a complete account of the system,
			but because those who do not know how to pursue pleasure rationally encounter  
			</i> </h4> 
			
    </ion-row>
	
  </ion-slide>
  
  
  
  
  
  
 <ion-slide class="code">
    <ion-row>
        <ion-col>
            <img src="img/lol.png" />
        </ion-col>
    </ion-row>
    <ion-row>
        <ion-col>
            <button light (click)="goToHome()">Go to Know me !</button>
        </ion-col>
    </ion-row>
  </ion-slide>
 

 
 
 
 
 
 
 
 
</ion-slides>
</ion-content>
`
})
export class Page3 {
	

	
	static get parameters() {

        
            return [[NavController]];
	}
        
        
		

		

	
constructor(nav) {
	
	
	
	this.nav = nav;
 

  }
  
  		  goToHome() {
    this.nav.push(Page1);
  }
}

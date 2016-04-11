import {Platform,Page,NavController,NavParams} from 'ionic-angular';

import {Page1} from '../page1/page1';

@Page({
 	template: `
	
<ion-navbar *navbar>
  <ion-title>
    Hobbies
  </ion-title>
</ion-navbar>

<ion-content class="has-header components-demo cards-bg">


<ion-slides pager>
 
 <ion-slide class="me">
    <ion-row>
        <ion-col>
            <img src="img/manga.png" />
        </ion-col>
    </ion-row>
	
    <ion-row>
	
			 <h4> <h1> <b>  I like manga ! </b> </h1>
			<i>But I must explain to you how all this mistaken idea of denouncing pleasure 
			and praising pain was born and I will give you a complete account of the system,
			but because those who do not know how to pursue pleasure rationally encounter  
			</i> </h4> 
			
    </ion-row>
	
  </ion-slide>
  
  
  
  
  
  
 <ion-slide class="me">
    <ion-row>
        <ion-col>
            <img src="img/manga2.jpg" />
        </ion-col>
    </ion-row>
	
    <ion-row>
	
			 <h4> <h1> <b> Playing Video Games </b> </h1>
			<i>But I must explain to you how all this mistaken idea of denouncing pleasure 
			and praising pain was born and I will give you a complete account of the system,
			but because those who do not know how to pursue pleasure rationally encounter  
			</i> </h4> 
			
    </ion-row>
	
  </ion-slide>
  
  
  
  
  
  
 <ion-slide class="me">
    <ion-row>
        <ion-col>
            <img src="img/manga3.jpg" />
        </ion-col>
    </ion-row>
	
    <ion-row>
	
			 <h4> <h1> <b> Boxe thai </b> </h1>
			<i>But I must explain to you how all this mistaken idea of denouncing pleasure 
			and praising pain was born and I will give you a complete account of the system,
			but because those who do not know how to pursue pleasure rationally encounter  
			</i> </h4> 
			
    </ion-row>
	
  </ion-slide>
  
  
  
   <ion-slide class="me">
    <ion-row>
        <ion-col>
            <img src="img/manga4.jpg" />
        </ion-col>
    </ion-row>
	
    <ion-row>
	
			 <h4> <h1> <b> I love Food ... </b> </h1>
			<i>But I must explain to you how all this mistaken idea of denouncing pleasure 
			and praising pain was born and I will give you a complete account of the system,
			but because those who do not know how to pursue pleasure rationally encounter  
			</i> </h4> 
			
    </ion-row>
	
  </ion-slide>
  
  
  
  
  
     <ion-slide class="me">
    <ion-row>
        <ion-col>
            <img src="img/manga5.jpg" />
        </ion-col>
    </ion-row>
	
    <ion-row>
	
			 <h4> <h1> <b> I want to see the world </b> </h1>
			<i>But I must explain to you how all this mistaken idea of denouncing pleasure 
			and praising pain was born and I will give you a complete account of the system,
			but because those who do not know how to pursue pleasure rationally encounter  
			</i> </h4> 
			
    </ion-row>
	
  </ion-slide>
  

 
 
 
 
 
</ion-slides>
</ion-content>
`
})

export class Page6 {

constructor() {
	


  }

}
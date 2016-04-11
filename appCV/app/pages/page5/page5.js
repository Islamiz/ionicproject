import {Page, NavController} from 'ionic-angular'
import {Page3} from '../page3/page3';
import {Page4} from '../page4/page4';


@Page({
  template: `
<ion-navbar *navbar  >
  <ion-title >
Experiences
  </ion-title>
</ion-navbar>



<ion-content class="has-header components-demo cards-bg" >



  
  
  <ion-card>

    <div>
      <img src="img/allo.png"/>
    </div>

    <ion-card-content>
      <h1 class="card-title" violeta > 
		<i> Switchboard operator  </i>
      </h1>
      <p>
         occur in which toil and pain can procure him some great pleasure. To take a trivial example, 
		which of us ever undertakes laborious physical exercise, except to obtain some advantage 
      </p>
    </ion-card-content>

    <ion-row no-padding>
      <ion-col>
        <button clear small danger>
        2009 - 2016 
        </button>
      </ion-col>
      <ion-col text-center>
        <button clear small danger>
          8 ans 
        </button>
      </ion-col>
      <ion-col text-right>
        <button clear small danger>
          
        All year
        </button>
      </ion-col>
    </ion-row>

  </ion-card>











  <ion-card>

    <img src="img/poly.jpg"/>

    <ion-card-content>
      <h1 class="card-title" violeta>
        <i> Animator </i> 
      </h1>
      <p>
         occur in which toil and pain can procure him some great pleasure. To take a trivial example, 
		 which of us ever undertakes laborious physical exercise, except to obtain some advantage 
      </p>
    </ion-card-content>

    <ion-row no-padding>
      <ion-col>
        <button clear small danger>
          2013 - 2015 
        </button>
      </ion-col>
      <ion-col text-center>
        <button clear small danger>
          3 ans 
        </button>
      </ion-col>
      <ion-col text-right>
        <button clear small danger>
           june - august
        </button>
      </ion-col>
    </ion-row>

  </ion-card>

  
  
  

  
  
  <ion-card>

    <div>
      <img src="img/clean.jpg"/>
    </div>

    <ion-card-content>
      <h1 class="card-title" violeta>
       <i>  Cleaner  </i>
      </h1>
      <p>
         occur in which toil and pain can procure him some great pleasure. To take a trivial example, 
		which of us ever undertakes laborious physical exercise, except to obtain some advantage 
      </p>
    </ion-card-content>

    <ion-row no-padding>
      <ion-col>
        <button clear small danger>
          2015
        </button>
      </ion-col>
      <ion-col text-center>
        <button clear small danger>
          2 months
        </button>
      </ion-col>
      <ion-col text-right>
        <button clear small danger>
         may - june
        </button>
      </ion-col>
    </ion-row>

  </ion-card>

  
  
  


</ion-content>
`

})
export class Page5 {

        constructor() {
        }


}

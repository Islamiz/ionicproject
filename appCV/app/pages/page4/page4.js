import {Platform,Page,NavController,NavParams} from 'ionic-angular';



@Page({
 	template: `
	
<ion-navbar *navbar>
  <ion-title>
   Skills
  </ion-title>
</ion-navbar>

<ion-content class="has-header demo-list-cons">
  <ion-list>

    <ion-list-header> <b> Technologies Web </b> </ion-list-header>
	
	
	
	

    <ion-item>
      <ion-avatar item-left>
        <img src="img/HTML5.png">
      </ion-avatar>
      <h2>HTML </h2>
        <ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon>
		<ion-icon ios="ios-star" md="md-star"></ion-icon>  
		<ion-icon ios="ios-star" md="md-star"></ion-icon>  
		
    </ion-item>
	
	
	
    <ion-item>
      <ion-avatar item-left>
        <img src="img/jade.png">
      </ion-avatar>
      <h2>JADE</h2>
        <ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon>
		<ion-icon ios="ios-star" md="md-star"></ion-icon>  
		<ion-icon ios="ios-star" md="md-star"></ion-icon>  
		
    </ion-item>
	
	
	
	
	
	
	
	
    <ion-item>
      <ion-avatar item-left>
        <img src="img/css3.png">
      </ion-avatar>
      <h2>CSS </h2>
        <ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon>
		<ion-icon ios="ios-star" md="md-star"></ion-icon>  
		<ion-icon ios="ios-star-half" md="md-star-half"></ion-icon>    
		
    </ion-item>
	
	
    <ion-item>
      <ion-avatar item-left>
        <img src="img/php.png">
      </ion-avatar>
      <h2>PHP </h2>
        <ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon>
		<ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon> 
		<ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon>
		
    </ion-item>
	
	
	

	
	
	
    <ion-item>
      <ion-avatar item-left>
        <img src="img/js.png">
      </ion-avatar>
      <h2>JavaScript</h2>
        <ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon>
		<ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon> 
		<ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon> 
		
    </ion-item>


	
    <ion-item>
      <ion-avatar item-left>
        <img src="img/nodejs.png">
      </ion-avatar>
      <h2>NodeJs </h2>
        <ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star-half" md="md-star-half"></ion-icon>    
		<ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon> 
		<ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon>  
		
    </ion-item>
	
	
  

  </ion-list>
  
  
  
  
  
  
  
  

  <ion-list>

    <ion-list-header> <b> Database </b> </ion-list-header>

    <ion-item>
      <ion-avatar item-left>
        <img src="img/mysql.png">
      </ion-avatar>
      <h2>MySQL</h2>
        <ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon>
		<ion-icon ios="ios-star-half" md="md-star-half"></ion-icon>  
		<ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon> 
		
    </ion-item>


	
    <ion-item>
      <ion-avatar item-left>
        <img src="img/mongo.png">
      </ion-avatar>
      <h2>Mongo DB </h2>
        <ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon>   
		<ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon> 
		<ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon>  
		
    </ion-item>

	

  </ion-list>
  
  
  
  
  
  
  <ion-list>

    <ion-list-header> <b> Programmation  </b></ion-list-header>

    <ion-item>
      <ion-avatar item-left>
        <img src="img/c.png">
      </ion-avatar>
      <h2>Langage C </h2>
        <ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon>
		<ion-icon ios="ios-star-half" md="md-star-half"></ion-icon>  
		<ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon> 
		
    </ion-item>

	

	
    <ion-item>
      <ion-avatar item-left>
        <img src="img/c++.png">
      </ion-avatar>
      <h2> C++ </h2>
        <ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon>   
		<ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon> 
		<ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon>  
		
    </ion-item>
	
	
	
    <ion-item>
      <ion-avatar item-left>
        <img src="img/java.png">
      </ion-avatar>
      <h2>Java</h2>
        <ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star-half" md="md-star-half"></ion-icon>
		<ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon> 
		<ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon> 
		
    </ion-item>

	
    <ion-item>
      <ion-avatar item-left>
        <img src="img/shell.png">
      </ion-avatar>
      <h2>Shell </h2>
        <ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star-half" md="md-star-half"></ion-icon>
		<ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon> 
		<ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon>   
		
    </ion-item>

	

  </ion-list>
  
  
  
  
   <ion-list>

    <ion-list-header>  <b> Applications  </b> </ion-list-header>

    <ion-item>
      <ion-avatar item-left>
        <img src="img/office.jpg">
      </ion-avatar>
      <h2>Pack Office</h2>
        <ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon>
		<ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon>
		
    </ion-item>

	

	
    <ion-item>
      <ion-avatar item-left>
        <img src="img/android.png">
      </ion-avatar>
      <h2>Android Studio</h2>
        <ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon>   
	    <ion-icon ios="ios-star-half" md="md-star-half"></ion-icon>
		<ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon>  
		
    </ion-item>
	
	
	
    <ion-item>
      <ion-avatar item-left>
        <img src="img/solid.png">
      </ion-avatar>
      <h2>Solidwoks</h2>
        <ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon>   
	    <ion-icon ios="ios-star-half" md="md-star-half"></ion-icon>
		<ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon> 
		
    </ion-item>

	
    <ion-item>
      <ion-avatar item-left>
        <img src="img/photosh.png">
      </ion-avatar>
      <h2>Photoshop </h2>
        <ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star-half" md="md-star-half"></ion-icon>
		<ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon> 
		<ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon>   
		
    </ion-item>

	

  </ion-list>
  

  

 
 
  <ion-list>

    <ion-list-header>  <b> CMS   </b> </ion-list-header>

    <ion-item>
      <ion-avatar item-left>
        <img src="img/presta.png">
      </ion-avatar>
      <h2> Prestashop </h2>
        <ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon>
		<ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon> 
		
    </ion-item>


	
    <ion-item>
      <ion-avatar item-left>
        <img src="img/wordpress.png">
      </ion-avatar>
      <h2> Wordpress </h2>
        <ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon>   
		<ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon> 
		<ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon>  
		
    </ion-item>

	

  </ion-list>
  
  
  
  
  
  <ion-list>

    <ion-list-header>  <b> Operating System  </b> </ion-list-header>

    <ion-item>
      <ion-avatar item-left>
        <img src="img/windows.png">
      </ion-avatar>
      <h2> Windows </h2>
        <ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon>
		<ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon> 
		
    </ion-item>


	
    <ion-item>
      <ion-avatar item-left>
        <img src="img/ubuntu.png">
      </ion-avatar>
      <h2 > Ubuntu </h2>
        <ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon>   
		<ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star-half" md="md-star-half"></ion-icon>
		
    </ion-item>
	

    <ion-item>
      <ion-avatar item-left>
        <img src="img/mac.png">
      </ion-avatar>
      <h2> Mac os </h2>
        <ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon> 
		<ion-icon ios="ios-star" md="md-star"></ion-icon>   
		<ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon> 
		<ion-icon ios="ios-star-outline" md="md-star-outline"></ion-icon>  
		
    </ion-item>

	

  </ion-list>
  
  
  
  
  
  
  
  
 

</ion-content>
`
})
export class Page4 {
	

	
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

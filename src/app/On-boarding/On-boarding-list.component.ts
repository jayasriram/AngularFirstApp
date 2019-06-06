import { Component } from '@angular/core'

@Component({
    selector: 'On-boarding-list',
    template:`
   
    <div class="mat-app-background">
    <h1> Data : QA On Boarding List</h1>       
    <hr/>
    <div class="list" id="list">
    <On-boarding-thumbnail (eventClick) = "handleEventClicked($event)"
     [Training]="Training1"></On-boarding-thumbnail>    
    <h2>{{Training1.name}}</h2>
    <button md-raised-button color="primary">Test</button>
    <div>{{Training1.Product1}}</div>
    <div>{{Training1.Product2}}</div>
    <div>{{Training1.Product3}}</div>
    <div>{{Training1.Product4}}</div>     
    <img style = "border:0px;" src = "/assets/Images/software-products-250x250.jpg" />
    
    </div>

</div>
    `
})

export class OnBoardingListComponent {
   Training1 = {
        id: 1,
        name: 'Products Set Up',
        Product1:'ORT',
        Product2:'PRT',
        Product3:'CMT',
        Product4:'PCL',
        imageUrl:'/assets/Images/install-2.jpeg',

   }

   handleEventClicked(data){
    console.log('recerived:',data)

   }
}
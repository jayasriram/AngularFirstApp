import { Component } from '@angular/core';

@Component({
  selector: 'Data-On-boarding-app',
  template: '<On-boarding-list></On-boarding-list>'
})
export class DataOnBoardingAppComponent {
  title = 'angularSample1';
// declared array of months.
   months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];
}

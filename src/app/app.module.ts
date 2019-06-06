import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//import { AppRoutingModule } from './app-routing.module';
import { DataOnBoardingAppComponent } from './Data_On_borading_app.component';
import { OnBoardingListComponent } from './On-boarding/On-boarding-list.component';
import { OnBoardingThumbnailComponent } from './On-boarding/On-boarding-thumbnail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatToolbarModule,MatRippleModule,MatListModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    DataOnBoardingAppComponent,  
    OnBoardingListComponent,
    OnBoardingThumbnailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,   
    MatButtonModule, 
    MatCardModule,
    MatToolbarModule,
    MatRippleModule,
    MatMenuModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [DataOnBoardingAppComponent]
})
export class AppModule { }

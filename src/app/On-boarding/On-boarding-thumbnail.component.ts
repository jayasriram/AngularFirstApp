import { Component, Input } from '@angular/core'


@Component({
    selector: 'On-boarding-thumbnail',   
    template:`     
    
    <div class="well hoverwell thumbnail">
    <mat-toolbar color="primary">Data : QA On Boarding List</mat-toolbar>

    <div
    fxLayout="column"    
    fxLayout.xs="row" 
    fxFlexFill>
    
    <div fxFlex="15" fxFlex.xs="55" class="sec1">
              <h3>Team Io</h3>
              ORT Set up<br>
              ORT Admin<br>
              Team Hierarchy<br>
              <img style = "border:0px;" src = "/assets/Images/software-products-250x250.jpg" />
    </div>
    <div fxFlex="60%" class="sec2" >
    <h3>Data Team</h3>
    </div>
    <div fxFlex="60%" class="sec3" >
    <h3>QA</h3>
    </div>
    <div fxFlex="60%" class="sec4">
    <h3>Team Io</h3>
    </div>

          
    </div>

    </div>        
    ` 
})

export class OnBoardingThumbnailComponent {
  @Input() Training:any
  tiles = [
    {tile1Text: 'ORT Set up', text2: 'ORT Admin SEt Up', cols: 1, rows: 3, color1: '#0066FF'},
    {text: 'Two', cols: 1, rows: 3, color: '#0099FF'},
    {text: 'Three', cols:1, rows:3, color: '#00CCCC'},
    {text: 'Four', cols: 1, rows: 3, color: '#00CC99'},
  ];

}
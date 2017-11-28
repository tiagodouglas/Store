import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `<div>{{title}}</div>`,
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnChanges {

  @Input() title:string="";
  @Output() titleChanged:EventEmitter<string>=new EventEmitter<string>();
  constructor(){
  }
  ngOnChanges(){
  console.log(this.title);
  
  this.titleChanged.emit(this.title);
  } 

}

import { Component,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
@Input() all:number=0;
@Input() smartphones:number=0;
@Input() laptops:number=0;
@Input('perfume') fragrances:number=0;
@Input() skincare:number=0;
@Input() groceries:number=0;
@Input() homedecoration:number=0;

selectedOption: string = "all";

@Output() radioButtonSelectionEvent:EventEmitter<string> = new EventEmitter<string>()

changeWithRadioButtonSelect(){
  console.log("Selected radio button in Child = "+this.selectedOption)
  this.radioButtonSelectionEvent.emit(this.selectedOption);
}
}

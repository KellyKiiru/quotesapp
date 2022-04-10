import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/quotes'; 
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css','../form-cmpnt/form-cmpnt.component.css']
})
export class QuotesComponent implements OnInit {

  quote:Quotes[]=[
    new Quotes('kelly','dont give up', 0, 0),
    new Quotes('kiiru','life is what you make it', 0, 0),
    new Quotes('kelly','there is always a silver lining', 0, 0),
    new Quotes('kelly','never look down on yourself', 0, 0),
    new Quotes('kelly','you have all it takes', 0, 0)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

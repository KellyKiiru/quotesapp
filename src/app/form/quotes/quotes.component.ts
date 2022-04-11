import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/quotes'; 
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css','../form-cmpnt/form-cmpnt.component.css']
})
export class QuotesComponent implements OnInit {

  quote:Quotes[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}

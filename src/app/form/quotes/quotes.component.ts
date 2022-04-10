import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/quotes'; 
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css','../form-cmpnt/form-cmpnt.component.css']
})
export class QuotesComponent implements OnInit {

  quote:Quotes[]=[
    new Quotes('Author: Dany Gokey','Replace fear of the unknown, with curiosity.', 0, 0),
    new Quotes('Author: Cris Nikolov','life is what you make it', 0, 0),
    new Quotes('Author: Neale Donald Walsch','Turn your can’t into a can, and your dream  into plan!', 0, 0),
    new Quotes('Author: Ruth E. Renkel','You are afraid to die, and you’re afraid to live. What a way to exist.', 0, 0),
    new Quotes('Author: Dany Gokey','Sometimes the poorest man leaves his children the richest inheritance', 0, 0)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

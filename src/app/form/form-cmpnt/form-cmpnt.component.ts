import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/quotes';

@Component({
  selector: 'app-form-cmpnt',
  templateUrl: './form-cmpnt.component.html',
  styleUrls: ['./form-cmpnt.component.css'],
})
export class FormCmpntComponent implements OnInit {
  quote={
    author:'',
    textQuote:'',
    upvote:0,
    downvote:0
  }
  quotes:any[]=[
    {
      author:'Author: Dany Gokey',
      textQuote:'Replace fear of the unknown, with curiosity.',
      upvote:0,
      downvote:0
    },
    {
      author:'Author: Cris Nikolov',
      textQuote:'life is what you make it',
      upvote:0,
      downvote:0
    },
    {
      author:'Author: Neale Donald Walsch',
      textQuote:'Turn your can’t into a can, and your dream  into plan!',
      upvote:0,
      downvote:0
    },
    {
      author:'Author: Ruth E. Renkel',
      textQuote:'You are afraid to die, and you’re afraid to live. What a way to exist.',
      upvote:0,
      downvote:0
    },
    {
      author:'Author: Dany Gokey',
      textQuote:'Sometimes the poorest man leaves his children the richest inheritance',
      upvote:0,
      downvote:0
    }
  ]
  constructor() {}

  ngOnInit(): void {

  }
  addQuote():void{
    this.quotes.push(this.quote);
  }
}

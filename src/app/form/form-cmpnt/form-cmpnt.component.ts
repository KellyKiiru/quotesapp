import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/quotes';

@Component({
  selector: 'app-form-cmpnt',
  templateUrl: './form-cmpnt.component.html',
  styleUrls: ['./form-cmpnt.component.css'],
})
export class FormCmpntComponent implements OnInit {
  quote = {
    author: '',
    textQuote: '',
    upvote: 0,
    downvote: 0,
    timePosted: new Date().getTime(),
  };
  quotes: any[] = [
    {
      author: 'Author: Dany Gokey',
      textQuote: 'Replace fear of the unknown, with curiosity.',
      upvote: 0,
      downvote: 0,
      timePosted: new Date().getTime(),
    },
    {
      author: 'Author: Cris Nikolov',
      textQuote: 'life is what you make it',
      upvote: 0,
      downvote: 0,
      timePosted: new Date().getTime(),
    },
    {
      author: 'Author: Neale Donald Walsch',
      textQuote: 'Turn your can’t into a can, and your dream  into plan!',
      upvote: 0,
      downvote: 0,
      timePosted: new Date().getTime(),
    },
    {
      author: 'Author: Ruth E. Renkel',
      textQuote:
        'You are afraid to die, and you’re afraid to live. What a way to exist.',
      upvote: 0,
      downvote: 0,
      timePosted: new Date().getTime(),
    },
    {
      author: 'Author: Dany Gokey',
      textQuote:
        'Sometimes the poorest man leaves his children the richest inheritance',
      upvote: 0,
      downvote: 0,
      timePosted: new Date().getTime(),
    },
  ];
  constructor() {}

  ngOnInit(): void {
    // $(document).ready(function () {
    //   $('#button').click(function () {
    //     $('#timePosted').toggle();
    //   });
    // });
  }

  addQuote(): void {
    this.quotes.push(this.quote);
    this.quote = {
      author: '',
      textQuote: '',
      upvote: 0,
      downvote: 0,
      timePosted: new Date().getTime(),
    };
  }
  upvote(i: any): void {
    this.quotes.forEach((quote: any) => {
      if (i === this.quotes.indexOf(quote)) {
        quote.upvote += 1;
      }
    });
  }

  downvote(i: any): void {
    this.quotes.forEach((quote: any) => {
      if (i === this.quotes.indexOf(quote) && quote.downvote >= 0) {
        quote.downvote += 1;
      }
    });
  }

  // timeUploaded(i: number) {
  //   this.quotes[i].timePosted=!this.quotes[i].timePosted
  // }
}

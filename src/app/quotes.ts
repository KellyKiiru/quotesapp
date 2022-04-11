export class Quotes {
  author: string;
  textQuote: string;
  upvote: number;
  downvote: number;
  timePosted: any;
  constructor(author: string,textQuote: string,upvote: number,downvote: number) {
    this.author = author;
    this.textQuote = textQuote;
    this.upvote = upvote;
    this.downvote = downvote;
    this.timePosted = new Date().getTime()
  }
}


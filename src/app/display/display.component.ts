import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  
  quotes: Quote[] = [
    new Quote(1, 'look before you leap', 'Flook before you leap','look before you leap',new Date(2020,3,14)),
    new Quote(2,'Be yourself','Be yourself','Be yourself',new Date(2020,3,14)),
    new Quote(3,'enjoy helping all','enjoy helping all','enjoy helping all',new Date(2020,3,14)),
   
  ];
  constructor() { }


  ngOnInit(): void {
  }
  
  
 
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
    console.log(quote.quote)
  }
  
}

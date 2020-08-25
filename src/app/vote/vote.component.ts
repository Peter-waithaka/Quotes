import { Component, OnInit,EventEmitter ,Output,Input} from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Input() quote: Quote;
  @Output() Upvote = new EventEmitter();

  constructor() { }
  addUpVote:number = 0;
addDownVote :number = 0;

  ngOnInit(): void {
  }
  upVote(){
    this.addUpVote++;
  }
  downVote(){
    this.addDownVote++;
  }

}


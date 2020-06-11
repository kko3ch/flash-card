import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Card } from 'src/app/card';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.css']
})
export class FlashCardComponent implements OnInit {

  selectedTitle: boolean = true;
  @Input() card: Card;

  constructor() { 
    this.selectedTitle = false;
  }
  ngOnInit(): void {
  }
  onSelectTitle(){
    this.selectedTitle = !this.selectedTitle;
  }

}

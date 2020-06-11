import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards: Card[] = [
    new Card('Object-Oriented Programming','It is a model defined by programmers that revolve around objects and data rather than ‘actions’ and ‘logic’.'),
    new Card('Object','It is an instance of a class'),
    new Card('Class','Refers to a set of related objects with common properties'),
    new Card('Command Line Interface','User interface based on text'),
    new Card('Array','List of similar data  values that are grouped'),
    new Card('FrameWork','It is a foundation with a specific  level of complexity that may be altered by the programmer, making use of their code.'),
    new Card('Backend','It is a term used for background programming. Behind the scenes'),
    new Card('Frontend','It refers to the User Interface'),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

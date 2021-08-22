import { Component, OnInit } from '@angular/core';
import { EndPoints } from 'src/app/models/endPoints.model';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {
  selected: EndPoints;
  endPointCollection: EndPoints[];
  constructor() { }

  ngOnInit(): void {
    this.endPointCollection = [
      // Pull from previous example
      {route: 'https://api.spacexdata.com/v4/cores',code: 'SP',name: 'Space X'},
      {route: 'https://pokeapi.co/api/v2/location/', code:'PK', name: 'Pokemon'}
    ];
  }

  handleChangeSelected(evt){
    console.log(evt);
  }

}

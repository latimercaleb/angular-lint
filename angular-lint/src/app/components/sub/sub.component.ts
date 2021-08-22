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
      {route: 'https://api.spacexdata.com/v4/ships',code: 'SP',name: 'Space X'},
      {route: 'https://pokeapi.co/api/v2/location/', code:'PK', name: 'Pokemon'},
      {route: 'https://botw-compendium.herokuapp.com/api/v2/category/materials', code: 'HY', name: 'Hyrule Compendium'}
    ];
    this.selected = this.endPointCollection[0];
  }

  handleChangeSelected(evt){
    console.log(evt);
  }

  handleClick(){
    console.log(this.selected);
  }

  extractCode(): string{
    return this.selected.code;
  }

}

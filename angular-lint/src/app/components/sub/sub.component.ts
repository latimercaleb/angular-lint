import { Component, OnInit } from '@angular/core';

import { EndPoints } from 'src/app/models/endPoints.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {
  selected: EndPoints;
  endPointCollection: EndPoints[];
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.endPointCollection = [
      {code: 'SP',name: 'Space X'},
      {code: 'HY', name: 'Hyrule Compendium'}
    ];
    this.selected = this.endPointCollection[0];
  }

  handleChangeSelected(evt){
    console.log(evt);
  }

  handleClick(){
    const code = this.extractCode();
    switch(code){
      case 'SP':
        return this.service.getSpaceX().subscribe();
      case 'HY': 
        return this.service.getZelda().subscribe();
    }
  }

  extractCode(): string{
    return this.selected.code;
  }

}

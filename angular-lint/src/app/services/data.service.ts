import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Check work-top for obs setup apply here for these 3
  getSpaceX(){
    const route = 'https://api.spacexdata.com/v4/ships';
    return this.http.get(route).pipe(
      take(1),
      map((data: any[]) => {
        const cardData = [];
        data.forEach(element => {
          const card = {
            head: element.name,
            sub: element.home_port,
            img: element.image,
            detail: `${element.type} ship formerly known as ${element.legacy_id}`  
          }
          cardData.push(card);
        });
      })
    );
  }


  getZelda(){
    const route = 'https://botw-compendium.herokuapp.com/api/v2/category/materials';
    return this.http.get(route).pipe(
      take(1),
      map((data: any) => {
        const cardData = [];
        data.forEach(element => {
          const card = {
            head: element.name,
            sub: element.cooking_effect,
            img: element.image,
            detail: `Found in ${element.common_locations.split(',')}. ${element.description} heals for ${element.hearts_recovered} hearts`  
          }
          cardData.push(card);
      });
      return cardData
      );
      );

  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor() { }

  get getRandomNumber(){
    return 'xxxxxxxx-xxxx-2xxx'.replace(/[x]/g, function() {
      return (Math.random() * 16 | 0).toString(16);
    });
  }

}

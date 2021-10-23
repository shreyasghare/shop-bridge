import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ItemDetailsComponent } from '../components/admin/item-details/item-details.component';
import { emptyItem, Item,  } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }
  selectedItem: Item = emptyItem();

  get getSelectedItem(): Item{
    return {... this.selectedItem};
  }
  set setSelectedItem(currentItem: Item){
    this.selectedItem = {... currentItem};
  }

  itemListSubject: Subject<string> = new Subject();
  updateItemList(value:string){
    this.itemListSubject.next(value);
  }
  itemListObservable = this.itemListSubject.asObservable();

}

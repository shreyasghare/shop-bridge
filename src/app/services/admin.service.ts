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

  addItem(itemsData: Item[], currentItem: Item){
    // post API call to store the data in DB
    itemsData.push(currentItem);
    localStorage.setItem("storedItems", JSON.stringify(itemsData));
  }

  updateItem(itemsData: Item[], currentItem: Item){
    // put API call to update the data in DB
    let currentIndex = itemsData.findIndex((el: Item) => el.productId === currentItem.productId);
    itemsData[currentIndex] = currentItem;
    localStorage.setItem("storedItems", JSON.stringify(itemsData));
  }

  deleteItem(currentItem:Item){
    // delete API call to remove the record from DB
    let storedItems = JSON.parse(localStorage.getItem("storedItems") || "");
    if(storedItems){
      storedItems.splice(storedItems.findIndex((el: Item) => el.productId === currentItem.productId), 1);
      localStorage.setItem("storedItems", JSON.stringify(storedItems));
    }
  }

}

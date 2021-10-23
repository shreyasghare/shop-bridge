import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { emptyItem, Item } from 'src/app/models/item.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  constructor(private router: Router, private adminService: AdminService) { }
  @Input() isPreview: boolean = true;
  @Input() isShow: boolean = false;
  @Input() productDetails: Item = emptyItem();

  ngOnInit(): void {
  }
  
  editItem(){
    this.adminService.setSelectedItem = {... this.productDetails};
    this.router.navigateByUrl("/admin/edit-item");
  }

  deleteItem(){
    let storedItems = JSON.parse(localStorage.getItem("storedItems") || "");
    if(storedItems){
      let ind = 0;
      ind = storedItems.findIndex((el: Item) => el.productId === this.productDetails.productId);
      storedItems.splice(ind, 1);
      localStorage.setItem("storedItems", JSON.stringify(storedItems));
      this.adminService.updateItemList("updateList");
    }
  }

}

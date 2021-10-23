import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { emptyItem, Item } from 'src/app/models/item.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.css']
})
export class AdminLandingComponent implements OnInit {

  constructor(private router: Router, private adminService: AdminService) { }
  itemList: Item[] = [];

  ngOnInit(): void {
    this.adminService.itemListObservable.subscribe(el => {
      this.setItemsData();
    })
    this.setItemsData();
  }

  setItemsData(){
    this.itemList = [];
    const storedItems = localStorage.getItem("storedItems");
    if(storedItems) this.itemList = JSON.parse(storedItems);
  }

  addItem(){
    this.router.navigateByUrl("/admin/add-item");
  }

}

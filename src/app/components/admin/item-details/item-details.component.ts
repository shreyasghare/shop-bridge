import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { emptyItem, Item } from 'src/app/models/item.model';
import { AdminService } from 'src/app/services/admin.service';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, 
    private shoppingService: ShoppingService,
    private adminService: AdminService, private formBuilder: FormBuilder) { }
  
  requestedAction: string = "";
  selectedItem: Item = emptyItem();
  itemDetailsForm: FormGroup = this.formBuilder.group({});

  ngOnInit(): void {
    this.requestedAction = this.activatedRoute.snapshot.data?.request;
    this.selectedItem = this.adminService.getSelectedItem;
    console.log('this.adminService.getSelectedItem:', this.adminService.getSelectedItem)
    this.itemDetailsForm = new FormGroup({
      productId: new FormControl({value: this.shoppingService.getRandomNumber, disabled: true}),
      productName: new FormControl(""),
      brandName: new FormControl(""),
      productImageUrl: new FormControl(""),
      productDescription: new FormControl(""), 
      productPrice: new FormControl("") 
    });
  }

  onSubmit(){

  }

}

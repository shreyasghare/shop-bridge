import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  isShow: boolean = false;

  ngOnInit(): void {
    this.requestedAction = this.activatedRoute.snapshot.data?.request;
    if(this.requestedAction === 'edit'){
      this.selectedItem = this.adminService.getSelectedItem;
    }
    console.log('this.adminService.getSelectedItem:', this.adminService.getSelectedItem)
    this.itemDetailsForm = new FormGroup({
      productId: new FormControl({value: this.selectedItem.productId || this.shoppingService.getRandomNumber, disabled: true}),
      productName: new FormControl(this.selectedItem.productName, [Validators.required]),
      brandName: new FormControl(this.selectedItem.brandName, [Validators.required]),
      productImageUrl: new FormControl(this.selectedItem.productImageUrl, [Validators.required]),
      productDescription: new FormControl(this.selectedItem.productDescription, [Validators.required]),
      productPrice: new FormControl(this.selectedItem.productPrice || "", [Validators.required, Validators.min(1),]) 
    });
  }

  onSubmit(){
    const storedItems = localStorage.getItem("storedItems");
    let itemsData: any = [];
    if(storedItems) [... itemsData] = JSON.parse(storedItems);
    let currentItem: any = {};
    Object.keys(this.itemDetailsForm.controls).forEach(el => {
      currentItem[el] = this.itemDetailsForm.controls[el].value;
    });
    
    if(this.requestedAction === 'edit'){
      this.adminService.updateItem(itemsData, currentItem);
    }
    else {
      this.adminService.addItem(itemsData, currentItem);
    }
    this.router.navigateByUrl("/admin");
  }

  showPreview(){
    this.isShow = true;
  }

}

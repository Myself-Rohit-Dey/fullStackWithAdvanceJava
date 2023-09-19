import { Component } from '@angular/core';
import productsData from "../../assets/jsondata/products.json"
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:any[]=productsData.products;
  getTotalProducts(){return this.products.length;}
  getTotalSmartPhones(){return this.products.filter(product=> product.category === 'smartphones').length;}
  getTotalLaptops(){return this.products.filter(product => product.category === 'laptops').length;}
  getTotalFragrances(){return this.products.filter(product => product.category === 'fragrances').length;}
  getTotalSkincare(){return this.products.filter(product => product.category === 'skincare').length;}
  getTotalGroceries(){return this.products.filter(product => product.category === 'groceries').length;}
  getTotalHomeDecoration(){return this.products.filter(product => product.category === 'home-decoration').length;}

  productType:string = "all";

  onRadioButtonChange(receivedEmmitedValueFromChild:string){
    this.productType=receivedEmmitedValueFromChild;
    console.log("selected radio button in Parent = "+this.productType);
  }

  // searchTextValue:string='';

  // onSearchTextUpdate:(searchVal:String){
  //   this.searchTextValue=searchVal;
  //   console.log("Search Text in Parent = "+this.searchTextValue)
  // }
}


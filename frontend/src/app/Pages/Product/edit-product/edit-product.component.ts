import { Component } from '@angular/core';
import { Product } from 'src/app/Models/Product';
  import { ProductService } from 'src/app/Services/Product/product.service';
  import { ActivatedRoute } from '@angular/router';
  import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  // creating a parametrized constructor to call the employee service, location and active route
  constructor(private productService: ProductService, private location: Location, private route: ActivatedRoute) {}

  // creating an employee object to store data
  product: Product = {
    productId: 0,
    productName: '',
    productDescription: '',
    price: 0
  };

  // function to go back to previous page
  goBack(): void {
    this.location.back();
  }

  // function to call edit employe from service layer
  editProduct(product: Product): void {
    this.productService.updateProduct(product).subscribe(() => this.goBack());
  }

  // function to get a particular employee by id and storing its data in employee object
  getProductById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe(product => {
      this.product.productId = product.productId,
      this.product.productName = product.productName,
      this.product.productDescription = product.productDescription,
      this.product.price = product.price
    });
  }

  // calling the ngOnit lificycle hook to load get employee by id
  ngOnInit(): void {
    this.getProductById();
  }
}

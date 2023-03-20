import { Component } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/Product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  // creating a parameterized constructor to get product services
  constructor(private productService: ProductService) {}

  // declaring and initializing the variables
  products: Product[] = [];
  id?: number;
  
  // function to get all the products from service layer and store it in products array
  getAllProducts(): void {
    this.productService.getAllProducts().subscribe(products => this.products = products);
  }

  // function to delete the product 
  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => this.getAllProducts());
  }

  // calling the ngOnit lificycle hook to load all the products
  ngOnInit(): void {
    this.getAllProducts();
  }
}

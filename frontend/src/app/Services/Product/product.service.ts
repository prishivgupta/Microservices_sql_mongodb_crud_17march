import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  // url of the json server
  baseUrl: string = "https://localhost:7006/gateway/product";

  // function to handle the error
  handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.error('An error message occured:', error.error.message);
    } else {
      console.error(error.error)
    }
    return throwError('Something happened, please try again');
  }

  // get all products service 

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(catchError(this.handleError))
  }

  // get a particular product by id service

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + `/${id}`).pipe(catchError(this.handleError))
  }

  // add an product service

  addProduct(product: Product): Observable<any> {
    return this.http.post<Product>(this.baseUrl, product).pipe(catchError(this.handleError))
  }

  // update a particular product service

  updateProduct(product: Product): Observable<any> {
    return this.http.put<Product>(this.baseUrl + `/${product.productId}`, product).pipe(catchError(this.handleError))
  }

  // delete an product service

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + `/${id}`).pipe(catchError(this.handleError))
  }
}

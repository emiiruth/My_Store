import { Component, OnInit } from '@angular/core'
import { Product } from '../../models/Product'
import { CommonModule } from '@angular/common'
import { ProductService } from '../../services/product.service'
import { CartService } from '../../services/cart.service'
import { ProductItemComponent } from '../product-item/product-item.component'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  imports: [CommonModule, ProductItemComponent, HttpClientModule, FormsModule],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = []

  constructor(
    private productService: ProductService,
    private cartService: CartService,
  ) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe((productList) => {
      this.productList = productList
    })
  }

  addItemToCart(eventData: { product: Product; quantity: number }): void {
    this.cartService.addItem(eventData.product, eventData.quantity)
    alert(`Added ${eventData.quantity} ${eventData.product.name} to Cart`)
  }
}
export default Product

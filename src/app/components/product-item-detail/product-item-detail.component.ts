import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core'
import { Product } from '../../models/Product'
import { HttpClientModule } from '@angular/common/http'
import { CartService } from '../../services/cart.service'
import { CommonModule } from '@angular/common'
import { ProductItemComponent } from '../product-item/product-item.component'
import { ProductService } from '../../services/product.service'
import { ActivatedRoute } from '@angular/router'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-product-item-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ProductItemComponent, FormsModule],
  templateUrl: './product-item-detail.component.html',
  styleUrl: './product-item-detail.component.css',
})
export class ProductItemDetailComponent implements OnInit {
  @Input() product: Product
  @Output() addItem = new EventEmitter<{ product: Product; quantity: number }>()
  id: number
  quantity: number
  dropdown: number[]

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService,
  ) {
    this.id = 0
    this.product = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      url: '',
    }
    this.quantity = 1
    this.dropdown = [1, 2, 3, 4, 5]
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get(
      'product.id',
    ) as unknown as number
    this.productService.getProducts().subscribe((res) => {
      this.product = res.find(
        (givenProd) => givenProd.id == this.id,
      ) as unknown as Product
    })
  }

  addItemToCart(product: Product, quantity: number): void {
    alert(`Added ${quantity} ${product.name} to Cart`)
    this.cartService.addItem(product, quantity)
  }
}

import { Component, OnInit } from '@angular/core'
import Product from '../product-list/product-list.component'
import { Cart } from '../../models/Cart'
import { CartService } from '../../services/cart.service'
import { ProductService } from '../../services/product.service'
import { Router } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule, CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  fullName: string
  address: string
  cardNumber: string
  csv: string
  expir: string
  carts: Cart[]
  products: Product[]
  dropdown: number[]

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private router: Router,
  ) {
    this.carts = []
    this.products = []
    this.fullName = ''
    this.address = ''
    this.cardNumber = ''
    this.csv = ''
    this.expir = ''
    this.dropdown = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }

  ngOnInit(): void {
    this.carts = this.cartService.getCarts()
    this.productService
      .getProducts()
      .subscribe((productList) => (this.products = productList))
  }

  getCarts(): void {
    this.carts = this.cartService.getCarts()
  }

  getTotalPrice(): number {
    return this.cartService.getTotal()
  }

  removeItemFromCart(productID: number): void {
    this.cartService.removeFromCart(productID)
    this.getCarts()
    alert(`Product Removed!`)
  }

  onSubmit(): void {
    this.router.navigate(['/confirm'])
  }

  backToMain(): void {
    this.router.navigate(['/'])
  }

  validateName(): void {
    if (this.fullName.length > 15 || this.fullName.length < 1) {
      alert('Input must be between 1 and 15 characters')
    }
  }

  validateAddress(): void {
    if (this.address.length > 15 || this.address.length < 1) {
      alert('Input must be between 1 and 15 characters')
    }
  }

  validateCard(): void {
    if (this.cardNumber.length > 16) {
      alert('Credit card number must be 16 characters')
    }
  }

  validateExpir(): void {
    if (this.expir.length > 8) {
      alert('Credit card expiration date cannot exceed 8 characters')
    }
  }

  validateCsv(): void {
    if (this.csv.length > 4) {
      alert('Credit card CSV cannot exceed 4 characters')
    }
  }
}

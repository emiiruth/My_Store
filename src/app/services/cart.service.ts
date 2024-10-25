import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Cart } from '../models/Cart'
import { Product } from '../models/Product'

@Injectable({
  providedIn: 'root',
})
export class CartService {
  carts: Cart[] = []

  constructor(private http: HttpClient) {
    this.carts = []
  }

  getCarts(): Cart[] {
    return this.carts
  }
  addItem(product: Product, quantity: number): void {
    const existingItem = this.carts.find(
      (item) => item.productID === product.id,
    )
    if (existingItem) {
      existingItem.productQuantity =
        Number(existingItem.productQuantity) + Number(quantity)
    } else {
      const cartItem: Cart = {
        productID: product.id,
        productName: product.name,
        productPrice: product.price,
        productDetails: product.description,
        productQuantity: quantity,
        url: product.url,
      }
      this.carts.push(cartItem)
    }
  }

  getTotal(): number {
    const totalPrice: number = this.carts.reduce(
      (previousValue, currentValue) => {
        return (
          currentValue.productPrice * currentValue.productQuantity +
          previousValue
        )
      },
      0,
    )
    return totalPrice
  }

  removeFromCart(productID: number): void {
    this.carts = this.carts.filter((cart) => cart.productID !== productID)
  }
}

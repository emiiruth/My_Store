import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule, NgFor } from '@angular/common'
import { Product } from '../../models/Product'
import { HttpClientModule } from '@angular/common/http'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [HttpClientModule, RouterLink, CommonModule, NgFor, FormsModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() product: Product
  @Output() addItem = new EventEmitter<{ product: Product; quantity: number }>()
  quantity: number
  dropdown: number[]

  constructor() {
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

  onAddItem(): void {
    this.addItem.emit({ product: this.product, quantity: this.quantity })
  }
}

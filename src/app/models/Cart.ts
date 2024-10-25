export class Cart {
  productID: number
  productName: string
  productPrice: number
  productDetails: string
  url: string
  productQuantity: number

  constructor() {
    this.productID = 0
    this.productName = ''
    this.productPrice = 0
    this.productDetails = ''
    this.url = ''
    this.productQuantity = 0
  }
}

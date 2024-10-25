import { Routes } from '@angular/router'
import { ProductListComponent } from './components/product-list/product-list.component'
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component'
import { CartComponent } from './components/cart/cart.component'
import { ConfirmationComponent } from './components/confirmation/confirmation.component'
export const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    title: 'Home page',
  },

  {
    path: 'product/:product.id',
    component: ProductItemDetailComponent,
    title: 'detail',
  },

  {
    path: 'cart',
    component: CartComponent,
    title: 'cart',
  },

  {
    path: 'confirm',
    component: ConfirmationComponent,
    title: 'confirmation',
  },
]

export default routes

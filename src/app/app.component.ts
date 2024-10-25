import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { ProductListComponent } from './components/product-list/product-list.component'
import { ProductItemComponent } from './components/product-item/product-item.component'
import { HttpClientModule } from '@angular/common/http'
import { NavbarComponent } from './navbar/navbar.component'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    ProductItemComponent,
    ProductListComponent,
    HttpClientModule,
    NavbarComponent,
  ],
})
export class AppComponent {
  title = 'assignment_3'
}

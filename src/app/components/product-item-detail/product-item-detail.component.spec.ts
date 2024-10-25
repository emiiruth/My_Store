import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ProductItemDetailComponent } from './product-item-detail.component'

describe('ProductItemDetailComponent', () => {
  let component: ProductItemDetailComponent
  let fixture: ComponentFixture<ProductItemDetailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductItemDetailComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ProductItemDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

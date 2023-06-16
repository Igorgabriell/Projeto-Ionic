import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductPerfilPage } from './product-perfil.page';

describe('ProductPerfilPage', () => {
  let component: ProductPerfilPage;
  let fixture: ComponentFixture<ProductPerfilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

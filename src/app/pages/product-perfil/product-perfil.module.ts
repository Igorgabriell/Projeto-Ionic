import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPerfilPageRoutingModule } from './product-perfil-routing.module';

import { ProductPerfilPage } from './product-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPerfilPageRoutingModule
  ],
  declarations: [ProductPerfilPage]
})
export class ProductPerfilPageModule {}

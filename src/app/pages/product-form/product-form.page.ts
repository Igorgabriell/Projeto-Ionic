import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.page.html',
  styleUrls: ['./product-form.page.scss'],
})
export class ProductFormPage implements OnInit {

  constructor(
    private productService: ProductService,
    private alertController: AlertController,
    private activeRouter: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  product = new Product;

  async presentAlert(tipo: string, texto: string) {
    const alert = await this.alertController.create({
      header: tipo,
      //subHeader: 'Important message',
      message: texto,
      buttons: ['OK'],
    });
    await alert.present();
  }

  save() {
    this.productService.add(this.product)
      .then((res) => {
        console.log(res);
        this.presentAlert("Aviso", "Cadastrado");
      })
      .catch((err) => {
        console.log(err);
        this.presentAlert("Erro", "Não cadastrado");
      })
  }
}

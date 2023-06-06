import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { AlertController } from '@ionic/angular';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  produto = new Produto();
  produtoService = new ProdutoService();
  constructor(private alertController: AlertController, //private produtosService: ProdutosService
  ) {}

  async presentAlert(tipo: string, texto: string) {
    const alert = await this.alertController.create({
      header: tipo,
      //subHeader: 'Important message',
      message: texto,
      buttons: ['OK'],
    });

    await alert.present();
  }

  save(){
    this.produtoService.add(this.produto);
    this.presentAlert("Aviso", "Cadastrado");
    
    
  }


}

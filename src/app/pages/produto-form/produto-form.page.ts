import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Produto } from '../../model/produto';
import { ProdutoService } from 'src/app/services/produto.service';
@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.page.html',
  styleUrls: ['./produto-form.page.scss'],
})
export class ProdutoFormPage implements OnInit {



  ngOnInit() {
  }

  produto = new Produto();
  constructor(private alertController: AlertController, private produtoService: ProdutoService
  ) { }

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

    this.produtoService.add(this.produto)
      //.then(res => {
     //   console.log(this.produto);
     //   this.presentAlert("Aviso", "Cadastrado");
      //})
    //  .catch((err) => {
    //    console.log(err);
     //   this.presentAlert("Erro", "Não Cadastrado");
     // })

  }


}

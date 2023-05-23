import { UserService } from './../services/user-service';
import { User } from './../model/user';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  [x: string]: any;

  constructor(
    private alertController: AlertController,
    private userService:UserService
    ){}
  
  user = new User()

  async presentAlert(tipo: string, texto: string) {
    const alert = await this.alertController.create({
      header: tipo,
      //subHeader "mensagem importante"
      message: texto,
      buttons: ['OK']
    });

    await alert.present();
  }

  save() {
    this.userService.add(this.user);
    this.presentAlert("Aviso", "Cadastro");
    console.log(this.user);
     //console.log(this.user);
  }
 

}

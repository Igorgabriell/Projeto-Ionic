import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UtilsService } from 'src/app/services/utils.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-enter',
  templateUrl: './user-enter.page.html',
  styleUrls: ['./user-enter.page.scss'],
})
export class UserEnterPage implements OnInit {


  constructor(
    private userService: UserService,
    private router: Router,
    private util: UtilsService


  ) { }

  ngOnInit() {
  }

  email: string = "";
  senha: string = "";

  enter() {
    this.userService.login(this.email, this.senha)
      .then(res => {
        console.log(res);
        this.router.navigate(["/tabs/userList"])
      }).catch(erro => {
        console.error(erro);
        this.util.alert("erro", "Usuario ou dados invalidos!")

      })
  }

  async enterGoogle() {
    await this.userService.loginGoogle()
      .then(async res => {
        console.log(res);

        await this.userService.addUser(<User>{
          email: res.user.email,
          foto: res.user.photoURL,
          nome: res.user.displayName,
          telefone: res.user.phoneNumber
        },

          res.user.uid)
          .then(resUserAdd => {
            this.router.navigate(["/tabs/userList"])
          })








      }).catch(erro => {
        console.error(erro);
        this.util.alert("erro", "Usuario ou dados invalidos!")

      })

  }


}


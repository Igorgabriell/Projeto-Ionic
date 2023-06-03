import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { User } from './../../model/user';
import { AlertController } from '@ionic/angular/providers/alert-controller';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  router: any;

  constructor(private alertController:AlertController,
             private userService: UserService,
             private activeRouter: ActiveRouter) { }

  users: User[] = [];
  getParam(){
    this._id = this.activeRouter.snapshot.paramMap.get("id");
    this.userService

  }

  ngOnInit() {
    this.getList();
  }
  getList() {
    //   this.userService.list().subscribe(
    //   (res) => {
    //   console.log(res);
    //   this.users = <User[]>res;
    // })

    this.userService.list().then(res => {
      console.log(res)
      this.users = <User[]>res;
    })
  }


  editUser(_id:string){
    this.router.navigate(['./tabs/user/userForm',_id],)
  }



  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }




}

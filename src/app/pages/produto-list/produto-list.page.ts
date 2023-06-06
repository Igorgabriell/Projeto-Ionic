import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.page.html',
  styleUrls: ['./produto-list.page.scss'],
})
export class ProdutoListPage implements OnInit {

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  produtos: Produto[] = [];

  ngOnInit() {
    this.getList();
  }

  getList() {
    // this.userService.list().subscribe(
    //   (res) => {
    //     console.log(res);
    //     this.users = <User[]>res;
    //   })
    this.produtoService.list().then(res => {
      console.log(res)
      this.produtos = <Produto[]>res;
    })
  }

  editProduto(_id:string) {
    this.router.navigate(['/tabs/produtoForm', _id],)
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event?.target?.complete();
    }, 2000);
  }



}
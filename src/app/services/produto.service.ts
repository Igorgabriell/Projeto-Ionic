import { Produto } from '../model/produto';
import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, getDoc } from '@angular/fire/firestore';
import { getDocs, query } from '@firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  
  constructor() { }

  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  private produtoCollection = collection(this.firestore, 'products');

  add(produto: Produto) {

    return addDoc(this.produtoCollection, <Produto>{
      nome: produto.nome,
      categoria: produto.categoria,
      descricao: produto.descricao,
      quant: produto.quant,
      valor: produto.valor,
      fotos: produto.fotos,
    

      })
  }

  async list() {
    //return collectionData(query(this.userCollection));
    const result = await getDocs(query(this.produtoCollection));
    return result.docs.map(doc => ({ _id: doc.id, ...doc.data() }));
  }

  async get(id: string) {
    const result = await getDoc(doc(this.firestore, 'products', id))
    //return result.data()
    return {_id:result.id, ...result.data()}

  }
  }


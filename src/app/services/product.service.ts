import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, doc, getDoc, getDocs, query } from '@angular/fire/firestore';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private repository = 'products';
  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  private collection = collection(this.firestore, this.repository);

  add(product: Product) {
    return addDoc(this.collection, <Product>{
      nome: product.nome,
      descricao: product.descricao,
      categoria: product.categoria,
      quant: product.quant,
      valor: product.valor,
      fotos: product.fotos,
      ativo: product.ativo,
    })
  }

  async list() {
    //return collectionData(query(this.userCollection));
    const result = await getDocs(query(this.collection));
    return result.docs.map(doc => ({ _id: doc.id, ...doc.data() }));
  }

  async get(id: string) {
    const result = await getDoc(doc(this.firestore, this.repository, id))
    //return result.data() 
    return { _id: result.id, ...result.data() }
  }
}

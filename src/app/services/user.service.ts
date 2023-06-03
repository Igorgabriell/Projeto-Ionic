import { Injectable, inject } from '@angular/core';
import { User } from '../model/user';
import { Firestore, collection, collectionData, addDoc, doc, getDoc } from '@angular/fire/firestore';
import { getDocs, query } from '@firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  private userCollection = collection(this.firestore, 'users');

  add(user: User) {

    return addDoc(this.userCollection, <User>{
      email: user.email,
      nome: user.nome,
      senha: user.senha,
      telefone: user.telefone,
    })
  }

  async list() {
    //return collectionData(query(this.userCollection));
    const result = await getDocs(query(this.userCollection));
    return result.docs.map(doc => ({ _id: doc.id, ...doc.data() }));
  }

  async get(id: string) {
    const result = await getDoc(doc(this.firestore, 'users', id))
    //return result.data()
    return {_id:result.id, ...result.data()}

  }
  }

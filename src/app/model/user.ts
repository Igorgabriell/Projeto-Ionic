
import { v4 as uuid} from 'uuid';

export class User {
   
    _id:String = uuid();
    nome:String = "";
    email:String = "";
    senha:String = "";
    telefone:String = "";


}

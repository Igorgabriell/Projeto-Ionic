
import { v4 as uuid} from 'uuid';

export class Produto {

        _id:String = uuid();
        nome : string ="";
        categoria : string = "";
        descricao : string = "";
        quant: number = 10;
        valor: number = 20;
        ativo:boolean = true;
        }

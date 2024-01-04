import { Funcionario } from "./Funcionario";
import { Produto } from "./Produto";

export interface Carrinho {
    id?: number,
    funcionario: Funcionario,
    produto: Produto
}

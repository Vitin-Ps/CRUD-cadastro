import { Funcionario } from "./Funcionario";

export interface Venda {
    id?: number,
    funcionario: Funcionario,
    valor: number,
    comissao?: number
}
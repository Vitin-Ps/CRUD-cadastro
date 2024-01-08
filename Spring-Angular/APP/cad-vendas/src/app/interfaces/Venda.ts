import { Funcionario } from "./Funcionario";

export interface Venda {
    id?: number,
    funcionario: Funcionario,
    venda: number,
    comissao?: number
}
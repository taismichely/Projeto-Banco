import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
  private _aniversario: number

  constructor(numero: number, agencia: number, titulo: string, saldo: number, tipo: number, aniversario: number) {
    super(numero, agencia, titulo, saldo, tipo)
    this._aniversario = aniversario;
  }

  public get aniversario() {
    return this._aniversario;
  }

  public set aniversario(aniversario: number) {
    this._aniversario = aniversario;
  }

  public visualizar(): void {
    super.visualizar();
    console.log(`Dia de aniversário: ${this._aniversario}`)
  }
}
//Conta - numero, agencia, titulo, saldo, tipo (classe - atributos)

export abstract class Conta {
  private _numero: number
  private _agencia: number
  private _titulo: string
  private _saldo: number
  private _tipo: number

  constructor(numero: number, agencia: number, titulo: string, saldo: number, tipo: number) {
    this._numero = numero;
    this._agencia = agencia;
    this._titulo = titulo;
    this._saldo = saldo;
    this._tipo = tipo;
  }

  public get numero() {
    return this._numero
  }
  public set numero(numero: number) {
    this._numero = numero;
  }

  public get agencia() {
    return this._agencia
  }
  public set agencia(agencia: number) {
    this._agencia = agencia;
  }

  public get titulo() {
    return this._titulo
  }
  public set titulo(titulo: string) {
    this._titulo = titulo;
  }

  public get saldo() {
    return this._saldo
  }
  public set saldo(saldo: number) {
    this._saldo = saldo;
  }
  public get tipo() {
    return this._tipo
  }
  public set tipo(tipo: number) {
    this._tipo = tipo;
  }

  public sacar(valor: number): boolean {
    if(this._saldo < valor) {
      console.log('\nSaldo insuficiente!')
      return false;
    }

    this._saldo = this._saldo - valor;
    return true;
  }

  public depositar(valor:number) {
    this._saldo = this._saldo + valor;
  }

  public visualizar(): void {
    let tipo: string = "";

    switch(this._tipo) {
      case 1: 
        tipo = "Conta corrente";
        break
      case 2:
        tipo = "Conta Poupança";
        break;
    }

    console.log("\n*****************************************")
    console.log("Dados da conta: ")
    console.log("\n*****************************************")
    console.log(`Número da conta ${this._numero}`)
    console.log(`Agência: ${this._agencia}`)
    console.log(`Tipo de conta: ${tipo}`)
    console.log(`Títular ${this._titulo}`)
    console.log(`Saldo: ${this._saldo.toFixed(2)}`)
  }
}

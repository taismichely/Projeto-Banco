import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {

  private listarContas: Array <Conta>  = new Array<Conta>();

  numero: number = 0;

  procurarPorNumero(numero: number): void {
    let buscaConta = this.buscarNoArray(numero)

    if(buscaConta != null) {
      buscaConta.visualizar()
    }else {
      console.log(`Conta numero: ${numero} não foi encontrada!`)
    }
    
  }
  listarTodas(): void {
    for(let conta of this.listarContas) {
      conta.visualizar();
    }
  }
  cadastrar(conta: Conta): void {
    this.listarContas.push(conta)
    console.log(`A conta número: ${conta.numero} foi criada com sucesso!`);
  }
  atualizar(conta: Conta): void {
    let buscaConta = this.buscarNoArray(conta.numero)

    if(buscaConta!= null) {
      this.listarContas[this.listarContas.indexOf(buscaConta)] = conta
      console.log(`A conta numero: ${conta.numero} foi atualizada com sucesso!`)
    } else {
      console.log(`A conta numero: ${conta.numero} foi encontrada`)
    }
  }
  deletar(numero: number): void {
    let buscaConta = this.buscarNoArray(numero)

    if(buscaConta != null) {
      this.listarContas.splice(this.listarContas.indexOf(buscaConta), 1)
      console.log(`A conta do numero : ${numero} foi apagada com sucesso!`)
    } else {
      console.log('A conta do numero não foi encontrada!')
    }
  }
  sacar(numero: number, valor: number): void {
    let conta = this.buscarNoArray(numero)
    if(numero != null) {
      if(conta?.sacar(valor) == true) {
      console.log(`O saque do numero ${numero} foi efetuada com sucesso!`)  
      }
    } else {
      console.log(`A conta numero não foi encontrada`)
    }
  }
  depositar(numero: number, valor: number): void {
    let conta = this.buscarNoArray(numero);
		
		if (conta != null) {
			conta.depositar(valor);
            console.log(`\nO Depósito na Conta numero:     {} 
                        " foi efetuado com sucesso!`);		
		
		}else
        console.log(`A coanta número ${numero} não foi encontrada!`);
  }
  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    let contaOrigem = this.buscarNoArray(numeroOrigem);
		let contaDestino = this.buscarNoArray(numeroDestino);

		if (contaOrigem != null && contaDestino != null) {
            if(contaOrigem.sacar(valor) == true){
                contaDestino.depositar(valor);
                console.log("\nA Transferência da Conta numero: " + numeroOrigem + 
                            " para a Conta numero: " + numeroDestino + " foi efetuada com sucesso!", 
                          );		
            }
		
		}else
        console.log("\nA Conta numero: " + numeroOrigem + 
                    " e/ou a Conta numero: " + numeroDestino + " não foram encontradas!", 
        );
  }

  //Metodos adicionais
  public gerarNumero(): number {
    return ++ this.numero;
  }

  public buscarNoArray(numero: number): Conta | null {
    for (let conta of this.listarContas) {
      if (conta.numero === numero)
        return conta;
      }
        return null;
    }

}
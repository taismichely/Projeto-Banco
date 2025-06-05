import leia from 'readline-sync'
import {colors} from './src/util/Colors'
import { Conta } from './src/model/Conta'
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';

export function main() {
  let opcao: number

  const contacorrente: ContaCorrente = new ContaCorrente(2, 123, "Mariana", 15000, 1000, 1);
  contacorrente.visualizar();
  contacorrente.sacar(2000);
  contacorrente.visualizar();
  contacorrente.depositar(1000);
  contacorrente.visualizar();
  
  const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, "Victor", 1000, 10, 2);
  contapoupanca.visualizar();
  contapoupanca.sacar(200);
  contapoupanca.visualizar();
  contapoupanca.depositar(1000);
  contapoupanca.visualizar();

  while (true) {

    console.log('*********************************************************')
    console.log('                                                         ')
    console.log('                         BANCO                           ')
    console.log('                                                         ')
    console.log('*********************************************************')
    console.log('                                                         ')
    console.log('                 1- Criar conta                          ')
    console.log('                 2- Listar todas as Contas               ')
    console.log('                 3- Buscar Conta por Numero              ')
    console.log('                 4- Atualizar Dados da conta             ')
    console.log('                 5- Apagar Conta                         ')
    console.log('                 6- Sacar                                ')
    console.log('                 7- Depositar                            ')
    console.log('                 8- Transferir valores entre Contas      ')
    console.log('                 9- Sair                                 ')
    console.log('                                                         ')
    console.log('*********************************************************')
    console.log('                                                         ', colors.reset)

    console.log('Entre com a opção desejada: ')
    opcao = leia.questionInt('')
    
    if(opcao === 9) {
      console.log(colors.fg.greenstrong,'\nBanco - O seu futuro começa aqui!')
      sobre();
      process.exit(0);
    }
    switch(opcao) {
      case 1:
        console.log('\nCriar Conta\n');
        break
      case 2: 
        console.log('\nListar todas as Contas\n')
        break
      case 3:
        console.log('\nBuscar Conta por número\n')
        break
      case 4: 
        console.log('\nAtualizar dados da Conta\n')
        break
      case 5: 
        console.log('\nApagar a Conta\n')
        break
      case 6: 
        console.log('\nSaque\n')
        break
      case 7:
        console.log('\nDepósito\n')
        break
      case 8:
        console.log('\nTransferencia entre Contas\n')
        break
      default:
        console.log('\nOpção inválida!\n')
        break
    }
  }
}
function sobre(): void {
      console.log('\n********************************************************')
      console.log('Projeto desenvolvido por: Taís Michely')
      console.log('Generation Brasil - taise@genstudents.org')
      console.log('github.com/taismichely')
      console.log('*********************************************************')
}


main();
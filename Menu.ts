import leia from 'readline-sync'
import {colors} from './src/util/Colors'
import { Conta } from './src/model/Conta'

export function main() {
  let opcao: number
  const conta: Conta = new Conta(1, 123, 'Taís Michely', 10000, 1)
  conta.visualizar()
  conta.sacar(1500)
  conta.visualizar()
  conta.depositar(5000)
  conta.visualizar()

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
export function sobre(): void {
      console.log('\n********************************************************')
      console.log('Projeto desenvolvido por: Taís Michely')
      console.log('Generation Brasil - taise@genstudents.org')
      console.log('github.com/taismichely')
      console.log('*********************************************************')
}

main();
import leia from 'readline-sync'
import {colors} from './src/util/Colors'
import { Conta } from './src/model/Conta'
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from './src/controller/ContaController';

export function main() {

  //Instanciar classe ContaController
  let contaslist: ContaController = new ContaController();
  
  //
  let opcao, numero, agencia, saldo, tipo, limite, aniversario, valor, numeroDestino : number
  let titulo: string;
  const tiposContas = ['Conta Corrente', 'Conta Poupança'];

  console.log("\nCriar Contas\n");

  let cc1: ContaCorrente = new ContaCorrente(contaslist.gerarNumero(), 123, "João da Silva", 1000, 1, 100.0);
  contaslist.cadastrar(cc1);

  let cc2: ContaCorrente = new ContaCorrente(contaslist.gerarNumero(), 124, "Maria da Silva", 2000, 1, 100.0);
  contaslist.cadastrar(cc2);

  let cp1: ContaPoupanca = new ContaPoupanca(contaslist.gerarNumero(), 125, "Mariana dos Santos", 2, 4000, 12);
  contaslist.cadastrar(cp1);

  let cp2: ContaPoupanca = new ContaPoupanca(contaslist.gerarNumero(), 125, "Juliana Ramos", 8000, 2,15);
  contaslist.cadastrar(cp2);

  contaslist.listarTodas();

  // const contacorrente: ContaCorrente = new ContaCorrente(2, 123, "Mariana", 15000, 1000, 1);
  // contacorrente.visualizar();
  // contacorrente.sacar(2000);
  // contacorrente.visualizar();
  // contacorrente.depositar(1000);
  // contacorrente.visualizar();
  
  // const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, "Victor", 1000, 10, 2);
  // contapoupanca.visualizar();
  // contapoupanca.sacar(200);
  // contapoupanca.visualizar();
  // contapoupanca.depositar(1000);
  // contapoupanca.visualizar();

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
        console.log("Digiteb um número da agência: ")
        agencia = leia.questionInt('');

        console.log('Digite o nome do titular da conta: ')
        titulo = leia.question('');

        console.log('Digite o tipo de conta: ')
        tipo = leia.keyInSelect(tiposContas, '', {cancel: false}) + 1;

        console.log("Digite o saldo da conta (R$): ")
        saldo = leia.questionFloat('');

        switch(tipo) {
            case 1:
              console.log("Digite o limite da conta (R$):")
              limite = leia.questionFloat('')
              contaslist.cadastrar( new ContaCorrente(contaslist.gerarNumero(), agencia, titulo, saldo, tipo, limite));
              break
            case 2:
              console.log("Digite o dia de aniversário da conta poupança: ")
              aniversario = leia.questionInt('')
              contaslist.cadastrar( new ContaPoupanca(contaslist.gerarNumero(), agencia, titulo, saldo, tipo, aniversario)) 
              break
        }
        break

      case 2: 
        console.log('\nListar todas as Contas\n')
        contaslist.listarTodas();

        keyPress()
        break
      case 3:
        console.log('\nBuscar Conta por número\n')
        console.log('Buscar por numero de conta: ')
        numero = leia.questionInt('')
        contaslist.procurarPorNumero(numero)

        keyPress()
        break
      case 4: 
        console.log('\nAtualizar dados da Conta\n')
        console.log('Digite um numero da conta: ')
        numero = leia.questionInt('')

        let conta = contaslist.buscarNoArray(numero)

        if(conta != null) {
          console.log('Digite o número da agencia: ')
          agencia = leia.questionInt('')

          console.log('Digite o nome do titular da conta: ')
          titulo = leia.question('')

          tipo = conta.tipo;

          console.log('Digite o saldo da conta (R$): ')
          saldo = leia.questionFloat('')

          switch(tipo) {
            case 1:
              console.log('Digite o limite da conta (R$): ')
              limite = leia.questionFloat('')
              contaslist.atualizar(new ContaCorrente(numero, agencia, titulo, saldo, tipo, limite))
              break
            case 2:
              console.log('Digite o dia do aniversario da conta poupança: ')
              aniversario = leia.questionInt('')
              contaslist.atualizar(new ContaPoupanca(numero, agencia, titulo, saldo, tipo, aniversario))

              break
          }
        }else {
          console.log(`A conta numero: ${numero} não foi encontrada!`)
        }

        keyPress()
        break

      case 5: 
        console.log('\nApagar a Conta\n')
        console.log('Digite um numero da conta; ')
        numero = leia.questionInt('')
        contaslist.deletar(numero)
        keyPress()
        break
      case 6: 
        console.log('\nSaque\n')
        console.log("\n\nSaque\n\n");
            
                console.log("Digite o número da Conta: ");
                numero = leia.questionInt("");

                console.log("\nDigite o valor do Saque (R$): ");
                valor = leia.questionFloat("");

                contaslist.sacar(numero, valor);
        keyPress()
        break
      case 7:
        console.log('\nDepósito\n')
        console.log("Digite o número da Conta: ");
                numero = leia.questionInt("");

                console.log("\nDigite o valor do Depósito (R$): ");
                valor = leia.questionFloat("");

                contaslist.depositar(numero, valor);
        keyPress()
        break
      case 8:
        console.log('\nTransferencia entre Contas\n')
        console.log("Digite o número da Conta de Origem: ");
              numero = leia.questionInt("");

                console.log("Digite o número da Conta de Destino: ");
                numeroDestino = leia.questionInt("");

                console.log("\nDigite o valor do Depósito (R$): ");
                valor = leia.questionFloat("");

                contaslist.transferir(numero, numeroDestino, valor);

        keyPress()
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

function keyPress(): void {
  console.log('Pressione enter para continuar...')
  leia.prompt();
}


main();
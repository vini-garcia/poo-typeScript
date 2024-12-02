// 1)

class ContaBancaria {
  titular: string;
  saldo: number;

  constructor(titular: string, saldoInicial: number = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
      console.log(
        `Depósito de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`
      );
    } else {
      console.log("Valor de depósito inválido. Insira um valor positivo.");
    }
  }

  sacar(valor: number): void {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      console.log(
        `Saque de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`
      );
    } else if (valor > this.saldo) {
      console.log("Saldo insuficiente para realizar o saque.");
    } else {
      console.log("Valor de saque inválido. Insira um valor positivo.");
    }
  }

  exibirSaldo(): void {
    console.log(`Saldo atual da conta de ${this.titular}: R$${this.saldo.toFixed(2)}`);
  }
}

const conta = new ContaBancaria("João Silva", 1000);
conta.exibirSaldo();
conta.depositar(500);
conta.sacar(200);
conta.sacar(1500);
conta.exibirSaldo();

// 2)

class Livro {
  titulo: string;
  autor: string;
  paginas: number;
  lido: boolean;

  constructor(titulo: string, autor: string, paginas: number, lido: boolean = false) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.lido = lido;
  }

  marcarComoLido(): void {
    this.lido = true;
    console.log(`O livro "${this.titulo}" foi marcado como lido.`);
  }

  exibirDetalhes(): void {
    console.log(`Título: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`Páginas: ${this.paginas}`);
    console.log(`Lido: ${this.lido ? "Sim" : "Não"}`);
  }
}

const livro = new Livro("1984", "George Orwell", 328);
livro.exibirDetalhes();
livro.marcarComoLido();
livro.exibirDetalhes();

// 3)

class Produto {
  nome: string;
  preco: number;
  quantidade: number;

  constructor(nome: string, preco: number, quantidade: number) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  calcularValorTotalEmEstoque(): number {
    return this.preco * this.quantidade;
  }

  exibirDetalhes(): void {
    console.log(`Nome: ${this.nome}`);
    console.log(`Preço: R$${this.preco.toFixed(2)}`);
    console.log(`Quantidade: ${this.quantidade}`);
    console.log(`Valor Total em Estoque: R$${this.calcularValorTotalEmEstoque().toFixed(2)}`);
  }
}

const produto = new Produto("Cadeira de Escritório", 250.0, 10);
produto.exibirDetalhes();

// 4)

class Temperatura {
  valor: number;

  constructor(valor: number) {
    this.valor = valor;
  }

  converterParaFahrenheit(): number {
    return (this.valor * 9) / 5 + 32;
  }

  converterParaKelvin(): number {
    return this.valor + 273.15;
  }

  exibirConversoes(): void {
    console.log(`Temperatura em Celsius: ${this.valor.toFixed(2)}°C`);
    console.log(`Temperatura em Fahrenheit: ${this.converterParaFahrenheit().toFixed(2)}°F`);
    console.log(`Temperatura em Kelvin: ${this.converterParaKelvin().toFixed(2)}K`);
  }
}

const temperatura = new Temperatura(25);
temperatura.exibirConversoes();

// 5)

class Agenda {
  compromissos: string[];

  constructor() {
    this.compromissos = [];
  }

  adicionarCompromisso(compromisso: string): void {
    if (compromisso.trim()) {
      this.compromissos.push(compromisso);
      console.log(`Compromisso "${compromisso}" adicionado com sucesso.`);
    } else {
      console.log("O compromisso não pode ser vazio.");
    }
  }

  listarCompromissos(): void {
    if (this.compromissos.length === 0) {
      console.log("Nenhum compromisso agendado.");
    } else {
      console.log("Compromissos agendados:");
      this.compromissos.forEach((compromisso, index) => {
        console.log(`${index + 1}. ${compromisso}`);
      });
    }
  }
}

const minhaAgenda = new Agenda();

minhaAgenda.adicionarCompromisso("Reunião com o cliente às 10h");
minhaAgenda.adicionarCompromisso("Consulta médica às 15h");

minhaAgenda.listarCompromissos();

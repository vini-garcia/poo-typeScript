// 1)
class Veiculo {
  mover(): void {
    console.log("O veículo está se movendo.");
  }
}

class Carro extends Veiculo {
  mover(): void {
    console.log("O carro está sendo dirigindo.");
  }
}

class Bicicleta extends Veiculo {
  mover(): void {
    console.log("A bicicleta está sendo pedalanda.");
  }
}

const meuCarro = new Carro();
const minhaBicicleta = new Bicicleta();

meuCarro.mover();
minhaBicicleta.mover();

// 2)

abstract class FiguraGeometrica {
  abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
  constructor(private raio: number) {
    super();
  }

  calcularArea(): number {
    return Math.PI * this.raio * this.raio;
  }
}

class Quadrado extends FiguraGeometrica {
  constructor(private lado: number) {
    super();
  }

  calcularArea(): number {
    return this.lado * this.lado;
  }
}

class Triangulo extends FiguraGeometrica {
  constructor(private base: number, private altura: number) {
    super();
  }

  calcularArea(): number {
    return (this.base * this.altura) / 2;
  }
}

function imprimirAreas(figuras: FiguraGeometrica[]): void {
  figuras.forEach((figura) => {
    console.log(`Área: ${figura.calcularArea()}.`);
  });
}

const meuCirculo = new Circulo(5);
const meuQuadrado = new Quadrado(4);
const meuTriangulo = new Triangulo(3, 6);

const figuras: FiguraGeometrica[] = [meuCirculo, meuQuadrado, meuTriangulo];

imprimirAreas(figuras);

// 3)

class Pagamento {
  processar(): void {
    console.log("Processando pagamento...");
  }
}

class PagamentoCartao extends Pagamento {
  constructor(private numeroCartao: string) {
    super();
  }

  processar(): void {
    if (this.validarCartao()) {
      console.log("Pagamento por cartão processado com sucesso.");
    } else {
      console.log("Número do cartão inválido.");
    }
  }

  private validarCartao(): boolean {
    const regex = /^[0-9]{16}$/;
    return regex.test(this.numeroCartao);
  }
}

class PagamentoBoleto extends Pagamento {
  processar(): void {
    const codigoBoleto = this.gerarCodigoBoleto();
    console.log(`Boleto gerado com o código: ${codigoBoleto}.`);
  }

  private gerarCodigoBoleto(): string {
    return Math.random().toString().slice(2, 14);
  }
}

function processarPagamentos(pagamentos: Pagamento[]): void {
  pagamentos.forEach((pagamento) => {
    pagamento.processar();
  });
}

const pagamento1 = new PagamentoCartao("1234567890123456");
const pagamento2 = new PagamentoBoleto();

const pagamentos: Pagamento[] = [pagamento1, pagamento2];

processarPagamentos(pagamentos);

// 4)

class Animal {
  private energia: number;

  constructor(energiaInicial: number) {
    this.energia = energiaInicial;
  }

  comer(quantidade: number): void {
    this.energia += quantidade;
    console.log(`Energia após comer: ${this.energia}.`);
  }

  statusEnergia(): void {
    console.log(`Nível de energia atual: ${this.energia}.`);
  }
}

class Leao extends Animal {
  constructor(energiaInicial: number) {
    super(energiaInicial);
  }

  comer(): void {
    console.log("Leão está caçando.");
    const energiaGasta = 10;
    const energiaRecuperada = 20;
    this.usarEnergia(energiaGasta);
    super.comer(energiaRecuperada);
  }

  private usarEnergia(quantidade: number): void {
    console.log(`Energia gasta ao caçar: ${quantidade}.`);
    (this as any).energia -= quantidade;
  }
}

class Passaro extends Animal {
  constructor(energiaInicial: number) {
    super(energiaInicial);
  }

  comer(): void {
    const energiaRecuperada = 15;
    console.log("Pássaro está se alimentando.");
    super.comer(energiaRecuperada);
  }
}

function demonstrarPolimorfismo(animais: Animal[]): void {
  animais.forEach((animal) => {
    animal.comer(1);
    animal.statusEnergia();
  });
}

const leao = new Leao(50);
const passaro = new Passaro(30);

const animais: Animal[] = [leao, passaro];

demonstrarPolimorfismo(animais);

// 5)

abstract class Funcionario {
  private nome: string;
  public salario: number;

  constructor(nome: string, salario: number) {
    this.nome = nome;
    this.salario = salario;
  }

  abstract calcularBonus(): number;

  calcularSalarioComBonus(): number {
    return this.salario + this.calcularBonus();
  }

  getNome(): string {
    return this.nome;
  }
}

class Gerente extends Funcionario {
  constructor(nome: string, salario: number) {
    super(nome, salario);
  }

  calcularBonus(): number {
    return this.salario * 0.1;
  }
}

class Operario extends Funcionario {
  constructor(nome: string, salario: number) {
    super(nome, salario);
  }

  calcularBonus(): number {
    return this.salario * 0.05;
  }
}

function processarSalariosComBonus(funcionarios: Funcionario[]): void {
  funcionarios.forEach((funcionario) => {
    const salarioComBonus = funcionario.calcularSalarioComBonus();
    console.log(
      `Funcionário: ${funcionario.getNome()}, Salário com Bônus: ${salarioComBonus.toFixed(2)}.`
    );
  });
}

const gerente = new Gerente("Amanda", 5000);
const operario = new Operario("Vini", 3000);

const funcionarios: Funcionario[] = [gerente, operario];

processarSalariosComBonus(funcionarios);

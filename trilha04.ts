// 1)

interface Produto {
  id: number;
  nome: string;
  preco: number;
}

class ItemLoja implements Produto {
  id: number;
  nome: string;
  preco: number;

  constructor(id: number, nome: string, preco: number) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
  }
  quantidade: number;
  calcularValorTotalEmEstoque(): number {
    throw new Error("Method not implemented.");
  }

  exibirDetalhes(): void {
    console.log(`ID: ${this.id}, Nome: ${this.nome}, Preço: R$${this.preco.toFixed(2)}`);
  }
}

const item = new ItemLoja(1, "Notebook", 2500.0);
item.exibirDetalhes();

// 2)

interface Documento {
  titulo: string;
  conteudo: string;
}

class Texto implements Documento {
  titulo: string;
  conteudo: string;

  constructor(titulo: string, conteudo: string) {
    this.titulo = titulo;
    this.conteudo = conteudo;
  }

  exibir(): string {
    return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
  }
}

const documentoTexto = new Texto("Relatório Anual", "Este é o conteúdo do relatório anual.");
console.log(documentoTexto.exibir());

// 3)

interface ProdutoLoja {
  codigo: number;
  nome: string;
}

class Loja {
  private produtos: ProdutoLoja[];

  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto: ProdutoLoja): void {
    this.produtos.push(produto);
    console.log(`Produto adicionado: ${produto.nome} (Código: ${produto.codigo})`);
  }

  buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
    return this.produtos.find((produto) => produto.codigo === codigo);
  }
}

const loja = new Loja();

loja.adicionarProduto({ codigo: 1, nome: "Notebook" });
loja.adicionarProduto({ codigo: 2, nome: "Smartphone" });
loja.adicionarProduto({ codigo: 3, nome: "Tablet" });

const produtoEncontrado1 = loja.buscarProdutoPorCodigo(2);
console.log(
  produtoEncontrado1 ? `Produto encontrado: ${produtoEncontrado1.nome}` : "Produto não encontrado."
);

const produtoEncontrado2 = loja.buscarProdutoPorCodigo(4);
console.log(
  produtoEncontrado2 ? `Produto encontrado: ${produtoEncontrado2.nome}` : "Produto não encontrado."
);

// 4)

interface Livro {
  titulo: string;
  autor: string;
  disponivel: boolean;
}

class Biblioteca {
  private livros: Livro[];

  constructor() {
    this.livros = [];
  }

  adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
    console.log(`Livro adicionado: ${livro.titulo} por ${livro.autor}`);
  }

  buscarLivrosDisponiveis(): Livro[] {
    return this.livros.filter((livro) => livro.disponivel);
  }
}

const biblioteca = new Biblioteca();

biblioteca.adicionarLivro({
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  disponivel: true,
});
biblioteca.adicionarLivro({ titulo: "1984", autor: "George Orwell", disponivel: false });
biblioteca.adicionarLivro({
  titulo: "O Apanhador no Campo de Centeio",
  autor: "J.D. Salinger",
  disponivel: true,
});

const livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();
console.log("Livros disponíveis:");
livrosDisponiveis.forEach((livro) => console.log(`- ${livro.titulo} por ${livro.autor}`));

// 5)

interface LivroBiblioteca {
  titulo: string;
  autor: string;
  genero: string;
  disponivel: boolean;
}

class BibliotecaGestao {
  private livros: LivroBiblioteca[];

  constructor() {
    this.livros = [];
  }

  adicionarLivro(livro: LivroBiblioteca): void {
    this.livros.push(livro);
    console.log(`Livro adicionado: ${livro.titulo} por ${livro.autor}`);
  }

  filtrarPorGenero(genero: string): LivroBiblioteca[] {
    return this.livros.filter((livro) => livro.genero.toLowerCase() === genero.toLowerCase());
  }

  buscarPorAutor(autor: string): LivroBiblioteca[] {
    return this.livros.filter((livro) => livro.autor.toLowerCase() === autor.toLowerCase());
  }

  obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
    return this.livros
      .filter((livro) => livro.disponivel)
      .sort((a, b) => a.titulo.localeCompare(b.titulo));
  }
}

const bibliotecaGestao = new BibliotecaGestao();

bibliotecaGestao.adicionarLivro({
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  genero: "Fantasia",
  disponivel: true,
});
bibliotecaGestao.adicionarLivro({
  titulo: "1984",
  autor: "George Orwell",
  genero: "Distopia",
  disponivel: false,
});
bibliotecaGestao.adicionarLivro({
  titulo: "O Apanhador no Campo de Centeio",
  autor: "J.D. Salinger",
  genero: "Ficção",
  disponivel: true,
});
bibliotecaGestao.adicionarLivro({
  titulo: "Cem Anos de Solidão",
  autor: "Gabriel García Márquez",
  genero: "Realismo Mágico",
  disponivel: true,
});

const fantasiLivros = bibliotecaGestao.filtrarPorGenero("Fantasia");
console.log("Livros de Fantasia:");
fantasiLivros.forEach((livro) => console.log(`- ${livro.titulo} por ${livro.autor}`));

const livrosPorAutor = bibliotecaGestao.buscarPorAutor("J.D. Salinger");
console.log("Livros por J.D. Salinger:");
livrosPorAutor.forEach((livro) => console.log(`- ${livro.titulo}`));

const livrosDisponiveis2 = bibliotecaGestao.obterLivrosDisponiveisOrdenados();
console.log("Livros disponíveis ordenados por título:");
livrosDisponiveis2.forEach((livro) => console.log(`- ${livro.titulo} por ${livro.autor}`));

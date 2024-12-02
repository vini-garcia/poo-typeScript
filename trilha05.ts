// 1)

abstract class TaskManager {
  protected tasks: Set<string>;

  constructor() {
    this.tasks = new Set<string>();
  }

  abstract addTask(task: string): void;
  abstract listTasks(): string[];
}

class Project extends TaskManager {
  addTask(task: string): void {
    if (!this.tasks.has(task)) {
      this.tasks.add(task);
      console.log(`Tarefa adicionada ao projeto: ${task}.`);
    } else {
      console.log(`Tarefa já existe no projeto: ${task}.`);
    }
  }

  listTasks(): string[] {
    return Array.from(this.tasks);
  }
}

class DailyTasks extends TaskManager {
  addTask(task: string): void {
    if (!this.tasks.has(task)) {
      this.tasks.add(task);
      console.log(`Tarefa diária adicionada: ${task}.`);
    } else {
      console.log(`Tarefa diária já existe: ${task}.`);
    }
  }

  listTasks(): string[] {
    return Array.from(this.tasks);
  }
}

const projeto = new Project();
projeto.addTask("Design do layout");
projeto.addTask("Implementação do backend");
projeto.addTask("Design do layout");

const tarefasDiarias = new DailyTasks();
tarefasDiarias.addTask("Reunião matinal");
tarefasDiarias.addTask("Revisão de código");
tarefasDiarias.addTask("Reunião matinal");

console.log("Tarefas do Projeto:", projeto.listTasks());
console.log("Tarefas Diárias:", tarefasDiarias.listTasks());

// 2)

abstract class Inventory {
  protected items: Record<string, number>;

  constructor() {
    this.items = {};
  }

  abstract addItem(item: string, quantity: number): void;
  abstract removeItem(item: string): void;
  abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
  addItem(item: string, quantity: number): void {
    if (this.items[item]) {
      this.items[item] += quantity;
    } else {
      this.items[item] = quantity;
    }
    console.log(`Adicionado: ${quantity}x ${item} ao armazém.`);
  }

  removeItem(item: string): void {
    if (this.items[item]) {
      delete this.items[item];
      console.log(`Removido: ${item} do armazém.`);
    } else {
      console.log(`Item não encontrado no armazém: ${item}.`);
    }
  }

  getInventory(): Record<string, number> {
    return this.items;
  }
}

class StoreInventory extends Inventory {
  private readonly maxQuantityPerItem = 10;

  addItem(item: string, quantity: number): void {
    if (this.items[item]) {
      const newQuantity = this.items[item] + quantity;
      if (newQuantity > this.maxQuantityPerItem) {
        console.log(`Não é possível adicionar ${quantity}x ${item}. Limite excedido!`);
        this.items[item] = this.maxQuantityPerItem;
      } else {
        this.items[item] = newQuantity;
      }
    } else {
      if (quantity > this.maxQuantityPerItem) {
        console.log(`Não é possível adicionar ${quantity}x ${item}. Limite é 10.`);
        this.items[item] = this.maxQuantityPerItem;
      } else {
        this.items[item] = quantity;
      }
    }
    console.log(`Atualizado: ${item} com quantidade ${this.items[item]} na loja.`);
  }

  removeItem(item: string): void {
    if (this.items[item]) {
      delete this.items[item];
      console.log(`Removido: ${item} da loja.`);
    } else {
      console.log(`Item não encontrado na loja: ${item}.`);
    }
  }

  getInventory(): Record<string, number> {
    return this.items;
  }
}

const warehouse = new WarehouseInventory();
warehouse.addItem("Cadeira", 50);
warehouse.addItem("Mesa", 20);
warehouse.removeItem("Cadeira");
console.log("Inventário do Armazém:", warehouse.getInventory());

const store = new StoreInventory();
store.addItem("Caneta", 5);
store.addItem("Caderno", 12);
store.addItem("Caneta", 6);
store.removeItem("Caneta");
console.log("Inventário da Loja:", store.getInventory());

// 3)

abstract class FavoriteManager {
  protected favorites: Set<string>;

  constructor() {
    this.favorites = new Set<string>();
  }

  abstract addFavorite(item: string): void;
  abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
  addFavorite(item: string): void {
    if (this.favorites.has(item)) {
      console.log(`Filme já está nos favoritos: ${item}`);
    } else {
      this.favorites.add(item);
      console.log(`Filme adicionado aos favoritos: ${item}`);
    }
  }

  getFavorites(): string[] {
    return Array.from(this.favorites).sort();
  }
}

class BooksFavoriteManager extends FavoriteManager {
  addFavorite(item: string): void {
    if (this.favorites.has(item)) {
      console.log(`Livro já está nos favoritos: ${item}`);
    } else {
      const currentFavorites = Array.from(this.favorites);
      this.favorites = new Set<string>([item, ...currentFavorites]);
      console.log(`Livro adicionado aos favoritos no início: ${item}`);
    }
  }

  getFavorites(): string[] {
    return Array.from(this.favorites);
  }
}

const movieManager = new MoviesFavoriteManager();
movieManager.addFavorite("Inception");
movieManager.addFavorite("Matrix");
movieManager.addFavorite("Inception");
console.log("Filmes Favoritos:", movieManager.getFavorites());

const bookManager = new BooksFavoriteManager();
bookManager.addFavorite("1984");
bookManager.addFavorite("Brave New World");
bookManager.addFavorite("1984");
console.log("Livros Favoritos:", bookManager.getFavorites());

// 4)

abstract class VoteSystem {
  protected votes: Record<string, number>;

  constructor() {
    this.votes = {};
  }

  abstract voteFor(candidate: string): void;
  abstract getResults(): object;
}

class Election extends VoteSystem {
  voteFor(candidate: string): void {
    if (this.votes[candidate]) {
      this.votes[candidate]++;
    } else {
      this.votes[candidate] = 1;
    }
    console.log(`Voto registrado para: ${candidate}`);
  }

  getResults(): object {
    return this.votes;
  }
}

class Poll extends VoteSystem {
  voteFor(candidate: string): void {
    if (this.votes[candidate]) {
      this.votes[candidate]++;
    } else {
      this.votes[candidate] = 1;
    }
    console.log(`Voto registrado para: ${candidate}`);
  }

  getResults(): object {
    const sortedResults = Object.entries(this.votes)
      .sort(([, votesA], [, votesB]) => votesB - votesA)
      .map(([candidate, votes]) => ({ candidate, votes }));

    return sortedResults;
  }
}

const election = new Election();
election.voteFor("Amanda");
election.voteFor("Vini");
election.voteFor("Amanda");
console.log("Resultados da Eleição:", election.getResults());

const poll = new Poll();
poll.voteFor("Café");
poll.voteFor("Chá");
poll.voteFor("Café");
poll.voteFor("Água");
console.log("Resultados da Enquete:", poll.getResults());

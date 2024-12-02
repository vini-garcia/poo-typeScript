// 1)

class Cart {
  private items: { name: string; price: number }[] = [];

  addItem(item: { name: string; price: number }): void {
    this.items.push(item);
    console.log(`Item adicionado: ${item.name}, Preço: ${item.price}`);
  }

  calculateTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  getItems(): { name: string; price: number }[] {
    return this.items;
  }
}

class Payment {
  private status: boolean = false;

  processPayment(total: number): void {
    if (total > 0) {
      this.status = true;
      console.log("Pagamento processado com sucesso.");
    } else {
      console.log("Total insuficiente para processar o pagamento.");
    }
  }

  getStatus(): boolean {
    return this.status;
  }
}

class Shipping {
  private status: boolean = false;

  updateStatus(isPaid: boolean): void {
    if (isPaid) {
      this.status = true;
      console.log("Status de envio atualizado: enviado.");
    } else {
      console.log("O pagamento não foi processado. Não é possível enviar.");
    }
  }

  getStatus(): boolean {
    return this.status;
  }
}

class Order {
  private cart: Cart;
  private payment: Payment;
  private shipping: Shipping;

  constructor() {
    this.cart = new Cart();
    this.payment = new Payment();
    this.shipping = new Shipping();
  }

  addItem(item: { name: string; price: number }): void {
    this.cart.addItem(item);
  }

  processOrder(): void {
    const total = this.cart.calculateTotalPrice();
    this.payment.processPayment(total);
    this.shipping.updateStatus(this.payment.getStatus());
  }

  getOrderSummary(): void {
    console.log("Resumo do Pedido:");
    console.log("Itens:", this.cart.getItems());
    console.log("Preço Total:", this.cart.calculateTotalPrice());
    console.log("Status do Pagamento:", this.payment.getStatus() ? "Pago" : "Pendente");
    console.log("Status de Envio:", this.shipping.getStatus() ? "Enviado" : "Pendente");
  }
}

const orderRefatorada = new Order();
orderRefatorada.addItem({ name: "Notebook", price: 1200 });
orderRefatorada.addItem({ name: "Mouse", price: 50 });
orderRefatorada.processOrder();
orderRefatorada.getOrderSummary();

// 2)

class EmailNotification {
  sendEmail(email: string, subject: string, message: string): void {
    console.log(`Enviando email para: ${email}`);
    console.log(`Assunto: ${subject}`);
    console.log(`Mensagem: ${message}`);
  }
}

class UserManager {
  private users: string[] = [];
  private emailNotification: EmailNotification;

  constructor() {
    this.emailNotification = new EmailNotification();
  }

  createUser(username: string, email: string): void {
    this.users.push(username);
    console.log(`Usuário criado: ${username}`);
    this.emailNotification.sendEmail(email, "Bem-vindo!", `Olá ${username}, bem-vindo ao sistema!`);
  }

  listUsers(): void {
    console.log("Lista de usuários:", this.users);
  }
}

const userManagerRefatorado = new UserManager();
userManagerRefatorado.createUser("Amanda", "amanda@mail.com");
userManagerRefatorado.createUser("Vini", "vini@mail.com");
userManagerRefatorado.listUsers();

// 3)

class ContactValidator {
  validate(contact: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(contact);
  }
}

class EmailSender {
  private validator: ContactValidator;

  constructor(validator: ContactValidator) {
    this.validator = validator;
  }

  sendEmail(contact: string, subject: string, message: string): void {
    if (this.validator.validate(contact)) {
      console.log(`Enviando e-mail para: ${contact}`);
      console.log(`Assunto: ${subject}`);
      console.log(`Mensagem: ${message}`);
    } else {
      console.log(`Contato inválido: ${contact}`);
    }
  }
}

const contactValidator = new ContactValidator();
const emailSenderRefatorado = new EmailSender(contactValidator);
emailSenderRefatorado.sendEmail("amanda@mail.com", "Bem vinda", "Olá, Amanda. Bem vinda!");
emailSenderRefatorado.sendEmail("vini@mail.com", "Bem vindo", "Olá, Vini. Bem vindo!");

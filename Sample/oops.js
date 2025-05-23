// 1

class Person {
  constructor(n, a) {
    this.name = n;
    this.age = a;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

let det = new Person("Abhay", 20);
let det2 = new Person("Ekanath", 20);
// console.log(det.introduce());
// console.log(det2.introduce());

// 2

class Rectangle {
  constructor(w, h) {
    this.width = w;
    this.height = h;
  }
  area() {
    return `Area = ${this.width * this.height}`;
  }
  perimeter() {
    return `Permeter = ${2 * (this.width + this.height)}`;
  }
}

let value = new Rectangle(10, 10);
// console.log(value.area());
// console.log(value.perimeter());

// 3

class BankAccount {
  constructor(n, b) {
    this.name = n;
    this.bal = b;
  }
  deposit(amount) {
    this.bal = this.bal + amount;
  }
  withdraw(amount) {
    this.bal = this.bal - amount;
  }
  getBalance() {
    return `${this.name}'s Current balance = ${this.bal}`;
  }
}

let bank = new BankAccount("Abhay", 1000);
// console.log(bank.getBalance());
// bank.deposit(500)
// console.log(bank.getBalance());
// bank.withdraw(200);
// console.log(bank.getBalance());

// 4

class Car {
  constructor(make, model, y, mil) {
    this.make = make;
    this.model = model;
    this.y = y;
    this.mil = mil;
  }
  drive(distance) {
    this.mil = this.mil + distance;
  }
  getInfo() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.y}, Mileage: ${this.mil}`;
  }
}

let info = new Car("Toyota", "Camry", 2000, 10000);
// console.log(info.getInfo());
// info.drive(300);
// console.log(info.getInfo());
// info.drive(150);
// console.log(info.getInfo());

// 5

class Library {
  books = [];

  constructor(name) {
    this.name = name;
  }
  addBook(title, author) {
    let book = {
      title,
      author,
    };
    this.books = [...this.books,book];
  }
	removeBook(title){
		let box=[];
		for (let i = 0; i<this.books.length; i++){
			if(this.books[i].title != title){
				box = [...box,this.books[i]]
			}
		}
		this.books = box
	}
	listBooks() {
		return this.books
	}
}

let lib = new Library('City Library')
lib.addBook('The Great Gatsby', 'F. Scott Fitzgerald')
lib.addBook('The Kill a Mockingbird', 'Harper Lee')
console.log(lib.listBooks());
lib.removeBook('The Great Gatsby');
console.log(lib.listBooks());

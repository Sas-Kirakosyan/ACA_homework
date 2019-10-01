//1

class Author{
    constructor(name, email, gender){
        this.name = name;
        this.email = email;
        this.gender = gender;
    }
    toString(){
        return ` Author name is ${this.name} and Email is ${this.email} and gender is ${this.gender}  `
    }
}

const author = new Author('Sevak', 'sevak@Gmail.com', 'male' );

class Book {
    constructor(title, author, price, quantity){
        this._title = title;
        this._author = author;
        this._price = price;
        this._quantity = quantity;
    }
    get Title(){
        return `${this.title}`
    }
    set Title(newTitle){
     this._title = newTitle;
    }
    get Author(){
        return `${this._author}`
    }
    set Author(newAuthor){
     this._author = newAuthor;
    }
    get Price(){
        return `${this._price}`
    }

    set Price(newPrice){
     this._price = newPrice;
    }
   get Quantity(){
       return `${this._quantity}`
   }
   set Quantity(newQuantity){
       this._quantity = newQuantity;
   }

      get Profit(){
    return 'profit is : ' + this._quantity * this._price;
    }
     tostring(){
        return `book title is ${this._title} author is ${this._author} price is ${this._price}  and quantity is ${this._quantity}`;
    }
}

let book1 = new Book('poem','Sevak', 50, 1500);

//2
class Acount{
constructor(id, name, balance){
  this._id = id;
  this._name = name;
  this._balance = balance;
 }
get id(){
    return `${this._id}`;
}
set id(newId){
    this._id = newId;
}

get Name(){
    return `${this._name}`
}

set Name(newName){
  this._name = newName;
}
set Balance(newBalance){
    this._balance = newBalance;
  }

  credit(amount){
      if(amount < this._balance){
      return  this._balance - amount 
      }else{
      return  'Amount exceeded balance';  
      }
   }
   transferTo(anotherAccount, amount){
       if(amount < this._balance){
        anotherAccount += this._balance - amount;
        return this._balance;
       }else{
           return 'Amount exceeded balance';
       }
    }
    static identifyAccounts(accountFirst, accountSecond){
     if(`${accountFirst._id}` === `${accountSecond._id}` && 
     `${accountFirst._name}` === `${accountSecond._name}` && 
     `${accountFirst._balance}` === `${accountSecond._balance}`){
        return 'Its the same account' 
     }else{
         return 'Its not the same account'
     }
    }
    toString(){
  return `id is  ${this._id} name is ${this._name} and balance is ${this._balance}`
    }
}

let accountFirst = new Acount(2, 'Sas', 3000);
let accountSecond = new Acount(2, 'Sas', 3000);


//3
class Person{
    constructor(firstName, lastName, gender, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }
   get firstName(){
     return  `${this._firstName}`
   } 
   set firstName(newfirstName){
     this._firstName = newfirstName;
   }
   get lastName(){
    return  `${this._latstName}`
  } 
  set lastName(newlastName){
    this._lastName = newlastName;
  }
  get gender(){
    return  `${this._gander}`
  } 
  set gender(newGender){
    this._gender = newGender;
  }
  get age(){
    return  `${this._age}`
  } 
  set age(newAge){
    this._age = newAge;
  }
  toString(){
      return  ` person firsname is ${this._firstName} and lastname 
      is ${this._lastName} and gender is ${this._gender} and age is ${this._age}`
  }

}

let person1 = new Person('sas', 'Kirakosyan', 'male', 'gender')

class Student extends Person{
    constructor(firstName, lastName, gender, age, year, fee){
        super(firstName, lastName, gender, age);
        this._year = year;
        this._fee = fee;
    }
    get year(){
        return this._year;
    }
    set year(newYear){
      this._year = newYear;  
    }
    passExam(program, grade){
       if(grade>=50){
           this._year++;//   I dont understend 
           //the requirment the exersize???
       } 
    }
}

let student1 = new Student('Gagik', 'Asatryan', 25,  2005, '2000$');












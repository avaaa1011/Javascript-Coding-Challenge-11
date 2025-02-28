//task 1: creating Book class
class Book //creating a class with multiple properties
{
    constructor(title, author, isbn, copies)
    {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    } 
    getDetails() //adding a method that will return book information
    {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }
    updateCopies(quantity) //adding a method that will update the system when a book is borrowed/returned
    {
        this.copies += quantity; 
    }
}
//test cases
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"
book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

//task 2: creating Borrower class
class Borrower //new class with multiple properties 
{
    constructor(name, borrowerId)
    {
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    }
    borrowBook(book) //adding a method that adds books to borrowedBooks
    {
        this.borrowedBooks.push(book); //adds books 
    }
    returnBook (book) //method that removes books from borrowedBooks 
    {
        this.borrowedBooks =  this.borrowedBooks.filter(b => b !== book); //removes books 
    }
}
//test data:
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]
borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: []
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

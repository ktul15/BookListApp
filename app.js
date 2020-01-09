// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn){
        this.title = title,
        this.author = author,
        this.isbn = isbn
    }
}

// UI Class: Handle UI tasks
class UI {
    static displayBooks(){
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '3434434'
            },
            {
                title: 'Book Two',
                author: 'Jane Doe',
                isbn: '45545'
            }
        ]

        const books = StoredBooks;
        books.forEach((book) => UI.addBooktoList(book));
    }
}
// Store Class: Handles Storage

// Event: Display Books

// Event: Add a book

// Event: Remove a book




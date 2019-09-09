import { Component, OnInit } from '@angular/core';
import { BookService } from './shared/book.service'
import { Book } from './shared/book';
@Component({
  selector: 'bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css'],
  providers:[BookService]
})
export class BookstoreComponent implements OnInit {
  books:Book[];
  editState:boolean=false;
  bookToEdit?:Book;
  constructor(private bookService:BookService) {

   }

  ngOnInit() {
    this.bookService.getBooks().subscribe(books=>{
      this.books=books;
    })
  }
  deleteBook(event , book:Book){
    this.bookService.deleteBook(book);
  }
  editBook(event,book:Book){
    this.editState=true;
    this.bookToEdit={...book};
  }
 
  changeState(concatState){
    this.editState=concatState[0];
    this.bookToEdit=concatState[1];
  }
}

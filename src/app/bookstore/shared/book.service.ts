import { Injectable } from '@angular/core';

import { AngularFirestore , AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';

import { Book } from './book';


@Injectable()
export class BookService {
  booksCollection:AngularFirestoreCollection<Book>
  books:Observable<Book[]>;
  bookDoc:AngularFirestoreDocument<Book>;
  constructor (public bookService : AngularFirestore ){
   
   this.booksCollection = this.bookService.collection('books',ref=>ref.orderBy('name','asc'));
   
    this.books=this.booksCollection.snapshotChanges().map(
      changes=>{
        return changes.map(a=>{
          const data=a.payload.doc.data() as Book;
          data.id=a.payload.doc.id;
          return data;
        })
      }
    );
  }
  getBooks(){
    return this.books;
  }

  addBook(book:Book){
    this.booksCollection.add(book);
  }
  deleteBook(book:Book){
    this.bookDoc=this.bookService.doc(`books/${book.id}`);
    this.bookDoc.delete();
  }
  updateBook(book:Book){
    this.bookDoc=this.bookService.doc(`books/${book.id}`);
    this.bookDoc.update(book);
  }
}

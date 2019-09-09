import { Component, OnInit , Input , Output, EventEmitter } from '@angular/core';
import { BookService } from '../shared/book.service';
import { Book } from '../shared/book';
import { NgForm , FormControl , FormGroup , Validators } from '@angular/forms'
@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']  
})
export class BookListComponent implements OnInit {
  book:Book={
    name:'',
    img:'',
    price:''
  }

  concatState:any[];
  @Input() bookToEdit:Book;
  @Input() editState;
  @Output() state:EventEmitter<any[]>=new EventEmitter;
  @Output() reload:EventEmitter<any>=new EventEmitter;
  constructor(private bookService:BookService) { }

  ngOnInit() {
   
  }

 onSubmit(){
   if(this.book.name !='' && this.book.img && this.book.price !=''){
      this.bookService.addBook(this.book);
      this.book.name='';
      this.book.img='';
      this.book.price='';
   }
  }
  emptyForm(book:Book){
    this.book.name='';
    this.book.img='';
    this.book.price='';
  }
  
  updateBook(book:Book){
    this.bookService.updateBook(book);
    this.clearState();
  }
  cancelForm(){
    this.editState=false;
    this.bookToEdit=null;
    this.concatState=[this.editState,this.bookToEdit];
    this.state.emit(this.concatState);
  }
  clearState(){
    this.editState=false;
    this.bookToEdit=null;
    this.concatState=[this.editState,this.bookToEdit];
    this.state.emit(this.concatState);
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { BookstoreComponent } from './bookstore/bookstore.component';
import { BookListComponent } from './bookstore/book-list/book-list.component';

import { BookService} from './bookstore/shared/book.service';


@NgModule({
  declarations: [
    AppComponent,
    BookstoreComponent,
    BookListComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,'sun-book'),
    AngularFirestoreModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }

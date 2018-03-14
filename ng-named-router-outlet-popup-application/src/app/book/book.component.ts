import { Component, OnInit } from '@angular/core';
import {ON_OFF_ANIMATION} from '../animations/on-off.animation';
import {Book} from '../book';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  animations: [ ON_OFF_ANIMATION ]
})
export class BookComponent implements OnInit {

  books: Promise<Book[]>;

  constructor(private bookService: BookService, private router: Router) {
  }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }
  edit(book: Book) {
    this.bookService.resetBookState(book).then( () =>
      this.router.navigate([{ outlets: { bookPopup: [ 'update-book', book.id ] }}])
    );
  }

}

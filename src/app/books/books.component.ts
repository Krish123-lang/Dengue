import { Component } from '@angular/core';

// For NgFor
interface Book {
  name: string;
  autor: string;
  image: string;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  isDisabled = true
  onClick() {
    alert('Touched !!');
  }

  // Two way binding
  myname = '';

  // Also for NgFor
  books: Book[] = [
    {
      name: "Resident Evil",
      autor: "Krishna",
      image: "https://wallpapers.com/images/featured/resident-evil-bch1g9v6o0eyn113.jpg"
    },
    {
      name: "Harry Potter",
      autor: "JK Rowling",
      image: "https://wallpapers.com/images/featured/resident-evil-bch1g9v6o0eyn113.jpg"
    },
    {
      name: "Adventures of Tom Sawyer",
      autor: "Mark Twain",
      image: "https://wallpapers.com/images/featured/resident-evil-bch1g9v6o0eyn113.jpg",
    },
    {
      name: "Alice in Wonderland",
      autor: "Lewis Carrol",
      image: "https://wallpapers.com/images/featured/resident-evil-bch1g9v6o0eyn113.jpg",
    },
    {

      name: "Ancient Mariner",
      autor: "Coleridge",
      image: "https://wallpapers.com/images/featured/resident-evil-bch1g9v6o0eyn113.jpg",
    },
    {
      name: "Arms and the Man",
      autor: " G.B.Shaw",
      image: "https://wallpapers.com/images/featured/resident-evil-bch1g9v6o0eyn113.jpg",
    },
  ]

  // NgIf directives
  isShowing = true;
}

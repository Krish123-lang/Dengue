import { Component } from '@angular/core';

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

  name = "Resident Evil"
  autor = "Krishna"
  image = "https://wallpapers.com/images/featured/resident-evil-bch1g9v6o0eyn113.jpg"

  name1 = "Harry Potter"
  autor1 = "JK Rowling"
  image1 = "https://wallpapers.com/images/featured/resident-evil-bch1g9v6o0eyn113.jpg"


  name2 = "Adventures of Tom Sawyer"
  autor2 = "Mark Twain"
  image2 = "https://wallpapers.com/images/featured/resident-evil-bch1g9v6o0eyn113.jpg"

  name3 = "Alice in Wonderland"
  autor3 = "Lewis Carrol"
  image3 = "https://wallpapers.com/images/featured/resident-evil-bch1g9v6o0eyn113.jpg"

  name4 = "Ancient Mariner"
  autor4 = "Coleridge"
  image4 = "https://wallpapers.com/images/featured/resident-evil-bch1g9v6o0eyn113.jpg"

  name5 = "Arms and the Man"
  autor5 = " G.B.Shaw"
  image5 = "https://wallpapers.com/images/featured/resident-evil-bch1g9v6o0eyn113.jpg"
}

import { Component } from '@angular/core';

interface Tile {
  text: string;
  cols: number;
  rows: number;
  color: string;
}

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {

  tiles: Tile[] = [
    { text: 'One', cols: 1, rows: 5, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 6, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 6, color: 'lightpink' },
    { text: 'Four', cols: 1, rows: 1, color: '#DDBDF1' }
  ];
}

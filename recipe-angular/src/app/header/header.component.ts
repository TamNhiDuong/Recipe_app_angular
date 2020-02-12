import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() userSelect = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe() {
    this.userSelect.emit('recipe')
  }

  onSelectShopping() {
    this.userSelect.emit('shoppingList')
  }

}

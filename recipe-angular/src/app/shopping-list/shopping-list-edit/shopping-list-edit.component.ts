import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() shoppingItemAdded= new EventEmitter<{nameInput: string, quantityInput: number}>();

  constructor() { }

  ngOnInit() {
  }

  onAdd(name: HTMLInputElement, quantity: HTMLInputElement) {
    this.shoppingItemAdded.emit({
      nameInput: name.value,
      quantityInput: Number(quantity.value)
    })
  }

}

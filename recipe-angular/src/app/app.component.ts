import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-angular';
  nav: string = 'recipe';

  selectedNav(userSelect: string) {
    if(userSelect === 'recipe') {
      this.nav = 'recipe';
    }
    else if (userSelect === 'shoppingList') {
      this.nav = 'shoppingList'
    }
  }
}

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  addFormIsOpen: boolean = false;

  addTodo(){
    
  }

  toggleForm() {
    if (!this.addFormIsOpen) {
      this.addFormIsOpen = !this.addFormIsOpen;
    }
  }


}

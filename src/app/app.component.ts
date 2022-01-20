import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo';

  filter: 'all' | "active" | 'done' = "all";

  allItems= [
    { description: "eat", done: true },
    { description: "play", done: true },
    { description: "laugh", done: false },
    { description: "sleep", done: false }
  ]
     
  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    } else {
      return this.allItems.filter((item)=> this.filter === 'done' ? item.done : !item.done)
    }
  }

  addItem(description: string) {
    if (!description) return;
  this.allItems.unshift({
    description,
    done : false
  });
  }

  remove(item: any) {
  this.allItems.splice(this.allItems.indexOf(item), 1);
}


}


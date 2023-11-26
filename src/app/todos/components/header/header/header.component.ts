import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { TodoService } from 'src/app/todos/services/todo.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  todosService = inject(TodoService);
text:string='';

changeText(event:Event):void {
  const target=event.target as HTMLInputElement;
  this.text=target.value
}
addTodo(){
if(!this.text) return;
this.todosService.addTodo(this.text);
this.text='';
}
}
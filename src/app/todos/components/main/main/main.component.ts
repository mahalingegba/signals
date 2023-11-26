import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from 'src/app/todos/services/todo.service';
import { inject } from '@angular/core';
import { FilterEnum } from 'src/app/todos/types/filterenum';
import { TodosComponent } from '../../todos/todos.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,TodosComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  todosService = inject(TodoService);
  editingId:string|null =null;

  visibleTodos= computed(()=>{
  const todosList=this.todosService.todoSign();
  const filter =this.todosService.filterSig();

  if(filter === FilterEnum.active){
    return todosList.filter(todo=>!todo.isCompleted)
  }else if(filter === FilterEnum.completed){
    return todosList.filter(todo=>todo.isCompleted)
  }
  return todosList;
  })

  isAllTodosSelected=computed(()=>this.todosService.todoSign().every((todo)=>todo.isCompleted));


  setEditingid(editingId:any):void{
    this.editingId=editingId;
  }

  toggleAllTodos(event:Event):void{
    const target=event.target as HTMLInputElement
    this.todosService.toggleAllTodo(target.checked)
  }

  toggleAllTodoss(event:Event):void{
  //   let target=false;
  //  let targets=!target
  //   this.todosService.toggleAllTodo(!targets)
  }
}

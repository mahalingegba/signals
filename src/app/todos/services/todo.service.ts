import { Injectable, computed, signal } from '@angular/core';
import { TodoInterface } from '../types/todo-interface';
import { FilterEnum } from '../types/filterenum';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoSign=signal<TodoInterface[]>([]);
  filterSig=signal<FilterEnum>(FilterEnum.all);
 
   

filterChange(filterName:FilterEnum):void{
this.filterSig.set(filterName)
}

changeTodo(id:string,text:string){
  this.todoSign.update((todos:any)=>
  todos.map((todo:any)=>(todo.id === id ? {...todo ,text}:todo)))
}

toggleTodo(id:string){
  this.todoSign.update((todos:any)=>
  todos.map((todo:any)=>todo.id === id ? {...todo ,isCompleted: !todo.isCompleted}:todo))
}

toggleAllTodo(isCompleted:boolean):void{
  this.todoSign.update((todos:any)=>
  todos.map((todo:any)=> ({...todo ,isCompleted})))
}

  addTodo(text:string):void{
   const newTodo:TodoInterface={
    text,
    isCompleted:false,
    id:Math.random().toString(16)
   }
   this.todoSign.update((todo)=>[...todo,newTodo])
  }

  removeTodo(id:string){
    this.todoSign.update((todo)=> todo.filter((todo)=>todo.id !== id));
  }

  noTodos=computed(()=>{ 
    return this.todoSign().length ===0
   })
  constructor() { }
}

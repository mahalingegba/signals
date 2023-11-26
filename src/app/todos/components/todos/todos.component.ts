import { Component,Input ,Output,EventEmitter, inject, ViewChild, ElementRef, SimpleChange, SimpleChanges, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoInterface } from '../../types/todo-interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  @Input({required:true}) todos! :TodoInterface
  @Input({required:true}) isEditing! :boolean;
  @Output() setEditingId:EventEmitter<string|null> = new EventEmitter();
  @ViewChild('textInput') textInput?:ElementRef
   container = document.querySelector('.edit');

  
  editingText:string=''
  todosService = inject(TodoService);
  ngOnInit():void{
    this.editingText=this.todos.text;
  }
  
  changeText(event:Event){
    const value=(event.target as HTMLInputElement).value
    this.editingText=value;
  }

  changeTodo():void{
    this.todosService.changeTodo(this.todos.id,this.editingText)
     this.setEditingId.emit(null);
  }

  setTodoInEditMode(){
    this.setEditingId.emit(this.todos.id)
  }

  removeTodo(todo:any){
    this.todosService.removeTodo(todo.id);
  }

  toggleTodo(){
     this.todosService.toggleTodo(this.todos.id)
  }

  ngOnChanges(changes:SimpleChanges):void{
    if(changes['isEditing'].currentValue){
     setTimeout(()=>{
      this.textInput?.nativeElement.focus()
     },0)
    }

  }
  
}

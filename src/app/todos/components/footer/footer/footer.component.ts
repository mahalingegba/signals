import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from 'src/app/todos/services/todo.service';
import { FilterEnum } from 'src/app/todos/types/filterenum';
import { computeMsgId } from '@angular/compiler';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  todosService = inject(TodoService);
  filter =this.todosService.filterSig;
  filterEnum=FilterEnum
  activeCount=computed(()=>{
    return this.todosService.todoSign().filter((todo)=>!todo.isCompleted).length
      }) 
 
   itemsLeftText=computed(()=>
    `item${this.activeCount() !==1 ?'s':''} left`
   )

  filterChange(event:Event,filterName:FilterEnum){
    event.preventDefault();
    this.todosService.filterChange(filterName);
  }
}

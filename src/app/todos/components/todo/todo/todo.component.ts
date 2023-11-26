import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../header/header/header.component';
import { FooterComponent } from '../../footer/footer/footer.component';
import { MainComponent } from '../../main/main/main.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule,HeaderComponent,FooterComponent,MainComponent],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

}

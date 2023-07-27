import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {

  // emitindo para fora para outro componete que precisa ser utilizado
  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string = "";

  public submitItemTaskList() {
    // eu posso se utilizado no outro componete de lista
    // remove todos os espaços
    this.addItemTaskList = this.addItemTaskList.trim();
    if (this.addItemTaskList) {
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }
}

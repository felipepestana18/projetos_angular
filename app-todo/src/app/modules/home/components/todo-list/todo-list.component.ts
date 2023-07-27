import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {


  ngDoCheck(): void {

    this.setLocalStorate();

  }
  //public taskList: Array<{task: string, checked: boolean}> = [];
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  public deleteItemTaskList(event: number) {
    // deletando o valor é falando que só deletar um
    this.taskList.splice(event, 1);
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false })
    console.log(event);

  }
  public deleteAllTaskList() {
    // deletar todos, só zerar o array
    const confirm = window.confirm("Você deseja mesmo deletar todos");
    if (confirm) {
      this.taskList = [];
    }
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm("Task está vázia, deseja deletar?");
      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorate() {
    // para reorganiza para ordernação
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
      // transformando em string o array
      localStorage.setItem("list", JSON.stringify(this.taskList))
    }
  }
}

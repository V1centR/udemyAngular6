import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  tarefas: Tarefa[];
  constructor( private tarefaService: TarefaService) {}

  ngOnInit() {

  	this.tarefas = this.listarTodos();

  	console.log(":: " + this.tarefas);
  }

  listarTodos(): Tarefa[] {
  	
  	return this.tarefaService.listarTodos();
  }

  remover($event: any,tarefa: Tarefa): void{
    $event.preventDefault();
    if(confirm("Deseja excluir esta tarefa?")){

      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  updateStatus(tarefa: Tarefa): void{

    if(confirm("Deseja atualizar esta tarefa?")){

      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

}

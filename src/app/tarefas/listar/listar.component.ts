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
  	this.tarefas = [

  		new Tarefa(1,"Teste OK 1", true),
      new Tarefa(2,"Teste OK ee323", true),
      new Tarefa(3,"Teste OK edsad", false),
      new Tarefa(4,"Teste OK t5t456", false),
      new Tarefa(5,"Teste OK 4567jkl", true),
  		new Tarefa(6,"Teste OK 21lf", false),

  	];

  	console.log(":: " + this.tarefas);
  }

  listarTodos(): Tarefa[] {
  	
  	return this.tarefaService.listarTodos();
  }

}

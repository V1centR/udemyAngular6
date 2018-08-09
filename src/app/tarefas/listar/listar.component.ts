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

}

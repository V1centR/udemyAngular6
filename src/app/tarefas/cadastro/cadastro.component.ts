import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import {TarefaService, Tarefa} from '../model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

	@ViewChild('formTarefa') formTarefa: NgForm;
	tarefa: Tarefa;
  	constructor(

  	private tarefaService: TarefaService,
  	private router: Router) {}

  ngOnInit() {

  	this.tarefa = new Tarefa();
  }

  cadastrar():void{

  	if(this.formTarefa.form.valid){

  		this.tarefaService.cadastrar(this.tarefa);
  		this.router.navigate(["/tarefas"]);
  	}

  }
}

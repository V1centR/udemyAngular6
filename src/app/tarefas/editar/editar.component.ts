import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {TarefaService, Tarefa} from '../model';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

	@ViewChild('formTarefa') formTarefa: NgForm;
	tarefas: Tarefa[];
  	constructor(
  		private tarefaService: TarefaService,
  		private route: ActivatedRoute,
  		private router: Router

  	) { }

  ngOnInit() {
  }
}

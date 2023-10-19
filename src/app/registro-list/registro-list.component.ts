import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-registro-list',
  templateUrl: './registro-list.component.html',
  styleUrls: ['./registro-list.component.css']
})
export class RegistroListComponent implements OnInit {
  registros!: any[];

  constructor(private registroService: RegistroService) {}

  ngOnInit(): void {
    this.registroService.getRegistros().subscribe(data => {
      this.registros = data;
    });
  }
}


import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { HttpClient } from '@angular/common/http';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit{
  public empleado!: Empleado;

  constructor(private _service: ServiceEmpleados){}

  ngOnInit(): void {
    this._service.getPerfil().then(result =>{
      this.empleado = result.data;
    })
  }
  
}

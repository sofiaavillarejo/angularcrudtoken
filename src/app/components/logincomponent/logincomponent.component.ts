import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrl: './logincomponent.component.css'
})
export class LogincomponentComponent {
  @ViewChild("cajanombre") cajanombre!: ElementRef;
  @ViewChild("cajacont") cajacont!: ElementRef;
  public token: string;

  constructor(private _service: ServiceEmpleados, private _router: Router){
    this.token = ""
  }
  login(): void{
    let nom = this.cajanombre.nativeElement.value;
    let cont = this.cajacont.nativeElement.value;

    console.log(nom,cont);
    let user = new Usuario(nom, cont);
    this._service.getToken(user).then(result => {
      this.token = result;
      localStorage.setItem('token', this.token);
      console.log(this.token);
      
      this._router.navigate(['/perfil']);
    })
  }
}

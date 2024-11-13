import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usuario } from "../models/usuario";
import { environment } from "../../environments/environment.development";
import axios from "axios";
import { Empleado } from "../models/empleado";

@Injectable()
export class ServiceEmpleados {
  constructor(private _http: HttpClient){}

  getToken(user: Usuario): Promise<any>{
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `Bearer ${token}` };
    let request = "auth/login";
    let url = environment.urlApi + request;
    return axios.post(url, user, {headers}).then(response => response.data.response)
  }

  getPerfil(): Promise<any>{
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `Bearer ${token}` };
    let request = "api/perfilempleado";
    let url = environment.urlApi + request;
    return axios.get(url, {headers}).then(response => response.data)
  }
}

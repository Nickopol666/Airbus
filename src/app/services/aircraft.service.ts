import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aircraft } from '../aircraft.model';
import { environment } from '../environnement';
import { Action } from 'rxjs/internal/scheduler/Action';
//import { ActionEvent, AircraftsActionsTypes } from '../aircraft.state';
//import { AppDataState } from '../aircraft.state';



@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  constructor(private http:HttpClient) { }

  public  getAircrafts():Observable<Aircraft[]>{
    let host = Math.random() > 0.1 ? environment.host:environment.unreachableHost;
    return this.http.get<Aircraft[]>(host+"/aircrafts");
  }
  public getDesignedAircrafts():Observable<Aircraft[]>{
    return this.http.get<Aircraft[]>(environment.host+"/aircrafts?design=false");

  }
  public getDeveloppmentAircrafts():Observable<Aircraft[]>{
    return this.http.get<Aircraft[]>(environment.host+"/aircrafts?developpment=true");

  }
  public getAircraftByMsn(id:number):Observable<Aircraft[]>{
    return this.http.get<Aircraft[]>(environment.host+"/aircrafts?id/"+id);
  }
  public onSearch(value:string):Observable<Aircraft[]>{
    return this.http.get<Aircraft[]>(environment.host+"aircrafts?value");
  }
  }


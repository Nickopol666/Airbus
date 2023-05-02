import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aircraft } from '../aircraft.model';
import { environment } from '../environnement';



@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  constructor(private http:HttpClient) { }

  public  getAircrafts():Observable<Aircraft[]>{
    let host = Math.random() > 0.5 ? environment.host:environment.unreachableHost;
    return this.http.get<Aircraft[]>(host+"/aircrafts");
  }
  public getDesignedAircrafts():Observable<Aircraft[]>{
    return this.http.get<Aircraft[]>(environment.host+"/aircrafts?design=false");

  }
  public getDevelopmentAircrafts():Observable<Aircraft[]>{
    return this.http.get<Aircraft[]>(environment.host+"/aircrafts?development=true");

  }
  public getAircraftByMsn(id:number):Observable<Aircraft[]>{
    return this.http.get<Aircraft[]>(environment.host+"/aircrafts?id/"+id);
  }
}

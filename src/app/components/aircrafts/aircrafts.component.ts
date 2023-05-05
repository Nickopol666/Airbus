import { Component, OnInit } from '@angular/core';
import { catchError, map, of, startWith,tap} from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ActionEvent, AircraftsActionsTypes } from 'src/app/aircraft.action';
import { Aircraft } from 'src/app/aircraft.model';
import {  AppDataState, DataStateEnum } from 'src/app/aircraft.state';
import { AircraftService } from 'src/app/services/aircraft.service';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit{

     aircrafts$:Observable<AppDataState<Aircraft[]>> | null=null;
      readonly dataStateEnum = DataStateEnum;
  search: any;



constructor(private aircraftService:AircraftService){}

ngOnInit(): void {
  
}
getAllAircrafts(){
  this.aircrafts$=this.aircraftService.getAircrafts().pipe(
  map(data => ({dataState:DataStateEnum.LOADED,data : data})),
  startWith({dataState : DataStateEnum.LOADING}),
  catchError(err=> of ({dataState : DataStateEnum.ERROR,errorMessage:err.message}))
  );
}
getDesignedAircrafts(){
  this.aircrafts$=this.aircraftService.getDesignedAircrafts().pipe(
  map(data => ({dataState:DataStateEnum.LOADED,data : data})),
  startWith({dataState : DataStateEnum.LOADING}),
  catchError(err=> of ({dataState : DataStateEnum.ERROR,errorMessage:err.message}))
  );
}
getDeveloppmentAircrafts(){
  this.aircrafts$=this.aircraftService.getDeveloppmentAircrafts().pipe(
  map(data => ({dataState:DataStateEnum.LOADED,data : data})),
  startWith({dataState : DataStateEnum.LOADING}),
  catchError(err=> of ({dataState : DataStateEnum.ERROR,errorMessage:err.message}))
  );
}
onActionEvent($event:any){
  console.log("coucou2")
  if($event=="ALL_AIRCRAFTS")this.getAllAircrafts();
  else 
    if($event=="DESIGNED_AIRCRAFTS")this.getDesignedAircrafts();
      else 
        if($event=="DEV_AIRCRAFTS")this.getDeveloppmentAircrafts();
}
onSearch(){
  this.aircrafts$=this.aircraftService.onSearch(value).pipe(
  map(data=>({dataState:DataStateEnum.LOADED,data : data})),
  startWith({dataState: DataStateEnum.LOADING}),
  catchError(err=> of ({dataState: DataStateEnum.ERROR,errorMessage:err.message}))    
  );
  if(map.contains(keyword)){
    getAircrafts();
  }
  }
onActionEventbis($actionEvent : ActionEvent){
  switch($actionEvent.type){
    case AircraftsActionsTypes.GET_ALL_AIRCRAFTS:
    this.getAllAircrafts();
    break;

    case AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS: 
    this.search($actionEvent.payload);
    break;
  }
} 
}
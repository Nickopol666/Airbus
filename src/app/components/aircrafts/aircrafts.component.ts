import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Aircraft } from 'src/app/aircraft.model';
import { AircraftService } from 'src/app/services/aircraft.service';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit{
    
    aircrafts$: Observable<Aircraft[]>| null=null;
    error = null;

constructor(private aircraftService:AircraftService){}

ngOnInit(): void {
  
}
getAllAircrafts(){
  this.aircrafts$=this.aircraftService.getAircrafts()
}
getDesignedAircraftsR(){
  this.aircrafts$=this.aircraftService.getDesignedAircrafts()
 
}
getDevelopmentAircraftsR(){
  this.aircrafts$=this.aircraftService.getDevelopmentAircrafts()
}
getAircraftByMsnR(id:number){
  this.aircrafts$=this.aircraftService.getAircraftByMsn(id)
}
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActionEvent, AircraftsActionsTypes } from 'src/app/aircraft.state';

@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css']
})
export class AircraftsNavbarComponent implements OnInit {
  @Output() eventEmitter : EventEmitter<any>= new EventEmitter();

constructor(){}

ngOnInit(): void {
  
}

/* getAllAircrafts(){
  this.eventEmitter.emit("ALL_AIRCRAFTS");
  console.log("coucou1")
} */
getDesignedAircrafts(){
  this.eventEmitter.emit("DESIGNED_AIRCRAFTS");
}
getDevelopmentAircrafts(){
  this.eventEmitter.emit("DEV_AIRCRAFTS");
}
getAllAircrafts(){
  this.eventEmitter.emit({type : AircraftsActionsTypes.GET_ALL_AIRCRAFTS,payload : null});
}
onSearch(value : any){
  this.eventEmitter.emit({type:AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS,payload : value});

}
}

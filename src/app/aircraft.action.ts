export interface ActionEvent{
    type : AircraftsActionsTypes,
    payload: any
}
export enum AircraftsActionsTypes{
    GET_ALL_AIRCRAFTS="[Aircrafts] Get All Aircrafts",
    GET_DESIGNED_AIRCRAFTS="[Aircrafts] Get Designed Aircrafts",
    GET_DEVELOPMENT_AIRCRAFTS="[Aircrafts] get developed aircrafts",
    GET_SEARCH_AIRCRAFTS="[Aircrafts] Get Search Aircrafts"
}
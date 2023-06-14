import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HotelManagementService } from '../hotel-management.service';
import { IHotelManagement } from '../HotelManagement';

@Component({
  selector: 'app-api-consuption',
  templateUrl: './api-consuption.component.html',
  styleUrls: ['./api-consuption.component.css']
})
export class ApiConsuptionComponent implements OnInit {
  public hotel: IHotelManagement[] = [];
  deletedId:number=0;
  id:number=0

  newHotel: IHotelManagement = {
    name: '',
    rating: '',
    location: ''
  };
  uHotel: IHotelManagement = {
    name: '',
    rating: '',
    location: ''
  }


  constructor(private _minservice:HotelManagementService,private cdr: ChangeDetectorRef){}
  ngOnInit() {
    this.getHotelDetails();
  }
  getHotelDetails() {
    this._minservice.getHotelDetails().subscribe(data => {
      this.hotel = data;
      this.cdr.detectChanges(); // Trigger change detection after updating the data
    });
  }
  delete(){
    this._minservice.deleteRoom(this.deletedId).subscribe(data => {alert("Hotel Deleted")});
  }
  addNewHotel(){
    this._minservice.addRoom(this.newHotel).subscribe(hotel => {alert("Hotel Room Added")});
  }
  updateHotel(){
    this._minservice.updateRoom(this.id,this.uHotel).subscribe((data) => {alert("Data Updated")});
  }
  showInputField = false;
  showAddFields = false;
  showUpdateFields = false;
  openInputField() {
    this.showInputField = true;
  }
  openAddFields() {
    this.showAddFields = true;
  }
  openUpdateFields() {
    this.showUpdateFields = true;
  }
}

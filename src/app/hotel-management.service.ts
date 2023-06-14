import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHotelManagement } from './HotelManagement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelManagementService {
  private url="https://localhost:7218/api/HotelManagement";
  constructor(private http:HttpClient) { }

  getHotelDetails():Observable<IHotelManagement[]>{
    return this.http.get<IHotelManagement[]>(this.url);
  }

  addRoom(hotel: IHotelManagement): Observable<IHotelManagement> {
    return this.http.post<IHotelManagement>(this.url, hotel);
  }

  getRoomById(id: number): Observable<IHotelManagement> {
    let dataurl: string = `${this.url}/${id}`;
    return this.http.get<IHotelManagement>(dataurl)
  }
  deleteRoom(id: number): Observable<IHotelManagement> {
    let dataurl: string = `${this.url}/${id}`;
    return this.http.delete<IHotelManagement>(dataurl)
  }

  updateRoom(id: number, movie: IHotelManagement): Observable<IHotelManagement> {
    let dataurl: string = `${this.url}/${id}`;
    return this.http.put<IHotelManagement>(dataurl, movie);
  }
}



// export class MoviesService {

//   
//   
//   

//   //Register and Login User
//   registerUser(reg: IRegisterUser): Observable<IRegisterUser> {
//     let dataurl2: string = `https://localhost:7081/api/Auth/register`;
//     return this.http.post<IRegisterUser>(dataurl2, reg);
//   }
//   loginUser(log: ILoginUser): Observable<ILoginUser> {
//     let dataurl2: string = `https://localhost:7081/api/Auth/login`;
//     return this.http.post<ILoginUser>(dataurl2, log);
//   }
// }
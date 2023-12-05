import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { searchBusDetails } from './search-buses/searchBusDetails';
import { userInforRequest } from './user-info/userInforRequest';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  seatName: any;
  totalFare: any;

  constructor(private http: HttpClient) { }
  private productListURL = "http://localhost:3000/product-list"

  getProductList() {
    return this.http.get<any>(this.productListURL);
  }

  getProductById(id: string) {
    return this.http.get<any>(`http://localhost:3000/product-list/${id}`)
  }

  private busListURL = "http://localhost:3000/Bus-list"
  getBusList() {
    return this.http.get<any>(this.busListURL);

  }

  getBusWithDate(from: any, to: any, date: any) {
    return this.http.get<any>(`http://localhost:3000/Bus-list?leavingOn=${from}&GoingTo=${to}&date=${date}`);
  }

  getBusSeatsById(id: string) {
    return this.http.get<any>(`http://localhost:3000/Bus-list/${id}`)
  }

  userInfoService(userInfo: userInforRequest) {
    return this.http.post<any>(`http://localhost:3000/user-list`, userInfo)
  }

  getUserById(mobile: string) {
    return this.http.get<any>(`http://localhost:3000/user-list/${mobile}`)
  }

  setSeatName(seat: any) {
    this.seatName = seat;
  }

  getSeatName() {
    return this.seatName;
  }

  setTotalfare(fare: any) {
    this.totalFare = fare;
  }

  getTotalfare() {
    return this.totalFare;
  }

}

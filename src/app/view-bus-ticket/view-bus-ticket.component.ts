import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { BusDetails } from '../search-buses/BusDetails';
import { userInforRequest } from '../user-info/userInforRequest';
import { HttpParams } from '@angular/common/http';
import { SeatList } from '../select-seats/SeatList';

@Component({
  selector: 'app-view-bus-ticket',
  templateUrl: './view-bus-ticket.component.html',
  styleUrls: ['./view-bus-ticket.component.scss']
})
export class ViewBusTicketComponent implements OnInit {

  busDetails: BusDetails = new BusDetails();
  userInfo: userInforRequest = new userInforRequest();
  mobile: any;
  user: any;
  mail: any;
  data: any;
  seatName: any;
  fare: any;
  seats: SeatList[]=[];


  constructor(private route: ActivatedRoute, private service: ProductServiceService) {

  }
  ngOnInit(): void {

    this.route.params.subscribe(data => {
      const id = data['id'];
      this.mobile = data['mobile'];
      this.user = data['userName'];
      this.mail = data['email']
      this.getBusDetails(id);
      // this.getUserDetails(mobile)
    });
    this.getSeat();
    this.getFare()
  }
  getSeat() {
    this.seats = this.service.getSeatName()
    
    console.log("seat name  :", this.seats)
  }
  getFare() {
    this.fare = this.service.getTotalfare()
    console.log("fare  :", this.fare)

  }
  getUserDetails(mobile: any) {
    this.service.getUserById(mobile).subscribe((response) => {
      this.userInfo = response
      console.log(this.userInfo);
    })
  }

  getBusDetails(id: any) {
    this.service.getBusSeatsById(id).subscribe((response) => {
      console.log(response);
      this.busDetails = response
    })

  }
}

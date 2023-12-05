import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { searchBusDetails } from '../search-buses/searchBusDetails';
import { BusDetails } from '../search-buses/BusDetails';
interface Seat {
  fare: any;
  id: string;
  name: string;
  class: string;
  isSeatSelected: boolean;
}

@Component({
  selector: 'app-select-seats',
  templateUrl: './select-seats.component.html',
  styleUrls: ['./select-seats.component.scss']
})
export class SelectSeatsComponent implements OnInit {
  selectSeatName!: string
  selectBusDetails: BusDetails = new BusDetails();
  selectClass!: string
  rows: any[] = [];
  recordIndexToRemove!: null;
  recordToRemove: any;
  isSeatSelected = false;
  totalFare: any;
  seatObject: any;
  fare: any;
  total: any;
  show!: boolean;
  fee: any;



  constructor(private route: ActivatedRoute, private service: ProductServiceService, private router: Router) {

  }

  ngOnInit(): void {
    this.show = false
    this.price();

  }

  seats: { id: number; nameA: string; nameB: string; class: string }[] = [
    { id: 1, nameA: 'A1', nameB: 'B1', class: 'Economy' },
    { id: 2, nameA: 'A2', nameB: 'B2', class: 'Economy' },
    { id: 3, nameA: 'A3', nameB: 'B3', class: 'Economy' },
    { id: 4, nameA: 'A4', nameB: 'B4', class: 'Economy' },
    { id: 5, nameA: 'A5', nameB: 'B5', class: 'Economy' },
    { id: 6, nameA: 'A6', nameB: 'B6', class: 'Business' },
    { id: 7, nameA: 'A7', nameB: 'B7', class: 'Business' },
    { id: 8, nameA: 'A8', nameB: 'B8', class: 'Business' },
  ];

  seats2: { id: number; nameC: string; nameD: string, class: string }[] = [
    { id: 9, nameC: 'C1', nameD: 'D1', class: 'Economy' },
    { id: 10, nameC: 'C2', nameD: 'D2', class: 'Economy' },
    { id: 11, nameC: 'C3', nameD: 'D3', class: 'Economy' },
    { id: 12, nameC: 'C4', nameD: 'D4', class: 'Economy' },
    { id: 13, nameC: 'C5', nameD: 'D5', class: 'Economy' },
    { id: 14, nameC: 'C6', nameD: 'D6', class: 'Business' },
    { id: 15, nameC: 'C7', nameD: 'D7', class: 'Business' },
    { id: 16, nameC: 'C8', nameD: 'D8', class: 'Business' },

  ];

  isRowVisible = false;
  nextId: number = 1;

  selectedSeats: Seat[] = [];

  bookSeat(name: any, type: any, id: any) {

    const seatObject: Seat = {
      id: id,
      name: name,
      class: this.getSeatClass(name),
      isSeatSelected: false,
      fare: undefined
    };
    this.toggleSeatInColumn(seatObject, this.selectedSeats);
  }

  toggleSeatInColumn(seat: Seat, selectedSeats: Seat[]) {
    const isSelected = this.isSelected(seat, selectedSeats);

    if (isSelected) {
      this.removeSeat(seat, selectedSeats);
    } else {
      this.addSeat(seat, selectedSeats);
    }
  }


  addSeat(seat: Seat, selectedSeats: Seat[]) {
    if (!this.isSelected(seat, selectedSeats)) {
      this.show = true
      this.price();
      selectedSeats.push(seat);

    //service call for set seat name
      this.service.setSeatName(this.selectedSeats);
    }
  }

  removeSeat(seat: Seat, selectedSeats: Seat[]) {
    const index = selectedSeats.findIndex(selectedSeat => selectedSeat.name === seat.name);
    if (index !== -1) {
      selectedSeats.splice(index, 1);
    }
  }

  isSelected(seat: Seat, selectedSeats: Seat[]): boolean {
    console.log(seat.name);

    this.isSeatSelected = !selectedSeats.some(selectedSeats => selectedSeats.name === seat.name);
    console.log(this.isSeatSelected);

    return selectedSeats.some(selectedSeat => selectedSeat.name === seat.name);

  }

  getSeatClass(seat: string): string {
    // You can implement your logic to determine the class based on the seat number
    // For example, assuming seat numbers like '1A' are Economy and '2A' are Business
    return seat.startsWith('A') ? 'Economy' : 'Business';
  }

  colorSeat(seat: string) {
    (document.getElementById(seat) as HTMLElement).style.color = "rgb(232, 240, 254)";

  }

  price() {
    this.route.params.subscribe(data => {
      console.log(data)
      const id = data['id'];

      this.service.getBusSeatsById(id).subscribe((response) => {
        console.log(response);
        this.selectBusDetails = response

        this.fare = this.selectBusDetails.fare;
      })
    })
  }



  calculateTotalFare() {
    console.log(this.selectedSeats.length);

    this.fee = this.selectedSeats.length * this.fare

    //service call for set total fare
    this.service.setTotalfare( this.fee);

    return this.fee;



  }


}
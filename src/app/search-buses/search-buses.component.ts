import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';
import { BusDetails } from './BusDetails';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe, formatDate } from '@angular/common';
import { searchBusDetails } from './searchBusDetails';

@Component({
  selector: 'app-search-buses',
  templateUrl: './search-buses.component.html',
  styleUrls: ['./search-buses.component.scss'],
  providers: [DatePipe]

})
export class SearchBusesComponent implements OnInit {

  table!: boolean
  busList: BusDetails[] = []
  simpleForm: FormGroup;
  submitted = false;

  searchBus: searchBusDetails = new searchBusDetails();
  busDataList: any;

  // departingOn!: string | number | Date;

  constructor(private service: ProductServiceService, private router: Router, private formBuilder: FormBuilder, private datePipe: DatePipe) {
    this.simpleForm = this.formBuilder.group({
      'leavingOn': new FormControl("", Validators.required),
      'goingTo': new FormControl("", Validators.required),
      'departingOn': new FormControl("", Validators.required),

    });
  }

  // this.form = this.formBuilder.group({
  //   'id': new FormControl('', Validators.required),
  //   'firstName': new FormControl('', Validators.required),
  //   'lastName': new FormControl('', Validators.required)
  // });


  ngOnInit(): void {
    // this.getAllBusList()
    this.table = false
  }

  get f() {
    return this.simpleForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.simpleForm.invalid) {
      return;
    }
    console.log(this.simpleForm.value);

    const dateValue = this.simpleForm.get('departingOn')?.value;
    const formattedDate = this.datePipe.transform(dateValue, 'dd/MM/yyyy');

    const from = this.simpleForm.get('leavingOn')?.value;
    const to = this.simpleForm.get('goingTo')?.value;

    this.searchBus.leavingOn = from;
    this.searchBus.goingTo = to
    this.searchBus.departingOn = dateValue
    console.log(formattedDate);
    this.service.getBusWithDate(from, to, formattedDate).subscribe(data => {
      console.log(data);
      this.busDataList = data;

      if (this.busDataList != 0) {
        this.table = true
        this.busList = this.busDataList

      }
      else {
        this.table = false
        console.log("empty record")
      }

    })

  }
  getAllBusList() {
    this.service.getBusList().subscribe(data => {
      console.log(data);
      this.busList = data;
    })

    // getBusWithDate(){
    //   const dateValue = this.simpleForm.get('dateControl').value;

    //   this.service.getBusWithDate().subscribe(data => {
    //     console.log(data);
    //   })
    // }


  }




}

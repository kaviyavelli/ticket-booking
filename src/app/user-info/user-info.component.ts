import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { BusDetails } from '../search-buses/BusDetails';
import { userInforRequest } from './userInforRequest';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  providers: [DatePipe]
})
export class UserInfoComponent implements OnInit {
  userForm!: FormGroup;
  submitted = false;
  busDetails: BusDetails = new BusDetails();
  userInfo: userInforRequest = new userInforRequest();
  mobNum: any;
  constructor(private service: ProductServiceService, private router: Router, private formBuilder: FormBuilder, private datePipe: DatePipe, private route: ActivatedRoute) {
    this.userForm = this.formBuilder.group({
      'userName': new FormControl("", Validators.required),
      'email': new FormControl("", [Validators.required, Validators.email]),
      'mobile': new FormControl("", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),

    });
  }
  ngOnInit(): void {
   

    this.getBusInfo();
  }
  getBusInfo() {
    this.route.params.subscribe((data: any) => {
      console.log(data)
      const id = data['id'];

      this.service.getBusSeatsById(id).subscribe((response) => {
        console.log(response);
        this.busDetails = response;
      })
    })
  }
  get f() {
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    console.log(this.userForm.value);

    this.service.userInfoService(this.userForm.value).subscribe(data => {
      console.log(data);
      this.userInfo = data
      this.router.navigate(['/viewBusTicket', this.busDetails.id,this.userInfo.userName,this.userInfo.mobile,this.userInfo.email])

    })


  }


}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, from, fromEvent, interval, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.scss']
})
export class RxjsLearningComponent implements OnInit {

  // 1. observable
  agents!: Observable<string>;

  // 2. of operator
  studentList = ['Kaviya', 'Shobana', 'Pavithra'];
  students: Observable<string[]> = of(this.studentList);
  student$: Observable<string> = of("Kaviya");

  studentObj = {
    "id": 1,
    "Name": "Kaviya"
  }

  studentObj$: Observable<object> = of(this.studentObj)

  //3. from operator
  orderList = ['ice cream', 'biriyani', 'furit juice', 'fast food']
  orders: Observable<string> = from(this.orderList);
  orderNames!: string;

  // 4. from event

  @ViewChild('btn')
  btn!: ElementRef;

  @ViewChild('getLink')
  getLink!: ElementRef;


  // 5. interval operator

  foodList = ['Dosa', 'Idly', 'parota', 'Fried Rice'];
  foods: Observable<string> = from(this.foodList);


  constructor() {

  }
  agentName: any

  ngOnInit(): void {

    // 1. observable start
    this.agents = new Observable(
      function agent(observer) {
        try {
          observer.next("Kaviya");
          setInterval(() => {
            observer.next("Shobana");
          }, 3000)
          setInterval(() => {
            observer.next("Pavithra");
          }, 6000)

        }
        catch (e) {
          observer.error(e);
        }
      }
    )

    this.agents.subscribe(data => {
      this.agentName = data;
      console.log(this.agentName)
    })

    // 2. of operator

    this.students.subscribe(data => {
      console.log(data)
    })

    this.student$.subscribe(data => {
      console.log(data);

    })

    this.studentObj$.subscribe(data => {
      console.log(data);
    })

    // 3. from operator

    this.orders.subscribe(data => {
      console.log(data);
    })

    this.orders.subscribe(data => {
      this.orderNames = data
      console.log(this.orderNames)
    })


    // 5. Interval operator

    this.foods.subscribe(data => {
      const timeDelay = interval(5000); 

      timeDelay.subscribe(count => {
        if (count < 5) {
          console.log(data + " " + count);
        }
      })


    })


  }
  // 4. from event operator
  btnEvent() {
    const btnObservable$ = fromEvent(this.btn.nativeElement, 'click');

    btnObservable$.subscribe(data => {
      console.log(data)
    })
  }

  linkObservable() {
    const link$ = fromEvent(this.getLink.nativeElement, 'mouseover');

    link$.subscribe(data => {
      console.log(data);
    })
  }


}
